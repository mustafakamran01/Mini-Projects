const recipeList = document.querySelector('#recipeList')

async function retriveRecipe() {
    const response = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff');
    const data = await response.json();

    recipe(data.recipes);
}

function recipe(retrivedRecipe) {
    retrivedRecipe.map( (element) => {
        const myLI = document.createElement('li')

        const myImg = document.createElement('img')
        myImg.src = element.image
        myImg.alt = "View Image"

        const myH2 = document.createElement('h2')
        myH2.innerHTML = element.title

        element.extendedIngredients.map( (ing) => {
            const myPara = document.createElement('p')
            myPara.textContent = ing.original.join(",")
        })

    })

}



