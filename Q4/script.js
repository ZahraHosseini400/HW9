// function Calculator() {
//   this.num1 = 0;
//   this.num2 = 0;
//   this.operator = "+";

//   this.calculate = function (str) {
//     let temp = [];
//     if (str.includes("+")) {
//       temp = str.split("+");
//       this.operator = "+";
//     } else {
//       temp = str.split("-");
//       this.operator = "-";
//     }
//     // console.log(temp);
//     this.num1 = Number(temp[0]);
//     this.num2 = Number(temp[1]);

//     if (this.operator == "+") {
//       return this.num1 + this.num2;
//     }

//     if (this.operator == "-") {
//       return this.num1 - this.num2;
//     }
//   };
// }

// let calc = new Calculator();
// console.log(calc.calculate("3+7"));
function Calculator() {
  this.methods = { //methods["+"]=(number1, number2) => number1 + number2
    "+": (number1, number2) => number1 + number2,
    "-": (number1, number2) => number1 - number2,
  };
  this.calculate = function (str) {
    let strArray= str.split(" ");
    number1 = Number(strArray[0]);
    number2 = Number(strArray[2]);
    op = strArray[1];

    return this.methods[op](number1, number2);
  };

  this.addMethod = function (name, Func) {
    this.methods[name] = Func;
  };
}

let calc = new Calculator();
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log(result);