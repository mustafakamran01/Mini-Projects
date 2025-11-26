const button = document.querySelector('#roll-button')
const history = document.querySelector('#roll-history')

let i = 1

button.addEventListener('click', (e) => {

    const randomNumber = Math.floor(Math.random() * 6 + 1)
    console.log(randomNumber);

    displayDice(randomNumber)
    
})

function displayDice(randomNumber) {
    const userChoice = randomNumber

    switch (userChoice) {
        case 1:
            const myLi1 = document.createElement('li')            
            const mySpan1 = document.createElement('span')
            myLi1.appendChild(document.createTextNode(`Roll ${i}`))
            mySpan1.innerHTML = `&#9856`
            myLi1.appendChild(mySpan1)
            history.appendChild(myLi1)
            i++
            break;

        case 2:
            const myLi2 = document.createElement('li')            
            const mySpan2 = document.createElement('span')
            myLi2.appendChild(document.createTextNode(`Roll ${i}`))
            mySpan2.innerHTML = `&#9857`
            myLi2.appendChild(mySpan2)
            history.appendChild(myLi2)
            i++
            break;

        case 3:
            const myLi3 = document.createElement('li')            
            const mySpan3 = document.createElement('span')
            myLi3.appendChild(document.createTextNode(`Roll ${i}`))
            mySpan3.innerHTML = `&#9858`
            myLi3.appendChild(mySpan3)
            history.appendChild(myLi3)
            i++
            break;

        case 4:
            const myLi4 = document.createElement('li')            
            const mySpan4 = document.createElement('span')
            myLi4.appendChild(document.createTextNode(`Roll ${i}`))
            mySpan4.innerHTML = `&#9859`
            myLi4.appendChild(mySpan4)
            history.appendChild(myLi4)
            i++
            break;

        case 5:
            const myLi5 = document.createElement('li')            
            const mySpan5 = document.createElement('span')
            myLi5.appendChild(document.createTextNode(`Roll ${i}`))
            mySpan5.innerHTML = `&#9860`
            myLi5.appendChild(mySpan5)
            history.appendChild(myLi5)
            i++
            break;

        case 6:
            const myLi6 = document.createElement('li')            
            const mySpan6 = document.createElement('span')
            myLi6.appendChild(document.createTextNode(`Roll ${i}`))
            mySpan6.innerHTML = `&#9861`
            myLi6.appendChild(mySpan6)
            history.appendChild(myLi6)
            i++
            break;
    
        default:

            break;
    }
}