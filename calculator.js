function calc(...args) {
  if (args.length % 2 === 0) {
    throw new Error("Invalid input");
  }

  const operators = ["*", "/", "+", "-"];
  const precedence = {
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
  };

  const evaluate = (values, ops) => {
    while (ops.length > 0) {
      const op = ops.pop();
      const b = values.pop();
      const a = values.pop();
      switch (op) {
        case "+":
          values.push(a + b);
          break;
        case "-":
          values.push(a - b);
          break;
        case "*":
          values.push(a * b);
          break;
        case "/":
          if (b === 0) {
            throw new Error("Division by zero");
          }
          values.push(a / b);
          break;
        default:
          throw new Error("Invalid operator");
      }
    }
  };

  const values = [];
  const ops = [];

  for (let i = 0; i < args.length; i++) {
    const token = args[i];
    if (i % 2 === 0) {
      if (typeof token !== "number") {
        throw new Error("Invalid input type");
      }
      // Check if the number is greater than 1000 and skip it
      if (token > 1000) {
        values.push(0); 
      } else {
        values.push(token); 
      }
    } else {
      if (!operators.includes(token)) {
        throw new Error("Invalid operator");
      }
      while (
        ops.length > 0 &&
        precedence[ops[ops.length - 1]] >= precedence[token]
      ) {
        evaluate(values, ops);
      }
      ops.push(token);
    }
  }

  evaluate(values, ops);

  if (values.length !== 1) {
    throw new Error("Invalid input");
  }

  return values[0];
}

module.exports = calc;
