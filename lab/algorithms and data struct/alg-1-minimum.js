function getMinimum(input) {
    
    if (input.length === 0) {
        throw new Error('Should not be an empty array.');
    }
    
    if (input.length === 1) {
        return input[0];
    }
    
    let currentMinimum = input[0];
    
    for (let index = 1; index < input.length; index++) {
       if (input[index] < currentMinimum) {
        currentMinimum = input[index];
      }
    }

    return currentMinimum;
}

const min = getMinimum([7,5,3,2,8]);
console.log(min);

