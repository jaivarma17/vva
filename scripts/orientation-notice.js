(function () {
  var notice = document.getElementById("orientation-notice");
  if (!notice) return;

  var portraitPhone = window.matchMedia("(max-width: 800px) and (orientation: portrait)");
  var timeout = null;
  var wasPortraitPhone = false;

  function updateNotice() {
    var isPortraitPhone = portraitPhone.matches;
    if (isPortraitPhone && !wasPortraitPhone) {
      notice.classList.remove("is-visible");
      void notice.offsetWidth;
      notice.classList.add("is-visible");
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        notice.classList.remove("is-visible");
      }, 3300);
    } else if (!isPortraitPhone) {
      notice.classList.remove("is-visible");
      window.clearTimeout(timeout);
    }
    wasPortraitPhone = isPortraitPhone;
  }

  portraitPhone.addEventListener("change", updateNotice);
  window.addEventListener("resize", updateNotice);
  updateNotice();
})();
