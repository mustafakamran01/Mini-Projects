const menu = document.querySelector('.menu')
const menuPara = document.querySelector('.menu p')
const social_list = document.querySelector('.social-lists')
const liEls = document.querySelectorAll('.social-lists li')

menu.addEventListener('click', (e) => {

    social_list.classList.toggle('hide')
    menu.classList.toggle('rotate')
})

liEls.forEach( (li) => {
    console.log("List item");
    li.addEventListener('click', (e) => {
        console.log("Inner item");
        menuPara.innerHTML = li.innerHTML
        menu.classList.toggle('rotate')
        social_list.classList.add('hide')
    })
})