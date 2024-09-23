(function () {
  "use strict";

  // Hide preload onload
  const preload = document.querySelector("[data-web-trigger=preload]");

  if (preload) {
    window.addEventListener("load", function () {
      setTimeout(() => {
        preload.remove();
      }, 1500);
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
  }, 1500);

  // Tech stacks
  const techStacks = document.querySelectorAll(".rh-tech-stacks");

  techStacks.forEach((carousel) => {
    window.addEventListener("load", function () {
      const wrapper = carousel.querySelector(".rh-tech-stacks-wrapper"),
        clone = wrapper.cloneNode(true);

      carousel.appendChild(clone);

      setTimeout(() => {
        wrapper.classList.add("animated");
        clone.classList.add("animated");
      }, 50);
    });
  });

  // Add '.anchored-link' class to heading tag inside '[data-web-trigger=article]' element after load
  const articleContent = document.querySelector("[data-web-trigger=article]");

  if (articleContent) {
    window.addEventListener("load", function () {
      const h1s = articleContent.querySelectorAll("h1"),
        h2s = articleContent.querySelectorAll("h2"),
        h3s = articleContent.querySelectorAll("h3"),
        h4s = articleContent.querySelectorAll("h4"),
        h5s = articleContent.querySelectorAll("h5"),
        h6s = articleContent.querySelectorAll("h6");

      h1s.forEach((h1) => {
        h1.classList.add("anchored-link");
      });

      h2s.forEach((h2) => {
        h2.classList.add("anchored-link");
      });

      h3s.forEach((h3) => {
        h3.classList.add("anchored-link");
      });

      h4s.forEach((h4) => {
        h4.classList.add("anchored-link");
      });

      h5s.forEach((h5) => {
        h5.classList.add("anchored-link");
      });

      h6s.forEach((h6) => {
        h6.classList.add("anchored-link");
      });
    });
  }

  // Section scroll
  window.addEventListener("load", function () {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);

      if (section) {
        const scrollMT = this.getComputedStyle(section).scrollMarginTop;
        autoScroll(section.offsetTop - parseInt(scrollMT) - 100);
      }
    }
  });
})();

// Init table of content
function initTableOfContent(els) {
  var anchoredElText,
    anchoredElHref,
    toc = document.createElement("UL"),
    tocInit = document.querySelector(".rh-init-content-table");

  tocInit.appendChild(toc);

  for (let i = 0; i < els.length; i++) {
    anchoredElText = els[i].textContent;
    anchoredElHref = els[i]
      .querySelector(".anchorjs-link")
      .getAttribute("href");
    addTOCItem(toc, anchoredElHref, anchoredElText, els[i].nodeName);
  }
}

function addTOCItem(list, href, text, node) {
  var listItem = document.createElement("LI"),
    anchorItem = document.createElement("A"),
    textNode = document.createTextNode(text);

  anchorItem.href = href;
  anchorItem.className = "rh-toc-link";

  if (node == "H3") {
    anchorItem.classList.add("level-2");
  } else if (node == "H4") {
    anchorItem.classList.add("level-3");
  } else if (node == "H5") {
    anchorItem.classList.add("level-4");
  } else if (node == "H6") {
    anchorItem.classList.add("level-5");
  }

  list.appendChild(listItem);
  listItem.appendChild(anchorItem);
  anchorItem.appendChild(textNode);

  anchorItem.addEventListener("click", function (e) {
    const target = document.querySelector(href);
    autoScroll(target.offsetTop - 100);
  });
}

function autoScroll(offsetTop) {
  setTimeout(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, 500);
}
