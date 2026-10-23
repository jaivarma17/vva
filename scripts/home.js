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

  var slides = projects.filter(function (project) { return project.image; });
  if (!slides.length) return;

  var interval = 5000;
  var current = 0;
  var timer = null;
  var playing = !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

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
    image.classList.remove("is-visible");
    image.src = slides[current].image;
    image.alt = "";
    imageLink.href = "projects.html?project=" + encodeURIComponent(slides[current].id);
    imageLink.setAttribute("aria-label", "View " + slides[current].title + " project gallery");
    count.textContent = pad(current + 1) + " / " + pad(slides.length);
    preload(current + 1);
    schedule();
    image.onload = function () { image.classList.add("is-visible"); };
    if (image.complete && image.naturalWidth) image.classList.add("is-visible");
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