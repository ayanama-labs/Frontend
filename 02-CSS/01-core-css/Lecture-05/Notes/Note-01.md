# CSS Specification Deep Dive

CSS is not just a collection of properties. It is a set of **formal specifications** that define exactly how browsers should interpret and apply CSS.

---

# 1. Understanding CSS Specifications

CSS specifications are technical documents that define:

- CSS properties
- Values and syntax
- Browser behavior
- Parsing rules
- Cascade rules
- Inheritance
- Layout behavior
- Rendering behavior

The specifications are developed primarily through the **W3C CSS Working Group**.

You can think of a specification as the **official rulebook** for a CSS feature.

Example:

```css
display: grid;
```

The CSS specification defines what `grid` means and how browsers should process it.

### Important idea

```text
CSS specification
       ↓
Defines behavior
       ↓
Browser implements it
       ↓
CSS works on the web
```

---

# 2. Cascade

The **cascade** determines which CSS declaration wins when multiple rules apply to the same element.

Example:

```css
p {
  color: blue;
}

p {
  color: red;
}
```

The paragraph becomes:

```text
red
```

because the later declaration wins when the other factors are equal.

The cascade considers several factors, including:

```text
Origin & importance
       ↓
Cascade layers
       ↓
Specificity
       ↓
Scoping proximity
       ↓
Source order
```

For everyday CSS, the most important concepts to understand are **importance, layers, specificity, and source order**.

---

# 3. Specificity

Specificity determines how strongly a selector targets an element.

General hierarchy:

```text
Inline styles
     ↓
ID selectors
     ↓
Class / attribute / pseudo-class
     ↓
Element / pseudo-element
```

Example:

```css
p {
  color: blue;
}

.text {
  color: green;
}

#title {
  color: red;
}
```

```html
<p id="title" class="text">Hello</p>
```

Result:

```text
red
```

because the ID selector has greater specificity than the class and element selectors.

---

## Specificity Calculation

Think in four components:

```text
Inline | ID | Class | Element
```

Example:

```css
#app .card p
```

has:

```text
0 | 1 | 1 | 1
```

Another:

```css
.card p
```

has:

```text
0 | 0 | 1 | 1
```

The first selector is more specific.

### Important

Specificity is **not simply "counting selectors."**

For example:

```css
#id
```

beats:

```css
.class.class.class.class.class.class
```

because ID specificity is a higher category.

---

# 4. Inheritance

Inheritance determines which properties are automatically passed from a parent to its descendants.

Example:

```css
body {
  color: blue;
}
```

A child normally inherits the `color`:

```html
<body>
  <p>Hello</p>
</body>
```

The `<p>` becomes blue.

---

## Not All Properties Inherit

Typically inherited:

```text
color
font-family
font-size
line-height
```

Typically not inherited:

```text
margin
padding
border
width
height
```

You can explicitly control inheritance:

```css
.child {
  color: inherit;
}
```

Other useful values:

```css
color: initial;
color: unset;
color: revert;
```

---

# 5. Cascade vs Inheritance

These are different concepts.

### Cascade

Answers:

> **Which declaration should win?**

### Inheritance

Answers:

> **Should this value come from the parent?**

Example:

```text
Parent
  │
  │ color: blue
  ↓
Child
  │
  └── inherits blue
```

---

# 6. Value Processing

This is a deeper CSS concept.

When you write:

```css
width: 50%;
```

the browser doesn't immediately turn it into a final pixel value.

CSS values go through several stages.

A simplified model:

```text
Specified value
       ↓
Cascaded value
       ↓
Specified/computed processing
       ↓
Used value
       ↓
Actual value
```

The terminology can vary slightly by specification/context, but this mental model is useful.

---

## Specified Value

The value produced after applying the cascade.

```css
width: 50%;
```

The specified value is essentially:

```text
50%
```

---

## Computed Value

The value after inheritance and computation rules are applied.

For example:

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;
}
```

The child's computed font size becomes:

```text
30px
```

---

## Used Value

The browser determines the value actually needed for layout.

For example:

```css
width: 50%;
```

If the containing block is `1000px` wide:

```text
50% → 500px
```

The used value is approximately:

```text
500px
```

---

## Actual Value

The final value used by the rendering system after any necessary adjustments.

For example, the browser may need to account for device or rendering limitations.

---

# 7. Why Value Processing Matters

Understanding value processing explains why CSS can behave differently from what you initially expect.

For example:

```css
width: 50%;
```

doesn't inherently mean:

```text
500px
```

It means:

> 50% of the relevant containing block.

The final value depends on the layout context.

---

# 8. CSS Working Group

The **CSS Working Group (CSSWG)** is responsible for developing and maintaining CSS specifications.

It includes representatives and contributors from organizations involved in web technologies.

The group works on specifications such as:

```text
CSS Grid
CSS Flexbox
CSS Selectors
CSS Color
CSS Animations
CSS Transforms
```

---

# 9. How a CSS Feature Evolves

A simplified process looks like:

```text
Idea
 ↓
Proposal
 ↓
Draft specification
 ↓
Working Group discussion
 ↓
Implementation/testing
 ↓
Browser feedback
 ↓
Specification refinement
 ↓
Recommendation / standardization
```

The actual standards process can involve multiple stages and is not always strictly linear.

---

# 10. Why Browser Support Can Differ

A CSS feature can exist in a specification before every browser fully supports it.

For example:

```text
Specification
     ↓
Browser A → supports
Browser B → partial support
Browser C → doesn't support
```

This is why developers need to consider:

- Browser implementation
- Compatibility
- Feature detection
- Specification status

---

# Quick Revision

| Concept               | Meaning                             |
| --------------------- | ----------------------------------- |
| **CSS Specification** | Formal definition of CSS behavior   |
| **Cascade**           | Determines which declaration wins   |
| **Specificity**       | Determines selector strength        |
| **Inheritance**       | Values passed from parent to child  |
| **Specified value**   | Value after CSS rules/cascade       |
| **Computed value**    | Value after computation/inheritance |
| **Used value**        | Value used for layout               |
| **Actual value**      | Final rendered value                |
| **CSSWG**             | Group developing CSS specifications |

## Mental Model

```text
CSS Specification
       ↓
Defines the rules
       ↓
Cascade
   ↓
Which declaration wins?
       ↓
Inheritance
   ↓
Does value come from parent?
       ↓
Value Processing
   ↓
Specified → Computed → Used → Actual
       ↓
Browser Rendering
```

### Core takeaway

> **The specification defines the rules, the cascade decides which declaration wins, inheritance passes certain values to children, and value processing turns CSS declarations into values the browser can actually use for layout and rendering.**
