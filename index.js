// set the colors of our sliders
const settings = {
  fill: "#1abc9c",
  background: "#d7dcdf",
};

let ScreenValue;
const sliderRange = document.querySelector("#slider-input");
const sliderValue = document.querySelector("#slider-value");
const sliders = document.querySelector(".range-slider__range");

let isMobileScreen = false; // Mobile screen settings

// Mobile screen condition
isMobileScreen =
  (screen.availWidth < 635 &&
    (window.orientation === 0 || window.orientation === 180)) ||
  (screen.availWidth < 900 &&
    (window.orientation === -90 || window.orientation === 90));

applyFill(sliders); // function to set background color
sliders.addEventListener("input", (event) => {
  document.querySelector(".range-slider__value").innerHTML = event.target.value;
  applyFill(event.target);
});


function applyFill(slider) {
  const percentage =
    (100 * (slider.value - slider.min)) / (slider.max - slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${
    settings.background
  } ${percentage + 0.1}%)`;
  sliders.style.background = bg;
}

const off =
  sliderRange.offsetWidth /
  (parseInt(sliderRange.max) - parseInt(sliderRange.min));
if (isMobileScreen) {
  ScreenValue = 70;
} else {
  ScreenValue = 130;
}
const px =
  ScreenValue +
  (sliderRange.valueAsNumber - parseInt(sliderRange.min)) * off -
  sliderValue.offsetParent.offsetWidth / 2;

sliderValue.parentElement.style.left = px + "px";
sliderValue.parentElement.style.top = "35px";
sliderValue.innerHTML = sliderRange.value;

sliderRange.oninput = function () {
  if (isMobileScreen) {
    ScreenValue = 60;
  } else {
    ScreenValue = 100;
  }
  const px =
    ScreenValue +
    (sliderRange.valueAsNumber - parseInt(sliderRange.min)) * off -
    sliderValue.offsetWidth / 2;
  sliderValue.innerHTML = sliderRange.value;
  sliderValue.parentElement.style.left = px + "px";
};
