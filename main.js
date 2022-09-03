const buttons = document.querySelectorAll("button");
const screen = document.getElementById("screen");
buttons.forEach(button => {
    button.addEventListener("click", parseButton)
});

const operators = ["+", "-", "x", "÷", "%"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function parseButton(e) {
    let pressedButton = e.target.textContent;
    if (numbers.includes(pressedButton)) {
        screen.textContent += e.target.textContent;
    } else if (pressedButton === "AC") {
        clearScreen();
    }
};

function clearScreen() {
    screen.textContent = "";
}
