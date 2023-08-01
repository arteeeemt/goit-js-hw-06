const colorBtn = document.querySelector('.change-color')
const body = document.querySelector('body')
const infoColor = document.querySelector('.color')
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


colorBtn.addEventListener('click', function () {
  let randomColor = getRandomHexColor()
  body.style.background = randomColor
  infoColor.textContent = randomColor
})