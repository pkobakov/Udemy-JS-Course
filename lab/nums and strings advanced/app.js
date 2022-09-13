function randomInBetween (min, max) {
   return Math.floor(Math.random()*max)+min;
}

console.log(randomInBetween(5, 10));