
const input = document.getElementById('input');

const appendValue = function(value) {
    const lastChar = input.innerText.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // Prevent double operators
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    input.innerText += value;
}

const clearInput = function() {
    input.innerText = '';
}

const backspace = function() {
     input.innerText = input.innerText.slice(0, -1);
}

const calculate = function() {
    try {
        const result = eval(input.innerText);
        input.innerText = result;
    } catch (error) {
        input.innerText = "Error";
    }
}

// Optional: Keyboard support
document.addEventListener('keydown', function(e) {
    const validKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];
    
    if (validKeys.includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === 'Backspace') {
       backspace();
    } else if (e.key.toLowerCase() === 'c') {
        clearInput();
    }
});
