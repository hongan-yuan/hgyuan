/**
 * Publications list.
 * Search, type, and year filters run entirely in the browser against SiteData.
 */
(function () {
  "use strict";

  var ui = window.SiteUI;
  var publications = window.SiteData.publications.filter(function (paper) {
    return paper.published !== false;
  });

  function years() {
    var seen = {};
    publications.forEach(function (paper) {
      seen[paper.year] = true;
    });
    return Object.keys(seen).map(Number).sort(function (a, b) {
      return b - a;
    });
  }

  function renderFilters() {
    var yearOptions = years().map(function (year) {
      return '<option value="' + year + '">' + year + "</option>";
    }).join("");
    return (
      '<div class="filters">' +
        '<label class="filter-field"><span class="visually-hidden">Search publications</span>' +
          '<input id="pub-search" type="search" placeholder="Search..." autocomplete="off">' +
        "</label>" +
        '<label class="filter-field"><span class="visually-hidden">Filter by type</span>' +
          '<select id="pub-type">' +
            '<option value="">Type</option>' +
            '<option value="journal">Journal article</option>' +
            '<option value="conference">Conference paper</option>' +
          "</select>" +
        "</label>" +
        '<label class="filter-field"><span class="visually-hidden">Filter by year</span>' +
          '<select id="pub-year">' +
            '<option value="">Date</option>' +
            yearOptions +
          "</select>" +
        "</label>" +
      "</div>" +
      '<p class="pub-note"><a href="' + ui.escapeHtml(window.SiteData.profile.scholar) + '" target="_blank" rel="noopener noreferrer"><strong>Google Scholar</strong></a>. ' +
        "The list below is the selected set from the curriculum vitae. Names in bold are Honggang Yuan.</p>"
    );
  }

  function renderPaper(paper) {
    var badges = (paper.badges || []).map(function (badge) {
      return '<span class="badge badge-' + ui.escapeHtml(badge.kind) + '">' + ui.escapeHtml(badge.label) + "</span>";
    }).join("");
    var links = (paper.links || []).map(function (link) {
      return '<a class="btn" href="' + ui.escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer">' + ui.escapeHtml(link.label) + "</a>";
    }).join("");
    var note = paper.note ? '<p class="pub-note-line">' + ui.escapeHtml(paper.note) + "</p>" : "";
    var paperLink = (paper.links || []).filter(function (link) {
      return link.label === "Paper";
    })[0];
    var titleBody = ui.escapeHtml(paper.title) + ".";
    var titleHtml = paperLink
      ? '<a href="' + ui.escapeHtml(paperLink.url) + '" target="_blank" rel="noopener noreferrer">' + titleBody + "</a>"
      : '<span class="pub-title-text">' + titleBody + "</span>";
    return (
      '<article class="pub" data-type="' + ui.escapeHtml(paper.type) + '" data-year="' + paper.year + '" data-id="' + ui.escapeHtml(paper.id) + '">' +
        '<div class="pub-icon" aria-hidden="true"><i class="fa-regular fa-file-lines"></i></div>' +
        "<div>" +
          '<h2 class="pub-title"><span class="pub-tag">[' + ui.escapeHtml(paper.tag) + "]</span> " + titleHtml + "</h2>" +
          '<p class="pub-authors">' + ui.formatAuthors(paper.authors) + ".</p>" +
          '<p class="pub-venue">' + ui.escapeHtml(paper.venue) + (badges ? " " + badges : "") + "</p>" +
          '<div class="pub-actions">' +
            '<button class="btn" type="button" data-cite="' + ui.escapeHtml(paper.id) + '">Cite</button>' +
            links +
          "</div>" +
          note +
        "</div>" +
      "</article>"
    );
  }

  function applyFilters() {
    var query = document.getElementById("pub-search").value.trim().toLowerCase();
    var type = document.getElementById("pub-type").value;
    var year = document.getElementById("pub-year").value;
    var visible = 0;
    document.querySelectorAll(".pub").forEach(function (node) {
      var paper = publications.filter(function (item) {
        return item.id === node.getAttribute("data-id");
      })[0];
      var haystack = (paper.title + " " + paper.venue + " " + paper.authors.map(function (author) {
        return author.name;
      }).join(" ")).toLowerCase();
      var show = (!query || haystack.indexOf(query) !== -1) &&
        (!type || paper.type === type) &&
        (!year || String(paper.year) === year);
      node.hidden = !show;
      if (show) {
        visible += 1;
      }
    });
    document.getElementById("pub-empty").hidden = visible !== 0;
  }

  var root = document.getElementById("publications");
  root.innerHTML =
    '<div class="container page-narrow">' +
      "<h1>Selected Publications</h1>" +
      renderFilters() +
      '<div id="pub-list">' + publications.map(renderPaper).join("") + "</div>" +
      '<p id="pub-empty" class="pub-empty" hidden>No publications match the current filters.</p>' +
    "</div>";

  root.addEventListener("input", applyFilters);
  root.addEventListener("change", applyFilters);
  root.addEventListener("click", function (event) {
    var button = event.target.closest("[data-cite]");
    if (!button) {
      return;
    }
    var id = button.getAttribute("data-cite");
    var paper = publications.filter(function (item) {
      return item.id === id;
    })[0];
    if (paper) {
      ui.openCite(paper);
    }
  });

  ui.mountChrome("publications");
})();
