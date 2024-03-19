import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

// ====================================

function getCommentsByUser(id) {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const endPoint = '/comments';
  const params = new URLSearchParams({
    postId: id,
  });
  const url = `${baseUrl}${endPoint}?${params}`;

  const options = {
    headers: {
      hello: 'world',
      api_key: '1231231',
    },
  };

  fetch(url, options);
}

// getCommentsByUser(5);
// getCommentsByUser(4);
