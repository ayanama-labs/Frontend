# Responsive Design Fundamentals

Responsive design means making a website **adapt to different screen sizes and devices**.

---

## 1. Media Queries

Apply CSS only when certain conditions are true.

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

Meaning:

> If the viewport is **768px or narrower**, apply these styles.

Common conditions:

```css
@media (max-width: 768px) {
}
@media (min-width: 768px) {
}
```

### Multiple conditions

```css
@media (min-width: 600px) and (max-width: 900px) {
  /* styles */
}
```

---

# 2. Mobile-First Approach

Design for **small screens first**, then add styles for larger screens.

```css
.container {
  display: flex;
  flex-direction: column;
}

/* Larger screens */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

Think:

```text
Mobile styles
     ↓
@media min-width
     ↓
Tablet/Desktop enhancements
```

### Why?

- Simpler base CSS
- Better performance and maintainability
- Naturally prioritizes small-screen usability

---

# 3. Fluid Layouts

A fluid layout uses **relative/flexible units** instead of fixed dimensions.

```css
.container {
  width: 100%;
  max-width: 1200px;
}
```

Useful units:

```text
%   → percentage of containing space
vw  → viewport width
vh  → viewport height
rem → relative to root font size
fr  → fraction of available Grid space
```

Avoid unnecessarily rigid layouts like:

```css
width: 1200px;
```

Prefer:

```css
width: 100%;
max-width: 1200px;
```

---

# 4. Responsive Images

### Basic responsive image

```css
img {
  max-width: 100%;
  height: auto;
}
```

Meaning:

```text
max-width: 100% → never exceed container width
height: auto    → preserve aspect ratio
```

This prevents an image from overflowing its container.

### HTML

```html
<img src="photo.jpg" alt="A mountain landscape" />
```

---

## `srcset` — Different image sizes

For serving different image resolutions:

```html
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 800px"
  alt="A mountain landscape"
/>
```

The browser can choose an appropriate image resource based on the device/display and `sizes` information.

---

# Quick Revision

```text
Responsive Design
→ Layout adapts to screen size

Media Query
→ CSS based on conditions

@media (max-width: 768px)
→ styles for ≤ 768px

Mobile-first
→ Base CSS = mobile
→ min-width media queries = larger screens

Fluid Layout
→ Use flexible/relative sizing

Responsive Image
→ max-width: 100%
→ height: auto

srcset
→ provides multiple image resources
→ browser chooses an appropriate one
```

### Golden rule

> **Mobile-first:** Start small → progressively enhance for larger screens.
