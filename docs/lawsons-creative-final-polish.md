# Lawsons Creative - Final Polish Tweaks
**Post-Launch Review Refinements**  
**Date:** 13 November 2025  
**Source:** High-level live site check feedback  
**Estimated Time:** 30 minutes total

---

## PHASE 1: Portfolio "Coming Soon" Wording (10 mins)

### The Problem
**Current wording:**
```
More projects coming soon
We're currently building... check back soon to see more transformations.
```

**Why it's not ideal:**
- Heading still signals "we don't have much yet"
- Slightly apologetic tone
- "Check back soon" feels passive

### The Fix

**Option A (Recommended - Confident & Forward-Looking):**

Remove "More projects coming soon" heading entirely and replace with:

```
## Current Projects in Development

We're currently building new sites for fitness coaches, trades professionals, and creative service businesses. As those projects launch, we'll add them here with full case studies and results.

In the meantime, Graceful Pet Care demonstrates our approach: strategy-first design that drives real business results.

[Book a free consultation]
```

**Option B (Even More Confident - No Apology):**

Replace entire section with:

```
## Ready to Be Our Next Success Story?

Every project we take on becomes a showcase of strategy-led design and measurable results. If you're a UK service business ready to transform your online presence, let's talk.

[Book a free consultation]
```

**Recommendation:** Use Option A (acknowledges work in progress without apologising)

### Files to Change
- `/portfolio` page (bottom section after Graceful Pet Care case study)

### Implementation Steps
1. Locate "More projects coming soon" heading
2. Replace with chosen option (A or B)
3. Ensure CTA button is present and functional
4. Remove any "check back soon" language

### Verification Checklist
✅ "More projects coming soon" heading is removed
✅ New heading is confident and forward-looking
✅ Copy mentions work in progress without apologising
✅ References Graceful Pet Care as example of approach
✅ CTA button present and functional
✅ Mobile: Section reads well on small screens
✅ Tone matches rest of site (confident, professional)

### Success Criteria
- Portfolio page ends on confident note
- Visitor focus stays on quality of work shown, not what's missing
- Natural transition to booking CTA

---

## PHASE 2: Contact Form Required Field Markers (10 mins)

### The Problem
**Current state:**
- Timeline and Budget fields are present but not clearly marked as required
- No visual `*` or (required) indicator
- Users might skip important qualifying fields

**Why it matters:**
- Pre-qualification depends on getting this info
- Unclear what's mandatory vs optional
- Could lead to incomplete submissions

### The Fix

**Add clear required field markers:**

1. **Visual indicators:**
   - Add red `*` next to required field labels
   - Add "(required)" or "(optional)" text to all fields

2. **Required fields should be:**
   - Name (required)
   - Email (required)
   - Business type (required)
   - What do you need? (required)
   - Timeline (recommended but not blocking)
   - Budget (recommended but not blocking)
   - Message (required)

3. **Helper text clarification:**
   - Timeline: "(Helps us schedule - choose 'Just Exploring' if you're not sure)"
   - Budget: "(Helps us recommend the right package - all budgets welcome)"

### Files to Change
- Contact form component
- Form field labels
- Form validation logic (if changing required status)

### Implementation Steps
1. Add `*` or "(required)" to mandatory fields: Name, Email, Business type, What do you need?, Message
2. Add "(optional)" or "(helps us...)" to Timeline and Budget
3. Update validation to enforce required fields only
4. Ensure error messages match required status
5. Style required `*` in brand colour (visible but not aggressive)

### Verification Checklist
✅ All required fields show red `*` or "(required)" label
✅ Optional fields show "(optional)" or helper text
✅ Can see required indicators on both desktop and mobile
✅ Required fields: Name, Email, Business type, What you need, Message
✅ Timeline: Optional with helper text
✅ Budget: Optional with helper text
✅ Form validation enforces only required fields
✅ Error messages accurate (don't say field is required if it's optional)
✅ Submitting empty form shows errors only on required fields
✅ Required markers are visually clear but not overwhelming

### Success Criteria
- Users immediately understand what's mandatory vs optional
- Pre-qualification still happens (Timeline/Budget encouraged via helper text)
- Form submission rate doesn't drop (optional fields reduce friction)
- Error messages are helpful and accurate

---

## PHASE 3: Response Time Consistency (10 mins)

### The Problem
**Current mentions:**
- Home footer: "Typical response time: < 24 hours"
- Contact intro: "we'll respond within 24 hours"

**Potential risk:**
- If any future copy says "2 hours" or "same day", creates confusion
- Need to ensure all mentions are consistent
- Success emails/toasts might contradict site copy

### The Fix

**Standardise on:** "We'll respond within 24 hours (usually much faster)"

**Where to update:**

1. **Home page footer CTA section:**
```
Current: "Typical response time: < 24 hours"
New: "Response time: Within 24 hours (usually faster)"
```

2. **Contact page intro:**
```
Keep: "we'll respond within 24 hours"
Or update to: "We'll respond within 24 hours (usually much faster)"
```

3. **Form success message (if exists):**
```
"Thanks! We'll respond within 24 hours (usually much faster). Check your email for confirmation."
```

4. **Confirmation email (if exists):**
```
Subject: "Got your enquiry - we'll respond within 24 hours"
Body: "...we'll respond within 24 hours, often much faster."
```

**Key principle:** Always promise 24 hours, never promise less (under-promise, over-deliver)

### Files to Change
- Home page footer section
- Contact page intro
- Form success message/toast
- Email confirmation template (if exists)
- Any other pages mentioning response time

### Implementation Steps
1. Search codebase for: "response time", "respond within", "24 hours", "< 24"
2. Update all instances to use consistent wording
3. Ensure no mentions of "2 hours", "same day", "immediate" unless qualified
4. Add "(usually faster)" caveat where appropriate
5. Check email templates if they exist

### Verification Checklist
✅ Home footer: Consistent response time wording
✅ Contact page intro: Consistent response time wording
✅ Form success message: Consistent response time wording
✅ Email confirmation (if exists): Consistent wording
✅ All mentions say "within 24 hours" (not "< 24" or "2 hours")
✅ "(usually faster)" or similar caveat included where appropriate
✅ No conflicting timelines anywhere on site
✅ Wording feels reassuring, not rushed

### Testing Steps
1. Submit test form
2. Check success message wording
3. Check confirmation email (if sent)
4. Verify all on-page mentions match

### Success Criteria
- Single, consistent SLA across entire site and emails
- Sets realistic expectation (24 hours)
- Adds reassurance (usually faster)
- No risk of under-delivering on promised response time

---

## IMPLEMENTATION SEQUENCE

**Total time: ~30 minutes**

1. **Phase 1** (10 mins): Portfolio wording
   - Quick copy change
   - Test on live site

2. **Phase 2** (10 mins): Form field markers
   - Update labels and helper text
   - Test form validation
   - Submit test form to verify

3. **Phase 3** (10 mins): Response time consistency
   - Search and replace
   - Check all pages
   - Submit test form to check success message

---

## MASTER VERIFICATION (After All 3 Phases)

### Full Site Spot Check
✅ Visit Portfolio page - confident ending, no apologetic language
✅ Visit Contact page - required fields clearly marked
✅ Fill out form - helper text is clear and encouraging
✅ Submit form - success message mentions 24hr response time
✅ Check Home footer - response time matches Contact page
✅ Mobile check - all changes work on small screens

### User Journey Test
✅ Portfolio → "Ready to be next success story" → Book consultation → Form is clear → Submit → Consistent messaging

---

## COPY REFERENCE (For Quick Implementation)

### Portfolio Page - New Ending Section

**Option A (Recommended):**
```markdown
## Current Projects in Development

We're currently building new sites for fitness coaches, trades professionals, and creative service businesses. As those projects launch, we'll add them here with full case studies and results.

In the meantime, Graceful Pet Care demonstrates our approach: strategy-first design that drives real business results.

[Book a free consultation]
```

**Option B (Alternative):**
```markdown
## Ready to Be Our Next Success Story?

Every project we take on becomes a showcase of strategy-led design and measurable results. If you're a UK service business ready to transform your online presence, let's talk.

[Book a free consultation]
```

---

### Contact Form - Field Labels & Helper Text

**Required fields (add red `*` or "(required)"):**
- Name *
- Email *
- What type of business do you have? *
- What do you need? *
- Tell us about your project *

**Optional fields with helper text:**
- Current website URL (optional - leave blank if you don't have one)
- Timeline (Helps us schedule - choose 'Just Exploring' if you're not sure)
- Budget range (Helps us recommend the right package - all budgets welcome)

---

### Response Time - Standardised Wording

**Use everywhere:**
```
"We'll respond within 24 hours (usually much faster)"
```

**Locations:**
- Home page footer CTA
- Contact page intro
- Form success message
- Confirmation email subject/body

---

## NOTES FOR CLAUDE CODE

- These are minor polish tweaks, not major changes
- Implement all 3 phases in one go if easier
- After completion, provide:
  1. List of files changed
  2. Summary of what was updated
  3. Any edge cases or questions
- Test form submission to verify Phase 2 and 3 changes
- These changes should not affect any existing functionality

---

## POST-IMPLEMENTATION

Once complete, the site will be:
✅ Fully polished and professional
✅ Portfolio positioning confident
✅ Contact form crystal clear
✅ Messaging consistent throughout
✅ Ready for business development focus

**Next priorities after this:**
- Build additional portfolio pieces (fitness coach, photographer, landscaper)
- Set up analytics and conversion tracking
- Create content hub / blog for SEO
- Launch Fiverr gig

---

**End of Final Polish Plan**  
Ready for immediate implementation via Claude Code.
