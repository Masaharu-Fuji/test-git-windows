const counter = document.getElementById('counter-number');

const addEventClickButton = (id) => {
  document.getElementById(id).addEventListener('click', () => {
    let currentCount = parseInt(counter.textContent);
    calcCounter(id, currentCount);
  });
}

const calcCounter = (id, target) => {
  if (id === 'increment-button') {
    target += 1;
  } else if (id === 'increment-10-button') {
    target += 10;
  } else if (id === 'decrement-button') {
    target -= 1;
  } else if (id === 'decrement-10-button') {
    target -= 10;
  } else if (id === 'multiplication-button') {
    target *= 2;
  } else {
    target = 0;
  }
  counter.textContent = target;
  echoText(50, target);
}

const echoText = (checker, target) => {
  const text = document.querySelector('.text');
  if (target > checker) {
    text.textContent = `${checker}を超えました！`;
  } else {
    text.textContent = ``;
  }
}

addEventClickButton('increment-button');
addEventClickButton('decrement-button');
addEventClickButton('increment-10-button');
addEventClickButton('decrement-10-button');
addEventClickButton('multiplication-button');
addEventClickButton('reset-button');