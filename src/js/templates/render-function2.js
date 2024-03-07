function articleTemplate(article) {
  const { media, title, summary, author, published_date } = article;

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

export function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}
