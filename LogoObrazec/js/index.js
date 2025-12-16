document.addEventListener("DOMContentLoaded", () => {
  const alertBox = document.querySelector(".alert");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const emailField = document.getElementById("emailField");
  const passwordField = document.getElementById("passwordField"); // added
  const form = document.getElementById("emailForm");

  // Popup elements
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const popupBtn = document.getElementById("popupBtn");

  function validateEmail(email) {
    return emailRegex.test(email);
  }

  // Show popup
  function showPopup(message) {
    popup.querySelector("p").textContent = message;
    overlay.style.display = "block";
    popup.style.display = "block";
  }

  // Hide popup and optionally clear inputs
  function hidePopup() {
    overlay.style.display = "none";
    popup.style.display = "none";
    // Clear input fields
    emailField.value = "";
    passwordField.value = "";
    // Remove invalid styles if present
    emailField.classList.remove("invalid");
    emailField.style.border = "";
    alertBox.classList.remove("displayBlock");
  }

  // Event listeners for hiding popup
  closePopup.addEventListener("click", hidePopup);
  popupBtn.addEventListener("click", hidePopup);
  overlay.addEventListener("click", hidePopup);

  // Live validation
  emailField.addEventListener("input", () => {
    if (!validateEmail(emailField.value)) {
      emailField.classList.add("invalid");
    } else {
      emailField.classList.remove("invalid");
      alertBox.classList.remove("displayBlock");
      emailField.style.border = "";
    }
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateEmail(emailField.value)) {
      emailField.style.border = "1px solid red";
      alertBox.classList.add("displayBlock");
      return;
    }

    // Show custom themed popup
    showPopup("Uspešno registriran račun!");
  });
});

