
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
function acknowledge(btn) {
  btn.disabled = true;
  btn.textContent = "Acknowledged";
}
