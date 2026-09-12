// Exercise-01
console.log("Hello, JavaScript!");
alert("Welcome!");
console.log("Name: John Doe, Age: 155");

// Exercise-02
console.log(Math.round(0.9));
console.log(Math.round(1.5));
console.log("HELLO".toLowerCase());
console.log("Hello".length);
console.log(["apple", "banana"].includes("apple"));

// Exercise-03
alert("Welcome Mr.");
prompt("Please state your purpose!");
confirm("Are you over 18?");

// Exericse-04
let name = "John Doe";
console.log(name);

if (name === "John Doe") {
  console.log("Welcome ", name);
}

// Exercise-05
let num = 12;
if (num % 2 == 0) console.log("number is even");

function isNumberOdd(num) {
  return num % 2 == 0 ? false : true;
}

// Exercise-06
let programmingLanguage = "Javascript";
let age = 42;
let isAdult = true;
let isMarried = null;
let gender = undefined;
let bankBalance = 13415n;

// Exercise-07
typeof "hello"; // string
typeof 100; // number
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object
typeof 10n; // bigint

// Exercise-08
Number("123"); // 123
Number(""); // NaN
Number("hello"); // NaN
String(123); // "123"
Boolean(0); // false
Boolean(1); // true
Boolean(""); // false
Boolean("hello"); // true
