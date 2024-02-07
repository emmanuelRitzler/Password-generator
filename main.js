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
  return shuffledArray;
};
console.log(getPassword());

const createPassword = getPassword => {
  for (i = 1; i <= slider.value; i++) {

  };
};



/* ACTIVATE ON CLICK */

const generateButton = document.querySelector('#generate');

generateButton.addEventListener('click', (event) => {
  event.preventDefault;

  /* DISPLAY PW ON SCREEN */
  const showPassword = document.querySelector('#password');

  showPassword.innerHTML = getPassword();
})