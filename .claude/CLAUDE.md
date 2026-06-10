# CLAUDE.md — Agent Instructions for ISW521-LAB01

## Project Overview
Landing page for **SnapLog**, a fictional uptime-monitoring micro SaaS.
Built for UTN course ISW-521, Lab #1. See `context/domain.md` for the brand/idea and `context/criteria.md` for hard technical requirements.

---

## Folder Structure
```
ISW521-LAB01/
├── assets/
│   ├── images/          # All image assets (svg, png, webp)
│   └── styles/          # CSS files go here
├── context/
│   ├── criteria.md      # Technical requirements (READ FIRST)
│   ├── design.md        # Visual/design decisions
│   └── domain.md        # Brand, sections, copy
├── javascript/          # JS files go here
├── index.html           # Single entry point
├── .gitignore
└── README.md
```

**Rules:**
- All CSS → `assets/styles/`
- All JS → `assets/javascript/`
- All images → `assets/images/`
- One `index.html` at root — no subpages

---

## Tech Constraints (non-negotiable)
- **HTML5 semantic tags only** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **No CSS frameworks** — no Bootstrap, Tailwind, Bulma, etc.
- **No JS libraries** — vanilla JS only
- **No inline styles** for layout — external `.css` files only
- **No `<table>` for layout**

---

## CSS Rules
- Use **Flexbox** for at least one layout component (navbar, hero, testimonials)
- Use **CSS Grid** for at least one layout component (features, pricing, footer)
- Define at least **2 media query breakpoints**:
  - Mobile: `max-width: 768px`
  - Tablet: `max-width: 1024px`
- Use `rem` for font sizes, `px` for borders/shadows, `%` or `fr` for fluid widths

## JS Rules
- One responsibility per file — keep it focused
- Implement `localStorage` for dark/light theme toggle
  - Key: `snaplog-theme`, values: `"dark"` | `"light"`
  - Apply theme class on `<body>` **before first paint** to avoid flash
- No `console.error` or unhandled exceptions in production code

---

## Accessibility Checklist
Every time you touch HTML, verify:
- [ ] All `<img>` have descriptive `alt` (empty `alt=""` only for decorative)
- [ ] Interactive non-native elements have `role` + `aria-label`
- [ ] Focus styles (`:focus`) are visible — never `outline: none` without a replacement
- [ ] Keyboard navigation works: Tab moves between elements, Enter activates them

---

## How to Work
1. Read `context/criteria.md` and `context/domain.md` before writing any code
2. Read `context/design.md` for color tokens, typography, and spacing
3. Build section by section following the order in `domain.md`
4. After each section: validate markup, check contrast, verify responsiveness
5. Commit with clear messages: `feat: add pricing section grid layout`

---

## What NOT to Do
- Do not add external CDN links (fonts from Google Fonts are OK, nothing else)
- Do not create additional HTML files — everything lives in `index.html`
- Do not use `id` as CSS selectors — use classes
- Do not leave placeholder lorem ipsum in final code
- Do not add JS frameworks or utility libraries under any circumstance