// initialize jquery
$(document).ready(() => {
    // get request to the API
    const getData = () => { 
        $.ajax({
        type: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/random.php"
    }).done((res) => {
        const recipe = res.meals[0]
    // console.log data 
    // Set title to 'strMeal'
        const title = recipe.strMeal
    // Set description to lorem
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas lacus felis, non vehicula dolor sollicitudin quis. Curabitur dapibus leo sed lobortis convallis. Integer lectus sem, ornare et enim non, fringilla tincidunt odio. Praesent sollicitudin consectetur eros, ut porttitor leo feugiat sit amet. Proin condimentum rutrum metus, a tempor enim convallis et. Quisque quis neque commodo elit pulvinar imperdiet. Suspendisse vitae finibus enim. Etiam tristique ante nunc, ullamcorper posuere neque pharetra eu. Integer velit ligula, tincidunt in metus eu, mollis gravida enim. Etiam pharetra libero sit amet mauris imperdiet luctus." 
    // Set thumbnail to strMealThumb
        const thumbnail = recipe.strMealThumb
    // Set category to 'strCategory"
        const category = recipe.strCategory
    // Set tags to 'strTags'
        const tags = recipe.strTags
    // Set ingredients w/ measurments to strIngredient and strMeasure
        const ingredients = recipe.strIgredient 
        const measurements = recipe.strMeasure
    // Set instructions to strInstructions
        const instructions = recipe.strInstructions
    // Set video to strYoutube 
        const video = recipe.strYoutube
        $("#title").html(title) 
        $("#photo").html(`<img src="${thumbnail}" />`)
        console.log(Object.keys(recipe))
    })
}
        
getData()
    $("#random-recipe").click((event)=>{
        event.preventDefault();
        getData();
    })
})