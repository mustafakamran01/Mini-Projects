const button = document.querySelector('#roll-button')
const history = document.querySelector('#roll-history')

let i = 1

button.addEventListener('click', (e) => {

    const randomNumber = Math.floor(Math.random() * 6 + 1)

    // console.log(randomNumber);

    

    const myDiv = document.createElement('li')
    myDiv.innerHTML = `Roll ${i} : ${randomNumber}`
    i++;

    history.appendChild(myDiv)

})