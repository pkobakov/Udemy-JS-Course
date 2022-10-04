const uid = Symbol('uid');
console.log(uid);

const person = {
    id: 'p1',
    [uid]: '1', 
    name: 'Peter',
    age: 47,
    [Symbol.toStringTag]: 'User'
};

person.id = 'p2';
console.log(person[Symbol('uid')]);
console.log(Symbol('uid') === Symbol('uid'));
console.log(person.toString());



