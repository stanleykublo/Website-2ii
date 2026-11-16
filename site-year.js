/* Keep the copyright year current. The HTML contains a 2026 fallback. */
const websiteYear = new Date().getFullYear();

document.querySelectorAll('[data-copyright-year]').forEach((element) => {
  element.textContent = String(websiteYear);
});
