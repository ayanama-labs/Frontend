Absolutely, Boss. Here are **10 practical exercises**, ordered from basic → integrated. The goal is not just to make something work, but to force you to understand **components, JSX, props, conditional rendering, lists, purity, and the UI tree**.

# React — 10 Exercises

## 1. Build a Profile Card

**Topics:** Components, JSX

Create:

```text
ProfileCard
├── Avatar
├── Name
├── Bio
└── Button
```

Requirements:

- Create each as a separate component.
- `App` should compose them.
- Use JSX for the markup.
- Don't put everything inside `App`.

**Challenge:** Draw the component tree before coding.

---

## 2. Product Card with Props

**Topics:** Props, JSX, reusable components

Create a reusable:

```jsx
<ProductCard />
```

It should accept:

```js
name;
price;
image;
category;
```

Example:

```jsx
<ProductCard
  name="Mechanical Keyboard"
  price={2499}
  image="..."
  category="Electronics"
/>
```

Render **3 different products** using the same component.

**Challenge:** Don't hardcode any product-specific information inside `ProductCard`.

---

## 3. Build a User List

**Topics:** Props, `map()`, keys, lists

Given:

```js
const users = [
  { id: 1, name: "Ayan", age: 23 },
  { id: 2, name: "Rahul", age: 25 },
  { id: 3, name: "Sara", age: 21 },
];
```

Create:

```text
App
└── UserList
    ├── UserCard
    ├── UserCard
    └── UserCard
```

Use `.map()`.

Requirements:

- `UserList` receives users as props.
- `UserCard` receives an individual user.
- Use `user.id` as the `key`.
- Don't use array index as the key.

**Challenge:** Explain why `key` is needed.

---

## 4. Conditional Login UI

**Topics:** Conditional rendering, props

Create:

```jsx
<UserStatus isLoggedIn={true} />
```

If logged in:

```text
Welcome back!
[Logout]
```

If logged out:

```text
You are not logged in.
[Login]
```

Use conditional rendering.

Try implementing it **three ways**:

1. `if/else`
2. ternary `? :`
3. `&&`

**Challenge:** Decide which approach is most readable for each situation.

---

## 5. Empty vs Populated List

**Topics:** Lists, conditional rendering, `&&`

Create a `TodoList`.

```js
const todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Practice JSX" },
];
```

Display:

```text
Your Tasks

• Learn React
• Practice JSX
```

But when:

```js
const todos = [];
```

display:

```text
No tasks available.
```

**Important challenge:**

Don't write:

```jsx
{
  todos.length && <TodoItems />;
}
```

Instead, make sure `0` isn't accidentally rendered.

---

## 6. Create a Reusable Card Component

**Topics:** `children`, props, component composition

Create:

```jsx
<Card>
  <h2>React</h2>
  <p>Learn component composition.</p>
</Card>
```

Your `Card` component should use:

```jsx
function Card({ children }) {
  // ...
}
```

Then use the same `Card` component for:

```text
Profile Card
Product Card
Notification Card
```

**Challenge:** Make `Card` completely unaware of what content is inside it.

This exercise teaches an important React idea:

> **A component doesn't always need to know what its children are.**

---

## 7. Build a Navigation Bar

**Topics:** Components, props, lists, JSX

Create:

```js
const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "About", url: "/about" },
  { id: 3, text: "Contact", url: "/contact" },
];
```

Component structure:

```text
App
└── Navbar
    └── NavLink × 3
```

`Navbar` should receive `links` as a prop.

`NavLink` should receive:

```js
text;
url;
```

**Challenge:** Make sure the `key` is attached to the component being created by `map()`.

---

## 8. Find the Purity Problems

**Topics:** Pure components

For each example, determine whether the component is pure or not.

### A

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

### B

```jsx
let count = 0;

function Counter() {
  count++;
  return <p>{count}</p>;
}
```

### C

```jsx
function Price({ price }) {
  return <p>{price * 1.18}</p>;
}
```

### D

```jsx
const users = [];

function User({ name }) {
  users.push(name);
  return <p>{name}</p>;
}
```

For every impure example, rewrite it so that rendering remains pure.

**Challenge:** Explain _what external value is being changed_.

---

## 9. Build a Dashboard Component Tree

**Topics:** Component architecture, UI tree, props

Build:

```text
App
├── Header
│   ├── Logo
│   └── UserMenu
├── Sidebar
│   └── NavItem × 4
└── Dashboard
    ├── WelcomeMessage
    ├── Stats
    │   ├── StatCard
    │   ├── StatCard
    │   └── StatCard
    └── RecentActivity
```

Use props wherever data needs to move down the tree.

For example:

```jsx
<WelcomeMessage name="Ayan" />
```

and:

```jsx
<StatCard title="Users" value={1200} />
```

**Challenge:** Before writing code, draw the component tree and mark where each piece of data originates.

---

# 10. 🔥 Mini Project — E-commerce Product Page

This combines almost everything you've learned.

Build:

```text
App
├── Header
├── ProductPage
│   ├── ProductImage
│   ├── ProductInfo
│   │   ├── ProductTitle
│   │   ├── Price
│   │   ├── Description
│   │   └── StockStatus
│   └── ProductFeatures
└── Footer
```

Data:

```js
const product = {
  id: 101,
  name: "Mechanical Keyboard",
  price: 2499,
  description: "A compact mechanical keyboard.",
  inStock: true,
  features: ["RGB lighting", "Hot-swappable switches", "Compact layout"],
};
```

Requirements:

### Product information

Pass the product through props.

```jsx
<ProductPage product={product} />
```

### Stock status

If:

```js
inStock === true;
```

show:

```text
In Stock
[Add to Cart]
```

Otherwise:

```text
Out of Stock
```

### Features

Use `.map()`:

```text
Features

✓ RGB lighting
✓ Hot-swappable switches
✓ Compact layout
```

Use:

```jsx
key = { feature };
```

### Component composition

Don't make one giant component.

---

# ⭐ Bonus Challenge

After completing Exercise 10, deliberately introduce these mistakes and see what happens:

### Mistake 1

```jsx
{
  features.map((feature) => <li>{feature}</li>);
}
```

Why does React complain?

---

### Mistake 2

```jsx
{
  features.length && <FeatureList />;
}
```

What happens when `features` is empty?

---

### Mistake 3

```jsx
function Product({ product }) {
  product.name = "Something else";

  return <h1>{product.name}</h1>;
}
```

Why is this problematic?

---

### Mistake 4

```jsx
function ProductCard() {
  return (
    <div>
      <h2>Keyboard</h2>
      <p>$50</p>
    </div>
  );
}
```

How would you convert this into a **truly reusable component** using props?

---

### Mistake 5

```jsx
products.map((product, index) => <ProductCard key={index} product={product} />);
```

Explain why:

```jsx
key={product.id}
```

is generally better.

---

## Recommended order

Don't do them randomly:

```text
1 → Components
       ↓
2 → Props
       ↓
3 → Lists + keys
       ↓
4 → Conditional rendering
       ↓
5 → Lists + conditions
       ↓
6 → children/composition
       ↓
7 → Props + lists
       ↓
8 → Purity
       ↓
9 → Component tree
       ↓
10 → Everything together
```

**Most important:** For each exercise, don't just ask _“Does my code work?”_ Ask:

> **What is the component tree?**
> **Where does each piece of data originate?**
> **Which component owns that data?**
> **How does the data flow through props?**
> **What UI does each component describe?**
> **Which parts are conditional?**
> **What gives each list item its identity?**

Those questions will deepen your React understanding much more than simply completing the exercises.
