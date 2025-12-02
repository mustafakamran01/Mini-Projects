const navbar = document.querySelector('.navbar')
const top_container = document.querySelector('.top-container')
const bottom_container = document.querySelector('.bottom-container')



window.addEventListener('scroll', (e) => {
    if (window.scrollY > (bottom_container.offsetTop - navbar.offsetHeight)) {
        navbar.classList.add('active')
    }
})