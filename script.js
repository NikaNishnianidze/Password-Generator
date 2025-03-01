const body = document.querySelector("body");
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("range-h3");
const checkbox1 = document.getElementById("myCheckbox1");
const checkbox2 = document.getElementById("myCheckbox2");
const checkbox3 = document.getElementById("myCheckbox3");
const checkbox4 = document.getElementById("myCheckbox4");
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
  const length = parseInt(slider.value);
  let password = "";
  let availableChars = "";

  if (checkbox1.checked) availableChars += upperCase;
  if (checkbox2.checked) availableChars += lowerCase;
  if (checkbox3.checked) availableChars += numbers;
  if (checkbox4.checked) availableChars += symbols;

  if (availableChars === "") {
    passwordBox.value = "Please Select An Options";
    return;
  }

  for (let i = 0; i < length; i++) {
    password +=
      availableChars[Math.floor(Math.random() * availableChars.length)];
  }

  passwordBox.value = password;
}

function check() {
  let checkedCount = 0;

  if (checkbox1.checked) {
    body.classList.add("too-weak");
    checkedCount++;
    text.innerHTML = "TOO WEAK!";
  } else {
    body.classList.remove("too-weak");
    text.innerHTML = "NONE";
  }

  if (checkbox2.checked) {
    body.classList.add("weak");
    checkedCount++;
    text.innerHTML = "TOO WEAK!";
  } else {
    body.classList.remove("weak");
    text.innerHTML = "NONE";
  }

  if (checkbox3.checked) {
    body.classList.add("medium");
    checkedCount++;
    text.innerHTML = "TOO WEAK!";
  } else {
    text.innerHTML = "NONE";
    body.classList.remove("medium");
  }

  if (checkbox4.checked) {
    body.classList.add("strong");
    checkedCount++;
    text.innerHTML = "TOO WEAK!";
  } else {
    text.innerHTML = "NONE";
    body.classList.remove("strong");
  }

  if (checkedCount == 2) {
    body.classList.add("two-checked");
    text.innerHTML = "WEAK";
    body.classList.remove("three-checked", "four-checked", "one-checked");
  } else if (checkedCount == 1) {
    body.classList.add("one-checked");
    text.innerHTML = "TOO WEAK!";
    body.classList.remove("three-checked", "four-checked", "two-checked");
  } else if (checkedCount == 3) {
    body.classList.add("three-checked");
    text.innerHTML = "MEDIUM";
    body.classList.remove("two-checked", "four-checked", "one-checked");
  } else if (checkedCount == 4) {
    body.classList.add("four-checked");
    text.innerHTML = "STRONG";
    body.classList.remove("two-checked", "three-checked", "one-checked");
  } else {
    body.classList.remove(
      "two-checked",
      "one-checked",
      "three-checked",
      "four-checked"
    );
  }
}

checkbox1.addEventListener("change", check);
checkbox2.addEventListener("change", check);
checkbox3.addEventListener("change", check);
checkbox4.addEventListener("change", check);

function updateRangeBackground() {
  const value = slider.value;
  const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`;
}

slider.addEventListener("input", updateRangeBackground);

updateRangeBackground();

function copyToClipboard() {
  let copyText = document.getElementById("password");
  let alert = document.getElementById("text-copy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert.innerHTML = "COPIED";
  alert.style.color = " #A4FFAF";
}
