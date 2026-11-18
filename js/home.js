/**
 * Homepage sections: biography, interests, education, experience, contact.
 * Markup mirrors the reference academic homepage: a profile column beside
 * the biography, then a vertical timeline of appointments.
 */
(function () {
  "use strict";

  var data = window.SiteData;
  var ui = window.SiteUI;

  function renderAbout() {
    var profile = data.profile;
    var paragraphs = data.biography.map(function (text) {
      return "<p>" + linkKnownNames(ui.escapeHtml(text)) + "</p>";
    }).join("");

    var interestItems = data.interests.map(function (item) {
      return "<li>" + ui.escapeHtml(item) + "</li>";
    }).join("");

    var skillItems = data.skills.map(function (skill) {
      return "<li><strong>" + ui.escapeHtml(skill.label) + ":</strong> " + ui.escapeHtml(skill.value) + "</li>";
    }).join("");

    var education = data.education.map(function (item) {
      var advisor = "";
      if (item.advisor) {
        advisor = ' <span class="edu-bar">|</span> Advisor: <a href="' + ui.escapeHtml(item.advisorUrl) + '" target="_blank" rel="noopener noreferrer">' + ui.escapeHtml(item.advisor) + "</a>";
      }
      return (
        '<li class="edu-item">' +
          ui.logoSvg(item.logo) +
          "<div>" +
            '<p class="edu-degree">' + ui.escapeHtml(item.degree) + ", " + ui.escapeHtml(item.dates) + "</p>" +
            '<p class="edu-meta"><a href="' + ui.escapeHtml(item.schoolUrl) + '" target="_blank" rel="noopener noreferrer">' + ui.escapeHtml(item.school) + "</a>" + advisor + "</p>" +
          "</div>" +
        "</li>"
      );
    }).join("");

    return (
      '<div class="container about-grid">' +
        '<div class="profile">' +
          '<img class="avatar" src="' + ui.escapeHtml(ui.rootPath(profile.portrait)) + '" alt="' + ui.escapeHtml(profile.portraitAlt) + '" width="220" height="220">' +
          "<h2 class=\"profile-name\">" + ui.escapeHtml(profile.name) + "</h2>" +
          '<p class="profile-role">' + ui.escapeHtml(profile.role) + "</p>" +
          '<p class="profile-org"><a href="' + ui.escapeHtml(profile.orgUrl) + '" target="_blank" rel="noopener noreferrer">' + ui.escapeHtml(profile.org) + "</a></p>" +
          '<div class="social">' + ui.socialIcons(profile) + "</div>" +
        "</div>" +
        '<div class="about-main">' +
          "<h1>Biography</h1>" +
          paragraphs +
          '<div class="about-split">' +
            "<div>" +
              "<h2>Interests</h2>" +
              "<ul>" + interestItems + "</ul>" +
              "<h2>Skills</h2>" +
              "<ul class=\"skill-list\">" + skillItems + "</ul>" +
            "</div>" +
            "<div>" +
              "<h2>Education</h2>" +
              '<ul class="edu-list">' + education + "</ul>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  /** Turn the advisor's and universities' names into links after escaping. */
  function linkKnownNames(escapedText) {
    var links = [
      ["Professor Ting Wang", data.education[0].advisorUrl],
      ["East China Normal University", data.education[0].schoolUrl],
      ["Henan University of Science and Technology", data.education[2].schoolUrl],
      ["Nokia Shanghai Bell Labs", "https://www.nokia.com/"]
    ];
    var html = escapedText;
    links.forEach(function (pair) {
      var label = ui.escapeHtml(pair[0]);
      var anchor = '<a href="' + ui.escapeHtml(pair[1]) + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
      html = html.split(label).join(anchor);
    });
    return html;
  }

  function renderGroup(group) {
    if (!group.items || !group.items.length) {
      return "";
    }
    var heading = group.title ? "<h3>" + ui.escapeHtml(group.title) + "</h3>" : "";
    var items = group.items.map(function (item) {
      return "<li>" + ui.escapeHtml(item) + "</li>";
    }).join("");
    return heading + "<ul>" + items + "</ul>";
  }

  function renderExperience() {
    var items = data.experience.map(function (job) {
      var paragraphs = (job.paragraphs || []).map(function (text) {
        return "<p>" + ui.escapeHtml(text) + "</p>";
      }).join("");
      var groups = (job.groups || []).map(renderGroup).join("");
      return (
        '<li class="timeline-item' + (job.current ? " is-current" : "") + '">' +
          '<span class="timeline-marker" aria-hidden="true"></span>' +
          '<article class="card">' +
            '<div class="card-head">' +
              ui.logoSvg(job.logo) +
              "<div>" +
                '<h2 class="card-role">' + ui.escapeHtml(job.role) + "</h2>" +
                '<p class="card-org"><a href="' + ui.escapeHtml(job.orgUrl) + '" target="_blank" rel="noopener noreferrer">' + ui.escapeHtml(job.org) + "</a></p>" +
                '<p class="card-meta"><span>' + ui.escapeHtml(job.dates) + "</span><span>" + ui.escapeHtml(job.location) + "</span></p>" +
              "</div>" +
            "</div>" +
            '<div class="card-body">' + paragraphs + groups + "</div>" +
          "</article>" +
        "</li>"
      );
    }).join("");

    return (
      '<div class="container exp-layout">' +
        '<h1 class="section-heading">Experience &amp; Awards</h1>' +
        '<ol class="timeline">' + items + "</ol>" +
      "</div>"
    );
  }

  function renderContact() {
    var profile = data.profile;
    var rows = [
      { icon: "fa-solid fa-envelope", html: '<a href="mailto:' + ui.escapeHtml(profile.email) + '">' + ui.escapeHtml(profile.email) + "</a>" },
      { icon: "fa-solid fa-phone", html: '<a href="tel:+86' + profile.phone.replace(/-/g, "") + '">' + ui.escapeHtml(profile.phone) + "</a>" },
      { icon: "fa-solid fa-location-dot", html: ui.escapeHtml(profile.location) },
      { icon: "fa-solid fa-building-columns", html: ui.escapeHtml(profile.department) },
      { icon: "ai ai-google-scholar", html: '<a href="' + ui.escapeHtml(profile.scholar) + '" target="_blank" rel="noopener noreferrer">Google Scholar</a>' },
      { icon: "fa-brands fa-github", html: '<a href="' + ui.escapeHtml(profile.github) + '" target="_blank" rel="noopener noreferrer">GitHub</a>' },
      { icon: "fa-solid fa-file-lines", html: '<a href="' + ui.escapeHtml(ui.rootPath(profile.cv)) + '">Curriculum Vitae (PDF, Chinese)</a>' }
    ];
    var list = rows.map(function (row) {
      var iconClass = row.icon.indexOf("ai ") === 0 ? row.icon : row.icon;
      return "<li><i class=\"" + iconClass + "\" aria-hidden=\"true\"></i><span>" + row.html + "</span></li>";
    }).join("");

    return (
      '<div class="container exp-layout">' +
        '<h1 class="section-heading">Contact</h1>' +
        '<ul class="contact-list">' + list + "</ul>" +
      "</div>"
    );
  }

  document.getElementById("about").innerHTML = renderAbout();
  document.getElementById("experience").innerHTML = renderExperience();
  document.getElementById("contact").innerHTML = renderContact();

  ui.mountChrome("home");
  ui.initScrollSpy();
})();
