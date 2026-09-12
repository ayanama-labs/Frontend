Boss, here are the **quick-revision notes** for CSS Positioning.

# Positioning Deep Dive

## 1. `position: absolute`

Removes the element from **normal document flow** and positions it relative to its **nearest positioned ancestor**.

```css
.child {
  position: absolute;
  top: 10px;
  right: 20px;
}
```

Usually the parent is:

```css
.parent {
  position: relative;
}
```

```text
position: relative → establishes reference
position: absolute → positioned relative to it
```

If no positioned ancestor exists, it is positioned relative to the **initial containing block** (roughly the page).

---

## 2. `position: fixed`

Removes the element from normal flow and positions it relative to the **viewport**.

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
}
```

It **stays in the same viewport position while scrolling**.

Common uses:

- Fixed navigation
- Floating buttons
- Chat widgets

---

## 3. `position: sticky`

Acts like `relative` until a specified offset is reached, then behaves like a **stuck/fixed element within its scrolling container**.

```css
.header {
  position: sticky;
  top: 0;
}
```

Typical behavior:

```text
Normal scrolling
      ↓
Element reaches top: 0
      ↓
Element sticks
      ↓
Continues with its container
```

Common use:

- Sticky headers
- Section headings
- Table headers

**Important:** `top`, `bottom`, `left`, or `right` is generally needed to define the sticking threshold.

---

# 4. `z-index`

Controls the **stacking order** of positioned/stacked elements.

```css
.box1 {
  position: absolute;
  z-index: 1;
}

.box2 {
  position: absolute;
  z-index: 2;
}
```

`box2` appears **above** `box1`.

```text
Higher z-index
      ↑
      │
    10  ← above
     5
     1  ← below
      │
      ↓
Lower z-index
```

Negative values are also possible:

```css
z-index: -1;
```

---

# 5. Stacking Context

A **stacking context** is an independent layer system in which `z-index` values are compared.

A child cannot escape its parent's stacking context just by having a huge `z-index`.

```text
Parent A: z-index: 1
 └── Child: z-index: 9999

Parent B: z-index: 2
 └── Child: z-index: 1
```

The child inside **Parent B can still appear above the child inside Parent A**, because the parent stacking contexts are compared first.

### Common stacking-context creators

Some properties that can create a stacking context include:

```css
position: relative;
z-index: 1;

position: absolute;
z-index: 1;

position: fixed;

position: sticky;

opacity: 0.9;

transform: translate(...);
```

There are additional ways to create stacking contexts, so don't memorize this as an exhaustive list.

---

# Quick Revision

```text
absolute
→ removed from normal flow
→ relative to nearest positioned ancestor

fixed
→ removed from normal flow
→ relative to viewport
→ stays while scrolling

sticky
→ normal flow initially
→ sticks after reaching offset
→ constrained by scrolling container

z-index
→ controls stacking order

stacking context
→ independent stacking layer
→ z-index is compared within/among these contexts
```

### Most important distinction

```text
absolute → "position relative to my ancestor"
fixed    → "position relative to the viewport"
sticky   → "scroll normally, then stick"
```
