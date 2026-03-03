(function() {
  var stored = localStorage.getItem("theme");
  var preferred = stored === "light" || stored === "dark" ? stored : "dark";
  document.documentElement.setAttribute("data-theme", preferred);

  var metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", preferred === "light" ? "#f8fafc" : "#0b1120");
  }

  window.setTheme = function(theme) {
    var next = theme === "light" ? "light" : "dark";
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
    if (metaTheme) {
      metaTheme.setAttribute("content", next === "light" ? "#f8fafc" : "#0b1120");
    }
  };
})();
