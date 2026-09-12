# JavaScript Practical Exercises

## 1.1 An Introduction to JavaScript

### Exercise 1 — First JavaScript Program

Create an HTML page that:

1. Prints `"Hello, JavaScript!"` in the console.
2. Shows an alert saying `"Welcome!"`.
3. Prints your name and age to the console.

---

## 1.2 Manuals and Specifications

This chapter is mostly about learning how to use documentation.

### Exercise 2 — Documentation Challenge

Without asking ChatGPT, use MDN or JavaScript.info to find:

1. How to round a number.
2. How to convert a string to lowercase.
3. How to check whether an array contains a value.
4. How to get the length of a string.

Then write a small program using all four.

---

## 1.3 The Modern Mode — `"use strict"`

### Exercise 3 — Strict Mode

Create:

```js
"use strict";
```

Then deliberately make these mistakes:

```js
x = 10;
```

and

```js
function test() {
  y = 20;
}
```

Observe what happens.

Then fix the code by properly declaring the variables.

---

## 1.4 Developer Console

### Exercise 4 — Console Playground

Use the browser console to experiment with:

```js
console.log();
console.error();
console.warn();
```

Print:

```text
Your name
Your age
Your favorite programming language
5 + 10
"Hello" + " World"
```

---

# 2.1 Hello, World!

### Exercise 5 — Browser Interaction

Create a page that:

1. Uses `alert()` to welcome the user.
2. Uses `prompt()` to ask for their name.
3. Uses `confirm()` to ask:
   `"Do you want to continue?"`
4. Displays the results in the console.

---

# 2.2 Code Structure

### Exercise 6 — Fix the Code

Fix this code:

```js
let name = "Ayan"

console.log(name)

if (name === "Ayan") {
    console.log("Welcome")
```

Make it valid JavaScript and properly structured.

### Exercise 7

Write a program containing:

- variables
- `if`
- function
- comments
- multiple statements

Organize it with proper indentation.

---

# 2.3 The Modern Mode — `"use strict"`

### Exercise 8 — Strict vs Non-Strict

Run this once without strict mode:

```js
x = 100;
console.log(x);
```

Then run:

```js
"use strict";

x = 100;
console.log(x);
```

Explain the difference in your own words.

---

# 2.4 Variables

### Exercise 9 — User Profile

Create variables for:

```text
name
age
email
isStudent
country
```

Print them.

Use:

- `let`
- `const`

appropriately.

### Exercise 10 — Variable Changes

Create:

```js
let score = 50;
```

Then:

1. Increase it by 10.
2. Double it.
3. Subtract 15.
4. Print the final value.

---

# 2.5 Data Types

### Exercise 11 — Identify Data Types

Create variables containing:

```text
"JavaScript"
42
true
null
undefined
123n
```

Use:

```js
typeof
```

to inspect each value.

### Exercise 12 — Type Investigation

Predict the result before running:

```js
typeof "hello";
typeof 100;
typeof true;
typeof undefined;
typeof null;
typeof 10n;
```

Then verify your answers.

---

# 2.6 Interaction: `alert`, `prompt`, `confirm`

### Exercise 13 — Age Calculator

Ask the user:

```text
What is your birth year?
```

Calculate their approximate age.

Example:

```text
Birth year: 2003
Age: 23
```

### Exercise 14 — Login Check

Ask:

```text
Username?
Password?
```

If both match predefined values, show:

```text
Login successful
```

Otherwise:

```text
Invalid credentials
```

---

# 2.7 Type Conversions

### Exercise 15 — Convert User Input

Ask the user for two numbers:

```js
prompt("Enter first number");
prompt("Enter second number");
```

Convert them to numbers and calculate:

```text
sum
difference
product
division
```

### Exercise 16 — Predict Conversions

Predict the result before running:

```js
Number("123");
Number("");
Number("hello");
String(123);
Boolean(0);
Boolean(1);
Boolean("");
Boolean("hello");
```

---

# 2.8 Basic Operators and Maths

### Exercise 17 — Calculator

Create a calculator that takes two numbers and produces:

```text
+
-
*
/
%
**
```

### Exercise 18 — Rectangle Calculator

Given:

```js
let width = 20;
let height = 10;
```

Calculate:

- area
- perimeter

### Exercise 19 — Temperature

Convert Celsius to Fahrenheit:

```text
F = C × 9/5 + 32
```

Ask the user for Celsius and print Fahrenheit.

---

# 2.9 Comparisons

### Exercise 20 — Comparison Practice

Given:

```js
let age = 23;
```

Check:

```text
Is age exactly 18?
Is age greater than 18?
Is age less than 18?
Is age between 18 and 60?
```

Use:

```js
>
<
>=
<=
===
!==
```

---

# 2.10 Conditional Branching: `if`, `?`

### Exercise 21 — Age Category

Ask for age.

Print:

```text
0–12    → Child
13–17   → Teenager
18–59   → Adult
60+     → Senior
```

### Exercise 22 — Login

```js
let username = "admin";
let password = "1234";
```

Check whether the entered credentials are correct.

### Exercise 23 — Ternary Operator

Convert:

```js
let age = 20;
```

into:

```js
let message = age >= 18 ? "Adult" : "Minor";
```

Then create **three of your own ternary expressions**.

---

# 2.11 Logical Operators

### Exercise 24 — Driving Eligibility

A person can drive if:

```text
age >= 18
AND
hasLicense === true
```

Implement this using:

```js
&&
```

### Exercise 25 — Access Control

Allow access if:

```text
isAdmin === true
OR
isModerator === true
```

Use:

```js
||
```

### Exercise 26 — NOT

Given:

```js
let isLoggedIn = false;
```

Use `!` to determine whether the user is logged out.

---

# 2.12 Nullish Coalescing Operator `??`

### Exercise 27 — Default Username

Given:

```js
let username = null;
```

Create:

```js
let displayName = username ?? "Guest";
```

Test it with:

```js
null;
undefined;
("Rahul");
("");
0;
false;
```

Observe which values trigger the fallback.

---

# 2.13 Loops: `while` and `for`

### Exercise 28 — Numbers 1–10

Print:

```text
1
2
3
...
10
```

using a `for` loop.

### Exercise 29 — Countdown

Print:

```text
10
9
8
...
1
Blast off!
```

### Exercise 30 — Sum

Calculate:

```text
1 + 2 + 3 + ... + 100
```

using a loop.

### Exercise 31 — Multiplication Table

Ask for a number and print its multiplication table.

Example:

```text
5 × 1 = 5
5 × 2 = 10
...
5 × 10 = 50
```

### Exercise 32 — `while`

Rewrite Exercise 30 using a `while` loop instead of `for`.

---

# 2.14 `switch`

### Exercise 33 — Day of Week

Given:

```js
let day = 3;
```

Use `switch`:

```text
1 → Monday
2 → Tuesday
3 → Wednesday
...
7 → Sunday
```

### Exercise 34 — Calculator Operator

Given:

```js
let a = 10;
let b = 5;
let operator = "*";
```

Use `switch` to perform:

```text
+
-
*
/
```

---

# 2.15 Functions

### Exercise 35 — Basic Functions

Create:

```js
sayHello();
```

that prints:

```text
Hello!
```

### Exercise 36 — Add Function

Create:

```js
add(a, b);
```

that returns their sum.

Example:

```js
add(10, 20); // 30
```

### Exercise 37 — Even Number

Create:

```js
isEven(number);
```

that returns:

```text
true
```

if the number is even and:

```text
false
```

otherwise.

### Exercise 38 — Maximum

Create:

```js
getMax(a, b);
```

that returns the larger number.

---

# 2.16 Function Expressions

### Exercise 39 — Function Expression

Create:

```js
const greet = function (name) {
  // ...
};
```

It should return:

```text
Hello, Ayan!
```

when called with:

```js
greet("Ayan");
```

### Exercise 40 — Calculator Functions

Create function expressions for:

```text
add
subtract
multiply
divide
```

Then use them to build a calculator.

---

# 2.17 Arrow Functions

### Exercise 41 — Convert Functions

Convert these to arrow functions:

```js
function square(n) {
  return n * n;
}
```

```js
function add(a, b) {
  return a + b;
}
```

```js
function isAdult(age) {
  return age >= 18;
}
```

### Exercise 42 — Implicit Return

Create arrow functions using implicit returns:

```js
const double = ...
const triple = ...
const cube = ...
```

---

# 2.18 JavaScript Specials

This chapter contains several JavaScript-specific behaviors.

### Exercise 43 — Strange Comparisons

Predict the results before running:

```js
"" == false;
"" === false;

0 == false;
0 === false;

null == undefined;
null === undefined;

"5" == 5;
"5" === 5;
```

Then explain why the results differ.

---

### Exercise 44 — `||` vs `??`

Compare:

```js
let a = 0 || 100;
let b = 0 ?? 100;

console.log(a);
console.log(b);
```

Then test:

```js
"";
false;
0;
null;
undefined;
```

with both operators.

---

### Exercise 45 — Automatic Conversion

Predict the result:

```js
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);
```

Then explain **why `+` behaves differently** from `-`, `*`, and `/`.

---

# 🔥 Final Mini Projects

After completing the individual exercises, combine the concepts.

## Project 1 — Number Guessing Game

Requirements:

- Generate a random number.
- Ask the user to guess.
- Tell them:
  - Too high
  - Too low
  - Correct

- Keep asking until they guess correctly.
- Count the number of attempts.

Concepts:

```text
variables
prompt
Number()
if / else
while
comparisons
```

---

## Project 2 — CLI-Style Calculator

Ask the user:

```text
First number:
Operator:
Second number:
```

Support:

```text
+
-
*
/
%
**
```

Use:

```text
prompt
type conversion
switch
functions
```

---

## Project 3 — Student Grade Calculator

Ask for marks in:

```text
HTML
CSS
JavaScript
```

Calculate:

```text
Total
Average
Grade
```

Example:

```text
90 + 85 + 88 = 263
Average = 87.67
Grade = A
```

---

## Project 4 — Login System

Create:

```text
username
password
```

The program should:

1. Ask for username.
2. Ask for password.
3. Validate them.
4. Allow 3 attempts.
5. Lock the user after 3 failed attempts.

Concepts:

```text
variables
prompt
if
&&
comparison
while / for
functions
```

---

## Project 5 — ATM Simulation

Create a simple ATM program supporting:

```text
1. Check balance
2. Deposit
3. Withdraw
4. Exit
```

Example:

```text
Choose an option: 2

Amount: 500

New balance: ₹1500
```

Use:

```text
variables
if
switch
loops
functions
operators
comparisons
```

### Recommended progression

```text
Basics
 ↓
Variables + Data Types
 ↓
Type Conversion
 ↓
Operators
 ↓
Conditions
 ↓
Logical Operators
 ↓
Loops
 ↓
Functions
 ↓
Function Expressions
 ↓
Arrow Functions
 ↓
JS-specific behavior
 ↓
Mini Projects
```

**Don't look at solutions while doing these.** For the first pass, write the code yourself, run it, and use the error/result to guide you.
