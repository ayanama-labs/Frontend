# CSS and Accessibility

CSS accessibility means designing styles so that people with **visual, motor, cognitive, or other accessibility needs** can use and understand your interface.

The goal is not just “make it look good,” but **make it usable for different ways of interacting with a page.**

---

## 1. Focus Management

**Focus** indicates which interactive element currently receives keyboard input.

For example, when a user presses `Tab`, focus moves between:

- Links
- Buttons
- Inputs
- Selects
- Other interactive controls

### Basic focus styling

```css
button:focus {
  outline: 3px solid blue;
  outline-offset: 3px;
}
```

A better modern approach is:

```css
button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}
```

### `:focus` vs `:focus-visible`

| Selector         | Meaning                                                                              |
| ---------------- | ------------------------------------------------------------------------------------ |
| `:focus`         | Element currently has focus                                                          |
| `:focus-visible` | Element has focus and the browser determines that a visible indicator is appropriate |

`focus-visible` is particularly useful because mouse users don't necessarily need the same focus indication that keyboard users do.

### ❌ Don't do this

```css
button {
  outline: none;
}
```

Removing the focus indicator without providing an alternative can make keyboard navigation extremely difficult.

### Better

```css
button:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}
```

### Focus order

The natural HTML order should normally determine focus order.

```html
<header>...</header>

<main>
  <button>First</button>
  <button>Second</button>
  <button>Third</button>
</main>
```

Avoid using positive `tabindex` values:

```html
<button tabindex="5">...</button> <button tabindex="1">...</button>
```

This can create confusing keyboard navigation.

Prefer:

```html
<button>First</button> <button>Second</button>
```

### Important

CSS can **style focus**, but focus management itself is primarily handled through **HTML and JavaScript**.

For example, when opening a modal, JavaScript may need to move focus into the modal and eventually return it to the triggering button.

---

# 2. High Contrast Mode

Some users increase contrast because normal colors are difficult to see.

There are two related concepts:

- User/browser/OS high-contrast settings
- Designing your own interface with sufficient contrast

Modern CSS can respond to forced-color environments using:

```css
@media (forced-colors: active) {
  button {
    border: 2px solid ButtonText;
    background: ButtonFace;
    color: ButtonText;
  }
}
```

Here:

- `ButtonText` → system-defined button text color
- `ButtonFace` → system-defined button background

This allows the operating system/user's forced-color scheme to remain effective.

### Don't rely entirely on background images

Bad:

```css
.success {
  background: green;
}
```

If the meaning of the element is communicated **only through color**, some users may not understand it.

Better:

```html
<p class="success">✓ Payment successful</p>
```

Now the checkmark and text communicate the meaning.

### Contrast

Text should have sufficient contrast against its background.

For example:

```css
body {
  background: white;
  color: #222;
}
```

is generally much easier to read than:

```css
body {
  background: #fff;
  color: #ccc;
}
```

Contrast requirements are defined by accessibility guidelines such as WCAG.

---

# 3. Reduced Motion Preferences

Some users experience discomfort, dizziness, or other problems from excessive animation or motion.

CSS provides:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    transition-duration: 0.01ms;
    scroll-behavior: auto;
  }
}
```

A more targeted approach is often better:

```css
.card {
  transition: transform 300ms ease;
}

.card:hover {
  transform: translateY(-10px);
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }

  .card:hover {
    transform: none;
  }
}
```

### Why?

Normal user:

```text
Hover → card smoothly moves upward
```

Reduced-motion user:

```text
Hover → card changes without the movement
```

### Useful properties

Reduced motion may involve:

- `animation`
- `transition`
- `transform`
- smooth scrolling
- parallax effects
- large moving backgrounds

For example:

```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

### Important distinction

`prefers-reduced-motion` does **not** mean:

> "The user doesn't want any visual feedback."

It means:

> "Reduce unnecessary movement."

You should still provide useful state changes and feedback.

---

# 4. Color Accessibility

Color is one of the most important accessibility considerations in CSS.

## Don't communicate information using color alone

❌ Bad:

```html
<p class="error">Invalid email</p>
```

```css
.error {
  color: red;
}
```

The user may only see:

> red = error

Someone with color-vision deficiency may have difficulty identifying it.

### Better

```html
<p class="error">⚠ Invalid email address</p>
```

```css
.error {
  color: #b91c1c;
}
```

Now the meaning comes from:

- icon
- text
- color

rather than color alone.

---

## Contrast Ratio

Contrast measures the difference between foreground and background colors.

For normal text, WCAG commonly uses:

| Content                           | Minimum contrast |
| --------------------------------- | ---------------: |
| Normal text                       |        **4.5:1** |
| Large text                        |          **3:1** |
| UI components / graphical objects |          **3:1** |

For example:

```css
color: #222;
background: #fff;
```

has strong contrast.

Whereas:

```css
color: #aaa;
background: #fff;
```

has relatively weak contrast.

---

# Color Vision Deficiency

Some users perceive colors differently.

Common types include:

- Protanopia
- Deuteranopia
- Tritanopia

Therefore, avoid interfaces such as:

```text
🔴 = Failed
🟢 = Successful
```

with no other indication.

Better:

```text
❌ Failed
✓ Successful
```

And you can still use colors as an additional visual cue.

---

# Combining Accessibility Techniques

A good accessible button might look like:

```html
<button class="submit-button">Submit</button>
```

```css
.submit-button {
  background: #2563eb;
  color: white;
  padding: 0.75rem 1.25rem;
  border: 2px solid transparent;
}

.submit-button:hover {
  background: #1d4ed8;
}

.submit-button:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .submit-button {
    transition: none;
  }
}

@media (forced-colors: active) {
  .submit-button {
    background: ButtonFace;
    color: ButtonText;
    border-color: ButtonText;
  }
}
```

This addresses:

- **Keyboard accessibility** → `:focus-visible`
- **Motion accessibility** → `prefers-reduced-motion`
- **High contrast/forced colors** → `forced-colors`
- **Color accessibility** → strong contrast and non-color focus indicator

---

# Mental Model

Think of accessibility in four questions:

```text
Can I reach it?
      ↓
Focus Management
      ↓
Can I see/read it?
      ↓
Contrast + High Contrast
      ↓
Does movement hurt/disorient me?
      ↓
Reduced Motion
      ↓
Can I understand it without color?
      ↓
Color Accessibility
```

---

# Quick Revision

| Topic               | Main CSS tool             | Purpose                                      |
| ------------------- | ------------------------- | -------------------------------------------- |
| Focus management    | `:focus-visible`          | Make keyboard focus obvious                  |
| High contrast       | `forced-colors`           | Adapt to forced-color environments           |
| Reduced motion      | `prefers-reduced-motion`  | Reduce animations/movement                   |
| Color accessibility | Contrast + non-color cues | Make information understandable and readable |

### One-line memory trick

> **Focus → Can I navigate?**
> **Contrast → Can I see?**
> **Motion → Can I comfortably use it?**
> **Color → Can I understand it without relying on color?**
