const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('password-error');
const warning = document.createElement('i');

confirmPassword.oninput = () => checkPassword(confirmPassword.value);

function addWarning() {
  confirmPasswordError.textContent = '';
  warning.setAttribute("class","fa fa-exclamation-triangle");
  warning.setAttribute("aria-hidden", true)
  confirmPasswordError.appendChild(warning);
  confirmPasswordError.append(' Passwords do not match');
}

function checkPassword(e) {
  if (password.value !== e) {
    addWarning();
  }
  if (password.value === e) {
    confirmPasswordError.textContent = '';
  }
}
