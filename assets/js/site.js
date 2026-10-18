// Theme toggle, mobile menu, year filter. No dependencies.
(function () {
  var root = document.documentElement;

  var themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) {
        current = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  var menuBtn = document.querySelector("[data-menu]");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Year filter: buttons inside [data-filter] show or hide [data-year] rows.
  document.querySelectorAll("[data-filter]").forEach(function (bar) {
    bar.hidden = false;
    var scope = document.querySelector(bar.getAttribute("data-filter"));
    if (!scope) return;
    bar.addEventListener("click", function (ev) {
      var btn = ev.target.closest("button");
      if (!btn) return;
      var year = btn.getAttribute("data-value");
      bar.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      scope.querySelectorAll("[data-year]").forEach(function (el) {
        el.hidden = year !== "all" && el.getAttribute("data-year") !== year;
      });
    });
  });
})();
