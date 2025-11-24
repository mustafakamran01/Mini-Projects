// const content = [
//     `A rose by any other name would smell as sweet.
//     All the world's a stage, and all the men and women merely players.

//     Kamran`,

//     `A rose by any other name would smell as sweet.
//     All the world's a stage, and all the men and women merely players.

//     Mustafa`,

//     `A rose by any other name would smell as sweet.
//     All the world's a stage, and all the men and women merely players.

//     Hello`,

//     `A rose by any other name would smell as sweet.
//     All the world's a stage, and all the men and women merely players.

//     World`
// ]

// const mainDiv = document.querySelector('#main')

// let i = 0;

// const ref = setInterval( () => {
//     mainDiv.innerHTML = content[i];
//     i++;

//     if (i >= content.length) {
//     clearInterval(ref)
//     }
// }, 2000)

// const innerDiv = document.querySelector('#inner')

// const para1 = document.querySelector('#one').innerHTML
// const para2 = document.querySelector('#two').innerHTML
// const para3 = document.querySelector('#three').innerHTML
// const para4 = document.querySelector('#four').innerHTML

// const arr = Array.of(para1, para2, para3, para4)

// let i = 0;

// const ref = setInterval( () => {
//     innerDiv.innerHTML = arr[i];
//     console.log(arr[i]);
//     i++;

//     if (i >= arr.length) {
//     // clearInterval(ref)
//     i = 0
//     }
// }, 2000)

const list_of_content = [
    {
        imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        text: 'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
        userName: 'Mustafa Kamran'
    },

    {
        imgUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        text: 'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.',
        userName: 'Alshf P'
    },

    {
        imgUrl: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        text: 'Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.',
        userName: 'Mehar P'
    }
]



const img = document.querySelector('#img')
const content = document.querySelector('#content')
const name = document.querySelector('#name')

let i = 0;

testimonial();

function testimonial() {
    
    img.src = list_of_content[i].imgUrl
    content.textContent = list_of_content[i].text
    name.textContent = list_of_content[i].userName

    i++

    // if (i == list_of_content.length) {
    //     i = 0
    // }
}

setInterval( () => {
    testimonial();
}, 3000)


