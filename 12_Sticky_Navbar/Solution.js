// Accessing navbar and bottom-container
const navbar = document.querySelector('.navbar')
const bottom_container = document.querySelector('.bottom-container')

// Adding eventListener to the window
window.addEventListener('scroll', (e) => {
    
    // If navbar reaches the bottom-container, then add 'active' to the classList
    if (window.scrollY > (bottom_container.offsetTop - navbar.offsetHeight) - 50) {
        navbar.classList.add('active')
    }

    // If not, then remove the 'active' from the classList
    if (window.scrollY < (bottom_container.offsetTop - navbar.offsetHeight) - 50) {
        navbar.classList.remove('active')
    }
})