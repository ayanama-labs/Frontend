# CSS Preprocessors

A **CSS preprocessor** extends CSS with features such as variables, nesting, functions, mixins, and logic.

The preprocessor code is then **compiled into normal CSS** that browsers understand.

```text
SCSS
  ↓
Compiler
  ↓
CSS
  ↓
Browser
```

The most popular preprocessor is **Sass**.

---

# 1. Sass / SCSS Fundamentals

**Sass** is a CSS preprocessor.

There are two syntaxes:

```text
.sass → indentation-based syntax
.scss → CSS-like syntax
```

Most modern projects use **SCSS**.

### SCSS

```scss
$primary: blue;

.button {
  color: white;
  background: $primary;
}
```

Compiles to:

```css
.button {
  color: white;
  background: blue;
}
```

---

# 2. Variables

SCSS variables start with `$`.

```scss
$primary: #2563eb;
$spacing: 20px;
$radius: 8px;

.card {
  padding: $spacing;
  border-radius: $radius;
  background: $primary;
}
```

Instead of repeating values:

```scss
padding: 20px;
border-radius: 8px;
```

you can reuse variables.

### Difference from CSS Custom Properties

SCSS:

```scss
$color: blue;
```

is resolved during **compilation**.

CSS:

```css
--color: blue;
```

exists at **runtime** in the browser.

---

# 3. Nesting

SCSS allows selectors to be nested.

Instead of:

```css
.card {
}
.card h2 {
}
.card p {
}
```

you can write:

```scss
.card {
  padding: 20px;

  h2 {
    font-size: 24px;
  }

  p {
    color: gray;
  }
}
```

Compiles to:

```css
.card {
  padding: 20px;
}

.card h2 {
  font-size: 24px;
}

.card p {
  color: gray;
}
```

### `&` Parent Selector

Useful for states and modifiers:

```scss
.button {
  background: blue;

  &:hover {
    background: darkblue;
  }

  &--primary {
    color: white;
  }
}
```

Compiles roughly to:

```css
.button:hover {
  background: darkblue;
}

.button--primary {
  color: white;
}
```

---

# 4. Mixins

A **mixin** is a reusable group of CSS declarations.

Define:

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Use:

```scss
.container {
  @include flex-center;
}
```

This avoids repeating common CSS.

---

## Mixins with Parameters

```scss
@mixin button($color) {
  background: $color;
  color: white;
  padding: 10px 20px;
}
```

Use:

```scss
.primary {
  @include button(blue);
}

.danger {
  @include button(red);
}
```

Think:

```text
Mixin → reusable CSS template
```

---

# 5. Functions

Functions calculate or return values.

### Built-in function

```scss
$base: 16px;

.title {
  font-size: $base * 2;
}
```

You can also create your own:

```scss
@function spacing($value) {
  @return $value * 8px;
}

.card {
  padding: spacing(3);
}
```

Result:

```css
.card {
  padding: 24px;
}
```

### Mixin vs Function

```text
Mixin    → generates/applies CSS
Function → calculates/returns a value
```

---

# 6. Control Directives

SCSS provides programming-like control structures.

## `@if`

```scss
$theme: dark;

.button {
  @if $theme == dark {
    background: black;
    color: white;
  } @else {
    background: white;
    color: black;
  }
}
```

---

## `@for`

Repeats something a specific number of times.

```scss
@for $i from 1 through 3 {
  .mt-#{$i} {
    margin-top: $i * 10px;
  }
}
```

Produces classes such as:

```css
.mt-1 {
  margin-top: 10px;
}
.mt-2 {
  margin-top: 20px;
}
.mt-3 {
  margin-top: 30px;
}
```

---

## `@each`

Iterates through a list.

```scss
$colors: red, blue, green;

@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}
```

---

## `@while`

Repeats while a condition is true.

```scss
$i: 1;

@while $i <= 3 {
  .item-#{$i} {
    margin: $i * 10px;
  }

  $i: $i + 1;
}
```

---

# 7. Build Process

Browsers don't understand SCSS directly.

You need a **Sass compiler**.

```text
styles.scss
     ↓
 Sass Compiler
     ↓
styles.css
     ↓
 Browser
```

Example with npm:

```bash
npm install -D sass
```

Then:

```bash
npx sass styles.scss styles.css
```

For development:

```bash
npx sass --watch styles.scss styles.css
```

The compiler watches the SCSS file and automatically generates updated CSS.

---

# 8. Partial Files and `@use`

Large SCSS projects can be split into files.

Example:

```text
scss/
├── _variables.scss
├── _mixins.scss
├── _buttons.scss
└── main.scss
```

Use them:

```scss
@use "variables";
@use "mixins";
@use "buttons";
```

The underscore indicates a **partial** file that is intended to be included by other Sass files.

---

# 9. SCSS vs CSS

| Feature     | CSS                      | SCSS                  |
| ----------- | ------------------------ | --------------------- |
| Variables   | Custom properties        | `$variables`          |
| Nesting     | Supported natively       | Supported             |
| Mixins      | No                       | Yes                   |
| Functions   | CSS functions            | Custom Sass functions |
| Loops       | No general-purpose loops | Yes                   |
| `@if`       | No                       | Yes                   |
| Compilation | Not required             | Required              |

---

# Quick Revision

```text
CSS Preprocessor
│
├── Sass / SCSS
│
├── Variables
│   └── $primary: blue;
│
├── Nesting
│   └── .card { h2 { ... } }
│
├── Mixins
│   └── Reusable CSS
│
├── Functions
│   └── Calculate/return values
│
├── Control Directives
│   ├── @if
│   ├── @for
│   ├── @each
│   └── @while
│
└── Build Process
    └── SCSS → Compiler → CSS → Browser
```

### Most important distinction

> **SCSS is a development language that gets compiled into CSS; the browser ultimately receives CSS.**

And remember:

```text
Variable → stores a value
Mixin    → reuses CSS declarations
Function → returns/calculates a value
Directive → controls generation logic
Compiler → converts SCSS → CSS
```
