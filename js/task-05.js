const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

function inputChange() {
    if (input.value.length > 1) {
        span.textContent = input.value
    }
    else (span.textContent = 'Anonymous')
}

input.addEventListener('input',inputChange)