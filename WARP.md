# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

THvidros is a professional glass company website built with vanilla HTML, CSS, and JavaScript. This is a **static website** with no build process or backend dependencies. The project focuses on showcasing glass services for a Brazilian vidraçaria (glass company) operating in São Paulo and Osasco.

## Commands

### Development
Since this is a static HTML site, there are no build, test, or lint commands. To work with this project:

- **View locally**: Open `index.html` directly in a browser
- **Local server (optional)**: Use any static file server like `python -m http.server 8000` or `npx serve`
- **Deploy**: Upload `index.html`, `styles.css`, `script.js`, and the `img/` directory to any web host

### Version Control
- **View changes**: `git --no-pager diff`
- **View history**: `git --no-pager log --oneline -10`

## Architecture

### File Structure
```
Th-vidros/
├── index.html      # Single-page application with all content sections
├── styles.css      # Complete styling (includes responsive breakpoints)
├── script.js       # Interactive features (mobile menu, scroll animations)
├── img/            # Project images (gallery photos and hero background)
└── package.json    # Minimal, contains no actual dependencies or scripts
```

### Key Design Patterns

**Single-Page Layout**: The entire website is contained in `index.html` with sections:
- Hero (with parallax background from `img/fundo.jpeg`)
- About (with stats grid)
- Services (4 service cards with icons)
- Differentials (6 benefit cards)
- Gallery (6 project photos from `img/`)
- Contact (centered contact info with social links)
- Floating WhatsApp button (fixed position)

**Color System**: The design uses CSS custom properties in `:root`:
- `--primary-color: #0f1f2e` (dark navy blue)
- `--accent-color: #ffd700` (vibrant yellow/gold)
- These colors match the THvidros logo and are used consistently throughout

**Responsive Approach**: Mobile-first design with breakpoints at:
- 768px: Tablet adjustments (mobile menu toggle, single-column layouts)
- 480px: Small mobile adjustments (smaller text, single-column grids)

### JavaScript Functionality

**Mobile Menu** (`script.js` lines 1-14):
- Toggle hamburger menu on mobile
- Auto-close menu when navigation link is clicked

**Scroll Animations** (lines 50-71):
- Intersection Observer API tracks element visibility
- Service cards, gallery items, and differentials fade in with `translateY` animation
- Uses `opacity` and `transform` transitions

**WhatsApp Integration**:
- Floating button links to `wa.me/5511975163802`
- Contact form (if present) formats message and opens WhatsApp with pre-filled text
- Form handler references placeholder number `5511987654321` (line 38) - **this should be updated**

### Image Assets

All images are in `img/` directory:
- `fundo.jpeg` - Hero section background
- `sacada.jpeg`, `cobertura.jpeg`, `banção de vidro.jpeg`, `espelho com led.jpeg`, `espelho organico.jpeg`, `vidro organico com led.jpeg` - Gallery items

The logo is externally hosted on Vercel blob storage (see `index.html` line 17).

## Important Notes

### Configuration Requirements
Before deploying or making significant changes, verify/update:

1. **WhatsApp number**: Currently hardcoded in two places:
   - `index.html`: Links use `5511975163802` (correct number)
   - `script.js` line 38: Form handler uses `5511987654321` (placeholder - **needs updating**)

2. **Contact information** (in `index.html` contact section):
   - Phone: (11) 97516-3802
   - Email: Comercialvidraceiro@gmail.com
   - Instagram: @vidracaria_thvidros

3. **Image paths**: All gallery images use relative paths to `img/` directory. Ensure images exist before referencing them in HTML.

### Styling Conventions
- Use existing CSS custom properties for colors (never hardcode colors)
- Follow the mobile-first approach (base styles first, then media queries for larger screens)
- Maintain consistent spacing: sections use `80px` vertical padding, cards use `2rem` internal padding
- All hover effects use `0.3s ease` transitions

### Language
All content is in Brazilian Portuguese (pt-BR). When adding or modifying text:
- Maintain formal but approachable tone
- Use industry-specific terms: "vidros temperados", "guarda-corpos", "vidraçaria"
- Keep accessibility in mind (semantic HTML, alt text for images)

### Browser Compatibility
The code uses modern JavaScript APIs:
- `IntersectionObserver` for scroll animations
- CSS Grid and Flexbox for layouts
- CSS custom properties (CSS variables)

These work in all modern browsers but may need polyfills for older browsers if required.
