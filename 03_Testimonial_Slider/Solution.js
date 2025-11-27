// Creating an array of content containing imageURL, text and userName
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

// Accessing all the fields (image, paragraph, h2)
const img = document.querySelector('#img')
const content = document.querySelector('#content')
const name = document.querySelector('#name')

let i = 0;

// Calling function to display contents
testimonial();

// Creating function to display the content
function testimonial() {
    
    img.src = list_of_content[i].imgUrl
    content.textContent = list_of_content[i].text
    name.textContent = list_of_content[i].userName

    i++

    if (i == list_of_content.length) {
        i = 0
    }
}

// Setting interval to display content in every 3 seconds
setInterval( () => {
    testimonial();
}, 3000)


