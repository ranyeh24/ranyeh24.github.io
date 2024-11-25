(function () {
  "use strict";

  // Hide preloader onload
  const preloader = document.querySelector(".rh-preloader-container");

  if (preloader) {
    window.addEventListener("load", function () {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    });
  }

  // Add 'isSticky' class to navbar when scrolled
  const navbar = document.querySelector(".rh-navbar");

  function toggleStickyNavbar() {
    window.scrollY >= 80
      ? navbar.classList.add("isSticky")
      : navbar.classList.remove("isSticky");
  }

  window.addEventListener("load", toggleStickyNavbar);
  document.addEventListener("scroll", toggleStickyNavbar);

  // Switch theme mode
  const themeSwitcher = document.querySelector("[data-web-trigger=web-theme]"),
    html = document.querySelector("html");

  window.addEventListener("DOMContentLoaded", function () {
    var currentTheme = localStorage.getItem("RHSystem_WebTheme");

    if (currentTheme === "light") {
      themeSwitcher.innerHTML = '<i class="uil uil-sun"></i>';
    } else if (currentTheme === "dark") {
      themeSwitcher.innerHTML = '<i class="uil uil-moon"></i>';
    } else {
      currentTheme = "light";
      localStorage.setItem("RHSystem_WebTheme", currentTheme);
      themeSwitcher.innerHTML = '<i class="uil uil-sun"></i>';
    }

    html.dataset.webTheme = currentTheme;
  });

  themeSwitcher.addEventListener("click", function () {
    var currentTheme = localStorage.getItem("RHSystem_WebTheme"),
      newTheme = currentTheme === "dark" ? "light" : "dark";
    themeSwitcher.innerHTML =
      currentTheme === "dark"
        ? '<i class="uil uil-sun"></i>'
        : '<i class="uil uil-moon"></i>';
    localStorage.setItem("RHSystem_WebTheme", newTheme);
    html.dataset.webTheme = newTheme;
  });

  // Modal
  const modal = document.querySelectorAll(".rh-modal"),
    modalToggle = document.querySelectorAll("[data-modal-toggle]"),
    modalDismiss = document.querySelectorAll("[data-modal-dismiss]");

  function showModal(modal, modalToggle) {
    modal.classList.add("isShowing");

    setTimeout(() => {
      modal.classList.replace("isShowing", "isShowed");
      modal.ariaHidden = "false";
      disableScroll();
      modalToggle.ariaExpanded = "true";
      document.querySelector("[data-modal-dismiss=" + modal.id + "]").focus();
    }, 10);
  }

  function hideModal(modal) {
    const modalToggle = document.querySelector(
      "[data-modal-toggle=" + modal.id + "][aria-expanded=true]",
    );
    modal.classList.replace("isShowed", "isShowing");
    modal.ariaHidden = "true";

    setTimeout(() => {
      modal.classList.remove("isShowing");
      enableScroll();
      modalToggle.ariaExpanded = false;
      modalToggle.focus();
    }, 300);
  }

  modalToggle.forEach((toggle) => {
    const targetElement = document.getElementById(toggle.dataset.modalToggle);

    toggle.addEventListener("click", function () {
      showModal(targetElement, toggle);
    });
  });

  modalDismiss.forEach((dismiss) => {
    const targetElement = document.getElementById(dismiss.dataset.modalDismiss);

    dismiss.addEventListener("click", function () {
      hideModal(targetElement);
    });
  });

  modal.forEach((modal) => {
    document.addEventListener("click", function (e) {
      if (modal.classList.contains("isShowed")) {
        const dataBackdrop =
          modal.dataset.modalBackdrop === "static" ? "static" : "dinamic";

        if (dataBackdrop === "dinamic" && e.target === modal) {
          hideModal(modal);
        }
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("isShowed")) {
        hideModal(modal);
      }
    });
  });

  // Show or hide scroll to top button
  const scrollTopButton = document.querySelector(
    ".rh-scroll-top[data-web-trigger=scroll-top]",
  );

  function toggleScrollTop() {
    if (scrollTopButton) {
      window.scrollY >= 120
        ? scrollTopButton.classList.add("isShowed")
        : scrollTopButton.classList.remove("isShowed");
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

  // Dropdown
  const dropdowns = document.querySelectorAll(".rh-dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".rh-dropdown-toggle"),
      content = dropdown.querySelector(".rh-dropdown-content");
    let popperInstance = null;

    function createInstance() {
      const position = dropdown.classList.contains("rh-dropdown-right")
        ? "bottom-end"
        : "bottom-start";

      popperInstance = Popper.createPopper(toggle, content, {
        placement: position,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ],
      });
    }

    function showDropdown() {
      content.classList.add("isShowed");
      toggle.ariaExpanded = "true";
      createInstance();
    }

    function hideDropdown() {
      content.classList.remove("isShowed");
      toggle.ariaExpanded = "false";

      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    }

    function toggleDropdown() {
      if (content.classList.contains("isShowed")) {
        hideDropdown();
      } else {
        showDropdown();
      }
    }

    toggle.addEventListener("click", toggleDropdown);

    document.addEventListener("click", function (e) {
      const isClickInside =
        toggle.contains(e.target) || content.contains(e.target);

      if (!isClickInside) {
        hideDropdown();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && content.classList.contains("isShowed")) {
        hideDropdown();
      }
    });
  });

  // Estimated read time
  const estimatedReadTime = document.querySelectorAll(
    ".rh-estimated-read-time[data-read-time]",
  );

  window.addEventListener("load", function () {
    estimatedReadTime.forEach((ert) => {
      const targetElement = document.getElementById(ert.dataset.readTime);

      if (!targetElement) {
        return;
      }

      const text = targetElement.innerText,
        wpm = 200,
        words = text.split(/\s+/).filter((word) => word.length > 0),
        wordCount = words.length,
        readingTime = Math.ceil(wordCount / wpm);

      ert.innerText =
        readingTime > 1
          ? readingTime + " mins read"
          : readingTime + " min read";
    });
  });

  // Add 'anchored-link' class to heading tags inside 'rh-article-content' element after load
  const articleContent = document.querySelector(".rh-article-content");

  if (articleContent) {
    window.addEventListener("DOMContentLoaded", function () {
      const h1s = articleContent.querySelectorAll("h1"),
        h2s = articleContent.querySelectorAll("h2"),
        h3s = articleContent.querySelectorAll("h3"),
        h4s = articleContent.querySelectorAll("h4"),
        h5s = articleContent.querySelectorAll("h5"),
        h6s = articleContent.querySelectorAll("h6");

      h1s.forEach((h1) => {
        h1.classList.add("rh-anchored-link");
      });

      h2s.forEach((h2) => {
        h2.classList.add("rh-anchored-link");
      });

      h3s.forEach((h3) => {
        h3.classList.add("rh-anchored-link");
      });

      h4s.forEach((h4) => {
        h4.classList.add("rh-anchored-link");
      });

      h5s.forEach((h5) => {
        h5.classList.add("rh-anchored-link");
      });

      h6s.forEach((h6) => {
        h6.classList.add("rh-anchored-link");
      });
    });
  }

  // Section scroll
  window.addEventListener("load", function () {
    if (window.location.hash) {
      const scrollTarget = document.querySelector(window.location.hash);

      if (scrollTarget) {
        const scrollMarginTop =
          this.getComputedStyle(scrollTarget).scrollMarginTop;
        autoScroll(scrollTarget.offsetTop - parseInt(scrollMarginTop) - 16);
      }
    }
  });

  // Auto scroll when anchorjs-link is clicked
  window.addEventListener("load", function () {
    setTimeout(() => {
      const anchorLinks = document.querySelectorAll(".anchorjs-link");

      anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          const href = link.getAttribute("href"),
            target = document.getElementById(href.split("#")[1]);
          autoScroll(target.offsetTop - 16);
        });
      });
    }, 50);
  });
})();

// Scrolling
function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
}

// Init table of content
function initTableOfContent(els) {
  var anchoredElText,
    anchoredElHref,
    toc = document.createElement("UL"),
    tocInit = document.querySelector(".rh-toc-init");
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
    const thisHref = anchorItem.href,
      targetId = thisHref.split("#")[1],
      target = document.getElementById(targetId);
    autoScroll(target.offsetTop - 16);
  });
}

function autoScroll(offsetTop = 0) {
  setTimeout(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, 10);
}

// Randomize function
function randomizeString(length = 1) {
  let result = "",
    counter = 0,
    characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}
