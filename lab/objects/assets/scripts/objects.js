const person = {
    name: 'Petar',
    age: 47,
    hobbies: ['Sports', 'Cooking'],
    greet: () => alert('Hi there!')
};

// Add new property:

person.isAdmin = true;

// Modify property:

person.age = 43;

// Delete Property

delete person.age;


console.log(person);