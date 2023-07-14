
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Perform final validation before submitting the form
      if (validateForm()) {
        form.submit();
      }
    });

    nameInput.addEventListener('input', function() {
      validateName();
    });

    emailInput.addEventListener('input', function() {
      validateEmail();
    });

    passwordInput.addEventListener('input', function() {
      validatePassword();
    });

    function validateForm() {
      let isValid = true;

      if (!validateName()) {
        isValid = false;
      }

      if (!validateEmail()) {
        isValid = false;
      }

      if (!validatePassword()) {
        isValid = false;
      }

      return isValid;
    }

    function validateName() {
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        return false;
      } else {
        nameError.textContent = '';
        return true;
      }
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === '') {
        emailError.textContent = 'Email is required';
        return false;
      } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email format';
        return false;
      } else {
        emailError.textContent = '';
        return true;
      }
    }

    function validatePassword() {
      if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        return false;
      } else if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        return false;
      } else {
        passwordError.textContent = '';
        return true;
      }
    }

// Attach event listener to the form submission
var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate age
  var ageInput = document.getElementById('age');
  var ageError = document.getElementById('ageError');
  if (ageInput.value === '') {
    ageError.textContent = 'Age is required.';
  } else {
    ageError.textContent = ''; // Clear the error message
  }

  // Validate gender
  var genderSelect = document.getElementById('gender');
  var genderError = document.getElementById('genderError');
  if (genderSelect.value === '') {
    genderError.textContent = 'Gender is required.';
  } else {
    genderError.textContent = ''; // Clear the error message
  }

  // Validate address
  var addressInput = document.getElementById('address');
  var addressError = document.getElementById('addressError');
  if (addressInput.value === '') {
    addressError.textContent = 'Address is required.';
  } else {
    addressError.textContent = ''; // Clear the error message
  }

  // Validate contact number
  var contactNumberInput = document.getElementById('contactNumber');
  var contactNumberError = document.getElementById('contactNumberError');
  if (contactNumberInput.value === '') {
    contactNumberError.textContent = 'Contact number is required.';
  } else {
    contactNumberError.textContent = ''; // Clear the error message
  }

  // Validate CAPTCHA
  var captchaInput = document.getElementById('captcha');
  var captchaError = document.getElementById('captchaError');
  if (captchaInput.value === '') {
    captchaError.textContent = 'CAPTCHA is required.';
  } else {
    captchaError.textContent = ''; // Clear the error message
  }

  // Submit the form if there are no errors
  if (
    ageInput.value !== '' &&
    genderSelect.value !== '' &&
    addressInput.value !== '' &&
    contactNumberInput.value !== '' &&
    captchaInput.value !== ''
  ) {
    myForm.submit();
  }
});


    function generateCaptcha() {
      var captcha = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var captchaLength = 6; // Change the length of the CAPTCHA as needed
    
      for (var i = 0; i < captchaLength; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    
      return captcha;
    }
    
  // Display the CAPTCHA image
function displayCaptcha() {
  var captchaImage = document.getElementById('captchaImage');
  var captcha = generateCaptcha();
  var captchaUrl = 'captcha.php?captcha=' + captcha; // Replace with the actual URL of your server-side script

  captchaImage.src = captchaUrl;
  captchaImage.alt = 'CAPTCHA Image';
  captchaImage.dataset.captcha = captcha; // Store the CAPTCHA value in a data attribute
}


    // Validate the user's input
    function validateCaptcha() {
      var inputCaptcha = document.getElementById('captcha').value;
      var captchaImage = document.getElementById('captchaImage');
      var captcha = captchaImage.dataset.captcha;
    
      if (inputCaptcha === captcha) {
        return true; // CAPTCHA is valid
      } else {
        return false; // CAPTCHA is invalid
      }
    }
    
    // Attach event listener to the form submission
    var form2 = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
      if (!validateCaptcha()) {
        event.preventDefault(); // Prevent form submission if CAPTCHA is invalid
        document.getElementById('captchaError').textContent = 'Invalid CAPTCHA. Please try again.';
        displayCaptcha(); // Refresh CAPTCHA image on validation failure
      }
    });
    
    // Display initial CAPTCHA on page load
    displayCaptcha();