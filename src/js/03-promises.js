const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);

const firstdelayRef = document.getElementsByName('delay');
const stepRef = document.getElementsByName('step');
const amountRef = document.getElementsByName('amount');

firstdelayRef.addEventListener('input', (event) => {
  const furstDelay = event.currentTarget.value;
});
stepRef.addEventListener('input', (event) => {
  const step = event.currentTarget.value;
});
amountRef.addEventListener('input', (event) => {
  const amount = event.currentTarget.value;
});

const promises = [];
for (i = 0; i < amount, i++) { };

function onSubmit() {
  
};
function start(amount, createPromise) {
  
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(
        setTimeout(() => { resolve({ position, delay }); }, delay)
      );
    } else {
      reject(  setTimeout(() => { reject({ position, delay }); }, delay));
    }
  });
}

