const slider = document.getElementById('slider');
const sliderValue = document.getElementById('number-character');

slider.addEventListener('input', () => {
  sliderValue.innerHTML = slider.value;
});

document.getElementById("slider").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, #18171F 100%)'
  };