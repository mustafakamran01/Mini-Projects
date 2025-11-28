// Accessing paragraph to display the timer
const timer = document.querySelector('#timer')

// Accessing all the buttons
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

// Spliting the time into minutes ans seconds
let [minutes, seconds] = timer.textContent.split(':').map(Number)
let interval = null

// Adding eventListener to start button to start the timer
start.addEventListener('click', (e) => {

    if (interval == null) {

        interval = setInterval( () => {
        if (seconds == 0) {
            if (minutes == 0) {
                timer.innerHTML = `00:00`
                clearInterval(interval)
            }
            minutes--;
            seconds = 59
        } else {
            seconds--;
        }

        let mm = String(minutes).padStart(2, 0)
        let ss = String(seconds).padStart(2, 0)

        console.log(typeof(mm));
        console.log(ss)

        timer.textContent = `${mm} : ${ss}`

        }, 1000)
    }
})

// Adding eventListener to stop button to stop the timer
stop.addEventListener('click', (e) => {
    clearInterval(interval)
    interval = null
})

// Adding eventListener to reset button to reset the timer
reset.addEventListener('click', (e) => {
    clearInterval(interval)
    minutes = 25
    seconds = 0
    timer.innerHTML = '25 : 00'
    interval = null
})
