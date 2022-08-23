// const arr = [1,2,3];
// console.log(arr);

// const arr = Array.from('Hello');
// console.log(arr);

//insert values ------------

// const hobbies = ['ski','tennis','hockey'];
// hobbies.push('soccer');
// hobbies.unshift('coding');

//remove values -------------

// console.log(hobbies.pop());
// hobbies.shift();
// hobbies.splice(0,1);

// console.log(hobbies);


//slice() method - for copy an array

// const testResults = [1, 3.42, 5.66];
// const  storedResults = testResults.slice(0,2);
// const storedResults = testResults.concat([6, 8,10]); 

// testResults.push(5.78); 

// console.log(testResults, storedResults);

//find() -------------

// const persons = [{index: 0, name: 'Max'},{index: 1, name: 'Anna'},{index: 2, name:'Manuel'}];
// const personIndex = persons.find((person, index) => {
//     return index === 1;
// })

// console.log(personIndex);


//foreach() --------------

// const prices = [10.99, 5.49, 3.44];
// const tax = 0.25;
// const adjustedPrices = [];

// for (const price of prices) {
//     adjustedPrices.push(price * (1+tax));
// }

// prices.forEach((value, idx, price) => {
//    const priceObj = 
//    { index: idx, 
//      price: value * (1 + tax)
//     };

//     adjustedPrices.push(priceObj);
// })

//map() ---------------------

// const prices = [10, 3.44, 8.53, 4.79];
// const adjustedPrices = prices.map((price, indx, obj) => {
//     const tax = 0.67;
//     return {index: indx, value: price * (1+tax)};
// });

// console.log(prices);

// console.log(adjustedPrices);

//sort() ---------------

// prices.sort((a,b) => {
//     if (a>b) {
//         return 1;
//     } else if (a===b) {
//         return 0;
//     } else {
//         return -1;
//     }
// })

// console.log(prices);

//filter()------------------

// const names = ['Anna', 'Max', 'Mike'];

// // const mike = names.filter(name => {
// //     return name === 'Mike';
// // })

// // console.log(mike);

// //same function short verion :

// const annaName = names.filter(name => name === 'Anna');

// console.log(annaName);

//reduce()-----------------------------
// const numbers = [1,2,3];
// const sum = numbers.reduce((prev, curr) => prev+curr, 0);
// console.log(sum)

//split() and join() ----------------------
// const myName = 'My name is;Petar;Kobakov';
// const nameSplitted = myName.split(';');

// console.log(nameSplitted);

// const nameJoined = nameSplitted.join(' ');

// console.log(nameJoined);

//spread(...) operator --------------------

// const persons = [{name: 'Anna', age: 65},{name: 'Max', age: 45},{name: 'Ivan', age: 37 }];
// const copiedPersons = [...persons];
// copiedPersons.unshift('Mr'); 

// const mappedPersons = persons.map( person => ({
//     name: person.name,
//     age: person.age
// })
// );


// console.log(persons,  copiedPersons, mappedPersons);

//array distructing -------------
// const nameData = ['Hi', 'Petar', 'Kobakov', 47];
// const [greet, firstName, ...otherInfo] = nameData;

// console.log(greet, firstName, otherInfo[1]);
