# Advanced Visual Effects

These CSS features allow you to create effects such as **blur, brightness changes, glassmorphism, blending, and custom-shaped transparency**.

---

# 1. CSS Filters

The `filter` property applies visual effects to an element.

```css
.image {
  filter: blur(5px);
}
```

### Common filters

```css
filter: blur(5px);
filter: brightness(150%);
filter: contrast(120%);
filter: grayscale(100%);
filter: saturate(150%);
filter: sepia(100%);
filter: hue-rotate(90deg);
filter: invert(100%);
filter: opacity(50%);
```

### Multiple filters

```css
.image {
  filter: grayscale(100%) brightness(120%) contrast(110%);
}
```

---

## Common Uses

### Grayscale

```css
img {
  filter: grayscale(100%);
}
```

### Blur

```css
img {
  filter: blur(5px);
}
```

### Brightness

```css
img {
  filter: brightness(70%);
}
```

### Hover effect

```css
img {
  filter: grayscale(100%);
}

img:hover {
  filter: grayscale(0%);
}
```

**Remember:**

> `filter` changes the appearance of the element itself.

---

# 2. `backdrop-filter`

`backdrop-filter` applies effects to the **content behind an element**, rather than the element itself.

Classic glassmorphism:

```css
.card {
  background: rgb(255 255 255 / 20%);
  backdrop-filter: blur(10px);
}
```

Conceptually:

```text
Background
    ↓
┌───────────────────┐
│   blurred         │ ← backdrop-filter
│   background      │
│                   │
│     Card          │
└───────────────────┘
```

Common effects:

```css
backdrop-filter: blur(10px);
backdrop-filter: brightness(80%);
backdrop-filter: contrast(120%);
```

### Important distinction

```text
filter          → affects the element
backdrop-filter → affects what's behind the element
```

For `backdrop-filter` to be visible, the element generally needs some transparency/translucency.

---

# 3. `mix-blend-mode`

`mix-blend-mode` controls **how an element's pixels blend with the content behind it**.

Example:

```css
.overlay {
  mix-blend-mode: multiply;
}
```

Common modes include:

```text
multiply
screen
overlay
darken
lighten
difference
exclusion
```

### Example

```css
.text {
  mix-blend-mode: difference;
}
```

The text will visually blend with the background rather than simply being painted normally.

---

## Useful Effects

### `multiply`

Darkens by blending colors.

```css
mix-blend-mode: multiply;
```

### `screen`

Generally produces a lighter result.

```css
mix-blend-mode: screen;
```

### `difference`

Creates strong color differences.

```css
mix-blend-mode: difference;
```

---

### Mental model

```text
Normal:
Element
   ↓
Background

mix-blend-mode:
Element + Background
        ↓
   blended result
```

---

# 4. CSS Masks

CSS masking controls **which parts of an element are visible**, using a mask.

Think of it as a stencil:

```text
Mask
  ↓
████████████
██        ██
██ visible██
██        ██
████████████
```

The mask controls the element's transparency.

---

## `mask-image`

You can use a gradient as a mask:

```css
.box {
  mask-image: linear-gradient(to bottom, black, transparent);
}
```

The element gradually fades away.

---

## Radial Mask

```css
.box {
  mask-image: radial-gradient(circle, black 50%, transparent 100%);
}
```

This can create circular visibility effects.

---

## Image Mask

You can also use an image:

```css
.box {
  mask-image: url(mask.png);
}
```

The mask's transparency determines which parts of the element are visible.

---

# 5. Mask vs Clip Path

These are related but different.

### `clip-path`

Defines a hard geometric clipping region:

```css
.box {
  clip-path: circle(50%);
}
```

Everything outside is hidden.

### `mask`

Uses **transparency/alpha information** to control visibility:

```css
.box {
  mask-image: linear-gradient(black, transparent);
}
```

This allows smooth fading and more complex transparency effects.

Think:

```text
clip-path → shape boundary
mask      → transparency map
```

---

# Quick Comparison

| Feature           | What it affects                      |
| ----------------- | ------------------------------------ |
| `filter`          | The element itself                   |
| `backdrop-filter` | Content behind the element           |
| `mix-blend-mode`  | How element blends with surroundings |
| `mask`            | Which parts of element are visible   |
| `clip-path`       | Geometric clipping boundary          |

---

# Practical Examples

### Blur image

```css
img {
  filter: blur(5px);
}
```

### Glass effect

```css
.card {
  background: rgb(255 255 255 / 20%);
  backdrop-filter: blur(10px);
}
```

### Blend effect

```css
.overlay {
  mix-blend-mode: multiply;
}
```

### Fade an element

```css
.box {
  mask-image: linear-gradient(to bottom, black, transparent);
}
```

---

# Mental Model

```text
Advanced Visual Effects
│
├── filter
│   └── Change the element's appearance
│
├── backdrop-filter
│   └── Change what's behind the element
│
├── mix-blend-mode
│   └── Blend element with surroundings
│
└── mask
    └── Control element visibility/transparency
```

### One-line memory trick

> **Filter changes it, backdrop-filter blurs/changes behind it, blend mixes it, mask reveals/hides it.**
