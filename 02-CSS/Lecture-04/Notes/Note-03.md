# CSS-in-JS Concepts

Modern frontend applications can handle CSS in several ways:

```text
CSS-in-JS
CSS Modules
Utility-first CSS
Traditional CSS / SCSS
```

The main difference is **where styles are defined, how they're scoped, and when CSS is generated**.

---

# 1. Styled Components Approach

**Styled Components** is a CSS-in-JS approach where CSS is written directly inside JavaScript/TypeScript.

Example:

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px 20px;
`;

function App() {
  return <Button>Click Me</Button>;
}
```

The component contains both:

```text
Component logic
      +
Component styling
```

---

## Dynamic Styling

Styles can depend on props:

```jsx
const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "gray")};
`;
```

Usage:

```jsx
<Button primary>Save</Button>
<Button>Cancel</Button>
```

### Main idea

> Create reusable components whose styles can depend on component state/props.

---

# 2. CSS Modules

CSS Modules provide **locally scoped CSS**.

Example:

```text
Button/
├── Button.jsx
└── Button.module.css
```

`Button.module.css`:

```css
.button {
  background: blue;
  color: white;
}
```

Component:

```jsx
import styles from "./Button.module.css";

<button className={styles.button}>Save</button>;
```

The class name is transformed into a unique name internally, preventing accidental conflicts.

### Normal CSS

```css
.button {
}
```

could conflict with another `.button`.

### CSS Modules

```text
Button_button__abc123
```

is scoped to the module.

---

# 3. Utility-First Frameworks

**Tailwind CSS** is a utility-first CSS framework.

Instead of creating custom component classes:

```css
.button {
  padding: 10px 20px;
  background: blue;
  color: white;
}
```

you compose small utility classes:

```jsx
<button className="px-5 py-2 bg-blue-600 text-white">Save</button>
```

Each class generally performs **one specific job**.

```text
p-4       → padding
mt-4      → margin-top
text-xl   → font size
flex      → display:flex
rounded   → border radius
```

---

## Why Utility-First?

You can build UI directly in markup:

```jsx
<div className="flex items-center gap-4 p-6">...</div>
```

Advantages:

- Fast development
- Consistent design system
- Reusable utility classes
- Less custom CSS

---

# 4. Runtime vs Build-Time Solutions

This is an important distinction.

## Runtime CSS-in-JS

Some CSS-in-JS libraries generate or process styles **while the application is running**.

Conceptually:

```text
React App
   ↓
JavaScript runs
   ↓
Styles generated/processed
   ↓
Browser
```

Example:

```jsx
const Button = styled.button`
  color: blue;
`;
```

The styling system handles the CSS while the application runs.

### Advantages

- Dynamic styles are easy
- Styles can depend directly on props/state

### Disadvantages

- Runtime JavaScript work
- Can add performance overhead
- More complexity during rendering

---

# 5. Build-Time Styling

Build-time solutions generate or extract CSS **during the build**.

```text
Source Code
    ↓
Build Tool
    ↓
CSS generated/extracted
    ↓
Browser
```

The browser receives already-generated CSS.

Examples include:

- CSS Modules
- Sass/SCSS
- Tailwind's generated CSS
- Build-time CSS-in-JS solutions

### Advantages

- Less runtime work
- Smaller runtime overhead
- CSS can be optimized during build

---

# 6. Runtime vs Build-Time

|                          | Runtime                  | Build-time                      |
| ------------------------ | ------------------------ | ------------------------------- |
| When processed?          | While app runs           | During build                    |
| Dynamic styling          | Excellent                | More limited, depending on tool |
| Runtime overhead         | Potentially higher       | Generally lower                 |
| Example                  | Some CSS-in-JS libraries | CSS Modules, Tailwind, Sass     |
| CSS available before JS? | Depends                  | Often yes                       |

---

# 7. Quick Comparison

| Approach              | Main idea                             |
| --------------------- | ------------------------------------- |
| **Styled Components** | CSS written inside JS components      |
| **CSS Modules**       | Locally scoped CSS files              |
| **Tailwind**          | Compose predefined utility classes    |
| **Runtime CSS-in-JS** | Styles processed/generated at runtime |
| **Build-time CSS**    | Styles generated during build         |

---

# Mental Model

```text
CSS Styling Approaches
│
├── CSS-in-JS
│   └── Styles live with JS components
│
├── CSS Modules
│   └── CSS file + automatic local scoping
│
├── Utility-first
│   └── Compose small utility classes
│
└── Processing
    ├── Runtime
    │   └── Styles handled while app runs
    │
    └── Build-time
        └── Styles generated before deployment
```

### One-line memory trick

> **Styled Components = styles in components, CSS Modules = scoped CSS, Tailwind = utility classes, Runtime = process while running, Build-time = process before running.**
