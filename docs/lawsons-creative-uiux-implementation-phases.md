# Lawsons Creative - UI/UX Implementation Plan
**Post-Content Audit Improvements**  
**Date:** 13 November 2025  
**Source:** UI/UX Audit Report (01-lc-ui-ux-13-11-2025-1.md)

---

## PHASE 1: CRITICAL FIXES (Do First - 1-2 hours)
**Priority:** URGENT - These are breaking user experience right now

### 1.1 Fix 404 on /how-we-work Route

**The Problem:**
- `/how-we-work` returns 404
- Google has indexed it
- Users landing from search get broken page
- Damages credibility for a UX-focused business

**The Fix:**
- Decide: Keep `/process` or `/how-we-work` (Recommendation: `/how-we-work` is clearer)
- Create redirect from old URL to chosen URL
- Update navigation label to match (use "How We Work" not "Process")
- Update all internal links site-wide
- Update sitemap

**Files to Change:**
- Routing config
- Navigation component
- Any internal links referencing this page
- Sitemap

**Verification Steps:**
✅ Visit `https://www.lawsonscreative.co.uk/how-we-work` - should load, not 404
✅ Visit old URL if different - should redirect
✅ Check navigation label matches URL
✅ Click "How We Work" in nav - should work
✅ Check mobile navigation - should work

**Success Criteria:**
- No 404 errors
- Consistent URL and label everywhere
- Google Search Console shows no errors for this URL (check within 24 hours)

---

### 1.2 Unify Primary CTA Language

**The Problem:**
- Multiple CTA labels: "Get Started", "Contact", "Book a free consultation"
- Causes user hesitation ("Which one do I click?")
- Splits analytics tracking

**The Fix:**
- Standardise site-wide to: **"Book a free consultation"**
- Make "Contact" a footer-only secondary option
- Ensure all primary buttons point to same conversion surface
- Update navigation "Get Started" to "Book a Call" or remove if redundant

**Files to Change:**
- Homepage hero
- All pricing package cards
- Portfolio page CTAs
- About page CTAs
- Footer
- Navigation (replace or remove "Get Started")

**Verification Steps:**
✅ Homepage hero: Primary button says "Book a free consultation"
✅ All 3 pricing cards: CTAs say "Book a free consultation"
✅ Portfolio page: CTA says "Book a free consultation"
✅ About page: CTA says "Book a free consultation"
✅ Navigation: No conflicting "Get Started" or it's renamed appropriately
✅ All CTAs link to same destination (contact form or booking page)

**Success Criteria:**
- Single, clear primary action across entire site
- Secondary "Prefer email?" option available but de-emphasised
- Consistent tracking on single CTA

---

### 1.3 Hero CTA Hierarchy (Visual Priority)

**The Problem:**
- "View our work" and "Book a free consultation" have equal visual weight
- Visitors may default to lower-intent "View our work" and never convert

**The Fix:**
- Make "Book a free consultation" the **primary button** (filled, brand colour, prominent)
- Downgrade "View our work" to **secondary button** (outline/ghost style) OR text link
- Ensure 60/40 or 70/30 visual split (primary much more prominent)

**Files to Change:**
- Homepage hero component
- Button styling/classes

**Verification Steps:**
✅ "Book a free consultation" is visually dominant (filled, coloured)
✅ "View our work" is visually secondary (outline or text link)
✅ Colour contrast passes WCAG AA
✅ Mobile: Primary button still dominant
✅ Hover states work correctly

**Success Criteria:**
- Clear visual hierarchy guides users to booking action
- Eye-tracking test: Primary button catches attention first

---

## PHASE 2: HOME PAGE IMPROVEMENTS (2-3 hours)
**Priority:** HIGH - Direct conversion impact

### 2.1 Case Study Stats - 3-Column Card Layout

**The Problem:**
- Stats (35%, 80%, 2x) are separated from their labels in HTML
- Hard to scan quickly
- Doesn't showcase results as powerfully as it could

**The Fix:**
- Create **3-column card layout** for stats
- Each card contains: Number (large) + Label (smaller)
- Cards should be scannable at a glance

**Layout:**
```
┌─────────────────┬─────────────────┬─────────────────┐
│     35%         │      80%        │      2×         │
│  more enquiries │ mobile bookings │ professionalism │
└─────────────────┴─────────────────┴─────────────────┘
```

**Files to Change:**
- Homepage case study section
- Potentially create reusable stats card component

**Verification Steps:**
✅ Stats display in 3 equal-width columns on desktop
✅ Each stat + label grouped together visually
✅ Mobile: Cards stack or display in readable grid
✅ Numbers are large and scannable (bigger than labels)
✅ Spacing between cards is consistent
✅ Visual hierarchy: Number > Label

**Success Criteria:**
- Stats are instantly scannable
- Clear visual grouping of number + meaning
- Works on all screen sizes

---

### 2.2 Reduce Pricing Detail on Home (Keep Summary)

**The Problem:**
- Full pricing packages shown on both Home and Services pages
- Creates maintenance headache (must update in two places)
- Makes Home page very long on mobile

**The Fix:**
- **Home:** Show pricing **summary** only:
  - Package name + price range + 1-line description + CTA
  - "See full details" link to Services page
- **Services:** Keep full detailed breakdown with all features

**Home Page Pricing (New Structure):**
```
Starter (£500-£800)
Perfect for new businesses getting online
[See details] [Get started]

Professional (£1,200-£2,000)  
For established businesses ready to grow
[See details] [Get started]

Premium (£2,500-£4,000)
Custom solutions for complex needs
[See details] [Get started]
```

**Files to Change:**
- Homepage pricing section (simplify)
- Services page (keep full detail)
- Consider creating two components: PricingCardSummary vs PricingCardFull

**Verification Steps:**
✅ Home: Shows concise pricing summary (name, range, 1-line, CTAs)
✅ Home: "See details" links to Services page
✅ Services: Shows full feature lists and inclusions
✅ Both pages: Prices and ranges match exactly
✅ Mobile: Home pricing section is significantly shorter than before
✅ Services page: Full detail is comprehensive and clear

**Success Criteria:**
- Home page is shorter and less overwhelming
- Visitors can still understand pricing tiers from Home
- Services page is the definitive source of package details
- Single source of truth for price changes

---

### 2.3 Post-FAQ CTA Addition

**The Problem:**
- FAQ section ends without clear next step
- Visitors read FAQs then... what?

**The Fix:**
- Add CTA block immediately after FAQ section
- Copy: "Still unsure? Book a free consultation to discuss your project."
- Button: "Book a free consultation"

**Files to Change:**
- Homepage FAQ section (add closing CTA block)

**Verification Steps:**
✅ CTA block appears directly after last FAQ
✅ Copy is encouraging and specific
✅ Button matches primary CTA styling
✅ Link points to booking/contact form
✅ Mobile: CTA is visible without excessive scrolling

**Success Criteria:**
- Natural conversion point after FAQ section
- Reduces FAQ → bounce rate

---

## PHASE 3: SERVICES PAGE IMPROVEMENTS (1-2 hours)
**Priority:** MEDIUM - Support pages need polish

### 3.1 Services Page Structure

**The Problem:**
- Potential duplication with Home
- Could be better structured for decision-making

**The Fix:**
- **Above pricing cards:** Add decision framework
  - "Not sure which package fits your needs? Here's how to decide..."
  - Simple decision tree or comparison
- **Below pricing cards:** Add "Still unsure?" CTA
- Ensure "Add-on services" section is clear and scannable

**Files to Change:**
- Services page layout

**Verification Steps:**
✅ Decision framework appears before pricing cards
✅ Helps visitors self-select appropriate package
✅ Add-ons section is clear and separate from main packages
✅ "Still unsure?" CTA appears at bottom
✅ Page flows logically: Intro → Decision help → Packages → Add-ons → CTA

**Success Criteria:**
- Reduces "Which package do I need?" queries
- Clear path to conversion at end of page

---

## PHASE 4: PORTFOLIO IMPROVEMENTS (2-3 hours)
**Priority:** MEDIUM-HIGH - Addresses "thin portfolio" perception

### 4.1 Enhance Graceful Pet Care Case Study Layout

**The Problem:**
- Single case study needs to work harder
- Layout could better showcase the transformation

**The Fix:**
- **Restructure case study page/section:**
  - Challenge (what was wrong)
  - Solution (what we built) - bullet list of key features
  - Results (stats in 3-column cards as per Phase 2.1)
  - Testimonial (quote with client photo if available)
  - Before/After images (side-by-side comparison)
  
**Layout Structure:**
```
# Graceful Pet Care
[Industry tag] [Timeline badge]

## The Challenge
[2-3 sentences about the problem]

## What We Built
- Feature 1
- Feature 2
- Feature 3
[View live site button]

## The Results
[3-column stat cards - as per Phase 2.1]

## What The Client Said
[Testimonial quote]
— Client Name, Role

## Before & After
[Side-by-side image comparison]
```

**Files to Change:**
- Portfolio page or individual case study page
- Consider creating reusable case study template

**Verification Steps:**
✅ Case study has clear structure: Challenge → Solution → Results → Testimonial
✅ "What we built" bullets are specific and scannable
✅ Stats use 3-column card layout (consistent with Home)
✅ Before/After images are clear and comparable
✅ "View live site" button is prominent
✅ Mobile: Layout remains readable and images don't break

**Success Criteria:**
- Case study tells a compelling story
- Results are immediately obvious
- Visitors understand the value delivered

---

### 4.2 Address "More Coming Soon" Message

**The Problem:**
- "More projects coming soon" signals inexperience
- Single case study looks thin

**The Fix:**
**Option A (Honest but strategic):**
```
## Building Our Public Portfolio

We're currently working with [number] clients and documenting these projects as case studies. In the meantime, Graceful Pet Care demonstrates our approach and results.

Have a project in mind? We'd love to make yours the next featured case study.
[Book a consultation]
```

**Option B (Add placeholder projects):**
- Add 1-2 additional "coming soon" cards BUT:
  - Use real project names/types (e.g., "Fitness Coach Rebrand")
  - Include industry tag and status: "In progress"
  - Makes portfolio look active, not empty

**Option C (Remove the apology):**
- Simply remove "More coming soon" entirely
- Focus attention on the strong case study you have
- Add new projects when ready without pre-announcing

**Recommendation:** Use Option A or C (honest without apologising)

**Files to Change:**
- Portfolio page intro text

**Verification Steps:**
✅ No apologetic "coming soon" language
✅ If using Option A: Copy is confident and forward-looking
✅ If using Option B: Placeholder cards clearly marked "In progress"
✅ Focus remains on showcasing quality over quantity

**Success Criteria:**
- Portfolio doesn't signal inexperience
- Visitors focus on the strong work shown, not what's missing

---

## PHASE 5: ABOUT PAGE POLISH (1-2 hours)
**Priority:** MEDIUM - Trust signals

### 5.1 Add Photo and Micro-Bio Block

**The Problem:**
- About page might lack personal connection
- Solo operator needs to build individual trust

**The Fix:**
- Add professional photo at top of About page
- Create "About Andy" micro-bio block (2-3 sentences)
- Keep it professional but personable

**Structure:**
```
[Professional photo - left]
[Micro bio - right]

"I'm Andy, the person behind Lawsons Creative. I build websites for small service businesses who need results, not just pretty designs. Based in London, I've helped [X] businesses transform their online presence and generate more enquiries."
```

**Files to Change:**
- About page hero/intro section

**Verification Steps:**
✅ Photo is professional quality
✅ Photo displays correctly on all screen sizes
✅ Micro-bio is concise and personal
✅ Layout works on mobile (photo + text stack appropriately)
✅ Feels warm and approachable, not corporate

**Success Criteria:**
- Visitors connect with the person, not just the business
- Trust is established early on About page

---

### 5.2 Reformat "Who I Work Best With" as Visual Checklist

**The Problem:**
- Section exists (from content audit) but might be text-heavy
- Could be more scannable

**The Fix:**
- Convert to visual checklist with icons/checkmarks
- Each point should be 1 line with ✅ icon
- Add contrasting "Not a good fit?" section with ❌ icons

**Layout:**
```
## Who I work best with

✅ Want results, not just pretty websites
✅ Value speed and efficiency  
✅ Appreciate transparency
✅ Ready to invest properly
✅ Know what they do

## Not a good fit?

❌ Need a £200 basic site → Try Fiverr
❌ Need £50k enterprise platform → Contact an agency
✅ Need quality without overpaying → You're in the right place
```

**Files to Change:**
- About page "Who I work best with" section

**Verification Steps:**
✅ Checklist uses visual icons (✅/❌)
✅ Each point is concise (1 line max)
✅ "Not a good fit" section provides alternatives
✅ Ends with positive reframe
✅ Mobile: Checklist remains scannable

**Success Criteria:**
- Visitors can quickly self-qualify
- Pre-qualifies leads effectively
- Doesn't feel exclusionary

---

## PHASE 6: CONTACT FORM ENHANCEMENTS (1 hour)
**Priority:** MEDIUM - Form improvements beyond copy

### 6.1 Improve Form Field Design

**The Problem:**
- Basic form might not inspire confidence
- Error handling might be unclear

**The Fix:**
- Ensure every field has **visible label** (not just placeholder)
- Add **helper text** for complex fields (as per content audit)
- Create **clear error states** with inline messages
- Add **reassurance text** above submit button (as per content audit)

**Improvements:**
- All fields: Label + Input (placeholders are hints, not labels)
- Website URL field: "(Leave blank if you don't have one yet)"
- Budget field: "(Helps us recommend the right package)"
- Timeline field: "(Choose 'Just exploring' if you're not sure)"
- Submit button area: "No spam, no pushy sales — just an honest conversation."

**Files to Change:**
- Contact form component
- Form validation logic

**Verification Steps:**
✅ All fields have visible labels above input
✅ Helper text appears where specified
✅ Placeholders provide examples, not instructions
✅ Error messages are inline and specific
✅ Tab order flows logically through form
✅ Focus states are visible (accessibility)
✅ Mobile: Form is easy to fill out
✅ Reassurance text displays near submit button

**Success Criteria:**
- Form feels professional and trustworthy
- Users know what to enter in each field
- Error messages are helpful, not generic
- Passes basic accessibility checks

---

## PHASE 7: TECHNICAL & SEO POLISH (1-2 hours)
**Priority:** MEDIUM - SEO and technical improvements

### 7.1 Add Structured Data (Schema Markup)

**The Fix:**
- Add **LocalBusiness** schema to site
- Add **FAQPage** schema to FAQ section
- Add **WebPage** schema to main pages

**Files to Change:**
- Add JSON-LD structured data to pages
- Or use schema component if framework supports

**Verification Steps:**
✅ Test with Google's Rich Results Test
✅ LocalBusiness schema includes: name, address, logo, contact
✅ FAQPage schema includes all FAQ questions/answers
✅ No schema errors in validation tool

**Success Criteria:**
- Enhanced SERP display potential
- Better Google understanding of content

---

### 7.2 Optimise Images for Performance

**The Fix:**
- Convert all images to WebP format
- Ensure before/after mockups are optimised
- Add lazy loading to images below fold
- Check image alt text is descriptive

**Files to Change:**
- Image assets
- Image component loading attributes

**Verification Steps:**
✅ All images in WebP format with fallbacks
✅ Image file sizes reduced (check with dev tools)
✅ Lazy loading implemented correctly
✅ Alt text present and descriptive on all images
✅ Before/after images load quickly

**Success Criteria:**
- Page load time improved
- Backs up "fast-loading" positioning claim
- Better SEO from optimised images

---

### 7.3 Update XML Sitemap & Submit to Search Console

**The Fix:**
- Regenerate sitemap after route fixes
- Submit to Google Search Console
- Check for crawl errors

**Files to Change:**
- sitemap.xml

**Verification Steps:**
✅ All pages present in sitemap
✅ No 404 URLs in sitemap
✅ All URLs use correct (non-redirecting) version
✅ Submitted to Google Search Console
✅ No errors in Coverage report

**Success Criteria:**
- Clean sitemap
- Google can crawl all pages
- No 404s or redirect chains

---

## IMPLEMENTATION SEQUENCE

### Day 1 (Critical)
- Phase 1: All critical fixes (404, CTA unification, hero hierarchy)
- Test thoroughly before moving on

### Day 2 (Home Page)
- Phase 2: Home page improvements (stats layout, pricing summary, post-FAQ CTA)
- Test on multiple devices

### Day 3 (Supporting Pages)
- Phase 3: Services page structure
- Phase 5: About page polish

### Day 4 (Portfolio)
- Phase 4: Portfolio improvements and case study enhancement

### Day 5 (Forms & Technical)
- Phase 6: Contact form enhancements
- Phase 7: Technical & SEO polish

---

## MASTER VERIFICATION CHECKLIST

After all phases complete, test these user journeys:

### Journey 1: First-time visitor from Google
✅ Lands on Home → Hero is clear → Understands offer → Sees case study → Checks pricing → Reads FAQ → Books consultation
✅ No broken links or 404s encountered
✅ Mobile experience is smooth

### Journey 2: Researching competitor options
✅ Lands on About → Connects with Andy → Reads "Who I work best with" → Self-qualifies → Checks Services → Compares packages → Books consultation

### Journey 3: Direct to Portfolio from social share
✅ Lands on Portfolio → Sees strong case study → Understands results → Wants more → Clicks to Services or Books consultation

### Journey 4: Landing on 404 or broken page
✅ Helpful 404 page with navigation back to Home
✅ No /how-we-work 404 (fixed in Phase 1)

### Cross-browser testing
✅ Chrome (desktop + mobile)
✅ Safari (desktop + mobile)
✅ Firefox
✅ Edge

### Accessibility checks
✅ Keyboard navigation works throughout
✅ Screen reader can navigate logically
✅ Colour contrast passes WCAG AA
✅ Focus states visible
✅ Form labels and errors are clear

---

## SUCCESS METRICS (Track Post-Implementation)

**Immediate (Week 1):**
- [ ] No 404 errors in Google Search Console
- [ ] Bounce rate on Home page
- [ ] Time on Portfolio page
- [ ] Contact form submission rate

**Short-term (Month 1):**
- [ ] Consultation bookings (vs previous month)
- [ ] Email quote requests
- [ ] Pages per session increase
- [ ] Reduced "back button" rate from pricing section

**Long-term (Month 3):**
- [ ] Organic traffic growth
- [ ] Portfolio page views
- [ ] Conversion rate improvement
- [ ] Client testimonials mentioning website quality

---

## NOTES FOR CLAUDE CODE

- Implement one phase at a time
- After each phase, provide:
  1. List of files changed
  2. Summary of changes made
  3. Reminder of verification steps to test
- Wait for user confirmation before proceeding to next phase
- If any changes affect multiple pages, note them explicitly
- Maintain all existing functionality while improving UX
- Keep design system consistent (colours, spacing, typography)

---

**End of Implementation Plan**  
Ready for phased implementation via Claude Code.
