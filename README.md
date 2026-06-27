# NineToVest — Smart DCA Portfolio Tracker

> **Institutional-grade investment UI** — a collection of dark and light mode screen designs for a Dollar-Cost Averaging (DCA) portfolio management platform.

---

## Overview

This project contains a set of standalone HTML UI screens for **NineToVest**, a financial product designed for the serious yet accessible investor. Each screen is a self-contained page built with **TailwindCSS** (CDN) and represents one feature area of the full application.

There are two visual themes across the screens:
- **Light mode** — clean, professional surfaces with deep forest green accents
- **Dark mode** — deep navy/charcoal surfaces with teal-green highlights (`_dark` directories)

---

## Project Structure

```
smart_dca_portfolio_tracker/
│
├── NineToVest_landing_page/              # Landing page — light theme
│   └── assets/screen.png
│
├── NineToVest_landing_page_dark/         # Landing page — dark theme
│   ├── index.html
│   └── assets/screen.png
│
├── NineToVest_main_dashboard/            # Main dashboard — light theme
│   └── assets/screen.png
│
├── NineToVest_main_dashboard_dark/       # Main dashboard — dark theme
│   ├── index.html
│   └── assets/screen.png
│
├── investment_allocation/               # Investment allocation view — light theme
│   └── assets/screen.png
│
├── investment_allocation_dark/          # Investment allocation view — dark theme
│   ├── index.html
│   └── assets/screen.png
│
├── portfolio_analytics/                 # Portfolio analytics — light theme
│   └── assets/screen.png
│
├── portfolio_analytics_dark/            # Portfolio analytics — dark theme
│   ├── index.html
│   └── assets/screen.png
│
├── transaction_history/                 # Transaction history — light theme
│   └── assets/screen.png
│
├── transaction_history_dark/            # Transaction history — dark theme
│   ├── index.html
│   └── assets/screen.png
│
├── recurring_dca_settings/              # Recurring DCA configuration — light theme
│   └── assets/screen.png
│
├── recurring_dca_settings_dark/         # Recurring DCA configuration — dark theme
│   ├── index.html
│   └── assets/screen.png
│
├── personalized_onboarding/             # Onboarding flow — light theme
│   └── assets/screen.png
│
├── personalized_onboarding_dark/        # Onboarding flow — dark theme
│   ├── index.html
│   └── assets/screen.png
│
├── subscription_management/             # Subscription & billing — light theme
│   └── assets/screen.png
│
├── subscription_management_dark/        # Subscription & billing — dark theme
│   ├── index.html
│   └── assets/screen.png
│
├── dca_dashboard_recap/                 # DCA summary & recap view
│   └── assets/screen.png
│
├── investment_management_system/        # Light theme design system reference
│   └── DESIGN.md
│
└── investment_management_design_system/ # Dark theme design system reference
    └── DESIGN.md
```

---

## Screens

| Screen | Theme | HTML | Preview |
|--------|-------|------|---------|
| Landing Page | Dark | `NineToVest_landing_page_dark/index.html` | `assets/screen.png` |
| Main Dashboard | Dark | `NineToVest_main_dashboard_dark/index.html` | `assets/screen.png` |
| Investment Allocation | Dark | `investment_allocation_dark/index.html` | `assets/screen.png` |
| Portfolio Analytics | Dark | `portfolio_analytics_dark/index.html` | `assets/screen.png` |
| Transaction History | Dark | `transaction_history_dark/index.html` | `assets/screen.png` |
| Recurring DCA Settings | Dark | `recurring_dca_settings_dark/index.html` | `assets/screen.png` |
| Personalized Onboarding | Dark | `personalized_onboarding_dark/index.html` | `assets/screen.png` |
| Subscription Management | Dark | `subscription_management_dark/index.html` | `assets/screen.png` |

---

## Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure & semantic markup |
| **TailwindCSS** (CDN) | Utility-first styling with custom config |
| **Work Sans** | Headlines & primary UI text |
| **Geist** | Labels & tabular financial data |
| **Hanken Grotesk** | Headlines (light theme) |
| **Inter** | Body text (light theme) |
| **JetBrains Mono** | Numerical financial figures (light theme) |
| **Material Symbols Outlined** | Icons |

---

## Design System

### Dark Theme
- **Background:** Deep navy `#051424`
- **Primary accent:** Teal green `#8bd6b6`
- **Primary container:** Forest green `#065f46`
- **Surface layers:** `#0d1c2d` → `#122131` → `#1c2b3c` → `#273647`
- **Text:** Off-white `#d4e4fa`

### Light Theme
- **Background:** Near-white `#f9f9ff`
- **Primary:** Deep forest green `#004532`
- **Secondary:** Emerald `#006c49`
- **Surface layers:** White cards on light grey base

### Spacing Scale (both themes)
`4px` · `8px` · `16px` · `24px` · `32px` — all multiples of **4px base unit**

### Grid
12-column at **1440px max-width**, fluid at tablet/mobile

---

## Getting Started

Each `index.html` is a **fully self-contained page** — no build step required.

Simply open any screen in a browser:

```bash
# Open directly in browser (Windows)
start NineToVest_landing_page_dark/index.html

# Or use a local dev server (e.g., VS Code Live Server extension)
```

> All dependencies (TailwindCSS, fonts, icons) are loaded via CDN — an internet connection is required.

---

## Naming Convention

```
<feature>_<theme>/
    index.html          ← main page markup
    assets/
        screen.png      ← design reference / screenshot
```
