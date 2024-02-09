const slider = document.getElementById('slider');
const sliderValue = document.getElementById('number-character');

slider.addEventListener('input', () => {
  sliderValue.innerHTML = slider.value;
});

document.getElementById("slider").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, #18171F 100%)'
};

/* DEFINE NUMBER OF CHARACTERS */

const numChar = slider.value;

/* PUT THE PASSWORD TOGETHER */

const charPassword = {
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  symbols: ['!', '"', '#', '$', '%', '&', ',', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~']
}
console.log(charPassword.symbols.length);

const getPassword = () => {
  let randomPassword = [];

  const getRandomUC = () => {
    const randomNumUC = Math.floor(Math.random() * 25);
    let randomUC = charPassword.uppercase[randomNumUC];
    return randomUC;
  };
  randomPassword.push(getRandomUC())
  console.log(randomPassword);

  const getRandomLC = () => {
    const randomNumLC = Math.floor(Math.random() * 25);
    let randomLC = charPassword.lowercase[randomNumLC];
    return randomLC;
  };
  randomPassword.push(getRandomLC())
  console.log(randomPassword);

  const getRandomNum = () => {
    const randomNumNum = Math.floor(Math.random() * 9);
    let randomNum = charPassword.numbers[randomNumNum];
    return randomNum;
  };
  randomPassword.push(getRandomNum());
  console.log(randomPassword);

  const getRandomSymb = () => {
    const randomNumSymb = Math.floor(Math.random() * 27);
    let randomSymb = charPassword.symbols[randomNumSymb];
    return randomSymb;
  };
  randomPassword.push(getRandomSymb());
  console.log(randomPassword);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledArray = shuffleArray(randomPassword);
  console.log(shuffledArray);
  const joinedArray = shuffledArray.join('');
  return joinedArray;
};
console.log(getPassword());

const createPassword = getPassword => {
  for (i = 1; i <= slider.value; i++) {

  };
};

/* CHECK BOXES */

const ucCheckbox = document.querySelector('#Uppercase');
const ucCheck = ucCheckbox.checked;

const lcCheckbox = document.querySelector('#Lowercase');
const lcCheck = lcCheckbox.checked;

const numCheckbox = document.querySelector('#Numbers');
const numCheck = numCheckbox.checked;

const symbCheckbox = document.querySelector('#Symbols');
const symbCheck = lcCheckbox.checked;

const errorMessage = document.querySelector('#error'); 

/* ACTIVATE ON CLICK */

const generateButton = document.querySelector('#generate');
const indicatorText = document.querySelector('#indicator');

generateButton.addEventListener('click', (event) => {
  event.preventDefault;

  /* DISPLAY PW ON SCREEN */
  const showPassword = document.querySelector('#password');

  showPassword.innerHTML = getPassword();

  /* CHECKBOX FUNCTIONS */

  /* UPPERCASE */
  const ucCheckbox = document.querySelector('#Uppercase');
  const ucCheck = ucCheckbox.checked;
  /* LOWERCASE */
  const lcCheckbox = document.querySelector('#Lowercase');
  const lcCheck = lcCheckbox.checked;
  /* NUMBERS */
  const numCheckbox = document.querySelector('#Numbers');
  const numCheck = numCheckbox.checked;
  /* SYMBOLS */
  const symbCheckbox = document.querySelector('#Symbols');
  const symbCheck = symbCheckbox.checked;

  /* ADD BOOLEANS STATES OF CHECKBOXES TO ARRAY */
  const countCheckedBoxes = [ucCheck, lcCheck, numCheck, symbCheck];
  console.log(countCheckedBoxes);

  const numberOfTrue = countCheckedBoxes.filter(states => states === true).length;
  console.log(numberOfTrue);

  const numberOfFalse = countCheckedBoxes.filter(states => states === false).length;
  console.log(numberOfFalse);

  /* FUNCTIONS CHECKBOXES */

  const indicChange = () => {
    const tooWeakIndicator = document.querySelector('#rectangle-1');
    const weakIndicator = document.querySelector('#rectangle-2');
    const mediumIndicator = document.querySelector('#rectangle-3');
    const strongIndicator = document.querySelector('#rectangle-4');
    const indicatorText = document.querySelector('#indicator');

    if ( numberOfTrue === 0) {
      tooWeakIndicator.style.backgroundColor = 'transparent';
      weakIndicator.style.backgroundColor = 'transparent';
      mediumIndicator.style.backgroundColor = 'transparent';
      strongIndicator.style.backgroundColor = 'transparent'
      indicatorText.innerHTML = '';
      errorMessage.style.display = 'inline-block';
      showPassword.innerHTML = '';
    }
    else if ( numberOfTrue === 1) {
      tooWeakIndicator.style.backgroundColor = '#F64A4A';
      weakIndicator.style.backgroundColor = 'transparent';
      mediumIndicator.style.backgroundColor = 'transparent';
      strongIndicator.style.backgroundColor = 'transparent'
      indicatorText.innerHTML = 'TOO WEAK';
      errorMessage.style.display = 'none';
      showPassword.innerHTML = getPassword();
    }
    else if (numberOfTrue === 2) {
      tooWeakIndicator.style.backgroundColor = '#F64A4A';
      weakIndicator.style.backgroundColor = '#FB7C58';
      mediumIndicator.style.backgroundColor = 'transparent';
      strongIndicator.style.backgroundColor = 'transparent'
      indicatorText.innerHTML = 'WEAK';
      errorMessage.style.display = 'none';
      showPassword.innerHTML = getPassword();
    }
    else if (numberOfTrue === 3) {
      tooWeakIndicator.style.backgroundColor = '#F64A4A';
      weakIndicator.style.backgroundColor = '#FB7C58';
      mediumIndicator.style.backgroundColor = '#F8CD65';
      strongIndicator.style.backgroundColor = 'transparent'
      indicatorText.innerHTML = 'MEDIUM';
      errorMessage.style.display = 'none';
      showPassword.innerHTML = getPassword();
    }
    else {
      tooWeakIndicator.style.backgroundColor = '#F64A4A';
      weakIndicator.style.backgroundColor = '#FB7C58';
      mediumIndicator.style.backgroundColor = '#F8CD65';
      strongIndicator.style.backgroundColor = '#A4FFAF'
      indicatorText.innerHTML = 'STRONG';
      errorMessage.style.display = 'none';
      showPassword.innerHTML = getPassword();
    }
    return [tooWeakIndicator, weakIndicator, mediumIndicator, strongIndicator, indicatorText];
  }
  console.log(indicChange());

  /* GENERATING PASSWORD DEPENDING OF THE CHECKBOXES CHECKED */
  const generatePassword = () => {
    
  }
})