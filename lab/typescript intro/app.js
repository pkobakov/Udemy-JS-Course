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
