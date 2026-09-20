# The Old `var` — Quick Revision

> **Modern JavaScript:** Prefer `let` / `const`.
> `var` is mainly important for understanding and migrating old code.

## 1. `var` Has No Block Scope ⭐

`var` is **function-scoped**, not block-scoped.

```js
if (true) {
  var x = 10;
}

console.log(x); // 10 ✅
```

With `let`:

```js
if (true) {
  let x = 10;
}

console.log(x); // Error ❌
```

### Rule

```text
let/const → block scoped
var       → function scoped
```

If `var` is outside a function → **global-scoped**.

If inside a function → **function-scoped**.

```js
function test() {
  if (true) {
    var x = 10;
  }

  console.log(x); // 10 ✅
}

console.log(x); // Error ❌
```

`var` effectively **pierces through** `if`, `for`, `while`, etc.

---

# 2. `var` Allows Redeclaration

`let` / `const`:

```js
let user = "Pete";
let user = "John"; // ❌ Error
```

`var`:

```js
var user = "Pete";
var user = "John"; // ✅
```

The second declaration doesn't cause an error.

```text
let/const → redeclaration ❌
var       → redeclaration ✅
```

---

# 3. `var` Is Hoisted ⭐

`var` **declarations are processed at the beginning of the function**.

Therefore:

```js
function sayHi() {
  phrase = "Hello";

  console.log(phrase);

  var phrase;
}
```

behaves conceptually like:

```js
function sayHi() {
  var phrase;

  phrase = "Hello";

  console.log(phrase);
}
```

This behavior is called **hoisting**.

### Important:

> **Declaration is hoisted; assignment is NOT hoisted.**

---

# 4. Hoisting + `undefined`

```js
function sayHi() {
  console.log(phrase);

  var phrase = "Hello";
}

sayHi();
```

Conceptually becomes:

```js
function sayHi() {
  var phrase;

  console.log(phrase); // undefined

  phrase = "Hello";
}
```

So:

```text
var phrase = "Hello"
       ↓
declaration → hoisted
assignment  → stays where written
```

Therefore, accessing a `var` variable before its assignment gives:

```text
undefined
```

—not a `ReferenceError`.

---

# 5. IIFE

**IIFE = Immediately Invoked Function Expression**

It was historically used to create **private scope** because `var` didn't have block scope.

```js
(function () {
  var message = "Hello";

  console.log(message);
})();
```

The function is:

```text
created → immediately called → finished
```

The `message` variable remains private to that function.

### Why the parentheses?

This:

```js
function() {}
```

is interpreted as a Function Declaration, which requires a name.

Wrapping it:

```js
(function () {});
```

makes it a **Function Expression**, which can then be immediately invoked:

```js
(function () {})();
```

### Modern JavaScript

IIFEs are generally **not needed for this purpose anymore** because `let` / `const` provide block scope.

---

# 🧠 `var` vs `let/const`

| Feature             | `var` | `let/const`                              |
| ------------------- | ----- | ---------------------------------------- |
| Block scoped        | ❌    | ✅                                       |
| Function scoped     | ✅    | ✅                                       |
| Redeclaration       | ✅    | ❌                                       |
| Declaration hoisted | ✅    | Yes, but inaccessible before declaration |
| Assignment hoisted  | ❌    | ❌                                       |
| Modern preference   | ❌    | ✅                                       |

---

# ⚡ 30-Second Revision

```text
var
│
├── No block scope
│     → function/global scoped
│
├── Redeclaration allowed
│     → var x; var x; ✅
│
├── Declaration is hoisted
│     → processed at function start
│
├── Assignment is NOT hoisted
│     → var x = 10
│        declaration ↑
│        assignment  stays
│
├── Before assignment
│     → undefined
│
└── IIFE
      → old technique for creating private scope
      → largely unnecessary with let/const
```

### ⭐ One thing to remember

> **`var` = function-scoped + redeclarable + hoisted declaration.**
