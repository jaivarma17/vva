(function () {
  var hero = document.querySelector(".home-hero-slideshow");
  var image = document.getElementById("home-hero-image");
  var imageLink = document.getElementById("home-hero-link");
  var previous = document.getElementById("home-hero-prev");
  var next = document.getElementById("home-hero-next");
  var toggle = document.getElementById("home-hero-toggle");
  var count = document.getElementById("home-hero-count");
  var progress = document.getElementById("home-hero-progress-fill");
  if (!hero || !image || !imageLink || !previous || !next || !toggle || !count || !progress) return;

  var slides = [
    { id: "golf-academy-aamby", title: "Golf Academy & Club", image: "assets/img/home-hero/golf-academy-aamby.jpg" },
    { id: "machaan-aamby-valley", title: "Machaan, Aamby Valley", image: "assets/img/home-hero/machaan-aamby-valley.jpg" },
    { id: "burmese-chalet-aamby-valley", title: "Burmese Chalet, Aamby Valley", image: "assets/img/home-hero/burmese-chalet-aamby-valley.jpg" },
    { id: "golf-academy-ansals", title: "Golf Academy, Ansals", image: "assets/img/home-hero/golf-academy-ansals.jpg" },
    { id: "starter-hut-garry-player-dlf", title: "Starter Hut, DLF", image: "assets/img/home-hero/starter-hut-garry-player-dlf.jpg" }
  ];

  var interval = 7000;
  var current = 0;
  var timer = null;
  var transitionId = 0;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var playing = !reduceMotion;
  var pixelCanvas = document.createElement("canvas");
  var pixelContext = pixelCanvas.getContext("2d");
  var pixelFrame = 0;
  var imageReady = image.complete && image.naturalWidth > 0;
  pixelCanvas.className = "home-hero-pixel-canvas";
  pixelCanvas.setAttribute("aria-hidden", "true");
  if (pixelContext && !reduceMotion) hero.appendChild(pixelCanvas);
  if (imageReady && window.cleanPhotoImage) {
    image.src = window.cleanPhotoImage(image).src;
    image.dataset.photoSource = slides[0].image;
  }

  function pad(number) { return number < 10 ? "0" + number : String(number); }

  function clearTimer() {
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }
  }

  function preload(index) {
    var preloadImage = new Image();
    preloadImage.decoding = "async";
    preloadImage.src = slides[(index + slides.length) % slides.length].image;
  }

  function drawPixelated(source, blockSize) {
    var bounds = hero.getBoundingClientRect();
    var width = Math.max(1, Math.ceil(bounds.width / blockSize));
    var height = Math.max(1, Math.ceil(bounds.height / blockSize));
    if (pixelCanvas.width !== width || pixelCanvas.height !== height) {
      pixelCanvas.width = width;
      pixelCanvas.height = height;
    }

    var sourceWidth = source.naturalWidth || source.width;
    var sourceHeight = source.naturalHeight || source.height;
    var sourceRatio = sourceWidth / sourceHeight;
    var canvasRatio = width / height;
    var sourceX = 0;
    var sourceY = 0;
    var sourceCropWidth = sourceWidth;
    var sourceCropHeight = sourceHeight;
    if (sourceRatio > canvasRatio) {
      sourceCropWidth = sourceHeight * canvasRatio;
      sourceX = (sourceWidth - sourceCropWidth) / 2;
    } else {
      sourceCropHeight = sourceWidth / canvasRatio;
      sourceY = (sourceHeight - sourceCropHeight) / 2;
    }

    pixelContext.imageSmoothingEnabled = false;
    pixelContext.clearRect(0, 0, width, height);
    pixelContext.drawImage(source, sourceX, sourceY, sourceCropWidth, sourceCropHeight, 0, 0, width, height);
  }

  function cancelPixelTransition() {
    if (pixelFrame) {
      window.cancelAnimationFrame(pixelFrame);
      pixelFrame = 0;
    }
    pixelCanvas.style.display = "none";
    pixelCanvas.style.opacity = "0";
    image.classList.remove("is-pixel-transition");
    image.style.removeProperty("opacity");
  }

  function pixelTransition(nextImage, nextSrc, nextSlideSource, currentTransition) {
    var outgoingImage = image;
    var startedAt = 0;
    var swapped = false;
    var duration = 1800;
    var halfDuration = duration / 2;
    image.classList.add("is-visible", "is-pixel-transition");
    image.style.opacity = "1";
    pixelCanvas.style.display = "block";
    pixelCanvas.style.opacity = "0";

    function animate(timestamp) {
      if (currentTransition !== transitionId) return;
      if (!startedAt) startedAt = timestamp;
      var elapsed = Math.min(timestamp - startedAt, duration);
      var progress;
      var blockSize;
      var source;

      if (elapsed < halfDuration) {
        progress = elapsed / halfDuration;
        blockSize = 1 + Math.floor(progress * 17);
        source = outgoingImage;
        image.style.opacity = String(1 - progress);
        pixelCanvas.style.opacity = String(progress);
      } else {
        if (!swapped) {
          image.src = nextSrc;
          image.dataset.photoSource = nextSlideSource;
          image.alt = "";
          image.style.opacity = "0";
          swapped = true;
        }
        progress = Math.min((elapsed - halfDuration) / halfDuration, 1);
        blockSize = 18 - Math.floor(progress * 17);
        source = nextImage;
        image.style.opacity = String(progress);
        pixelCanvas.style.opacity = String(1 - progress);
      }

      drawPixelated(source, blockSize);
      if (elapsed < duration) {
        pixelFrame = window.requestAnimationFrame(animate);
        return;
      }

      image.classList.add("is-visible");
      cancelPixelTransition();
      imageReady = true;
    }

    pixelFrame = window.requestAnimationFrame(animate);
  }

  function show(index) {
    cancelPixelTransition();
    current = (index + slides.length) % slides.length;
    var currentTransition = ++transitionId;
    var slide = slides[current];
    var shouldPixelate = pixelContext && imageReady && image.classList.contains("is-visible") && !reduceMotion;
    imageLink.href = "projects.html?project=" + encodeURIComponent(slide.id);
    imageLink.setAttribute("aria-label", "View " + slide.title + " project gallery");
    count.textContent = pad(current + 1) + " / " + pad(slides.length);
    preload(current + 1);
    schedule();

    if ((image.dataset.photoSource === slide.image || image.getAttribute("src") === slide.image) && image.complete && image.naturalWidth) {
      image.classList.add("is-visible");
      imageReady = true;
      return;
    }

    var nextImage = new Image();
    nextImage.decoding = "async";
    nextImage.onload = function () {
      if (currentTransition !== transitionId) return;
      var displayImage = window.cleanPhotoImage ? window.cleanPhotoImage(nextImage) : { image: nextImage, src: nextImage.src };
      if (shouldPixelate) {
        pixelTransition(displayImage.image, displayImage.src, slide.image, currentTransition);
        return;
      }
      image.onload = function () {
        if (currentTransition === transitionId) {
          image.classList.add("is-visible");
          image.dataset.photoSource = slide.image;
          imageReady = true;
        }
        image.onload = null;
      };
      image.src = displayImage.src;
      image.dataset.photoSource = slide.image;
      image.alt = "";
      if (image.complete && image.naturalWidth) {
        image.classList.add("is-visible");
        imageReady = true;
      }
    };
    nextImage.onerror = function () {
      if (currentTransition === transitionId) {
        console.error("Could not load homepage hero image: " + slide.image);
      }
    };
    nextImage.src = slide.image;
    if (nextImage.complete && nextImage.naturalWidth) nextImage.onload();
  }

  function schedule() {
    clearTimer();
    progress.classList.remove("is-running");
    if (!playing || document.hidden || slides.length < 2) return;
    void progress.offsetWidth;
    progress.classList.add("is-running");
    timer = window.setTimeout(function () { show(current + 1); }, interval);
  }

  function setPlaying(state) {
    playing = state;
    toggle.textContent = playing ? "Pause" : "Play";
    toggle.setAttribute("aria-label", playing ? "Pause slideshow" : "Play slideshow");
    schedule();
  }

  previous.addEventListener("click", function () { show(current - 1); });
  next.addEventListener("click", function () { show(current + 1); });
  toggle.addEventListener("click", function () { setPlaying(!playing); });
  var touchStart = null;
  hero.addEventListener("touchstart", function (event) {
    var touch = event.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY };
  }, { passive: true });
  hero.addEventListener("touchend", function (event) {
    if (!touchStart) return;
    var touch = event.changedTouches[0];
    var deltaX = touch.clientX - touchStart.x;
    var deltaY = touch.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    event.preventDefault();
    show(current + (deltaX < 0 ? 1 : -1));
  }, { passive: false });
  document.addEventListener("visibilitychange", schedule);

  show(0);
  setPlaying(playing);
})();