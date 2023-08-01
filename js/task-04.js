const decrement = document.querySelector('[data-action ="decrement"]')
const increment = document.querySelector('[data-action ="increment"]')
const value = document.getElementById('value')

let counterValue = 0 
increment.addEventListener('click', function () {
    counterValue = counterValue + 1
    value.textContent = counterValue
})

decrement.addEventListener('click', function () {
    counterValue = counterValue - 1
    value.textContent = counterValue
})