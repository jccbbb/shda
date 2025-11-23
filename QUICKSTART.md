# SHDA Website - Quick Start Guide

Congratulations! Your Scandinavian Hard Dance Alliance website is ready. Here's how to get started.

## What's Been Created

✅ Complete Astro website with all pages
✅ Graphic profile matching hard dance aesthetic
✅ 8 main pages (Home, About, Members, Activities, Events, News, Bylaws, Contact)
✅ Reusable components (Header, Footer, Cards)
✅ Content collections for blog posts and events
✅ GitHub Pages deployment configuration
✅ Responsive design (mobile-friendly)
✅ TODO list for customization

## Immediate Next Steps

### 1. Start the Development Server

```bash
npm run dev
```

Visit http://localhost:4321 to see your site locally.

### 2. Add Member Logos

Place PNG logos (transparent background, min 500px width) in `/public/logos/`:
- forced-2-dance.png
- effekt.png
- dap-events.png
- hardstyle-dna.png
- resistancefi.png
- hardevents-danmark.png
- coretours.png
- hardstyle-sweden.png

### 3. Update Contact Information

Edit `/src/pages/kontakt.astro` and `/src/components/Footer.astro`:
- Replace placeholder emails
- Add social media links
- Update office address

### 4. Review Content

Check `TODO.md` for a complete list of items to update. Priority items:
- Member descriptions (`/src/pages/medlemmar.astro`)
- Vision & mission (`/src/pages/om-oss.astro`)
- Board members (`/src/pages/stadgar.astro`)
- Contact details (multiple files)

## Deploying to GitHub Pages

### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial SHDA website"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

### 2. Update Configuration

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',
});
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings > Pages
3. Source: GitHub Actions
4. Push your code - deployment happens automatically!

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

## File Structure Overview

```
/
├── public/
│   ├── logos/          ← ADD MEMBER LOGOS HERE
│   ├── images/         ← Add other images
│   └── documents/      ← Add PDFs
├── src/
│   ├── components/     ← Reusable components
│   ├── content/        ← Blog & event markdown files
│   │   ├── blog/       ← Blog posts
│   │   └── events/     ← Event listings
│   ├── layouts/        ← Page layouts
│   ├── pages/          ← Website pages
│   └── styles/         ← CSS files
├── GRAPHIC_PROFILE.md  ← Brand guidelines
├── TODO.md            ← Customization checklist
└── README.md          ← Full documentation
```

## Key Pages to Customize

1. **Members** (`/src/pages/medlemmar.astro`)
   - Add logos
   - Update descriptions
   - Add website links

2. **Contact** (`/src/pages/kontakt.astro`)
   - Update all email addresses
   - Add office address
   - Add social media links
   - Configure form handler

3. **About** (`/src/pages/om-oss.astro`)
   - Write real vision & mission
   - Add organization history
   - Update values if needed

4. **Bylaws** (`/src/pages/stadgar.astro`)
   - Add board members
   - Set dates
   - Review legal content

## Adding Content

### New Blog Post

Create `/src/content/blog/your-post.md`:

```markdown
---
title: "Your Title"
description: "Brief description"
pubDate: 2025-01-22
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

### New Event

Create `/src/content/events/your-event.md`:

```markdown
---
title: "Event Name"
date: "March 15, 2025"
location: "City, Country"
organizer: "Organization"
description: "Description"
link: "https://tickets.example.com"
genres: ["hardstyle"]
---

Event details...
```

## Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Design System

The site uses the hard dance aesthetic defined in `GRAPHIC_PROFILE.md`:

- **Colors**: Dark theme with neon cyan (#00f0ff), magenta (#ff00ff), orange (#ff6b00)
- **Fonts**: Rajdhani (headings), Montserrat (body), Orbitron (accent)
- **Style**: Bold, industrial, high-energy

## Getting Help

- Check `TODO.md` for what needs updating
- Read `README.md` for detailed documentation
- Review `GRAPHIC_PROFILE.md` for design guidelines
- Search for "TODO" comments in code files

## Before Going Live

- [ ] Test all pages on desktop and mobile
- [ ] Add all member logos
- [ ] Update all contact information
- [ ] Replace placeholder content
- [ ] Configure form handling
- [ ] Test deployment
- [ ] Get stakeholder approval

## Support

For questions or issues, refer to:
- `README.md` - Full documentation
- `TODO.md` - Customization checklist
- `GRAPHIC_PROFILE.md` - Design guidelines

---

**Built with Astro** • **Designed for SHDA** • **Ready to Deploy**

Happy organizing! 🎵
