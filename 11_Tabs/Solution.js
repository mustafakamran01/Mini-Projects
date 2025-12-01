// const buttons = document.querySelector('.btn-container')

// const tab1 = document.querySelector('#step1')
// const tab2 = document.querySelector('#step2')
// const tab3 = document.querySelector('#step3')

// buttons.addEventListener('click', (e) => {
//     let id = e.target.id

//     console.log(id);

//     switch (id) {
//         case 'button1':
//             let button = document.querySelector('#button1')

//             if (!tab1.classList.contains('live')) {

//                 if (tab2.classList.contains('live')) {
//                     tab2.classList.remove('live')
//                 }

//                 if (tab3.classList.contains('live')) {
//                     tab3.classList.remove('live')
//                 }

//                 tab1.classList.add('live')
//             }
//             break;

//         case 'button2':
//             if (!tab2.classList.contains('live')) {

//                 if (tab1.classList.contains('live')) {
//                     tab1.classList.remove('live')
//                 }

//                 if (tab3.classList.contains('live')) {
//                     tab3.classList.remove('live')
//                 }
                
//                 tab2.classList.add('live')
//             }
//             break;

//         case 'button3':
//             if (!tab3.classList.contains('live')) {

//                 if (tab1.classList.contains('live')) {
//                     tab1.classList.remove('live')
//                 }

//                 if (tab2.classList.contains('live')) {
//                     tab2.classList.remove('live')
//                 }
//                 tab3.classList.add('live')
//             }
//             break;
    
//         default:
//             break;
//     }
// })


/******************  Another approach ******************/


// Accessing the main div in which we have buttons and contents
const tabs = document.querySelector('.tabs')

// Accessing all the buttons together
const buttons = document.querySelectorAll('.button')

// Accessing all the contents together
const contents = document.querySelectorAll('.content')

// Adding eventListener to the main div
tabs.addEventListener('click', (e) => {

    // Getting the data-id of the target
    let id = e.target.dataset.id

    // If the target doesnot have data-id, skip
    if (id) {

        buttons.forEach( (btn) => btn.classList.remove('live'));

        e.target.classList.add('live')

        contents.forEach( (content) => content.classList.remove('live'));

        let element = document.getElementById(id)

        element.classList.add('live')
    }
})