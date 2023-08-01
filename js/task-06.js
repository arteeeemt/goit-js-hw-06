const input = document.getElementById('validation-input');






function checkInput() {
    if (input.value.length === 6) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }

}


input.addEventListener('blur', checkInput)