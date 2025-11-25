document.querySelector('#calculate').addEventListener( 'click', (e) => {

    const DOB = document.querySelector('#date').value
    const result = document.querySelector('#result')

    const todayDate = new Date();
    const DOBvalue = new Date(DOB)

    if (DOB == "") {
        result.innerHTML = "Please enter your age"
    } else {
        
        let age = todayDate.getFullYear() - DOBvalue.getFullYear()
        const monthDiff = todayDate.getMonth() - DOBvalue.getMonth()
        const dateDiff = todayDate.getDate() - DOBvalue.getDate()

        if (monthDiff < 0 || (monthDiff == 0 && dateDiff < 0)) {
            age--;
        }

        result.innerHTML = `Your age is ${age}`
    }

})



