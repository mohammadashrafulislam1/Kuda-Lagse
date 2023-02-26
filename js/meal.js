const loadMeals =(searchText)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    meals.forEach(meal => {
        console.log(meal)
    // Step-1: (set id on row class html) find container
    const mealsContainer = document.getElementById('meals-container');
    // last
    mealsContainer.innerHTML='';
    // step:-2
        const mealDiv = document.createElement('div');
    // step:-3 set content in div
    mealDiv.classList.add('col');
    mealDiv.innerHTML=`
    <div class="card">
                <img src="${meal.strMealThumb
                }" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
    `
    // step:- 4 appenchild
    mealsContainer.appendChild(mealDiv)
    
    })
    

}
const searchMeals=()=>{
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText)
}
loadMeals('rice')
