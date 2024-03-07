function articleTemplate(article) {
  const { urlToImage, title, description, author, publishedAt } = article;

  return `<li class="card news-card">
  <img loading="lazy" class="news-image" src="${urlToImage}" alt="${title}" />
  <h3 class="card-title">${title}</h3>
  <p class="card-desc">${description}</p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${publishedAt}</span>
  </div>
</li>`;
}

export function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}
