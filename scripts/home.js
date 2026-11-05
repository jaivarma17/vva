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
  var outgoingImage = null;
  var transitionTimer = null;
  var imageReady = image.complete && image.naturalWidth > 0;
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

  function cancelTransition() {
    if (transitionTimer) {
      window.clearTimeout(transitionTimer);
      transitionTimer = null;
    }
    imageLink.querySelectorAll(".home-hero-image.is-outgoing").forEach(function (oldImage) {
      oldImage.remove();
    });
    outgoingImage = null;
    image.classList.remove("is-entering", "is-outgoing");
  }

  function showImage(displayImage, slide, currentTransition, animate) {
    if (animate) {
      outgoingImage = image.cloneNode();
      outgoingImage.removeAttribute("id");
      outgoingImage.alt = "";
      outgoingImage.setAttribute("aria-hidden", "true");
      outgoingImage.classList.remove("is-entering", "is-outgoing");
      outgoingImage.classList.add("is-visible");
      imageLink.appendChild(outgoingImage);
      void outgoingImage.offsetWidth;
      outgoingImage.classList.add("is-outgoing");
      image.classList.remove("is-visible");
      image.classList.add("is-entering");
    } else {
      image.classList.remove("is-entering");
    }

    image.src = displayImage.src;
    image.dataset.photoSource = slide.image;
    image.alt = "";
    if (animate) {
      void image.offsetWidth;
      window.requestAnimationFrame(function () {
        if (currentTransition !== transitionId) return;
        image.classList.remove("is-entering");
        image.classList.add("is-visible");
      });
      var transitionedImage = outgoingImage;
      transitionTimer = window.setTimeout(function () {
        if (transitionedImage) {
          transitionedImage.remove();
        }
        if (outgoingImage === transitionedImage) {
          outgoingImage = null;
        }
        if (transitionTimer) transitionTimer = null;
      }, 850);
    } else {
      image.classList.add("is-visible");
    }
    imageReady = true;
  }

  function show(index) {
    cancelTransition();
    current = (index + slides.length) % slides.length;
    var currentTransition = ++transitionId;
    var slide = slides[current];
    var shouldAnimate = imageReady && image.classList.contains("is-visible") && !reduceMotion;
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
      showImage(displayImage, slide, currentTransition, shouldAnimate);
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