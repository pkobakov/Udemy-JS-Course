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

function getMinimum2(input) {
    if (input.length === 0) {
        throw new Error('Should not be an empty array.');
    }

    for (let i = 0; i < input.length; i++) {
        let outerElement = input[i];
        for (let j = 1; j < input.length; j++) {
            let innerElement = input[j];

            if (outerElement > innerElement ) {
                input[i] = innerElement;
                input[j] = outerElement;

                innerElement = input[i];
                outerElement = input[j];
            }
        }
    }
    return input[0];
}

const min = getMinimum2([7,5,3,8]);
console.log(min);

