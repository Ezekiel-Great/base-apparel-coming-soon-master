function validateEmail() {
  const emailInput = document.getElementById("email");
  const validationMessage = document.querySelector(".validationMessage");
  const erorIcon = document.querySelector(".error");

  // Regular expression to validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    validationMessage.textContent = "Please provide a valid email ";
    validationMessage.style.color = "hsl(0, 93%, 68%)";
    erorIcon.style.display = "block";
    emailInput.style.border = " 2px solid var(--Soft-Red)";
    return false;
  }

  validationMessage.textContent = "";
    erorIcon.style.display = "none";
  return true;
}
