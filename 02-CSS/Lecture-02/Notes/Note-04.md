# Flexbox Layout

Flexbox is a **one-dimensional layout system** for arranging elements in a **row or column**.

---

## 1. Flex Container

Make an element a flex container:

```css
.container {
  display: flex;
}
```

Its direct children become **flex items**.

```text
.container
├── item
├── item
└── item
```

### Main container properties

```css
.container {
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  gap: 20px;
}
```

| Property          | Purpose                        |
| ----------------- | ------------------------------ |
| `display: flex`   | Creates flex container         |
| `flex-direction`  | Sets main-axis direction       |
| `flex-wrap`       | Allows items to wrap           |
| `justify-content` | Aligns items on **main axis**  |
| `align-items`     | Aligns items on **cross axis** |
| `align-content`   | Aligns multiple flex lines     |
| `gap`             | Space between items            |

### `flex-direction`

```css
flex-direction: row; /* → */
flex-direction: row-reverse; /* ← */
flex-direction: column; /* ↓ */
flex-direction: column-reverse; /* ↑ */
```

### `flex-wrap`

```css
flex-wrap: nowrap; /* default */
flex-wrap: wrap;
```

---

# 2. Main Axis vs Cross Axis

This is the **most important Flexbox concept**.

The axes depend on `flex-direction`.

### `row`

```css
flex-direction: row;
```

```text
Main axis   → → →

Cross axis
    ↓
    ↓
```

Therefore:

```text
justify-content → main axis
align-items     → cross axis
```

### `column`

```css
flex-direction: column;
```

```text
Main axis
    ↓
    ↓

Cross axis → → →
```

So:

```text
justify-content → vertical
align-items     → horizontal
```

### Remember

> **`justify-content` → main axis**
> **`align-items` → cross axis**

---

# 3. Flex Item Properties

These apply to **children of the flex container**.

### `flex`

Controls how an item grows/shrinks.

```css
.item {
  flex: 1;
}
```

Common:

```css
.item {
  flex: 1 1 200px;
}
```

Meaning:

```text
flex-grow   → 1
flex-shrink → 1
flex-basis  → 200px
```

---

### `flex-grow`

Controls how much an item **grows** when extra space exists.

```css
.item {
  flex-grow: 1;
}
```

---

### `flex-shrink`

Controls how much an item **shrinks** when there isn't enough space.

```css
.item {
  flex-shrink: 1;
}
```

---

### `flex-basis`

Defines the item's **initial main-axis size**.

```css
.item {
  flex-basis: 200px;
}
```

---

### `order`

Changes the visual order of flex items.

```css
.item {
  order: 2;
}
```

Default:

```css
order: 0;
```

Lower `order` appears first.

---

### `align-self`

Overrides `align-items` for one particular item.

```css
.item {
  align-self: flex-end;
}
```

---

# 4. Common Flexbox Patterns

### Center something horizontally + vertically

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

### Horizontal navigation

```css
.nav {
  display: flex;
  gap: 20px;
}
```

---

### Space items evenly

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

Other useful values:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

---

### Responsive row that wraps

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

---

# Quick Revision

```text
display: flex
    ↓
Direct children become flex items
```

### Container

```text
flex-direction → row / column
flex-wrap      → wrapping
justify-content → main axis
align-items     → cross axis
align-content   → multiple lines
gap             → spacing
```

### Item

```text
flex-grow   → grow
flex-shrink → shrink
flex-basis  → initial size
flex        → shorthand
order       → visual order
align-self  → individual cross-axis alignment
```

### Golden rule

```text
             MAIN AXIS
                 ↓
       justify-content

       CROSS AXIS
                 ↓
          align-items
```

**Flexbox = one-dimensional layout → arrange items along one main axis at a time.**
