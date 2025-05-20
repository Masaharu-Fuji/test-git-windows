const counter = document.getElementById('counter-number');

document.getElementById('increment-button').addEventListener('click', () => {
  let currentCount = parseInt(counter.textContent);
  counter.textContent = currentCount + 1;
});
