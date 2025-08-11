class calci{
    constructor(num1, num2, operator) {
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
    }
    result(){
        switch(this.operator){
            case'+':
                return this.num1+this.num2;
            case'-':
                return this.num1-this.num2;
            case'*':
                return this.num1*this.num2;
            case'/':
                return this.num1/this.num2;
            default:
                return "Invalid operator";
        }
    }
}
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

// Create object and get result
const calc = new calci(num1, num2, operator);
alert("Result: " + calc.result());