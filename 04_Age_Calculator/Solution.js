
const button = document.querySelector('#calculate')



button.addEventListener('click', (e) => {
    const date = document.querySelector('#date').value
    const todayDate = new Date()
    const result = document.querySelector('#result')

    console.log(date);

    if (date == "") {
        console.log("inside");
        result.innerHTML = `Please enter your age`
    } else {
        const dateValue = new Date(date)

        let age = todayDate.getFullYear() - dateValue.getFullYear()
        const monthDiff = todayDate.getMonth() - dateValue.getMonth()
        const dateDiff = todayDate.getDate() - dateValue.getDate()

        if (monthDiff < 0 || (monthDiff == 0 && dateDiff < 0)) {
            age--;
        }

        result.innerHTML = `Your age is ${age}`
    }
    
})



