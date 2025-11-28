# Image Specifications for SHDA Website

This document outlines the recommended image sizes and formats for all images used on the Scandinavian Hard Dance Alliance website.

## Member Organization Logos

**Location**: `/public/logos/`

**Specifications**:
- **Format**: PNG with transparent background (preferred) or SVG
- **Size**: 800px × 800px (square, 1:1 ratio)
- **Minimum**: 500px × 500px
- **File Size**: Under 200KB
- **Color**: Full color versions preferred
- **Background**: Transparent

**File Naming**:
- Lowercase with hyphens
- Examples: `forced-2-dance.png`, `another-life-events.png`

**Current Members** (9 logos needed):
1. `forced-2-dance.png`
2. `effekt.png`
3. `dap-events.png`
4. `hardstyle-dna.png`
5. `resistancefi.png`
6. `hardevents-danmark.png`
7. `coretours.png`
8. `hardstyle-sweden.png`
9. `another-life-events.png`

---

## Event Images

**Location**: `/public/images/events/`

**Specifications**:
- **Format**: JPEG or WebP
- **Size**: 800px × 800px (square, 1:1 ratio)
- **Alternative**: 1000px × 1000px (for higher quality)
- **File Size**: 150-400 KB (optimize for web)
- **Quality**: JPEG 80-85%

**Display Size**:
- Container: 250px × 250px
- Uses `object-fit: cover` to fill the space

**Image Style**:
- High contrast event photos
- Dark/nighttime settings preferred
- Crowd shots with energy
- Stage lighting with neon colors
- Action shots from events

**Photo Treatment** (recommended):
- Boost colors to match neon palette (cyan #00f0ff, magenta #ff00ff, orange #ff6b00)
- Increase contrast
- Add subtle vignette
- Optional gradient overlay at 20-30% opacity

**File Naming**:
- Descriptive, lowercase with hyphens
- Examples: `hardstyle-summit-2025.jpg`, `nordic-hardcore-night.jpg`

---

## Blog/News Post Images

**Location**: `/public/images/blog/`

**Specifications**:
- **Format**: JPEG or WebP
- **Size**: 800px × 800px (square, 1:1 ratio)
- **Alternative**: 1000px × 1000px (for higher quality)
- **File Size**: 150-400 KB (optimize for web)
- **Quality**: JPEG 80-85%

**Display Size**:
- Container: 250px × 250px
- Uses `object-fit: cover` to fill the space

**Image Style**: Same as event images

**File Naming**:
- Match blog post slug
- Examples: `quarterly-meeting-2025.jpg`, `welcome-new-member.jpg`

---

## General Image Guidelines

### Optimization
- Always optimize images before uploading
- Use tools like TinyPNG, Squoosh, or ImageOptim
- Target file sizes:
  - Logos: < 200 KB
  - Photos: 150-400 KB

### Format Selection
- **Logos**: PNG (transparent) or SVG
- **Photos**: JPEG (85% quality) or WebP
- **Icons**: SVG preferred

### Responsive Considerations
- Upload at 2x the display size for retina screens
- Display size is 250px, so upload 500-1000px
- Recommended: 800px × 800px as a good middle ground

### Color Profile
- Use sRGB color space
- Ensure good contrast on dark backgrounds (#0a0a0a)
- Test how images look against the dark theme

### Accessibility
- All images should have descriptive alt text
- Ensure text in images is readable
- Maintain good contrast ratios

---

## Quick Reference

| Image Type | Size | Format | Max File Size |
|------------|------|--------|---------------|
| Member Logos | 800×800px | PNG/SVG | 200 KB |
| Event Images | 800×800px | JPEG/WebP | 400 KB |
| Blog Images | 800×800px | JPEG/WebP | 400 KB |

---

## Tools for Image Optimization

**Online**:
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

**Desktop**:
- ImageOptim (Mac)
- FileOptimizer (Windows)
- GIMP (Cross-platform)

---

**Last Updated**: 2025-01-22
