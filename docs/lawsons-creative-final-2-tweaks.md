# Lawsons Creative - Final 2 Micro-Tweaks
**Post-Recheck Polish**  
**Date:** 13 November 2025  
**Source:** Quick recheck after changes  
**Estimated Time:** 5 minutes total

---

## Context

Site is now in "really good place" and "absolutely good enough to sell from". These are the last 2 polishing nits before it's 100% complete.

---

## TWEAK 1: Portfolio Heading (2 mins)

### The Issue
**Current heading:** "More projects coming soon"  
**Problem:** Still sounds slightly apologetic  
**Copy below heading:** Already confident and good

### The Fix

**Option A (Recommended - Replace heading):**
```
New client projects launching soon
```

**Option B (Alternative - More active):**
```
New launches every month
```

**Option C (Remove heading entirely):**
Just start with the paragraph text, no heading needed.

**Recommendation:** Use Option A or B (keeps structure, changes tone)

### Files to Change
- `/portfolio` page - bottom section heading

### Implementation
1. Locate heading: "More projects coming soon"
2. Replace with chosen option (A or B) OR remove entirely (option C)
3. Keep existing paragraph text unchanged (it's already good)

### Verification Checklist
✅ Old heading "More projects coming soon" is gone
✅ New heading (if using A or B) is confident
✅ Paragraph text below unchanged
✅ Section still has CTA button
✅ Mobile: Reads well on small screens

---

## TWEAK 2: Hero CTA Order (3 mins)

### The Issue
**Current order in DOM:**
1. "View our work" (secondary action)
2. "Book a free consultation" (primary action)

**Problem:** Primary conversion action comes second in both DOM order and visual order

### The Fix

**Swap the order so primary comes first:**

**New order:**
1. "Book a free consultation" (primary - filled button, brand colour)
2. "View our work" (secondary - outline/ghost button)

### Why This Matters
- Screen readers encounter primary action first
- Tab order puts focus on conversion first
- Visual hierarchy reinforced by DOM order
- Clearer conversion intent

### Files to Change
- Homepage hero component
- Button order in JSX/HTML

### Implementation
1. Locate hero CTA buttons
2. Swap order: primary button first, secondary button second
3. Ensure styling still correct (primary = filled, secondary = outline)
4. Check spacing between buttons maintained

### Verification Checklist
✅ "Book a free consultation" appears first in DOM
✅ "View our work" appears second in DOM
✅ Visual order matches: Primary left/top, Secondary right/bottom
✅ Primary button still filled/prominent
✅ Secondary button still outline/ghost style
✅ Spacing between buttons looks correct
✅ Mobile: Both buttons visible and properly ordered
✅ Keyboard tab order: Primary button focused first
✅ Both buttons functional and link correctly

---

## COMBINED IMPLEMENTATION

**Total time: ~5 minutes**

### Quick Steps
1. Open portfolio page → Change heading (2 mins)
2. Open homepage hero → Swap button order (3 mins)
3. Test both changes on live site

---

## EXACT COPY REFERENCE

### Portfolio Heading Options

**Option A (Recommended):**
```
New client projects launching soon
```

**Option B:**
```
New launches every month
```

**Option C:**
```
[No heading - remove entirely, start with paragraph]
```

Keep existing paragraph unchanged:
```
We're currently building new sites for fitness coaches, trades professionals, and creative service businesses. As those projects launch, we'll add them here with full case studies and results.

In the meantime, Graceful Pet Care demonstrates our approach: strategy-first design that drives real business results.
```

---

### Hero Button Order (in code)

**Current order (wrong):**
```jsx
<Button variant="outline">View our work</Button>
<Button variant="primary">Book a free consultation</Button>
```

**New order (correct):**
```jsx
<Button variant="primary">Book a free consultation</Button>
<Button variant="outline">View our work</Button>
```

*(Note: Actual code syntax may differ based on your component structure, but the principle is the same: swap the order)*

---

## VERIFICATION AFTER BOTH TWEAKS

### Portfolio Page
✅ Visit `/portfolio`
✅ Scroll to bottom
✅ Heading is confident (not "coming soon")
✅ Rest of section unchanged

### Homepage
✅ Visit homepage
✅ Hero section loads
✅ "Book a free consultation" is first and primary
✅ "View our work" is second and secondary
✅ Tab through buttons: Primary receives focus first
✅ Both buttons work correctly

### Mobile Check
✅ Portfolio heading readable on mobile
✅ Hero buttons stack correctly on mobile
✅ Primary button still dominant on mobile

---

## NOTES FOR CLAUDE CODE

- These are 2-minute micro-fixes
- Can implement both in single session
- No functional changes, just ordering/wording
- After completion, provide quick confirmation of what changed

---

## AFTER THESE 2 TWEAKS

The site will be:
✅ 100% polished and complete
✅ Ready for business development
✅ No remaining UX/UI nits

**Next priorities (not UX work):**
- Build additional portfolio pieces
- Set up analytics
- Launch Fiverr gig
- Focus on getting clients

---

**End of Final 2 Micro-Tweaks**  
Ready for immediate implementation.
