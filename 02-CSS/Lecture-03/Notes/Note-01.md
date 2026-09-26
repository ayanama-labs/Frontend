# CSS Grid Advanced

## 1. Named Grid Lines

Grid lines can be given custom names instead of using only numbers.

```css
.container {
  display: grid;
  grid-template-columns:
    [sidebar-start] 200px
    [sidebar-end content-start] 1fr
    [content-end];
}
```

Use the names:

```css
.main {
  grid-column: content-start / content-end;
}
```

**Why?** Makes complex layouts more readable and maintainable.

---

## 2. Grid Template Areas

Define the layout using **named areas**.

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;

  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

Assign elements:

```css
header {
  grid-area: header;
}
aside {
  grid-area: sidebar;
}
main {
  grid-area: main;
}
footer {
  grid-area: footer;
}
```

Visual:

```text
┌─────────┬─────────┐
│ header  │ header  │
├─────────┼─────────┤
│ sidebar │  main   │
├─────────┴─────────┤
│ footer            │
└───────────────────┘
```

### Empty cell

Use `.`:

```css
grid-template-areas:
  "header header"
  "sidebar main"
  ". main"
  "footer footer";
```

**Key point:** Every row must contain the same number of cells.

---

# 3. Explicit vs Implicit Grid

### Explicit Grid

Tracks you **explicitly define**.

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
}
```

You explicitly created:

```text
3 columns × 2 rows
```

### Implicit Grid

Tracks automatically created by CSS when more space is needed.

```css
.container {
  grid-template-columns: repeat(2, 1fr);
}
```

If there are 6 items:

```text
1  2
3  4
5  6
```

The extra rows are **implicit rows**.

Control them with:

```css
grid-auto-rows: 100px;
grid-auto-columns: 200px;
```

---

# 4. `grid-auto-flow`

Controls how items are automatically placed.

### Row — default

```css
grid-auto-flow: row;
```

```text
1  2  3
4  5  6
```

### Column

```css
grid-auto-flow: column;
```

```text
1  3  5
2  4  6
```

### Dense

```css
grid-auto-flow: dense;
```

Attempts to fill available gaps with later items.

---

# 5. Subgrid

`subgrid` allows a child grid to **use the parent's grid tracks**.

Normal nested grid:

```text
Parent Grid
   ↓
Child creates its own tracks
```

Subgrid:

```text
Parent Grid
   ↓
Child uses parent's tracks
```

Example:

```css
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
```

For rows:

```css
.child {
  grid-template-rows: subgrid;
}
```

### Why use it?

Useful when multiple nested components need their content to **align with each other**.

For example:

```text
┌─────────────┬─────────────┐
│ Title       │ Title       │
├─────────────┼─────────────┤
│ Description │ Description │
├─────────────┼─────────────┤
│ Button      │ Button      │
└─────────────┴─────────────┘
```

---

# Quick Revision

| Concept             | Meaning                           |
| ------------------- | --------------------------------- |
| **Named lines**     | Give grid lines custom names      |
| **Grid areas**      | Define layout using named regions |
| **Explicit grid**   | Grid tracks you define            |
| **Implicit grid**   | Tracks CSS creates automatically  |
| `grid-auto-rows`    | Size implicit rows                |
| `grid-auto-columns` | Size implicit columns             |
| `grid-auto-flow`    | Control automatic placement       |
| **Subgrid**         | Child uses parent's grid tracks   |

### Remember

```text
Named lines     → Name the lines
Grid areas      → Name the regions
Explicit grid   → I define it
Implicit grid   → CSS creates it
Subgrid         → Child follows parent's tracks
```
