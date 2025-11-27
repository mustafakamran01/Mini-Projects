// Adding eventListener to the button to calculate the total amount
document.querySelector('#calculate').addEventListener('click', (e) => {

    // Taking values from bill amount and tip percentage
    const billAmount = Number(document.querySelector('#amount').value)
    const tipPercent = Number(document.querySelector('#tip').value)

    // Accessing the result paragraph to display the output
    const result = document.querySelector('#result')
    
    // Calculating tip amount and total amount
    const tipAmount = (billAmount * tipPercent)/100
    const totalAmount = billAmount + tipAmount

    // Displaying the total amount in the result paragraph
    result.innerHTML = `Total Amount: $${totalAmount}`
})