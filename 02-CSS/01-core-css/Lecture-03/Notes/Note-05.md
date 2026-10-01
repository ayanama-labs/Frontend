# CSS Animations

CSS animations allow an element to change between different styles **automatically over time**.

Unlike transitions, animations don't require a trigger such as `:hover`.

---

# 1. Keyframe Animations

`@keyframes` defines **what happens during an animation**.

```css
@keyframes move {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(200px);
  }
}
```

Apply it:

```css
.box {
  animation: move 2s;
}
```

### Using percentages

You can define multiple stages:

```css
@keyframes move {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(200px);
  }

  100% {
    transform: translateX(0);
  }
}
```

This creates:

```text
0%        50%        100%
│----------│-----------│
start      move        back
```

---

# 2. Animation Properties

## `animation-name`

Specifies the keyframe animation.

```css
.box {
  animation-name: move;
}
```

## `animation-duration`

Specifies how long one cycle takes.

```css
animation-duration: 2s;
```

## `animation-iteration-count`

Controls how many times it runs.

```css
animation-iteration-count: 3;
```

Infinite:

```css
animation-iteration-count: infinite;
```

## `animation-delay`

Wait before starting.

```css
animation-delay: 1s;
```

## `animation-direction`

Controls the direction.

```css
animation-direction: normal;
```

Common values:

```text
normal
reverse
alternate
alternate-reverse
```

### `alternate`

```css
animation-direction: alternate;
```

Animation:

```text
→ → → → →
← ← ← ← ←
→ → → → →
```

---

# 3. `animation-fill-mode`

Controls the styles **before and/or after** the animation.

```css
animation-fill-mode: forwards;
```

### Important values

`none`
→ Default.

`forwards`
→ Keeps the final keyframe after animation ends.

`backwards`
→ Applies the first keyframe during the delay.

`both`
→ Applies both.

---

# 4. `animation-play-state`

Controls whether an animation is running or paused.

```css
animation-play-state: paused;
```

Resume:

```css
animation-play-state: running;
```

Example:

```css
.box:hover {
  animation-play-state: paused;
}
```

---

# 5. Animation Timing Functions

The timing function controls **how the animation progresses through time**.

```css
animation-timing-function: ease;
```

### Common values

```text
linear
ease
ease-in
ease-out
ease-in-out
```

### `linear`

Constant speed:

```text
──────────────
```

### `ease-in`

Starts slowly → becomes faster.

```text
slow → → → fast
```

### `ease-out`

Starts fast → becomes slower.

```text
fast → → → slow
```

### `ease-in-out`

Slow → fast → slow.

```text
slow → fast → slow
```

---

# 6. `steps()`

Creates a **stepped animation** rather than a smooth one.

```css
animation-timing-function: steps(5);
```

Useful for:

- Sprite animations
- Typewriter effects
- Frame-by-frame animations

Example:

```css
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.text {
  animation: typing 3s steps(20);
}
```

---

# 7. Complex Animation Sequences

You can create multiple stages using percentages.

```css
@keyframes complex {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(200px);
  }

  50% {
    transform: translate(200px, 200px);
  }

  75% {
    transform: translate(0, 200px);
  }

  100% {
    transform: translate(0, 0);
  }
}
```

This produces:

```text
        25% ───────→
         │           │
         │           │
       0%            50%
         ↑           │
         └───────────75%
```

The animation can change multiple properties at different stages:

```css
@keyframes complex {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

---

# 8. Animation Shorthand

Instead of writing:

```css
.box {
  animation-name: move;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

You can write:

```css
.box {
  animation: move 2s ease 0s infinite alternate;
}
```

General order:

```text
animation:
name
duration
timing-function
delay
iteration-count
direction
fill-mode
play-state;
```

---

# 9. Multiple Animations

An element can have multiple animations.

```css
.box {
  animation:
    move 2s ease infinite,
    fade 1s linear infinite;
}
```

Each animation is separated by a comma.

---

# 10. Animation vs Transition

| Transition                             | Animation             |
| -------------------------------------- | --------------------- |
| Usually needs a state change           | Can run automatically |
| Commonly uses `:hover`, `:focus`, etc. | Uses `@keyframes`     |
| Usually from one state → another       | Can have many stages  |
| Simpler                                | More powerful         |
| No keyframes                           | Uses keyframes        |

### Mental model

```text
Transition
    ↓
State A ─────────→ State B

Animation
    ↓
0% → 25% → 50% → 75% → 100%
```

---

# Quick Revision

```text
CSS Animations
│
├── @keyframes
│   └── Defines animation stages
│
├── animation-name
│   └── Which animation?
│
├── animation-duration
│   └── How long?
│
├── animation-iteration-count
│   └── How many times?
│
├── animation-delay
│   └── When to start?
│
├── animation-direction
│   └── Which direction?
│
├── animation-fill-mode
│   └── What happens before/after?
│
├── animation-play-state
│   └── Running or paused?
│
└── timing-function
    └── How does speed change?
```

**Core idea:** `@keyframes` defines **what happens**, while the `animation-*` properties define **how, when, and how often it happens**.
