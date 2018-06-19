
function removeTransition(e) {
  // Skip if it's not a transform event
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  // Stop function from running if key pressed doesn't match up with our elements data-key value
  if (!audio) return;
  key.classList.add('playing');

  // Play sound clip from start every time a corresponding key is pressed
  audio.currentTime = 0;
  audio.play();
}

// Find all elements in the document with a class 'key'
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
