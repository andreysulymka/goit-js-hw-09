const startKey = document.querySelector('button[data-start]');
const stopKey = document.querySelector('button[data-stop]');

let timeoutId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startKey.addEventListener('click', onClick);

function onClick() {
    timeoutId = setInterval(getRandomHexColor, 1000);
};

stopKey.addEventListener('click', onStop);

function onStop() {
  clearInterval(timeoutId)  
};