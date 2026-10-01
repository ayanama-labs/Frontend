# Cutting-edge CSS

Modern CSS features that give developers **more control over rendering, feature detection, scrolling, and page transitions**.

---

## 1. CSS Houdini APIs

**CSS Houdini** is a set of browser APIs that allows JavaScript to interact with parts of the browser's CSS rendering engine.

Normally:

```text
JavaScript → DOM → CSS → Browser rendering
```

Houdini gives JavaScript more direct access to the CSS rendering process.

### Important Houdini APIs

- **CSS Properties & Values API** — define custom CSS properties with types.
- **CSS Painting API** — create custom images/graphics using JavaScript.
- **CSS Typed OM** — manipulate CSS values as typed objects instead of strings.
- **Worklets** — run small pieces of JavaScript related to rendering.

### Example: Custom property

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}
```

Now the browser knows that `--progress` should contain a percentage.

### Why useful?

- Create advanced CSS effects
- Build custom rendering behavior
- Improve interaction between JS and CSS
- Create reusable custom CSS functionality

### Key idea

> **CSS Houdini = APIs that expose parts of the CSS engine to JavaScript.**

---

# 2. `@supports` Feature Queries

`@supports` checks whether the browser supports a particular CSS feature.

### Syntax

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

If the browser supports CSS Grid, the styles inside are applied.

### `not`

```css
@supports not (display: grid) {
  .container {
    display: flex;
  }
}
```

### Multiple conditions

```css
@supports (display: grid) and (gap: 1rem) {
  .container {
    display: grid;
    gap: 1rem;
  }
}
```

### Why useful?

It allows **progressive enhancement**:

```text
Basic CSS
   ↓
Browser supports new feature?
   ↓
Yes → Use modern CSS
No  → Keep fallback
```

### Key idea

> **`@supports` = detect CSS feature support and provide appropriate styles.**

---

# 3. CSS Scroll Snap

**CSS Scroll Snap** lets you control where scrolling stops, creating a snapping effect.

Commonly used for:

- Carousels
- Image galleries
- Horizontal scrolling sections
- Mobile interfaces

### Container

```css
.container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
```

### Children

```css
.item {
  scroll-snap-align: start;
}
```

When the user scrolls, the browser automatically snaps an item into position.

### Example

```css
.container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.card {
  min-width: 300px;
  scroll-snap-align: start;
}
```

### Important properties

**`scroll-snap-type`**

Defines the scrolling axis and behavior.

```css
scroll-snap-type: x mandatory;
```

**`scroll-snap-align`**

Defines where an element should snap.

```css
scroll-snap-align: center;
```

Possible values include:

```text
start
center
end
```

### Key idea

> **Scroll Snap = make scrolling naturally stop at predefined positions.**

---

# 4. View Transitions API

The **View Transitions API** allows smooth animated transitions when the visual state of a page changes.

For example:

```text
Page A
   ↓
Transition
   ↓
Page B
```

Instead of the page changing instantly, elements can visually transition between states.

### Basic usage

```js
document.startViewTransition(() => {
  updatePage();
});
```

The browser captures the old and new states and creates a transition between them.

### CSS customization

```css
::view-transition-old(root) {
  animation: fade-out 0.3s;
}

::view-transition-new(root) {
  animation: fade-in 0.3s;
}
```

### Why useful?

Useful for:

- SPA page transitions
- Navigation animations
- Modal transitions
- Changing UI states
- Creating smoother user experiences

### Important distinction

The **View Transitions API is primarily a browser API**, while CSS is used to customize the transition animations.

### Key idea

> **View Transitions API = smoothly animate the visual change between two UI states.**

---

# Quick Revision

| Feature                  | Purpose                                   |
| ------------------------ | ----------------------------------------- |
| **CSS Houdini**          | Extend/control CSS rendering through APIs |
| **`@supports`**          | Detect whether a CSS feature is supported |
| **Scroll Snap**          | Make scrolling snap to defined positions  |
| **View Transitions API** | Animate changes between UI states         |

### Easy way to remember

```text
Houdini
→ Extend CSS

@supports
→ Detect CSS support

Scroll Snap
→ Control scrolling

View Transitions
→ Animate state changes
```
