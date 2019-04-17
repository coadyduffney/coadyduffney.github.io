const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const timeLeft = document.querySelector('.time');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Returns random hole (Div where moles will pop up)
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('nope');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  timer(10);
  peep();
  setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));

// Timer Functions
let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if we shold stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // Display Timer
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  if (seconds > 0) {
    timeLeft.textContent = seconds;
  } else {
    timeLeft.textContent = 'Game Over!';
  }

}