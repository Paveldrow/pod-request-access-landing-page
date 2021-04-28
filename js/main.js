const form = document.querySelector('.form');
const emailInput = form.querySelector('.form__email');

const REGEXMAIL = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

const errorMessage = document.createElement('p');

const getValidationEmail = () => {
  if (!REGEXMAIL.test(emailInput.value)) {
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Oops! Please check your email';
    emailInput.after(errorMessage);
  } else {
    errorMessage.remove();
  }
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  getValidationEmail();
});