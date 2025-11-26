const timer = document.querySelector('#timer')

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let [minutes, seconds] = timer.textContent.split(':').map(Number)
let interval = null;

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

stop.addEventListener('click', (e) => {
    clearInterval(interval)
    interval = null
})

reset.addEventListener('click', (e) => {
    clearInterval(interval)
    interval = null;
    timer.innerHTML = "25:00"
    minutes = 25
    seconds = 0
})