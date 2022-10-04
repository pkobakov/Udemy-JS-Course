const uid = Symbol('uid');
console.log(uid);

const person = {
    id: 'p1',
    [uid]: '1', 
    name: 'Peter',
    age: 47
};

person.id = 'p2';
console.log(person[Symbol('uid')]);
console.log(Symbol('uid') === Symbol('uid'));



