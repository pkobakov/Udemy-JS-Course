// function randomIntBetween (min, max) {
//    return Math.floor(Math.random()*(max-min+1)+min);
// }

// console.log(randomIntBetween(5, 10));


function productDescription(strings, name, price) {
    return `${strings[0]}${name}${strings[1]}${price}`;
}

const nameInput = 'JavaScript Complete Guide';
const priceInput = 29.99;

const courseDescription = productDescription`This course ${nameInput} costs ${priceInput}`;

console.log(courseDescription);

function calculatedPrice(strings, name, price) {
    
   return `${strings[0]}${name}${strings[1]}${price}${strings[2]}`;
};

const course = 'JavaScript';
const price = 11.99;
const result = calculatedPrice`The ${course} course costs: ${price}$`;

console.log(result);






