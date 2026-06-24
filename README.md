# SnapLog — Landing Page

Landing page para **SnapLog**, un micro SaaS de monitoreo de uptime.
Desarrollado para el curso **ISW-521 Programación en Ambiente Web I — UTN**, Laboratorio #1.

---

## Descripción

SnapLog permite a desarrolladores indie y equipos pequeños monitorear la disponibilidad de sus sitios web. Pegas una URL y recibes alertas inmediatas por Slack o email si algo falla.

**Tagline:** *"Know before your users do."*

---

## Tecnologías

- HTML5 semántico
- CSS3 (Flexbox + CSS Grid + Media Queries)
- JavaScript vanilla
- `localStorage` para persistencia del tema

Sin frameworks, sin librerías externas.

---

## Estructura

```
snaplog-landing/
├── assets/
│   ├── images/        # Imágenes (png, webp)
│   ├── svgs/          # Íconos SVG
│   └── styles/        # Hojas de estilo CSS
├── context/           # Documentación del proyecto
├── index.html         # Punto de entrada único
└── script.js          # Lógica JS (toggle de tema)
```

---

## Secciones de la página

| Sección | Descripción |
|---|---|
| Hero | Titular principal + CTA |
| Cómo funciona | Proceso en 3 pasos |
| Características | 6 tarjetas de funcionalidades |
| Precios | 3 planes: Free / Pro / Team |
| Testimonios | Opiniones de usuarios |
| Footer | Enlaces, legal y redes |

---

## Funcionalidades técnicas

- **Dark/Light mode** — toggle persistido en `localStorage` con clave `snaplog-theme`
- **Responsive** — breakpoints en `768px` (móvil) y `1024px` (tablet)
- **Accesibilidad** — atributos ARIA, navegación por teclado, contraste WCAG 2.1 Nivel A

---

## Curso

**UTN — ISW-521 Programación en Ambiente Web I**
Laboratorio #1 · 15% de la nota final
