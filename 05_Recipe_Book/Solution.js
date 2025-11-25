const recipeList = document.querySelector('#recipeList')

async function retriveRecipe() {
    const response = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff');
    const data = await response.json();

    recipe(data.recipes);
}

function recipe(retrivedRecipe) {
    const createdLI = document.createElement('li')
    
}



