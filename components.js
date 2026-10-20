/* Small framework-free password and native-dialog behaviors used in the documentation. */
document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-bh-password-toggle]");
  if (toggle) {
    const field = document.getElementById(toggle.getAttribute("aria-controls"));
    if (!field) return;

    const shouldReveal = field.type === "password";
    field.type = shouldReveal ? "text" : "password";
    toggle.setAttribute("aria-pressed", String(shouldReveal));
    toggle.setAttribute("aria-label", shouldReveal ? "Hide password" : "Show password");
    toggle.textContent = shouldReveal
      ? (toggle.dataset.hideLabel || "HIDE")
      : (toggle.dataset.showLabel || "SHOW");
    return;
  }

  const trigger = event.target.closest("[data-bh-dialog-open]");
  if (!trigger) return;
  const dialog = document.getElementById(trigger.dataset.bhDialogOpen);
  if (dialog && typeof dialog.showModal === "function") dialog.showModal();
});
