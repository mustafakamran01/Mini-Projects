const textArea = document.querySelector('#textarea')
const totalCounter = document.querySelector('#total-counter')
const remainingCounter = document.querySelector('#remaining-counter')

let totalCounterValue = 0
let remainingCounterValue = 50

totalCounter.innerHTML = totalCounterValue
remainingCounter.innerHTML = remainingCounterValue

textArea.addEventListener('keydown', (e) => {

    if (textArea.value == "") {

    } else if (e.key === 'Backspace') {
        totalCounterValue--;
        remainingCounterValue++;
        totalCounter.innerHTML = totalCounterValue
        remainingCounter.innerHTML = remainingCounterValue

    } else {
        totalCounterValue++
        remainingCounterValue--;
        totalCounter.innerHTML = totalCounterValue
        remainingCounter.innerHTML = remainingCounterValue
    }
    
})