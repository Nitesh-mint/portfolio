# Design System: Nitesh Raya Portfolio

This document outlines the visual language, design principles, and technical implementation of the "Neobrutalist" theme used throughout this portfolio.

## 1. Core Philosophy: Neobrutalism
The site follows a **Neobrutalist** aesthetic, which combines the raw, unpolished energy of traditional Brutalism with modern UX sensibilities and high-contrast digital elements.

**Key Principles:**
- **Honesty:** No hidden depth; everything is on the surface.
- **Boldness:** Heavy borders and high-contrast colors.
- **Functional Chaos:** Utilizing "chaos" as a design element (e.g., the scattered images in the Hero section).
- **Geometric Rigor:** Hard edges, 90-degree angles, and consistent border weights.

## 2. Visual Language

### Colors
Defined in `src/styles/global.css` using CSS variables for easy theming (Light/Dark mode).

| Element | Light Mode | Dark Mode |
| :--- | :--- | :--- |
| **Background** | `#FFFFFF` | `#000000` |
| **Text** | `#000000` | `#FFFFFF` |
| **Accents** | `#000000` | `#FFFFFF` |
| **Muted Text** | `#444444` | `#BBBBBB` |

### Typography
The site uses a dual-font system to balance "technical" and "expressive" tones.
- **Display:** `Archivo Black` (Sans-serif)
    - Used for large headings, section titles, and high-impact labels.
    - Features: Black weight, tight tracking, uppercase only.
- **Mono:** `Space Mono` (Monospace)
    - Used for body text, UI elements, and technical data.
    - Represents the "developer" aspect of the brand.

### UI Components (Brutal Classes)
Located in the `@layer components` of `global.css`.

- **`.btn-brutal`**: 
    - 3px solid border.
    - 5px hard shadow (no blur).
    - Translation effect on hover (`translate-x-[2px]`) to simulate "pressing" the button.
- **`.card-brutal`**:
    - Consistent padding and border.
    - Large 8px-10px shadows to create a layered "paper" look.

## 3. Layout & Structure

### Global Container
The site is wrapped in a `max-w-[1200px]` container with `border-x-[3px]`, creating a "magazine" or "framed" look that stays consistent across all screen sizes.

### Navigation
- **Navbar:** Fixed top with a glassmorphism blur (`backdrop-blur-md`) to ensure content remains readable behind the navigation.
- **Section Tracker:** A fixed left-side sidebar that uses a rotating "Scroll Wheel" (Settings icon) and active intersection indicators to show progress through the site.

## 4. Interactive Elements

### Image Chaos (Hero)
The "chaos-container" in the Hero section allows images to scatter and return. 
- **Physics:** Uses `cubic-bezier(0.33, 1, 0.68, 1)` for snappy, organic movement.
- **Interaction:** Images can be dragged and repositioned while scattered, reinforcing the "playful" nature of the site.

### Smooth Navigation
- Custom JavaScript handles scrolling to ensure the fixed navbar height is accounted for (`offsetPosition`).
- `history.pushState` is used to update URLs without jarring page jumps.

## 5. Deployment Specifics
- **404 Page:** Custom `404.astro` designed to match the theme with a ghost animation and high-stroke typography. Netlify automatically serves this as the default error page.
