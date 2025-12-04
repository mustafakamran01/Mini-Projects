// Accessing bars, sidebar and closeIcon
const bars = document.querySelector('.fa-bars')
const sidebar = document.querySelector('.sidebar')
const closeButton = document.querySelector('.fa-times')

// Adding eventListener to bars to toggle sidebar
bars.addEventListener('click', (e) => {
    sidebar.classList.toggle('show-sidebar')
})

// Adding eventListener to closeIcon to toggle sidebar
closeButton.addEventListener('click', (e) => {
    sidebar.classList.toggle('show-sidebar')
})