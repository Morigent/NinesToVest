---
name: Investment Management Design System
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#bec9c2'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#89938d'
  outline-variant: '#3f4944'
  surface-tint: '#8bd6b6'
  primary: '#8bd6b6'
  on-primary: '#003828'
  primary-container: '#065f46'
  on-primary-container: '#8bd6b7'
  inverse-primary: '#1b6b51'
  secondary: '#b9c7e0'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d2'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#495468'
  on-tertiary-container: '#bdc8e0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a6f2d1'
  primary-fixed-dim: '#8bd6b6'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#00513b'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Work Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  data-tabular:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin: 32px
  max-width: 1440px
---

## Brand & Style

The design system is engineered for high-stakes institutional finance, prioritizing authority, precision, and clarity. The brand personality is conservative yet technologically advanced, evoking the feeling of a modern trading floor or a private wealth management suite. 

The aesthetic follows a **Corporate/Modern** direction adapted for high-contrast dark environments. It utilizes a "Deep Surface" philosophy where depth is communicated through subtle tonal shifts rather than aggressive shadows. The interface remains intentionally restrained, using white space (or "dark space") to reduce cognitive load during complex data analysis. Every element is designed to feel intentional, sturdy, and reliable, ensuring that users feel in total control of their financial data.

## Colors

The palette is anchored by a deep **Forest Green (#065f46)**, representing growth, stability, and institutional heritage. This primary color is used sparingly for call-to-action elements and success states to maintain its impact.

The background architecture is built on **Deep Navies and Charcoals**. The base canvas uses a near-black navy to provide maximum contrast for data points. Surface layers use slightly lighter slate tones to create a visual hierarchy. Text is rendered in crisp, off-white "Zinc" shades to prevent the eye strain often associated with pure white-on-black text, while maintaining a high-contrast ratio that meets accessibility standards for professional tools.

## Typography

This design system utilizes **Work Sans** for its primary UI and editorial needs. Its grounded, professional character ensures readability across complex forms and dashboards. For headlines, we employ a tighter letter spacing and semi-bold weights to command attention without appearing aggressive.

A secondary font, **Geist**, is introduced specifically for labels and numerical data. As a technical, developer-friendly typeface, it provides the "monospaced" precision required for financial figures, ensuring that columns of numbers align perfectly and remain legible at small sizes. This distinction between "content" (Work Sans) and "data" (Geist) is a core pillar of the system's information architecture.

## Layout & Spacing

The layout is based on a **12-column fixed grid** for desktop, optimized for a 1440px viewport. This provides a structured framework for complex dashboards. On tablet and mobile, the grid becomes fluid, transitioning to 8 and 4 columns respectively.

A strict **8px spacing scale** governs all spatial relationships. In a dark-themed investment tool, generous padding (MD to LG) is essential between data-heavy components to prevent visual "clustering" and allow the eye to rest. For internal component spacing, such as within list items or table cells, the scale drops to 4px (XS) to maintain information density where necessary.

## Elevation & Depth

In this dark-mode system, elevation is conveyed through **Tonal Layering** rather than traditional drop shadows. As components move "closer" to the user, their surface color becomes progressively lighter:

1.  **Level 0 (Canvas):** #020617 (The deepest layer).
2.  **Level 1 (Cards/Panels):** #0f172a (Subtle lift).
3.  **Level 2 (Modals/Popovers):** #1e293b (Highest lift).

Shadows are used only on the highest elevation levels (Level 2) and are extremely subtle—using a large blur (24px) with a very low opacity (40%) black tint to provide a soft "glow" of depth rather than a hard edge. **Low-contrast outlines** (#334155) are applied to all cards and input fields to maintain structural definition against the dark background, ensuring the UI doesn't feel "muddy."

## Shapes

The design system adopts a **Soft (0.25rem)** roundedness approach. This subtle rounding of corners strikes a balance between the clinical coldness of sharp 0px corners and the overly casual nature of larger radii. 

This 4px base radius applies to buttons, input fields, and cards. Larger containers, such as main dashboard panels, may use the `rounded-lg` (8px) token to create a nested visual harmony. This geometric precision reinforces the institutional feel of the product, suggesting a "built-to-last" structural integrity.

## Components

### Buttons
*   **Primary:** Solid Forest Green (#065f46) with white text. No gradient.
*   **Secondary:** Outline style using the Slate border (#334155) with High-Emphasis text.
*   **Tertiary/Ghost:** No background or border; used for low-priority actions in headers.

### Data Tables
Tables are the heart of the system. Headers use the **Label-MD** typography (Geist, Uppercase) with a subtle bottom border. Rows have a subtle hover state (#1e293b) and use **Data-Tabular** typography to ensure financial figures are perfectly legible.

### Input Fields
Fields utilize the Surface Primary color (#0f172a) with a 1px Slate border. On focus, the border transitions to Forest Green with a subtle outer glow to indicate activity without breaking the dark aesthetic.

### Chips & Badges
Used for status indicators (e.g., "Active Portfolio"). They use a low-opacity background tint of the status color (e.g., Success, Warning, Error) with a high-saturation text label to ensure visibility against the dark surfaces.

### Cards
Cards are defined by the Level 1 surface color and a 1px border. They should not use shadows unless they are "floating" (e.g., a draggable widget). Padding within cards should default to 24px (LG) to ensure data density remains professional and readable.