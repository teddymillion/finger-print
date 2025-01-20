let body = document.querySelector('body');
let fingerprint = document.querySelector('.fingerprint');
let center = document.querySelector('.center');
let scan = document.querySelector('.scan');
let timer, timerSuccess;

// Moved query for the button here
const nextButton = document.createElement('button');
nextButton.id = 'nextButton';
nextButton.className = 'next-button';
nextButton.textContent = 'Next';
center.appendChild(nextButton);

function onSuccess() {
  body.removeEventListener('mousedown', onTouchstart);
  body.removeEventListener('touchstart', onTouchstart);

  fingerprint.classList.remove('active');
  center.classList.add('success');

  clearTimeout(timerSuccess);
  timerSuccess = setTimeout(() => {
    body.addEventListener('mousedown', onTouchstart);
    body.addEventListener('touchstart', onTouchstart);
    center.classList.remove('success');
  }, 3000);
}

function onTouchstart() {
  fingerprint.classList.add('active');
  timer = setTimeout(onSuccess, 2000);
}

function onTouchEnd() {
  fingerprint.classList.remove('active');
  clearTimeout(timer);
}

body.addEventListener('mousedown', onTouchstart);
body.addEventListener('touchstart', onTouchstart);
body.addEventListener('mouseup', onTouchEnd);
body.addEventListener('touchend', onTouchEnd);

// Button click handler
nextButton.addEventListener('click', () => {
  window.location.href = 'iris.html'; // Redirect to iris.html
});
