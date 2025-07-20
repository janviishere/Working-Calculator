const userInput = document.getElementById('user-input');
const buttons = document.querySelectorAll('.calc-keys button');

let currentInput = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            currentInput = '0';
        } else if (buttonText === '=') {
            try {
                currentInput = eval(currentInput);
                if (currentInput === Infinity || isNaN(currentInput)) {
                    currentInput = 'Error';
                }
            } catch (e) {
                currentInput = 'Error';
            }
        } 
		else if (buttonText === 'del') {
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') {
                currentInput = '0';
            }
        } 
		else {
            if (currentInput === '0' || currentInput === 'Error') {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;
            }
        }

        userInput.textContent = currentInput;
    });
});