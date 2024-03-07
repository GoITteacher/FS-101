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

booksAPI
  .getBooks()
  .then(data => {
    renderBooks(data.reverse());
  })
  .catch(err => {
    console.log(err);
  });

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

function onCreateFormSubmit(e) {
  e.preventDefault();

  const book = {
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
  };

  booksAPI.createBook(book).then(newBook => {
    const markup = templateBook(newBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function onResetFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    book[key] = value;
  });

  booksAPI.resetBook(book.id, book).then(newBook => {
    const oldBookCard = document.querySelector(`[data-id="${book.id}"]`);
    const markup = templateBook(newBook);
    oldBookCard.insertAdjacentHTML('afterend', markup);
    oldBookCard.remove();
  });

  e.target.reset();
}

function onUpdateFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.slice(4).toLowerCase();
    if (value) book[key] = value;
  });

  booksAPI.updateBook(book.id, book).then(newBook => {
    const oldBookCard = document.querySelector(`[data-id="${book.id}"]`);
    const markup = templateBook(newBook);
    oldBookCard.insertAdjacentHTML('afterend', markup);
    oldBookCard.remove();
  });

  e.target.reset();
}

function onDeleteFormSubmit(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  booksAPI.deleteBook(id).then(() => {
    const oldBookCard = document.querySelector(`[data-id="${id}"]`);
    oldBookCard.remove();
  });
}

// =========================
