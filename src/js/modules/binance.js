import axios from 'axios';

const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};

// =================================

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const query = refs.formEl.elements.query.value;

  try {
    const data = await getPrice(query);
    const markup = symbolTemplate(data);
    refs.infoEl.innerHTML = markup;
  } catch (err) {
    console.log(err);
    refs.infoEl.innerHTML = '';
  }
});

// =================================

async function getPrice(query) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const url = `${BASE_URL}${END_POINT}`;

  const params = { symbol: query };
  const headers = {
    'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
  };

  const res = await axios.get(url, { params, headers });
  return res.data;
}

// =================================

function symbolTemplate(obj) {
  const symbol = obj.symbol.replace('USDT', '').toLowerCase();
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${symbol}@2x.png"
    />
  <span>${obj.symbol}</span>
  <span>${obj.price}</span>`;
}
