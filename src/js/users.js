import {
  deleteUser,
  getUsers,
  resetUser,
  updateUser,
} from './modules/usersAPI';
import { createUser } from './modules/usersAPI';

// ===================================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};

// ============================================================

refs.createUserForm.addEventListener('submit', onCreateUser);
refs.updateUserForm.addEventListener('submit', onUpdateUser);
refs.resetUserForm.addEventListener('submit', onResetUser);
refs.deleteUserForm.addEventListener('submit', onDeleteUser);

async function onCreateUser(e) {
  e.preventDefault();

  const myData = {
    email: e.target.elements.userEmail.value,
    name: e.target.elements.userName.value,
    phone: e.target.elements.userPhone.value,
    img: `https://source.unsplash.com/720x1280/?random=${Math.random()}&girl,portret,celebrity`,
  };

  const newUser = await createUser(myData);
  const markup = userTemplate(newUser);
  refs.userListElem.insertAdjacentHTML('afterbegin', markup);

  e.target.reset();
}

async function onUpdateUser(e) {
  e.preventDefault();

  const myData = {};
  const formData = new FormData(refs.updateUserForm);

  formData.forEach((value, key) => {
    if (value) {
      myData[key] = value;
    }
  });

  const updatedUser = await updateUser(myData);
  const markup = userTemplate(updatedUser);
  const oldUser = document.querySelector(`[data-id="${myData.id}"]`);
  oldUser.insertAdjacentHTML('afterend', markup);
  oldUser.remove();

  e.target.reset();
}

async function onResetUser(e) {
  e.preventDefault();

  const myData = {};
  const formData = new FormData(refs.resetUserForm);

  formData.forEach((value, key) => {
    myData[key] = value;
  });

  try {
    const updatedUser = await resetUser(myData);
    const markup = userTemplate(updatedUser);
    const oldUser = document.querySelector(`[data-id="${myData.id}"]`);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  } catch (err) {
    console.log('err1');
    console.log('err2');
    console.log('err3');
  }

  e.target.reset();
}

async function onDeleteUser(e) {
  e.preventDefault();

  const id = e.target.elements.userId.value;

  try {
    await deleteUser(id);
    const oldUser = document.querySelector(`[data-id="${id}"]`);
    oldUser.remove();
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}

// ============================================================

getUsers().then(users => {
  const markup = usersTemplate(users);
  refs.userListElem.innerHTML = markup;
});

// ============================================================

function userTemplate({ id, name, img, email, phone }) {
  return `<li class="card user-item" data-id="${id}">
  <img
    src="https://source.unsplash.com/720x1280/?random=${id}&girl,portret,celebrity"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${name}</h3>
  <p>Phone: ${email}</p>
  <p>Email: ${phone}</p>
  <button class="btn button">DELETE</button>
</li>`;
}

function usersTemplate(arr) {
  return arr.map(userTemplate).join('\n\n\n\n');
}

// =======================================
