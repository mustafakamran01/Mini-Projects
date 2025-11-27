// // Accessing the un-ordered list
// const recipeList = document.querySelector('#recipeList')

// // Extracting the data from the given api
// fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff')
// .then( (response) => response.json())
// .then( (response) => recipe(response.recipes))

// // function to display the recipes
// function recipe(retrivedRecipe) {

//     // Iterate over the each food item 
//     retrivedRecipe.map( (element) => {

//         const myLI = document.createElement('li')
//         myLI.className = "recipe-item"

//         const myImg = document.createElement('img')
//         myImg.src = element.image
//         myImg.alt = "View Image"

//         const myH2 = document.createElement('h2')
//         myH2.innerHTML = element.title

//         const myPara = document.createElement('p')
//         myPara.innerHTML = `<strong>Ingredients: </strong> 
//         ${element.extendedIngredients.map( (ingredient) => ingredient.original).join(", ")}`

//         const link = document.createElement('a')
//         link.href = element.sourceURL
//         link.innerHTML = "View Recipe"

//         myLI.appendChild(myImg)
//         myLI.appendChild(myH2)
//         myLI.appendChild(myPara)
//         myLI.appendChild(link)

//         recipeList.appendChild(myLI)
//     })
// }


const recipeList = document.querySelector('#recipeList')

fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff')
.then( (response) => response.json())
.then( (response) => recipe(response.recipes))

function recipe(retrivedRecipe) {
    retrivedRecipe.map( (element) => {

        const myLI = document.createElement('li')
        myLI.className = "recipe-item"

        const myImg = document.createElement('img')
        myImg.src = element.image
        myImg.alt = "View Image"

        const myH2 = document.createElement('h2')
        myH2.innerHTML = element.title

        const myPara = document.createElement('p')
        myPara.innerHTML = `<strong>Ingredients: </strong>
        ${element.extendedIngredients.map( (ingredient) => ingredient.original).join(', ')}`

        const link = document.createElement('a')
        link.href = element.sourceUrl
        link.innerHTML = "View Recipe"


        myLI.appendChild(myImg)
        myLI.appendChild(myH2)
        myLI.appendChild(myPara)
        myLI.appendChild(link)

        recipeList.appendChild(myLI)
    })
}






