const body = document.querySelector("body");
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("range-h3");
var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
const strength = document.querySelector(".strength-box");
const text = document.getElementById("strength-text");

slider.oninput = () => {
  sliderRange = slider.value;
  sliderValue.innerHTML = sliderRange;
};

const passwordBox = document.getElementById("password");
const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+{}[];:'./?<>|";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars)];
  }

  passwordBox.value = password;
}

function check() {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
    }
  });
}

function updateRangeBackground() {
  const value = slider.value;
  const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`;
}

slider.addEventListener("input", updateRangeBackground);

updateRangeBackground();
