// Email Validation Check
document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
      emailError.textContent = '';
      emailSuccess.style.display = 'inline';
    } else {
emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
      emailSuccess.style.display = 'none';
    }
  });

  // Password Validation Check
  document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');
    
    if (password.length > 8) {
      passwordError.textContent = '';
      passwordSuccess.style.display = 'inline';
    } else {
      passwordError.textContent = 'Make sure password is more than 8 characters.';
      passwordSuccess.style.display = 'none';
    }
  });

  // Submit Button Click
  document.getElementById('submitBtn').addEventListener('click', function() {
    const emailValid = document.getElementById('email').value.length > 3 && 
                       document.getElementById('email').value.includes('@') && 
                       document.getElementById('email').value.includes('.');
    const passwordValid = document.getElementById('password').value.length > 8;
    
    if (emailValid && passwordValid) {
      const confirmation = confirm('Are you sure you want to submit the form?');
      if (confirmation) {
        alert('Signup successful!');
      } else {
        // Clear inputs and reload the page
        document.getElementById('signupForm').reset();
        window.location.reload();
      }
    } else {
      alert('Please fill in the form correctly before submitting.');
    }
  });
