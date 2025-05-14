const li = document.querySelectorAll('.button');
const body = document.querySelector('body');
li.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const color = e.target.id;
    switch (color) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
    }
  });
});
