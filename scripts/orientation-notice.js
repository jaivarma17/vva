(function () {
  var notice = document.getElementById("orientation-notice");
  if (!notice) return;

  var portraitViewport = window.matchMedia("(orientation: portrait)");
  var timeout = null;
  var wasPortraitPhone = false;

  function updateNotice() {
    var isPortrait = portraitViewport.matches;
    if (isPortrait && !wasPortraitPhone) {
      notice.classList.remove("is-visible");
      void notice.offsetWidth;
      notice.classList.add("is-visible");
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        notice.classList.remove("is-visible");
      }, 3300);
    } else if (!isPortrait) {
      notice.classList.remove("is-visible");
      window.clearTimeout(timeout);
    }
    wasPortraitPhone = isPortrait;
  }

  portraitViewport.addEventListener("change", updateNotice);
  window.addEventListener("resize", updateNotice);
  updateNotice();
})();
