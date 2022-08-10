const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3;

let calculationDescription = `( ${defaultResult} + 10) * 3`;
let errorMessage = 'An error' + 'occured';
outputResult(currentResult, calculationDescription);
