/* ============================================================
   components.js — injects shared nav + footer into every page
   Works in three environments:
     1. GitHub Pages  (https://user.github.io/mountaineering-log/)
     2. Local dev server  (http://localhost:port/)
     3. Direct file:// open (double-click the HTML file)
   ============================================================ */

// Detect the root of the project relative to the current page.
// We look for how many directory levels deep the current page sits
// and build a relative path prefix to reach the root.
const ROOT = (() => {
  const path = window.location.pathname;
  // Count slashes after the repo root to determine depth
  // e.g. /mountaineering-log/summit/hasan-dagi.html → depth 2 → prefix ../
  // e.g. /mountaineering-log/index.html → depth 1 → prefix ./
  let segments = path.replace(/\/+$/, '').split('/');
  // Remove empty first element from leading slash
  if (segments[0] === '') segments.shift();
  // On GitHub Pages the first segment is the repo name; locally it may not be
  // We only care about depth from the project root, so count how many folders
  // deep the current file is within mountaineering-log/ (or root).
  // Find the mountaineering-log segment if present
  const repoIdx = segments.indexOf('mountaineering-log');
  const fileSegments = repoIdx >= 0 ? segments.slice(repoIdx + 1) : segments;
  // fileSegments is the path relative to project root, e.g. ['summit','hasan-dagi.html']
  const depth = fileSegments.length > 1 ? fileSegments.length - 1 : 0;
  return depth === 0 ? './' : '../'.repeat(depth);
})();

function rel(href) {
  // href is always root-relative starting with / e.g. '/summits.html' or '/'
  if (href === '/') return ROOT + 'index.html';
  return ROOT + href.replace(/^\//, '');
}

// ── Navigation ────────────────────────────────────────────────
const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/summits.html', label: 'Summits' },
  { href: '/activities.html', label: 'Activities' },
  { href: '/goals.html',   label: 'Goals' },
  { href: '/gallery.html', label: 'Gallery' },
  { href: '/about.html',   label: 'About' },
];

function buildNav() {
  // Normalize the current URL to a project-root path. The previous
  // implementation referenced an undefined BASE variable, which stopped the
  // entire component script before the nav and footer could be mounted.
  const segments = window.location.pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const repoIdx = segments.indexOf('mountaineering-log');
  const relativeSegments = repoIdx >= 0 ? segments.slice(repoIdx + 1) : segments;
  const current = relativeSegments.length === 0 ||
    (relativeSegments.length === 1 && relativeSegments[0] === 'index.html')
    ? '/'
    : '/' + relativeSegments.join('/');
  const linksHtml = navLinks.map(l => {
    const isActive = current === l.href || current === l.href.replace('.html', '');
    return `<li><a href="${rel(l.href)}"${isActive ? ' class="active"' : ''}>${l.label}</a></li>`;
  }).join('');

  return `
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <div class="site-nav__inner">
    <a class="site-nav__brand" href="${rel('/')}">
      ▲ Beril <span>Mountain Journal</span>
    </a>
    <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="site-nav__links" id="nav-links">
      ${linksHtml}
    </ul>
  </div>
</nav>`;
}

// ── Footer ────────────────────────────────────────────────────
function buildFooter() {
  return `
<footer class="site-footer" role="contentinfo">
  <div class="site-footer__inner">
    <div>
      <span class="site-footer__brand">▲ Beril Mountain Journal</span>
      <p>A personal archive of summits, hikes, climbs, and the mountains still to come.</p>
      <p>Aladağlar · Ballıkayalar · wherever the map leads next.</p>
    </div>
    <div>
      <h4>Pages</h4>
      <ul>
        <li><a href="${rel('/')}">Home</a></li>
        <li><a href="${rel('/summits.html')}">Summits</a></li>
        <li><a href="${rel('/activities.html')}">Activities</a></li>
        <li><a href="${rel('/goals.html')}">Goals</a></li>
        <li><a href="${rel('/gallery.html')}">Gallery</a></li>
        <li><a href="${rel('/about.html')}">About</a></li>
      </ul>
    </div>
    <div>
      <h4>Summits</h4>
      <ul>
        <li><a href="${rel('/summit/hasan-dagi.html')}">Hasan Dağı — 3,268 m</a></li>
        <li><a href="${rel('/summit/emler.html')}">Emler — 3,723 m</a></li>
        <li><a href="${rel('/summit/yildizlar.html')}">Yıldızlar — Yıldızbaşı + Yıldızbatı</a></li>
      </ul>
    </div>
  </div>
  <div class="site-footer__bottom">
    © ${new Date().getFullYear()} Beril Kiyanfer · All rights reserved
  </div>
</footer>`;
}

// ── Mount ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Insert nav
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = buildNav();

  // Insert footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = buildFooter();

  // Mobile toggle
  document.addEventListener('click', e => {
    const btn = e.target.closest('.nav-toggle');
    if (!btn) return;
    const links = document.getElementById('nav-links');
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  // Lightbox
  document.addEventListener('click', e => {
    const item = e.target.closest('[data-lightbox]');
    if (item) {
      const src = item.dataset.lightbox;
      const lb = document.getElementById('lightbox');
      if (lb) {
        lb.querySelector('.lightbox__img').src = src;
        lb.classList.add('open');
      }
    }
    if (e.target.closest('.lightbox__close') || e.target.id === 'lightbox') {
      const lb = document.getElementById('lightbox');
      if (lb) lb.classList.remove('open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const lb = document.getElementById('lightbox');
      if (lb) lb.classList.remove('open');
    }
  });
});
