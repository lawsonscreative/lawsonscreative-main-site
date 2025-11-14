# Lawsons Creative - Content Audit Implementation Plan
**Critical Alignment Fixes**  
**Date:** 14 November 2025  
**Source:** Full Content Audit (including FAQ)  
**Priority:** HIGH - Expectation mismatches must be fixed before taking new clients

---

## CRITICAL CONTEXT

The site currently promises clients can:
- Update websites themselves via CMS
- Get training on content management
- Have "easy to update" sites

**Your actual delivery model:**
- No CMS for non-technical clients
- Clients email you for changes
- Updates via maintenance or hourly rate
- Developer-maintained Next.js sites

**This is not a polish issue - this is an expectation management crisis.** Must be fixed before taking new bookings.

---

## PHASE 1: FIX DELIVERY MODEL PROMISES (CRITICAL - 2-3 hours)
**Priority:** URGENT - False expectations will damage client relationships

### 1.1 Rewrite FAQ: "Can I update the website myself after it's built?"

**Current answer (WRONG):**
```
Absolutely! Every website includes:

Training session: I'll show you how to make common updates
Documentation: Step-by-step guides
CMS access: You'll have full control via a user-friendly content management system

Most common updates are easy:
- Changing text or prices: 2–3 minutes
- Adding photos to a gallery: 5 minutes
- Publishing a blog post: 10 minutes

95% of clients feel confident making their own updates after the training session.
```

**New answer (ALIGNED WITH REALITY):**
```
**It depends on your technical background and update needs:**

**For non-technical clients (most small businesses):**
Your website is built with modern, high-performance technology (not a drag-and-drop builder). This means it's fast and robust, but doesn't have a "log in and edit" interface like WordPress or Wix.

For most updates (changing text, adding images, updating prices), you simply email me what needs changing. I'll handle it and typically turn it around same-day or next-day.

**Cost for updates:**
- Included in maintenance package (£50-150/month) - recommended for regular updates
- Pay-as-you-go: £75/hour for occasional changes
- Small text tweaks (typos, phone numbers): Usually free as a courtesy

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

**Files to Change:**
- Homepage FAQ section
- Potentially FAQ page if separate

**Verification Checklist:**
✅ Answer no longer promises CMS access
✅ Clearly explains developer-maintained model
✅ Sets expectations on update turnaround
✅ Provides clear pricing for updates
✅ Mentions maintenance package option
✅ Offers CMS as special request, not default
✅ Tone is confident, not apologetic

---

### 1.2 Fix "How We Work" Page - Launch Step

**Current (WRONG):**
```
After your final approval, we launch your site, set up analytics, and provide training on managing content. You're live and ready to grow.

What you'll get:
- Live website on your domain
- Analytics configured and tracking
- Training on content management
- Documentation for future reference
- Post-launch support (depends on package)
```

**New (ALIGNED):**
```
After your final approval, we launch your site, set up analytics, and walk you through how everything works. You're live and ready to grow.

What you'll get:
- Live website on your domain
- Analytics configured and tracking
- Walkthrough of how to track performance and request updates
- Simple guide to requesting changes (typos, new content, etc.)
- Documentation for future reference
- Post-launch support (depends on package)
```

**Files to Change:**
- `/how-we-work` page - Launch step section

**Verification Checklist:**
✅ No mention of "training on content management"
✅ No promise of CMS training
✅ Focuses on analytics and requesting updates
✅ Sets expectation that updates go through you
✅ "Simple guide to requesting changes" is realistic

---

### 1.3 Fix Home Page - "Built to Last" Section

**Current (MISLEADING):**
```
Built to Last

We use modern, maintainable technology that won't be outdated in 6 months. Your site is fast, secure, and easy to update.
```

**New (ACCURATE):**
```
Built to Last

We use modern, maintainable technology that won't be outdated in 6 months. Your site is fast, secure, and straightforward to keep current with simple update requests or ongoing maintenance.
```

**Files to Change:**
- Homepage - "Built to Last" benefit section

**Verification Checklist:**
✅ No promise of "easy to update" (in DIY sense)
✅ Mentions "update requests" or "ongoing maintenance"
✅ Still sounds professional and confident

---

### 1.4 Check All Other "Easy to Update" Promises

**Action:**
Search entire site for phrases:
- "easy to update"
- "update yourself"
- "manage your own"
- "CMS"
- "content management"
- "training"

**Fix any that imply DIY editing capability**

**Verification Checklist:**
✅ No promises of CMS access anywhere
✅ No promises of DIY editing for non-technical clients
✅ All "update" mentions refer to requesting changes via you

---

## PHASE 2: FIX PRICING CONTRADICTIONS (CRITICAL - 1-2 hours)
**Priority:** URGENT - Conflicting prices confuse clients and hurt credibility

### 2.1 Choose One Hourly Rate for Updates

**Current contradiction:**
- FAQ: "Pay-as-you-go: £75/hour"
- Services page: "Content updates - £40 per hour"

**Decision needed:** Which rate is real?

**Option A (Recommended): Use £75/hour everywhere**
- FAQ: Already says £75/hour
- Services page: Change to £75/hour
- Rationale: £40/hour might be too low for your time/expertise

**Option B: Use £40/hour everywhere**
- FAQ: Change to £40/hour
- Services page: Already says £40/hour
- Rationale: More competitive, easier to sell maintenance packages

**Option C: Two-tier pricing (most complex)**
- Small changes (typos, simple text): £40/hour
- Complex changes (new sections, functionality): £75/hour
- Must be explained clearly on both pages

**Recommendation: Choose Option A (£75/hour) - align everything to the FAQ's current rate**

**Files to Change:**
- Services page - Add-on services section
- FAQ answer for "What if I need changes after launch?"
- Any proposals/templates that mention hourly rates

**Implementation:**
```
Services page - Add-on services:
Content updates
£75 per hour
Small text changes, new images, minor adjustments

FAQ answer:
Pay-as-you-go: £75/hour for one-off content updates or new pages
```

**Verification Checklist:**
✅ Services page shows chosen rate
✅ FAQ shows same rate
✅ No other mentions of conflicting rates anywhere
✅ Rate is clearly explained (what's included)

---

### 2.2 Clarify Hosting & Maintenance Pricing

**Current confusion:**
- FAQ: First year hosting "effectively £0/month", then "£50-£150/month as part of maintenance package"
- Services: "Hosting (often free, or £5-20/month)"

**The fix - Create clear story:**

**Services page - What's NOT included section:**
```
Hosting & Maintenance

Hosting infrastructure costs £5-20/month (or free for simple static sites on Vercel/Netlify).

However, most clients opt for a maintenance package (£50-150/month) which includes:
- Hosting + CDN
- Security updates
- Regular backups
- Content updates (up to X hours/month)
- Priority support

First year hosting is included in your build cost. After that, you can:
- Self-manage hosting (£5-20/month) if you have technical capabilities
- Use our maintenance packages (recommended for most clients)

[See full maintenance package details →]
```

**FAQ answer for "What about hosting?" should match:**
```
What about hosting? Do I need to arrange that?

No, you don't need to worry about hosting — I'll handle everything.

**What's included:**
- Fast, secure hosting on modern platforms (Vercel or Netlify)
- Free SSL certificate (the padlock in the browser)
- Automatic backups
- 99.9% uptime guarantee
- Your custom domain setup (if you have one)

**Ongoing costs:**
- First year: Included in your build cost
- After year 1, you have two options:

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

**Files to Change:**
- Services page - "What's NOT included" section
- FAQ - "What about hosting?" answer
- Potentially add a maintenance packages page with tier breakdown

**Verification Checklist:**
✅ Clear distinction between "raw hosting" (£5-20) and "maintenance package" (£50-150)
✅ Both mention first year included
✅ Explains what each option includes
✅ No contradictory numbers
✅ Recommends maintenance package without being pushy

---

## PHASE 3: CTA & NAVIGATION CONSISTENCY (30 mins)
**Priority:** MEDIUM - Polish and professionalism

### 3.1 Standardise Primary CTA Label

**Current inconsistencies:**
- Nav: "Book a Call"
- Various pages: "Book a free consultation"
- Various pages: "Book your free consultation"

**The fix:**
Use **"Book a free consultation"** everywhere as primary CTA

**Files to Change:**
- Global navigation component
- All page CTAs (Home, Services, About, Portfolio, How We Work, Contact)
- Footer CTAs

**Search for:**
- "Book a Call"
- "Book a call"
- "Book your free consultation"

**Replace all with:**
- "Book a free consultation"

**Verification Checklist:**
✅ Navigation button says "Book a free consultation"
✅ All primary CTAs use this exact wording
✅ Secondary CTAs can use "Get a quote by email" (that's fine)
✅ No "Book a Call" anywhere
✅ Mobile navigation matches

---

## PHASE 4: SERVICES PAGE FORMATTING (30 mins)
**Priority:** MEDIUM - Current format is hard to read

### 4.1 Fix "Not Sure Which Package?" Section

**Current (jammed together):**
```
1 Just need an online presence? → Starter … 2 Ready to grow… 3 Need custom features…
```

**New (properly formatted):**
```
Not sure which package? Here's how to choose:

**1. Just need an online presence? → Starter**
Perfect for sole traders, new businesses, or single-service providers who need a simple but professional web presence.

**2. Ready to grow and generate leads? → Professional**
Ideal for established businesses with multiple services, portfolios to showcase, or those serious about online marketing.

**3. Need custom features or e-commerce? → Premium**
Best for businesses with specific requirements like online booking systems, product sales, or custom functionality.
```

**Files to Change:**
- Services page - decision framework section

**Verification Checklist:**
✅ Each option on separate line
✅ Numbers are clear: 1, 2, 3
✅ Arrow → is present
✅ Package name is bold or highlighted
✅ Supporting text is readable
✅ Mobile: Doesn't break into confusing layout

---

### 4.2 Fix Stray Bullet Characters

**Current (formatting error):**
```
•Sole traders just starting out
```
(Extra bullet character after the list marker)

**New:**
```
Sole traders just starting out
```

**Files to Change:**
- Services page - "Ideal For" sections
- Services page - "What's NOT included" sections

**Verification Checklist:**
✅ No double bullets (•• )
✅ Clean bullet points throughout
✅ Consistent formatting across all package cards

---

## PHASE 5: PORTFOLIO & ABOUT IMPROVEMENTS (1 hour)
**Priority:** LOW-MEDIUM - Quality improvements

### 5.1 Smooth Graceful Pet Care Results Wording

**Current (awkward):**
```
2x better / Professional, trustworthy appearance
```

**New:**
```
Professional, trustworthy appearance
Customers now regularly comment on how professional and trustworthy the website feels
```

**Files to Change:**
- Portfolio page - Graceful Pet Care results section
- Home page - Case study results (if displayed there too)

**Verification Checklist:**
✅ Results read naturally, not like internal shorthand
✅ Three metrics all have clear, professional wording
✅ Numbers (35%, 80%) are preserved
✅ Context is provided (e.g. "in first month")

---

### 5.2 Add Stronger Portfolio Closing CTA

**Current:**
Just has "Book a free consultation" after the case study

**New - Add section:**
```
## Want Results Like This for Your Business?

If your current website feels dated or isn't generating enquiries, let's fix that.

Every project I take on focuses on the same goal: websites that work as hard as you do to win customers and build trust.

[Book a free consultation] [Get a quote by email]
```

**Files to Change:**
- Portfolio page - bottom section (before or after "New client projects launching soon")

**Verification Checklist:**
✅ New section is compelling and conversion-focused
✅ Maintains confident tone
✅ Both CTA options present
✅ Links work correctly

---

### 5.3 Remove Duplicate "Hi, I'm Andrew" on About Page

**Current (redundant):**
- Intro: "Hi, I'm Andrew. I started Lawsons Creative because…"
- Then: "I'm Andrew, the person behind Lawsons Creative..."

**New:**
Keep first instance, change second to:
```
I build websites for small service businesses who need results, not just pretty designs. Based in London, I work directly with clients across the UK to create fast, modern websites that generate enquiries and build trust.
```

**Files to Change:**
- About page - intro/bio section

**Verification Checklist:**
✅ Only one "Hi, I'm Andrew"
✅ Second paragraph dives straight into what you do
✅ Flows naturally

---

### 5.4 Add "Why Clients Choose Lawsons Creative" to About

**New section - Use FAQ bullets:**
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

**Files to Change:**
- About page - add new section (probably after "Who I work best with")

**Verification Checklist:**
✅ Section appears on About page
✅ Bullets are clear and scannable
✅ Tone matches rest of site
✅ Reinforces key differentiators

---

## IMPLEMENTATION SEQUENCE

### Day 1 (CRITICAL - Must do first)
**Phase 1: Fix delivery model promises** (2-3 hours)
- Rewrite FAQ answer about self-editing
- Fix "How We Work" launch step
- Fix "Built to Last" wording
- Search for all "easy to update" / "CMS" mentions

**DO NOT take new bookings until Phase 1 is complete**

### Day 2 (CRITICAL - Pricing must be consistent)
**Phase 2: Fix pricing contradictions** (1-2 hours)
- Choose one hourly rate (recommend £75)
- Update Services page
- Update FAQ
- Clarify hosting vs maintenance pricing story

### Day 3 (Important polish)
**Phase 3: CTA consistency** (30 mins)
- Standardise all CTAs to "Book a free consultation"

**Phase 4: Services formatting** (30 mins)
- Fix decision framework layout
- Fix bullet character issues

### Day 4 (Quality improvements)
**Phase 5: Portfolio & About** (1 hour)
- Smooth results wording
- Add portfolio closing CTA
- Remove duplicate intro
- Add "Why Choose" section

---

## MASTER VERIFICATION (After All Phases)

### Critical Expectation Checks
✅ Nowhere on site promises CMS access for non-technical clients
✅ All "update" mentions refer to requesting changes, not DIY editing
✅ FAQ clearly explains developer-maintained model
✅ "How We Work" doesn't promise content management training
✅ No "easy to update" promises in DIY sense

### Pricing Consistency Checks
✅ Only one hourly rate mentioned site-wide
✅ Hosting costs are clearly explained (£5-20 raw vs £50-150 managed)
✅ First year hosting inclusion is mentioned
✅ Maintenance packages are clearly positioned

### Polish Checks
✅ All primary CTAs say "Book a free consultation"
✅ Services page decision framework is readable
✅ No formatting glitches (double bullets, jammed text)
✅ Portfolio has strong closing CTA
✅ About page flows well without redundancy

### User Journey Test
**Scenario: Non-technical pet care business owner**
✅ Reads Home → understands what you offer
✅ Checks Services → knows pricing and what's included
✅ Reads FAQ "Can I update?" → Understands updates go through you, not self-service
✅ Checks How We Work → No surprise CMS training promise
✅ Books consultation → Expectations are aligned

**If they book expecting DIY updates, something is still wrong**

---

## SUCCESS METRICS

**Immediate (within first week):**
- Zero enquiries asking "Can I edit this myself?" during discovery calls
- Clients understand and accept update process during onboarding
- No surprises or disappointment when site launches

**Short-term (first month after fixes):**
- No clients complaining about lack of CMS access
- Maintenance package uptake rate (track this)
- Clear understanding from leads on what they're getting

---

## NOTES FOR CLAUDE CODE

- Phase 1 is CRITICAL and must be done before taking new clients
- Don't soften or apologise in the delivery model explanations - be confident
- The new FAQ answer is longer, but it needs to be thorough to set proper expectations
- Test all changes on mobile - forms and CTAs especially
- After implementation, read the entire site as if you're a potential client - does it make sense? Are there contradictions?

---

**End of Critical Alignment Implementation Plan**  
This is not optional polish - these are expectation-management fixes that protect both you and your clients.
