# Lawsons Creative - Complete Content Alignment Implementation
**All 5 Phases - Critical Fixes Through Polish**  
**Date:** 14 November 2025  
**Hourly Rate Decision:** £75/hour (aligned across all mentions)

---

## OVERVIEW

This document contains all 5 implementation phases to align the website with actual delivery model and fix all contradictions.

**Implementation approach:**
- One phase at a time
- Git commit after each phase approval
- Wait for Andy's sign-off before proceeding to next phase
- Easy rollback if issues arise

**Phases:**
1. Fix Delivery Model Promises (CRITICAL - 2-3 hours)
2. Fix Pricing Contradictions (CRITICAL - 1-2 hours)
3. CTA & Navigation Consistency (30 mins)
4. Services Page Formatting (30 mins)
5. Portfolio & About Improvements (1 hour)

---

# PHASE 1: FIX DELIVERY MODEL PROMISES
**Priority:** CRITICAL  
**Time:** 2-3 hours  
**Git Branch:** `fix/phase1-delivery-model-alignment`

## Context
Site currently promises CMS access and DIY editing. Reality: developer-maintained, clients email for updates.

---

## CHANGE 1.1: Rewrite FAQ - "Can I update the website myself?"

### Location
Homepage → FAQ section → "Can I update the website myself after it's built?"

### Current Answer (DELETE ENTIRELY)
```
Absolutely! Every website includes:

**Training session:** I'll show you how to make common updates (text changes, adding images, updating prices, adding blog posts)

**Documentation:** Simple step-by-step guides for common tasks

**CMS access:** You'll have full control via a user-friendly content management system

**Most common updates are easy:**
- Changing text or prices: 2–3 minutes
- Adding photos to a gallery: 5 minutes  
- Publishing a blog post: 10 minutes

**For bigger changes** (new pages, layout changes, new features), you can either:
- Do it yourself if you're comfortable
- Ask me to help (£75/hour or included in maintenance package)

95% of clients feel confident making their own updates after the training session.
```

### New Answer (REPLACE WITH)
```
**It depends on your technical background and update needs:**

**For non-technical clients (most small businesses):**

Your website is built with modern, high-performance technology (not a drag-and-drop builder). This means it's fast and robust, but doesn't have a "log in and edit" interface like WordPress or Wix.

For most updates (changing text, adding images, updating prices), you simply email me what needs changing. I'll handle it and typically turn it around same-day or next-day.

**Cost for updates:**
- **Included in maintenance package** (£50-150/month) - recommended for regular updates
- **Pay-as-you-go:** £75/hour for occasional changes
- **Small text tweaks** (typos, phone numbers): Usually free as a courtesy

**For clients with in-house developers:**

Your site is built with Next.js and hosted on Vercel/Netlify. If you have a developer on your team, they can take over the codebase and make updates directly. I'll provide full documentation and a handover session.

**Why not a traditional CMS?**

Traditional CMSs (WordPress, Wix, etc.) are slower, require more maintenance, and have security risks. My approach gives you a faster, more secure site - with the trade-off that I handle technical updates rather than you logging into a dashboard.

**Most clients prefer this model** because:
- They don't have to learn a new system
- No risk of accidentally breaking the site
- Updates are done properly by someone who knows the code
- They can focus on running their business, not managing a website

**If self-editing is non-negotiable:**

Let me know at discovery. We can discuss WordPress or other CMS options, though this affects speed, cost, and my recommendation for your needs.
```

---

## CHANGE 1.2: Fix "How We Work" Page - Launch Step

### Location
`/how-we-work` → Step 4: Launch

### Find and Replace - Description

**Find:**
```
After your final approval, we launch your site, set up analytics, and provide training on managing content. You're live and ready to grow.
```

**Replace with:**
```
After your final approval, we launch your site, set up analytics, and walk you through how everything works. You're live and ready to grow.
```

### Find and Replace - "What you'll get" List

**Find:**
```
What you'll get:
- Live website on your domain
- Analytics configured and tracking
- Training on content management
- Documentation for future reference
- Post-launch support (depends on package)
```

**Replace with:**
```
What you'll get:
- Live website on your domain
- Analytics configured and tracking
- Walkthrough of how to track performance and request updates
- Simple guide to requesting changes (typos, new content, etc.)
- Documentation for future reference
- Post-launch support (depends on package)
```

---

## CHANGE 1.3: Fix Home Page - "Built to Last" Section

### Location
Homepage → "Built for small businesses" section → "Built to Last"

### Find and Replace

**Find:**
```
Built to Last

We use modern, maintainable technology that won't be outdated in 6 months. Your site is fast, secure, and easy to update.
```

**Replace with:**
```
Built to Last

We use modern, maintainable technology that won't be outdated in 6 months. Your site is fast, secure, and straightforward to keep current with simple update requests or ongoing maintenance.
```

---

## CHANGE 1.4: Search and Fix All Other CMS Promises

### Search entire codebase for:
- "easy to update"
- "update yourself"
- "update it yourself"
- "manage your own"
- "CMS"
- "content management system"
- "content management"
- "training" (in editing context)
- "self-edit"
- "95%"

### For each result:
- If promises DIY editing → Remove or reframe to "update requests"
- If about training → Change to "walkthrough of analytics and update process"
- If mentions CMS → Remove unless discussing as special request option

---

## PHASE 1 VERIFICATION CHECKLIST

### Critical Checks
- [ ] Homepage FAQ → "Can I update myself?" → No CMS promise
- [ ] FAQ answer mentions £75/hour or maintenance package
- [ ] FAQ answer explains email-for-updates model clearly
- [ ] FAQ answer sounds confident, not apologetic
- [ ] `/how-we-work` Launch step → No "training on content management"
- [ ] Launch step says "walkthrough of how to track performance and request updates"
- [ ] Homepage "Built to Last" → No "easy to update" in DIY sense
- [ ] "Built to Last" mentions "update requests" or "ongoing maintenance"

### Site-Wide Search
- [ ] Search site for "CMS" - only appears as special request option
- [ ] Search site for "easy to update" - not in DIY context
- [ ] Search site for "training" - not about content management
- [ ] Search site for "95%" - should not appear

### Mobile Check
- [ ] FAQ answer displays properly on mobile
- [ ] How We Work page reads clearly on mobile

### Tone Check
- [ ] New FAQ answer is confident about developer-maintained model
- [ ] Explains benefits, not drawbacks
- [ ] Feels like a feature, not a limitation

---

## PHASE 1 GIT COMMIT

After Andy approves Phase 1:

```bash
git add .
git commit -S -m "Phase 1: Align delivery model promises with reality

- Rewrite FAQ answer about self-editing (no CMS promise)
- Fix How We Work launch step (no content management training)
- Fix Built to Last section (no 'easy to update' in DIY sense)
- Remove all CMS/self-editing promises site-wide

CRITICAL: Site no longer promises CMS access for non-technical clients"
git push origin fix/phase1-delivery-model-alignment
```

Create PR and merge after approval.

---

# PHASE 2: FIX PRICING CONTRADICTIONS
**Priority:** CRITICAL  
**Time:** 1-2 hours  
**Git Branch:** `fix/phase2-pricing-alignment`

## Context
Hourly rate is £40 on Services page, £75 in FAQ. Hosting costs are confusing. Decision: £75/hour everywhere.

---

## CHANGE 2.1: Services Page - Update Hourly Rate

### Location
`/services` → Add-on services section → "Content updates"

### Find and Replace

**Find:**
```
Content updates
£40 per hour
Small text changes, new images, minor adjustments
```

**Replace with:**
```
Content updates
£75 per hour
Small text changes, new images, minor adjustments, new pages
```

---

## CHANGE 2.2: Verify FAQ Already Has £75/hour

### Location
Homepage → FAQ → "What if I need changes after launch?"

### Check this section contains:
```
**Pay-as-you-go:** £75/hour for one-off content updates or new pages
```

If it says anything other than £75/hour, update it to £75/hour.

---

## CHANGE 2.3: Services Page - Clarify Hosting Costs

### Location
`/services` → "What's NOT included" section → Hosting line

### Current (approximate wording)

**Find something like:**
```
Hosting (often free, or £5–20/month)
```

**Replace with:**
```
**Hosting & ongoing maintenance**

Hosting infrastructure costs £5-20/month (or free for simple static sites on Vercel/Netlify).

However, most clients opt for a maintenance package (£50-150/month) which includes:
- Hosting + fast CDN
- Security updates and patches
- Automated backups
- Content updates (included hours vary by tier)
- Priority support

First year hosting is included in your build cost. After that, you can:
- Self-manage hosting (£5-20/month) if you have technical capabilities
- Use our maintenance packages (recommended for most clients)
```

---

## CHANGE 2.4: FAQ - Align Hosting Answer

### Location
Homepage → FAQ → "What about hosting? Do I need to arrange that?"

### Current answer should be updated to match Services page logic

**Replace entire answer with:**
```
No, you don't need to worry about hosting — I'll handle everything.

**What's included:**
- Fast, secure hosting on modern platforms (Vercel or Netlify)
- Free SSL certificate (the padlock in the browser)
- Automatic backups
- 99.9% uptime guarantee
- Your custom domain setup (if you have one)

**Ongoing costs:**

**First year:** Included in your build cost

**After year 1, you have two options:**

**Option 1: Self-managed hosting (£5-20/month)**
If you or your team are comfortable managing hosting, the infrastructure cost is typically £5-20/month for small-medium sites. This is just the raw hosting - you handle security updates, backups, and technical maintenance yourself.

**Option 2: Managed hosting + maintenance (£50-150/month) - Recommended**
Most clients prefer this because it includes:
- Hosting + fast CDN
- Security updates and patches
- Automated backups
- Content updates (included hours vary by tier)
- Priority support
- You never worry about technical stuff

No technical knowledge needed — I handle all the technical stuff so you can focus on your business.
```

---

## PHASE 2 VERIFICATION CHECKLIST

### Critical Checks
- [ ] Services page add-ons → Content updates shows £75/hour
- [ ] FAQ "What if I need changes?" → Shows £75/hour
- [ ] No other mentions of £40/hour anywhere on site
- [ ] Services page hosting section clearly explains £5-20 vs £50-150
- [ ] FAQ hosting answer matches Services page logic
- [ ] Both mention "first year included"
- [ ] Both explain self-managed vs managed maintenance

### Site-Wide Pricing Search
- [ ] Search for "£40" - should not appear (or only in old package prices)
- [ ] Search for "£75" - should appear consistently for hourly updates
- [ ] Search for "hosting" - all mentions are consistent
- [ ] Search for "maintenance" - all mentions are consistent

### User Understanding Test
- [ ] Read Services page hosting section - makes sense
- [ ] Read FAQ hosting answer - makes sense
- [ ] Both tell same story with same numbers

---

## PHASE 2 GIT COMMIT

After Andy approves Phase 2:

```bash
git add .
git commit -S -m "Phase 2: Fix pricing contradictions across site

- Update Services page content updates to £75/hour
- Verify FAQ shows £75/hour for updates
- Clarify hosting costs (£5-20 vs £50-150 maintenance packages)
- Align hosting explanation between Services and FAQ

All pricing now consistent site-wide at £75/hour for updates"
git push origin fix/phase2-pricing-alignment
```

Create PR and merge after approval.

---

# PHASE 3: CTA & NAVIGATION CONSISTENCY
**Priority:** MEDIUM  
**Time:** 30 minutes  
**Git Branch:** `fix/phase3-cta-consistency`

## Context
CTAs use "Book a Call", "Book a free consultation", "Book your free consultation". Standardise to one label.

---

## CHANGE 3.1: Standardise All Primary CTAs

### Decision
Use **"Book a free consultation"** everywhere as primary CTA label.

### Search and Replace Throughout Site

**Find these variations:**
- "Book a Call"
- "Book a call"
- "Book your free consultation"
- "Get Started" (in nav, if it exists)

**Replace all with:**
- "Book a free consultation"

### Locations to Check
- Global navigation button
- Homepage hero buttons
- All pricing package cards ("Get started" buttons)
- Portfolio page CTAs
- About page CTAs
- How We Work page CTAs
- Contact page CTAs
- Footer CTAs

### Keep These (Secondary CTAs)
- "Get a quote by email" - this is fine as secondary option
- "View our work" - this is fine as secondary option
- "See full details" - this is fine as link text

---

## PHASE 3 VERIFICATION CHECKLIST

### Critical Checks
- [ ] Navigation button says "Book a free consultation"
- [ ] Homepage hero primary button says "Book a free consultation"
- [ ] All three pricing cards say "Book a free consultation"
- [ ] Portfolio page CTA says "Book a free consultation"
- [ ] About page CTA says "Book a free consultation"
- [ ] How We Work page CTA says "Book a free consultation"
- [ ] Contact page primary CTA says "Book a free consultation"
- [ ] Footer CTA says "Book a free consultation"

### Site-Wide Search
- [ ] Search for "Book a Call" - should find zero results
- [ ] Search for "Book your free" - should find zero results (unless exact match to standard)
- [ ] All primary CTAs use identical wording

### Mobile Check
- [ ] Navigation CTA works and shows correct text on mobile
- [ ] All page CTAs display correctly on mobile

---

## PHASE 3 GIT COMMIT

After Andy approves Phase 3:

```bash
git add .
git commit -S -m "Phase 3: Standardise CTA labels site-wide

- All primary CTAs now use 'Book a free consultation'
- Remove 'Book a Call' and other variations
- Navigation, homepage, packages, all pages aligned

Consistent conversion path across entire site"
git push origin fix/phase3-cta-consistency
```

Create PR and merge after approval.

---

# PHASE 4: SERVICES PAGE FORMATTING
**Priority:** MEDIUM  
**Time:** 30 minutes  
**Git Branch:** `fix/phase4-services-formatting`

## Context
Services page has formatting issues: jammed decision framework text and stray bullet characters.

---

## CHANGE 4.1: Fix "Not Sure Which Package?" Section

### Location
`/services` → "Not sure which package? Here's how to choose:" section

### Current (Jammed Together)
```
1 Just need an online presence? → Starter … 2 Ready to grow… 3 Need custom features…
```
(All in one line, hard to read)

### Replace With (Properly Formatted)
```
Not sure which package? Here's how to choose:

**1. Just need an online presence? → Starter**
Perfect for sole traders, new businesses, or single-service providers who need a simple but professional web presence.

**2. Ready to grow and generate leads? → Professional**
Ideal for established businesses with multiple services, portfolios to showcase, or those serious about online marketing.

**3. Need custom features or e-commerce? → Premium**
Best for businesses with specific requirements like online booking systems, product sales, or custom functionality.
```

---

## CHANGE 4.2: Fix Stray Bullet Characters

### Location
`/services` → All package cards → "Ideal for" and "What's NOT included" sections

### Problem
Lines like: `•Sole traders just starting out`
(Extra bullet character after the list marker)

### Fix
Remove stray `•` so bullets read cleanly:
- `Sole traders just starting out`
- `Single-service businesses`
- etc.

### Affected Sections
- Starter package: "Ideal for" list
- Professional package: "Ideal for" list
- Premium package: "Ideal for" list
- All packages: "What's NOT included" lists

---

## PHASE 4 VERIFICATION CHECKLIST

### Critical Checks
- [ ] Services page decision framework is properly formatted (3 clear options)
- [ ] Each option (1, 2, 3) is on separate line
- [ ] Package names are highlighted/bold
- [ ] Supporting text is readable
- [ ] No stray bullet characters in "Ideal for" sections
- [ ] No stray bullet characters in "What's NOT included" sections
- [ ] All bullet lists are clean and consistent

### Mobile Check
- [ ] Decision framework doesn't break into confusing layout on mobile
- [ ] Bullet lists display properly on mobile
- [ ] Package cards are readable on mobile

### Visual Polish Check
- [ ] Decision framework looks professional
- [ ] Bullets are consistently formatted across all packages
- [ ] No formatting glitches or weird characters

---

## PHASE 4 GIT COMMIT

After Andy approves Phase 4:

```bash
git add .
git commit -S -m "Phase 4: Fix Services page formatting issues

- Format decision framework as readable list (not jammed text)
- Remove stray bullet characters from all package cards
- Clean up 'Ideal for' and 'What's NOT included' sections

Services page now scans cleanly"
git push origin fix/phase4-services-formatting
```

Create PR and merge after approval.

---

# PHASE 5: PORTFOLIO & ABOUT IMPROVEMENTS
**Priority:** LOW-MEDIUM  
**Time:** 1 hour  
**Git Branch:** `fix/phase5-content-improvements`

## Context
Quality improvements to Portfolio and About pages: smoother wording, stronger CTAs, remove redundancy.

---

## CHANGE 5.1: Smooth Graceful Pet Care Results Wording

### Location
`/portfolio` → Graceful Pet Care case study → Results section

### Current (Awkward)
```
2x better / Professional, trustworthy appearance
```

### Replace With
```
Professional, trustworthy appearance

Customers now regularly comment on how professional and trustworthy the website feels
```

### Also Check Homepage
If Graceful Pet Care results appear on homepage, update there too.

---

## CHANGE 5.2: Add Strong Portfolio Closing CTA

### Location
`/portfolio` → Bottom of page (after case study, before or after "New client projects launching soon")

### Add This New Section
```
## Want Results Like This for Your Business?

If your current website feels dated or isn't generating enquiries, let's fix that.

Every project I take on focuses on the same goal: websites that work as hard as you do to win customers and build trust.

[Book a free consultation] [Get a quote by email]
```

---

## CHANGE 5.3: Remove Duplicate "Hi, I'm Andrew" on About Page

### Location
`/about` page

### Current (Redundant)
First paragraph: "Hi, I'm Andrew. I started Lawsons Creative because…"
Then later: "I'm Andrew, the person behind Lawsons Creative..."

### Fix
Keep first instance ("Hi, I'm Andrew. I started...").

Change second instance to:
```
I build websites for small service businesses who need results, not just pretty designs. Based in London, I work directly with clients across the UK to create fast, modern websites that generate enquiries and build trust.
```

---

## CHANGE 5.4: Add "Why Clients Choose Lawsons Creative" Section to About

### Location
`/about` page → Add after "Who I work best with" section

### Add This New Section
```
## Why Clients Choose Lawsons Creative

**Strategy first, design second**
Beautiful websites that don't generate enquiries are expensive art projects. I focus on what actually drives bookings: clear messaging, trust signals, and easy next steps.

**Speed without sacrificing quality**
I use modern tools and efficient processes to deliver in 1–2 weeks. Most agencies take 6–12 weeks for the same result.

**You work directly with me**
No account managers, no junior designers, no outsourcing. I design it, I build it, I support it.

**Transparent pricing**
You know the price before we start. No scope creep, no surprise invoices, no "oh by the way, that'll be extra."

**Built for the long term**
I use modern, maintainable technology. Your site won't be outdated in 6 months, and you won't be locked into expensive ongoing contracts.
```

---

## PHASE 5 VERIFICATION CHECKLIST

### Critical Checks
- [ ] Portfolio results wording reads naturally (not like shorthand)
- [ ] Portfolio has new "Want results like this?" CTA section
- [ ] Portfolio CTA section has both button options
- [ ] About page has only ONE "Hi, I'm Andrew"
- [ ] About page has new "Why Clients Choose" section
- [ ] "Why Clients Choose" section is clear and scannable

### Content Quality Check
- [ ] Graceful Pet Care results sound professional
- [ ] Portfolio closing CTA is compelling
- [ ] About page flows without redundancy
- [ ] "Why Choose" section reinforces key differentiators
- [ ] All new copy matches site tone (confident, friendly)

### Mobile Check
- [ ] Portfolio CTA section displays well on mobile
- [ ] About page new section is readable on mobile
- [ ] No layout breaks on small screens

---

## PHASE 5 GIT COMMIT

After Andy approves Phase 5:

```bash
git add .
git commit -S -m "Phase 5: Portfolio and About content improvements

- Smooth Graceful Pet Care results wording
- Add strong closing CTA to Portfolio page
- Remove duplicate intro on About page
- Add 'Why Clients Choose' section to About

Final quality polish complete"
git push origin fix/phase5-content-improvements
```

Create PR and merge after approval.

---

# FINAL VERIFICATION (All Phases Complete)

## Critical Expectation Checks
- [ ] Nowhere promises CMS access for non-technical clients
- [ ] All "update" mentions refer to requests, not DIY editing
- [ ] FAQ clearly explains developer-maintained model
- [ ] "How We Work" doesn't promise content management training
- [ ] No "easy to update" promises in DIY sense

## Pricing Consistency Checks
- [ ] Only £75/hour mentioned for updates site-wide
- [ ] Hosting costs clearly explained (£5-20 raw vs £50-150 managed)
- [ ] First year hosting inclusion mentioned
- [ ] Maintenance packages clearly positioned

## Polish Checks
- [ ] All primary CTAs say "Book a free consultation"
- [ ] Services page decision framework is readable
- [ ] No formatting glitches (double bullets, jammed text)
- [ ] Portfolio has strong closing CTA
- [ ] About page flows well without redundancy

## User Journey Test
Visit site as potential pet care business owner:
- [ ] Home → understand offer → check Services → know pricing
- [ ] Read FAQ "Can I update?" → understand updates go through Andy
- [ ] Check How We Work → no surprise CMS training promise
- [ ] Book consultation → expectations aligned

**If any check fails, that phase needs revisiting.**

---

# SUCCESS METRICS

**Immediate (Week 1):**
- Zero enquiries asking "Can I edit this myself?" during discovery
- Clients understand and accept update process during onboarding
- No surprises when site launches

**Short-term (Month 1):**
- No complaints about lack of CMS
- Maintenance package uptake tracked
- Clear understanding from leads

---

**End of All 5 Phases Implementation Document**
