const numbers = [-11,2,100,3,4,5,6,7];

//Task One.

//Filter...
// const filteredNumers = numbers.filter(number => number > 5); 
// console.log(filteredNumers);

//Mapping...
// const mappedNumbers = numbers.map( num => ({number: num}));
// console.log(mappedNumbers);

//Reduce...
// const multiplication = numbers.reduce((currNum, nextNum) => currNum*nextNum, 1);
// console.log(multiplication);


//Task Two.

// function findMax(...nums) {
//   let currentMax = numbers[0];

//   for (const currentNum of nums) {
//     if (currentNum > currentMax) {
//         currentMax = currentNum;
//     }    
//   }

//   return currentMax;
// }

// console.log(findMax(...numbers));

//Task Three. 

// function findMinMax(...nums) {
//   let maxNum = nums[0];
//   let minNum = nums[0];

//   for (const num of nums) {
//     if (maxNum < num) {
//         maxNum = num;
//     } 
    
//     if (minNum > num) {
//         minNum = num;
//     } 
//   }

//   return [minNum,maxNum];
// }

// const [min, max] = findMinMax(...numbers);
 
// console.log(min, max);


//Task Four.

const uniqueNumbers = new Set ();
const numbersArray = [1,2,3,3,5,6,7,7,8];

for (const num of numbersArray) {
    uniqueNumbers.add(num);
}

console.log(uniqueNumbers);



