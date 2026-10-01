# CSS Transforms and Transitions

## 1. CSS Transform

`transform` changes the **visual position, size, rotation, or shape** of an element without changing the normal document flow.

```css
.box {
  transform: rotate(45deg);
}
```

Common transform functions:

```text
translate → move
scale     → resize
rotate    → rotate
skew      → slant
```

---

# 2. 2D Transforms

2D transforms operate on the **X and Y axes**.

## `translate()`

Moves an element.

```css
.box {
  transform: translate(50px, 20px);
}
```

- `50px` → X-axis
- `20px` → Y-axis

Individual versions:

```css
transform: translateX(50px);
transform: translateY(20px);
```

---

## `scale()`

Changes the size.

```css
.box {
  transform: scale(1.5);
}
```

`1` = original size

`2` = twice the size

`0.5` = half the size

Can specify X and Y separately:

```css
transform: scale(2, 1);
```

---

## `rotate()`

Rotates an element.

```css
.box {
  transform: rotate(45deg);
}
```

Positive values → clockwise
Negative values → counterclockwise

```css
transform: rotate(-45deg);
```

---

## `skew()`

Slants an element.

```css
.box {
  transform: skew(20deg);
}
```

Individual:

```css
transform: skewX(20deg);
transform: skewY(20deg);
```

---

# 3. Combining Transforms

Multiple transformations can be combined:

```css
.box {
  transform: translateX(50px) rotate(20deg) scale(1.2);
}
```

The **order matters**.

```css
transform: translateX(50px) rotate(20deg);
```

is not necessarily equivalent to:

```css
transform: rotate(20deg) translateX(50px);
```

because transformations affect the coordinate system used by subsequent transformations.

---

# 4. 3D Transforms

3D transforms introduce the **Z-axis**.

```text
        Y
        ↑
        |
        |
        +--------→ X
       /
      /
     Z
```

Common functions:

```text
translateZ()
scaleZ()
rotateX()
rotateY()
rotateZ()
```

---

## `translateZ()`

Moves an element along the Z-axis.

```css
.box {
  transform: translateZ(100px);
}
```

Usually requires perspective to make the 3D effect visually meaningful.

---

## `rotateX()`

Rotates around the X-axis:

```css
.box {
  transform: rotateX(45deg);
}
```

## `rotateY()`

Rotates around the Y-axis:

```css
.box {
  transform: rotateY(45deg);
}
```

## `rotateZ()`

Rotates around the Z-axis.

```css
.box {
  transform: rotateZ(45deg);
}
```

`rotateZ()` is essentially the familiar 2D rotation.

---

# 5. Perspective

`perspective` creates the sense of **depth** in 3D transformations.

```css
.container {
  perspective: 800px;
}
```

Smaller value → stronger perspective
Larger value → weaker perspective

Example:

```css
.container {
  perspective: 800px;
}

.box {
  transform: rotateY(45deg);
}
```

---

# 6. Transform Origin

`transform-origin` determines the **point around which a transform occurs**.

Default:

```css
transform-origin: center;
```

Example:

```css
.box {
  transform-origin: left center;
  transform: rotate(45deg);
}
```

Instead of rotating around its center, it rotates around the left side.

Common values:

```css
transform-origin: center;
transform-origin: top;
transform-origin: bottom;
transform-origin: left;
transform-origin: right;
```

You can also use percentages or lengths:

```css
transform-origin: 0 0;
```

This means:

```text
X = 0%
Y = 0%

top-left corner
```

---

# 7. CSS Transitions

A **transition** makes a property change happen smoothly over time.

Without transition:

```css
button:hover {
  transform: scale(1.1);
}
```

The change happens immediately.

With transition:

```css
button {
  transition: transform 0.3s;
}

button:hover {
  transform: scale(1.1);
}
```

The change happens over `0.3s`.

---

# 8. Transition Properties

### `transition-property`

Specifies what should transition.

```css
transition-property: transform;
```

Multiple properties:

```css
transition-property: transform, background-color;
```

---

### `transition-duration`

How long the transition takes.

```css
transition-duration: 0.3s;
```

---

### `transition-timing-function`

Controls the speed curve.

```css
transition-timing-function: ease;
```

Common values:

```text
linear
ease
ease-in
ease-out
ease-in-out
```

---

### `transition-delay`

Wait before starting.

```css
transition-delay: 0.2s;
```

---

# 9. Shorthand

Instead of:

```css
button {
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
```

Use:

```css
button {
  transition: transform 0.3s ease;
}
```

Multiple properties:

```css
button {
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}
```

---

# 10. Transform vs Transition

These are different concepts.

### Transform

Defines **what changes**:

```css
transform: scale(1.2);
```

### Transition

Defines **how smoothly the change happens**:

```css
transition: transform 0.3s ease;
```

Think:

```text
Transform  → WHAT changes?
Transition → HOW FAST/SMOOTHLY it changes?
```

---

# Quick Revision

| Concept            | Purpose                         |
| ------------------ | ------------------------------- |
| `translate()`      | Move                            |
| `scale()`          | Resize                          |
| `rotate()`         | Rotate                          |
| `skew()`           | Slant                           |
| `translateZ()`     | Move along Z-axis               |
| `rotateX()`        | Rotate around X-axis            |
| `rotateY()`        | Rotate around Y-axis            |
| `rotateZ()`        | Rotate around Z-axis            |
| `perspective`      | Creates 3D depth                |
| `transform-origin` | Sets transformation pivot point |
| `transition`       | Makes property changes smooth   |

### Mental Model

```text
TRANSFORM
│
├── 2D
│   ├── translate → move
│   ├── scale     → resize
│   ├── rotate    → turn
│   └── skew      → slant
│
└── 3D
    ├── X-axis
    ├── Y-axis
    ├── Z-axis
    └── perspective → depth

TRANSITION
│
├── property
├── duration
├── timing-function
└── delay
```

**Most important distinction:** `transform` changes the element's visual state; `transition` controls the smoothness of that change.
