/* Native buttons preserve keyboard access and announce each panel's state. */
document.querySelectorAll('.bio-toggle[aria-controls]').forEach((button) => {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  if (!panel) return;
  panel.hidden = true;
  button.hidden = false;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
  });
});
