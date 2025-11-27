// Accessing un-ordered list, button and dice logo
const rollHistory = document.querySelector('#roll-history')
const button = document.querySelector('#roll-button')
const dice = document.querySelector('#dice')

let i = 1;

// Adding eventListener on button to generate random dice face
button.addEventListener('click', (e) => {
    dice.classList.add("roll-animation");

     setTimeout(() => {
        dice.classList.remove("roll-animation");
    }, 1000);

    const randomNumber =  Math.floor((Math.random() * 6) + 1)

    displayDice(randomNumber)
})

// Function to display random dice face
function displayDice(randomNumber) {
    const userChoice = randomNumber

    switch (userChoice) {
        case 1:
            const myLi1 = document.createElement('li')
            myLi1.innerHTML = `Roll ${i}: `
            const mySpan1 = document.createElement('span')
            mySpan1.innerHTML = `&#9856;`
            myLi1.appendChild(mySpan1)
            rollHistory.appendChild(myLi1)
            dice.innerHTML = `&#9856;`
            i++
            break;
        
        case 2:
            const myLi2 = document.createElement('li')
            myLi2.innerHTML = `Roll ${i}: `
            const mySpan2 = document.createElement('span')
            mySpan2.innerHTML = `&#9857;`
            myLi2.appendChild(mySpan2)
            rollHistory.appendChild(myLi2)
            dice.innerHTML = `&#9857;`
            i++
            break;
        case 3:
            const myLi3 = document.createElement('li')
            myLi3.innerHTML = `Roll ${i}: `
            const mySpan3 = document.createElement('span')
            mySpan3.innerHTML = `&#9858;`
            myLi3.appendChild(mySpan3)
            rollHistory.appendChild(myLi3)
            dice.innerHTML = `&#9858;`
            i++
            break;

        case 4:
            const myLi4 = document.createElement('li')
            myLi4.innerHTML = `Roll ${i}: `
            const mySpan4 = document.createElement('span')
            mySpan4.innerHTML = `&#9859;`
            myLi4.appendChild(mySpan4)
            rollHistory.appendChild(myLi4)
            dice.innerHTML = `&#9859;`
            i++
            break;

        case 5:
            const myLi5 = document.createElement('li')
            myLi5.innerHTML = `Roll ${i}: `
            const mySpan5 = document.createElement('span')
            mySpan5.innerHTML = `&#9860;`
            myLi5.appendChild(mySpan5)
            rollHistory.appendChild(myLi5)
            dice.innerHTML = `&#9860;`
            i++
            break;

        case 6:
            const myLi6 = document.createElement('li')
            myLi6.innerHTML = `Roll ${i}: `
            const mySpan6 = document.createElement('span')
            mySpan6.innerHTML = `&#9861;`
            myLi6.appendChild(mySpan6)
            rollHistory.appendChild(myLi6)
            dice.innerHTML = `&#9861;`
            i++
            break;
    }
}