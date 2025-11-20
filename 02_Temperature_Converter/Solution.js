function temperatureConversion() {
    const inputField = document.querySelector('#input')
    const outputField = document.querySelector('#result')

    const inputOption = document.querySelector('#inputOption')
    const outputOption = document.querySelector('#outputOption')


    let input = Number(inputField.value)
    let inputSelect = inputOption.value
    

    let outputSelect = outputOption.value
    let output = 0;

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

    outputField.value = output
}

document.querySelector('#input').addEventListener('input', temperatureConversion)
document.querySelector('#inputOption').addEventListener('change', temperatureConversion)
document.querySelector('#outputOption').addEventListener('change', temperatureConversion)
