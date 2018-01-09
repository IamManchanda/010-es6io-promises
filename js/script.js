/**
 * JS
 */

const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(post => post.id === id);
      if (post) resolve(post);
      else reject(Error('No Post was found.'));
    }, 2000)
  });
}

function hydrateAuthors(post) {
  return new Promise((resolve, reject) => {
    const authorDetails = authors.find(person => person.name === post.author);
    if (authorDetails) {
      post.author = authorDetails;
      resolve(post);
    } else {
      reject(Error('Can not find the author'));
    }
  });
}

getPostById(1)
  .then(post => {
    console.log(post);
    return hydrateAuthors(post);
  })
  .then(post => {
    console.log(post);
  })
  .catch(error => {
    console.error(error);
  });
