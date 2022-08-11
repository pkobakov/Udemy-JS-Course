const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2){
  const result = num1+ num2;
  return result;
}

currentResult = add(10,2);

let calculationDescription = `( ${defaultResult} + 10) * 3`;
outputResult(currentResult, calculationDescription);




add(2,3);
add(7,3);