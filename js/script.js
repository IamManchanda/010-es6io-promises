/**
 * JS
 */

const postsPromise = fetch('http://wesbos.com/wp-jsan/wp/v2/posts');
postsPromise
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));