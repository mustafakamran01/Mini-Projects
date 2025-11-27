function temperatureConversion() {
    // Accessing input and output fields
    const inputField = document.querySelector('#input')
    const outputField = document.querySelector('#result')

    // Accessing input and output options
    const inputOption = document.querySelector('#inputOption')
    const outputOption = document.querySelector('#outputOption')

    // Taking value from the input field and input option
    let input = Number(inputField.value)
    let inputSelect = inputOption.value
    
    // Taking value from output options
    let output = 0;
    let outputSelect = outputOption.value

    // Depending upon the input option and output option we will further proceed and calculate the temperature
    if (inputSelect == "Celsius") {
        if (outputSelect == "Fahrenheit") {
            output = (input * (9/5)) + 32
        } else if (outputSelect == "Kelvin") {
            output = input + 273.15
        } else {
            output = input
        }
    } else if (inputSelect == "Fahrenheit") {
        if (outputSelect == "Celsius") {
            output = (input - 32) * (5/9 )
        } else if (outputSelect == "Kelvin") {
            output = (input - 32) * (5/9) + 273.15
        } else {
            output = input
        }
    } else if (inputSelect == "Kelvin") {
        if (outputSelect == "Celsius") {
            output = input - 273.15
        } else if (outputSelect == "Fahrenheit") {
            output = (input - 273.15) * (9/5) + 32
        } else {
            output = input
        }
    }

    // Inserting the calculated value into the output field
    outputField.value = output
}

// Adding eventListener to input field, input option and output option
document.querySelector('#input').addEventListener('input', temperatureConversion)
document.querySelector('#inputOption').addEventListener('change', temperatureConversion)
document.querySelector('#outputOption').addEventListener('change', temperatureConversion)
