function addNumber(num1, num2) {
  return num1 + num2;
}

function subtractNumber(num1, num2) {
  return num1 - num2;
}

function divideNumber(num1, num2) {
  return num1 / num2;
}

function multNumber(num1, num2) {
  return num1 * num2;
}

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return addNumber(num1, num2);
  }
  if (operator === "-") {
    return subtractNumber(num1, num2);
  }
  if (operator === "*") {
    return multNumber(num1, num2);
  }
}
