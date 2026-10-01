## Tailwind CSS v3 → v4 — Upgrade Notes

### 1. Browser Support

- v4 targets **Safari 16.4+, Chrome 111+, Firefox 128+**.
- Older browser support → use **v3.4**. Pasted text

### 2. Upgrade Tool

- Automatic migration tool:
  ```bash
  npx @tailwindcss/upgrade
  ```
- Requires **Node.js 20+**.
- Updates dependencies, migrates configuration to CSS, and handles many template changes.
- Run it on a **new Git branch**, then review and test. Pasted text

### 3. PostCSS Changes

- v3: `tailwindcss` was the PostCSS plugin.
- v4: use dedicated **`@tailwindcss/postcss`** plugin.
- `postcss-import` and `autoprefixer` are no longer required because v4 handles imports and vendor prefixing automatically. Pasted text

### 4. Vite

- v4 provides a dedicated **`@tailwindcss/vite`** plugin.
- Recommended for Vite projects because of better performance and developer experience. Pasted text

### 5. Tailwind CLI

- CLI moved to **`@tailwindcss/cli`**.
- Example:
  ```bash
  npx @tailwindcss/cli -i input.css -o output.css
  ```
  Pasted text

### 6. `@tailwind` → `@import`

- v3:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- v4:
  ```css
  @import "tailwindcss";
  ```
  Pasted text

### 7. Renamed Utilities

Important changes:

| v3             | v4               |
| -------------- | ---------------- |
| `shadow-sm`    | `shadow-xs`      |
| `shadow`       | `shadow-sm`      |
| `blur-sm`      | `blur-xs`        |
| `rounded-sm`   | `rounded-xs`     |
| `rounded`      | `rounded-sm`     |
| `outline-none` | `outline-hidden` |
| `ring`         | `ring-3`         |

Pasted text

### 8. Deprecated Utilities Removed

Examples:

- `bg-opacity-*` → `bg-black/50`
- `text-opacity-*` → `text-black/50`
- `flex-shrink-*` → `shrink-*`
- `flex-grow-*` → `grow-*`
- `overflow-ellipsis` → `text-ellipsis` Pasted text

### 9. Ring Changes

- v3 default ring: **3px + blue-500**
- v4 default ring: **1px + currentColor**
- Use `ring-3` when you need the old 3px width. Pasted text

### 10. Border Color

- v3 default border color → `gray-200`
- v4 default border color → `currentColor`.
- Specify a border color explicitly when needed. Pasted text

### 11. `space-*` and `divide-*`

- Their underlying selectors changed for better performance.
- For layouts, prefer **Flex/Grid + `gap-*`** when possible. Pasted text

### 12. Prefix

- Prefixes now behave like variants and appear at the **beginning**:
  ```html
  <div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600"></div>
  ```
  Pasted text

### 13. Important Modifier

- v3:
  ```html
  !flex
  ```
- v4:
  ```html
  flex!
  ```
- Old syntax remains for compatibility but is deprecated. Pasted text

### 14. Custom Utilities

- v4 replaces custom utilities defined through `@layer utilities` with **`@utility`**:
  ```css
  @utility tab-4 {
    tab-size: 4;
  }
  ```
  Pasted text

### 15. Variant Order

- v3: stacked variants applied **right → left**.
- v4: applied **left → right**, closer to CSS syntax. Pasted text

### 16. Arbitrary CSS Variables

- v3:
  ```html
  bg-[--brand-color]
  ```
- v4:
  ```html
  bg-(--brand-color)
  ```
  Pasted text

### 17. JavaScript Config

- `tailwind.config.js` is still supported **for compatibility**.
- v4 does **not automatically detect** it.
- Explicitly load it with:
  ```css
  @config "../../tailwind.config.js";
  ```
- v4 prefers CSS-based theme variables. Pasted text

### 18. `theme()` Function

- Prefer generated CSS variables:
  ```css
  var(--color-red-500)
  ```
- Instead of:
  ```css
  theme(colors.red.500)
  ```
  Pasted text

### 19. `@apply` in Separate Stylesheets

- CSS Modules, Vue/Svelte/Astro `<style>` blocks don't automatically access definitions from the main stylesheet.
- Use **`@reference`** when needed. Pasted text

### 20. Sass / Less / Stylus

- Tailwind v4 is **not designed to work with Sass, Less, or Stylus**.
- Tailwind itself acts as the CSS processing layer. Pasted text

### One-line revision

> **Tailwind v4 = CSS-first configuration + dedicated Vite/PostCSS/CLI packages + modern browser support + changed utilities/configuration + simplified CSS workflow.**
