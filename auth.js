/*
 * Smart Future authentication entry point.
 *
 * IMPORTANT:
 * This GitHub Pages site is static. It must NOT verify passwords,
 * store password hashes, or contain private API keys in browser code.
 *
 * The form is intentionally prepared for a future secure backend:
 * Browser -> HTTPS /api/login -> server verifies credentials
 *         -> server issues secure session/token
 *         -> browser uses the session for protected requests.
 */
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const message = document.getElementById("loginMessage");
  message.textContent =
    "Authentication backend is not connected yet. Your password was not sent or stored by this page.";
});
