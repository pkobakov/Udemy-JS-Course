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

// function add(){
//   const userNum = getUserNumber();
//   const initialResult = currentResult;
//   currentResult = currentResult + userNum;
//   createAndWriteOutput('+', initialResult, userNum);
//   writeLog('ADD', initialResult, userNum, currentResult);  
// }

// function subtract() {
//   const userNum = getUserNumber();
//   const initialResult = currentResult;
//   currentResult = currentResult - userNum;
//   createAndWriteOutput('-', initialResult, userNum);
//   writeLog('SUBTRACT', initialResult, userNum, currentResult);  
// }

// function multiply() {
//   const userNum = getUserNumber();
//   const initialResult = currentResult;
//   currentResult = currentResult * userNum;
//   createAndWriteOutput('*', initialResult, userNum);
//   writeLog('MULTIPLY', initialResult, userNum, currentResult);  
// }

// function divide() {
//   const userNum = getUserNumber();
//   const initialResult = currentResult;
//   currentResult = currentResult / userNum;
//   createAndWriteOutput('/', initialResult, userNum);
//   writeLog('DIVIDE', initialResult, userNum, currentResult);  
// }

function calculate (operation) {

  const userNum = getUserNumber();
  const initialResult = currentResult;

  let operator;

  if (operation === 'ADD' ) {
    currentResult = currentResult + userNum;
    operator = '+';
    
  } else if (operation === 'SUBTRACT') {
    currentResult = currentResult - userNum;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult = currentResult * userNum;
    operator = '*';
  } else if (operation === 'DIVIDE') {
    currentResult = currentResult / userNum;
    operator = '/';
  }

  createAndWriteOutput(operator, initialResult, userNum);
  writeLog(operation, initialResult, userNum, currentResult);
}





addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));




