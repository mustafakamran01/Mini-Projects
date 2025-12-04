
const menu = document.querySelector('.menu')
const menuPara = document.querySelector('.menu p')
const social_list = document.querySelector('.social-lists')
const liEls = document.querySelectorAll('.social-lists li')

menu.addEventListener('click', (e) => {

    social_list.classList.toggle('hide')
    menu.classList.toggle('rotate')
})

liEls.forEach( (li) => {
    li.addEventListener('click', (e) => {
        menuPara.innerHTML = li.innerHTML
        social_list.classList.toggle('hide')
        menu.classList.toggle('rotate')
    })
})