// Get the form element
const form = document.querySelector('#signup-form');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting

  // Get user inputs
  const name = document.querySelector('#name').value;
  const number = document.querySelector('#number').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Store user inputs to local storage
  localStorage.setItem('name', name);
  localStorage.setItem('number', number);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  alert('Sign up successful!');
  form.reset(); // Reset form inputs
});

function submitForm() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name && number && email && password) {
    // react to another page
    window.location.href = 'join.html';
  } else {
    alert('please fill in all fields.');
  }
}