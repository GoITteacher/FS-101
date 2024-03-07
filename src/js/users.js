import { UsersAPI } from './modules/usersAPI';

// ===================================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};
// ============================================================

const usersAPI = new UsersAPI();

usersAPI
  .getUsers()
  .then(data => {
    renderUsers(data.reverse());
  })
  .catch(err => {
    console.log(err);
  });

// ==========================================================

function templateUser({ id, name, email, phone, img }) {
  return `
  <li class="card user-item" data-id="${id}">
  <img
    src="${img}"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${name}</h3>
  <p>Phone: ${email}</p>
  <p>Email: ${phone}</p>
  <button class="btn button">DELETE</button>
</li>`;
}

function templateUsers(users) {
  return users.map(templateUser).join('');
}

function renderUsers(users) {
  const markup = templateUsers(users);
  refs.userListElem.innerHTML = markup;
}
