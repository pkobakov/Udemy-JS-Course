const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise ((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(myPosition => {
      resolve(myPosition);
    },
      error => {
      reject( 'Some error occures. Try again.');
    }
    );
  });
  return promise;
}

const textLocation = () => { 
 const promise = new Promise ((resolve, reject) => {
  resolve('Getting location....');
  });
 return promise;
}

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('Done!');
    }, duration);
  })
  return promise;
}

const greeting = greet => {
  const promise = new Promise ((resolve, reject) => {  
    resolve(greet);
  });
  return promise;
}

async function trackUserHandler() {
  // let position; 

  let greetData;
  let posData;
  let timerData;

  try {
    greetData = await greeting('Hello from GeoLocation!');
    timerData = await setTimer(3000);
    posData = await getPosition();
  } catch (error) {
    console.log(error);
  }
  
  

  console.log(greetData);
  console.log(timerData);
  console.log(posData); 

  // getPosition()
  //              .then( posData => {
  //               position = posData; 
  //               return setTimer(3000);
  //            }, error => {
  //              console.log(error);
  //            }).then( () => {
  //               console.log('Current Position: ', position);
  // });

  // .then(posData => {
  //   position = posData;
  //   return setTimer(3000)
  // }).catch( error => {
  //   console.log(error);
  //   return 'Try again.'
  // }).then(() => {
  //   console.log('Current Position: ', position ? position : 'None');
  // })



  // setTimer(2000).then(data => {
  //   console.log(data);
  // });

  // textLocation().then(text => {
  //   console.log(text);
  // });
}

button.addEventListener('click', trackUserHandler);

// let result = 0;


// for (let index = 0; index < 1000000000; index++) {
//   result+=index;
  
// }

// console.log(result);

Promise.race([getPosition(), setTimer(1000)]).then(data => {console.log(data)});
Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});
Promise.allSettled([getPosition(), setTimer(1000)]).then(data => {
  console.log(data);
})