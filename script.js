// const inputField = document.querySelectorAll('.input-field');
// const errorField = document.querySelectorAll('.field-error');
// const btnSubmit = document.querySelector('.btn-submit');

// // submitting the form event

// btnSubmit.addEventListener('submit', ()=>{
//     if(inputField === ''){
//         errorField.classList.remove('hidden');
//     }
// })

const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const radioButtons = document.querySelectorAll('input[name="request-type"]');
const checkbox = document.getElementById('consent');
const errorMessages = document.querySelectorAll('.field-error');
const checkboxError = document.querySelector('.agrrment .field-error');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // Clear all previous errors
  errorMessages.forEach(error => error.classList.add('hidden'));

  // First Name
  if (!firstName.value.trim()) {
    firstName.nextElementSibling.classList.remove('hidden');
    isValid = false;
  }

  // Last Name
  if (!lastName.value.trim()) {
    lastName.nextElementSibling.classList.remove('hidden');
    isValid = false;
  }

  // Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
    email.nextElementSibling.classList.remove('hidden');
    isValid = false;
  }

  // Radio button
  const radioSelected = Array.from(radioButtons).some(radio => radio.checked);
  if (!radioSelected) {
    document.querySelector('.radio-buttons .field-error').classList.remove('hidden');
    isValid = false;
  }

  // Textarea (message)
  if (!message.value.trim()) {
    message.nextElementSibling.classList.remove('hidden');
    isValid = false;
  }

  // Checkbox
  if (!checkbox.checked) {
    checkboxError.classList.remove('hidden');
    isValid = false;
  } else {
    checkboxError.classList.add('hidden');  
    }

  // If all fields valid, show success
  if (isValid) {
    successMessage.classList.remove('hidden');
    form.reset();
  }
});


