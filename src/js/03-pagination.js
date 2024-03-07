import { getPokemons, getPokemonInfo } from './modules/pokemonApi';
const url = `https://pokeapi.co/api/v2/pokemon?limit=8&offset=0`;

const refs = {
  pokemonListElem: document.querySelector('.js-pokemon-list'),
  prevBtnElem: document.querySelector('.js-btn-prev'),
  nextBtnElem: document.querySelector('.js-btn-next'),
};

let nextUrl = '';
let prevUrl = '';

getPokemons(url).then(data => {
  loadPokemonData(data);
});

function pokemonTemplate({
  sprites,
  name,
  id,
  weight,
  height,
  base_experience,
  order,
}) {
  return `<li class="card pokemon">
  <img
    class="pokemon-img"
    src="${sprites.front_default}"
    alt="#"
  />
  <div class="pokemon-header">
    <h4 class="pokemon-title">${name}</h4>
    <span class="pokemon-id">#${(id + '').padStart(5, '0')}</span>
  </div>

  <div class="pokemon-desc">
    <span>Weight: ${weight}</span>
    <span>Height: ${height}</span>
    <span>Experience: ${base_experience}</span>
    <span>Order: ${order}</span>
  </div>

  <div class="pokemon-footer"></div>
</li>`;
}

function renderPokemon(pokemonList) {
  const markup = pokemonList.map(pokemonTemplate).join('');
  refs.pokemonListElem.innerHTML = markup;
}

refs.nextBtnElem.addEventListener('click', onBtnNextClick);
refs.prevBtnElem.addEventListener('click', onBtnPrevClick);

function onBtnNextClick() {
  getPokemons(nextUrl).then(data => {
    loadPokemonData(data);
  });
}

function onBtnPrevClick() {
  getPokemons(prevUrl).then(data => {
    loadPokemonData(data);
  });
}

function updateBtn() {
  refs.prevBtnElem.disabled = !prevUrl;
  refs.nextBtnElem.disabled = !nextUrl;
}

function loadPokemonData(data) {
  const { next, previous, results } = data;
  nextUrl = next;
  prevUrl = previous;
  updateBtn();
  getPokemonInfo(results).then(pokemonList => {
    renderPokemon(pokemonList);
  });
}
