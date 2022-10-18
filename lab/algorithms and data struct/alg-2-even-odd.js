function evenOrOdd(input) {
  const result = input%2;
//   if (result === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }

return input% 2 ?'odd':'even';
}

console.log(evenOrOdd(10));  //even
console.log(evenOrOdd(11));  //odd