class Calculator {
  static calculate(a, b, op) {
    let result;

    if (op === '+') {
      result = a + b;
    } else if (op === '-') {
      result = a - b;
    } else if (op === '*') {
      result = a * b;
    } else if (op === '/') {
      if (b !== 0) {
        result = a / b;
      } else {
        result = "Cannot divide by zero";
      }
    } else {
      result = "Invalid operator";
    }

    return result;
  }
}

// Taking input from user
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let op = prompt("Enter operator (+, -, *, /):");

// Calling static method without creating an object
let result = Calculator.calculate(a, b, op);

// Displaying result
alert("Result: " + result);
