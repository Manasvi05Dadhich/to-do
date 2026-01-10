const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const button = document.querySelector("#button");

form.addEventListener('submit', function(e){
    e.preventDefault();

    button.textContent="LOADING ";
    button.disabled= "true";


    if (username.value === "") {
    showError("Username is required");
    return;
  }

  if (username.value.length < 3) {
    showError("Username must be at least 3 characters");
    return;
  }

  // EMAIL VALIDATION
  if (email.value === "") {
    showError("Email is required");
    return;
  }

  if (!email.value.includes("@")) {
    showError("Email is invalid");
    return;
  }

  // PASSWORD VALIDATION
  if (password.value === "") {
    showError("Password is required");
    return;
  }

  if (password.value.length < 6) {
    showError("Password must be at least 6 characters");
    return;
  }

  // SUCCESS STATE
  message.textContent = "Account created successfully!";
  message.style.color = "lightgreen";
  button.textContent = "Success";
});




function showError(text) {
  message.textContent = text;
  message.style.color = "red";
  button.textContent = "Create Account";
  button.disabled = false;
}