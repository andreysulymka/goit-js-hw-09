const startKey = document.querySelector('button[data-start]');
const stopKey = document.querySelector('button[data-stop]');

console.log(startKey)

const timerId = setInterval(getRandomHexColor, 1000);

startKey.addEventListener('click', onClick);

function onClick() {
    timerId
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

stopKey.addEventListener('click', onStop)

function onStop() {
  clearInterval(timerId)  
};