const content = [
    `A rose by any other name would smell as sweet.
    All the world's a stage, and all the men and women merely players.

    Kamran`,

    `A rose by any other name would smell as sweet.
    All the world's a stage, and all the men and women merely players.

    Mustafa`,

    `A rose by any other name would smell as sweet.
    All the world's a stage, and all the men and women merely players.

    Hello`,

    `A rose by any other name would smell as sweet.
    All the world's a stage, and all the men and women merely players.

    World`
]

const mainDiv = document.querySelector('#main')

let i = 0;

const ref = setInterval( () => {
    mainDiv.innerHTML = content[i];
    i++;

    if (i >= content.length) {
    clearInterval(ref)
    }
}, 2000)


