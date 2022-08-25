const anotherName = 'Alex';

const person = {
    'first name': 'Petar',
    // name: 'Petar',
    [anotherName]: 'Lilly',
    age: 47,
    hobbies: ['Sports', 'Cooking'],
    4.7 : 'hello',
    greet: () => alert('Hi there!')
};

// Add new property:

person.isAdmin = true;

// Modify property:

person.age = 43;

// Delete Property

delete person.age;

// Using [] to access property:

const firstName = 'first name';

console.log(`First name string property: ${person['first name']}`);
console.log(`First name dynamic access: ${person[firstName]}`);
console.log(person[anotherName]);
console.log(person[4.7]);