(function () {
  var imageCache = Object.create(null);

  window.cleanPhotoImage = function (image) {
    var src = image.currentSrc || image.src;
    if (imageCache[src]) return imageCache[src];

    var width = image.naturalWidth;
    var height = image.naturalHeight;
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext("2d", { willReadFrequently: true });
    context.drawImage(image, 0, 0);

    var pixels = context.getImageData(0, 0, width, height);
    var imageChanged = false;
    if (src.indexOf("/assets/img/projects/ppt-slides/") !== -1) {
      var edgeScanLimit = Math.max(1, Math.ceil(width * 2 / 254));
      function isBlackBandRow(y) {
        var samples = 0;
        var black = 0;
        for (var x = 0; x < width; x += 4) {
          var pixel = (y * width + x) * 4;
          if (pixels.data[pixel] < 18 && pixels.data[pixel + 1] < 18 && pixels.data[pixel + 2] < 18) black += 1;
          samples += 1;
        }
        return black / samples >= 0.98;
      }

      function isNeutralBandRow(y) {
        var samples = 0;
        var neutral = 0;
        for (var x = 0; x < width; x += 4) {
          var pixel = (y * width + x) * 4;
          var red = pixels.data[pixel];
          var green = pixels.data[pixel + 1];
          var blue = pixels.data[pixel + 2];
          var lightest = Math.max(red, green, blue);
          var darkest = Math.min(red, green, blue);
          if (lightest - darkest <= 22 && lightest >= 30 && darkest <= 250) neutral += 1;
          samples += 1;
        }
        return neutral / samples >= 0.94;
      }

      function findNeutralBand(start, direction, limit) {
        var bandSize = 0;
        var pendingRows = 0;
        for (var offset = 0; offset < limit; offset += 1) {
          if (isNeutralBandRow(start + offset * direction)) {
            bandSize += pendingRows + 1;
            pendingRows = 0;
          } else {
            pendingRows += 1;
            if (pendingRows > 2) break;
          }
        }
        return bandSize;
      }

      var edgeBandLimit = Math.floor(height * 0.3);
      var topStart = 0;
      var bottomStart = height - 1;
      var topEdgeRows = 0;
      var bottomEdgeRows = 0;
      while (topEdgeRows < edgeScanLimit && isBlackBandRow(topStart)) {
        topStart += 1;
        topEdgeRows += 1;
      }
      while (bottomEdgeRows < edgeScanLimit && isBlackBandRow(bottomStart)) {
        bottomStart -= 1;
        bottomEdgeRows += 1;
      }
      var topBand = findNeutralBand(topStart, 1, edgeBandLimit);
      var bottomBand = findNeutralBand(bottomStart, -1, edgeBandLimit);

      if (topBand + bottomBand < height * 0.55) {
        if (topBand || bottomBand) {
          context.fillStyle = "#fff";
          context.fillRect(0, topStart, width, topBand);
          context.fillRect(0, bottomStart - bottomBand + 1, width, bottomBand);
          pixels = context.getImageData(0, 0, width, height);
          imageChanged = true;
        }
      }

      var pixelCount = width * height;
      var queued = new Uint8Array(pixelCount);
      var queue = new Int32Array(pixelCount);
      var queueStart = 0;
      var queueEnd = 0;
      function enqueueBackgroundPixel(index) {
        if (queued[index]) return;
        queued[index] = 1;
        queue[queueEnd] = index;
        queueEnd += 1;
      }
      for (var edgeX = 0; edgeX < width; edgeX += 1) {
        enqueueBackgroundPixel(edgeX);
        enqueueBackgroundPixel((height - 1) * width + edgeX);
      }
      for (var edgeY = 1; edgeY < height - 1; edgeY += 1) {
        enqueueBackgroundPixel(edgeY * width);
        enqueueBackgroundPixel(edgeY * width + width - 1);
      }
      while (queueStart < queueEnd) {
        var backgroundPixel = queue[queueStart];
        queueStart += 1;
        var backgroundOffset = backgroundPixel * 4;
        var backgroundRed = pixels.data[backgroundOffset];
        var backgroundGreen = pixels.data[backgroundOffset + 1];
        var backgroundBlue = pixels.data[backgroundOffset + 2];
        var brightest = Math.max(backgroundRed, backgroundGreen, backgroundBlue);
        var darkest = Math.min(backgroundRed, backgroundGreen, backgroundBlue);
        if (brightest < 210 || brightest - darkest > 24) continue;

        pixels.data[backgroundOffset] = 255;
        pixels.data[backgroundOffset + 1] = 255;
        pixels.data[backgroundOffset + 2] = 255;
        var backgroundX = backgroundPixel % width;
        if (backgroundX > 0) enqueueBackgroundPixel(backgroundPixel - 1);
        if (backgroundX + 1 < width) enqueueBackgroundPixel(backgroundPixel + 1);
        if (backgroundPixel >= width) enqueueBackgroundPixel(backgroundPixel - width);
        if (backgroundPixel + width < pixelCount) enqueueBackgroundPixel(backgroundPixel + width);
      }
      context.putImageData(pixels, 0, 0);
      pixels = context.getImageData(0, 0, width, height);
      imageChanged = true;
    }

    var maxBorder = Math.max(1, Math.ceil(width * 2 / 254));
    var minRightTrim = Math.min(width - 1, Math.max(1, Math.ceil(width * 2 / 254)));
    var minBottomTrim = Math.min(height - 1, Math.max(1, Math.ceil(height * 2 / 254)));
    var crop = { left: 0, top: 0, right: 0, bottom: 0 };
    function blackRatio(startX, startY, stepX, stepY, count) {
      var blackPixels = 0;
      for (var i = 0; i < count; i += 1) {
        var pixel = ((startY + i * stepY) * width + startX + i * stepX) * 4;
        if (pixels.data[pixel] < 18 && pixels.data[pixel + 1] < 18 && pixels.data[pixel + 2] < 18) {
          blackPixels += 1;
        }
      }
      return blackPixels / count;
    }

    while (crop.left < maxBorder && blackRatio(crop.left, 0, 0, 1, height) >= 0.98) crop.left += 1;
    while (crop.right < maxBorder && blackRatio(width - crop.right - 1, 0, 0, 1, height) >= 0.98) crop.right += 1;
    while (crop.top < maxBorder && blackRatio(0, crop.top, 1, 0, width) >= 0.98) crop.top += 1;
    while (crop.bottom < maxBorder &&
      blackRatio(0, height - crop.bottom - 1, 1, 0, width) >= 0.98) crop.bottom += 1;
    crop.right = Math.max(crop.right, minRightTrim);
    crop.bottom = Math.max(crop.bottom, minBottomTrim);

    if (crop.left + crop.right + crop.top + crop.bottom) {
      var croppedWidth = width - crop.left - crop.right;
      var croppedHeight = height - crop.top - crop.bottom;
      if (croppedWidth > 0 && croppedHeight > 0) {
        var croppedCanvas = document.createElement("canvas");
        croppedCanvas.width = croppedWidth;
        croppedCanvas.height = croppedHeight;
        croppedCanvas.getContext("2d").drawImage(
          canvas,
          crop.left,
          crop.top,
          croppedWidth,
          croppedHeight,
          0,
          0,
          croppedWidth,
          croppedHeight
        );
        canvas = croppedCanvas;
        imageChanged = true;
      }
    }

    imageCache[src] = imageChanged
      ? { image: canvas, src: canvas.toDataURL("image/jpeg", 1) }
      : { image: image, src: src };
    return imageCache[src];
  };
})();
