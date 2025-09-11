function calculate(a, b, operation) {
  let result;
  if (operation === "add") {
    result = a + b;
  } else if (operation === "subtract") {
    result = a - b;
  } else if (operation === "multiply") {
    result = a * b;
  } else if (operation === "divide") {
    if (b === 0) {
      return "Error: Division by zero!";
    }
    result = a / b;
  } else {
    return "Invalid operation selected.";
  }
  return result;
}

// Example usage:
console.log("Addition: " + calculate(10, 5, "add"));
console.log("Subtraction: " + calculate(10, 5, "subtract"));
console.log("Multiplication: " + calculate(10, 5, "multiply"));
console.log("Division: " + calculate(10, 5, "divide"));
