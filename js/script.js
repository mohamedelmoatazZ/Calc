  let displayValue = "";

      function appendNumber(number) {
        if (displayValue === "0") {
          displayValue = number;
        } else {
          displayValue += number;
        }
        updateDisplay();
      }

      function appendOperator(operator) {
        if (
          displayValue !== "" &&
          !isNaN(displayValue[displayValue.length - 1])
        ) {
          displayValue += operator;
          updateDisplay();
        }
      }

      function clearDisplay() {
        displayValue = "";
        updateDisplay();
      }

      function calculateResult() {
        try {
          if (displayValue.includes("/0")) {
            displayValue = "Error";
          } else {
            displayValue = eval(displayValue).toString();
          }
        } catch {
          displayValue = "Error";
        }
        updateDisplay();
      }

      function updateDisplay() {
        const display = document.getElementById("display");
        display.textContent = displayValue || "0";
      }