//
const bars = document.querySelector('.fa-bars')
const sidebar = document.querySelector('.sidebar')
const closeButton = document.querySelector('.fa-times')

bars.addEventListener('click', (e) => {
    sidebar.classList.toggle('show-sidebar')
})

closeButton.addEventListener('click', (e) => {
    sidebar.classList.toggle('show-sidebar')
})