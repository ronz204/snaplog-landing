const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const menuIcon = menuToggle.querySelector('.material-symbols-outlined');

/* ── Theme ─────────────────────────────────────────────── */
const applyTheme = (theme) => {
  html.className = theme;
  localStorage.setItem('snaplog-theme', theme);
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
};

themeToggle.addEventListener('click', () => {
  const currentTheme = html.classList.contains('light') ? 'light' : 'dark';
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
});

/* ── Mobile menu ────────────────────────────────────────── */
const setMenuOpen = (open) => {
  navLinks.classList.toggle('nav__links--open', open);
  menuToggle.setAttribute('aria-expanded', String(open));

  menuIcon.textContent = open ? 'close' : 'menu';
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
};

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('nav__links--open');
  setMenuOpen(!isOpen);
});

/* Close menu when a nav link is activated (Delegación de eventos) */
navLinks.addEventListener('click', (e) => {
  if (e.target.closest('.nav__link')) {
    setMenuOpen(false);
  }
});

/* Close menu on Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
    setMenuOpen(false);
    menuToggle.focus();
  };
});

/* Close menu when viewport grows past mobile breakpoint */
const mq = window.matchMedia('(min-width: 769px)');
mq.addEventListener('change', (e) => {
  if (e.matches) setMenuOpen(false);
});
