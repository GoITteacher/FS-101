import { BooksAPI } from './modules/booksAPI';

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};
const booksAPI = new BooksAPI();

// ===========================================

refs.createFormElem.addEventListener('submit', onCreateFormSubmit);
refs.updateFormElem.addEventListener('submit', onUpdateFormSubmit);
refs.resetFormElem.addEventListener('submit', onResetFormSubmit);
refs.deleteFormElem.addEventListener('submit', onDeleteFormSubmit);

// ===========================================

async function init() {
  try {
    const data = await booksAPI.getBooks();
    renderBooks(data.reverse());
  } catch (err) {
    console.log(err);
  }
}

init();

// ===========================================

function templateBook({ id, title, desc, author, img, price, rating }) {
  return `
<li class="book-item card" data-id="${id}">
  <img
    class="book-img"
    src="${img}"
    alt=""
  />

  <h5 class="book-title">${title}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price}</span>
    <span>Rating: ${rating}</span>
  </div>
</li>`;
}

function templateBooks(books) {
  return books.map(templateBook).join('');
}

function renderBooks(books) {
  const markup = templateBooks(books);
  refs.bookListElem.innerHTML = markup;
}

// ===========================================

async function onCreateFormSubmit(e) {
  e.preventDefault();

  const book = {
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
  };

  try {
    const newBook = await booksAPI.createBook(book);
    const markup = templateBook(newBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', markup);
  } catch {
    console.log(err);
  }

  e.target.reset();
}

async function onResetFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    book[key] = value;
  });

  const newBook = await booksAPI.resetBook(book.id, book);
  const oldBookCard = document.querySelector(`[data-id="${book.id}"]`);
  const markup = templateBook(newBook);
  oldBookCard.insertAdjacentHTML('afterend', markup);
  oldBookCard.remove();

  e.target.reset();
}

async function onUpdateFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    if (value) book[key] = value;
  });

  const newBook = await booksAPI.updateBook(book.id, book);
  const oldBookCard = document.querySelector(`[data-id="${book.id}"]`);
  const markup = templateBook(newBook);
  oldBookCard.insertAdjacentHTML('afterend', markup);
  oldBookCard.remove();
  e.target.reset();
}

async function onDeleteFormSubmit(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  await booksAPI.deleteBook(id);
  const oldBookCard = document.querySelector(`[data-id="${id}"]`);
  oldBookCard.remove();
}

// =========================
