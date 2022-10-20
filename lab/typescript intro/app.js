// Class Syntax Type 1:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class User {
//   name: string;
//   private age: number;
//   constructor(name:string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
//Class Syntax Type 2:
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greeting = function () {
        console.log('Hello ' + this.name);
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, permissions) {
        var _this = _super.call(this, name, age) || this;
        _this.permissions = permissions;
        return _this;
    }
    return Admin;
}(User));
var user = new User('Peter', 47);
var admin = new Admin('Max', 53, ['ski', 'singing']);
user.greeting();
admin.greeting();
var input1 = document.getElementById('number-1');
var input2 = document.getElementById('number-2');
var buttonElement = document.querySelector('button');
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
var results = [];
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    console.log('The sum is:');
    var num1 = +input1.value;
    var num2 = +input2.value;
    var result = add(num1, num2);
    var resultsContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
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
