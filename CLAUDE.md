# CLAUDE.md — OripioFin Smart DCA Portfolio Tracker

This file provides context and conventions for AI agents working on this project.

---

## Project Purpose

This is a **UI design/prototype repository** for OripioFin — an institutional DCA (Dollar-Cost Averaging) portfolio tracker. It is a collection of standalone HTML screens, not a full web application. There is no backend, no build system, and no package manager.

---

## Repository Layout

Each directory represents one **screen/feature** of the product. Directories ending in `_dark` are dark-theme variants of their light-theme counterpart.

```
<feature_name>/              # Light theme — screenshot only (no HTML yet)
    assets/screen.png

<feature_name>_dark/         # Dark theme — fully implemented
    index.html               # Self-contained HTML page
    assets/screen.png        # Reference screenshot of the design
```

### All Screens

| Directory | Description |
|---|---|
| `oripiofin_landing_page_dark` | Marketing / landing page |
| `oripiofin_main_dashboard_dark` | Primary app dashboard |
| `investment_allocation_dark` | Asset allocation breakdown |
| `portfolio_analytics_dark` | Performance charts & analytics |
| `transaction_history_dark` | Transaction log & history |
| `recurring_dca_settings_dark` | DCA schedule configuration |
| `personalized_onboarding_dark` | User onboarding flow |
| `subscription_management_dark` | Billing & plan management |
| `dca_dashboard_recap` | DCA summary recap (screenshot only) |

---

## Tech Stack

- **HTML5** — all pages are single-file, no frameworks
- **TailwindCSS** — loaded via CDN (`https://cdn.tailwindcss.com?plugins=forms,container-queries`)
  - Config is inlined via `<script id="tailwind-config">tailwind.config = {...}</script>` in each HTML file
  - Do NOT use a separate `tailwind.config.js` file
- **Google Fonts** — Work Sans, Geist, Hanken Grotesk, Inter, JetBrains Mono
- **Material Symbols Outlined** — icon font via Google Fonts CDN

---

## Design System

Two design systems are documented in the repo:

| File | Theme | Fonts |
|---|---|---|
| `investment_management_design_system/DESIGN.md` | Dark | Work Sans + Geist |
| `investment_management_system/DESIGN.md` | Light | Hanken Grotesk + Inter + JetBrains Mono |

### Dark Theme Tokens (primary)
- `background`: `#051424`
- `primary`: `#8bd6b6` (teal green)
- `primary-container`: `#065f46` (forest green)
- `on-surface`: `#d4e4fa` (off-white)
- Surface scale: `#010f1f` → `#0d1c2d` → `#122131` → `#1c2b3c` → `#273647`

### Spacing
- Base unit: **4px**
- Scale: `xs=4px`, `sm=8px`, `md=16px`, `lg=24px`, `xl=32px`
- Max width: `1440px`, Gutter: `24px`, Margin: `32px`

### Border Radius
- Default: `0.125rem` | `lg: 0.25rem` | `xl: 0.5rem` | `full: 0.75rem`

---

## Conventions

### File Naming
- HTML entry point is always `index.html` (never `code.html` or anything else)
- Images always live in `assets/` subdirectory
- Screenshots of the design are always named `screen.png`

### Adding a New Screen
1. Create a new directory: `<feature_name>_dark/`
2. Add `index.html` — copy the Tailwind config block from an existing screen to stay consistent
3. Add `assets/screen.png` if a design reference exists
4. Update `README.md` with the new screen entry

### Modifying Existing Screens
- Keep the inline `tailwind.config` block at the top of the `<head>` — do not move it to external files
- All color tokens must match the design system in `investment_management_design_system/DESIGN.md`
- Use `dark` class on `<html>` for dark mode: `<html class="dark" lang="en">`

---

## Do Not

- Do not add `package.json`, `node_modules`, or any build tooling
- Do not extract CSS to external `.css` files unless explicitly asked
- Do not rename `screen.png` — it is the standard preview filename
- Do not move `index.html` out of its feature directory
- Do not use inline `style=""` attributes — use Tailwind utility classes instead
