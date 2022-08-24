const numbers = [1,2,3,4,5,6,7];

// const filteredNumers = numbers.filter(number => number > 5); 
// console.log(filteredNumers);


// const mappedNumbers = numbers.map( num => ({number: num}));
// console.log(mappedNumbers);


const multiplication = numbers.reduce((currNum, nextNum) => currNum*nextNum, 1);
console.log(multiplication);