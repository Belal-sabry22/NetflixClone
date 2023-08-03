function valid() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const submitBtn = document.getElementById("submitBtn");
  
    if (email.indexOf("@") == -1 || email.length <= 5) {
      emailError.innerHTML = "Please enter a valid email";
      submitBtn.disabled = true;
      return false; // Prevent form submission
    } else {
      emailError.innerHTML = "";
    }
  
    if (password.length < 5 || password.length > 50) {
      passwordError.innerHTML = "Please enter a valid password";
      submitBtn.disabled = true;
      return false; // Prevent form submission
    } else {
      passwordError.innerHTML = "";
    }
  
    submitBtn.disabled = false; // Enable submit button if the form is valid
    return true; // Allow form submission
  }
  