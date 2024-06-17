fetch('https://westernavenue.sakura.ne.jp/tenfour/wp-json/wp/v2/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
