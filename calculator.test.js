// calculator.test.js
const calc = require("./calculator");

describe("Calculator", () => {
  // Test case: Addition
  it("should return the correct sum of two numbers", () => {
    expect(calc(2, "+", 3)).toBe(5);
  });

  // Test case: Subtraction
  it("should return the correct difference of two numbers", () => {
    expect(calc(5, "-", 2)).toBe(3);
  });

  // Test case: Multiplication
  it("should return the correct product of two numbers", () => {
    expect(calc(4, "*", 6)).toBe(24);
  });

  // Test case: Division
  it("should return the correct quotient of two numbers", () => {
    expect(calc(10, "/", 2)).toBe(5);
  });

  // Test case: Division by zero
  it("should throw an error when dividing by zero", () => {
    expect(() => calc(6, "/", 0)).toThrow("Division by zero");
  });

  // Test case: Negative numbers
  it("should handle negative numbers correctly", () => {
    expect(calc(-8, "+", 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it("should handle decimal numbers correctly", () => {
    expect(calc(3.5, "*", 2)).toBe(7);
  });

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14);
    expect(calc(2, "*", 3, "+", 4)).toBe(10);
    expect(calc(10, "-", 5, "/", 2)).toBe(7.5);
  });

  // Test case: Invalid operator
  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });

  // Test case: Invalid input type
  it("should throw an error for invalid input types", () => {
    expect(() => calc("2", "+", 3)).toThrow("Invalid input type");
    expect(() => calc(2, "+", "3")).toThrow("Invalid input type");
  });

  // Test multiple operations in a single expression.
  test("Multiple Operations", () => {
    expect(calc(2, "+", 3, "+", 4)).toBe(9);
    expect(calc(2, "*", 3, "*", 4)).toBe(24);
    expect(calc(10, "-", 5, "-", 2)).toBe(3);
    expect(calc(8, "*", 2, "+", 5, "/", 5)).toBe(17);
    expect(calc(10, "/", 2, "*", 3)).toBe(15);
    expect(calc(2, "-", 3, "+", 4, "*", 2)).toBe(7);
  });

  // Numbers greater than 1000 should be ignored.
  test("Ignore Numbers Greater Than 1000", () => {
    expect(calc(2, "+", 1001)).toBe(2);
    expect(calc(1001, "-", 5)).toBe(-5);
  });
});
