// Accessing paragraph to show the timer
const timer = document.querySelector('#timer')

// Accessing all the buttons
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

// Converting timer string to number and spliting on the basis of ':'
let [minutes, seconds] = timer.textContent.split(':').map(Number)
let interval = null;

// Adding eventListener to the start button to start the timer
start.addEventListener('click', (e) => {
    if (interval == null) {

        interval = setInterval( () => {
        if (seconds == 0) {
            if (minutes == 0) {
                timer.innerHTML = "00:00"
                clearInterval(interval)
            }
            minutes--;
            seconds = 59;
        } else{
            seconds--;
        }
        
        let mm = String(minutes).padStart(2, 0)
        let ss = String(seconds).padStart(2, 0)

        timer.innerHTML = `${mm}:${ss}`
        }, 1000)
    }
})

// Adding eventListener to the stop button to stop the timer
stop.addEventListener('click', (e) => {
    clearInterval(interval)
    interval = null
})

// Adding eventListener to reset button to reset all the times and paragraph 
reset.addEventListener('click', (e) => {
    clearInterval(interval)
    interval = null;
    timer.innerHTML = "25:00"
    minutes = 25
    seconds = 0
})