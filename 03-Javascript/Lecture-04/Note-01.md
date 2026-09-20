# Advanced working with Functions

# Recursion & Stack

## 1. Recursion

**Recursion = a function calling itself.**

Useful when a problem can be:

- Split into **smaller problems of the same type**
- Reduced to a **simple action + smaller version of the same problem**
- Used to process **recursive data structures**

### Two approaches

**Iterative:** use a loop.

**Recursive:** simplify the problem and call the function again.

Example:

```js
function pow(x, n) {
  if (n == 1) return x; // base case
  return x * pow(x, n - 1); // recursive step
}
```

For `pow(2, 4)`:

```text
2 × pow(2,3)
    ↓
2 × pow(2,2)
    ↓
2 × pow(2,1)
    ↓
2
```

### Key terms

| Term                | Meaning                                      |
| ------------------- | -------------------------------------------- |
| **Base case**       | Condition where recursion stops              |
| **Recursive step**  | Function calls itself with a simpler problem |
| **Recursion depth** | Maximum number of nested function calls      |

**Rule:** Every recursion needs a path toward a **base case**, otherwise it keeps calling itself.

---

# 2. Execution Context & Stack

Every function call creates an **execution context** containing information such as:

- Current variables
- Current execution position
- `this`
- Other internal details

When a function makes another call:

```text
Current context → paused
       ↓
pushed onto stack
       ↓
new function executes
       ↓
new context finishes
       ↓
previous context popped/restored
       ↓
execution continues
```

### Stack = LIFO

**Last In → First Out**

For:

```js
pow(2,3)
 → pow(2,2)
   → pow(2,1)
```

Stack grows:

```text
pow(2,1)  ← current
pow(2,2)
pow(2,3)
```

Then it unwinds:

```text
pow(2,1) finishes
↓
pow(2,2) resumes
↓
pow(2,3) resumes
```

**Recursion depth = maximum number of execution contexts in the stack.**

---

# 3. Recursion vs Loop

### Recursion

- Often **shorter**
- Can be **easier to understand**
- Uses more memory because contexts accumulate on the stack

### Iteration

- Usually **more memory-efficient**
- Uses a single execution context
- Often more effective for simple repetitive tasks

> **Any recursion can be rewritten as a loop**, although the conversion can sometimes be complicated.

---

# 4. Recursive Traversal

Recursion is excellent for **nested structures**.

Example: company hierarchy.

A department can be:

```text
Department
├── Array of employees        → BASE CASE
└── Object of subdepartments  → RECURSIVE CASE
```

Algorithm:

```text
If department is an array:
    sum employee salaries

Otherwise:
    recursively process each subdepartment
    add their results
```

This works regardless of how deeply departments are nested.

---

# 5. Recursive Data Structures

A **recursive data structure** is a structure that contains/references another structure of the **same type**.

Examples:

- Company hierarchy
- HTML/XML trees
- Linked lists
- Trees

### HTML example

```text
HTML element
 ├── text
 ├── comment
 └── another HTML element
       └── another HTML element
```

So HTML's nested structure is naturally recursive.

---

# 6. Linked List

A linked-list element contains:

```js
{
  (value, next);
}
```

`next` points to:

- The **next node**, or
- `null` if it is the end.

Example:

```text
1 → 2 → 3 → 4 → null
```

The first node is called the **head**.

### Advantages over arrays

Insertion/deletion can be efficient because there is **no mass renumbering**.

```js
list.next = list.next.next;
```

This removes a node from the chain by changing the previous node's `next`.

### Disadvantage

No direct indexed access.

Array:

```js
arr[n]; // direct access
```

Linked list:

```text
start at head
 → follow next
 → follow next
 → ... N times
```

So accessing the Nth element requires traversal.

---

# 7. Array vs Linked List

|                                    | Array                               | Linked List                                 |
| ---------------------------------- | ----------------------------------- | ------------------------------------------- |
| Direct access                      | ✅ Fast                             | ❌ Slow                                     |
| Insert/delete at beginning         | ❌ Expensive                        | ✅ Easy                                     |
| Insert/delete by rearranging links | ❌                                  | ✅                                          |
| Memory structure                   | Contiguous-style indexed collection | Nodes connected by references               |
| Good for                           | Random access                       | Queues/deques & frequent structural changes |

Linked lists can be enhanced with:

- `prev` → previous node
- `tail` → last node

---

## 🧠 Ultra-Short Revision

```text
RECURSION
Function → calls itself

BASE CASE
→ stops recursion

RECURSIVE STEP
→ makes problem smaller + calls itself

EXECUTION CONTEXT
→ information about one function call

STACK
→ stores paused execution contexts
→ LIFO

RECURSION DEPTH
→ maximum contexts on stack

RECURSIVE STRUCTURE
→ structure contains smaller structures of same type

LINKED LIST
→ { value, next }
→ easy insertion/deletion
→ slow random access

RECURSION
→ often cleaner
→ more stack memory

LOOP
→ usually less memory
→ often more efficient
```
