import { getArticles } from './modules/newsApi2';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};
// ====================================================

let query;
let currentPage;
let maxPage;

// ====================================================

refs.formElem.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  showLoader();
  query = e.target.elements.query.value.trim();
  currentPage = 1;
  refs.articleListElem.innerHTML = '';

  if (!query) {
    console.log('err');
    return;
  }

  const data = await getArticles(query, currentPage);
  maxPage = data.total_pages;
  renderArticles(data.articles);
  checkObserverStatus();
  hideLoader();
}

async function loadMore() {
  currentPage += 1;
  showLoader();
  const data = await getArticles(query, currentPage);
  renderArticles(data.articles);
  checkObserverStatus();
  hideLoader();
}
// ====================================================

function articleTemplate(obj) {
  const { media, title, summary, author, published_date } = obj;
  return `<li class="card news-card">
  <img loading="lazy"
    class="news-image"
    src="${media}"
    alt="${title}"
  />
  <h3 class="card-title">
    ${title}
  </h3>
  <p class="card-desc">
  ${summary}
  </p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${published_date}</span>
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

function checkObserverStatus() {
  if (currentPage >= maxPage) {
    observer.unobserve(refs.targetElem);
  } else {
    observer.observe(refs.targetElem);
  }
}

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}

function hideLoader() {
  refs.loadElem.classList.add('hidden');
}
// ====================================================
const observer = new IntersectionObserver(observerCallback);

function observerCallback(entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  loadMore();
}
