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
    const expression = display.innerText;
    
    let isValid = true;
    let validCharacters = '0123456789+-*/().MathlogcosintanPI';
    
    for (let i = 0; i < expression.length; i++) {
        if (validCharacters.indexOf(expression[i]) === -1) {
            isValid = false;
        }
    }

    if (expression.includes('//')) {
        isValid = false;
    } else if (expression.includes('**')) {
        isValid = false;
    } else if (expression.includes('++')) {
        isValid = false;
    } else if (expression.includes('--')) {
        isValid = false;
    } else if (expression.includes('..')) {
        isValid = false;
    }

    if (isValid) {
        display.innerText = new Function('return ' + expression)();
    } else {
        display.innerText = 'Error';
    }
}
