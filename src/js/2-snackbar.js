const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(document.querySelector('input[name="delay"]').value);
  const status = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    if (status === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  promise
    .then(delay => {
      iziToast.success({ title: `✅ Fulfilled promise in ${delay}ms` });
    })
    .catch(delay => {
      iziToast.error({ title: `❌ Rejected promise in ${delay}ms` });
    })
    .finally(
      setTimeout(() => {
        document.querySelector('input[name="delay"]').value = '';
        document.querySelector('input[name="state"]:checked').checked = false;
      }, 0)
    );
});

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
