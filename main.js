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
            add(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "÷":
            divide(a, b);
            break;
    
    }
}


function parseButton(e) {
    let pressedButton = e.target.textContent;
    
    if (numbers.includes(pressedButton)) {
        if (!(pressedButton === "0" && screen.textContent === "0")) {
            bot += e.target.textContent;
        };
    } else {
        switch (pressedButton) {
            case "AC":
                clearScreen();
                break;
            case "C":
                bot = bot.slice(0, -1);
                break;
            case "=":
                console.log(parseFloat(screen.textContent));
                break;
            case ".":
                if (!bot.includes(".")) {
                    bot += ".";
                }
                break;
        };
    };
    screen.textContent = bot;
};

function clearScreen() {
    screen.textContent = "";
}
