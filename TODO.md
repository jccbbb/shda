# SHDA Website - Customization TODO List

This file contains all the items you need to update with your actual organization data. Search for "TODO" comments throughout the codebase for additional specific items.

## Priority 1: Essential Information

### Member Organizations (`/src/pages/medlemmar.astro`)
- [ ] Add actual member logos to `/public/logos/` folder
  - [ ] forced-2-dance.png
  - [ ] effekt.png
  - [ ] dap-events.png
  - [ ] hardstyle-dna.png
  - [ ] resistancefi.png
  - [ ] hardevents-danmark.png
  - [ ] coretours.png
  - [ ] hardstyle-sweden.png
  - [ ] another-life-events.png
- [ ] Update member descriptions with real information
- [ ] Add actual member websites/links
- [ ] Update Another Life Events country if not Sweden

### Contact Information (`/src/pages/kontakt.astro` and `/src/components/Footer.astro`)
- [ ] Update email addresses:
  - [ ] info@shda.org
  - [ ] membership@shda.org
  - [ ] board@shda.org
  - [ ] press@shda.org
  - [ ] partnerships@shda.org
- [ ] Add physical office address (if applicable)
- [ ] Add actual social media links (Facebook, Instagram, Twitter/X)
- [ ] Configure contact form to actually send emails (currently just a placeholder)

### Deployment Configuration (`astro.config.mjs`)
- [ ] Update `site` with your GitHub Pages URL: `https://USERNAME.github.io`
- [ ] Update `base` with your repository name: `/your-repo-name`
- [ ] Push to GitHub and enable GitHub Pages in repository settings

## Priority 2: Organization Details

### About Page (`/src/pages/om-oss.astro`)
- [ ] Update vision statement with real content
- [ ] Update mission statement with real content
- [ ] Write actual organization history
- [ ] Verify and update values if needed
- [ ] Update "What We Do" section with accurate activities

### Bylaws (`/src/pages/stadgar.astro`)
- [ ] Set actual founding date
- [ ] Define actual board structure and positions
- [ ] Set membership fee structure
- [ ] Update application process details
- [ ] Set annual meeting schedule
- [ ] Add actual board member names and organizations:
  - [ ] Chairperson
  - [ ] Vice Chairperson
  - [ ] Treasurer
  - [ ] Secretary
  - [ ] Board Members at Large
- [ ] Review all bylaws with legal counsel
- [ ] Add adoption and amendment dates

### Activities Page (`/src/pages/verksamhet.astro`)
- [ ] Confirm 2025 quarterly meeting schedule:
  - [ ] Q1 - March 15, Stockholm
  - [ ] Q2 - June 20, Copenhagen
  - [ ] Q3 - September 12, Oslo
  - [ ] Q4 - December 5, Helsinki
- [ ] Update meeting locations/venues if needed

## Priority 3: Content

### Events (`/content/events/` and `/src/pages/events.astro`)
- [ ] Remove placeholder events
- [ ] Add real upcoming events with:
  - [ ] Accurate dates
  - [ ] Actual venues
  - [ ] Real ticket links
  - [ ] Confirmed lineups (when available)
- [ ] Add event images
- [ ] Update Coretours information and link

### Blog/News (`/content/blog/` and `/src/pages/nyheter.astro`)
- [ ] Write real founding announcement
- [ ] Add actual news posts
- [ ] Replace placeholder blog posts
- [ ] Add images to blog posts
- [ ] Configure newsletter signup (currently placeholder)

### Homepage (`/src/pages/index.astro`)
- [ ] Verify featured members section
- [ ] Update hero text if needed
- [ ] Ensure upcoming events are current
- [ ] Update latest news to pull from actual blog posts

## Priority 4: Media & Assets

### Images
- [ ] Add high-quality event photos to `/public/images/`
- [ ] Add member event photos
- [ ] Create/add SHDA logo files
- [ ] Add blog post featured images
- [ ] Consider adding event images

### Documents
- [ ] Add official bylaws PDF to `/public/documents/` (if desired)
- [ ] Add any annual reports
- [ ] Add meeting minutes (if public)
- [ ] Add membership application forms

### Branding
- [ ] Create official SHDA logo
- [ ] Update favicon if needed (`/public/favicon.svg`)
- [ ] Ensure all visuals match GRAPHIC_PROFILE.md

## Priority 5: Functionality

### Forms
- [ ] Set up contact form backend (currently no backend):
  - Options: Formspree, Netlify Forms, custom backend
- [ ] Configure newsletter signup (if using Mailchimp, ConvertKit, etc.)
- [ ] Add form validation and error handling
- [ ] Set up email notifications for form submissions

### Analytics & SEO
- [ ] Add Google Analytics or similar (if desired)
- [ ] Update meta descriptions throughout site
- [ ] Add Open Graph images for social sharing
- [ ] Submit sitemap to search engines
- [ ] Verify all internal links work

### Social Media
- [ ] Create and link social media accounts:
  - [ ] Facebook page
  - [ ] Instagram account
  - [ ] Twitter/X account
- [ ] Add social media meta tags for better sharing

## Priority 6: Legal & Compliance

### Legal Pages
- [ ] Create privacy policy (if collecting user data)
- [ ] Create cookie policy (if using cookies/analytics)
- [ ] Create terms of service (if needed)
- [ ] Add GDPR compliance notices (if applicable)

### Copyright & Attribution
- [ ] Add copyright notices where appropriate
- [ ] Credit any third-party assets used
- [ ] Ensure member logos are used with permission

## Priority 7: Testing & Launch

### Pre-Launch Checklist
- [ ] Test all pages on desktop
- [ ] Test all pages on mobile devices
- [ ] Test all links (internal and external)
- [ ] Verify contact form works
- [ ] Check loading speeds
- [ ] Verify GitHub Pages deployment
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Proofread all content for typos
- [ ] Verify all member information is accurate
- [ ] Get approval from board/stakeholders

### Post-Launch
- [ ] Announce website to members
- [ ] Share on social media
- [ ] Add website to member organization sites
- [ ] Monitor analytics and feedback
- [ ] Set up regular content update schedule

## Optional Enhancements

### Features to Consider
- [ ] Member login area (for private resources)
- [ ] Event RSVP system
- [ ] Photo gallery from past events
- [ ] Video content (event recaps, interviews)
- [ ] Member directory with search
- [ ] Interactive event map
- [ ] Multi-language support (Swedish, Danish, Norwegian, Finnish)
- [ ] Dark/light mode toggle (currently dark only)

### Content Ideas
- [ ] Artist spotlight series
- [ ] Member interviews
- [ ] Event recaps with photos
- [ ] Behind-the-scenes content
- [ ] Hard dance scene history
- [ ] Educational content about genres

## File Locations for Updates

Quick reference for where to find things:

- **Member info**: `/src/pages/medlemmar.astro`
- **Contact details**: `/src/pages/kontakt.astro`, `/src/components/Footer.astro`
- **About content**: `/src/pages/om-oss.astro`
- **Bylaws**: `/src/pages/stadgar.astro`
- **Activities**: `/src/pages/verksamhet.astro`
- **Events**: `/content/events/` + `/src/pages/events.astro`
- **Blog**: `/content/blog/` + `/src/pages/nyheter.astro`
- **Homepage**: `/src/pages/index.astro`
- **Logos**: `/public/logos/`
- **Images**: `/public/images/`
- **Documents**: `/public/documents/`
- **Styles**: `/src/styles/global.css`
- **Graphic Profile**: `GRAPHIC_PROFILE.md`

## Notes

- All TODO comments in code files are marked with `<!-- TODO: ... -->` or `// TODO:`
- The website is currently using placeholder/generic content - replace with real data
- Member logos should be PNG format with transparent backgrounds
- Recommended logo size: minimum 500px width
- Test the website locally with `npm run dev` before deploying
- Build for production with `npm run build` to check for errors

## Need Help?

- Check the `README.md` for setup instructions
- Review `GRAPHIC_PROFILE.md` for branding guidelines
- Search codebase for "TODO" to find specific items needing updates
- Test thoroughly before making the site public

---

**Last Updated**: 2025-01-22

Keep this file updated as you complete items. Good luck with your website! 🎵
