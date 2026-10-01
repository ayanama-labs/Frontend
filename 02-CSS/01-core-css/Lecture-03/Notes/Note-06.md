# Advanced Layout Techniques

These CSS features are useful for creating **magazine-style layouts, text wrapping around shapes, custom clipping, and non-rectangular designs**.

---

# 1. Multi-Column Layout

Multi-column layout divides text into **multiple vertical columns**, similar to newspapers and magazines.

### Basic example

```css
.article {
  column-count: 3;
}
```

```text
┌────────┬────────┬────────┐
│ Text   │ Text   │ Text   │
│ Text   │ Text   │ Text   │
│ Text   │ Text   │ Text   │
└────────┴────────┴────────┘
```

---

## `column-count`

Specifies the number of columns.

```css
.article {
  column-count: 2;
}
```

---

## `column-width`

Specifies the preferred width of each column.

```css
.article {
  column-width: 250px;
}
```

The browser decides how many columns can fit.

---

## `column-gap`

Controls the space between columns.

```css
.article {
  column-gap: 30px;
}
```

---

## `column-rule`

Adds a line between columns.

```css
.article {
  column-rule: 1px solid gray;
}
```

---

## Shorthand

```css
.article {
  columns: 250px 3;
}
```

Meaning:

```text
250px → preferred column width
3     → maximum/preferred column count
```

### Remember

```text
column-count → number
column-width → width
column-gap   → spacing
column-rule  → dividing line
```

---

# 2. `shape-outside`

`shape-outside` controls how **text flows around a floated element**.

It works with **floats**.

Example:

```css
.image {
  float: left;
  shape-outside: circle(50%);
  width: 200px;
  height: 200px;
}
```

Instead of text wrapping around the image's rectangular box:

```text
████████████
████ Image ████
████████████
Text Text Text
Text Text Text
```

the text can follow the circular shape:

```text
      █████
   ███     ███
  ██  IMAGE  ██
   ███     ███
      █████

Text follows the circle.
```

---

## Common Shapes

### Circle

```css
shape-outside: circle(50%);
```

### Ellipse

```css
shape-outside: ellipse(50% 40%);
```

### Polygon

```css
shape-outside: polygon(0 0, 100% 0, 100% 100%);
```

### URL

You can also use an image's alpha shape:

```css
shape-outside: url(image.png);
```

---

## Important

`shape-outside` defines the **area around which text flows**.

It does **not** clip the element itself.

For clipping, use `clip-path`.

---

# 3. `clip-path`

`clip-path` defines a **visible region** of an element.

Everything outside the clipping shape becomes invisible.

Example:

```css
.box {
  clip-path: circle(50%);
}
```

Only the circular portion is visible.

```text
Original:

┌────────────┐
│            │
│    BOX     │
│            │
└────────────┘

After clip-path:

    █████
  ██     ██
 ██       ██
  ██     ██
    █████
```

---

## Common Shapes

### Circle

```css
clip-path: circle(50%);
```

### Ellipse

```css
clip-path: ellipse(50% 40%);
```

### Polygon

```css
clip-path: polygon(50% 0, 100% 100%, 0 100%);
```

Creates a triangle.

### Inset

```css
clip-path: inset(20px);
```

Cuts away 20px from each side.

---

# 4. `clip-path` vs `shape-outside`

This distinction is important.

| Property        | Purpose                                           |
| --------------- | ------------------------------------------------- |
| `shape-outside` | Controls how **text wraps around** an element     |
| `clip-path`     | Controls which part of the **element is visible** |

Think:

```text
shape-outside → text shape
clip-path     → element shape
```

They can also be used together.

---

# 5. CSS Shapes

**CSS Shapes** allow content to interact with non-rectangular shapes.

The main tools are:

```text
shape-outside
shape-margin
shape-image-threshold
```

---

## `shape-margin`

Adds space between the shape and the surrounding text.

```css
.image {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 20px;
}
```

Conceptually:

```text
Text
  ↓
  ○ ← shape
 ↗ ↖
extra space around shape
```

---

## `shape-image-threshold`

Controls which parts of an image are considered part of the shape when using an image.

```css
shape-image-threshold: 0.5;
```

Values range from:

```text
0 → 1
```

It is mainly useful with images containing transparency.

---

# 6. Example: Magazine-Style Design

You can combine these techniques:

```css
.article {
  column-count: 2;
  column-gap: 40px;
}

.article img {
  float: left;
  width: 200px;
  height: 200px;

  shape-outside: circle(50%);
  shape-margin: 15px;

  clip-path: circle(50%);
}
```

This gives you:

```text
┌─────────────────┬─────────────────┐
│   ◯ Text text   │ Text text text  │
│ ◯    text text  │ text text text  │
│   ◯ Text text   │ text text text  │
│                 │                 │
│ Text text text  │ Text text text  │
└─────────────────┴─────────────────┘
```

---

# Quick Revision

| Feature                 | Purpose                                 |
| ----------------------- | --------------------------------------- |
| `column-count`          | Number of text columns                  |
| `column-width`          | Preferred column width                  |
| `column-gap`            | Space between columns                   |
| `column-rule`           | Line between columns                    |
| `columns`               | Shorthand for column count/width        |
| `shape-outside`         | Controls text wrapping around shapes    |
| `shape-margin`          | Adds space around a text-wrapping shape |
| `clip-path`             | Clips an element into a custom shape    |
| `shape-image-threshold` | Controls image-based shape threshold    |

### Mental Model

```text
Advanced Layout
│
├── Multi-column
│   └── Split text into columns
│
├── shape-outside
│   └── Make text wrap around shapes
│
├── clip-path
│   └── Make elements visually non-rectangular
│
└── CSS Shapes
    └── Control text flow around custom shapes
```

**Most important distinction:**

> `shape-outside` controls **where text flows**; `clip-path` controls **what part of an element is visible**.
