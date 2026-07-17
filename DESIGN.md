---
name: Kindred Paws
colors:
  surface: '#fbf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fbf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ec'
  surface-container: '#f0eee6'
  surface-container-high: '#eae8e0'
  surface-container-highest: '#e4e3db'
  on-surface: '#1b1c17'
  on-surface-variant: '#404947'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1e9'
  outline: '#707977'
  outline-variant: '#bfc8c6'
  surface-tint: '#2f6761'
  primary: '#2f6761'
  on-primary: '#ffffff'
  primary-container: '#6da59e'
  on-primary-container: '#003a35'
  inverse-primary: '#98d1ca'
  secondary: '#9c4141'
  on-secondary: '#ffffff'
  secondary-container: '#fe8e8b'
  on-secondary-container: '#762527'
  tertiary: '#765a05'
  on-tertiary: '#ffffff'
  tertiary-container: '#b89742'
  on-tertiary-container: '#413000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4eee6'
  primary-fixed-dim: '#98d1ca'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#114f4a'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410006'
  on-secondary-fixed-variant: '#7d2a2c'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#e7c268'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4400'
  background: '#fbf9f1'
  on-background: '#1b1c17'
  surface-variant: '#e4e3db'
typography:
  display:
    fontFamily: Nunito Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Nunito Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Nunito Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Nunito Sans
    fontSize: 24px
    fontWeight: '700'
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
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
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is built to evoke a sense of "safe warmth"—blending the reliability of a professional medical service with the approachability of a local community pet-sitter. The target audience includes urban pet owners who view their animals as family members and seek a service that feels nurturing, modern, and transparent.

The aesthetic follows a **Contemporary Softness** style. It leverages generous whitespace, organic rounded forms, and a tactile quality that feels physical yet digital-first. By avoiding harsh edges and stark contrasts, the UI creates a low-anxiety environment for users managing their pets' well-being.

## Colors
This design system utilizes a palette rooted in natural, calming tones.
- **Background (#FFFDF5):** A warm off-white that reduces eye strain and feels more inviting than pure clinical white.
- **Primary (#6DA59E):** A soft teal used for trust-building elements, primary actions, and brand presence.
- **Secondary (#F28482):** A muted coral used for highlights, notifications, or "heart" motifs to add warmth.
- **Tertiary (#E9C46A):** A mustard yellow reserved for attention-grabbing accents like badges or secondary alerts.
- **Neutrals:** Dark charcoal is used for text instead of black to maintain the soft aesthetic.

## Typography
The typographic hierarchy prioritizes legibility and friendliness. 
- **Headings:** Nunito Sans provides a slightly rounded, humanist feel that aligns with the "warmth" of the brand. Use Bold (700) or ExtraBold (800) for headlines to ensure a strong visual anchor.
- **Body:** Inter is used for all long-form text and UI labels. Its neutral, systematic nature ensures that functional information is processed quickly and clearly.
- **Scaling:** On mobile, reduce display and large headline sizes by 15-20% to prevent excessive line wrapping while maintaining the characteristic bold weights.

## Layout & Spacing
The layout follows a **Fluid Grid** model with an emphasis on "Safe Breathing Room."
- **Grid:** A 12-column system for desktop, 8-column for tablet, and 4-column for mobile.
- **Rhythm:** Use an 8px base unit for all margins and padding (8, 16, 24, 32, 48, 64).
- **Margins:** Desktop views should maintain generous outer margins (40px) to keep content centered and focused. Mobile views tighten this to 16px to maximize screen real estate.
- **Reflow:** Components like "Pet Cards" should transition from a multi-column grid on desktop to a single-column vertical stack on mobile.

## Elevation & Depth
Depth is achieved through **Ambient Shadows** and **Tonal Layering** rather than hard borders.
- **Shadows:** Use extremely soft, diffused shadows with a slight tint of the Primary color (Teal) to prevent them from looking "dirty" or gray. (e.g., `box-shadow: 0 8px 30px rgba(109, 165, 158, 0.12)`).
- **Surfaces:** Use a two-tier system. The base is the off-white background (#FFFDF5). Raised cards and containers should be pure white (#FFFFFF) to make them pop subtly against the warm background.
- **Interactions:** On hover, elements should lift slightly (y-axis shift) and the shadow should become slightly more diffused to mimic physical elevation.

## Shapes
The shape language is defined by **High Circularity**.
- **Components:** Standard buttons and input fields use a 12px-16px radius.
- **Cards:** Large containers use `rounded-xl` (24px) to emphasize the soft, friendly aesthetic.
- **Pet Avatars:** Use 1:1 aspect ratio with full `rounded-full` (circle) cropping to keep pet photos looking consistent and friendly.
- **Icons:** Use rounded-cap icons (2pt stroke width) to match the curvature of the typography.

## Components
- **Buttons:** Primary buttons use the Teal background with White text and a 16px radius. Secondary buttons should use a ghost style (Teal border) or the Coral accent for high-importance calls to action (e.g., "Book Now").
- **Cards:** Cards are pure white with a 24px corner radius and an ambient shadow. They should include 24px of internal padding to ensure content doesn't feel cramped.
- **Input Fields:** Use a light-gray border (#E0E0E0) that switches to Primary Teal on focus. Use a 12px radius.
- **Chips/Badges:** Use Tertiary Mustard (#E9C46A) or Secondary Coral (#F28482) with low-opacity backgrounds and high-saturation text for status indicators (e.g., "Vaccinated", "Urgent").
- **Lists:** Use generous vertical spacing (16px+) between list items, separated by very faint 1px dividers or simple whitespace.
- **Pet Profiles:** Always feature a 1:1 circular image of the animal alongside their name in `headline-md`.