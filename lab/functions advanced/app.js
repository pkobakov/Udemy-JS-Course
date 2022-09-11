function add(numA, numB) {
 return numA+numB;
}

console.log(add(1,5));
console.log(add(12,15));

function addRandom(number) {
    return number + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(numA, numB) {
    const sum = numA + numB;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1,5));

const hobbies = ['dancing', 'cooking'];

function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);