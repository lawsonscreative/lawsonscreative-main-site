# Lawsons Creative – Website Content & Structure Brief (Full Implementation)

Owner: Andy Lawson  
Studio: Lawsons Creative  
Core team:  
- Andy – Founder & Lead Developer  
- Rachel Coppins – Content & Brand Lead (refer to her as “Rachel” after first mention)  
Domain: https://www.lawsonscreative.co.uk

---

## 1. Purpose of this brief

Implement a complete content and structure refresh of the Lawsons Creative website so that:

- It presents Lawsons Creative as a **small, specialist web studio**, not a one-man band.
- It clearly focuses on **modernising old, awkward, DIY or dated sites** for **small UK service businesses**.
- It integrates **Rachel as Content & Brand Lead** as a core team member (not external).
- It gives visitors **simple, low-friction ways to enquire**, with a strong email-based option.
- It supports offline marketing (flyers, letters) by giving them a strong landing place to point to.
- It is **fully implemented in one pass** – no phased “v0.1 / v0.2” approach.

This is a content and UX brief, not a tech/stack brief. Claude Code is expected to make all necessary layout/HTML/CSS changes to deliver it.

---

## 2. Primary audience and problems

### 2.1 Audience

Main audience: **small UK service businesses**, typically:

- Trades (plumbers, electricians, joiners, roofers, etc.)
- Pet care (groomers, walkers, sitters, daycare)
- Local services (cleaners, gardeners, tutors, therapists)
- Professional services (small accountants/bookkeepers, consultants)

They are usually:

- Busy, not very technical, and wary of jargon.
- Embarrassed by their current website (or lack of one).
- Frustrated that their site looks awful on phones or feels “DIY and clunky”.
- Wanting “more good enquiries” without faff.

### 2.2 Core problems we solve

The site must speak directly to people who:

- Have an **old, fixed-width or dated website** that doesn’t work well on mobiles.
- Have a **DIY or template site** they’re embarrassed to send people to.
- Have outgrown a cheap or messy site and want something **clear and professional**.
- Want someone who can **handle everything end-to-end** without agency faff.

---

## 3. Positioning and key messages

### 3.1 Core positioning

Lawsons Creative is a **small web studio** that:

- Modernises tired, awkward or DIY websites into **clean, phone-friendly sites**.
- Works mainly with **local UK service businesses**.
- Offers **fast, clear and simple** delivery with minimal jargon.
- Provides wider support through **content and print design** (flyers, business cards, etc.).

Short positioning line to anchor around:

> “We take your tired, awkward website and turn it into something you’re proud of – fast, clear and easy for your customers to use on their phones.”

### 3.2 Key website-wide messages

Ensure these themes appear across the site:

- “Small web studio in [Kent/your area], working with local service businesses.”
- “We specialise in modernising old, DIY and fixed-width sites.”
- “Plain-English communication and straightforward process.”
- “You deal directly with the people doing the work.”
- “We can keep your **website, words and printed materials** consistent.”

---

## 4. Brand voice and terminology

### 4.1 Voice

- Tone: calm, friendly, professional.
- Always UK English (modernise, specialise, colour, etc.).
- Avoid hype and buzzwords; prefer plain speech.
- Use “we/our studio” rather than “I” for business copy.
- “I” can be used within short bios where appropriate, but the default is “we”.

### 4.2 Terminology rules

- Business name: **Lawsons Creative**.
- Refer to the business as a **“web studio”** or “small web studio”, not an “agency”.
- One full use of her name: **“Rachel Coppins – Content & Brand Lead”**. After that, refer to her as **“Rachel”**.
- Andy is “Founder & Lead Developer”.
- Don’t mention ChatGPT, Claude or AI anywhere on the public website.

---

## 5. Global site structure and navigation

Implement the following top-level navigation (desktop and mobile):

- Home (`/`)
- Services (`/services`)
- Portfolio (`/portfolio`)
- About (`/about`)
- Contact (`/contact`)

Optional but recommended secondary landing pages (linked from Services and marketing):

- “Websites for Trades” – `/trades-websites`
- “Websites for Pet Care Businesses” – `/pet-care-websites`

### 5.1 Global header

- Logo (Lawsons Creative).
- Navigation links as above.
- Primary call to action button in header:  
  - Label: “Book a free consultation”
- Secondary action link/text nearby:  
  - “Or get a quote by email”

### 5.2 Global footer

Include:

- Short one-sentence summary of what the studio does.
- Location (e.g. “Based in Kent, working with small businesses across the UK” – adapt to exact area).
- Email: `hello@lawsonscreative.co.uk`
- Optional phone.
- Links to main pages.
- Link to Privacy / Terms pages if present.

---

## 6. Call to action model (site-wide)

The site should consistently promote **two main ways** to get in touch:

1. **Book a free consultation (call)**  
   - For those happy to talk on the phone or video.  
   - CTA used in header, homepage hero, contact page and page footers.

2. **Get a quote by email**  
   - For those who prefer email and want low friction.  
   - Appears alongside the consultation CTA in key places (hero, Contact, page ends).
   - Either links to a simple form or opens a mailto with a pre-filled subject such as “Website Rescue Enquiry”.

In all page templates, ensure there is **at least one clear CTA above the fold** and another near the bottom.

---

## 7. Page-by-page content and structure

### 7.1 Home page (`/`)

#### Purpose

- Immediately explain **who you’re for** and **what you do**.
- Signal that you **fix and modernise old/DIY sites**.
- Offer a clear next step (consultation or email quote).
- Showcase at least one strong transformation (before/after).

#### Structure

1. **Hero section (top of page)**  
   Content requirements:
   - Headline: clearly about **modernising old/DIY service-business websites**.  
     Example concept (Claude to refine wording):  
     “Modern, phone-friendly websites for small UK service businesses.”  
   - Subheading: reference old/DIY/embarrassing sites and the relief outcome.  
     For example:  
     “If your current site is old, awkward or DIY, we’ll rebuild it into something you’re happy to send customers to.”  
   - Primary CTA: “Book a free consultation”.  
   - Secondary CTA: “Get a quote by email”.  
   - A visual (screenshot or montage) representing a before/after transformation.

2. **“Is this you?” / Problem section**  
   Short section listing typical pain points.  
   Example bullet prompts:
   - “Your website looks dated or broken on phones.”
   - “You built it yourself and it never felt quite right.”
   - “You avoid sending people to your website because you’re embarrassed by it.”
   - “You’re not getting the kind of enquiries you’d expect.”

   End with a line that invites action: “If any of that sounds familiar, that’s exactly what we fix.”

3. **“What we do” – Core services summary**  
   Three key panels/cards:
   - Website Rescue (modernise old/DIY sites)
   - New Business Starter Site
   - Ongoing Support & Add-ons

   Each card includes:
   - 1–2 sentence description.
   - “Learn more” link to relevant Services or Add-ons section.
   - Optionally a “From £X” starting from price if consistent with your existing pricing model.

4. **Before & After / Client transformation highlight**  
   - A visual before/after slider or side-by-side images for one strong project.
   - A short “Story” paragraph: the client’s problem, what changed, and the outcome (qualitative or quantitative where honest).
   - Link through to the full case study in Portfolio.

5. **“Why local small businesses work with us”**  
   Bullet points emphasising:
   - You speak plainly and handle the tech.
   - Small studio = direct access to the people doing the work.
   - Clear process from brief to launch.
   - Support with copy and printed materials (via Rachel) so everything matches.

6. **“Our process” overview (short)**  
   Four or five simple steps:
   1. Quick chat and short brief
   2. Initial homepage layout and key content
   3. Build and test
   4. Launch and tidy-up
   5. Optional ongoing support and print materials

   Each step has 1–2 lines in plain English.

7. **Final CTA band**  
   - Restate the main outcome (“a website you’re happy to send customers to”).  
   - CTA buttons for “Book a free consultation” and “Get a quote by email”.

---

### 7.2 About page (`/about`)

#### Purpose

- Present Lawsons Creative as a **small, capable web studio**, not a lone freelancer.
- Introduce Andy and Rachel as the core team.
- Make the studio feel approachable and local, but professional.

#### Structure

1. **Intro: About Lawsons Creative**  
   Content requirements:
   - First paragraph introduces Lawsons Creative as a **small web studio based in [area/Kent]**.
   - Clearly states the focus on modernising old, awkward or DIY websites for small UK service businesses.
   - Emphasise direct access to the people doing the work and plain-English communication.

2. **“Who you’ll work with” – team section**

   Two clear profiles:

   - **Andy – Founder & Lead Developer**  
     Points to cover:
     - Leads the technical side: planning, build, performance, hosting.
     - Specialises in turning messy, ageing sites into fast, modern, easy-to-use ones.
     - Enjoys making things simple for non-technical clients.

   - **Rachel Coppins – Content & Brand Lead** (full name used here only)  
     After this, refer to her as “Rachel” across the site.  
     Points to cover:
     - Works as a Senior Bid Manager, writing clear, persuasive proposals for high-value contracts.
     - At Lawsons Creative, focuses on words and presentation: sharpening messaging, tidying website copy and creating supporting materials (flyers, business cards, simple brochures).
     - Ensures the website and printed materials feel consistent and on-brand.

3. **“How we work” – studio process (detailed)**  
   - Expand the process step list from the home page into a slightly fuller explanation (1–2 paragraphs total, not huge).
   - Stress clarity, communication, and that they deal directly with you, not account managers.

4. **“Who we work with” – client types**

   Short section listing examples:
   - Trades (plumbers, electricians, joiners, roofers…)
   - Pet care (groomers, walkers, sitters)
   - Local service providers (cleaners, gardeners, tutors, therapists)
   - Small professional services (bookkeepers, micro-consultancies)

   Emphasise that you understand the way small businesses work and respect their time.

5. **Light social proof**  
   - Include 1–2 short testimonials or pulled quotes, if available.
   - If not enough testimonials yet, keep it ready to plug in later.

6. **CTA block**  
   Invite visitors to either start with a quick email or book a consultation.

---

### 7.3 Services overview (`/services`)

#### Purpose

- Present a clear set of service “packages” that match target problems.
- Make it easy for a small business owner to identify what they need.

#### Structure

1. **Intro**

   - Brief explanation that the studio offers a **few clear service types**, not endless options.
   - Reiterate focus on modernising existing sites and building simple, effective new ones.

2. **Core Services**

   Implement at least these three sections:

   1) **Website Rescue – Modernise your old or DIY site**  
      - For clients with an existing site that looks dated, awkward on mobiles or DIY.  
      - Content must:
        - Explain you typically rebuild on a modern, responsive base.
        - Emphasise improved clarity, speed, mobile usability and ease of maintenance.
        - Clarify what’s included (e.g. design refresh, content structure tidy-up, basic on-page SEO, launch support).

   2) **New Business Starter Site**  
      - For new or early-stage businesses needing a first “proper” site.  
      - Content to cover:
        - Simple, clean, no fluff design.
        - Essentials: homepage, services page, contact page, maybe a basic about.
        - Option to add content help and print materials (see add-ons).

   3) **Ongoing Support & Care**  
      - Covers updates, security, minor tweaks.  
      - Explain in clear terms what ongoing support looks like (for example updates to content, small layout tweaks, and basic technical maintenance).

   Each core service section should include:
   - Who it’s for.
   - What’s included.
   - Optional “From £X” where suitable.
   - A CTA to enquire (call or email).

3. **Link to Add-on Services**

   End with a section that links through to Add-ons, describing them as “extras you can add to any project, either at launch or later.”

---

### 7.4 Add-on services (could be part of `/services` or its own section)

#### Purpose

Show the **extra value** clients can get, including Rachel’s work on content and print, in a way that feels like a natural extension of the core web build.

#### Structure

Group add-ons into three clusters:

1. **Content & Brand Support (Rachel)**  
   - Website copy tidy-up (turning rough words into clear, client-friendly copy).
   - Full website copywriting for main pages.
   - Defining a simple, consistent tone of voice.
   - Naming and messaging help for offers or packages (if relevant).

2. **Print & Collateral Design (Rachel)**  
   - Business cards and basic stationery.
   - Flyers and simple brochures (e.g. A5 service flyers you’ve already been using).
   - Simple social/online graphics that match the website style (optional, but can be noted).

3. **Search & Visibility Essentials**  
   - Basic on-page SEO setup (titles, meta descriptions, headings, alt text).
   - Local SEO essentials (e.g. making sure address and key local terms are present).
   - Support with Google Business Profile basics (content guidance; not necessarily full management unless you want to add it).

For each cluster:

- Include a short description of the benefits.
- Use 3–5 bullet points.
- Make it clear these are **optional bolt-ons** to any main project, not required.

---

### 7.5 Portfolio / Case studies (`/portfolio`)

#### Purpose

- Show real transformations, especially “before” → “after” for old/DIY sites.
- Build trust without overclaiming.

#### Structure

1. **Intro**

   - Short explanation that each project is about making the site **clearer, easier to use and more effective**.
   - Stress that many clients start from “embarrassed to share the website” to “confident sending people to it”.

2. **Project tiles**

   - At least 2–3 projects shown on the main grid/list (you can add more over time).
   - Each tile should show:
     - Client name and type (e.g. “Graceful Pet Care – Pet care and dog walking”).
     - Very short 1–2 line summary of what changed.
     - A link to view more details.

3. **Case study layout (for each project)**

   For each project, implement a consistent structure:

   - **Client and context**  
     Who they are and what they do.
   - **The problem**  
     What was wrong with the previous site (dated, DIY, confusing, not mobile-friendly, etc.).
   - **What we did**  
     Key changes. For example:
     - Rebuilt with a modern, responsive layout.
     - Simplified navigation and content structure.
     - Updated copy to be clearer and more client-focused.
   - **The outcome**  
     Depending on available data, either:
     - Honest metrics (if you have them and they are real), or
     - Clear qualitative outcomes (e.g. “They are now comfortable sending people to their site, and enquiries are easier to handle.”)
   - **Before & after visuals**  
     Screenshots or a slider to make the change tangible.
   - **Client quote** (if available).

   Important: do not invent numbers. Where stats are used, ensure they are grounded in real data Andy/Rachel can stand behind. If unclear, use qualitative wording instead of precise percentages.

4. **CTA**

   At the bottom of the portfolio page, invite users to get in touch if their site looks similar to any of the “before” examples.

---

### 7.6 Contact (`/contact`)

#### Purpose

Provide a **simple, low-friction way** for people to enquire, matching the two main CTA types (call vs email).

#### Structure

1. **Intro text**

   - Short paragraph explaining that you’re happy to talk through what they need in plain English.
   - Reinforce that there’s no obligation and you’re not going to hard-sell.

2. **Two main contact options**

   A) **Book a free consultation**  
      - Link to your call/booking method.  
      - Explain what happens in the call (e.g. “15–30 minutes to understand your business, look at your current site and outline options.”)

   B) **Get a quote by email**  
      - Either:
        - Simple contact form with fields such as Name, Business Name, Current Website URL (if any), Brief description, Preferred contact method.  
        - Or a clear “Email us” button with a short instruction:  
          “Email hello@lawsonscreative.co.uk with a link to your current website (if you have one) and a line or two about what you’d like to improve.”

   The form, if used, should be minimal – no long questionnaires.

3. **Reassurance**

   - Line or two about response times (e.g. “We aim to reply within one working day.”)
   - Confirm that they’ll be dealing directly with Andy and Rachel, not passed around.

---

### 7.7 Optional niche landing pages

If included now, these pages must be fully implemented and linked from Services and any relevant marketing.

#### A) Websites for Trades (`/trades-websites`)

- Speak directly to trades (plumbers, electricians, roofers, joiners, etc.).
- Acknowledge common issues:
  - DIY sites.
  - Hard-to-read text.
  - Poor mobile layout.
  - Outdated photos.
- Show an example transformation if you have one.
- Emphasise quick, clear communication, and that you understand they’re often on the road and pressed for time.
- CTA: “Show us your current website and we’ll tell you what we’d change.”

#### B) Websites for Pet Care Businesses (`/pet-care-websites`)

- Speak directly to groomers, walkers, daycare, sitters.
- Highlight:
  - Clear pricing.
  - Easy ways for clients to contact or book.
  - Friendly, reassuring messaging.
- Use Graceful Pet Care as a key example if appropriate.
- Similar CTA to above.

---

## 8. SEO and technical content guidelines

Claude Code should ensure:

- Each page has a clear, descriptive `<title>` and meta description (you can draft them based on page content).
- Use H1 for the main page heading, H2/H3 for subsections.
- Use descriptive alt text for images, especially before/after screenshots.
- Include localised wording referencing your area (e.g. “web designer in [area/Kent]”) in a natural way on Home, About, Services and Contact.
- Ensure content changes do not significantly harm performance or accessibility (avoid huge unoptimised images, maintain sensible heading structure, good contrast, etc.).

---

## 9. Acceptance criteria

For this brief to be considered fully implemented:

1. **Studio identity**
   - The site reads as **Lawsons Creative (a small web studio)** rather than a solo freelancer.
   - “We/our studio” is the default; “I” is limited to appropriate bio contexts.
   - Andy is clearly presented as Founder & Lead Developer.
   - Rachel is introduced once as “Content & Brand Lead” with her full name, then “Rachel” thereafter. She is clearly part of the core team, not external.

2. **Positioning**
   - The homepage hero clearly states that the studio modernises old/DIY/awkward websites for small UK service businesses.
   - There is a visible section describing the typical problems (old, DIY, embarrassing sites).
   - Core services (Website Rescue, New Business Starter Site, Ongoing Support) are clearly described.

3. **Content & print integration**
   - Add-on services clearly include: content support (copy tidy-up/new copy) and print/collateral design (flyers, business cards, etc.), credited to Rachel’s role.
   - These are framed as optional extras.

4. **Contact paths**
   - “Book a free consultation” and “Get a quote by email” are both present on the homepage, Contact page and at least one other page.
   - The email route is simple and low friction (either a short form or clear instructions).

5. **Portfolio**
   - The portfolio page shows at least two live projects (or more), with case study pages using consistent structure.
   - Any numerical improvements claimed are based on real data; otherwise, use qualitative language.

6. **Local, approachable feel**
   - The site mentions location (e.g. Kent/your area) and the focus on small UK service businesses.
   - Copy emphasises plain-English communication and direct access to the people doing the work.

7. **No AI/tool references**
   - The site does not mention AI, ChatGPT, Claude, or internal tools.
   - All messaging is about the studio’s process and outcomes.

8. **Single-pass implementation**
   - All sections described in this brief are implemented in one go.
   - There is no “future version” or “to be done later” content left in stubs or placeholder form.

Once implemented, the site should feel like a coherent, grown-up but approachable local web studio that specialises in rescuing and modernising small business websites, with strong support on words and printed materials through Rachel’s role.