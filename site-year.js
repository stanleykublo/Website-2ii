const websiteYear = new Date().getFullYear();

document.querySelectorAll('[data-copyright-year]').forEach((element) => {
  element.textContent = String(websiteYear);
});
