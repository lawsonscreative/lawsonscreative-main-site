# Lawsons Creative - Main Website

Modern, professional website for Lawsons Creative - a web design agency serving small service businesses across the UK.

## 🚀 Built With

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React Hook Form** (form validation)

## 📋 Features

- ✅ Mobile-first responsive design
- ✅ Smooth scroll animations
- ✅ SEO-optimized pages
- ✅ Contact form with validation
- ✅ Calendly integration for bookings
- ✅ Portfolio showcase with case studies
- ✅ Detailed service packages
- ✅ FAQ accordion
- ✅ Fast loading (< 2s target)

## 📁 Project Structure

```
lawsonscreative-main-site/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── portfolio/           # Portfolio/case studies
│   ├── process/             # Process breakdown
│   ├── services/            # Services & packages
│   └── terms/               # Terms of service
├── components/
│   ├── Navigation.tsx       # Main navigation
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Homepage hero section
│   ├── PortfolioShowcase.tsx
│   ├── Packages.tsx         # Service packages
│   ├── Process.tsx          # Process steps
│   ├── Testimonials.tsx
│   ├── WhyChooseUs.tsx
│   ├── FAQ.tsx              # Accordion FAQ
│   ├── FinalCTA.tsx         # Bottom CTA with Calendly
│   ├── ContactForm.tsx      # Contact form component
│   └── SocialProof.tsx      # Trust badges
└── public/                  # Static assets
```

## 🎨 Brand Colors

- **Navy:** `#0A2540` (primary brand color)
- **Lime:** `#00E676` (accent color)
- **Slate:** `#475569` (body text)
- **Light Grey:** `#F1F5F9` (backgrounds)

## 🏃 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

## 📝 Configuration

### Calendly Integration

Update the Calendly URL in:
- [components/FinalCTA.tsx](components/FinalCTA.tsx)
- [app/contact/page.tsx](app/contact/page.tsx)

Current URL: `https://calendly.com/andy-lawsonsenterprises/30min`

### Contact Form

The contact form uses Resend for email delivery. To configure:

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (lawsonscreative.co.uk)
3. Create an API key
4. Add to environment variables:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxx
   ```

The API route is at [app/api/contact/route.ts](app/api/contact/route.ts).

## 🖼️ Adding Portfolio Images

Portfolio placeholders are currently in place for the Graceful Pet Care case study. To add images:

1. Add images to `public/images/portfolio/`
2. Update image references in:
   - [components/PortfolioShowcase.tsx](components/PortfolioShowcase.tsx)
   - [app/portfolio/page.tsx](app/portfolio/page.tsx)

Recommended: Use Next.js Image component for optimization.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Vercel will auto-detect Next.js and deploy
4. Add custom domain: lawsonscreative.co.uk

### Environment Variables

Environment variables required:

```env
RESEND_API_KEY=re_xxxxxxxxxx  # Required for contact form
NEXT_PUBLIC_GA_ID=your_ga_id  # Optional, for Google Analytics
```

## 📄 Pages Overview

- **Home** (`/`) - Hero, portfolio showcase, packages, process, testimonials, FAQ
- **Portfolio** (`/portfolio`) - Detailed case studies
- **Services** (`/services`) - Package details, pricing FAQ
- **About** (`/about`) - Company story and approach
- **Process** (`/process`) - Detailed workflow breakdown
- **Contact** (`/contact`) - Contact form and Calendly booking
- **Terms** (`/terms`) - Terms of service

## ✅ Pre-Launch Checklist

- [ ] Update Formspree endpoint in ContactForm.tsx
- [ ] Add portfolio images for Graceful Pet Care
- [ ] Test contact form submissions
- [ ] Test Calendly booking flow
- [ ] Verify all links work
- [ ] Test on real mobile devices
- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Add favicon (if not already done)
- [ ] Configure custom domain
- [ ] Set up analytics (optional)

## 📧 Contact

**Email:** hello@lawsonscreative.co.uk
**Domain:** lawsonscreative.co.uk
**GitHub:** [lawsonscreative](https://github.com/lawsonscreative)

## 📜 License

Copyright © 2025 Lawsons Enterprises Ltd. All rights reserved.
