const inputRange = document.getElementById('font-size-control');
const textSpan = document.getElementById('text')

function changeFontSize() {
    textSpan.style.fontSize = `${inputRange.value}px`
    
}


inputRange.addEventListener('input',changeFontSize)

