(function () {
  var loginPath = "login.html";
  if (window.location.pathname.endsWith("/login.html")) return;

  try {
    if (window.sessionStorage.getItem("vva-authenticated") === "true") return;
    var page = window.location.pathname.split("/").pop() || "index.html";
    window.sessionStorage.setItem("vva-return-to", page + window.location.search + window.location.hash);
  } catch (error) {
    window.location.replace(loginPath);
    return;
  }

  window.location.replace(loginPath);
})();