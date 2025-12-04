const icon = document.querySelector('.fa-bars')
const sidebar = document.querySelector('.sidebar')

icon.addEventListener('click', (e) => {
    sidebar.classList.toggle('show-sidebar')
})