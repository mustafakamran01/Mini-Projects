const userInput = document.querySelector('#input')
const result = document.querySelector('#result')
const error = document.querySelector('#error')

userInput.addEventListener('input', (e) => {

    const userInputValue = userInput.value

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
