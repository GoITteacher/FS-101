export function getPokemons(url) {
  return fetch(url).then(res => res.json());
}

export function getPokemonInfo(results) {
  const promises = results.map(el => {
    return getPokemon(el.url);
  });
  const result = Promise.all(promises);
  return result;
}

function getPokemon(url) {
  return fetch(url).then(res => res.json());
}
