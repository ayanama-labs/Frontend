# Advanced Responsive Design

Responsive design means making a UI adapt to different **screen sizes, containers, and user/device conditions**.

---

# 1. Container Queries

A **container query** allows an element to change its styles based on the **size of its parent container**, rather than the viewport.

### Media query

```css
@media (min-width: 600px) {
  .card {
    display: flex;
  }
}
```

This asks:

> "Is the viewport at least 600px wide?"

### Container query

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
```

This asks:

> "Is my container at least 400px wide?"

---

## Why Container Queries?

They are useful for **reusable components**.

The same component can behave differently depending on where it is placed.

```text
Large container              Small container

┌──────────────────────┐     ┌─────────────┐
│ Image │ Content      │     │   Image     │
│       │              │     │   Content   │
└──────────────────────┘     └─────────────┘
```

The viewport might remain the same; only the component's container changes.

### Basic syntax

```css
.parent {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .child {
    /* styles */
  }
}
```

**Remember:**

```text
Media Query     → viewport
Container Query → container
```

---

# 2. Advanced Media Queries

Media queries can respond to more than just screen width.

## Width

```css
@media (min-width: 768px) {
  /* styles */
}
```

## Height

```css
@media (min-height: 700px) {
  /* styles */
}
```

## Orientation

```css
@media (orientation: landscape) {
  /* styles */
}
```

or:

```css
@media (orientation: portrait) {
  /* styles */
}
```

---

## User Preferences

### Dark mode

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #111;
    color: white;
  }
}
```

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
  }
}
```

Useful for accessibility.

---

## Hover Capability

```css
@media (hover: hover) {
  button:hover {
    transform: scale(1.05);
  }
}
```

Useful for distinguishing devices that can actually hover from touch devices.

---

## Combining Conditions

```css
@media (min-width: 768px) and (orientation: landscape) {
  /* styles */
}
```

### Logical OR

```css
@media (max-width: 600px), (orientation: portrait) {
  /* styles */
}
```

---

# 3. Responsive Typography

Responsive typography means making text adapt appropriately to the available space.

Instead of only using fixed sizes:

```css
h1 {
  font-size: 48px;
}
```

you can use flexible sizing.

---

## `clamp()`

The most useful function for responsive typography:

```css
h1 {
  font-size: clamp(2rem, 5vw, 5rem);
}
```

Syntax:

```css
clamp(minimum, preferred, maximum)
```

Meaning:

```text
minimum ← preferred → maximum
```

The font:

- never becomes smaller than `2rem`
- prefers `5vw`
- never becomes larger than `5rem`

---

## Example

```css
h1 {
  font-size: clamp(2rem, 6vw, 4rem);
}
```

As the viewport grows, the heading grows smoothly.

---

## Responsive Spacing

`clamp()` isn't limited to fonts.

```css
section {
  padding: clamp(20px, 5vw, 80px);
}
```

This creates fluid spacing.

---

# 4. `min()`, `max()`, and `clamp()`

### `min()`

Uses the smaller value:

```css
width: min(90%, 1200px);
```

Meaning:

> Width can be 90%, but never exceed 1200px.

---

### `max()`

Uses the larger value:

```css
padding: max(20px, 5vw);
```

---

### `clamp()`

Keeps a value between limits:

```css
font-size: clamp(1rem, 2vw, 2rem);
```

```text
min       preferred       max
 ↓            ↓             ↓
1rem       2vw           2rem
```

---

# 5. Intrinsic Web Design

**Intrinsic web design** means allowing content and layout to naturally determine their size rather than designing everything around fixed dimensions and specific breakpoints.

Instead of saying:

> "At 768px, make this exactly 400px wide."

you let the content and available space determine the layout.

---

## Traditional Responsive Approach

```css
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

This relies heavily on breakpoints.

---

## Intrinsic Approach

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

The browser automatically determines how many columns fit.

```text
Large screen:

┌────┐ ┌────┐ ┌────┐ ┌────┐


Medium screen:

┌────┐ ┌────┐ ┌────┐


Small screen:

┌────────────┐
```

No explicit breakpoint is necessary.

---

# 6. Important Intrinsic Sizing Tools

### `min-content`

The smallest size the content can reasonably take.

```css
width: min-content;
```

### `max-content`

The size needed to fit the content without wrapping.

```css
width: max-content;
```

### `fit-content()`

Allows an element to grow until a specified limit.

```css
width: fit-content(300px);
```

### `minmax()`

Defines a minimum and maximum size:

```css
grid-template-columns: minmax(200px, 1fr);
```

---

# 7. `auto-fit` vs `auto-fill`

Commonly used with intrinsic grids.

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

### `auto-fit`

Fits as many columns as possible and expands existing columns to fill available space.

### `auto-fill`

Creates as many tracks as can fit, potentially leaving empty tracks.

For most responsive card layouts:

```css
repeat(auto-fit, minmax(250px, 1fr))
```

is a very useful pattern.

---

# Quick Revision

| Concept                  | Main idea                                        |
| ------------------------ | ------------------------------------------------ |
| **Container query**      | Respond to container size                        |
| **Media query**          | Respond to viewport/device conditions            |
| `clamp()`                | Fluid value with min/max limits                  |
| `min()`                  | Choose smaller value                             |
| `max()`                  | Choose larger value                              |
| `prefers-color-scheme`   | Detect light/dark preference                     |
| `prefers-reduced-motion` | Respect motion preferences                       |
| **Intrinsic design**     | Let content and available space determine layout |
| `min-content`            | Smallest reasonable content size                 |
| `max-content`            | Size needed without wrapping                     |
| `fit-content()`          | Content size with a maximum                      |
| `minmax()`               | Minimum + maximum track size                     |
| `auto-fit`               | Automatically fit available columns              |

## Mental Model

```text
Advanced Responsive Design
│
├── Container Queries
│   └── "How big is my container?"
│
├── Media Queries
│   └── "What are the viewport/device conditions?"
│
├── Responsive Typography
│   └── clamp(), min(), max()
│
└── Intrinsic Design
    └── "Let the content + available space decide."
```

**Core principle:** Modern responsive CSS is increasingly about **fluid, content-driven layouts** rather than creating dozens of breakpoint-specific designs.
