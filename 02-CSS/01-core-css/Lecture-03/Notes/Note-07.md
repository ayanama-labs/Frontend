# Modern CSS Features

## 1. CSS Logical Properties

Logical properties describe dimensions and spacing based on **writing direction**, rather than physical directions like `left`, `right`, `top`, and `bottom`.

### Traditional physical properties

```css
.box {
  margin-left: 20px;
  padding-right: 10px;
}
```

These specifically refer to left/right.

### Logical properties

```css
.box {
  margin-inline-start: 20px;
  padding-inline-end: 10px;
}
```

These adapt to the document's writing direction.

---

## Important Logical Properties

### Width / height

```css
inline-size: 300px;
block-size: 200px;
```

Generally:

```text
inline → direction text flows
block  → direction lines stack
```

For normal English:

```text
inline → horizontal
block  → vertical
```

---

### Margins

```css
margin-inline: 20px;
margin-block: 10px;
```

Equivalent conceptually to:

```text
margin-inline → left + right
margin-block  → top + bottom
```

Individual sides:

```css
margin-inline-start: 20px;
margin-inline-end: 20px;

margin-block-start: 10px;
margin-block-end: 10px;
```

---

### Padding

```css
padding-inline: 20px;
padding-block: 10px;
```

---

### Borders

```css
border-inline-start: 2px solid;
border-block-end: 2px solid;
```

---

### Key idea

```text
Physical properties → left/right/top/bottom

Logical properties → inline/block/start/end
```

Logical properties are especially useful for **internationalization and RTL languages**.

---

# 2. `aspect-ratio`

`aspect-ratio` controls the **width-to-height relationship** of an element.

```css
.box {
  aspect-ratio: 16 / 9;
}
```

This maintains:

```text
width : height
16    : 9
```

For example:

```text
┌────────────────────┐
│                    │
│       16 : 9       │
│                    │
└────────────────────┘
```

---

## Common Examples

### Video

```css
.video {
  width: 100%;
  aspect-ratio: 16 / 9;
}
```

### Square

```css
.card {
  aspect-ratio: 1;
}
```

Equivalent:

```css
aspect-ratio: 1 / 1;
```

---

## Why use it?

Before `aspect-ratio`, developers often used padding hacks to maintain proportions.

Now:

```css
aspect-ratio: 16 / 9;
```

is much simpler.

---

# 3. `gap` with Flexbox

`gap` creates space **between flex items**.

```css
.container {
  display: flex;
  gap: 20px;
}
```

```text
┌────┐   20px   ┌────┐   20px   ┌────┐
│ A  │          │ B  │          │ C  │
└────┘          └────┘          └────┘
```

Previously, developers commonly used margins:

```css
.item {
  margin-right: 20px;
}
```

`gap` is cleaner because it controls **spacing between items**, not the items' outer margins.

---

## Row and Column Gap

```css
.container {
  row-gap: 10px;
  column-gap: 20px;
}
```

Or:

```css
.container {
  gap: 10px 20px;
}
```

Meaning:

```text
gap: row-gap column-gap;
```

`gap` works with:

- Flexbox
- CSS Grid

---

# 4. Modern Color Functions

Modern CSS provides several ways to represent colors.

---

## HSL

HSL means:

```text
H → Hue
S → Saturation
L → Lightness
```

Example:

```css
color: hsl(200 80% 50%);
```

### Hue

Represents the color itself.

```text
0°   → red
120° → green
240° → blue
```

### Saturation

How intense the color is.

```text
0%   → gray
100% → fully saturated
```

### Lightness

How light/dark it is.

```text
0%   → black
50%  → normal
100% → white
```

---

# 5. `lab()`

`lab()` is a modern color function designed to represent colors more consistently according to human perception.

```css
color: lab(60% 40 30);
```

It has three components:

```text
L → Lightness
a → Green ↔ Red
b → Blue ↔ Yellow
```

Unlike HSL, Lab is designed around **perceptual color differences**.

---

# 6. `lch()`

`lch()` is another perceptual color format.

```css
color: lch(60% 50 40);
```

It uses:

```text
L → Lightness
C → Chroma
H → Hue
```

Think:

```text
L → how light?
C → how colorful?
H → which color?
```

---

# 7. HSL vs Lab vs LCH

| Function | Components                 | Main idea                       |
| -------- | -------------------------- | ------------------------------- |
| `hsl()`  | Hue, Saturation, Lightness | Easy human-friendly color model |
| `lab()`  | Lightness, a, b            | Perceptually oriented           |
| `lch()`  | Lightness, Chroma, Hue     | Perceptual + intuitive hue      |

Example:

```css
color: hsl(200 80% 50%);
color: lab(60% 40 30);
color: lch(60% 50 40);
```

---

# Quick Revision

| Feature            | Purpose                                |
| ------------------ | -------------------------------------- |
| Logical properties | Writing-direction-aware sizing/spacing |
| `inline-size`      | Logical width                          |
| `block-size`       | Logical height                         |
| `margin-inline`    | Inline-axis margins                    |
| `padding-block`    | Block-axis padding                     |
| `aspect-ratio`     | Maintain width/height ratio            |
| `gap`              | Space between Flex/Grid items          |
| `hsl()`            | Hue + Saturation + Lightness           |
| `lab()`            | Perceptual color representation        |
| `lch()`            | Lightness + Chroma + Hue               |

## Mental Model

```text
Modern CSS
│
├── Logical Properties
│   └── inline / block / start / end
│
├── aspect-ratio
│   └── Maintain proportions
│
├── gap
│   └── Space between items
│
└── Modern Colors
    ├── HSL
    ├── Lab
    └── LCH
```

**Most important takeaway:** Modern CSS is moving toward **direction-aware layouts, intrinsic sizing, cleaner spacing, and more perceptually useful color systems**.
