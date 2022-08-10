const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3;

let calculationDescription = `( ${defaultResult} + 10) * 3`;
let errorMessage = 'An error' + 'occured';
outputResult(currentResult, calculationDescription);

function add(num1, num2){
  const result = num1+ num2;
  alert(`The result is: ${result}`);
}


add(2,3);
add(7,3);