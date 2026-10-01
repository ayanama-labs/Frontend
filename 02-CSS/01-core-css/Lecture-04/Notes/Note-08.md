# CSS Debugging & Tools

CSS debugging is the process of **finding, understanding, and fixing problems in CSS** using browser tools and automated tools.

---

## 1. DevTools Mastery

**Browser DevTools** are built-in tools used to inspect and debug HTML, CSS, JavaScript, and performance.

Open DevTools with:

```text
F12
Ctrl + Shift + I
Right-click → Inspect
```

### Important DevTools features

#### Elements Panel

Used to inspect HTML and CSS.

You can:

- Inspect elements
- View applied CSS
- Edit CSS live
- Check inherited styles
- Identify overridden properties

Example:

```css
.button {
  color: red;
}

.button {
  color: blue;
}
```

DevTools shows the `red` declaration as overridden.

---

#### Computed Styles

Shows the **final CSS values actually applied** to an element.

Useful when you're wondering:

> "Why isn't my CSS property working?"

---

#### Box Model

Shows:

```text
Margin
  ↓
Border
  ↓
Padding
  ↓
Content
```

Useful for debugging spacing and sizing problems.

---

#### Layout Tools

Useful for debugging:

- Flexbox
- CSS Grid
- Alignment
- Gaps
- Grid tracks

---

#### Responsive Mode

Allows you to test different:

- Screen sizes
- Device dimensions
- Orientations

Useful for responsive design debugging.

### Key idea

> **DevTools lets you inspect, modify, and understand CSS directly in the browser.**

---

# 2. CSS Validation

**CSS validation** checks whether your CSS follows the rules defined by CSS specifications.

Example:

```css
.box {
  color: red;
  width: 100px;
}
```

Valid CSS.

An invalid or unsupported declaration may be detected by validation tools.

### Why validate CSS?

It can help detect:

- Syntax errors
- Invalid properties
- Invalid values
- Missing characters
- Incorrect CSS structure

### Important distinction

A CSS validator checks whether CSS is **valid**, but valid CSS doesn't necessarily mean the design is **correct**.

For example:

```css
.box {
  width: 100px;
}
```

This is valid CSS, but perhaps you actually wanted:

```css
width: 200px;
```

That's a **logic/design problem**, not a validation problem.

### Key idea

> **CSS validation checks whether your CSS follows valid syntax and specifications.**

---

# 3. Performance Profiling

**Performance profiling** means measuring how efficiently the browser renders your webpage.

CSS can affect:

```text
Style calculation
      ↓
Layout
      ↓
Paint
      ↓
Composite
```

### Things to investigate

- Large CSS files
- Excessive CSS rules
- Expensive selectors
- Frequent layout recalculations
- Forced synchronous layout
- Large rendering workloads
- Animations causing excessive work

### Chrome DevTools

The **Performance** panel can record page activity and help identify expensive operations.

You can inspect:

- Rendering time
- Layout
- Paint
- Style recalculation
- Long tasks
- Animation performance

### Example

Changing:

```css
width: 500px;
```

during an animation may trigger layout work.

Animating:

```css
transform: translateX(100px);
```

can often be more efficient because transforms are designed for compositing.

### Key idea

> **Performance profiling = measure where the browser spends time and identify rendering bottlenecks.**

---

# 4. CSS Linting

**CSS linting** uses automated tools to detect potential problems and enforce coding standards.

Popular tools include:

- **Stylelint**
- ESLint with CSS-related integrations
- Editor extensions

### Example

A linter can detect things such as:

```css
.box {
  color: red;
  color: blue;
}
```

The first `color` declaration is unnecessary.

It can also enforce rules such as:

```css
/* preferred */
color: #fff;

/* instead of inconsistent formatting */
color: #ffffff;
```

depending on your project's configuration.

### Linter can help with

- Duplicate properties
- Invalid CSS
- Unused patterns
- Naming conventions
- Formatting
- Consistent code style
- Potential mistakes

### Example: Stylelint

```bash
npm install --save-dev stylelint
```

Then configure rules for your project.

### Key idea

> **CSS linting = automatically detect CSS problems and enforce consistent coding standards.**

---

# Quick Revision

| Topic                     | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| **DevTools**              | Inspect and debug CSS in the browser                |
| **CSS Validation**        | Check whether CSS is valid                          |
| **Performance Profiling** | Find rendering/performance bottlenecks              |
| **CSS Linting**           | Automatically detect problems and enforce standards |

### Remember

```text
DevTools
→ "Why does my CSS behave like this?"

Validation
→ "Is my CSS valid?"

Profiling
→ "Why is my page slow?"

Linting
→ "Can I catch CSS problems automatically?"
```

**One-line takeaway:**
**DevTools helps you investigate, validation checks correctness, profiling checks performance, and linting prevents common CSS problems.**
