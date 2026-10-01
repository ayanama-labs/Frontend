### Tailwind CSS v4 — Installation

- **Install:** `tailwindcss` + `@tailwindcss/vite` (Vite projects).
- **Vite setup:** Add `tailwindcss()` plugin to `vite.config`.
- **CSS:** Import Tailwind with:
  ```css
  @import "tailwindcss";
  ```
- **No `tailwind.config.js` required** → v4 uses **CSS-first configuration**.
- **Run:** Start the development server and use Tailwind utility classes directly in HTML/JSX.
- **PostCSS:** For PostCSS projects, install `@tailwindcss/postcss` and configure it as a plugin.

**Core idea:** Tailwind v4 simplifies installation by using a dedicated build-tool plugin and CSS-first configuration.
