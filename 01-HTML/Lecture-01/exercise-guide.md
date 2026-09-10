# 🟢 Beginner HTML — Concept-Strengthening Exercises

## 1. Build a Personal Profile Page

Create an HTML page containing:

- Your name as `<h1>`
- A short introduction in a `<p>`
- Three hobbies using an unordered list
- Three goals using an ordered list
- A horizontal line separating sections
- A comment identifying each major section

**Constraint:** Don't use CSS.

---

## 2. Reconstruct This Structure

Create the following structure:

```text
My Website
│
├── About Me
│   └── paragraph
│
├── My Skills
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
└── Contact
    └── paragraph
```

Use appropriate HTML elements.

**Think:** Which things should be headings and which should be paragraphs/lists?

---

# Text Fundamentals

## 3. Text Formatting Challenge

Write a paragraph containing:

- one **strongly important** word
- one word that is **emphasized**
- one word that is visually bold
- one word that is visually italic
- one deleted piece of text
- one inserted piece of text

Then ask yourself:

> What's the difference between `<strong>` and `<b>`?

Don't just make them look the same—understand their semantic difference.

---

## 4. Heading Hierarchy Challenge

Create a page about:

```text
Programming
    Frontend Development
        HTML
        CSS
        JavaScript
    Backend Development
        Node.js
        Databases
```

Use only:

```html
<h1>
  <h2>
    <h3></h3>
  </h2>
</h1>
```

### Question

Why shouldn't you choose `<h3>` simply because you like its font size?

---

## 5. Comments Exercise

Take this:

```html
<h1>My Website</h1>
<p>I am learning HTML.</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Add comments explaining:

1. Page title
2. Introduction
3. Skills section

Then open it in the browser and verify that comments don't appear on the page.

---

# 🧱 Block vs Inline

## 6. Predict Before Running

Before putting this into a browser, predict how many lines it will occupy:

```html
<div>One</div>
<div>Two</div>
<span>Three</span>
<span>Four</span>
<p>Five</p>
<p>Six</p>
```

Then run it.

Explain **why** the browser produces that layout.

---

## 7. `<div>` vs `<span>`

Create:

```text
My name is Ayan and I am learning HTML.
```

Make only the word **Ayan** have a different background using `<span>`.

Then put the entire sentence inside a `<div>`.

### Challenge

Explain:

> Why is `<span>` appropriate for Ayan but `<div>` isn't?

---

## 8. Build a Product Card Without CSS

Create:

```text
Laptop
Powerful laptop for programming.

Price: $999

Buy Now
```

Use:

- `<div>`
- headings
- paragraphs
- `<strong>`
- `<button>`

Don't worry about visual styling.

The objective is to practice **structuring content**, not designing it.

---

# 🔗 Links

## 9. Link Types Challenge

Create a page containing links to:

1. Google using an absolute URL
2. `about.html` using a relative URL
3. An email address
4. A phone number
5. A section on the same page

For the last one, create:

```html
<h2 id="contact">Contact</h2>
```

and make a link that jumps to it.

---

## 10. Target Attribute Exercise

Create four links:

- Open in the same tab
- Open in a new tab
- Link to another page
- Link to a section on the current page

For the new-tab link, investigate what:

```html
target="_blank"
```

actually does.

### Bonus

Find out why modern HTML commonly pairs `_blank` with an appropriate `rel` value.

---

## 11. Navigation Exercise

Create:

```text
Home | About | Projects | Contact
```

Each item should be a link.

Then create four corresponding HTML files:

```text
index.html
about.html
projects.html
contact.html
```

Make the navigation work between all four pages.

**This is an important exercise. Don't skip it.**

---

# 📋 Lists

## 12. Shopping List

Create:

```text
Shopping List

- Milk
- Eggs
- Bread
- Apples
- Rice
```

Use the appropriate list element.

Then create:

```text
Steps to Make Tea

1. Boil water
2. Add tea
3. Add milk
4. Add sugar
5. Serve
```

Decide which list type belongs to each.

---

## 13. Nested List Challenge

Create:

```text
Programming Languages

- Frontend
    - HTML
    - CSS
    - JavaScript

- Backend
    - JavaScript
    - Python
    - Java

- Database
    - SQL
    - MongoDB
```

You should have **properly nested lists**, not a flat list.

---

## 14. Definition List

Create a glossary:

```text
HTML
    HyperText Markup Language

CSS
    Cascading Style Sheets

HTTP
    HyperText Transfer Protocol

URL
    Uniform Resource Locator
```

Use:

```html
<dl>
  <dt></dt>
  <dd></dd>
</dl>
```

Then explain what each of those three elements represents.

---

## 15. List Reconstruction

Given this:

```text
Web Development
  Frontend
    HTML
    CSS
    JavaScript
  Backend
    Node.js
    Python
  Database
    PostgreSQL
    MongoDB
```

Reconstruct it using nested `<ul>` elements.

**Don't look at your previous exercise.**

---

# 🖼 Images

## 16. Basic Image Exercise

Create a page containing:

- One image
- Appropriate `src`
- Appropriate `alt`
- Explicit width
- Explicit height

Then deliberately break the image URL.

Observe what happens.

### Question

Why is `alt` still important when the image fails to load?

---

## 17. Image Gallery

Create a gallery containing five images.

Each image must have:

- `src`
- meaningful `alt`
- width
- height

Make every `alt` text describe what is actually in the image.

Bad:

```html
alt="image"
```

Better:

```html
alt="A black laptop on a wooden desk"
```

---

## 18. Image Format Challenge

Create a page containing examples of:

- JPEG
- PNG
- GIF
- WebP
- SVG

For each one, write a sentence explaining **when you would choose that format**.

---

# 📊 Tables

## 19. Student Marks Table

Create:

| Student | HTML | CSS | JavaScript |
| ------- | ---: | --: | ---------: |
| Ayan    |   90 |  85 |         88 |
| Rahul   |   78 |  82 |         80 |
| Sara    |   95 |  91 |         94 |

Use:

```html
<table>
  <tr>
    <th></th>
    <td></td>
  </tr>
</table>
```

No CSS.

---

## 20. Employee Table

Create:

| Name  | Department  | Salary |
| ----- | ----------- | -----: |
| John  | Engineering |  $5000 |
| Sarah | Design      |  $4500 |
| Mike  | Marketing   |  $4000 |

Make the first row table headers.

### Question

Why should the first row use `<th>` instead of `<td>`?

---

## 21. Table With `colspan`

Create:

```text
+-----------------------------+
|        Student Marks        |
+----------+--------+---------+
| Name     | HTML   | CSS     |
+----------+--------+---------+
| Ayan     | 90     | 85      |
| Rahul    | 80     | 75      |
+----------+--------+---------+
```

Make **Student Marks** span all three columns.

---

## 22. Table With `rowspan`

Create:

```text
+-----------+-----------+-------+
| Department| Employee  | Salary|
+-----------+-----------+-------+
|           | Ayan      | 5000  |
| Engineering| Rahul    | 4500  |
|           | Sara      | 5500  |
+-----------+-----------+-------+
```

Make `Engineering` span three rows.

---

# 📝 Forms

## 23. Basic Contact Form

Build:

```text
Name:
[____________]

Email:
[____________]

Message:
[____________]

[Submit]
```

Use:

- `<form>`
- `<label>`
- `<input>`
- `<textarea>`
- `<button>`

Make sure every input has an associated label.

---

## 24. Registration Form

Create a registration form with:

- First name
- Last name
- Email
- Password
- Date of birth
- Gender
- Country
- Terms & conditions checkbox
- Submit button

Use the appropriate HTML input types.

**Don't use `type="text"` for everything.**

---

## 25. Login Form

Create:

```text
Email
Password

[ Remember me ]

[ Login ]
```

Requirements:

- Email should use the appropriate input type.
- Password must not display characters normally.
- Email and password must have labels.
- Both fields must be required.

---

# 🧠 Conceptual Challenges

These are more important than simply writing HTML.

## 26. "What's Wrong With This HTML?"

Find all problems:

```html
<html>
<head>
    <title>My Page</title>
</head>

<body>

<h1>My Website</h1>

<p>This is my website.

<h2>My Skills</h1>

<ul>
    <li>HTML
    <li>CSS
    <li>JavaScript
</ul>

<img src="profile.jpg">

</body>
</html>
```

Don't immediately fix it.

First make a list of **every problem you can identify**.

---

## 27. Build From a Screenshot

Take any simple webpage you see online and try to recreate **only its HTML structure**.

Ignore:

- colors
- fonts
- spacing
- positioning
- animations

Concentrate only on:

```text
What is the content?
What is the hierarchy?
What is a heading?
What is a paragraph?
What is a link?
What is a list?
What is an image?
```

This develops actual HTML thinking.

---

# 🔥 Final Beginner Challenge

## 28. Build a Complete Personal Website

Without looking at your notes, create:

```text
                    My Portfolio

Home | About | Skills | Projects | Contact

------------------------------------------------

About Me

[Photo]

Hello, my name is ...

------------------------------------------------

Skills

- HTML
- CSS
- JavaScript
- Git

------------------------------------------------

Projects

Project 1
Description...

Project 2
Description...

------------------------------------------------

Education

+------------+----------+--------+
| Degree     | College  | Year   |
+------------+----------+--------+
| B.Tech     | XYZ      | 2025   |
+------------+----------+--------+

------------------------------------------------

Contact

Name:     [___________]
Email:    [___________]
Message:  [___________]

           [Submit]

------------------------------------------------

© 2026 My Portfolio
```

### Rules

**No CSS.**

Use as many of these as make semantic sense:

```html
<h1> - <h6>
<p>
<strong>
<em>
<div>
<span>
<br>
<hr>
<a>
<ul>
<ol>
<dl>
<img>
<table>
<tr>
<th>
<td>
<form>
<label>
<input>
<textarea>
<button>
```

### ⭐ The real test

After finishing, go through your HTML and ask yourself:

1. **Why did I choose this element?**
2. **Could another HTML element represent this content better?**
3. **Is this element block-level or inline?**
4. **Does this element have semantic meaning?**
5. **What happens if CSS and JavaScript are completely removed?**
6. **Would a screen reader understand the structure?**

If you can answer those questions confidently, you've moved beyond **"I know HTML syntax"** to **"I understand HTML."**

**Recommended order:** do exercises **1–5 → 6–11 → 12–18 → 19–25 → 26–28**. Don't look at solutions until you've genuinely attempted each one.
