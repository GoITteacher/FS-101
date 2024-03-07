import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchArticles } from './modules/newsAPI.js';
import { articlesTemplate } from './templates/render-functions.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

// ======================================
let query;
let page;
let maxPage;

refs.formElem.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

// ======================================

async function onFormSubmit(e) {
  e.preventDefault();
  query = e.target.elements.query.value.trim();
  page = 1;

  if (!query) {
    showError('Empty field');
    return;
  }

  showLoader();

  try {
    const data = await fetchArticles(query, page);
    if (data.totalResults === 0) {
      showError('Sorry!');
    }
    maxPage = Math.ceil(data.totalResults / 15);
    refs.articleListElem.innerHTML = '';
    renderArticles(data.articles);
  } catch (err) {
    showError(err);
  }

  hideLoader();
  checkBtnVisibleStatus();
  e.target.reset();
}

async function onLoadMoreClick() {
  page += 1;
  showLoader();
  const data = await fetchArticles(query, page);
  renderArticles(data.articles);
  hideLoader();
  checkBtnVisibleStatus();

  const height =
    refs.articleListElem.firstElementChild.getBoundingClientRect().height;

  scrollBy({
    behavior: 'smooth',
    top: 10,
  });
}

// ======================================
function renderArticles(articles) {
  const markup = articlesTemplate(articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}

function showLoadBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}
function hideLoadBtn() {
  refs.btnLoadMore.classList.add('hidden');
}

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}

function showError(msg) {
  iziToast.error({
    title: 'Error',
    message: msg,
  });
}

function checkBtnVisibleStatus() {
  if (page >= maxPage) {
    hideLoadBtn();
  } else {
    showLoadBtn();
  }
}
// ========================================
