`

<li class="card news-card">
        <img loading="lazy"
          class="news-image"
          src="${urlToImage}"
          alt="${title}"
        />
        <h3 class="card-title">
          ${title}
        </h3>
        <p class="card-desc">
        ${description}
        </p>
        <div class="card-footer">
          <span>${author}</span>
          <span>${publishedAt}</span>
        </div>
      </li>
`

`

<li class="card news-card">
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
        </li>
`

`

<li class="card pokemon">
  <img
    class="pokemon-img"
    src="${sprites.front_default}"
    alt="#"
  />
  <div class="pokemon-header">
    <h4 class="pokemon-title">${name}</h4>
    <span class="pokemon-id">#${(id + '').padStart(5, '0')}</span>
  </div>

  <div class="pokemon-desc">
    <span>Weight: ${weight}</span>
    <span>Height: ${height}</span>
    <span>Experience: ${base_experience}</span>
    <span>Order: ${order}</span>
  </div>

  <div class="pokemon-footer"></div>
</li>
`
