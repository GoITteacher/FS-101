const refs = {
  searchForm: document.querySelector('.js-formsearch'),
  ulList: document.querySelector('.js-list'),
  divFood: document.querySelector('.js-right'),
  ulLocalStor: document.querySelector('.js-save-elem'),
};

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.ulList.addEventListener('click', onPizzaClick);

let dataFood;

function onPizzaClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  } else {
    const label = evt.target.dataset.label;
    const obj = (dataFood || saveList).find(el => {
      return label === el.label;
    });
    const markup = generateRecipeHTML(obj);
    refs.divFood.innerHTML = markup;
    const btnSave = document.querySelector('.js-button');
    btnSave.addEventListener('click', onBtnClick);
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const query = evt.target.elements.name.value;
  searchRecipe(query).then(recipe => {
    console.log(recipe);
    recipe = recipe.hits.map(el => {
      return el.recipe;
    });
    dataFood = recipe;
    renderPizza(recipe);
  });
}
function renderPizza(array) {
  const markup = array
    .map(el => {
      return `
  <li data-label='${el.label}'>
  ${el.label}
  </li>`;
    })
    .join('');
  refs.ulList.innerHTML = markup;
}

function generateRecipeHTML(recipeData) {
  console.log(recipeData.ingredients);
  const ingredientsList = recipeData.ingredients
    ?.map(ingredient => `<li>${ingredient.text}</li>`)
    .join('');

  return `

          <h1>${recipeData.label}</h1>
          <img src="${recipeData.image}" alt="${recipeData.label}">
          
          <h2>Ingredients:</h2>
          <ul class="ingridient-list">
              ${ingredientsList}
          </ul>
    
          <h2>Nutritional Information:</h2>
          <p>Total Calories: ${recipeData.calories.toFixed(2)} kcal</p>
          <p>Total Fat: ${recipeData.totalNutrients.FAT.quantity.toFixed(2)} ${
    recipeData.totalNutrients.FAT.unit
  }</p>
          <!-- Add more nutritional information... -->
          
          <footer>
          <button type="submit" class="js-button" data-label="${
            recipeData.label
          }">SAVE</button>
          </footer>
  `;
}

let saveList = JSON.parse(localStorage.getItem('food')) || [];

function onBtnClick(evt) {
  const save = evt.target.dataset.label;
  const obj = dataFood.find(el => {
    return save === el.label;
  });
  if (
    !saveList.find(el => {
      return save === el.label;
    })
  ) {
    saveList.push(obj);
    localStorage.setItem('food', JSON.stringify(saveList));
  }
  renderLikeList();
}

function renderLikeList() {
  const markup = saveList
    .map(el => {
      return `
<li data-label='${el.label}'>
${el.label}
</li>`;
    })
    .join('');
  refs.ulLocalStor.innerHTML = markup;
}
renderLikeList();

refs.ulLocalStor.addEventListener('click', onPizzaClick);

function searchRecipe(q) {
  const BASE_URL = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2';
  const END_POINT = '?';
  const PARAMS = new URLSearchParams({ q, type: 'public' });
  const url = BASE_URL + END_POINT + PARAMS;
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
    },
  };
  return fetch(url, options).then(res => res.json());
}
