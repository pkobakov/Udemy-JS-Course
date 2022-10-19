var input1 = document.getElementById('number-1');
var input2 = document.getElementById('number-2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
function printResult(result) {
    console.log(result);
}
// const result = writeText('Hello ', 'World!');
// let isDone = true;
// printResult(result);
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    console.log('The sum is:');
    var num1 = +input1.value;
    var num2 = +input2.value;
    var result = add(num1, num2);
    printResult(result);
});
