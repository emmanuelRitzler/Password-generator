const slider = document.getElementById('slider');
const sliderValue = document.getElementById('number-character');

slider.addEventListener('input', () => {
  sliderValue.innerHTML = slider.value;
});

document.getElementById("slider").oninput = function() {
    var value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, #18171F 100%)';
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

/* CHECK BOXES */

const ucCheckbox = document.querySelector('#Uppercase');
const ucCheck = ucCheckbox.checked;

const lcCheckbox = document.querySelector('#Lowercase');
const lcCheck = lcCheckbox.checked;

const numCheckbox = document.querySelector('#Numbers');
const numCheck = numCheckbox.checked;

const symbCheckbox = document.querySelector('#Symbols');
const symbCheck = lcCheckbox.checked;

const errorMessage = document.querySelector('#error-no-option');  

/* ACTIVATE ON CLICK */

const generateButton = document.querySelector('#generate');
const indicatorText = document.querySelector('#indicator');

generateButton.addEventListener('click', (event) => {
  event.preventDefault;
  copyMessage.style.display = 'none';
  copyMessageMobile.style.display = 'none';

  /* DISPLAY PW ON SCREEN */
  const showPassword = document.querySelector('#password');

  showPassword.innerHTML = getPassword();
  showPassword.style.color = '#E6E5EA';

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
      tooWeakIndicator.style.border = '2px solid #E6E5EA';
      weakIndicator.style.backgroundColor = 'transparent';
      weakIndicator.style.border = '2px solid #E6E5EA';
      mediumIndicator.style.backgroundColor = 'transparent';
      mediumIndicator.style.border = '2px solid #E6E5EA';
      strongIndicator.style.backgroundColor = 'transparent';
      strongIndicator.style.border = '2px solid #E6E5EA';
      indicatorText.innerHTML = '';
      errorMessage.style.display = 'flex';
      showPassword.style.color = '#817D92'
      showPassword.innerHTML = 'P4$5W0rD!';
    }
    else if ( numberOfTrue === 1) {
      tooWeakIndicator.style.backgroundColor = '#F64A4A';
      tooWeakIndicator.style.border = '2px solid #F64A4A';
      weakIndicator.style.backgroundColor = 'transparent';
      weakIndicator.style.border = '2px solid #E6E5EA';
      mediumIndicator.style.backgroundColor = 'transparent';
      mediumIndicator.style.border = '2px solid #E6E5EA';
      strongIndicator.style.backgroundColor = 'transparent';
      strongIndicator.style.border = '2px solid #E6E5EA';
      indicatorText.innerHTML = 'TOO WEAK';
      errorMessage.style.display = 'none';
      showPassword.innerHTML = getPassword();
    }
    else if (numberOfTrue === 2) {
      tooWeakIndicator.style.backgroundColor = '#FB7C58';
      tooWeakIndicator.style.border = '2px solid #FB7C58';
      weakIndicator.style.backgroundColor = '#FB7C58';
      weakIndicator.style.border = '2px solid #FB7C58';
      mediumIndicator.style.backgroundColor = 'transparent';
      mediumIndicator.style.border = '2px solid #E6E5EA';
      strongIndicator.style.backgroundColor = 'transparent';
      strongIndicator.style.border = '2px solid #E6E5EA';
      indicatorText.innerHTML = 'WEAK';
      errorMessage.style.display = 'none';
      showPassword.innerHTML = getPassword();
    }
    else if (numberOfTrue === 3) {
      tooWeakIndicator.style.backgroundColor = '#F8CD65';
      tooWeakIndicator.style.border = '2px solid #F8CD65';
      weakIndicator.style.backgroundColor = '#F8CD65';
      weakIndicator.style.border = '2px solid #F8CD65';
      mediumIndicator.style.backgroundColor = '#F8CD65';
      mediumIndicator.style.border = '2px solid #F8CD65';
      strongIndicator.style.backgroundColor = 'transparent'
      strongIndicator.style.border = '2px solid #E6E5EA';
      indicatorText.innerHTML = 'MEDIUM';
      errorMessage.style.display = 'none';
      showPassword.innerHTML = getPassword();
    }
    else {
      tooWeakIndicator.style.backgroundColor = '#A4FFAF';
      tooWeakIndicator.style.border = 'solid 2px #A4FFAF';
      weakIndicator.style.backgroundColor = '#A4FFAF';
      weakIndicator.style.border = 'solid 2px #A4FFAF';
      mediumIndicator.style.backgroundColor = '#A4FFAF';
      mediumIndicator.style.border = '2px solid #A4FFAF';
      strongIndicator.style.backgroundColor = '#A4FFAF';
      strongIndicator.style.border = 'solid 2px #A4FFAF';
      indicatorText.innerHTML = 'STRONG';
      errorMessage.style.display = 'none';
      showPassword.innerHTML = getPassword();
    }
    return [tooWeakIndicator, weakIndicator, mediumIndicator, strongIndicator, indicatorText];
  }
  console.log(indicChange());

  /* GENERATING PASSWORD DEPENDING OF THE CHECKBOXES CHECKED */
  const generatePassword = () => {
    const numChar = slider.value;
    let passwordArray = [];
    
    const getRandomUC = () => {
      const randomNumUC = Math.floor(Math.random() * 25);
      let randomUC = charPassword.uppercase[randomNumUC];
      return randomUC;
    };
    const getRandomLC = () => {
      const randomNumLC = Math.floor(Math.random() * 25);
      let randomLC = charPassword.lowercase[randomNumLC];
      return randomLC;
    };

    const getRandomNum = () => {
      const randomNumNum = Math.floor(Math.random() * 9);
      let randomNum = charPassword.numbers[randomNumNum];
      return randomNum;
    };

    const getRandomSymb = () => {
      const randomNumSymb = Math.floor(Math.random() * 27);
      let randomSymb = charPassword.symbols[randomNumSymb];
      return randomSymb;
    };

    const oneBox = () => {
      if (ucCheck === true && lcCheck === false && numCheck === false && symbCheck === false) {
        for (let i = 0; i < numChar; i++) {
          let singleUC = getRandomUC();
          passwordArray.push(singleUC);
        }
        console.log(passwordArray);

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === false && lcCheck === true && numCheck === false && symbCheck === false) {
        for (let i = 0; i < numChar; i++) {
          let singleLC = getRandomLC();
          passwordArray.push(singleLC);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === false && lcCheck === false && numCheck === true && symbCheck === false) {
        for (let i = 0; i < numChar; i++) {
          let singleNum = getRandomNum();
          passwordArray.push(singleNum);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === false && lcCheck === false && numCheck === false && symbCheck === true) {
        for (let i = 0; i < numChar; i++) {
          let singleSymb = getRandomSymb();
          passwordArray.push(singleSymb);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
    };
    console.log(oneBox());

    const twoBox = () => {
      if (ucCheck === true && lcCheck === true && numCheck === false && symbCheck === false) {
        let firstOption = Math.floor(numChar / 2);
        let secondOption = numChar - firstOption;
        for (let i = 0; i < firstOption; i++) {
          let singleUC = getRandomUC();
          passwordArray.push(singleUC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleLC = getRandomLC();
          passwordArray.push(singleLC);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === true && lcCheck === false && numCheck === true && symbCheck === false) {
        let firstOption = Math.floor(numChar / 2);
        let secondOption = numChar - firstOption;
        for (let i = 0; i < firstOption; i++) {
          let singleUC = getRandomUC();
          passwordArray.push(singleUC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleNum = getRandomNum();
          passwordArray.push(singleNum);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === true && lcCheck === false && numCheck === false && symbCheck === true) {
        let firstOption = Math.floor(numChar / 2);
        let secondOption = numChar - firstOption;
        for (let i = 0; i < firstOption; i++) {
          let singleUC = getRandomUC();
          passwordArray.push(singleUC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleSymb = getRandomSymb();
          passwordArray.push(singleSymb);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === false && lcCheck === true && numCheck === true && symbCheck === false) {
        let firstOption = Math.floor(numChar / 2);
        let secondOption = numChar - firstOption;
        for (let i = 0; i < firstOption; i++) {
          let singleLC = getRandomLC();
          passwordArray.push(singleLC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleNum = getRandomNum();
          passwordArray.push(singleNum);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === false && lcCheck === true && numCheck === false && symbCheck === true) {
        let firstOption = Math.floor(numChar / 2);
        let secondOption = numChar - firstOption;
        for (let i = 0; i < firstOption; i++) {
          let singleLC = getRandomLC();
          passwordArray.push(singleLC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleSymb = getRandomSymb();
          passwordArray.push(singleSymb);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === false && lcCheck === false && numCheck === true && symbCheck === true) {
        let firstOption = Math.floor(numChar / 2);
        let secondOption = numChar - firstOption;
        for (let i = 0; i < firstOption; i++) {
          let singleNum = getRandomNum();
          passwordArray.push(singleNum);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleSymb = getRandomSymb();
          passwordArray.push(singleSymb);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
    };
    console.log(twoBox());

    const threeBox = () => {
      if (ucCheck === true && lcCheck === true && numCheck === true && symbCheck === false) {
        let firstOption = Math.floor(numChar / 3);
        let secondOption = Math.floor(numChar / 3);
        let thirdOption = numChar - (firstOption + secondOption);
        for (let i = 0; i < firstOption; i++) {
          let singleUC = getRandomUC();
          passwordArray.push(singleUC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleLC = getRandomLC();
          passwordArray.push(singleLC);
        }
        for (let i = 0; i < thirdOption; i++) {
          let singleNum = getRandomNum();
          passwordArray.push(singleNum);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === true && lcCheck === true && numCheck === false && symbCheck === true) {
        let firstOption = Math.floor(numChar / 3);
        let secondOption = Math.floor(numChar / 3);
        let thirdOption = numChar - (firstOption + secondOption);
        for (let i = 0; i < firstOption; i++) {
          let singleUC = getRandomUC();
          passwordArray.push(singleUC);
        }
        console.log(passwordArray)
        for (let i = 0; i < secondOption; i++) {
          let singleLC = getRandomLC();
          passwordArray.push(singleLC);
        }
        console.log(passwordArray)
        for (let i = 0; i < thirdOption; i++) {
          let singleSymb = getRandomSymb();
          passwordArray.push(singleSymb);
        }
        console.log(passwordArray)

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === true && lcCheck === false && numCheck === true && symbCheck === true) {
        let firstOption = Math.floor(numChar / 3);
        let secondOption = Math.floor(numChar / 3);
        let thirdOption = numChar - (firstOption + secondOption);
        for (let i = 0; i < firstOption; i++) {
          let singleUC = getRandomUC();
          passwordArray.push(singleUC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleNum = getRandomNum();
          passwordArray.push(singleNum);
        }
        for (let i = 0; i < thirdOption; i++) {
          let singleSymb = getRandomSymb();
          passwordArray.push(singleSymb);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
      else if (ucCheck === false && lcCheck === true && numCheck === true && symbCheck === true) {
        let firstOption = Math.floor(numChar / 3);
        let secondOption = Math.floor(numChar / 3);
        let thirdOption = numChar - (firstOption + secondOption);
        for (let i = 0; i < firstOption; i++) {
          let singleLC = getRandomLC();
          passwordArray.push(singleLC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleNum = getRandomNum();
          passwordArray.push(singleNum);
        }
        for (let i = 0; i < thirdOption; i++) {
          let singleSymb = getRandomSymb();
          passwordArray.push(singleSymb);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
    };
    console.log(threeBox());

    const allBox = () => {
      if (ucCheck === true && lcCheck === true && numCheck === true && symbCheck === true) {
        let firstOption = Math.floor(numChar / 4);
        let secondOption = Math.floor(numChar / 4);
        let thirdOption = Math.floor(numChar / 4);
        let fourthOption = numChar - (firstOption + secondOption + thirdOption);
        for (let i = 0; i < firstOption; i++) {
          let singleUC = getRandomUC();
          passwordArray.push(singleUC);
        }
        for (let i = 0; i < secondOption; i++) {
          let singleLC = getRandomLC();
          passwordArray.push(singleLC);
        }
        for (let i = 0; i < thirdOption; i++) {
          let singleNum = getRandomNum();
          passwordArray.push(singleNum);
        }
        for (let i = 0; i < fourthOption; i++) {
          let singleSymb = getRandomSymb();
          passwordArray.push(singleSymb);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
      
        const shuffledArray = shuffleArray(passwordArray);
        console.log(shuffledArray);
        const joinedArray = shuffledArray.join('');
        showPassword.innerHTML = joinedArray;
        return joinedArray;
      }
    };
    console.log(allBox());
  };
  console.log(generatePassword());
});

const copyClipboard = document.querySelector('#copyIcon');
const copyMessage = document.querySelector('#copy-text');
const copyMessageMobile = document.querySelector('#copyText-mobile');

copyClipboard.addEventListener('click', () => {
  const ucCheckbox = document.querySelector('#Uppercase');
  const ucCheck = ucCheckbox.checked;
  const lcCheckbox = document.querySelector('#Lowercase');
  const lcCheck = lcCheckbox.checked;
  const numCheckbox = document.querySelector('#Numbers');
  const numCheck = numCheckbox.checked;
  const symbCheckbox = document.querySelector('#Symbols');
  const symbCheck = symbCheckbox.checked;
  const selectPassword = document.querySelector('#password');
  const standardPassword = selectPassword.innerHTML;

  const countCheckedBoxes = [ucCheck, lcCheck, numCheck, symbCheck];
 
  const numberOfTrue = countCheckedBoxes.filter(states => states === true).length;
  const numberOfFalse = countCheckedBoxes.filter(states => states === false).length;

  if (numberOfTrue === 0 || standardPassword === 'P4$5W0rD!') {
    copyMessage.style.display = 'none';
    copyMessageMobile.style.display = 'none';
    copyClipboard.style.color = '#A4FFAF';
    console.log(standardPassword);
  }
  else {
    let copyText =  document.querySelector('#password');
    let range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    if (window.innerWidth <= 465) {
      copyMessage.style.display = 'none';
      copyMessageMobile.style.display = 'block';
    } 
    else {
      copyMessage.style.display = 'inline';
      copyMessageMobile.style.display = 'none';
    }
    copyClipboard.style.color = '#A4FFAF';
    window.getSelection().removeAllRanges()
  }
});
