# CSS Custom Properties

CSS Custom Properties are variables that store reusable CSS values.

They are commonly used for:

- Colors
- Spacing
- Font sizes
- Borders
- Themes
- Design systems

---

## 1. Declaring Custom Properties

Custom properties start with `--`.

```css
:root {
  --primary-color: #2563eb;
  --spacing: 20px;
  --radius: 8px;
}
```

Syntax:

```css
--variable-name: value;
```

---

## 2. Using Custom Properties

Use the `var()` function:

```css
button {
  background: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--radius);
}
```

### Example

```css
:root {
  --primary-color: blue;
}

button {
  background-color: var(--primary-color);
}
```

---

# 3. Scope

Custom properties can be defined at different levels.

### Global scope

Usually defined on `:root`:

```css
:root {
  --primary-color: blue;
}
```

Available throughout the document.

### Local scope

```css
.card {
  --card-padding: 20px;
}
```

`--card-padding` is available to `.card` and its descendants.

```css
.card {
  --card-padding: 20px;
}

.card p {
  padding: var(--card-padding);
}
```

---

# 4. Inheritance

Custom properties are **inherited by default**.

```css
.parent {
  --color: blue;
}

.child {
  color: var(--color);
}
```

The child inherits `--color` from the parent.

Conceptually:

```text
.parent
   │
   └── --color: blue
          │
          ↓
       .child
```

If a child defines its own value, it overrides the inherited value:

```css
.parent {
  --color: blue;
}

.child {
  --color: red;
}
```

The child uses:

```text
red
```

---

# 5. Dynamic Theming

Custom properties make themes easy to implement.

### Light theme

```css
:root {
  --bg-color: white;
  --text-color: black;
}
```

### Dark theme

```css
.dark {
  --bg-color: #111;
  --text-color: white;
}
```

Use them:

```css
body {
  background: var(--bg-color);
  color: var(--text-color);
}
```

When `.dark` is applied:

```html
<body class="dark"></body>
```

the variables change automatically.

**Key idea:**

```text
Change variables → entire UI changes
```

---

# 6. Fallback Values

`var()` can have a fallback value.

```css
color: var(--text-color, black);
```

Meaning:

> Use `--text-color`; if it doesn't exist, use `black`.

### Example

```css
button {
  color: var(--button-text, white);
}
```

If `--button-text` exists:

```css
--button-text: yellow;
```

→ `yellow` is used.

If it doesn't exist:

→ `white` is used.

---

## Multiple Fallbacks

Fallbacks can be nested:

```css
color: var(--primary, var(--secondary, black));
```

Meaning:

```text
Use --primary
    ↓
if missing → use --secondary
    ↓
if missing → use black
```

---

# 7. Custom Properties vs Normal CSS Variables

Custom properties are **not exactly like programming-language variables**.

They participate in:

- CSS inheritance
- CSS cascade
- CSS scope

For example:

```css
:root {
  --color: blue;
}

.card {
  --color: red;
}

.card p {
  color: var(--color);
}
```

The `<p>` gets `red` because it inherits the local value from `.card`.

---

# Quick Revision

| Concept     | Syntax               | Purpose                       |
| ----------- | -------------------- | ----------------------------- |
| Declare     | `--color: blue`      | Create variable               |
| Use         | `var(--color)`       | Use variable                  |
| Global      | `:root { ... }`      | Available throughout document |
| Local       | `.card { --x: ... }` | Scoped to element/descendants |
| Inheritance | Automatic            | Children inherit values       |
| Override    | `--color: red`       | Replace inherited value       |
| Fallback    | `var(--x, blue)`     | Use backup value              |
| Theming     | Change variables     | Dynamically change UI         |

### Mental model

```text
Custom Property
      │
      ├── Declare → --color: blue
      │
      ├── Use → var(--color)
      │
      ├── Scope → :root / element
      │
      ├── Inherit → children receive it
      │
      ├── Override → child can redefine it
      │
      ├── Fallback → var(--color, blue)
      │
      └── Theme → change variables → UI changes
```
