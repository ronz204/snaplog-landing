# Lab 01 — Criteria & Technical Requirements

## Context
- **Course:** ISW-521 Programación en Ambiente Web I — UTN
- **Weight:** 15% of final grade (50pts code + 50pts oral defense)
- **Stack:** Vanilla HTML5 + CSS3 + JavaScript — no frameworks allowed

---

## HTML5
- `<!DOCTYPE html>` declared
- Semantic tags used correctly: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- No `<table>` for layout
- Valid markup (W3C validator)

## CSS3
- External `.css` files only (no inline styles for layout)
- **Flexbox** used in at least one layout component (e.g. navbar, card row)
- **CSS Grid** used in at least one layout component (e.g. features section, pricing cards)
- **Media queries** with at least 2 breakpoints (mobile / tablet / desktop)
- ❌ No Bootstrap, Tailwind, Bulma, or any CSS framework

## Accessibility (WCAG 2.1 Level A)
- All `<img>` have descriptive `alt` (empty only for purely decorative images)
- ARIA attributes where needed: `role`, `aria-label`, `aria-describedby`
- Text/background contrast ratio ≥ 4.5:1
- Full keyboard navigation (Tab, Enter, visible `:focus` indicator)

## Web Storage
- At least one feature using `localStorage` or `sessionStorage`
- Persisted value must be recovered and applied on page reload
- Vanilla JS only — no libraries
- Suggested: dark/light mode toggle, language preference, or welcome banner dismissed state

---

## Project Structure
```
/lab01/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
```

## Delivery
- GitHub repo, public visibility, folder clearly named (e.g. `/lab01/`)
- Entry point: `index.html`
- No commits after deadline (timestamp is enforced)

## Defense (oral)
The professor can ask about any line of code. Be ready to explain:
- Why Flexbox here vs Grid there
- What each media query breakpoint represents
- What ARIA attributes were added and why
- Difference between `localStorage` and `sessionStorage` and which was chosen and why
- How viewport meta tag works