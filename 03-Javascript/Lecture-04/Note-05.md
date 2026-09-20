# Global Object — Quick Revision

## 1. What is the Global Object?

The **global object** contains variables and functions that are available **everywhere** in the environment.

Examples of built-ins:

```js
Array;
Promise;
Math;
setTimeout;
```

Environment-specific values can also exist there.

### Names by environment

```text
Browser  → window
Node.js  → global
Universal → globalThis
```

**Prefer `globalThis`** when code may run in different environments.

---

# 2. Accessing Global Properties

Global object properties can usually be accessed directly:

```js
alert("Hello");
```

is equivalent to:

```js
window.alert("Hello");
```

So:

```text
window.alert
     ↓
global object's alert property
```

---

# 3. `var` and the Global Object ⭐

In a browser, a global variable declared with **`var`** becomes a property of `window`.

```js
var gVar = 5;

console.log(window.gVar); // 5
```

Function declarations in the main script have the same behavior.

```js
function hello() {}

window.hello; // function
```

### But `let` / `const` are different

```js
let gLet = 5;

console.log(window.gLet); // undefined
```

```text
var       → window property ✅
let/const → window property ❌
```

This behavior mainly exists for **legacy compatibility**; modern JavaScript modules don't work this way.

---

# 4. Explicitly Creating a Global

If something genuinely needs to be globally accessible, explicitly put it on the global object:

```js
window.currentUser = {
  name: "John",
};
```

Then:

```js
console.log(window.currentUser.name);
```

or:

```js
console.log(currentUser.name);
```

### Better practice

Prefer explicitly showing the global access:

```js
window.currentUser;
```

because it makes it obvious that the value is global.

---

# 5. Avoid Excessive Globals ⭐

Global variables should generally be **kept to a minimum**.

Why?

```text
Many globals
    ↓
many parts of code can modify them
    ↓
unexpected interactions
    ↓
harder debugging + testing
```

Better design:

```text
function(input)
      ↓
   process
      ↓
 output
```

rather than having functions depend heavily on global/outer variables.

---

# 6. Global Object & Polyfills

The global object can be used to check whether a feature exists.

Example:

```js
if (!window.Promise) {
  // Promise isn't supported
}
```

A **polyfill** provides a missing modern feature in an older environment:

```js
if (!window.Promise) {
  window.Promise = /* custom implementation */;
}
```

### Polyfill

> A fallback implementation of a modern feature for an environment that doesn't support it.

---

# 🧠 Global Object Mental Model

```text
GLOBAL OBJECT
      │
      ├── JavaScript built-ins
      │     ├── Array
      │     ├── Promise
      │     └── ...
      │
      ├── Environment-specific values
      │
      └── Your explicitly added globals
```

---

# ⚡ 30-Second Revision

```text
GLOBAL OBJECT
→ contains globally available values/functions

Browser
→ window

Node.js
→ global

Universal
→ globalThis

var global variable
→ becomes window property (browser)

let/const global variable
→ does NOT become window property

window.x
→ explicit access to global property

GLOBALS
→ keep them to a minimum

POLYFILL
→ fallback implementation for unsupported features
```

### ⭐ Most important distinction

```js
var x = 10;
let y = 20;

window.x; // 10
window.y; // undefined
```

**`var` is legacy behavior; `let`/`const` + modules are the modern approach.**
