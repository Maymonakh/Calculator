function calc(...args) {
  if (args.length % 2 === 0) {
    throw new Error('Invalid input');
  }

  const operators = ['*', '/', '+', '-'];

  // Implement basic arithmetic operations (+, -, *, /) here.

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
      result /= operand;
    }
  }

  return result;
}

module.exports = calc;
