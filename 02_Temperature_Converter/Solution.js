document.querySelector('#calculate').addEventListener('click', (e) => {

    const celsiusTemperature = document.querySelector('#celsius')
    const fahrenheitTemperature = document.querySelector('#fahrenheit')
    const kelvinTemperature = document.querySelector('#kelvin')

    const celsiusInput = celsiusTemperature.value
    const fahrenheitInput = fahrenheitTemperature.value
    const kelvinInput = kelvinTemperature.value


    if (celsiusInput !== "") {
        let fTemperature = 33.8 * Number(celsiusInput)
        let kTemperature = 274.15 * Number(celsiusInput)

        fahrenheitTemperature.value = fTemperature
        kelvinTemperature.value = kTemperature

    } else if (fahrenheitInput !== "") {
        let cTemperature = Number(fahrenheitInput) * (-17.222)
        let kTemperature = Number(fahrenheitInput) * 255.928

        celsiusTemperature.value = cTemperature
        kelvinTemperature.value = kTemperature

    } else if (kelvinInput != 0) {
        let cTemperature = Number(kelvinInput) * (-272.15)
        let fTemperature = Number(kelvinInput) * (-457.87)

        celsiusTemperature.value = cTemperature
        fahrenheitTemperature.value=fTemperature
    }

    console.log(celsiusTemperature);
    console.log(typeof(celsiusTemperature));
    
    
    

})



// 1celsiusTemperature = 33.8fahrenheitTemperature
// 1celsiusTemperature = 274.15kelvinTemperature

// 1fahrenheitTemperature = -17.222celsiusTemperature
// 1fahrenheitTemperature = 255.928kelvinTemperature

// 1kelvinTemperature = -272.15celsiusTemperature
// 1kelvinTemperature = -457.87kelvinTemperature