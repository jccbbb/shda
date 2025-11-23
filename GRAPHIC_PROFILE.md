# Scandinavian Hard Dance Alliance - Graphic Profile

## Brand Identity
The Scandinavian Hard Dance Alliance (SHDA) represents the energetic, powerful, and united spirit of the hard dance community across the Nordic countries. Our visual identity reflects the high-energy, bold, and passionate nature of hardstyle, hardcore, rawstyle, frenchcore, and hardtechno music scenes.

---

## Color Palette

### Primary Colors

**Black (Background)**
- HEX: `#0a0a0a`
- RGB: `10, 10, 10`
- Usage: Primary background, creating depth and contrast

**Deep Dark Gray**
- HEX: `#1a1a1a`
- RGB: `26, 26, 26`
- Usage: Secondary backgrounds, cards, sections

### Accent Colors

**Electric Cyan** (Primary Accent)
- HEX: `#00f0ff`
- RGB: `0, 240, 255`
- Usage: Primary CTAs, links, highlights, hover states

**Neon Magenta**
- HEX: `#ff00ff`
- RGB: `255, 0, 255`
- Usage: Secondary accents, important elements, energy bursts

**Laser Orange**
- HEX: `#ff6b00`
- RGB: `255, 107, 0`
- Usage: Tertiary accent, warnings, special highlights

**Electric Purple**
- HEX: `#9d00ff`
- RGB: `157, 0, 255`
- Usage: Gradients, special elements, hover states

### Neutral Colors

**Light Gray (Text)**
- HEX: `#e0e0e0`
- RGB: `224, 224, 224`
- Usage: Primary text, body copy

**Medium Gray**
- HEX: `#808080`
- RGB: `128, 128, 128`
- Usage: Secondary text, muted elements

**White (Highlights)**
- HEX: `#ffffff`
- RGB: `255, 255, 255`
- Usage: Headings, emphasis, high-contrast elements

---

## Typography

### Primary Font Family
**Rajdhani** (Google Fonts)
- Weights: 400 (Regular), 600 (SemiBold), 700 (Bold)
- Usage: Headings, titles, navigation
- Characteristics: Bold, industrial, geometric
- Import: `@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap');`

### Secondary Font Family
**Montserrat** (Google Fonts)
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)
- Usage: Body text, descriptions, longer content
- Characteristics: Clean, modern, readable
- Import: `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');`

### Accent Font (Optional)
**Orbitron** (Google Fonts)
- Weights: 700 (Bold), 900 (Black)
- Usage: Special headings, logo text, impactful statements
- Characteristics: Futuristic, geometric, techno-inspired
- Import: `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap');`

### Font Sizes

```css
/* Headings */
h1: 3.5rem (56px) - Rajdhani Bold
h2: 2.5rem (40px) - Rajdhani Bold
h3: 1.875rem (30px) - Rajdhani SemiBold
h4: 1.5rem (24px) - Rajdhani SemiBold
h5: 1.25rem (20px) - Rajdhani Regular
h6: 1rem (16px) - Rajdhani Regular

/* Body */
body: 1rem (16px) - Montserrat Regular
lead: 1.125rem (18px) - Montserrat Medium
small: 0.875rem (14px) - Montserrat Regular
```

---

## Logo Usage

### Placement
- Minimum clear space: Equal to the height of "SHDA" letters on all sides
- Minimum size: 120px width for digital, 30mm for print

### Logo Variations
1. **Primary Logo**: Full color on dark background
2. **Monochrome**: White on dark backgrounds
3. **Inverse**: Dark on light backgrounds (avoid when possible)

### Folder for Member Logos
**Location**: `/public/logos/`

Store all member organization logos here:
- `forced-2-dance.png`
- `effekt.png`
- `dap-events.png`
- `hardstyle-dna.png`
- `resistancefi.png`
- `hardevents-danmark.png`
- `coretours.png`
- `hardstyle-sweden.png`

**Requirements**:
- Format: PNG with transparent background
- Minimum resolution: 500px width
- Aspect ratio: Maintain original
- Color: Full color versions preferred

---

## Spacing & Layout

### Grid System
- Container max-width: 1200px
- Gutter: 24px
- Columns: 12-column grid

### Spacing Scale
```css
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
```

---

## Visual Elements

### Gradients

**Primary Gradient** (Cyan to Purple)
```css
background: linear-gradient(135deg, #00f0ff 0%, #9d00ff 100%);
```

**Secondary Gradient** (Orange to Magenta)
```css
background: linear-gradient(135deg, #ff6b00 0%, #ff00ff 100%);
```

**Accent Gradient** (Dark with highlights)
```css
background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
```

### Borders & Shadows

**Card Border**
```css
border: 1px solid rgba(0, 240, 255, 0.2);
```

**Glow Effect**
```css
box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
```

**Neon Text Shadow**
```css
text-shadow: 0 0 10px rgba(0, 240, 255, 0.8);
```

---

## Buttons & Interactive Elements

### Primary Button
```css
Background: #00f0ff
Text: #0a0a0a
Hover: Glow effect with box-shadow
Border-radius: 4px
Padding: 12px 32px
Font: Rajdhani SemiBold, 1rem
```

### Secondary Button
```css
Background: transparent
Border: 2px solid #00f0ff
Text: #00f0ff
Hover: Background #00f0ff, Text #0a0a0a
Border-radius: 4px
Padding: 10px 30px
```

### Links
```css
Color: #00f0ff
Hover: #ff00ff
Underline: On hover
Transition: 0.3s ease
```

---

## Imagery Guidelines

### Photo Style
- High contrast
- Dark/nighttime settings preferred
- Crowd shots with energy
- Stage lighting with neon colors
- Action shots from events

### Photo Treatment
- Slight color boost to match neon palette
- Increase contrast
- Add subtle vignette
- Overlay with gradient (optional, at 20-30% opacity)

---

## Iconography

### Style
- Line icons
- 2px stroke weight
- Sharp corners (not rounded)
- Monochrome or accent colors

### Recommended Icon Sets
- Lucide Icons
- Heroicons (outline)
- Remix Icon

---

## Voice & Tone

### Brand Voice
- **Energetic**: Reflect the high-energy music scene
- **Inclusive**: Welcome all who love hard dance
- **Professional**: Serious about supporting the scene
- **Passionate**: Driven by love for the music, not just profit

### Writing Style
- Direct and clear
- Active voice
- Short, impactful sentences
- Avoid overly corporate language
- Embrace hard dance terminology

---

## Do's and Don'ts

### Do's ✓
- Use high contrast for readability
- Keep backgrounds dark
- Use accent colors sparingly for impact
- Maintain generous whitespace
- Ensure accessibility (WCAG AA minimum)
- Test on dark environments

### Don'ts ✗
- Don't use light backgrounds (breaks brand identity)
- Don't use more than 2-3 accent colors together
- Don't use low-contrast text
- Don't clutter the design
- Don't use comic or playful fonts
- Don't use pastel or muted colors

---

## Accessibility

### Contrast Ratios
- All text must meet WCAG AA standards (4.5:1 for normal text)
- Large text: 3:1 minimum
- Interactive elements: Clear focus states

### Focus States
```css
outline: 2px solid #00f0ff;
outline-offset: 2px;
```

---

## File Formats

### Web
- Logo: SVG (preferred), PNG fallback
- Images: WebP (with JPG fallback)
- Icons: SVG

### Print
- Logo: Vector (AI, EPS, PDF)
- Images: High-res JPG or PNG (300dpi minimum)

---

## Brand Applications

### Website
- Dark theme always
- Accent colors for CTAs and highlights
- Generous spacing
- Bold typography for headings

### Social Media
- Consistent color palette across platforms
- Use gradients for backgrounds
- High-energy imagery
- Branded templates for announcements

### Print Materials
- High contrast maintained
- Neon colors may need adjustment for print (CMYK)
- Bold, readable typography
- Dark backgrounds with vibrant accents

---

## Version History
- **v1.0** - Initial graphic profile (2025-01-22)

---

**Contact**: For questions about brand usage, contact the SHDA board.
**Last Updated**: January 2025
