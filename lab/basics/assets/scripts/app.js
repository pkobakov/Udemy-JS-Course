const defaultResult = parseInt(0);
let currentResult = defaultResult;
let logEntries = [];

function getUserNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, initialNum, userNumber) {
  const calculationDescription = `${initialNum} ${operator} ${userNumber}`;
  outputResult(currentResult, calculationDescription);
}

function writeLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult) {
    const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
    };
   logEntries.push(logEntry);
   console.log(logEntries);

  }

function add(){
  const userNum = getUserNumber();
  const initialResult = currentResult;
  currentResult = currentResult + userNum;
  createAndWriteOutput('+', initialResult, userNum);
  writeLog('ADD', initialResult, userNum, currentResult);  
}

function subtract() {
  const userNum = getUserNumber();
  const initialResult = currentResult;
  currentResult = currentResult - userNum;
  createAndWriteOutput('-', initialResult, userNum);
  writeLog('SUBTRACT', initialResult, userNum, currentResult);  
}

function multiply() {
  const userNum = getUserNumber();
  const initialResult = currentResult;
  currentResult = currentResult * userNum;
  createAndWriteOutput('*', initialResult, userNum);
  writeLog('MULTIPLY', initialResult, userNum, currentResult);  
}

function divide() {
  const userNum = getUserNumber();
  const initialResult = currentResult;
  currentResult = currentResult / userNum;
  createAndWriteOutput('/', initialResult, userNum);
  writeLog('DIVIDE', initialResult, userNum, currentResult);  
}





addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




