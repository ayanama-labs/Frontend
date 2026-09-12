# Advanced Box Model

### 1. Margin Collapsing

Vertical margins of adjacent block elements can **collapse into one**.

```css
.box1 {
  margin-bottom: 20px;
}
.box2 {
  margin-top: 30px;
}
```

**Gap = `30px`**, not `50px` (larger margin wins).

> Mainly applies to **vertical margins**.

---

### 2. Negative Margins

Margins can be negative and move an element **toward/over** other elements.

```css
.box {
  margin-top: -20px;
}
```

---

### 3. Min/Max Width & Height

Restrict an element's size:

```css
.box {
  width: 100%;
  min-width: 300px;
  max-width: 800px;

  height: 300px;
  min-height: 200px;
  max-height: 500px;
}
```

- `min-width` → smallest allowed width
- `max-width` → largest allowed width
- `min-height` → smallest allowed height
- `max-height` → largest allowed height

Common responsive pattern:

```css
.container {
  width: 100%;
  max-width: 1200px;
}
```

---

### 4. `overflow`

Controls content that **exceeds the element's box**.

```css
.box {
  overflow: auto;
}
```

| Value     | Behavior                    |
| --------- | --------------------------- |
| `visible` | Content overflows (default) |
| `hidden`  | Clips overflowing content   |
| `scroll`  | Always provides scrolling   |
| `auto`    | Scrollbars when needed      |

For individual directions:

```css
overflow-x: auto; /* horizontal */
overflow-y: auto; /* vertical */
```

### Remember

```text
Margin collapsing → vertical margins combine
Negative margin   → moves element using negative space
min/max           → size limits
overflow          → controls excess content
```
