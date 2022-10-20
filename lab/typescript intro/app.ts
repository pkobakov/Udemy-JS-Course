// Class Syntax Type 1:

// class User {
//   name: string;
//   private age: number;

//   constructor(name:string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

//Class Syntax Type 2:

class User implements Greetable {
  constructor( public name: string, private age: number){}
  greeting(): void {
   console.log('Hello ' + this.name);  
 }
}


class Admin extends User {
  constructor(name: string, age: number, private permissions: string []){
    super(name, age);
  }
}

interface Greetable {
  greeting(): void;
}

const user = new User('Peter', 47);
const admin = new Admin('Max', 53, ['ski', 'singing']);
user.greeting();
admin.greeting();

const input1 = document.getElementById('number-1') as HTMLInputElement;
const input2 = document.getElementById('number-2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

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

interface CalculationContainer {
  res: number;
  print: () => void;
}

type CalculationResults = CalculationContainer;
const results: Array <CalculationResults>  = [];



buttonElement.addEventListener('click', () => {
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

function longAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

longAndEcho<string>('Hi there').split(' ');

