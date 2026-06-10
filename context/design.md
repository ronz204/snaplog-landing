---
name: Technical Precision
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#bccbb9'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#869585'
  outline-variant: '#3d4a3d'
  surface-tint: '#4ae176'
  primary: '#4be277'
  on-primary: '#003915'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#006e2f'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#ffb5ab'
  on-tertiary: '#60130d'
  tertiary-container: '#ff8b7c'
  on-tertiary-container: '#76231b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#7f2a21'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
  surface-dark: '#0f172a'
  surface-light: '#1e293b'
  status-success: '#22c55e'
  status-error: '#ef4444'
  status-warning: '#f59e0b'
  text-primary: '#f8fafc'
  text-secondary: '#94a3b8'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
---

## Brand & Style
The design system is engineered to evoke a sense of high-performance reliability and "dev-first" utility. It targets independent developers and small teams who prioritize speed and efficiency over complex enterprise dashboards. 

The aesthetic is **Corporate Modern with a Technical Edge**, characterized by extreme clarity, generous whitespace, and high-impact functional accents. It utilizes a predominantly dark environment to reduce eye strain during long coding sessions, punctuated by vibrant highlights that signal system health and activity. The visual narrative is "always-on" monitoring—crisp, focused, and unencumbered by unnecessary decoration.

## Colors
The palette is centered on a high-contrast relationship between the deep Navy background and the Electric Green primary. This Green is not just a brand color; it is a functional indicator of "Up" status, making the brand synonymous with uptime.

- **Primary (Electric Green):** Reserved for primary actions, success states, and healthy uptime metrics.
- **Secondary (Dark Navy):** Used for the primary background and structural containment.
- **Neutral (Light Gray):** Applied to primary text and high-contrast borders to ensure legibility.
- **Functional Accents:** While the core palette is minimal, a critical Red and Amber are utilized strictly for "Down" and "Degraded" states to ensure immediate recognition of issues.

## Typography
This design system uses a dual-font strategy to balance approachability with technical precision. 

**Hanken Grotesk** serves as the primary typeface for headlines and body copy. Its clean, sharp geometry feels modern and engineered, yet highly legible. 

**JetBrains Mono** is used for labels, status indicators, and data-driven values (like response times and URLs). This introduces a "code-like" atmosphere that resonates with the developer audience and emphasizes the tool's utility. 

Key metrics should always use tabular figures (monospaced) to prevent layout shifting during real-time data updates.

## Layout & Spacing
The layout follows a strict 8px grid system to ensure mathematical harmony. A 12-column fluid grid is used for desktop layouts, transitioning to a single-column stack on mobile devices.

- **Margins:** Large outer margins on desktop (40px) create a focused "command center" feel.
- **Rhythm:** Use consistent vertical rhythm by applying spacing in multiples of 8px (16, 24, 32, 64).
- **Density:** The dashboard areas use a tighter spacing model (Compact) to maximize information density, while the landing page sections use a spacious model (Relaxed) to improve scannability.

## Elevation & Depth
In this design system, depth is conveyed through **Tonal Layering** rather than traditional shadows. This maintains a "flat-tech" aesthetic that feels fast and lightweight.

- **Level 0 (Base):** Dark Navy (#0f172a) for the main application background.
- **Level 1 (Cards/Containers):** A slightly lighter Navy (#1e293b) with a 1px border (#334155) to define interactive zones.
- **Level 2 (Popovers/Modals):** High-contrast surfaces with a subtle "Electric Green" glow (20% opacity) to indicate active focus.
- **Borders:** Use crisp, 1px solid borders for all containers. Avoid blurs unless indicating a temporary overlay state.

## Shapes
The shape language is "Soft-Tech." While the brand is technical, the use of a 0.25rem (4px) base radius prevents the UI from feeling aggressive or dated. 

- **Components:** Standard buttons and input fields use a 4px radius.
- **Status Indicators:** Use small circular dots for "heartbeat" animations.
- **Feature Cards:** Use the `rounded-lg` (8px) setting to create a distinct container feel on the landing page.

## Components

- **Buttons:** Primary buttons are solid Electric Green with Dark Navy text. Secondary buttons are outlined (ghost) with a 1px Light Gray border. All buttons should have a distinct "active" state where the background color shifts slightly or adds a subtle inner glow.
- **Input Fields:** Designed to look like terminal inputs. Dark backgrounds, Light Gray text, and a 1px border that turns Electric Green on focus.
- **Status Chips:** Small, pill-shaped indicators. For "Up" states, use a green background with 10% opacity and a solid green dot. 
- **Uptime Cards:** These are the primary dashboard element. They feature a 1px border, a monospaced URL title, and a sparkline visualization showing the last 24 hours of response time.
- **Alert Banners:** High-visibility strips that appear at the top of the viewport. Successes are Green; failures are Red. They should be "sticky" until dismissed.
- **Lists:** Data lists use zebra-striping with subtle tonal shifts between #0f172a and #1e293b to improve horizontal readability of log data.