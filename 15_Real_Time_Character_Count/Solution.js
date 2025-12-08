const textArea = document.querySelector('#textarea')
const totalCounter = document.querySelector('#total-counter')
const remainingCounter = document.querySelector('#remaining-counter')

let totalCounterValue = 0
let remainingCounterValue = 50

totalCounter.innerHTML = totalCounterValue
remainingCounter.innerHTML = remainingCounterValue

textArea.addEventListener('keydown', (e) => {

    if (e.key === 'Backspace') {
        if (totalCounterValue == 0 && remainingCounterValue == 50) {
            
        } else {
            totalCounterValue--;
            remainingCounterValue++;
            totalCounter.innerHTML = totalCounterValue
            remainingCounter.innerHTML = remainingCounterValue
        }

    } else {
        if (totalCounterValue == 0 && remainingCounterValue == 50) {
            totalCounterValue++
            remainingCounterValue--;
            totalCounter.innerHTML = totalCounterValue
            remainingCounter.innerHTML = remainingCounterValue
            
        } else {
            totalCounterValue++
            remainingCounterValue--;
            totalCounter.innerHTML = totalCounterValue
            remainingCounter.innerHTML = remainingCounterValue
        }   
    }
})