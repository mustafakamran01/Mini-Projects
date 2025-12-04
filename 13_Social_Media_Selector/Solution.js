// Accessing menuDiv, menuParagraph, socialListDiv and all list-items
const menu = document.querySelector('.menu')
const menuPara = document.querySelector('.menu p')
const social_list = document.querySelector('.social-lists')
const liEls = document.querySelectorAll('.social-lists li')

// Adding eventListener to menu to toggle the list-item
menu.addEventListener('click', (e) => {

    social_list.classList.toggle('hide')
    menu.classList.toggle('rotate')
})

// Iterating over each list-item and adding eventListener to them
liEls.forEach( (li) => {
    li.addEventListener('click', (e) => {
        menuPara.innerHTML = li.innerHTML
        social_list.classList.toggle('hide')
        menu.classList.toggle('rotate')
    })
})