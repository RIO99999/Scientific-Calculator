function inputValue(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression safely
        display.innerText = Function('return ' + display.innerText)();
    } catch (e) {
        display.innerText = 'Error';
    }
}
