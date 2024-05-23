// Get the form element
const form = document.querySelector('#signup-form');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting

  // Get user inputs
  const passcode = document.querySelector('#passcode').value;

  // Store user inputs to local storage
  localStorage.setItem('passcode', passcode);

  alert('Sign up successful!');
  form.reset(); // Reset form inputs
});

function checkPasscode() {
  var passcodeInput = document.getElementById('passcode').value;
  var resultMessage = document.getElementById('result-message');

  // Check if the entered passcode is correct
  if (passcodeInput === '5674Freemason') {
      resultMessage.style.
      color = 'green';
      alert('Utambulisho wako umepokelewa na Grand Master!');
  } else {
      resultMessage.style.
      color = 'red';
      alert('Incorrect passcode. Please ask who invited you.');
  }

}

function checkPasscode() {
  var passcode = document.getElementById("passcode").value;

  if ( passcode) {
    // react to another page
    window.location.href = 'code.html';
  } else {
    alert('please fill in all fields.');
  }
}