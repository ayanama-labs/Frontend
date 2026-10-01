# Advanced Animation Techniques

Advanced CSS animation involves controlling animations precisely, making them smooth, and minimizing their impact on performance.

---

## 1. WAAPI — Web Animations API

**WAAPI** is a JavaScript API for creating and controlling animations directly in the browser.

It provides more control than traditional CSS animations.

### Basic example

```js
const box = document.querySelector(".box");

box.animate(
  [{ transform: "translateX(0)" }, { transform: "translateX(300px)" }],
  {
    duration: 1000,
    iterations: 1,
  },
);
```

### Important animation controls

WAAPI gives you an `Animation` object that can be controlled:

```js
const animation = box.animate(...);

animation.play();
animation.pause();
animation.reverse();
animation.cancel();
```

You can also control:

```js
animation.currentTime = 500;
animation.playbackRate = 2;
```

### CSS vs WAAPI

**CSS animation:**

```css
.box {
  animation: move 1s ease;
}
```

Good for simple, declarative animations.

**WAAPI:**

```js
element.animate(keyframes, options);
```

Useful when animation needs to be controlled dynamically with JavaScript.

### Key idea

> **WAAPI = JavaScript API for creating and controlling browser animations.**

---

# 2. Complex Timing Functions

A **timing function** controls the speed of an animation throughout its duration.

Instead of moving at a constant speed:

```text
──────→
```

you can make an animation:

```text
Slow → Fast → Slow
```

### Common timing functions

```css
animation-timing-function: linear;
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
```

### `cubic-bezier()`

Allows you to create custom timing curves.

```css
.box {
  animation: move 1s cubic-bezier(0.4, 0, 0.2, 1);
}
```

A cubic-bezier function has four values:

```text
cubic-bezier(x1, y1, x2, y2)
```

### `steps()`

Creates discrete jumps instead of smooth movement.

```css
animation-timing-function: steps(5);
```

Useful for:

- Sprite animations
- Typewriter effects
- Frame-by-frame effects

### Key idea

> **Timing functions control how an animation's speed changes over time.**

---

# 3. Animation Performance

Animations can cause significant browser work if they trigger **layout or paint** repeatedly.

The browser's rendering process can roughly involve:

```text
JavaScript
   ↓
Style calculation
   ↓
Layout
   ↓
Paint
   ↓
Composite
```

### Generally efficient properties

Prefer animating:

```css
transform
opacity
```

Example:

```css
.box {
  transition:
    transform 300ms,
    opacity 300ms;
}
```

### Potentially expensive properties

Animating properties such as:

```css
width
height
top
left
margin
```

can trigger layout calculations.

For example:

```css
.box {
  transition: left 300ms;
}
```

can be less efficient than:

```css
.box {
  transition: transform 300ms;
}
```

### Avoid

- Animating huge numbers of elements unnecessarily
- Very complex effects on large areas
- Excessive JavaScript-driven animations
- Animating layout-heavy properties when alternatives exist

### Use DevTools

The Performance panel can help identify:

- Long frames
- Layout
- Paint
- Style recalculation
- Animation bottlenecks

### Key idea

> **For smooth animations, minimize layout and paint work—prefer `transform` and `opacity`.**

---

# 4. Hardware Acceleration

**Hardware acceleration** means using the GPU to perform certain rendering/compositing tasks instead of relying entirely on the CPU.

Modern browsers automatically optimize many animations, especially those involving:

```css
transform
opacity
```

### Example

```css
.box {
  transform: translateX(200px);
}
```

A transform can often be handled efficiently by the browser's compositor.

### `will-change`

You can tell the browser that an element is likely to change:

```css
.box {
  will-change: transform;
}
```

This can help in specific performance-sensitive cases.

### But don't overuse it

Avoid:

```css
* {
  will-change: transform;
}
```

`will-change` can consume additional resources if applied unnecessarily.

Use it only when you have a **real performance reason**.

### Important clarification

> `transform` does **not** mean "always GPU accelerated."

Modern browsers decide how to optimize rendering. The important principle is to use properties that can often be handled efficiently by the compositor.

### Key idea

> **Hardware acceleration = letting the browser use GPU/compositor resources to render certain visual operations efficiently.**

---

# Quick Revision

| Topic                     | Purpose                                                  |
| ------------------------- | -------------------------------------------------------- |
| **WAAPI**                 | Control animations through JavaScript                    |
| **Timing Functions**      | Control animation speed/acceleration                     |
| **Animation Performance** | Reduce expensive rendering work                          |
| **Hardware Acceleration** | Use efficient GPU/compositor rendering where appropriate |

### Remember

```text
WAAPI
→ Control animations with JS

Timing Functions
→ Control animation speed

Performance
→ Avoid unnecessary layout/paint

Hardware Acceleration
→ Let browser/compositor render efficiently
```

**One-line takeaway:**
**Good animation isn't just about making things move—it is about controlling the motion precisely while keeping rendering work low.**
