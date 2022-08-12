const defaultResult = parseInt(0);
let currentResult = defaultResult;

function getUserNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, initialNum, userNumber) {
  const calculationDescription = `${initialNum} ${operator} ${userNumber}`;
  outputResult(currentResult, calculationDescription);
}

function add(){
  const userNum = getUserNumber();
  const initialResult = currentResult;
  currentResult = currentResult + userNum;
  createAndWriteOutput('+', initialResult, userNum);
  const logEntry = {
    operation: 'ADD', 
    prevResult: initialResult,
    numberAdded: userNum,
    result: currentResult
  };
  console.log(logEntry);
}

function subtract() {
  const userNum = getUserNumber();
  const initialResult = currentResult;
  currentResult = currentResult - userNum;
  createAndWriteOutput('-', initialResult, userNum);
}

function multiply() {
  const userNum = getUserNumber();
  const initialResult = currentResult;
  currentResult = currentResult * userNum;
  createAndWriteOutput('*', initialResult, userNum);
}

function divide() {
  const userNum = getUserNumber();
  const initialResult = currentResult;
  currentResult = currentResult / userNum;
  createAndWriteOutput('/', initialResult, userNum);
}





addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




