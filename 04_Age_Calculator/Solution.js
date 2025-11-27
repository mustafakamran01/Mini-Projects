// Accessing button and result paragraph 
const button = document.querySelector('#calculate')
const result = document.querySelector('#result')

// Adding eventListener to button to calculate the age
button.addEventListener('click', (e) => {

    // Accessing input value(DOB) and converting it into new Date()
    const DOB = new Date(document.querySelector('#date').value)
    const todayDate = new Date()

    // If DOB is empty, then we will show an error message otherwise calculating age and displaying it into result paragraph
    if (DOB == "") {
        result.innerHTML = "Please enter your age"
    } else {
        let age = todayDate.getFullYear() - DOB.getFullYear()
        const monthDiff = todayDate.getMonth() - DOB.getMonth()
        const dateDiff = todayDate.getDate() - DOB.getDate()

        if (monthDiff < 0 || (monthDiff == 0 && dateDiff < 0)) {
            age--;
        }

        result.innerHTML = `Your age is ${age}`
        }
})
