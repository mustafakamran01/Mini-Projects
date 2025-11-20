const mainDiv = document.querySelector('#main')

let flag = true;

document.querySelector('#calculate').addEventListener('click', (e) => {

    const billAmount = Number(document.querySelector('#amount').value)
    const tipPercent = Number(document.querySelector('#tip').value)
    const result = document.querySelector('#result')
        
    const tipAmount = (billAmount * tipPercent)/100
    const totalAmount = billAmount + tipAmount

    result.innerHTML = `Total: ${totalAmount}`

})