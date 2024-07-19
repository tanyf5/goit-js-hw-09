const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const textArea = form.elements.message;
const email = form.elements.email;
const localStorageKey = 'feedback-form-state';

const dataFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));
if (dataFromLocalStorage) {
  email.value = dataFromLocalStorage.email || '';
  formData.email = dataFromLocalStorage.email || '';
  textArea.value = dataFromLocalStorage.message || '';
  formData.message = dataFromLocalStorage.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim() !== '' && textArea.value.trim() !== '') {
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = '';
    formData.message = '';
  } else {
    alert('Fill please all fields');
  }
});