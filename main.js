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

function multiplicate(a, b) {
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
        case "*":
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
    }
}

let first = undefined;
let second = undefined;
let operator = "";
let clear = 0;
function parseButton(e) {
    if (clear === 1) {
        console.log("culo");
        allClear();
        clear = 0;
    }
    let pressedButton = e.target.textContent;

    if (numbers.includes(pressedButton)) {
        if (currentScreen.textContent.length < 16) {
            if (!(pressedButton === "0" && currentScreen.textContent === "0")) {
                currentScreen.textContent += e.target.textContent;
            };
        };
        
    } else if (operators.includes(pressedButton)) {
        if (first === undefined) {
            first = parseFloat(currentScreen.textContent);
        } else {
            first += parseFloat(currentScreen.textContent);
        };
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
                topScreen.textContent += currentScreen.textContent;
                second = parseFloat(currentScreen.textContent);
                let result = operate(parseFloat(first), second, operator);
                console.log(first);
                if (!isNaN(result)) {
                    currentScreen.textContent = Math.round(result * 100) / 100;
                    topScreen.textContent = "";    
                };
                clear = 1;
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
    currentScreen.textContent = "";
    first = 0;
    second = 0;
    operator = "";
}