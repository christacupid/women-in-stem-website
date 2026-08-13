/* Women in STEM — shared site logic */

const NAV_ITEMS = [
  { href: "index.html", label: "Home", id: "home" },
  { href: "about.html", label: "About", id: "about" },
  { href: "events.html", label: "Events", id: "events" },
  { href: "opportunities.html", label: "Opportunities", id: "opportunities" },
  { href: "resources.html", label: "Resources", id: "resources" },
  { href: "get-involved.html", label: "Get Involved", id: "get-involved" },
  { href: "blog.html", label: "Blog & Podcast", id: "blog" },
];

const FOOTER_SECONDARY = [
  { href: "team.html", label: "Team", id: "team" },
  { href: "contact.html", label: "Contact", id: "contact" },
];

const PLACEHOLDER_TEXT = "Content coming soon";

/** Build location/time line for event cards and homepage rows. */
function formatEventMeta(e) {
  if (e.meta) return e.meta;
  const parts = [];
  if (e.location) parts.push(e.location);
  if (e.time) parts.push(e.time);
  return parts.join(" · ");
}

/** Short date for homepage event rows. */
function formatEventDateShort(e) {
  return e.dateShort || e.date;
}

/** Subtle status label for planned/TBD content. */
function renderStatusBadge(status) {
  if (!status) return "";
  const key = status.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let label = status;
  if (status === "Planned") label = "Coming Soon";
  else if (status === "Recorded") label = "Recorded";
  return `<span class="status-badge status-badge--${key}">${label}</span>`;
}

/** Look up a verified social/content URL by label from data.js */
function getSocialUrl(label) {
  const item = (WIS_DATA.links.social || []).find((s) => s.label === label);
  return item && item.url ? item.url : null;
}

/** Render verified social links (skips entries without a URL). */
function renderSocialLinks() {
  const links = (WIS_DATA.links.social || []).filter((item) => item.url);
  if (!links.length) return "";
  return links.map((item) => {
    const external = item.url.startsWith("http");
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${item.url}"${attrs} aria-label="${item.label}">${item.label}</a>`;
  }).join("");
}

/** Centralized membership URL from data.js */
function getMembershipUrl() {
  const membership = WIS_DATA.links.membership;
  return membership && membership.url ? membership.url : null;
}

/** Centralized Director application URL from data.js */
function getDirectorApplicationUrl() {
  const app = WIS_DATA.directorApplication;
  return app && app.url ? app.url : null;
}

function renderDirectorApplyLink(label) {
  const url = getDirectorApplicationUrl();
  if (!url) return "";
  return `<a class="btn-primary" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

/** Prominent recruitment section for get-involved.html */
function renderDirectorRecruitmentSection() {
  const app = WIS_DATA.directorApplication;
  const url = getDirectorApplicationUrl();
  if (!url) return "";
  return `
    <section class="bg-alt" id="director-applications">
      <div class="wrap">
        <div class="recruitment-banner">
          <div class="section-head">
            <div class="eyebrow">Join the WIS Team</div>
            <h2>${app.title}</h2>
            <p>WIS is hiring Directors for the 2026–27 year. Join our team, help shape the WIS community, and take on a leadership role within the club.</p>
            <p class="recruitment-timing">${app.timing}</p>
          </div>
          ${renderDirectorApplyLink("Apply to Be a Director →")}
        </div>
      </div>
    </section>`;
}

/** Compact recruitment callout for the homepage */
function renderDirectorRecruitmentCallout() {
  const url = getDirectorApplicationUrl();
  if (!url) return "";
  return `
    <div class="recruitment-callout">
      <div>
        <div class="eyebrow">Join the team</div>
        <h2>Want to help shape WIS?</h2>
        <p>Director applications for the 2026–27 year open in September.</p>
      </div>
      ${renderDirectorApplyLink("Apply to Be a Director →")}
    </div>`;
}

/** Flatten team groups into a single member list (preserves data.js order). */
function getAllTeamMembers() {
  return WIS_DATA.team.flatMap((group) =>
    group.members.map((m) => ({ ...m, group: group.group }))
  );
}

function renderHeader(activeId) {
  const { links, site } = WIS_DATA;
  const navLinks = NAV_ITEMS.map((item) => {
    const cls = item.id === activeId ? "active" : "";
    return `<a href="${item.href}" class="${cls}">${item.label}</a>`;
  }).join("");

  const mobileLinks = NAV_ITEMS.map((item) => {
    const cls = item.id === activeId ? "active" : "";
    return `<a href="${item.href}" class="${cls}">${item.label}</a>`;
  }).join("");

  const secondaryMobile = FOOTER_SECONDARY.map((item) => {
    const cls = item.id === activeId ? "active" : "";
    return `<a href="${item.href}" class="${cls}">${item.label}</a>`;
  }).join("");

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header>
      <nav aria-label="Main navigation">
        <a class="brand" href="index.html" aria-label="Women in STEM at Western University">
          <img class="brand-logo" src="${links.logo}" alt="Women in STEM logo">
          <span class="brand-text">${site.name} - ${site.university}</span>
        </a>
        <div class="navlinks">${navLinks}</div>
        <a class="nav-cta" href="${getMembershipUrl()}" target="_blank" rel="noopener noreferrer">Join us</a>
        <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div class="mobile-nav" id="mobile-nav">
        ${mobileLinks}
        ${secondaryMobile}
        <a class="nav-cta-mobile" href="${getMembershipUrl()}" target="_blank" rel="noopener noreferrer">Join us</a>
      </div>
    </header>`;
}

function renderFooter() {
  const { links, site } = WIS_DATA;
  const mainNav = NAV_ITEMS.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
  const secondaryNav = FOOTER_SECONDARY.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
  const year = new Date().getFullYear();

  return `
    <footer>
      <div class="wrap footer-grid">
        <div class="footer-brand">
          <div class="brand">
            <img class="brand-logo" src="${links.logo}" alt="Women in STEM logo">
            <div>
              <div class="brand-text">${site.name}</div>
              <div class="brand-sub">${site.university}</div>
            </div>
          </div>
          <p class="footer-mission">${site.missionStatement}</p>
          <p class="footer-small">${site.disclaimer}</p>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">Explore</h4>
          ${mainNav}
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">More</h4>
          ${secondaryNav}
          <a href="mailto:${links.email}">${links.email}</a>
          <a href="${site.westernUrl}" target="_blank" rel="noopener noreferrer">Western University</a>
          ${renderSocialLinks()}
        </div>
      </div>
      <div class="wrap footer-bottom">
        © ${year} ${site.name} · ${site.university}
      </div>
    </footer>`;
}

function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    mobileNav.classList.toggle("open", !open);
    menuBtn.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-label", "Open menu");
    });
  });
}

function initLayout(activeId) {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = renderHeader(activeId);
  if (footerEl) footerEl.innerHTML = renderFooter();
  initMobileMenu();
}

function renderStats() {
  return WIS_DATA.stats.map(
    (s) => `<div><div class="stat-num">${s.num}</div><div class="stat-label">${s.label}</div></div>`
  ).join("");
}

function renderPillars() {
  const half = Math.ceil(WIS_DATA.pillars.length / 2);
  const left = WIS_DATA.pillars.slice(0, half);
  const right = WIS_DATA.pillars.slice(half);
  const renderColumn = (items) => items.map(
    (p) => `
      <div class="pillar">
        <div class="mono">${p.label}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>`
  ).join("");
  return `<div>${renderColumn(left)}</div><div>${renderColumn(right)}</div>`;
}

function renderEvents(limit) {
  const events = limit ? WIS_DATA.events.upcoming.slice(0, limit) : WIS_DATA.events.upcoming;
  return events.map(
    (e) => `
      <div class="event-row">
        <div class="event-date">${formatEventDateShort(e)}</div>
        <div>
          <div class="event-title">${e.title}</div>
          <div class="event-meta">${formatEventMeta(e)}</div>
        </div>
        <div class="event-tag">${e.category || e.tag}</div>
      </div>`
  ).join("");
}

function renderEventCards(dark) {
  return WIS_DATA.events.upcoming.map((e) => renderSingleEventCard(e, dark)).join("");
}

function renderSingleEventCard(e, dark) {
  const reg = e.registrationUrl
    ? `<a class="${dark ? "btn-secondary btn-on-dark" : "btn-primary"} card-link" href="${e.registrationUrl}" target="_blank" rel="noopener noreferrer">Register →</a>`
    : "";
  const desc = e.description ? `<p>${e.description}</p>` : "";
  const purpose = e.purpose ? `<p class="card-purpose"><strong>Purpose:</strong> ${e.purpose}</p>` : "";
  const notes = e.notes ? `<p class="card-note">${e.notes}</p>` : "";
  const status = e.status ? `<p class="card-status">${e.status}</p>` : "";
  const meta = formatEventMeta(e);
  return `
    <article class="card event-card">
      <span class="card-tag">${e.category || e.tag}</span>
      <div class="event-date-block">${e.date}</div>
      <h3>${e.title}</h3>
      ${desc}
      ${purpose}
      ${notes}
      ${status}
      ${meta ? `<div class="card-meta">${meta}</div>` : ""}
      ${reg}
    </article>`;
}

function renderPastEvents() {
  if (!WIS_DATA.events.past.length) {
    return renderEmptyState("Past events will be archived here once available.");
  }
  return `<div class="card-grid">${WIS_DATA.events.past.map(
    (e) => `
      <article class="card">
        <span class="card-tag">${e.tag || "Event"}</span>
        <h3>${e.title}</h3>
        <p>${e.recap || PLACEHOLDER_TEXT}</p>
        <div class="card-meta">${e.date}</div>
      </article>`
  ).join("")}</div>`;
}
function renderPerson(m, showPhotoPlaceholder) {
  const photoContent = m.image
    ? `<img src="${m.image}" alt="${m.name}" class="team-photo">`
    : `<span class="photo-soon" aria-hidden="true">${m.initials}</span><span class="photo-soon-label">Photo coming soon</span>`;

  return `
    <div class="person">
      <div class="person-photo">${photoContent}</div>
      <h3>${m.name}</h3>
      <div class="role">${m.role}</div>
    </div>`;
}
function renderPerson(m, showPhotoPlaceholder) {
  const photoContent = showPhotoPlaceholder
    ? `<span class="photo-soon" aria-hidden="true">${m.initials}</span><span class="photo-soon-label">Photo coming soon</span>`
    : `<span aria-hidden="true">${m.initials}</span>`;
  return `
    <div class="person">
      <div class="person-photo">${photoContent}</div>
      <h3>${m.name}</h3>
      <div class="role">${m.role}</div>
    </div>`;
}

function renderTeam(showPhotoPlaceholder) {
  return WIS_DATA.team.map((group) => {
    const members = group.members.map((m) => renderPerson(m, showPhotoPlaceholder)).join("");
    return `
      <div class="team-group">
        <h3 class="team-group-title">${group.group}</h3>
        <div class="team-grid">${members}</div>
      </div>`;
  }).join("");
}

/** Homepage preview — first N members from data.js team roster */
function renderTeamPreview() {
  const count = WIS_DATA.teamPreviewCount || 5;
  const members = getAllTeamMembers().slice(0, count);
  return `<div class="team-preview-grid">${members.map((m) => renderPerson(m, false)).join("")}</div>`;
}

function renderApplications() {
  const appUrl = getDirectorApplicationUrl();
  const isPending = !appUrl;
  return WIS_DATA.applications.map(
    (a) => `
      <a class="apply-card${isPending ? " apply-card--pending" : ""}" href="${appUrl || "#"}"${isPending ? ' aria-disabled="true" tabindex="-1"' : ' target="_blank" rel="noopener noreferrer"'}>
        <span class="mono">${a.department}</span>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <span class="apply-link">${isPending ? "Application link coming soon →" : "Apply to Be a Director →"}</span>
      </a>`
  ).join("");
}

function renderValues() {
  return WIS_DATA.values.map(
    (v) => `
      <div class="value-card">
        <h3>${v.title}</h3>
        <p>${v.description || PLACEHOLDER_TEXT}</p>
      </div>`
  ).join("");
}

function renderEmptyState(message, title) {
  return `
    <div class="empty-state">
      <p class="empty-state-title">${title || PLACEHOLDER_TEXT}</p>
      <p class="empty-state-text">${message}</p>
    </div>`;
}

function renderHomeInvolvePaths() {
  const membershipUrl = getMembershipUrl();
  return `
    <a class="involve-card involve-card--link" href="${membershipUrl}" target="_blank" rel="noopener noreferrer">
      <h3>Become a Member</h3>
      <p>Join WIS through the Western USC Storefront — get event invites, newsletters, and mentorship access.</p>
      <span class="btn-text">Become a Member →</span>
    </a>
    <a class="involve-card involve-card--link" href="get-involved.html#team">
      <h3>Join Our Team</h3>
      <p>Apply for director roles in marketing, operations, and finance.</p>
      <span class="btn-text">View applications →</span>
    </a>
    <a class="involve-card involve-card--link" href="get-involved.html#mentorship">
      <h3>Mentorship</h3>
      <p>Get matched with an upper-year mentor or volunteer to mentor others.</p>
      <span class="btn-text">Learn more →</span>
    </a>
    <a class="involve-card involve-card--link" href="get-involved.html#partnership">
      <h3>Partner With Us</h3>
      <p>Clubs, faculty, researchers, and companies — let's collaborate.</p>
      <span class="btn-text">Get in touch →</span>
    </a>`;
}

function renderFeaturedOpportunity() {
  if (WIS_DATA.opportunities.length) {
    const opp = WIS_DATA.opportunities[0];
    return `
      <div class="featured-opp">
        <div>
          <div class="eyebrow featured-eyebrow">Featured Opportunity</div>
          <h3>${opp.title}</h3>
          <p>${opp.description}</p>
          <div class="card-meta">${opp.organization}${opp.deadline ? ` · Deadline: ${opp.deadline}` : ""}</div>
        </div>
        <a class="btn-primary" href="${opp.url}" target="_blank" rel="noopener noreferrer">Learn more →</a>
      </div>`;
  }
  return `
    <div class="featured-opp featured-opp--soon">
      <div>
        <div class="eyebrow featured-eyebrow">Featured Opportunity</div>
        <h3>Opportunities coming soon</h3>
        <p>Verified scholarships, research positions, internships, and conferences will be highlighted here for WIS members.</p>
      </div>
      <a class="btn-secondary" href="opportunities.html">Browse opportunities →</a>
    </div>`;
}

function renderLatestContentPreview() {
  const blogPosts = WIS_DATA.blogPosts.filter((p) => p.title);
  const podcastEpisodes = WIS_DATA.podcastEpisodes.filter((ep) => ep.title);
  const hasBlog = blogPosts.length > 0;
  const hasPodcast = podcastEpisodes.length > 0;
  const hasSpotlights = WIS_DATA.spotlights.length > 0;

  if (hasBlog || hasPodcast || hasSpotlights) {
    const items = [];
    blogPosts.slice(0, 2).forEach((post) => {
      items.push(renderContentCard(post, "blog"));
    });
    podcastEpisodes.slice(0, 1).forEach((ep) => {
      items.push(renderContentCard(ep, "podcast"));
    });
    return `<div class="card-grid">${items.join("")}</div>`;
  }

  return `
    <div class="content-preview-empty">
      <div class="content-preview-item">
        <span class="mono">Blog</span>
        <p>${PLACEHOLDER_TEXT}</p>
      </div>
      <div class="content-preview-item">
        <span class="mono">Podcast</span>
        <p>${PLACEHOLDER_TEXT}</p>
      </div>
      <div class="content-preview-item">
        <span class="mono">Spotlights</span>
        <p>${PLACEHOLDER_TEXT}</p>
      </div>
    </div>`;
}

function renderContentCard(item, type) {
  const text = item.description || item.excerpt || "";
  const tag = type === "podcast" ? (item.category || "Podcast") : item.category;
  const metaParts = [];
  if (type === "podcast" && item.host) metaParts.push(`Host: ${item.host}`);
  else if (item.author) metaParts.push(item.author);
  if (item.date) metaParts.push(item.date);
  const statusBadge = renderStatusBadge(item.status);
  const cardClass = item.status === "Planned" ? " card--planned" : item.status === "Recorded" ? " card--recorded" : "";
  const listenLink = type === "podcast" && item.listeningUrl
    ? `<a class="btn-text card-link" href="${item.listeningUrl}" target="_blank" rel="noopener noreferrer">Listen →</a>`
    : "";
  return `
    <article class="card${cardClass}">
      <div class="card-header-row">
        <span class="card-tag">${tag}</span>
        ${statusBadge}
      </div>
      <h3>${item.title}</h3>
      <p>${text}</p>
      <div class="card-meta">${metaParts.join(" · ")}</div>
      ${listenLink}
    </article>`;
}

function renderOpportunityHub() {
  if (WIS_DATA.opportunities.length) {
    const filters = ['<button class="filter-btn active" type="button" data-filter="all">All</button>']
      .concat(WIS_DATA.opportunityCategories.map(
        (cat) => `<button class="filter-btn" type="button" data-filter="${cat}">${cat}</button>`
      )).join("");
    return `
      <div class="filter-bar" role="group" aria-label="Filter opportunities">${filters}</div>
      <div class="card-grid" id="opportunity-grid">${renderOpportunityCards(WIS_DATA.opportunities)}</div>`;
  }

  const categories = WIS_DATA.opportunityCategories.map(
    (cat) => `<span class="category-chip">${cat}</span>`
  ).join("");

  return `
    <p class="page-intro">${WIS_DATA.opportunityIntro}</p>
    <div class="empty-state">
      <p class="empty-state-title">Opportunities coming soon</p>
      <p class="empty-state-text">Verified listings will appear here once available. Check back for scholarships, research positions, internships, jobs, conferences, and volunteer roles.</p>
      <div class="category-chips" aria-label="Opportunity categories">${categories}</div>
    </div>`;
}

function renderOpportunityCards(opportunities) {
  return opportunities.map(
    (o) => `
      <article class="card" data-category="${o.category}">
        <span class="card-tag">${o.category}</span>
        <h3>${o.title}</h3>
        <p>${o.description}</p>
        <div class="card-meta">${o.organization}${o.deadline ? ` · Deadline: ${o.deadline}` : ""}</div>
        <a class="btn-text card-link" href="${o.url}" target="_blank" rel="noopener noreferrer">View opportunity →</a>
      </article>`
  ).join("");
}

function renderResourceHub() {
  const hasResources = WIS_DATA.resourceCategories.some(
    (cat) => WIS_DATA.resources[cat.key] && WIS_DATA.resources[cat.key].length
  );

  if (!hasResources) {
    return `
      <p class="page-intro">Women in STEM will organize verified resources here to support members across academic, career, STEM, and well-being needs.</p>
      <div class="category-sections">
        ${WIS_DATA.resourceCategories.map(
          (cat) => `
            <div class="category-section">
              <h3>${cat.label}</h3>
              <p>${cat.blurb}</p>
              <p class="category-section-note">${PLACEHOLDER_TEXT}</p>
            </div>`
        ).join("")}
      </div>`;
  }

  return WIS_DATA.resourceCategories.map((cat) => {
    const items = WIS_DATA.resources[cat.key];
    if (!items.length) return "";
    return `
      <div class="resource-section">
        <h3>${cat.label}</h3>
        <p class="resource-blurb">${cat.blurb}</p>
        <div class="resource-list">
          ${items.map(
            (r) => `
              <div class="resource-item">
                <div>
                  <h4>${r.title}</h4>
                  <p>${r.description || PLACEHOLDER_TEXT}</p>
                </div>
                <a class="btn-text" href="${r.url}" target="_blank" rel="noopener noreferrer">Open →</a>
              </div>`
          ).join("")}
        </div>
      </div>`;
  }).join("");
}

function renderExternalContentCta(url, label) {
  if (!url) return "";
  return `
    <div class="content-external-cta">
      <a class="btn-primary" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>
    </div>`;
}

function renderBlogPanel() {
  const posts = WIS_DATA.blogPosts.filter((p) => p.title);
  const blogCta = renderExternalContentCta(getSocialUrl("Blog"), "Read the WIS Blog →");
  if (!posts.length) {
    return blogCta + renderEmptyState("Blog posts will appear here once published.", "Blog coming soon");
  }
  return blogCta + `<div class="card-grid">${posts.map((post) => renderContentCard(post, "blog")).join("")}</div>`;
}

function renderPodcastPanel() {
  const episodes = WIS_DATA.podcastEpisodes.filter((ep) => ep.title);
  const podcastCta = renderExternalContentCta(getSocialUrl("Podcast"), "Listen on Spotify →");
  if (!episodes.length) {
    return podcastCta + renderEmptyState("Podcast episodes will appear here once published.", "Podcast coming soon");
  }
  return podcastCta + `<div class="card-grid">${episodes.map((ep) => renderContentCard(ep, "podcast")).join("")}</div>`;
}

function renderSpotlightPanel() {
  if (!WIS_DATA.spotlights.length) {
    return renderEmptyState("Women in STEM Spotlights will appear here once published.", "Spotlights coming soon");
  }
  return WIS_DATA.spotlights.map(
    (s) => `
      <article class="spotlight-feature">
        <h3>${s.name}</h3>
        <div class="field">${s.position || ""}${s.field ? ` · ${s.field}` : ""}</div>
        <p>${s.intro || PLACEHOLDER_TEXT}</p>
      </article>`
  ).join("");
}

function initBlogTabs() {
  const tabs = document.querySelectorAll(".tab-btn[data-tab]");
  const panels = document.querySelectorAll("[data-panel]");
  if (!tabs.length) return;

  tabs.forEach((tab, index) => {
    const panelId = `panel-${tab.dataset.tab}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", tab.classList.contains("active") ? "true" : "false");
    tab.setAttribute("aria-controls", panelId);
    tab.id = `tab-${tab.dataset.tab}`;
    if (index === 0) tab.setAttribute("tabindex", "0");
    else tab.setAttribute("tabindex", "-1");

    const panel = document.querySelector(`[data-panel="${tab.dataset.tab}"]`);
    if (panel) {
      panel.id = panelId;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tab.id);
    }

    tab.addEventListener("click", () => activateTab(tab, tabs, panels));
    tab.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const dir = e.key === "ArrowRight" ? 1 : -1;
        const next = (index + dir + tabs.length) % tabs.length;
        tabs[next].focus();
        activateTab(tabs[next], tabs, panels);
      }
    });
  });
}

function activateTab(tab, tabs, panels) {
  tabs.forEach((t) => {
    t.classList.remove("active");
    t.setAttribute("aria-selected", "false");
    t.setAttribute("tabindex", "-1");
  });
  tab.classList.add("active");
  tab.setAttribute("aria-selected", "true");
  tab.setAttribute("tabindex", "0");
  const target = tab.dataset.tab;
  panels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== target);
  });
}

function initOpportunityFilters() {
  const buttons = document.querySelectorAll(".filter-btn[data-filter]");
  const cards = document.querySelectorAll("#opportunity-grid .card");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !match);
      });
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = document.getElementById("form-status");
    if (note) {
      note.textContent = "This form is a UI placeholder and does not submit yet. Please email wistem@uwo.ca instead.";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initBlogTabs();
  initContactForm();
  initOpportunityFilters();
});
