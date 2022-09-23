const button = document.querySelector('.button');
const numbers = document.querySelectorAll('.number');
const input = document.querySelector('.input');

button.addEventListener('click', () => {
  number = input.value;

  if (number >= 8) {
    number = number - 8;
    numbers[0].innerHTML = '1';
  } else {
    numbers[0].innerHTML = '0';
  }

  if (number >= 4) {
    number = number - 4;
    numbers[1].innerHTML = '1';
  } else {
    numbers[1].innerHTML = '0';
  }

  if (number >= 2) {
    number = number - 2;
    numbers[2].innerHTML = '1';
  } else {
    numbers[2].innerHTML = '0';
  }

  if (number >= 1) {
    number = number - 1;
    numbers[3].innerHTML = '1';
  } else {
    numbers[3].innerHTML = '0';
  }
});
