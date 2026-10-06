const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.button:not(#clear-button):not(#equals-button)');
const clearButton = document.getElementById('clear-button');
const equalsButton = document.getElementById('equals-button');

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};

const calculate = (a, b, operator) => {
    
    if (operations[operator]) {
        console.log(`Calculating: ${a} ${operator} ${b}`);
        return operations[operator](a, b);
    } else {
        throw new Error('Invalid operator');
    }
};

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (['+', '-', '*', '/'].includes(value)) {
            display.value += ' ' + value + ' ';
        } else {
            display.value += value;
        }
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

equalsButton.addEventListener('click', () => {
    try {
        const expression = display.value.trim();
        const [a, operator, b] = expression.split(/\s+/);
        const result = calculate(parseFloat(a), parseFloat(b), operator);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
});


