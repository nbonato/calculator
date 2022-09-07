const buttons = document.querySelectorAll("button");
const currentScreen = document.getElementById("current-screen");
const topScreen = document.getElementById("top-screen");

buttons.forEach(button => {
    button.addEventListener("click", parseButton)
});

const operators = ["+", "-", "x", "÷", "%"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let bot = "";

function add(a, b) {
    return a + b;
};

function multiply(a, b) {
    return a * b;
};

function subtract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function percentage(a, b) {
    return (a/100 * b);
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "÷":
            return divide(a, b);
            break;
        case "%":
            return percentage(a, b);
    };
}

let first = undefined;
let second = undefined;
let operator = "";
let clean = 0;
function parseButton(e) {
    if (clean === 1) {
        allClear();
        clean = 0;
    }
    let pressedButton = e.target.textContent;

    if (numbers.includes(pressedButton)) {
        if (currentScreen.textContent.length < 16) {
            if (currentScreen.textContent === "0") {
                currentScreen.textContent = e.target.textContent;
            } else {
                currentScreen.textContent += e.target.textContent;
            };
        };
        
    } else if (operators.includes(pressedButton)) {
        first = parseFloat(currentScreen.textContent);
        topScreen.textContent += (currentScreen.textContent + " " + pressedButton);
        currentScreen.textContent = "";
        operator = pressedButton;
    } else {
        switch (pressedButton) {
            case "AC":
                allClear();
                break;
            case "del":
                currentScreen.textContent = currentScreen.textContent.slice(0, -1);
                break;
            case "=":
                if (operator === "") {

                } else {
                    topScreen.textContent += currentScreen.textContent;
                    second = parseFloat(currentScreen.textContent);
                    let result = operate(parseFloat(first), second, operator);
                    if (!isNaN(result)) {
                        first = result;
                        currentScreen.textContent = Math.round(result * 100) / 100;
                        topScreen.textContent = "";  
                        second = 0;
                        operator = "";

                    };
                };
                break;
            case ".":
                if (!currentScreen.textContent.includes(".")) {
                    currentScreen.textContent += ".";
                };
                break;
        };
    };
};

function clearScreen() {
    currentScreen.textContent = "";
}

function allClear() {
    topScreen.textContent = "";
    currentScreen.textContent = 0;
    second = 0;
    operator = "";
}