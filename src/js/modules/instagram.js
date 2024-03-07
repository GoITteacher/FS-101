const refs = {
  wrapperInstagram: document.querySelector('.js-inst-wrap'),
  searchInstagramEl: document.querySelector('.js-inst-form'),
};

function searchInstagram(userName) {
  const baseUrl = `https://instagram191.p.rapidapi.com/user/details-by-username/`;
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'instagram191.p.rapidapi.com',
    },
  };
  const newParam = new URLSearchParams({
    username: userName,
  });
  const url = `${baseUrl}?${newParam}`;

  return fetch(url, options).then(response => response.json());
}

function renderIstagramCard({ biography, full_name }) {
  const markup = `<img
    class="profile-pic"
    src="https://source.unsplash.com/500x500/?random=1&user,userprofile,profile,avatar"
    alt="Profile Picture"
  />
  <div class="username">${full_name}</div>
  <div class="biography">${biography}</div>`;

  refs.wrapperInstagram.innerHTML = markup;
}

refs.searchInstagramEl.addEventListener('submit', event => {
  event.preventDefault();
  const user = event.target.elements.query.value.trim();

  searchInstagram(user)
    .then(data => {
      renderIstagramCard(data.data.user);
    })
    .catch(err => 'error');
});
