const slider = document.getElementById('slider');
const sliderValue = document.getElementById('number-character');

slider.addEventListener('input', () => {
  sliderValue.innerHTML = slider.value;
});

document.getElementById("slider").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, #18171F 100%)'
  };

  /* DISPLAY PW ON SCREEN */

  const showPassword = document.querySelector('#password');

  const inputPassword = (passwordString) => {
    showPassword.innerHTML = 'passwordString';
  }

  /* DEFINE NUMBER OF CHARACTERS */

  const numChar = slider.value;

  const generateButton = document.querySelector('#generate');

  const charPassword = {
    uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    symbols: ['!', '"', '#', '$', '%', '&', ',', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~']
  }
  console.log(charPassword.symbols.length - 1);

  const getPassword = () => {
    let randomPassword = [];

    const randomUC = Math.floor(Math.random() * 27);
    const randomLC = Math.floor(Math.random() * 27);
    const randomNum = Math.floor(Math.random() * 11);
    const randomSymb = Math.floor(Math.random() * 27);
  }

  generateButton.addEventListener('click', (event) => {
    event.preventDefault;
    const randomNumber = Math.floor(Math.random() * numChar);

    const 

  })