// Accessing inputField, resultField and errorField
const userInput = document.querySelector('#input')
const result = document.querySelector('#result')
const error = document.querySelector('#error')

// Adding eventListener to the inputField
userInput.addEventListener('input', (e) => {

    // Extracting value from the inputField
    const userInputValue = userInput.value

    // If weight is in -ve or zero, print error, otherwise calculate the weight
    if (userInputValue <= 0) {
        error.innerHTML = "Please enter a valid number"
        setTimeout( () => {
            error.innerHTML = ""
        }, 2000) 
    } else {
        let weightInKg = (userInputValue / 2.205).toFixed(2)

        result.innerHTML = weightInKg
    }
})












// divide the mass value by 2.205
