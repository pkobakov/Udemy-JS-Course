const input1 = document.getElementById('number-1') as HTMLInputElement;
const input2 = document.getElementById('number-2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

function add(a:number, b:number) {
  return a + b;
}

function printResult(result) {
    console.log(result);
}

// const result = writeText('Hello ', 'World!');
// let isDone = true;
// printResult(result);

const results:{res: number, print: () => void }[] = [];

buttonElement?.addEventListener('click', () => {
    console.log('The sum is:');
    const num1 = +input1.value;
    const num2 = +input2.value;
    const result = add(num1, num2);
    const resultsContainer : { res: number, print: () => void } = {
      res: result,
      print() {
          console.log(this.res);
      },
    };
    results.push(resultsContainer);
    printResult(results);
    results[0].print();
});

