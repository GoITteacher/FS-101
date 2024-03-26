import axios from 'axios';

const refs = {
  formEl: document.querySelector('.js-hero-form'),
  heroEl: document.querySelector('.js-hero-container'),
};

async function getSuperhero(query) {
  const url = 'https://superhero-search.p.rapidapi.com/api/';
  const params = { hero: query };
  const headers = {
    'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
  };
  const res = await axios.get(url, { params, headers });
  return res.data;
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.superhero.value;

  getSuperhero(query).then(data => {
    const markup = heroTemplate(data);
    refs.heroEl.insertAdjacentHTML('beforeend', markup);
  });
});

function heroTemplate(hero) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${hero.images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${hero.name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${hero.biography.fullName}</p>
      <p class="hero-bio">Publisher - Marvel Comics</p>
      <p class="hero-bio">Alignment - good</p>
      <p class="hero-bio">Gender - Male</p>
      <p class="hero-bio">Race - Human</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: 10</span>
      <span>Strength: 10</span>
      <span>Speed: 10</span>
      <span>Combat: 10</span>
    </div>
  </div>
</div>`;
}
