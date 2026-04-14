/* -----------------------------------------
   main.js
   Renders every section from the content object.
   This keeps HTML simple and content easy to edit.
----------------------------------------- */

(function () {
  const content = window.siteContent;

  if (!content) {
    console.error("siteContent is missing. Check js/content.js.");
    return;
  }

  const mount = (id, html) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = `<div class="container">${html}</div>`;
    }
  };

  const safeLink = (href) => (href && href !== "#" ? href : "#");

  const renderButtons = (items) =>
    items
      .map(
        (item) => `
          <a class="${item.style || "button"}" href="${safeLink(item.href)}">
            ${item.label}
          </a>
        `
      )
      .join("");

  const renderTags = (items) =>
    items.map((tag) => `<span class="tag">${tag}</span>`).join("");

  const renderSectionHeading = (eyebrow, title, intro = "") => `
    <div class="section-heading">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${title}</h2>
      ${intro ? `<p>${intro}</p>` : ""}
    </div>
  `;

  mount(
    "hero",
    `
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">${content.hero.eyebrow}</span>
          <h1>${content.meta.name}</h1>
          <p class="kicker">${content.meta.roleLine}</p>
          <p>${content.hero.title}</p>
          <p>${content.hero.intro}</p>
          <div class="button-row">
            ${renderButtons(content.hero.ctas)}
          </div>
        </div>

        <aside class="hero-panel" aria-label="Quick profile overview">
          <div class="metric-list">
            ${content.hero.highlights
              .map(
                (item) => `
                  <div class="metric">
                    <strong>${item.value}</strong>
                    <span>${item.label}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </aside>
      </div>
    `
  );

  mount(
    "snapshot",
    `
      ${renderSectionHeading(
        content.snapshot.eyebrow,
        content.snapshot.title,
        content.snapshot.lead
      )}
      <div class="snapshot-grid">
        <div class="card">
          <ul>
            ${content.snapshot.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </div>
        <aside class="card">
          <h3>${content.snapshot.sideCard.title}</h3>
          <ul class="list-clean">
            ${content.snapshot.sideCard.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </aside>
      </div>
    `
  );

  mount(
    "strengths",
    `
      ${renderSectionHeading(content.strengths.eyebrow, content.strengths.title)}
      <div class="pillars-grid">
        ${content.strengths.items
          .map(
            (item) => `
              <article class="card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `
  );

  mount(
    "experience",
    `
      ${renderSectionHeading(
        content.experience.eyebrow,
        content.experience.title,
        content.experience.intro
      )}
      <div class="timeline">
        ${content.experience.items
          .map(
            (item) => `
              <article class="timeline-item">
                <div class="timeline-meta">
                  <span>${item.period}</span>
                  ${item.meta.map((tag) => `<span class="chip">${tag}</span>`).join("")}
                </div>
                <h3 class="timeline-role">${item.role}</h3>
                <p>${item.summary}</p>
                <ul>
                  ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
              </article>
            `
          )
          .join("")}
      </div>
    `
  );

  mount(
    "case-studies",
    `
      ${renderSectionHeading(content.caseStudies.eyebrow, content.caseStudies.title)}
      <div class="case-grid">
        ${content.caseStudies.items
          .map(
            (item) => `
              <article class="card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                <div class="cluster">${renderTags(item.tags)}</div>
              </article>
            `
          )
          .join("")}
      </div>
    `
  );

  mount(
    "projects",
    `
      ${renderSectionHeading(
        content.projects.eyebrow,
        content.projects.title,
        content.projects.intro
      )}
      <div class="projects-grid">
        ${content.projects.items
          .map(
            (item) => `
              <article class="card project-card">
                <h3>${item.name}</h3>
                <p class="muted">${item.subtitle}</p>
                <p>${item.description}</p>
                <ul>
                  ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
                <div class="cluster">${renderTags(item.tags)}</div>
                <div class="project-links">
                  ${item.links
                    .map(
                      (link) => `
                        <a href="${safeLink(link.href)}">${link.label}</a>
                      `
                    )
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `
  );

  mount(
    "leadership",
    `
      ${renderSectionHeading(content.leadership.eyebrow, content.leadership.title)}
      <div class="cards-grid">
        ${content.leadership.items
          .map(
            (item) => `
              <article class="card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `
  );

  mount(
    "credentials",
    `
      ${renderSectionHeading(
        content.credentials.eyebrow,
        content.credentials.title,
        content.credentials.intro
      )}
      <div class="credentials-grid">
        ${content.credentials.items
          .map(
            (item) => `
              <article class="credential-card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                <div class="credential-links">
                  ${item.links
                    .map((link) => `<a href="${safeLink(link.href)}">${link.label}</a>`)
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `
  );

  mount(
    "certificates",
    `
      ${renderSectionHeading(content.certificates.eyebrow, content.certificates.title)}
      <div class="cert-grid">
        ${content.certificates.items
          .map(
            (item) => `
              <article class="certificate-card">
                <h3>${item.title}</h3>
                <p class="muted">${item.issuer}</p>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `
  );

  mount(
    "contact",
    `
      ${renderSectionHeading(
        content.contact.eyebrow,
        content.contact.title,
        content.contact.intro
      )}
      <div class="contact-grid">
        <div class="contact-panel">
          <h3>Direct contact</h3>
          <ul class="list-clean">
            ${content.contact.details
              .map((item) => {
                const value = item.href
                  ? `<a href="${item.href}">${item.value}</a>`
                  : item.value;
                return `<li><strong>${item.label}:</strong> ${value}</li>`;
              })
              .join("")}
          </ul>
        </div>
        <div class="contact-panel">
          <h3>Availability</h3>
          <p>${content.contact.availability}</p>
          <div class="contact-links">
            <a href="mailto:${content.meta.email}">Email me</a>
            <a href="${content.meta.linkedin}">LinkedIn</a>
            <a href="${content.meta.github}">GitHub</a>
          </div>
        </div>
      </div>
    `
  );

  mount(
    "footer",
    `
      <div class="container">
        <div class="footer-card">
          <div class="footer-grid">
            <div class="stack">
              <strong>${content.meta.name}</strong>
              <span class="muted">${content.meta.roleLine}</span>
              <span class="small-text">${content.footer.note}</span>
            </div>
            <div class="footer-links">
              ${content.footer.links
                .map((link) => `<a href="${link.href}">${link.label}</a>`)
                .join("")}
            </div>
          </div>
        </div>
      </div>
    `
  );

  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  const themeLink = document.getElementById("theme-link");
  const storageKey = "portfolio-theme";
  const themes = {
    default: "css/themes/theme-default.css",
    alt: "css/themes/theme-alt.css"
  };

  const applyTheme = (themeName) => {
    const href = themes[themeName] || themes.default;
    themeLink.setAttribute("href", href);
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem(storageKey, themeName);
  };

  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || "default";
      const next = current === "default" ? "alt" : "default";
      applyTheme(next);
    });
  }
})();
