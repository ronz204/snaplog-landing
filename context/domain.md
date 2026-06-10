# Domain — SnapLog (Micro SaaS)

## Elevator Pitch
**SnapLog** is a lightweight uptime & response-time monitor for indie developers and small teams.
You paste a URL, it pings it every minute, and you get instant Slack/email alerts when something goes down.
No dashboards to configure, no agents to install — just paste and monitor.

---

## Problem
Indie devs and micro-startups run side projects on cheap VPS/shared hosting that dies silently.
They find out their app is down from an angry user tweet, not from an alert.

## Solution
A dead-simple SaaS where you add a URL in seconds and get notified immediately on failure.
Positioned as "UptimeRobot for people who hate setting things up."

---

## Target Audience
- Solo developers with side projects
- Bootstrapped startups (1–5 people)
- Freelancers managing client sites

---

## Landing Page Sections

| Section | Purpose | Layout |
|---|---|---|
| **Hero** | Headline + CTA ("Start monitoring free") | Flexbox centered column |
| **How It Works** | 3-step visual: Add URL → Monitor → Get alerted | CSS Grid 3-col |
| **Features** | 6 feature cards (fast setup, Slack alerts, public status page, 50 monitors free, global checks, history) | CSS Grid 2×3 |
| **Pricing** | 3 tiers: Free / Pro $9/mo / Team $29/mo | CSS Grid 3-col |
| **Testimonials** | 3 fake quotes from happy devs | Flexbox row |
| **CTA Banner** | Final push to sign up | Flexbox centered |
| **Footer** | Links, legal, social | CSS Grid 4-col |

---

## Branding
- **Name:** SnapLog
- **Tagline:** *"Know before your users do."*
- **Palette:** Dark navy `#0f172a` + Electric green `#22c55e` + Light gray `#f8fafc`
- **Tone:** Technical but friendly, minimal copy

---

## Web Storage Feature
**Dark / Light mode toggle** persisted in `localStorage`.
- Key: `snaplog-theme`
- Values: `"dark"` | `"light"`
- Applied via a class on `<body>` before first paint to avoid flash

---

## Fictional Company Details
- **Company:** SnapLog Inc.
- **Founded:** 2023 — San José, Costa Rica
- **Team:** "Built by developers, for developers" (2 friends)
- **Status:** In public beta — free tier available now