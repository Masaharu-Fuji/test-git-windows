const counter = document.getElementById('counter-number');

const addEventClickButton = (id) => {
  document.getElementById(id).addEventListener('click', () => {
    let currentCount = parseInt(counter.textContent);
    calcCounter(id, currentCount);
  });
}

const calcCounter = (id, target) => {
  if (id === 'increment-button') {
    counter.textContent = target + 1;
  } else if (id === 'decrement-button') {
    counter.textContent = target - 1;
  } else {
    counter.textContent = 0;
  }
}

addEventClickButton('increment-button');
addEventClickButton('decrement-button');
addEventClickButton('reset-button');