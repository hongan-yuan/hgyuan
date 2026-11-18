/**
 * Patents page. Renders SiteData.patents, or a short empty state.
 * The curriculum vitae does not list patents.
 */
(function () {
  "use strict";

  var ui = window.SiteUI;
  var patents = window.SiteData.patents;
  var body;

  if (!patents.length) {
    body = '<p class="lead">No patents are publicly listed.</p>';
  } else {
    body = "<ul class=\"patent-list\">" + patents.map(function (patent) {
      return "<li><strong>" + ui.escapeHtml(patent.title) + "</strong> — " + ui.escapeHtml(patent.detail) + "</li>";
    }).join("") + "</ul>";
  }

  document.getElementById("patents").innerHTML =
    '<div class="container page-narrow">' +
      "<h1>Patents</h1>" +
      body +
    "</div>";

  ui.mountChrome("patents");
})();
