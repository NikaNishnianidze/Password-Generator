const body = document.querySelector("body");
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("range-h3");

const include = document.querySelector(".include");
const strength = document.querySelector(".strength-box");

slider.oninput = () => {
  sliderRange = slider.value;
  sliderValue.innerHTML = sliderRange;
};

include.addEventListener("change", (event) => {
  let checkbox1 = event.target.closest(".checkbox1");
  let checkbox2 = event.target.closest(".checkbox2");
  let checkbox3 = event.target.closest(".checkbox3");
  let checkbox4 = event.target.closest(".checkbox4");

  if (checkbox1.checked) {
    body.classList.add("too-weak");
  } else {
    body.classList.remove("too-weak");
  }
});
