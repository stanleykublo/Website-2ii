/* Small progressive-enhancement filter; the full gallery remains visible without JavaScript. */
document.querySelectorAll('.filter-controls').forEach((group) => {
  const gallery = group.parentElement.querySelector('[data-gallery]');
  if (!gallery) return;
  const buttons = [...group.querySelectorAll('[data-filter]')];
  const cards = [...gallery.querySelectorAll('.grid-item[data-category]')];
  buttons.forEach((button) => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    cards.forEach((card) => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  }));
});
