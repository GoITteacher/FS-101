//
const refs = {
  formEl: document.querySelector('.js-user-form'),
  userContainer: document.querySelector('.js-user-container'),
};

function generateUser(minAge, maxAge) {
  const baseUrl = 'https://random-username-generate.p.rapidapi.com/';
  const PARAMS = new URLSearchParams({
    locale: 'en_US',
    minAge,
    maxAge,
  });
  const url = `${baseUrl}?${PARAMS}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'random-username-generate.p.rapidapi.com',
    },
  };
  return fetch(url, options).then(response => {
    return response.json();
  });
}

refs.formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const minAge = refs.formEl.elements.min.value.trim();
  const maxAge = refs.formEl.elements.max.value.trim();
  generateUser(minAge, maxAge).then(data => {
    renderUser(data.items);
  });
}
function renderUser({ email, address, phone, username, name, payment }) {
  const markup = `<div class="user-body">
    <h2 class="user-name">${name}</h2>
    <ul class="user-info">
      <li class="user-info_item">Username: ${username}</li>
      <li class="user-info_item">Phone: ${phone}</li>
      <li class="user-info_item">Email: ${email}</li>
      <li class="user-info_item">Address: ${address}</li>
      <li class="user-info_item">Bank: ${payment.bank}</li>
    </ul>
  </div>`;
  refs.userContainer.innerHTML = markup;
}
