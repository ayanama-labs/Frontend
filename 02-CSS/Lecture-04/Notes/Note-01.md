# CSS Architecture

CSS architecture is about **organizing CSS so that it remains scalable, reusable, predictable, and maintainable** as a project grows.

The four approaches here are:

1. BEM
2. OOCSS
3. SMACSS
4. Component-based CSS

---

# 1. BEM Methodology

**BEM = Block, Element, Modifier**

It provides a naming convention for CSS classes.

### Block

A standalone component.

```html
<div class="card"></div>
```

`card` = Block

### Element

A part of a block.

```html
<div class="card">
  <h2 class="card__title"></h2>
  <p class="card__description"></p>
</div>
```

Syntax:

```text
block__element
```

### Modifier

A variation or state of a block/element.

```html
<div class="card card--featured"></div>
```

Syntax:

```text
block--modifier
block__element--modifier
```

### Complete example

```html
<div class="card card--featured">
  <h2 class="card__title">Product</h2>
  <p class="card__description">Description</p>
</div>
```

```text
card
├── card__title
├── card__description
└── card--featured
```

**Mental model:**

```text
Block    → component
Element  → part of component
Modifier → variation/state
```

---

# 2. OOCSS

**OOCSS = Object-Oriented CSS**

The idea is to create **reusable CSS objects** instead of writing styles specifically for individual components.

Two main principles:

### 1. Separate structure from skin

Structure:

```css
.button {
  padding: 10px 20px;
  border-radius: 6px;
}
```

Appearance:

```css
.button-primary {
  background: blue;
  color: white;
}
```

Now the structure can be reused:

```html
<button class="button button-primary">Save</button>
<button class="button button-secondary">Cancel</button>
```

---

### 2. Separate container from content

Avoid overly dependent selectors:

```css
.sidebar .button {
  color: red;
}
```

Prefer reusable classes:

```css
.button-danger {
  color: red;
}
```

The button should ideally look the same regardless of where it is placed.

**Core idea:**

> Build reusable CSS objects instead of styling every element based on its location.

---

# 3. SMACSS

**SMACSS = Scalable and Modular Architecture for CSS**

SMACSS organizes CSS into **categories**.

The main categories are:

```text
Base
Layout
Module
State
Theme
```

---

## Base

Default element styles.

```css
body {
  margin: 0;
}

h1 {
  font-size: 2rem;
}

a {
  text-decoration: none;
}
```

Think:

> How should HTML elements look by default?

---

## Layout

Defines major page structure.

```css
.header {
}
.sidebar {
}
.main {
}
.footer {
}
```

Think:

> Where does something go?

---

## Module

Reusable components.

```css
.card {
}
.button {
}
.navbar {
}
.modal {
}
```

Think:

> What reusable component is this?

---

## State

Defines different states.

```css
.is-active {
}
.is-hidden {
}
.is-disabled {
}
.is-loading {
}
```

Think:

> What state is the component currently in?

---

## Theme

Defines visual themes.

```css
.theme-dark {
}
.theme-light {
}
```

Think:

> What visual theme is being applied?

---

### SMACSS Mental Model

```text
SMACSS
│
├── Base    → defaults
├── Layout  → structure
├── Module  → components
├── State   → states
└── Theme   → appearance
```

---

# 4. Component-Based CSS

Component-based CSS organizes styles around **independent UI components**.

This approach is common in:

- React
- Vue
- Angular
- Svelte

Example:

```text
components/
├── Button/
│   ├── Button.jsx
│   └── Button.css
│
├── Card/
│   ├── Card.jsx
│   └── Card.css
│
└── Navbar/
    ├── Navbar.jsx
    └── Navbar.css
```

`Button.css`:

```css
.button {
  padding: 10px 20px;
}

.button--primary {
  background: blue;
}
```

The CSS belongs closely to the component it styles.

---

# 5. Why Component-Based CSS?

It provides:

- Encapsulation
- Reusability
- Easier maintenance
- Clear ownership of styles
- Less accidental CSS interference

For example:

```text
Button
 ├── Button.jsx
 └── Button.css

Card
 ├── Card.jsx
 └── Card.css
```

You know exactly where the styles for each component live.

---

# 6. BEM vs OOCSS vs SMACSS

| Method              | Main focus                          |
| ------------------- | ----------------------------------- |
| **BEM**             | Naming conventions                  |
| **OOCSS**           | Reusable CSS objects                |
| **SMACSS**          | Organizing CSS into categories      |
| **Component-based** | Organizing CSS around UI components |

They're not mutually exclusive.

For example, you can use **BEM naming inside a component-based architecture**:

```text
Card/
├── Card.jsx
└── Card.css
```

```css
.card {
}
.card__title {
}
.card__image {
}
.card--featured {
}
```

---

# Quick Revision

```text
CSS Architecture
│
├── BEM
│   ├── Block
│   ├── Element
│   └── Modifier
│
├── OOCSS
│   ├── Separate structure & skin
│   └── Separate container & content
│
├── SMACSS
│   ├── Base
│   ├── Layout
│   ├── Module
│   ├── State
│   └── Theme
│
└── Component-Based
    └── CSS organized around components
```

### One-line memory trick

> **BEM names it, OOCSS reuses it, SMACSS organizes it, Component CSS encapsulates it.**
