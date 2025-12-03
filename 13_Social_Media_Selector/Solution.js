const menu = document.querySelector('.menu')
const list = document.querySelector('.social-lists')

let flag = false

menu.addEventListener('click', (e) => {
    
    if (flag == false) {
        list.classList.remove('hide')
        flag = true
    } else {
        list.classList.add('hide')
        flag = false
    }

    
})