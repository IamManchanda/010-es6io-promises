/**
 * JS
 */

const para = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error(`Error! Harry isn't cool`));
  }, 1000);
  
});

para
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });