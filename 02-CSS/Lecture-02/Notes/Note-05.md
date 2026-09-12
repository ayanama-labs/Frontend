Boss, here are the **clear, concise quick-revision notes** for CSS Grid.

# CSS Grid Basics

CSS Grid is a **two-dimensional layout system** for arranging elements in **rows and columns**.

---

## 1. Grid Container & Items

Create a grid:

```css
.container {
  display: grid;
}
```

The direct children automatically become **grid items**.

```text
.container
├── item
├── item
└── item
```

### Define columns

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Creates **3 columns**.

### Define rows

```css
.container {
  grid-template-rows: 100px 100px;
}
```

Creates **2 rows**.

### `gap`

```css
.container {
  gap: 20px;
}
```

Adds space between rows and columns.

---

# 2. Grid Lines

Grid lines are the invisible lines that define the boundaries of rows and columns.

```text
    1       2       3       4
    │       │       │       │
    ├───────┼───────┼───────┤ 1
    │       │       │       │
    ├───────┼───────┼───────┤ 2
    │       │       │       │
    └───────┴───────┴───────┘ 3
```

With 3 columns:

```text
4 vertical grid lines
```

With 2 rows:

```text
3 horizontal grid lines
```

---

# 3. Grid Tracks

A **track** is the space between two grid lines.

```text
Line 1     Line 2     Line 3
  │          │          │
  ├──────────┤──────────┤
     Track      Track
```

So:

```text
Column = column track
Row    = row track
```

Example:

```css
grid-template-columns: 1fr 2fr;
```

Creates two column tracks where the second is twice as wide as the first.

---

# 4. `fr` Unit

`fr` = **fraction of available space**.

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

Creates 3 equal columns.

```css
grid-template-columns: 1fr 2fr;
```

```text
1fr : 2fr

┌──────┬────────────┐
│      │            │
│  1fr │     2fr    │
│      │            │
└──────┴────────────┘
```

---

# 5. Placing Grid Items

Use grid line numbers:

```css
.item {
  grid-column: 1 / 3;
}
```

Means:

> Start at column line 1 and end at column line 3.

Therefore it spans **2 columns**.

Similarly:

```css
.item {
  grid-row: 1 / 3;
}
```

spans **2 rows**.

### Shorthand

```css
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

---

# 6. Grid Areas

You can name areas of the layout.

```css
.container {
  display: grid;

  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

Assign items:

```css
.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

This makes complex layouts easier to understand.

---

# 7. Basic Grid Layout

### Three equal columns

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

`repeat(3, 1fr)` means:

```text
1fr 1fr 1fr
```

---

### Sidebar + main content

```css
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
}
```

```text
┌─────────┬──────────────────┐
│ Sidebar │      Main        │
│ 250px   │      1fr         │
└─────────┴──────────────────┘
```

---

# 8. Grid vs Flexbox

| Flexbox                               | Grid                                |
| ------------------------------------- | ----------------------------------- |
| **1-dimensional**                     | **2-dimensional**                   |
| Mainly row **or** column              | Rows **and** columns                |
| Content-driven layouts                | Structure/layout-driven             |
| Navigation, buttons, small components | Page layouts, galleries, dashboards |

### Use Flexbox when:

```text
"I mainly need to arrange things in one direction."
```

Example:

```text
Logo ── Menu ── Button
```

### Use Grid when:

```text
"I need control over both rows and columns."
```

Example:

```text
┌────────┬────────┐
│ Header │ Header │
├────────┼────────┤
│ Side   │ Main   │
├────────┴────────┤
│ Footer          │
└─────────────────┘
```

---

# Quick Revision

```text
Grid
→ 2D layout: rows + columns

display: grid
→ creates grid container

Grid item
→ direct child of grid container

Grid line
→ boundary between tracks

Grid track
→ row or column space between lines

grid-template-columns
→ define columns

grid-template-rows
→ define rows

gap
→ space between tracks

fr
→ fraction of available space

grid-column / grid-row
→ position or span items

grid-template-areas
→ create named layout areas
```

### Golden rule

> **Flexbox → one dimension.**
> **Grid → two dimensions.**
