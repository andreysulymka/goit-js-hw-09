const startKey = document.querySelector('button[data-start]');
const stopKey = document.querySelector('button[data-stop]');

let timeoutId = null;

startKey.addEventListener('click', onClick);
stopKey.addEventListener('click', onStop);

function onClick() {
  timeoutId = setInterval(() => {
       let hexColor = getRandomHexColor();
       document.body.style.backgroundColor = hexColor
  }, 1000);
  startKey.disabled = true; 
 };
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onStop() {
  clearInterval(timeoutId);
  startKey.disabled = false;
};