document.addEventListener('click', (e) => {
  const s = e.target.closest('summary');
  if (s) return;
});