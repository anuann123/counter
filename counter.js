let counter = document.querySelector('p');
let sec = 0;

function increase() {
  sec++;
  counter.innerText = sec;
}

function reset() {
  sec = 0;
  counter.innerText = sec;
}

function decrease() {
  sec--;
  counter.innerText = ((sec < 0) ? (sec = 0, counter.innerText = sec) : sec);
}