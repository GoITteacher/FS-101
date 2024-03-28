import { getArticles } from './modules/newsAPI';

// =====================================================

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 6;

// =====================================================

refs.formElem.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();

  query = e.target.elements.query.value.trim();
  refs.articleListElem.innerHTML = '';
  currentPage = 1;

  if (!query) {
    alert('Empty fields');
    return;
  }

  try {
    showLoader();
    const data = await getArticles(query, currentPage);
    maxPage = Math.ceil(data.totalResults / pageSize);
    renderArticles(data.articles);
  } catch (err) {
    console.log(err);
  }

  hideLoader();
  checkBtnStatus();
  e.target.reset();
}

async function onLoadMoreClick() {
  currentPage += 1;
  showLoader();
  try {
    const data = await getArticles(query, currentPage);
    renderArticles(data.articles);
  } catch (err) {
    console.log(err);
  }

  myScroll();
  checkBtnStatus();
  hideLoader();
}

// =====================================================

function showLoadMore() {
  refs.btnLoadMore.classList.remove('hidden');
}
function hideLoadMore() {
  refs.btnLoadMore.classList.add('hidden');
}

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
  } else {
    showLoadMore();
  }
}
// =====================================================

function articleTemplate(obj) {
  const { urlToImage, title, description, author, publishedAt } = obj;

  return `<li class="card news-card">
  <img
    loading="lazy"
    class="news-image"
    src="${urlToImage}"
    alt="${title}"
  />
  <h3 class="card-title">${title}</h3>
  <p class="card-desc">${description}</p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${publishedAt}</span>
  </div>
</li>`;
}

function articlesTemplate(arr) {
  return arr.map(articleTemplate).join('');
}

function renderArticles(arr) {
  const markup = articlesTemplate(arr);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}

// =====================================================

function myScroll() {
  const height = refs.articleListElem.firstChild.getBoundingClientRect().height;

  scrollBy({
    top: height,
    behavior: 'smooth',
  });
}
