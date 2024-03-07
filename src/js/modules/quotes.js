const refs = {
  formEl: document.querySelector('.js-quotes-form'),
  containerQuotes: document.querySelector('.js-container-quotes'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const count = +event.target.elements.query.value;

  getQuotes(count)
    .then(data => {
      renderQuotes(data);
    })
    .catch(err => {});
}

function renderQuotes(arr) {
  const markup = arr
    .map(el => {
      return `<div class="card quote">
    <h4 class="quote-name">${el.originator.name}</h4>
    <p class="quote-body">
      ${el.content}
    </p>
  </div>`;
    })
    .join('');
  refs.containerQuotes.innerHTML = markup;
}

function getQuotes(count) {
  const promises = [];
  for (let i = 0; i < count; i += 1) {
    let savePromise = getPromise(i * 1100);
    promises.push(savePromise);
  }
  return Promise.all(promises);
}

function getQuote() {
  const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

function getPromise(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getQuote());
    }, timeout);
  });
}
