const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (h === '' || h < 0 || isNaN(h)) {
    result.innerHTML = `enter a valid height ${h}`;
    return;
  }
  if (w === '' || w < 0 || isNaN(w)) {
    result.innerHTML = `enter a valid weight ${w}`;
    return;
  }
  const h1=h/100;
  const bmi = w / (h1 * h1);
  result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});
