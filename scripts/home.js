(function () {
  var hero = document.querySelector(".home-hero-slideshow");
  var image = document.getElementById("home-hero-image");
  var imageLink = document.getElementById("home-hero-link");
  var previous = document.getElementById("home-hero-prev");
  var next = document.getElementById("home-hero-next");
  var toggle = document.getElementById("home-hero-toggle");
  var count = document.getElementById("home-hero-count");
  var progress = document.getElementById("home-hero-progress-fill");
  if (!hero || !image || !imageLink || !previous || !next || !toggle || !count || !progress || !window.projects) return;

  var pptProjectData = window.pptProjectData;
  var slides = (pptProjectData && pptProjectData.homeHeroIds || [])
    .map(function (projectId) {
      var project = projects.find(function (item) { return item.id === projectId; });
      var source = pptProjectData.overrides[projectId];
      return project && source && source.image
        ? { id: project.id, title: project.title, image: source.image }
        : null;
    })
    .filter(Boolean);
  if (!slides.length) return;

  document.querySelectorAll(".category-grid [data-home-project-image]").forEach(function (link) {
    var source = pptProjectData.overrides[link.getAttribute("data-home-project-image")];
    var categoryImage = link.querySelector("img");
    if (source && source.image && categoryImage) categoryImage.src = source.image;
  });

  var interval = 7000;
  var current = 0;
  var timer = null;
  var transitionId = 0;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var playing = !reduceMotion;
  var pixelCanvas = document.createElement("canvas");
  var pixelContext = pixelCanvas.getContext("2d");
  var pixelFrame = 0;
  var imageReady = false;
  pixelCanvas.className = "home-hero-pixel-canvas";
  pixelCanvas.setAttribute("aria-hidden", "true");
  hero.appendChild(pixelCanvas);

  function pad(number) { return number < 10 ? "0" + number : String(number); }

  function clearTimer() {
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }
  }

  function preload(index) {
    var preloadImage = new Image();
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
    var sx = 0;
    var sy = 0;
    var sw = sourceWidth;
    var sh = sourceHeight;
    if (sourceRatio > canvasRatio) {
      sw = sourceHeight * canvasRatio;
      sx = (sourceWidth - sw) / 2;
    } else {
      sh = sourceWidth / canvasRatio;
      sy = (sourceHeight - sh) / 2;
    }

    pixelContext.imageSmoothingEnabled = false;
    pixelContext.clearRect(0, 0, width, height);
    pixelContext.drawImage(source, sx, sy, sw, sh, 0, 0, width, height);
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

  function pixelTransition(nextImage, currentTransition) {
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
          image.src = nextImage.src;
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
    var shouldPixelate = imageReady && image.classList.contains("is-visible") && !reduceMotion;
    if (!shouldPixelate) image.classList.remove("is-visible");
    imageLink.href = "projects.html?project=" + encodeURIComponent(slides[current].id);
    imageLink.setAttribute("aria-label", "View " + slides[current].title + " project gallery");
    count.textContent = pad(current + 1) + " / " + pad(slides.length);
    preload(current + 1);
    schedule();

    function loadCurrentImage() {
      if (currentTransition !== transitionId) return;
      var nextImage = new Image();
      var didLoad = false;
      nextImage.onload = function () {
        if (didLoad) return;
        didLoad = true;
        if (currentTransition !== transitionId) return;
        if (shouldPixelate) {
          pixelTransition(nextImage, currentTransition);
          return;
        }
        image.onload = function () {
          if (currentTransition === transitionId) {
            image.classList.add("is-visible");
            imageReady = true;
          }
        };
        image.src = nextImage.src;
        image.alt = "";
        if (image.complete && image.naturalWidth) {
          image.classList.add("is-visible");
          imageReady = true;
        }
      };
      nextImage.onerror = function () {
        if (currentTransition === transitionId) show(current + 1);
      };
      nextImage.src = slides[current].image;
      if (nextImage.complete && nextImage.naturalWidth) nextImage.onload();
    }
    loadCurrentImage();
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
  document.addEventListener("visibilitychange", schedule);

  image.addEventListener("error", function () {
    image.classList.remove("is-visible");
    if (slides.length > 1) show(current + 1);
  });

  show(0);
  setPlaying(playing);
})();