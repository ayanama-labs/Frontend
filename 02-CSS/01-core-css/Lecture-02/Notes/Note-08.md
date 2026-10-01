# Advanced Typography

## 1. Web Fonts

Web fonts allow you to use fonts that may **not be installed on the user's computer**.

### `@font-face`

Load your own font file:

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2");
}

body {
  font-family: "MyFont", sans-serif;
}
```

Common font formats:

```text
WOFF2 → preferred for modern web
WOFF  → older/broad browser support
```

---

### Google Fonts

You can load fonts from Google Fonts using `<link>`:

```html
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
</head>
```

Then:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

---

# 2. Font Loading Strategies

The browser needs to **download web fonts** before it can use them.

### `font-display`

Used inside `@font-face`:

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2");
  font-display: swap;
}
```

Common values:

| Value      | Behavior                                        |
| ---------- | ----------------------------------------------- |
| `auto`     | Browser decides                                 |
| `block`    | Briefly hides text while font loads             |
| `swap`     | Shows fallback font, then swaps to web font     |
| `fallback` | Short wait, then fallback if unavailable        |
| `optional` | Font may not load if conditions aren't suitable |

**Common choice:** `swap`

---

# 3. Typography Scale

A typography scale defines **consistent sizes for different levels of text**.

Example:

```css
body {
  font-size: 16px;
}

h3 {
  font-size: 1.25rem;
}

h2 {
  font-size: 1.5rem;
}

h1 {
  font-size: 2rem;
}
```

Example scale:

```text
Body → 16px
H3   → 20px
H2   → 24px
H1   → 32px
```

Using a scale creates **visual hierarchy and consistency**.

### `rem`

`rem` is relative to the **root (`html`) font size**.

If:

```css
html {
  font-size: 16px;
}
```

then:

```text
1rem  = 16px
1.5rem = 24px
2rem   = 32px
```

---

# 4. Text Shadows

Adds a shadow behind text.

```css
h1 {
  text-shadow: 2px 2px 4px gray;
}
```

Syntax:

```text
text-shadow:
    horizontal-offset
    vertical-offset
    blur
    color;
```

Example:

```css
text-shadow: 2px 2px 4px black;
```

---

# 5. Text Effects

### Multiple shadows

```css
h1 {
  text-shadow:
    2px 2px 3px gray,
    4px 4px 6px lightgray;
}
```

### Text outline-like effect

CSS doesn't have a general `text-outline` property, but `-webkit-text-stroke` is commonly used:

```css
h1 {
  -webkit-text-stroke: 1px black;
}
```

### Gradient text

A common technique:

```css
h1 {
  background: linear-gradient(to right, red, blue);
  background-clip: text;
  color: transparent;
}
```

The gradient becomes visible through the text.

---

# Quick Revision

```text
@font-face
→ load custom font files

Google Fonts
→ load fonts from Google Fonts

font-display
→ controls behavior while font loads

swap
→ show fallback → replace with web font

Typography scale
→ consistent hierarchy of font sizes

rem
→ relative to root font size

text-shadow
→ adds shadow to text

text-stroke
→ creates text outline

gradient text
→ background gradient clipped to text
```

### Golden rule

> **Good typography = appropriate font + consistent scale + readable spacing + clear hierarchy.**
