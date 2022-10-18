function sumUp(input) {
   let sum = 0;

   for (let index = 0; index < input.length; index++) {
    sum+=input[index];
  }

  return sum;
}

console.log(sumUp([2,4,5]));