import axios from 'axios';

const refs = {
  targetElem: document.querySelector('.js-target'),
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  loaderElem: document.querySelector('.js-loader'),
};
// =====================================

let query = 'Elon Musk';
let currentPage = 1;
let totalPages = 0;
const PAGE_SIZE = 25;

async function getArticles() {
  const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
  const END_POINT = '/search';
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    headers: {
      'x-rapidapi-host': 'free-news.p.rapidapi.com',
      'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    },
    params: {
      q: query,
      page: currentPage,
      page_size: PAGE_SIZE,
    },
  };

  const res = await axios.get(url, options);
  return res.data;
}

// =====================================

refs.formElem.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  query = e.target.elements.query.value.trim();
  if (!query) return;
  showLoader();
  currentPage = 1;
  refs.articleListElem.innerHTML = '';
  const data = await getArticles();
  totalPages = data.total_pages;
  renderArticles(data.articles);
  updateStatusObserver();
  hideLoader();
}

function templateArticle({ author, title, summary, media, published_date }) {
  return ` <li class="card news-card"> <img loading="lazy" class="news-image" src="${media}" alt="${title}" /> <h3 class="card-title"> ${title} </h3> <p class="card-desc"> ${summary} </p> <div class="card-footer"> <span>${author}</span> <span>${published_date}</span> </div> </li>`;
}

function renderArticles(arr) {
  const markup = arr.map(templateArticle).join('');
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}

async function loadMore() {
  currentPage += 1;
  showLoader();
  const data = await getArticles();
  renderArticles(data.articles);
  updateStatusObserver();
  hideLoader();
  window.scrollBy({
    top: 578,
    behavior: 'smooth',
  });
}
// =====================================

function updateStatusObserver() {
  const isLastPage = currentPage >= totalPages;
  if (isLastPage) {
    observer.unobserve(refs.targetElem);
    console.log('The end!');
  } else {
    observer.observe(refs.targetElem);
  }
}

const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMore();
    }
  });
};

const observer = new IntersectionObserver(callback);

// =====================================

function showLoader() {
  refs.loaderElem.classList.remove('hidden');
}

function hideLoader() {
  refs.loaderElem.classList.add('hidden');
}
