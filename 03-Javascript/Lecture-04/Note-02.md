# Rest Parameters & Spread Syntax — Quick Revision

## 1. Rest Parameters `...`

**Purpose:** Collect multiple arguments into an **array**.

```js
function sumAll(...args) {
  return args;
}

sumAll(1, 2, 3); // [1, 2, 3]
```

Think:

> **Rest = gather the remaining arguments.**

### With normal parameters

```js
function showName(firstName, lastName, ...titles) {
  // titles = remaining arguments
}

showName("Julius", "Caesar", "Consul", "Imperator");
```

```text
firstName → "Julius"
lastName  → "Caesar"
titles    → ["Consul", "Imperator"]
```

### Important rule

**Rest parameter must be last.**

```js
function f(a, ...rest) {}       // ✅
function f(a, ...rest, b) {}    // ❌
```

---

# 2. `arguments`

Every **normal function** has an `arguments` object containing all passed arguments.

```js
function show() {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

show("A", "B");
```

### `arguments` vs Rest

| `arguments`                    | Rest `...args`                       |
| ------------------------------ | ------------------------------------ |
| Array-like object              | Actual array                         |
| Contains **all** arguments     | Can collect only remaining arguments |
| No array methods like `.map()` | Supports array methods               |
| Older approach                 | Preferred modern approach            |

### Arrow functions

Arrow functions **do not have their own `arguments`**.

They use `arguments` from the surrounding normal function, if one exists.

---

# 3. Spread Syntax `...`

**Purpose:** Expand an iterable into individual elements/arguments.

Think:

> **Spread = unpack / expand.**

Example:

```js
let arr = [3, 5, 1];

Math.max(...arr);
```

Equivalent to:

```js
Math.max(3, 5, 1);
```

Without spread:

```js
Math.max(arr); // NaN
```

Because `Math.max()` expects individual numbers, not one array.

---

# 4. Spread with Multiple Arrays

```js
let arr1 = [1, 2];
let arr2 = [3, 4];

Math.max(...arr1, ...arr2);
```

Can also combine normal values:

```js
Math.max(10, ...arr1, 20, ...arr2);
```

---

# 5. Merge Arrays

Spread can insert array elements into another array:

```js
let a = [1, 2];
let b = [3, 4];

let merged = [0, ...a, 99, ...b];
```

Result:

```text
[0, 1, 2, 99, 3, 4]
```

---

# 6. Spread Works with Iterables

Not only arrays.

```js
let str = "Hello";

[...str];
// ["H", "e", "l", "l", "o"]
```

Spread uses the object's **iterator** to obtain its elements.

---

# 7. Spread vs `Array.from()`

Both can convert an iterable into an array:

```js
[..."Hello"];
Array.from("Hello");
```

But:

```text
Array.from()
→ works with array-like objects AND iterables

Spread
→ works only with iterables
```

Therefore, **`Array.from()` is more universal for converting to an array.**

---

# 8. Copy an Array

```js
let arr = [1, 2, 3];

let copy = [...arr];
```

`copy` is a **new array**:

```js
arr === copy; // false
```

Changing one doesn't change the other:

```js
arr.push(4);

arr; // [1, 2, 3, 4]
copy; // [1, 2, 3]
```

---

# 9. Copy an Object

```js
let obj = { a: 1, b: 2 };

let copy = { ...obj };
```

Again, this creates a **new object**:

```js
obj === copy; // false
```

This is a shorter alternative to:

```js
Object.assign({}, obj);
```

---

# 🧠 Most Important Distinction

The **same `...` syntax has opposite purposes depending on where it appears.**

### Rest → Gather

Used in **function parameters**:

```js
function f(...args) {}
```

```text
1, 2, 3
   ↓
[1, 2, 3]
```

### Spread → Expand

Used in **function calls / array / object expressions**:

```js
f(...args);
```

```text
[1, 2, 3]
   ↓
1, 2, 3
```

### Easy memory trick

> **REST = collect**
> **SPREAD = unpack**

---

## ⚡ 30-Second Revision

```text
REST (...args)
→ gathers arguments
→ creates an actual array
→ must be last parameter

SPREAD (...arr)
→ expands iterable elements
→ useful for function arguments
→ useful for merging/copying arrays
→ useful for copying objects

arguments
→ old-style array-like object
→ all arguments
→ no normal array methods
→ arrow functions have no own arguments

Array.from()
→ iterable + array-like → array

REST:   arguments → array
SPREAD: array/iterable → individual elements
```
