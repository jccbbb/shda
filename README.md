# Scandinavian Hard Dance Alliance Website

Official website for the Scandinavian Hard Dance Alliance (SHDA) - a network of hard dance event organizers and companies across Sweden, Denmark, Norway, and Finland.

## About SHDA

The Scandinavian Hard Dance Alliance brings together passionate organizers who work with love for hard dance music (hardstyle, hardcore, rawstyle, frenchcore, hardtechno) rather than purely for profit. We collaborate on events, share resources, and strengthen the Nordic hard dance community.

## Technology Stack

- **Framework:** Astro 5.x
- **Styling:** Custom CSS with graphic profile
- **Content:** Markdown-based content collections
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/                  # Static assets
│   ├── logos/              # Member organization logos (ADD YOUR LOGOS HERE)
│   ├── images/             # General images
│   └── documents/          # PDFs and documents
├── src/
│   ├── components/         # Reusable Astro components
│   ├── layouts/            # Page layouts
│   ├── pages/              # Website pages (file-based routing)
│   ├── styles/             # Global CSS
│   └── content/            # Markdown content
│       ├── blog/           # Blog posts
│       └── events/         # Event listings
├── content/                # Content collections
├── GRAPHIC_PROFILE.md      # Brand identity guidelines
├── TODO.md                 # Action items for customization
└── astro.config.mjs        # Astro configuration
```

## Deployment to GitHub Pages

### Setup

1. Create a new repository on GitHub
2. Update `astro.config.mjs`:
   ```javascript
   site: 'https://USERNAME.github.io',
   base: '/REPO-NAME',
   ```
3. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

### Deploy

Push to the main branch and GitHub Actions will automatically build and deploy:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Your site will be live at `https://USERNAME.github.io/REPO-NAME`

## Customization

See `TODO.md` for a complete list of items to customize with your actual organization data.

### Quick Customization Checklist

- [ ] Add member logos to `/public/logos/`
- [ ] Update member information in `/src/pages/medlemmar.astro`
- [ ] Update contact information in `/src/pages/kontakt.astro`
- [ ] Add real board members in `/src/pages/stadgar.astro`
- [ ] Update vision, mission, and history in `/src/pages/om-oss.astro`
- [ ] Add real events to `/content/events/`
- [ ] Write actual blog posts in `/content/blog/`
- [ ] Update social media links throughout the site
- [ ] Configure actual form handling for contact form
- [ ] Update `astro.config.mjs` with your GitHub Pages URL

## Graphic Profile

The website follows the SHDA graphic profile outlined in `GRAPHIC_PROFILE.md`. Key elements:

- **Colors:** Dark theme with neon accents (cyan, magenta, orange)
- **Fonts:** Rajdhani (headings), Montserrat (body), Orbitron (accent)
- **Style:** High-energy, bold, industrial aesthetic fitting hard dance culture

## Content Management

### Adding Blog Posts

Create a new markdown file in `/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2025-01-22
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Adding Events

Create a new markdown file in `/content/events/`:

```markdown
---
title: "Event Name"
date: "March 15, 2025"
location: "City, Country"
organizer: "Organization Name"
description: "Event description"
link: "https://tickets.example.com"
genres: ["hardstyle", "hardcore"]
---

Event details...
```

## Support

For questions about the website or SHDA membership:
- Email: info@shda.org (update with real email)
- Website: [Contact Page](/kontakt)

## License

Copyright © 2025 Scandinavian Hard Dance Alliance. All rights reserved.
