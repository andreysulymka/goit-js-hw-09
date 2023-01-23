
import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const inputsRef = document.querySelectorAll('input');
const delayRef = inputsRef[0];
const stepRef = inputsRef[1];
const amountRef = inputsRef[2];
const btnRef = document.querySelector('button');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          ({ position, delay })
        );
      } else {
        reject({ position, delay })
      }
    }, delay);
  });
}
formRef.addEventListener('input', () => {
  let delay = parseInt(delayRef.value);
  let step = parseInt(stepRef.value);
  let amount = parseInt(amountRef.value);

  formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < amount; i += 1) {
      console.log(delay, step, amount);
      createPromise(i, delay).then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }).finally(() => {
        formRef.reset();
        delay = 0;
        step = 0;
        amount = 0;
      });
      delay += step;
    };
  });
});
