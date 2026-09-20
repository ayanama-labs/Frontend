# Variable Scope & Closure — Quick Revision

## 1. Block Scope

Variables declared with `let` / `const` inside `{}` are accessible **only inside that block**.

```js
{
  let message = "Hello";
  console.log(message); // ✅
}

console.log(message); // ❌
```

Applies to:

```text
if {}     → block scope
for {}    → block scope
while {}  → block scope
```

This allows different blocks to safely use the same variable names.

---

# 2. Nested Functions

A **nested function** is a function created inside another function.

```js
function outer() {
  let name = "John";

  function inner() {
    console.log(name);
  }

  inner();
}
```

The inner function can access variables from its **outer function**.

A nested function can also be **returned** and used elsewhere while still accessing those outer variables.

---

# 3. Lexical Environment

Every:

- Script
- Function
- Code block

has an internal **Lexical Environment**.

It contains:

```text
Lexical Environment
├── Environment Record
│   → stores variables
│
└── Outer reference
    → points to outer Lexical Environment
```

### Key idea

A variable is essentially stored in the **Environment Record**.

When JavaScript needs a variable:

```text
Current/inner environment
        ↓ not found?
Outer environment
        ↓ not found?
More outer environment
        ↓
Global environment
```

This is called the **scope chain / lexical lookup**.

---

# 4. Function Scope Lookup

Example:

```js
let phrase = "Hello";

function say(name) {
  console.log(name);
  console.log(phrase);
}
```

For `name`:

```text
say's environment → found
```

For `phrase`:

```text
say's environment → not found
        ↓
global environment → found
```

**JavaScript searches from inner → outer → global.**

---

# 5. Function Declarations

Function declarations are **fully initialized immediately** when the Lexical Environment is created.

Therefore:

```js
sayHi(); // ✅

function sayHi() {
  console.log("Hi");
}
```

This behavior applies to **Function Declarations**, not Function Expressions assigned to variables.

---

# 6. The Counter Example

```js
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

counter(); // 0
counter(); // 1
counter(); // 2
```

Why does `count` survive after `makeCounter()` finishes?

Because the returned function **remembers the Lexical Environment where it was created**.

---

# 7. `[[Environment]]`

Every function internally remembers the Lexical Environment where it was created through:

```text
[[Environment]]
```

Conceptually:

```text
counter
   │
   ↓ [[Environment]]
{ count: 0 }
```

When `counter()` runs:

```text
counter's own environment
        ↓
outer environment → { count }
        ↓
find count
        ↓
update count
```

The `[[Environment]]` reference is established when the function is created.

---

# 8. Closure ⭐

### Definition

> **A closure is a function that remembers and can access variables from its outer environment.**

Example:

```js
function outer() {
  let x = 10;

  return function inner() {
    return x;
  };
}

let fn = outer();

fn(); // 10
```

Even though `outer()` has finished, `fn` can still access `x`.

### Remember

```text
Function
   +
remembered outer environment
   =
Closure
```

In JavaScript, functions are naturally closures because they remember their creation environment.

---

# 9. Closures Keep Variables Alive

Normally:

```text
Function finishes
      ↓
Lexical Environment becomes unreachable
      ↓
Garbage collected
```

But if a returned/nested function still references it:

```text
outer function finishes
      ↓
nested function still exists
      ↓
[[Environment]] points to outer environment
      ↓
environment remains in memory
```

Example:

```js
function f() {
  let value = 123;

  return function () {
    return value;
  };
}

let g = f();
```

`value` stays alive because `g` still references the function that needs it.

When:

```js
g = null;
```

the environment can become unreachable and be garbage collected.

---

# 10. Multiple Closures = Independent State

Each call to `makeCounter()` creates a **new Lexical Environment**.

```js
let counter1 = makeCounter();
let counter2 = makeCounter();
```

Conceptually:

```text
counter1 → { count: 0 }

counter2 → { count: 0 }
```

They have **independent `count` variables** because they came from different function calls.

---

# 11. V8 Optimization

In Chrome/Edge/Opera (V8), the engine may optimize away outer variables that are clearly unused.

Therefore, during debugging, an outer variable might appear unavailable even though the language's conceptual model says it exists.

This is an **engine optimization, not a JavaScript language rule**.

---

# 🧠 Ultra-Short Revision

```text
BLOCK SCOPE
let/const inside {} → accessible only inside {}

NESTED FUNCTION
function inside another function

LEXICAL ENVIRONMENT
→ stores variables
→ points to outer environment

VARIABLE LOOKUP
inner → outer → more outer → global

[[Environment]]
→ function remembers where it was created

CLOSURE
→ function + access to remembered outer variables

WHY CLOSURE SURVIVES?
→ [[Environment]] keeps outer environment reachable

GARBAGE COLLECTION
→ environment removed when no longer reachable

KEY EXAMPLE
makeCounter()
→ creates private count
→ returns function
→ returned function remembers count
→ each makeCounter() call gets independent state
```

**The single most important mental model:**

> **A function does not remember where it is called; it remembers the lexical environment where it was created.**
