const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};
let userSymbol;

// =================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  userSymbol = e.target.elements.query.value;

  getPriceBySymbol(userSymbol)
    .then(data => {
      renderTicker(data);
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
});

// =================================
function getPriceBySymbol(userSymbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const PARAMS = `?symbol=${userSymbol}`;

  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}
// =================================

function symbolTemplate(obj) {
  return `<span>${obj.symbol}</span>
  <span>${obj.price}</span>`;
}

function renderTicker(obj) {
  const markup = symbolTemplate(obj);
  refs.infoEl.innerHTML = markup;
}
