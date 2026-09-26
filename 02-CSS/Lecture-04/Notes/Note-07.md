# Browser Compatibility

Browser compatibility means making sure your website works correctly across different:

- Browsers
- Browser versions
- Operating systems
- Devices

```text
Chrome
Firefox
Safari
Edge
        ↓
   Same website
        ↓
Consistent experience
```

---

# 1. Progressive Enhancement

**Progressive enhancement** means:

> Build a basic working experience first, then add advanced features for browsers that support them.

### Example

Basic CSS:

```css
.card {
  background: white;
}
```

Enhanced version:

```css
@supports (backdrop-filter: blur(10px)) {
  .card {
    backdrop-filter: blur(10px);
  }
}
```

Browsers that support `backdrop-filter` get the enhanced effect.

Browsers that don't support it still get:

```text
Basic card
   ↓
Works
```

### Mental model

```text
Basic functionality
       ↓
Browser supports feature?
       ↓
Yes → Add enhancement
No  → Keep basic version
```

---

# 2. Feature Detection

Feature detection means checking whether the browser supports a particular feature **before using it**.

## CSS: `@supports`

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

You can also use:

```css
@supports not (display: grid) {
  .container {
    display: block;
  }
}
```

---

## JavaScript: `CSS.supports()`

```js
if (CSS.supports("display", "grid")) {
  console.log("Grid supported");
}
```

This is better than checking the browser name.

### Avoid browser detection like:

```js
if (browser === "Chrome") {
  // ...
}
```

Prefer:

```text
Feature detection
       ↓
"Can this browser do X?"
```

rather than:

```text
Browser detection
       ↓
"What browser is this?"
```

---

# 3. Polyfills

A **polyfill** is JavaScript code that provides a missing feature in older browsers.

Conceptually:

```text
Browser
   ↓
Feature missing?
   ↓
Polyfill provides implementation
   ↓
Application can use the feature
```

Example concept:

```js
if (!someFeature) {
  // Load/use a polyfill
}
```

### Important

Polyfills are mainly useful for **JavaScript/platform APIs**.

Not every CSS feature can be polyfilled effectively.

---

# 4. Fallbacks

A fallback provides an alternative when the preferred feature isn't supported.

### CSS fallback

```css
.box {
  display: block;
  display: grid;
}
```

Older browser:

```text
display: block
```

Modern browser:

```text
display: grid
```

The browser ignores declarations it doesn't understand.

---

## Fallback for Custom Properties

```css
color: var(--primary-color, blue);
```

If `--primary-color` doesn't exist:

```text
blue
```

is used.

---

## Image Fallback

```html
<picture>
  <source srcset="modern.webp" type="image/webp" />
  <img src="image.jpg" alt="Example" />
</picture>
```

If WebP isn't supported, the browser can use the JPEG fallback.

---

# 5. Polyfill vs Fallback

|         | Polyfill                        | Fallback                   |
| ------- | ------------------------------- | -------------------------- |
| Purpose | Provides missing functionality  | Provides alternative       |
| Usually | JavaScript                      | CSS/HTML/JS                |
| Result  | Attempts to provide the feature | Uses a simpler alternative |
| Example | Missing JS API                  | `block` instead of `grid`  |

Think:

```text
Polyfill  → "I'll provide the missing feature."

Fallback  → "I'll use something else."
```

---

# 6. Cross-Browser Testing

You should test important websites across multiple browsers.

Common targets:

```text
Chrome
Firefox
Safari
Edge
```

Also consider:

```text
Desktop
Mobile
Tablet
```

### Test important areas

- Layout
- Responsive behavior
- Forms
- JavaScript functionality
- Animations
- Fonts
- Images
- Accessibility
- Performance

---

# 7. Don't Assume All Browsers Behave Identically

Even when browsers support the same CSS feature, there can sometimes be differences in:

- Rendering
- Default styles
- Font rendering
- Form controls
- JavaScript APIs
- CSS implementation details

That's why testing matters.

---

# 8. Practical Compatibility Workflow

A good workflow:

```text
1. Build using modern standards
          ↓
2. Provide basic functionality
          ↓
3. Detect feature support
          ↓
4. Add enhancements
          ↓
5. Add fallbacks where necessary
          ↓
6. Test important browsers/devices
```

---

# Quick Revision

| Concept                     | Meaning                                  |
| --------------------------- | ---------------------------------------- |
| **Progressive enhancement** | Start basic → enhance when supported     |
| **Feature detection**       | Check whether a feature is supported     |
| `@supports`                 | CSS feature detection                    |
| `CSS.supports()`            | JavaScript CSS feature detection         |
| **Polyfill**                | Adds missing functionality               |
| **Fallback**                | Alternative when feature isn't available |
| **Cross-browser testing**   | Test across browsers/devices             |

### Mental Model

```text
Browser Compatibility
│
├── Progressive Enhancement
│   └── Basic → Enhanced
│
├── Feature Detection
│   └── "Is this feature supported?"
│
├── Polyfills
│   └── Provide missing functionality
│
├── Fallbacks
│   └── Use an alternative
│
└── Cross-Browser Testing
    └── Verify behavior across environments
```

**Core principle:** Don't build around a specific browser. **Build around capabilities, detect support, provide sensible fallbacks, and test the environments that matter to your users.**
