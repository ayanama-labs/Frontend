# Performance Optimization

CSS performance optimization means **reducing the amount of CSS the browser needs to download, parse, calculate, and render**.

---

## 1. Critical CSS

**Critical CSS** = CSS required to render the **visible part of a webpage immediately** (above the fold).

### Problem

If the browser waits for a large CSS file before rendering anything, the initial page can appear slower.

### Solution

Load the CSS needed for the initial viewport first, while loading the remaining CSS afterward.

```html
<style>
  /* Critical CSS */
  header {
    display: flex;
    padding: 20px;
  }
</style>

<link rel="stylesheet" href="styles.css" />
```

### Example

Suppose a page has:

```text
Header
Hero section        ← visible immediately
-------------------
Products
Footer              ← below the fold
```

Only the styles for the **header + hero** are critical initially.

### Benefits

- Faster first render
- Improves perceived performance
- Can improve **FCP** and **LCP**

### Key idea

> **Critical CSS = CSS needed to render the initial viewport quickly.**

---

# 2. CSS Loading Strategies

CSS loading strategy determines **when and how CSS is downloaded and applied**.

### Normal CSS

```html
<link rel="stylesheet" href="styles.css" />
```

The browser downloads the stylesheet and uses it during rendering.

### `preload`

Can tell the browser to fetch an important stylesheet early:

```html
<link rel="preload" href="styles.css" as="style" />
```

However, `preload` alone does **not** apply the stylesheet.

### Media-specific CSS

Load a stylesheet only when its media condition matches:

```html
<link rel="stylesheet" href="print.css" media="print" />
```

Useful for styles that aren't needed for normal screen rendering.

### Good practices

- Keep CSS files reasonably small.
- Split CSS when appropriate.
- Avoid loading CSS that isn't needed.
- Minify CSS in production.
- Cache static CSS files.
- Use critical CSS for important above-the-fold styles.

### Key idea

> **Load important CSS early and unnecessary CSS only when needed.**

---

# 3. Unused CSS Elimination

**Unused CSS** = CSS rules that are downloaded but never used by the page.

Example:

```css
.button { ... }
.card { ... }
.modal { ... }
.sidebar { ... }
.old-component { ... }
```

If `.old-component` doesn't exist anywhere, its CSS is unnecessary.

### Why remove it?

Unused CSS:

```text
More CSS
   ↓
Larger file
   ↓
More downloading
   ↓
More parsing
   ↓
More browser work
```

### How to eliminate it?

#### 1. Remove manually

Delete obsolete styles.

#### 2. Use build tools

Tools/frameworks can detect unused styles.

Examples:

- PurgeCSS
- Tailwind CSS's production optimization
- PostCSS plugins

#### 3. Code splitting

Load styles only for the components/pages that need them.

### Example

Instead of:

```css
/* Everything in one huge file */
```

Use component/page-specific styles where appropriate.

### Key idea

> **Unused CSS = CSS the browser downloads but doesn't need. Remove it to reduce CSS size.**

---

# 4. CSS Containment

**CSS containment** allows you to tell the browser that an element's layout, painting, or size can be treated as **independent from the rest of the page**.

Main property:

```css
contain: layout;
```

### Why?

Normally, changing one element can potentially require the browser to reconsider parts of the surrounding page.

Containment limits that work.

### Types

```css
contain: layout;
contain: paint;
contain: size;
contain: style;
```

You can combine them:

```css
contain: layout paint;
```

Or use:

```css
contain: content;
```

which is roughly:

```css
contain: layout paint style;
```

### Example

```css
.card {
  contain: content;
}
```

This tells the browser that the card's internal rendering/layout can be isolated from surrounding content.

### `contain: size`

The element's size is calculated independently.

```css
.box {
  contain: size;
}
```

Be careful: the element may need an explicit size because its contents aren't used to determine its size normally.

### `content-visibility`

A related performance feature:

```css
section {
  content-visibility: auto;
}
```

The browser can skip rendering content that is currently outside the viewport.

This can be particularly useful for **large pages**.

### Key idea

> **CSS containment = isolate an element's rendering work so changes inside it don't unnecessarily affect the rest of the page.**

---

# Quick Revision Table

| Topic                      | Meaning                         | Main Benefit                       |
| -------------------------- | ------------------------------- | ---------------------------------- |
| **Critical CSS**           | CSS needed for initial viewport | Faster initial rendering           |
| **CSS Loading Strategies** | Controlling when/how CSS loads  | Avoid unnecessary blocking/loading |
| **Unused CSS Elimination** | Removing CSS that isn't used    | Smaller CSS files                  |
| **CSS Containment**        | Isolating rendering/layout work | Less browser recalculation         |

### Remember it as:

```text
Critical CSS
→ Load what matters first

CSS Loading
→ Load CSS intelligently

Unused CSS
→ Remove what isn't needed

CSS Containment
→ Isolate rendering work
```

**One-line takeaway:** CSS performance optimization is mainly about **shipping less CSS, loading important CSS sooner, and reducing the amount of work the browser has to perform.**
