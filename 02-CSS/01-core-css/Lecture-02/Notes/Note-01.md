# Advanced CSS Selectors

## 1. Descendant Combinator ` `

Selects elements **anywhere inside** another element.

```css
div p {
  color: red;
}
```

```text
div
 └── p       ✓
     └── p   ✓
```

**Meaning:** `p` is a descendant of `div`.

---

## 2. Child Combinator `>`

Selects only **direct children**.

```css
div > p {
  color: red;
}
```

```text
div
 ├── p       ✓
 └── section
      └── p  ✗
```

**Difference:**

```css
div p     /* any descendant */
div > p   /* direct child only */
```

---

## 3. Adjacent Sibling `+`

Selects the **immediately following sibling**.

```css
h2 + p {
  color: red;
}
```

```html
<h2>Title</h2>
<p>✓</p>
<p>✗</p>
```

**Meaning:** the first `p` immediately after `h2`.

---

## 4. General Sibling `~`

Selects **all matching siblings after** an element.

```css
h2 ~ p {
  color: red;
}
```

```html
<h2>Title</h2>
<p>✓</p>
<div>...</div>
<p>✓</p>
<p>✓</p>
```

**Difference:**

```css
h2 + p   /* immediate next sibling */
h2 ~ p   /* all following siblings */
```

---

# 5. Attribute Selectors

Select elements based on their attributes.

```css
input[type="email"] {
}
```

### Common forms

```css
[attr]       /* attribute exists */
[attr="x"]   /* exact value */
[attr^="x"]  /* starts with x */
[attr$="x"]  /* ends with x */
[attr*="x"]  /* contains x */
```

Example:

```css
a[href$=".pdf"] {
}
```

Selects links whose `href` ends with `.pdf`.

---

# 6. Pseudo-classes

Select elements based on their **state or position**.

### `:hover`

Mouse is over the element.

```css
button:hover {
  background: blue;
}
```

### `:focus`

Element currently has focus.

```css
input:focus {
  border: 2px solid blue;
}
```

### `:nth-child()`

Selects an element based on its position.

```css
li:nth-child(2) {
}
```

Selects the **second** child.

```css
li:nth-child(odd) {
} /* 1, 3, 5... */
li:nth-child(even) {
} /* 2, 4, 6... */
```

---

# Quick Revision

```text
div p       → descendant
div > p     → direct child

h2 + p      → immediate next sibling
h2 ~ p      → all following siblings

[attr]      → attribute exists
[attr="x"]  → exact
[attr^="x"] → starts with
[attr$="x"] → ends with
[attr*="x"] → contains

:hover      → mouse over
:focus      → has focus
:nth-child  → position
```

**Remember:**
` ` = **inside**, `>` = **directly inside**, `+` = **next**, `~` = **all following**.
