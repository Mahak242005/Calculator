# Simple Web Calculator

A basic calculator built using **HTML**, **CSS**, and **JavaScript**. It allows users to perform standard arithmetic operations in a clean and responsive interface.

---

## Features

- Perform basic operations: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), and Modulus (`%`)
- Clear (`C`) and delete (`x`) functionality
- Responsive UI with modern styling
- Error handling for invalid expressions

---

## How to Use

1. Open the `index.html` file in a web browser.
2. Click the number and operator buttons to build an expression.
3. Press `=` to evaluate and see the result.
4. Use `C` to clear the display, or `x` to delete the last character.

---

## JavaScript Functions

- `enterNum(val)` – Adds the selected number or operator to the input field.
- `clearDisplay()` – Clears the entire input field.
- `remove()` – Deletes the last character in the input.
- `calculateResult()` – Evaluates the input using `eval()` and displays the result.

> ⚠️ Note: `eval()` is used for simplicity. In production applications, consider using a safer math expression parser.

---

## Styling

- Dark theme with modern UI design
- CSS Grid and Flexbox used for layout
- Button hover and click effects
