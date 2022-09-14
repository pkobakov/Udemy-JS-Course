const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('Done!');
    }, duration);
  })
  return promise;
}

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    postData => {
    setTimer(2000).then(data=> {
      console.log(data, postData);
    });
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