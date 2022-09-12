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

//Factory functions:

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}

const calculateVAT = createTaxCalculator(0,2);
const calculateIncomeTax = createTaxCalculator(0.25);

console.log(calculateVAT(100));
console.log(calculateIncomeTax(100));

