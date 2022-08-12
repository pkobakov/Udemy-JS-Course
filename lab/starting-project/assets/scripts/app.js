const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumber() {
  return parseInt(userInput.value);
}

function add(){
  const userNum = getUserNumber();
  let calculationDescription = `${currentResult} + ${userNum}`;
  currentResult = currentResult + userNum;
 
  outputResult(currentResult, calculationDescription);
}



addBtn.addEventListener('click', add);




