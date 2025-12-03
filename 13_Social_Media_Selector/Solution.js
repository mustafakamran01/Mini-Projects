const menu = document.querySelector('.menu')
const social_list = document.querySelector('.social-lists')

let flag = false

menu.addEventListener('click', (e) => {
    
    if (flag == false) {
        social_list.classList.remove('hide')
        flag = true
    } else {
        social_list.classList.add('hide')
        flag = false
    }
})


social_list.addEventListener('click', (e) => {

    menu.innerHTML = e.target.innerHTML

    social_list.classList.add('hide')
    flag = false
})