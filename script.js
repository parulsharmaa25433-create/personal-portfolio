(function () {
  "use strict";

  var menuToggle = document.getElementById("menu-toggle");
  var primaryNav = document.getElementById("primary-nav");
  var yearEl = document.getElementById("copyright-year");
  var header = document.querySelector(".site-header");
  var navLinks = primaryNav ? primaryNav.querySelectorAll("a") : [];

  if (yearEl) {
    yearEl.textContent = "© " + new Date().getFullYear();
  }

  function setMenuState(isOpen) {
    if (!menuToggle || !primaryNav) {
      return;
    }

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    primaryNav.classList.toggle("is-open", isOpen);

    var label = menuToggle.querySelector(".visually-hidden");
    if (label) {
      label.textContent = isOpen ? "Close menu" : "Open menu";
    }
  }

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
      setMenuState(isOpen);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuState(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
