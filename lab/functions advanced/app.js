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

//Closures:

 let username = 'Max';
function greetUser(){

    //let name = 'Anna';
    console.log('Hi ' + name);
}

let name = 'Pit'
username = 'Manuel';

greetUser();


//Recursion: 

// function powerOf(x, n) {
//     let result = 1;

//     for (let index = 0; index < n; index++) {
//         result*=x;
        
//     }

//     return result;
// } 

function powerOf(x, n) {
    if (n === 1) {
        return x;
    }

   return x * powerOf(x, n-1);
} 

console.log(powerOf(2, 3));

// Recursion Advanced:

const myself = {
    name: 'Peter',
    friends: [
        {
            name: 'Manuel',
            friends: [
                       { name: 'Emil' }
                     ]
        },

        {
            name: 'Julia',
            friends: [
                      { name: 'Koko'},
                      { name: 'Moni'}
                    ]
        }
    ]
};

function getFriends(person) {

    const collectedFriends = [];

if (!person.friends) {
    return [];
}

for (const friend of person.friends) {
    
    collectedFriends.push(friend.name);
    collectedFriends.push(...getFriends(friend));

}

    return collectedFriends;

}

console.log(getFriends(myself));


function factorial(n) {

    if (n === 0) {
        return 1;
    }

    return n * factorial(n-1);

}

console.log(factorial(10));



