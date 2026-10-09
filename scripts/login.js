(function () {
  var DEMO_USERNAME = "vva";
  var DEMO_PASSWORD = "studio2026";
  var form = document.getElementById("login-form");
  var error = document.getElementById("login-error");

  if (window.sessionStorage.getItem("vva-authenticated") === "true") {
    window.location.replace("index.html");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = form.elements.username.value.trim();
    var password = form.elements.password.value;

    if (username !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
      error.hidden = false;
      form.elements.password.value = "";
      form.elements.password.focus();
      return;
    }

    window.sessionStorage.setItem("vva-authenticated", "true");
    var returnTo = window.sessionStorage.getItem("vva-return-to") || "index.html";
    window.sessionStorage.removeItem("vva-return-to");
    window.location.replace(returnTo);
  });
})();