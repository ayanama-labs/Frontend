# CSS Beginner Practice Set

## Level 1 — CSS Fundamentals

### Exercise 1 — Three Ways of Applying CSS

Create a page containing:

```text
My CSS Practice
This page demonstrates CSS.
```

Style different elements using:

- Inline CSS
- Internal CSS
- External CSS

**Goal:** Understand how CSS can enter a document and which approach should normally be preferred.

---

### Exercise 2 — CSS Selector Drill

Create:

```html
<h1>CSS Practice</h1>

<p>Paragraph 1</p>
<p class="special">Paragraph 2</p>
<p id="unique">Paragraph 3</p>

<div>
  <p>Paragraph 4</p>
</div>
```

Use only CSS selectors to:

1. Make all paragraphs gray.
2. Make `.special` blue.
3. Make `#unique` red.
4. Make the `<div>` have a background.
5. Select every element with `*` and give it a temporary outline.

**Restriction:** Don't add additional classes or IDs.

---

### Exercise 3 — Selector Combination

Create:

```html
<h2>Products</h2>

<p>Phone</p>
<p class="featured">Laptop</p>

<div>
  <p>Tablet</p>
</div>
```

Practice:

- element selector
- class selector
- ID selector
- grouping selector
- universal selector

Then remove unnecessary selectors and ask yourself:

> "Can I achieve the same result with a simpler selector?"

---

# Level 2 — Typography

### Exercise 4 — Typography Laboratory

Create a page containing:

```text
The Art of Programming

Programming is the process of solving problems
using computational thinking.

Learn More
```

Experiment with:

- `font-family`
- `font-size`
- `font-weight`
- `color`
- `text-align`
- `text-decoration`
- `text-transform`
- `line-height`
- `letter-spacing`

### Challenge

Create **three versions**:

**A.** Newspaper style  
**B.** Modern SaaS style  
**C.** Minimal portfolio style

Don't change the HTML.

Only CSS.

This teaches you something important:

> **Design is often changing the visual system rather than changing the markup.**

---

### Exercise 5 — Typography Hierarchy

Create:

```text
My Portfolio

Software Engineer

I build web applications using modern
JavaScript technologies.

Projects

About Me

Contact
```

Create a clear hierarchy using only typography.

For example:

```text
My Portfolio       ← largest
Software Engineer  ← large
body               ← normal
Projects           ← medium
```

Don't use backgrounds, borders or images.

Your hierarchy must come entirely from:

- size
- weight
- spacing
- color
- line-height

---

# Level 3 — Colors & Backgrounds

### Exercise 6 — Color Palette

Create a card:

```text
John Doe
Software Engineer
I build web applications.
[Contact Me]
```

Create three themes:

### Theme A

Professional

### Theme B

Dark

### Theme C

Playful

Use:

- HEX
- RGB
- named colors

Then experiment with transparency.

---

### Exercise 7 — Background Image

Create a hero section:

```text
Build Something Great

Turn your ideas into beautiful
web experiences.

[Get Started]
```

Add a background image.

Experiment with:

```css
background-image
background-repeat
background-position
background-size
```

Try:

```css
background-size: cover;
```

and:

```css
background-size: contain;
```

Understand **visually** what changes.

---

# Level 4 — Box Model

This is one of the most important beginner exercises.

### Exercise 8 — Box Model Investigation

Create:

```html
<div class="box">Hello CSS</div>
```

Give it:

```css
width: 200px;
padding: 20px;
border: 10px solid;
margin: 30px;
```

Now calculate manually:

### Question

What is the actual width occupied by the element?

Don't use DevTools initially.

Calculate it yourself.

Then change:

```css
box-sizing: border-box;
```

Calculate again.

---

### Exercise 9 — Box Model Comparison

Create three boxes:

```text
Box 1
Box 2
Box 3
```

Give all three:

```css
width: 200px;
height: 100px;
```

But use different:

- padding
- border
- margin

Then answer:

> Why don't they occupy the same amount of space?

---

### Exercise 10 — Build a Card

Create:

```text
┌──────────────────────┐
│                      │
│       Avatar         │
│                      │
│      John Doe        │
│   Software Engineer  │
│                      │
│    [View Profile]    │
│                      │
└──────────────────────┘
```

You must control the appearance using:

- width
- height
- padding
- margin
- border
- border-radius
- box-sizing

---

# Level 5 — Basic Layout

### Exercise 11 — Block vs Inline

Create:

```html
<div>Block 1</div>
<div>Block 2</div>

<span>Inline 1</span>
<span>Inline 2</span>
```

Experiment with:

```css
display: block;
display: inline;
display: inline-block;
```

Before changing the CSS, predict what will happen.

Then verify.

---

### Exercise 12 — Navigation Bar

Build:

```text
Home   About   Projects   Services   Contact
```

Requirements:

- horizontal navigation
- remove list bullets
- remove default link decoration
- spacing between links
- hover effect

**Restriction:** Don't use Flexbox yet.

Use:

```css
display: inline-block;
```

This is important because you're still learning basic layout.

---

### Exercise 13 — Float Layout

Create:

```text
┌──────────────────────────────────────┐
│                                      │
│  IMAGE        Lorem ipsum dolor...   │
│               Lorem ipsum dolor...   │
│               Lorem ipsum dolor...   │
│                                      │
└──────────────────────────────────────┘
```

Use:

```css
float: left;
```

Then create content below it.

Experiment with:

```css
clear: both;
```

Understand **why `clear` exists**.

---

# Level 6 — Positioning

### Exercise 14 — Relative Position

Create:

```text
Box
```

Move it using:

```css
position: relative;
top:
left:
right:
bottom:
```

Observe:

> Does the original space disappear?

That's the important concept.

---

### Exercise 15 — Notification Badge

Create:

```text
┌──────────────┐
│              │
│     🔔   3   │
│              │
└──────────────┘
```

Position the `3` relative to the bell/container.

Use:

```css
position: relative;
position: absolute;
```

Don't use Flexbox.

This is one of the best beginner positioning exercises.

---

# Level 7 — Units

### Exercise 16 — Unit Experiment

Create identical elements using:

```css
width: 200px;
width: 50%;
width: 10rem;
width: 20vw;
```

Resize your browser.

Observe which ones change.

Then create:

```text
Parent
 └── Child
```

Experiment with:

```css
px
%
em
rem
vw
vh
```

Write down what each unit is relative to.

---

# Level 8 — Combining Everything

Now things get interesting.

## Exercise 17 — Profile Card

Build:

```text
┌─────────────────────────┐
│       [ Avatar ]        │
│                         │
│       Ayan Khan         │
│     Software Engineer   │
│                         │
│  I build modern web     │
│  applications.          │
│                         │
│      [ Contact ]        │
└─────────────────────────┘
```

You may use everything you've learned so far:

- selectors
- typography
- colors
- background
- box model
- display
- positioning
- units

**Don't use Flexbox/Grid yet.**

---

# Exercise 18 — Blog Article

Build a blog page:

```text
The Future of Web Development

By Ayan Khan
September 20, 2026

[Hero Image]

Introduction

Lorem ipsum...

The Problem

Lorem ipsum...

The Solution

Lorem ipsum...

Conclusion

Lorem ipsum...
```

Requirements:

- readable typography
- constrained content width
- proper spacing
- heading hierarchy
- image
- links
- author information

Focus heavily on:

```css
line-height
font-size
margin
padding
width
```

---

# Exercise 19 — Product Card

Build:

```text
┌─────────────────────────┐
│                         │
│      PRODUCT IMAGE      │
│                         │
├─────────────────────────┤
│ iPhone 17 Pro           │
│                         │
│ Premium smartphone      │
│                         │
│ ₹99,999                 │
│                         │
│ [Buy Now]               │
└─────────────────────────┘
```

Create **three cards**.

Don't use Flexbox/Grid.

Your challenge is to make them appear next to each other using:

```css
inline-block
```

Then make them wrap naturally when the viewport becomes smaller.

---

# Level 9 — The Real Test

These exercises test whether you've actually understood the fundamentals.

## Exercise 20 — Recreate a Screenshot

Pick any relatively simple website section.

For example:

Look at it for **5 minutes**.

Then close it.

Recreate it from memory.

Don't copy the CSS.

Don't inspect the source.

Ask yourself:

> What boxes exist?

> How are they positioned?

> Which elements are block/inline?

> Where is spacing coming from?

> What units would make sense?

This is where CSS knowledge starts becoming **visual reasoning** rather than memorization.

---

# 🔥 Final Beginner Challenge

Don't look at any tutorial.

Build this:

```text
┌─────────────────────────────────────────────────┐
│ LOGO          HOME   ABOUT   PROJECTS   CONTACT │
├─────────────────────────────────────────────────┤
│                                                 │
│              BUILD YOUR FUTURE                 │
│                                                 │
│     I build modern web applications that        │
│              solve real problems.                │
│                                                 │
│              [ View Projects ]                   │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│                 MY PROJECTS                     │
│                                                 │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│   │ Project  │ │ Project  │ │ Project  │       │
│   │    01    │ │    02    │ │    03    │       │
│   └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Restrictions

For this final challenge:

**You may use:**

- selectors
- typography
- colors
- backgrounds
- box model
- `display`
- `float`
- `position`
- units

**You may NOT use:**

- Flexbox
- Grid
- Tailwind
- Bootstrap
- JavaScript

That restriction is deliberate.

You should be able to construct a surprisingly large amount of a website with just these fundamentals.

---
