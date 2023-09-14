// calculator.js
function calc(...args) {
  if (args.length % 2 === 0) {
    throw new Error('Invalid input');
  }

  const operators = ['*', '/', '+', '-'];

  let result = args[0];
  for (let i = 1; i < args.length; i += 2) {
    const operator = args[i];
    const operand = args[i + 1];
    if (operator === '+') {
      result += operand;
    } else if (operator === '-') {
      result -= operand;
    } else if (operator === '*') {
      result *= operand;
    } else if (operator === '/') {
      if (operand === 0) {
        throw new Error('Division by zero');
      }
      result /= operand;
    }
  }

  return result;
}

module.exports = calc;
