function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const operator = document.getElementById('operator').value;
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');
 
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = 'Please enter valid numbers.';
        return;
    }
 
    let result;
 
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                resultElement.textContent = 'Division by zero is not allowed.';
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultElement.textContent = 'Please enter a valid operator (+, -, *, /).';
            return;
    }
 
    resultElement.textContent = `Result: ${result}`;
}