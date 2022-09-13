//Random numbers....

// function randomIntBetween (min, max) {
//    return Math.floor(Math.random()*(max-min+1)+min);
// }

// console.log(randomIntBetween(5, 10));

//Tagged Templates....

// function productDescription(strings, name, price) {
//     const tax = 1.2;
//     const totalPrice = (price*tax).toFixed(2);
//     return `${strings[0]}${name}${strings[1]}${totalPrice}${strings[2]}`;
// }

// const nameInput = 'JavaScript Complete Guide';
// const priceInput = 29.99;

// const courseDescription = productDescription`This course ${nameInput} costs ${priceInput}$`;

// console.log(courseDescription);

// function calculatedPrice(strings, name, price) {
    
//    return `${strings[0]}${name}${strings[1]}${price}${strings[2]}`;
// };

// const course = 'JavaScript';
// const price = 11.99;
// const result = calculatedPrice`The ${course} course costs: ${price}$`;

// console.log(result);

//Regex....

const template = /^\S+@\S+\./;
const email = 'test@test.com';

console.log(template.test(email));



