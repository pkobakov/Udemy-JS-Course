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
    // currEmployee: 0,
    employees: ['Anna','Max','Peter'],
    // next(){
    //     if (this.currEmployee >= this.employees.length) {
    //         return {value: this.currEmployee, done: true};
    //     }
    //     const returnValue = {
    //         value: this.employees[this.currEmployee],
    //         done: false
    //     };

    //     this.currEmployee++;
    //     return returnValue; 
    // }
    [Symbol.iterator]: function* employeeGenerator(){
        let currEmployee = 0;

        while (currEmployee < this.employees.length) {
            yield this.employees[currEmployee];
            currEmployee++;
        }
    }
};



// let employee = company.next();

// while (!employee.done) {
//     console.log(employee.value);
//     employee = company.next();
// }

// let it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (const employee of company) {
    console.log(employee);
}
console.log([...company]);

