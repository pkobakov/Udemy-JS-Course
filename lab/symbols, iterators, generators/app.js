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


const company = {
    currEmployee: 0,
    employees: ['Anna','Max','Peter'],
    next(){
        if (this.currEmployee >= this.employees.length) {
            return {value: this.currEmployee, done: true};
        }
        const returnValue = {
            value: this.employees[this.currEmployee],
            done: false
        };

        this.currEmployee++;
        return returnValue; 
    }
};


console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
