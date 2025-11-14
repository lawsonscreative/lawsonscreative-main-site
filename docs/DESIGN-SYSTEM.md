# Lawsons Creative Design System

**Version:** 1.0.0
**Last Updated:** 14 November 2025

---

## Overview

This design system provides a systematic approach to visual design across the Lawsons Creative website. All design tokens are defined as CSS custom properties in `app/globals.css` for consistency and maintainability.

---

## Colour System

### Primary Colours
- **Primary:** `var(--color-primary)` - `#00E676` - Main CTAs, nav CTA, "Most popular" badges
- **Primary Hover:** `var(--color-primary-hover)` - `#00C965` - Hover state for primary colour
- **Primary Light:** `var(--color-primary-light)` - `#69F0AE` - Light accent

### Text Colours
- **Text Primary:** `var(--color-text-primary)` - `#0A2540` - Headings, important text (navy)
- **Text Secondary:** `var(--color-text-secondary)` - `#475569` - Body text (slate)
- **Text Tertiary:** `var(--color-text-tertiary)` - `#64748B` - Supporting text (light slate)

### Background Colours
- **Background Primary:** `var(--color-background-primary)` - `#ffffff` - Main background (white)
- **Background Secondary:** `var(--color-background-secondary)` - `#F1F5F9` - Soft section breaks
- **Background Tertiary:** `var(--color-background-tertiary)` - `#E2E8F0` - Subtle variations

### Accent Colours
- **Accent Navy:** `var(--color-accent-navy)` - `#0A2540` - Primary buttons, headers
- **Accent Navy Dark:** `var(--color-accent-navy-dark)` - `#051828` - Hover states

### Feedback Colours
- **Success:** `var(--color-success)` - `#22C55E` - Success messages, form validation
- **Success Light:** `var(--color-success-light)` - `#DCFCE7` - Success backgrounds
- **Error:** `var(--color-error)` - `#EF4444` - Error messages, form validation
- **Error Light:** `var(--color-error-light)` - `#FEE2E2` - Error backgrounds
- **Warning:** `var(--color-warning)` - `#F97316` - Warning messages
- **Warning Light:** `var(--color-warning-light)` - `#FFEDD5` - Warning backgrounds

### Border Colours
- **Border Light:** `var(--color-border-light)` - `#E2E8F0` - Subtle borders
- **Border Medium:** `var(--color-border-medium)` - `#CBD5E1` - Standard borders
- **Border Dark:** `var(--color-border-dark)` - `#94A3B8` - Prominent borders

### Accessibility
All colour combinations meet WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text).

---

## Typography System

### Font Families
- **Body:** `var(--font-body)` - 'Plus Jakarta Sans', system-ui, sans-serif
- **Heading:** `var(--font-heading)` - 'Space Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif

### Font Sizes
| Variable | Size | Pixel | Usage |
|----------|------|-------|-------|
| `--text-xs` | 0.875rem | 14px | Small/meta text, captions |
| `--text-sm` | 0.9375rem | 15px | Helper text, form labels |
| `--text-base` | 1rem | 16px | Body text (default) |
| `--text-lg` | 1.0625rem | 17px | Large body text, emphasized content |
| `--text-xl` | 1.25rem | 20px | Subheadings, H4 |
| `--text-2xl` | 1.5rem | 24px | H3 headings |
| `--text-3xl` | 1.875rem | 30px | H2 mobile |
| `--text-4xl` | 2.25rem | 36px | H1 mobile, H2 desktop |
| `--text-5xl` | 3rem | 48px | H1 desktop |
| `--text-6xl` | 3.75rem | 60px | Hero H1 |

### Line Heights
- **Tight:** `var(--leading-tight)` - 1.25 - Headings
- **Snug:** `var(--leading-snug)` - 1.375 - Tight body text
- **Normal:** `var(--leading-normal)` - 1.5 - Standard body text
- **Relaxed:** `var(--leading-relaxed)` - 1.625 - Comfortable reading (default body)
- **Loose:** `var(--leading-loose)` - 1.75 - Very spacious text

### Font Weights
- **Normal:** `var(--font-normal)` - 400 - Body text
- **Medium:** `var(--font-medium)` - 500 - Emphasized body
- **Semibold:** `var(--font-semibold)` - 600 - Subheadings, buttons
- **Bold:** `var(--font-bold)` - 700 - Headings
- **Extrabold:** `var(--font-extrabold)` - 800 - Hero headings

### Heading Defaults
- `<h1>`: font-size scales from `--text-4xl` (mobile) to `--text-6xl` (desktop), font-weight `--font-extrabold`
- `<h2>`: font-size scales from `--text-3xl` (mobile) to `--text-4xl` (desktop), font-weight `--font-bold`
- `<h3>`: font-size `--text-2xl`, font-weight `--font-semibold`
- `<h4>`: font-size `--text-xl`, font-weight `--font-semibold`

All headings use `var(--font-heading)` and `var(--leading-tight)` by default.

---

## Spacing System

### Base Spacing Scale
| Variable | Size | Pixel | Usage |
|----------|------|-------|-------|
| `--space-1` | 0.25rem | 4px | Minimal spacing |
| `--space-2` | 0.5rem | 8px | Tight spacing |
| `--space-3` | 0.75rem | 12px | Button padding (vertical) |
| `--space-4` | 1rem | 16px | Base spacing unit |
| `--space-5` | 1.25rem | 20px | Comfortable spacing |
| `--space-6` | 1.5rem | 24px | Medium spacing |
| `--space-8` | 2rem | 32px | Large spacing, button padding (horizontal) |
| `--space-10` | 2.5rem | 40px | Section internal spacing |
| `--space-12` | 3rem | 48px | Large gaps |
| `--space-16` | 4rem | 64px | Section breaks |
| `--space-20` | 5rem | 80px | Large section breaks |
| `--space-24` | 6rem | 96px | Major page sections |

### Section Padding
- **Mobile:** `var(--section-padding-y-sm)` - 4rem (64px)
- **Tablet:** `var(--section-padding-y-md)` - 5rem (80px)
- **Desktop:** `var(--section-padding-y-lg)` - 6rem (96px)

Use the `.section-padding` class for consistent vertical section spacing across breakpoints.

---

## Button System

### Primary Button (`.btn-primary`)
**Usage:** Main conversion actions - "Book a free consultation", "Send message"
- **Background:** `var(--color-accent-navy)` (#0A2540)
- **Text:** White
- **Padding:** `var(--space-3)` vertical, `var(--space-8)` horizontal (12px/32px)
- **Border Radius:** `var(--border-radius-sm)` (8px)
- **Font Weight:** `var(--font-semibold)` (600)
- **States:**
  - Hover: Darker background, scale 1.02, shadow-lg
  - Active: Scale 0.98
  - Focus: 3px primary colour outline with 2px offset

**Rule:** Maximum one primary button per section/screen.

### Secondary Button (`.btn-secondary`)
**Usage:** Primary CTA when standing alone or on dark backgrounds
- **Background:** `var(--color-primary)` (#00E676 - lime)
- **Text:** `var(--color-accent-navy)` (navy)
- **Padding:** Same as primary
- **Border Radius:** Same as primary
- **Font Weight:** `var(--font-semibold)` (600)
- **States:**
  - Hover: Darker lime, scale 1.02, shadow-xl
  - Active: Scale 0.98
  - Focus: 3px navy outline with 2px offset

### Tertiary Button (`.btn-tertiary`)
**Usage:** Secondary actions - "View our work", "Get a quote by email"
- **Background:** Transparent
- **Text:** White
- **Border:** 2px solid white
- **Padding:** Same as primary
- **Border Radius:** Same as primary
- **Font Weight:** `var(--font-semibold)` (600)
- **States:**
  - Hover: White background, navy text
  - Active: Scale 0.98
  - Focus: 3px primary colour outline with 2px offset

### Button Best Practices
- Always provide clear focus states for keyboard navigation
- Ensure minimum 44px tap target for mobile (achieved with padding)
- One primary button per section maximum
- Use consistent spacing between button groups (--space-4)

---

## Card System

### Standard Card (`.card`)
**Usage:** Default card style for most content blocks
- **Background:** `var(--color-background-primary)` (white)
- **Border Radius:** `var(--border-radius-md)` (12px)
- **Padding:** `var(--space-8)` (32px)
- **Shadow:** `var(--shadow-md)`
- **Hover:** `var(--shadow-lg)`

### Highlighted Card (`.card-highlighted`)
**Usage:** "Most popular" package, featured content
- **Background:** `var(--color-background-primary)` (white)
- **Border Radius:** `var(--border-radius-md)` (12px)
- **Padding:** `var(--space-8)` (32px)
- **Shadow:** `var(--shadow-lg)`
- **Border:** 2px solid `var(--color-primary)` (lime)

### Card Usage Guidelines
- Use `.card` for consistent card styling across the site
- Use `.card-highlighted` for single emphasized card per group
- Maintain consistent internal spacing using spacing variables
- Cards should have clear visual hierarchy (heading → body → CTA)

---

## Design Tokens

### Border Radius
- **Small:** `var(--border-radius-sm)` - 8px - Buttons, inputs
- **Medium:** `var(--border-radius-md)` - 12px - Cards
- **Large:** `var(--border-radius-lg)` - 16px - Large cards
- **Extra Large:** `var(--border-radius-xl)` - 24px - Hero sections

**Consistency Rule:** Use `--border-radius-sm` for all interactive elements (buttons, inputs). Use `--border-radius-md` for cards.

### Shadows
- **Small:** `var(--shadow-sm)` - Subtle elevation
- **Medium:** `var(--shadow-md)` - Default card shadow
- **Large:** `var(--shadow-lg)` - Hover states, highlighted cards
- **Extra Large:** `var(--shadow-xl)` - Maximum elevation (modals, prominent CTAs)

### Transitions
- **Fast:** `var(--transition-fast)` - 150ms - Quick interactions
- **Base:** `var(--transition-base)` - 200ms - Default (buttons, hovers)
- **Slow:** `var(--transition-slow)` - 300ms - Complex animations

**Default:** Use `--transition-base` for all hover and interactive states unless specific timing needed.

---

## Layout System

### Container (`.container-custom`)
- **Max Width:** 80rem (1280px)
- **Padding:**
  - Mobile: `var(--space-4)` (16px)
  - Tablet (640px+): `var(--space-6)` (24px)
  - Desktop (1024px+): `var(--space-8)` (32px)

### Section Padding (`.section-padding`)
Responsive vertical padding for page sections:
- **Mobile:** 4rem top/bottom
- **Tablet (768px+):** 5rem top/bottom
- **Desktop (1024px+):** 6rem top/bottom

---

## Utility Classes

### Typography
- `.text-xs` through `.text-6xl` - Font sizes
- `.leading-tight` through `.leading-loose` - Line heights
- `.font-normal` through `.font-extrabold` - Font weights
- `.text-primary`, `.text-secondary`, `.text-tertiary` - Text colours

### Backgrounds
- `.bg-primary`, `.bg-secondary`, `.bg-tertiary` - Background colours

### Spacing
- `.space-y-{1,2,3,4,6,8}` - Vertical spacing between children
- `.gap-{2,3,4,6,8}` - Gap for flex/grid layouts

---

## Accessibility

### Focus States
All interactive elements must have visible focus states for keyboard navigation:
- Buttons: 3px outline in contrasting colour with 2px offset
- Links: Underline or visible colour change
- Form inputs: Strong border colour change

### Skip Link
`.skip-link` class provides accessible skip navigation for keyboard users. Invisible by default, appears on focus with high contrast.

### Colour Contrast
All colour combinations meet WCAG AA standards:
- Normal text: 4.5:1 minimum contrast
- Large text (18pt+): 3:1 minimum contrast
- Interactive elements: Clear visual differentiation

---

## Usage Examples

### Using Design System Variables in Components

```css
/* Custom component using design system */
.my-component {
  padding: var(--space-6);
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius-md);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
}

.my-component-heading {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}
```

### Button Usage in JSX

```tsx
{/* Primary CTA */}
<a href="/contact" className="btn-primary">
  Book a free consultation
</a>

{/* Secondary CTA on dark background */}
<a href="/contact" className="btn-secondary">
  Get started
</a>

{/* Tertiary CTA for secondary actions */}
<a href="/portfolio" className="btn-tertiary">
  View our work
</a>
```

### Card Usage in JSX

```tsx
{/* Standard card */}
<div className="card">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>

{/* Highlighted card (e.g., "Most popular" package) */}
<div className="card-highlighted">
  <h3>Professional Package</h3>
  <span className="badge">Most popular</span>
  <p>Package details...</p>
</div>
```

---

## Best Practices

### 1. Consistency
- Always use design system variables instead of hardcoded values
- Use established patterns for common UI elements
- Maintain consistent spacing rhythm using the spacing scale

### 2. Semantic HTML
- Use appropriate heading levels (h1 → h2 → h3)
- Don't skip heading levels for styling purposes
- Use design system classes for visual adjustments

### 3. Responsive Design
- Mobile-first approach (define mobile styles, then override for larger screens)
- Test across all breakpoints (mobile, tablet, desktop)
- Use responsive spacing and typography tokens

### 4. Performance
- Prefer design system variables over custom styles
- Minimize specificity in CSS
- Use transitions judiciously (--transition-base is sufficient for most cases)

### 5. Accessibility
- Ensure all interactive elements have focus states
- Maintain colour contrast standards
- Test keyboard navigation thoroughly

---

## File Locations

- **Design System Variables:** `app/globals.css` (lines 7-111)
- **Typography Defaults:** `app/globals.css` (lines 125-168)
- **Utility Classes:** `app/globals.css` (lines 170-221)
- **Component Classes:** `app/globals.css` (lines 223-399)

---

## Changelog

### Version 1.0.0 (14 November 2025)
- Initial design system implementation
- Complete colour system with semantic naming
- Typography scale with responsive sizing
- Spacing system (12-step scale + section spacing)
- Button system (primary, secondary, tertiary)
- Card system (standard, highlighted)
- Design tokens (border-radius, shadows, transitions)
- Layout system (container, section padding)
- Comprehensive utility classes
- Accessibility standards (focus states, skip link, contrast)

---

## Support

For questions or clarifications about the design system, refer to this documentation or review the implementation in `app/globals.css`.

When extending the system, follow the established patterns and naming conventions to maintain consistency.
