const buttons = document.querySelectorAll("button");
const screen = document.getElementById("screen");
buttons.forEach(button => {
    button.addEventListener("click", parseButton)
});

const operators = ["+", "-", "x", "÷", "%"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let bot = "";

function add(a, b) {
    return a + b;
};

function multiplicate(a, b) {
    return a * b;
};

function subtract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "÷":
            return divide(a, b);
            break;
    }
}

let first = 0;
let second = 0;
let operator = "";
let clear = 0;
function parseButton(e) {
    if (clear === 1) {
        screen.textContent = "";
        first = 0;
        second = 0;
        operator = "";
        clear = 0;
    }
    let pressedButton = e.target.textContent;

    if (numbers.includes(pressedButton)) {
        if (screen.textContent.length < 16) {
            if (!(pressedButton === "0" && screen.textContent === "0")) {
                screen.textContent += e.target.textContent;
            };
        }
        
    } else if (operators.includes(pressedButton)) {
        first += parseFloat(screen.textContent);
        screen.textContent = "";
        operator = pressedButton;
    } else {
        switch (pressedButton) {
            case "AC":
                screen.textContent = "";
                break;
            case "del":
                screen.textContent = screen.textContent.slice(0, -1);
                break;
            case "=":
                second = parseFloat(screen.textContent);
                let result = operate(parseFloat(first), second, operator);
                if (!isNaN(result)) {
                    screen.textContent = Math.round(result * 100) / 100;
                    clear = 1;    
                };
                break;
            case ".":
                if (!screen.textContent.includes(".")) {
                    screen.textContent += ".";
                };
                break;
        };
    };
};

function clearScreen() {
    screen.textContent = "";
}
