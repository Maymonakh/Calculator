// calculator.js
function calc(...args) {
  if (args.length % 2 === 0) {
    throw new Error('Invalid input');
  }

  const operators = ['*', '/', '+', '-'];

  const precedence = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
  };

  let result = args[0];
  const values = [result];
  const ops = [];

  for (let i = 1; i < args.length; i += 2) {
    const operator = args[i];
    const operand = args[i + 1];

    if (!operators.includes(operator)) {
      throw new Error('Invalid operator');
    }

    // Handle order of operations here.
    while (ops.length > 0 && precedence[ops[ops.length - 1]] >= precedence[operator]) {
      const prevOperator = ops.pop();
      const b = values.pop();
      const a = values.pop();
      if (prevOperator === '+') {
        result = a + b;
      } else if (prevOperator === '-') {
        result = a - b;
      } else if (prevOperator === '*') {
        result = a * b;
      } else if (prevOperator === '/') {
        if (b === 0) {
          throw new Error('Division by zero');
        }
        result = a / b;
      }
      values.push(result);
    }

    ops.push(operator);
    values.push(operand);
  }

  // Evaluate any remaining operations.
  while (ops.length > 0) {
    const prevOperator = ops.pop();
    const b = values.pop();
    const a = values.pop();
    if (prevOperator === '+') {
      result = a + b;
    } else if (prevOperator === '-') {
      result = a - b;
    } else if (prevOperator === '*') {
      result = a * b;
    } else if (prevOperator === '/') {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      result = a / b;
    }
    values.push(result);
  }

  return result;
}

module.exports = calc;
