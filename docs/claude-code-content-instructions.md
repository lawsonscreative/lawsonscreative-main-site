# Instructions for Claude Code - Phased Implementation

## Overview

You are implementing critical content fixes for lawsonscreative.co.uk across 5 phases. You MUST work one phase at a time, provide verification checklist after each phase, and wait for Andy's approval before proceeding.

---

## Implementation Rules

### Work Process
1. **One phase at a time** - Do NOT proceed to next phase without explicit approval
2. **After completing each phase:**
   - Provide summary of files changed
   - Provide summary of what was changed
   - Give Andy the verification checklist from the all-phases document
   - Wait for Andy to test and approve
3. **After Andy approves each phase:**
   - Create git commit with provided commit message
   - Push branch
   - Create PR (or merge if Andy instructs)
4. **Then proceed to next phase**

### Git Workflow Per Phase

**Phase 1:**
```bash
git checkout main
git pull origin main
git checkout -b fix/phase1-delivery-model-alignment
# ... make changes ...
# ... wait for Andy approval ...
git add .
git commit -S -m "[use commit message from phase 1 in document]"
git push origin fix/phase1-delivery-model-alignment
```

**Phase 2:**
```bash
git checkout main
git pull origin main
git checkout -b fix/phase2-pricing-alignment
# ... make changes ...
# ... wait for Andy approval ...
git add .
git commit -S -m "[use commit message from phase 2 in document]"
git push origin fix/phase2-pricing-alignment
```

**Phase 3:**
```bash
git checkout main
git pull origin main
git checkout -b fix/phase3-cta-consistency
# ... make changes ...
# ... wait for Andy approval ...
git add .
git commit -S -m "[use commit message from phase 3 in document]"
git push origin fix/phase3-cta-consistency
```

**Phase 4:**
```bash
git checkout main
git pull origin main
git checkout -b fix/phase4-services-formatting
# ... make changes ...
# ... wait for Andy approval ...
git add .
git commit -S -m "[use commit message from phase 4 in document]"
git push origin fix/phase4-services-formatting
```

**Phase 5:**
```bash
git checkout main
git pull origin main
git checkout -b fix/phase5-content-improvements
# ... make changes ...
# ... wait for Andy approval ...
git add .
git commit -S -m "[use commit message from phase 5 in document]"
git push origin fix/phase5-content-improvements
```

---

## What to Provide After Each Phase

### 1. Files Changed Summary
List every file you modified, e.g.:
```
Files changed:
- src/app/page.tsx (FAQ section)
- src/app/how-we-work/page.tsx (Launch step)
- src/components/Benefits.tsx (Built to Last section)
```

### 2. Changes Summary
Briefly describe what you changed, e.g.:
```
Changes made:
- Rewrote FAQ answer "Can I update the website myself?" to explain developer-maintained model
- Removed promise of CMS access and training
- Updated to mention £75/hour for updates
- Changed "How We Work" Launch step to remove "content management training"
- Updated "Built to Last" to say "update requests" instead of "easy to update"
- Searched codebase and removed 3 other instances of CMS promises
```

### 3. Verification Checklist
Copy the "PHASE X VERIFICATION CHECKLIST" from the all-phases document and give it to Andy as a markdown checklist he can tick off.

### 4. Wait for Approval
Say something like:
```
Phase X complete. Please test using the verification checklist above.

When you're satisfied, reply with:
"Phase X approved - commit and proceed"

I'll then commit to git and move on to Phase Y.
```

---

## Phase Descriptions (What Each Phase Does)

### Phase 1: Fix Delivery Model Promises (CRITICAL)
**What it fixes:** Site promises CMS access. Reality: no CMS, clients email for updates.
**Changes:** FAQ answer, How We Work page, Built to Last section, remove all CMS promises.
**Why critical:** Expectation mismatch will damage client relationships.

### Phase 2: Fix Pricing Contradictions (CRITICAL)
**What it fixes:** £40/hour on Services, £75/hour in FAQ. Hosting costs confusing.
**Changes:** Align all to £75/hour. Clarify hosting (£5-20 vs £50-150 packages).
**Why critical:** Conflicting prices hurt credibility.

### Phase 3: CTA & Navigation Consistency
**What it fixes:** "Book a Call" vs "Book a free consultation" inconsistency.
**Changes:** Standardise all CTAs to "Book a free consultation".
**Why important:** Professional consistency, clear conversion path.

### Phase 4: Services Page Formatting
**What it fixes:** Jammed decision framework text, stray bullet characters.
**Changes:** Format decision framework properly, clean up bullets.
**Why important:** Current format is hard to read.

### Phase 5: Portfolio & About Improvements
**What it fixes:** Awkward wording, weak CTAs, redundant copy.
**Changes:** Smooth results wording, add strong CTAs, improve About page.
**Why important:** Quality and polish.

---

## Example of Good Phase Completion Response

```
## Phase 1 Complete

### Files Changed:
- src/app/page.tsx (FAQ section and Built to Last section)
- src/app/how-we-work/page.tsx (Launch step)
- src/components/Hero.tsx (removed one instance of "easy to update")

### Changes Made:
- Rewrote FAQ answer "Can I update the website myself?" 
  - Removed all CMS and DIY editing promises
  - Explained developer-maintained model clearly
  - Mentioned £75/hour for updates
  - Added info about in-house developer option
- Updated How We Work Launch step:
  - Removed "training on content management"
  - Changed to "walkthrough of how to track performance and request updates"
- Updated Built to Last section:
  - Changed "easy to update" to "straightforward to keep current with update requests"
- Found and fixed 1 additional mention of "easy to update" in hero component

### Verification Checklist for Andy:

**Critical Checks:**
- [ ] Homepage FAQ → "Can I update myself?" → No CMS promise
- [ ] FAQ answer mentions £75/hour or maintenance package
- [ ] FAQ answer explains email-for-updates model clearly
- [ ] FAQ answer sounds confident, not apologetic
- [ ] `/how-we-work` Launch step → No "training on content management"
- [ ] Launch step says "walkthrough of how to track performance and request updates"
- [ ] Homepage "Built to Last" → No "easy to update" in DIY sense
- [ ] "Built to Last" mentions "update requests" or "ongoing maintenance"

**Site-Wide Search:**
- [ ] Search site for "CMS" - only appears as special request option
- [ ] Search site for "easy to update" - not in DIY context
- [ ] Search site for "training" - not about content management
- [ ] Search site for "95%" - should not appear

**Mobile Check:**
- [ ] FAQ answer displays properly on mobile
- [ ] How We Work page reads clearly on mobile

**Tone Check:**
- [ ] New FAQ answer is confident about developer-maintained model
- [ ] Explains benefits, not drawbacks
- [ ] Feels like a feature, not a limitation

---

Please test using the checklist above. When satisfied, reply:
"Phase 1 approved - commit and proceed to Phase 2"

I'll then commit these changes to git branch `fix/phase1-delivery-model-alignment` and start Phase 2.
```

---

## Important Notes

- **Do NOT skip ahead** - Each phase must be approved before proceeding
- **Do NOT merge to main yourself** - Wait for Andy's instruction
- **Use exact commit messages** from the all-phases document
- **If you find additional issues** in a phase, fix them and mention in your summary
- **If something doesn't match** the document (e.g., file doesn't exist), explain what you found and ask for clarification
- **After all 5 phases** are approved, provide a final summary

---

## Starting the Work

When Andy says "Start Phase 1", begin with:

1. Create branch `fix/phase1-delivery-model-alignment`
2. Implement all changes in Phase 1 section of all-phases document
3. Provide completion response with files changed, changes made, and verification checklist
4. Wait for approval
5. Commit to git when approved
6. Move to Phase 2 when instructed

---

**Ready to begin when Andy gives the signal.**
