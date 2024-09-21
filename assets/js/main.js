(function () {
  "use strict";

  // Hide preload onload
  const preload = document.querySelector("[data-web-trigger=preload]");

  if (preload) {
    window.addEventListener("load", function () {
      setTimeout(() => {
        preload.remove();
      }, 1000);
    });
  }

  // Add 'isSticky' class to navbar when scrolled
  const navbar = document.querySelector(".rh-navbar");

  function toggleStickyNavbar() {
    window.scrollY >= 1
      ? navbar.classList.add("isSticky")
      : navbar.classList.remove("isSticky");
  }

  window.addEventListener("load", toggleStickyNavbar);
  document.addEventListener("scroll", toggleStickyNavbar);

  // Responsive navbar
  const navbarToggler = document.querySelectorAll(
    "[data-web-toggle=navbar-collapse]",
  );

  navbarToggler.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const dataTarget = this.dataset.webTarget,
        targetElement = document.getElementById(dataTarget),
        isExpanded = this.ariaExpanded === "true";

      if (!targetElement) {
        return;
      }

      navbar.classList.toggle("menuShow");
      this.ariaExpanded = !isExpanded;
      this.innerHTML = navbar.classList.contains("menuShow")
        ? '<i class="uil uil-times"></i>'
        : '<i class="uil uil-bars"></i>';
    });
  });

  // Switch theme mode
  const themeSwitcher = document.querySelector("[data-web-trigger=theme]"),
    html = document.querySelector("html");

  window.addEventListener("load", function () {
    var theme = localStorage.getItem("RHSystem_ThemeMode");

    if (theme == "light") {
      themeSwitcher.innerHTML = '<i class="uil uil-sun"></i>';
    } else if (theme == "dark") {
      themeSwitcher.innerHTML = '<i class="uil uil-moon"></i>';
    } else {
      theme = "light";
      localStorage.setItem("RHSystem_ThemeMode", theme);
      themeSwitcher.innerHTML = '<i class="uil uil-moon"></i>';
    }

    html.dataset.themeMode = theme;
  });

  themeSwitcher.addEventListener("click", function () {
    var theme = localStorage.getItem("RHSystem_ThemeMode");
    this.innerHTML =
      theme == "dark"
        ? '<i class="uil uil-sun"></i>'
        : '<i class="uil uil-moon"></i>';
    theme = theme == "dark" ? "light" : "dark";
    localStorage.setItem("RHSystem_ThemeMode", theme);
    html.dataset.themeMode = theme;
  });

  // Show or hide scroll to top button
  const scrollTopButton = document.querySelector(".rh-scroll-top");

  function toggleScrollTop() {
    if (scrollTopButton) {
      window.scrollY >= 80
        ? scrollTopButton.classList.add("isShow")
        : scrollTopButton.classList.remove("isShow");
    }
  }

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  // Calculate the estimated reading time
  const crt = document.querySelectorAll(".crt[data-crt-target]");

  window.addEventListener("load", function () {
    crt.forEach((el) => {
      const target = document.getElementById(el.dataset.crtTarget);

      if (!target) {
        return;
      }

      const text = target.innerText,
        wpm = 200,
        words = text.split(/\s+/).filter((word) => word.length > 0),
        wordCount = words.length,
        readingTime = Math.ceil(wordCount / wpm);

      el.innerText = readingTime + " min read";
    });
  });

  // Init typed.js
  setTimeout(() => {
    var typedEl = new Typed(".typed-el", {
      strings: ["Randy Hasibuan", "Web Developer", "Web Designer", "Gamer"],
      typeSpeed: 80,
      smartBackspace: false,
      backSpeed: 40,
      startDelay: 0,
      backDelay: 1000,
      loop: true,
    });
  }, 1000);
})();
