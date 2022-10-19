const input1 = document.getElementById('number-1') as HTMLInputElement;
const input2 = document.getElementById('number-2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

function add(a:number, b:number) {
  return a + b;
}

type ResultMode = string | number;
enum OutputMode {CONSOLE, ALERT}; 

function printResult(result: ResultMode, printMode : OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } 

  if (printMode === OutputMode.ALERT) {
    alert(result);
  }
}

// const result = writeText('Hello ', 'World!');
// let isDone = true;
// printResult(result);

type CalculationResults = { res: number, print: () => void};
const results: CalculationResults [] = [];



buttonElement?.addEventListener('click', () => {
    console.log('The sum is:');
    const num1 = +input1.value;
    const num2 = +input2.value;
    const result = add(num1, num2);
    const resultsContainer : CalculationResults = {
      res: result,
      print() {
          console.log(this.res);
      },
    };
    results.push(resultsContainer);
    
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
     
});

