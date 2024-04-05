
function calculate() {
  let value1 = parseFloat(document.getElementById("value1").value);
  let operator = document.getElementById("operator").value;
  let value2 = parseFloat(document.getElementById("value2").value);
  let result;

  switch (operator) {
    case "add":
      result = value1 + value2;
      break;
    case "subtract":
      result = value1 - value2;
      break;
    case "multiply":
      result = value1 * value2;
      break;
    case "divide":
      if (value2 === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = value1 / value2;
      break;
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}
