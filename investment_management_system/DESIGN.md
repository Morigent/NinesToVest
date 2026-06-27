---
name: Investment Management System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#3f4944'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#6f7973'
  outline-variant: '#bec9c2'
  surface-tint: '#1b6b51'
  primary: '#004532'
  on-primary: '#ffffff'
  primary-container: '#065f46'
  on-primary-container: '#8bd6b7'
  inverse-primary: '#8bd6b6'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#3a3d3e'
  on-tertiary: '#ffffff'
  tertiary-container: '#515455'
  on-tertiary-container: '#c6c8c9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f2d1'
  primary-fixed-dim: '#8bd6b6'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#00513b'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
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
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  card-gap: 24px
  section-margin: 48px
---

## Brand & Style

The design system is engineered for the "casual yet serious" investor—individuals who require institutional-grade clarity without the complexity of a professional terminal. The brand personality is **composed, analytical, and dependable**. It avoids the frenetic energy of day-trading apps in favor of a long-term, high-integrity aesthetic.

The visual style is **Modern Corporate with Tactile accents**. It leverages significant whitespace to reduce cognitive load, combined with a sophisticated card-based architecture. Subtle depth through soft shadows and precise border treatments ensures that financial data is segregated and easily digestible, evoking the feeling of a well-organized physical ledger reimagined for the digital age.

## Colors

The palette is anchored by **Deep Forest Green**, representing stability and growth. This is complemented by a vibrant **Emerald** for active states and positive performance indicators.

- **Primary (Forest Green):** Used for navigation backgrounds, primary actions, and brand identification.
- **Secondary (Emerald):** Reserved for "Success" states, positive trend lines, and "Up" market movements.
- **Neutrals:** A range of cool greys (from `#F9FAFB` to `#111827`) provides the structural scaffolding. Backgrounds utilize the lightest grey to allow white cards to "pop" with clarity.
- **Accents:** A soft crimson (`#EF4444`) is used sparingly for negative performance and critical alerts, ensuring it doesn't overwhelm the primary green narrative.

## Typography

This design system utilizes a tri-font strategy to balance character with utility:
1. **Hanken Grotesk** for headlines: Provides a sharp, contemporary professional feel that distinguishes the product from generic SaaS tools.
2. **Inter** for body text: Ensures maximum readability for long-form data descriptions and settings.
3. **JetBrains Mono** for financial figures: A monospaced font is critical for comparing currency values across tables and cards, as it ensures decimal points align perfectly.

**Scaling Note:** On mobile, display sizes should decrease by approximately 20%, while body sizes remain constant to ensure accessibility.

## Layout & Spacing

The system employs a **Fluid Grid with Fixed Constraints**. Content is housed within a max-width container of 1440px for desktop to prevent line lengths from becoming unreadable.

- **The 8px Rhythm:** All spacing (padding, margins, gaps) must be a multiple of 8px.
- **Grid:** A 12-column grid is used for desktop, transitioning to 8 columns for tablets and 4 columns for mobile.
- **Card-Based Architecture:** Financial modules are encapsulated in cards. These cards should use a 24px internal padding to provide "breathing room" for dense data.
- **Sidebars:** The primary navigation resides in a fixed-width left sidebar (280px) on desktop, which collapses into a bottom bar or hamburger menu on mobile.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering and Soft Ambient Shadows**. 

- **Level 0 (Background):** Solid `#F9FAFB`.
- **Level 1 (Cards/Sidebar):** Pure white `#FFFFFF` with a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.05)) and a subtle 1px border in `#E5E7EB`.
- **Level 2 (Modals/Popovers):** Higher elevation with a more pronounced shadow (0px 12px 32px rgba(0, 0, 0, 0.1)) to indicate temporary interaction.
- **Active States:** Subtle inner shadows or "pressed" effects are used to give buttons a tactile feel, reinforcing the professional hardware-inspired aesthetic.

## Shapes

The design system uses a **Rounded** shape language (`0.5rem` or `8px` base) to soften the "coldness" of financial data while maintaining a professional structure.

- **Small Components (Buttons, Inputs):** 8px radius.
- **Medium Components (Cards, Modals):** 16px (1rem) radius.
- **Large Components (Main Container Wrappers):** 24px (1.5rem) radius.
- **Charts:** Bar charts and progress bars should feature fully rounded (pill) caps to feel modern and friendly.

## Components

### Buttons
Primary buttons use the Forest Green background with white text. Hover states should transition to a slightly lighter Emerald. Secondary buttons use a transparent background with a Forest Green border.

### Cards
Cards are the primary data vehicle. Every card must have a consistent header (Label + Icon) and a clear "Primary Value" in JetBrains Mono. Performance "pills" (showing % change) should be nested within the card body.

### Input Fields
Inputs use a subtle grey background (`#F3F4F6`) with an 8px radius. On focus, they transition to a white background with a 2px Emerald border.

### Status Indicators
Positive trends are Emerald Green with a "+" prefix. Negative trends are Crimson Red with a "-" prefix. These should always be accompanied by an up/down arrow icon for accessibility.

### Tables
Tables should avoid heavy vertical borders. Use horizontal dividers in `#F3F4F6` and ensure row heights are at least 56px to allow for comfortable scanning of figures.