const numbers = [1,2,100,3,4,5,6,7];

//Part One.

//Filter...
// const filteredNumers = numbers.filter(number => number > 5); 
// console.log(filteredNumers);

//Mapping...
// const mappedNumbers = numbers.map( num => ({number: num}));
// console.log(mappedNumbers);

//Reduce...
// const multiplication = numbers.reduce((currNum, nextNum) => currNum*nextNum, 1);
// console.log(multiplication);


//Part Two.

function findMax(...nums) {
  let currentMax = numbers[0];

  for (const currentNum of nums) {
    if (currentNum > currentMax) {
        currentMax = currentNum;
    }    
  }

  return currentMax;
}

console.log(findMax(...numbers));