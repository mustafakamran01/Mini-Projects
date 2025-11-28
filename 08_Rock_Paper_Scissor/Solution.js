// Accessing buttons div
const buttons = document.querySelector('.buttons')

// Accessing paragraph to display result
const result = document.querySelector('#result')

// Accessing user and computer score
const userScore = document.querySelector('#user-score')
const computerScore = document.querySelector('#computer-score')

let userScoreNumber = 0;
let computerScoreNumber = 0;

// Adding eventListener to buttons div 
buttons.addEventListener( 'click', (e) => {

    let computerChoice = Math.floor((Math.random() * 3) + 1)
    let id = e.target.id

    switch (computerChoice) {

        // 1 -> rock
        case 1:

            if (id == "rock" && computerChoice == 1) {
                result.innerHTML = "It's a tie!"
            } else if (id == "paper" && computerChoice == 1) {
                result.innerHTML = "You win! paper beats rock"
                userScoreNumber++
            } else if (id == "scissors" && computerChoice == 1) {
                result.innerHTML = "You lose! rock beats scissor"
                computerScoreNumber++
            }

            break;

        // 2 -> paper
        case 2:

            if (id == "rock" && computerChoice == 2) {
                result.innerHTML = "You lose! paper beats rock"
                computerScoreNumber++
            } else if (id == "paper" && computerChoice == 2) {
                result.innerHTML = "It's a tie!"
            } else if (id == "scissors" && computerChoice == 2) {
                result.innerHTML = "You win! scissor beats paper"
                userScoreNumber++
            }

            break;

        // 3 -> scissor
        case 3:

            if (id == "rock" && computerChoice == 3) {
                result.innerHTML = "You win! rock beats scissor"
                userScoreNumber++
            } else if (id == "paper" && computerChoice == 3) {
                result.innerHTML = "You lose! scissor beats paper"
                computerScoreNumber++
            } else if (id == "scissors" && computerChoice == 3) {
                result.innerHTML = "It's a tie!"
            }

            break;

        default:
            break;
    }
    
    userScore.innerHTML = userScoreNumber
    computerScore.innerHTML = computerScoreNumber

})