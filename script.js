// Select display
const display = document.getElementById("display");

// Store current expression
let expression = "";

// Update display
function updateDisplay() {
    display.value = expression || "0";
}

// Add numbers/operators
function appendValue(value) {
    expression += value;
    updateDisplay();
}

// Clear everything
function clearDisplay() {
    expression = "";
    updateDisplay();
}

// Delete last character
function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

// Calculate result
function calculate() {

    if (expression === "") return;

    try {
        expression = Function('"use strict"; return (' + expression + ')')().toString();
        updateDisplay();
    } catch (error) {
        expression = "";
        display.value = "⚠ Invalid";
    }
}

// Show 0 initially
updateDisplay();