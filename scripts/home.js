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

  var featuredSlides = [
    ["golf-academy-aamby", "assets/img/projects/ppt-decks/golf-academy-aamby/005.jpg"],
    ["machaan-aamby-valley", "assets/img/projects/ppt-decks/machaan-aamby-valley/001.jpg"],
    ["burmese-chalet-aamby-valley", "assets/img/projects/ppt-decks/burmese-chalet-aamby-valley/001.jpg"],
    ["hermitage-chalets-aamby-valley", "assets/img/projects/ppt-decks/hermitage-chalets-aamby-valley/003.jpg"],
    ["bridges-pga-aamby-valley", "assets/img/projects/ppt-decks/bridges-pga-aamby-valley/001.jpg"],
    ["dantal-corporate-office", "assets/img/projects/ppt-decks/dantal-corporate-office/001.jpg"],
    ["mds-factory-palwal", "assets/img/projects/ppt-decks/mds-factory-palwal/002.jpg"],
    ["oliander-farm-karjat", "assets/img/projects/ppt-decks/oliander-farm-karjat/002.jpg"],
    ["my-eye-hospital", "assets/img/projects/ppt-decks/my-eye-hospital/003.jpg"],
    ["desai-residence", "assets/img/projects/ppt-decks/desai-residence/002.jpg"],
    ["presto-corporate-office", "assets/img/projects/ppt-decks/presto-corporate-office/001.jpg"],
    ["all-forge-corporate-factory", "assets/img/projects/ppt-decks/all-forge-corporate-factory/001.jpg"],
    ["golf-academy-ansals", "assets/img/projects/ppt-decks/golf-academy-ansals/003.jpg"],
    ["starter-hut-garry-player-dlf", "assets/img/projects/ppt-decks/starter-hut-garry-player-dlf/001.jpg"],
    ["sahay-residence", "assets/img/projects/ppt-decks/sahay-residence/002.jpg"],
    ["chandras-residence", "assets/img/projects/ppt-decks/chandras-residence/001.jpg"],
    ["t-house-pune", "assets/img/projects/ppt-decks/t-house-pune/002.jpg"],
    ["cottage-shamrock", "assets/img/projects/ppt-decks/cottage-shamrock/007.jpg"],
    ["singhvi-residence-neetibagh", "assets/img/projects/ppt-decks/singhvi-residence-neetibagh/001.jpg"],
    ["ritz-restaurant-lucknow", "assets/img/projects/ppt-decks/ritz-restaurant-lucknow/001.jpg"]
  ];
  var slides = featuredSlides
    .map(function (slide) {
      var project = projects.find(function (item) { return item.id === slide[0]; });
      return project ? { id: project.id, title: project.title, image: slide[1] } : null;
    })
    .filter(Boolean);
  if (!slides.length) {
    slides = projects.filter(function (project) { return project.image; });
  }
  if (!slides.length) return;

  var interval = 5000;
  var current = 0;
  var timer = null;
  var transitionId = 0;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var playing = !reduceMotion;

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

  function show(index) {
    current = (index + slides.length) % slides.length;
    var currentTransition = ++transitionId;
    var shouldFadeOut = image.classList.contains("is-visible") && !reduceMotion;
    image.classList.remove("is-visible");
    imageLink.href = "projects.html?project=" + encodeURIComponent(slides[current].id);
    imageLink.setAttribute("aria-label", "View " + slides[current].title + " project gallery");
    count.textContent = pad(current + 1) + " / " + pad(slides.length);
    preload(current + 1);
    schedule();

    function loadCurrentImage() {
      if (currentTransition !== transitionId) return;
      image.onload = function () {
        if (currentTransition === transitionId) image.classList.add("is-visible");
      };
      image.src = slides[current].image;
      image.alt = "";
      if (image.complete && image.naturalWidth) image.classList.add("is-visible");
    }

    if (shouldFadeOut) {
      window.setTimeout(loadCurrentImage, 800);
    } else {
      loadCurrentImage();
    }
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