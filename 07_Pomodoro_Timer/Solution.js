const timer = document.querySelector('#timer').textContent
console.log(timer);

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

const [minutes, seconds] = timer.split(':').map(Number)

start.addEventListener('click', (e) => {

})