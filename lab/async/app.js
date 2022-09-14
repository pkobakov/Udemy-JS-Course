const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    postData => {
      setTimeout(() => {
      console.log(postData);
      }, 2000);
    },
    error => {
      console.log(error);
    }
  );

  setTimeout(() => {
    console.log('Timer done!');
  }, 0);

  console.log('Getting location...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;


// for (let index = 0; index < 1000000000; index++) {
//   result+=index;
  
// }

// console.log(result);