import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchArticles } from './modules/newsAPI2.js';
import { articlesTemplate } from './templates/render-function2.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};

// ======================================
let query;
let page;
let maxPage;

refs.formElem.addEventListener('submit', onFormSubmit);

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
    maxPage = data.total_pages;
    refs.articleListElem.innerHTML = '';
    renderArticles(data.articles);
  } catch (err) {
    showError(err);
  }

  hideLoader();
  checkObserverStatus();
  e.target.reset();
}

async function onLoadMore() {
  page += 1;
  showLoader();
  const data = await fetchArticles(query, page);
  renderArticles(data.articles);
  hideLoader();
  checkObserverStatus();

  scrollBy({
    behavior: 'smooth',
    top: 1000,
  });
}

// ======================================
function renderArticles(articles) {
  const markup = articlesTemplate(articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}

function observeTarget() {
  console.log('observe');
  observer.observe(refs.targetElem);
}
function unobserveTarget() {
  console.log('unobserve');
  observer.unobserve(refs.targetElem);
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

function checkObserverStatus() {
  if (page >= maxPage) {
    unobserveTarget();
    showError('Sorry! The End!');
  } else {
    observeTarget();
  }
}
// ========================================

const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0,
};

const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onLoadMore();
    }
  });
};

const observer = new IntersectionObserver(callback, options);
