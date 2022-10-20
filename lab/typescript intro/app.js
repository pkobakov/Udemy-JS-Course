"use strict";
// Class Syntax Type 1:
// class User {
//   name: string;
//   private age: number;
//   constructor(name:string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
//Class Syntax Type 2:
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log('Hello ' + this.name);
    }
}
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User('Peter', 47);
const admin = new Admin('Max', 53, ['ski', 'singing']);
user.greeting();
admin.greeting();
const input1 = document.getElementById('number-1');
const input2 = document.getElementById('number-2');
const buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
;
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
const results = [];
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    console.log('The sum is:');
    const num1 = +input1.value;
    const num2 = +input2.value;
    const result = add(num1, num2);
    const resultsContainer = {
        res: result,
        print() {
            console.log(this.res);
        },
    };
    results.push(resultsContainer);
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});
function longAndEcho(val) {
    console.log(val);
    return val;
}
longAndEcho('Hi there').split(' ');
