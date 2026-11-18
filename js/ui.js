/**
 * Shared chrome and small view helpers.
 *
 * Pages set <body data-root=""> on the homepage and <body data-root="..">
 * on nested pages. Every generated link goes through rootPath() so the same
 * scripts work locally and on a GitHub project site.
 */
(function (global) {
  "use strict";

  function rootPrefix() {
    var root = document.body.getAttribute("data-root") || "";
    if (!root) {
      return "";
    }
    return root.replace(/\/$/, "") + "/";
  }

  function rootPath(relative) {
    if (!relative) {
      return rootPrefix() || "./";
    }
    if (/^(https?:|mailto:|tel:)/.test(relative)) {
      return relative;
    }
    return rootPrefix() + relative.replace(/^\//, "");
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /**
   * Institution marks: university seals, and the Nokia Bell Labs wordmark.
   * The wordmark is a vector file so it stays sharp at the card size.
   */
  function logoSvg(kind) {
    var images = {
      ecnu: { src: "assets/logo-ecnu.png", cls: "logo-seal", w: 46, h: 46 },
      haust: { src: "assets/logo-haust.png", cls: "logo-seal", w: 46, h: 46 },
      nokia: { src: "assets/logo-nokia.svg", cls: "logo-wordmark", w: 96, h: 46 }
    };
    var image = images[kind] || images.ecnu;
    return '<img class="logo ' + image.cls + '" src="' + escapeHtml(rootPath(image.src)) + '" alt="" width="' + image.w + '" height="' + image.h + '">';
  }

  function socialIcons(profile) {
    var items = [
      { href: "mailto:" + profile.email, label: "Email", icon: '<i class="fa-solid fa-envelope"></i>' },
      { href: profile.github, label: "GitHub", icon: '<i class="fa-brands fa-github"></i>' },
      { href: profile.scholar, label: "Google Scholar", icon: '<i class="ai ai-google-scholar"></i>' },
      { href: rootPath(profile.cv), label: "CV (PDF)", icon: '<i class="fa-solid fa-file-lines"></i>' }
    ];
    return items.map(function (item) {
      var external = item.href.indexOf("http") === 0;
      return (
        '<a class="social-link" href="' + escapeHtml(item.href) + '" aria-label="' + escapeHtml(item.label) + '"' +
          (external ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" +
          item.icon +
        "</a>"
      );
    }).join("");
  }

  function navItems(activeKey) {
    var home = rootPath("");
    var links = [
      { key: "home", label: "Home", href: home + "#about" },
      { key: "experience", label: "Experience & Awards", href: home + "#experience" },
      { key: "publications", label: "Publications", href: rootPath("publication/") },
      { key: "patents", label: "Patents", href: rootPath("patents/") }
    ];
    return links.map(function (link) {
      var current = link.key === activeKey ? ' aria-current="page"' : "";
      var active = link.key === activeKey ? " is-active" : "";
      return '<li><a class="nav-link' + active + '" data-nav="' + link.key + '" href="' + escapeHtml(link.href) + '"' + current + "><span>" + escapeHtml(link.label) + "</span></a></li>";
    }).join("");
  }

  function renderHeader(activeKey) {
    var profile = global.SiteData.profile;
    var home = rootPath("");
    return (
      '<nav class="navbar" id="navbar">' +
        '<div class="container navbar-inner">' +
          '<a class="navbar-brand" href="' + escapeHtml(home + "#about") + '">' + escapeHtml(profile.name) + " (" + escapeHtml(profile.nameZh) + ")</a>" +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle navigation">' +
            '<i class="fa-solid fa-bars"></i>' +
          "</button>" +
          '<div class="nav-menu" id="nav-menu"><ul class="nav-list">' + navItems(activeKey) + "</ul></div>" +
        "</div>" +
      "</nav>"
    );
  }

  function renderMastheadNav(activeKey) {
    return '<nav class="masthead-nav" aria-label="Site"><ul class="nav-list">' + navItems(activeKey) + "</ul></nav>";
  }

  function renderFooter() {
    var year = new Date().getFullYear();
    var name = escapeHtml(global.SiteData.profile.name);
    return (
      '<footer class="site-footer">' +
        '<p>' + name + " &copy; " + year + "</p>" +
      "</footer>"
    );
  }

  function mountChrome(activeKey) {
    var header = document.getElementById("site-header");
    var footer = document.getElementById("site-footer");
    if (header) {
      header.innerHTML = activeKey === "home" ? "" : renderHeader(activeKey);
    }
    if (footer) {
      footer.innerHTML = renderFooter();
    }
    bindNavToggle();
  }

  function bindNavToggle() {
    var button = document.querySelector(".nav-toggle");
    var menu = document.getElementById("nav-menu");
    if (!button || !menu) {
      return;
    }
    button.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  /**
   * On the homepage the nav highlight follows the section in view.
   * Publications and patents pages pass a fixed key and skip this.
   */
  function initScrollSpy() {
    var sections = ["about", "experience"].map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in global)) {
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        var key = entry.target.id === "about" ? "home" : entry.target.id;
        document.querySelectorAll(".nav-link").forEach(function (link) {
          var on = link.getAttribute("data-nav") === key;
          link.classList.toggle("is-active", on);
          if (on) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 });
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function ensureModal() {
    var existing = document.getElementById("cite-modal");
    if (existing) {
      return existing;
    }
    var wrap = document.createElement("div");
    wrap.id = "cite-modal";
    wrap.className = "modal";
    wrap.hidden = true;
    wrap.innerHTML =
      '<div class="modal-backdrop" data-close="true"></div>' +
      '<div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="cite-title">' +
        '<div class="modal-head">' +
          '<h2 id="cite-title">Cite</h2>' +
          '<button class="modal-close" type="button" data-close="true" aria-label="Close">&times;</button>' +
        "</div>" +
        '<pre class="bibtex" id="cite-bibtex"></pre>' +
        '<p class="cite-summary" id="cite-summary" hidden></p>' +
        '<div class="modal-actions">' +
          '<button class="btn" type="button" id="cite-copy">Copy</button>' +
        "</div>" +
      "</div>";
    document.body.appendChild(wrap);
    wrap.addEventListener("click", function (event) {
      if (event.target.getAttribute("data-close") === "true") {
        closeCite();
      }
    });
    document.getElementById("cite-copy").addEventListener("click", function () {
      var text = document.getElementById("cite-bibtex").textContent;
      var button = document.getElementById("cite-copy");
      var done = function () {
        button.textContent = "Copied";
        global.setTimeout(function () {
          button.textContent = "Copy";
        }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          window.prompt("Copy this BibTeX:", text);
        });
      } else {
        window.prompt("Copy this BibTeX:", text);
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeCite();
      }
    });
    return wrap;
  }

  function openCite(entry) {
    var modal = ensureModal();
    document.getElementById("cite-bibtex").textContent = entry.bibtex;
    var summary = document.getElementById("cite-summary");
    if (entry.summary) {
      summary.hidden = false;
      summary.textContent = entry.summary;
    } else {
      summary.hidden = true;
      summary.textContent = "";
    }
    modal.hidden = false;
    document.body.classList.add("modal-open");
    document.getElementById("cite-copy").focus();
  }

  function closeCite() {
    var modal = document.getElementById("cite-modal");
    if (!modal || modal.hidden) {
      return;
    }
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function formatAuthors(authors) {
    return authors.map(function (author) {
      var name = escapeHtml(author.name);
      return author.self ? "<strong>" + name + "</strong>" : name;
    }).join(", ");
  }

  global.SiteUI = {
    rootPath: rootPath,
    escapeHtml: escapeHtml,
    logoSvg: logoSvg,
    socialIcons: socialIcons,
    mountChrome: mountChrome,
    renderMastheadNav: renderMastheadNav,
    initScrollSpy: initScrollSpy,
    openCite: openCite,
    formatAuthors: formatAuthors
  };
})(window);
