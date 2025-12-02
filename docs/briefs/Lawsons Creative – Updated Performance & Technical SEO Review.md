# Lawsons Creative – Updated Performance & Technical SEO Review

Shorter pass this time, focused on what’s changed and what actually matters.

---

## 1) Executive summary

**Top performance points**

- Still feels very lean: static-looking pages, content appears instantly, no obvious JS-heavy junk on Home / Services / Portfolio / About / Contact.  [oai_citation:0‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  
- Hero is tight and on-message: “Modern, phone-friendly websites that drive more enquiries” aimed squarely at small UK service businesses.  [oai_citation:1‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  

**Top technical SEO / UX issues**

1. **Pricing coherence** – Hero and Services clearly say “Starter from £500; multi-page from £1,295” but the Contact budget dropdown only offers **Starter £1,295 / Growth £1,795 / Professional £2,495 / Custom**, which doesn’t match the packages or numbers in Services.  [oai_citation:2‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  
2. **Schema still missing** – No LocalBusiness / Service / FAQ JSON-LD on any main page; your content is *perfect* for this.  [oai_citation:3‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  
3. **Service naming drift** – Navigation/footer, Services, Contact add-ons and Portfolio labels are mostly aligned but not fully standard (e.g. Growth tier appears only in Contact; Local SEO vs “SEO & Local Visibility”, etc.).  [oai_citation:4‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  

**Quick wins**

- Make pricing and package names 100% consistent between Hero, Services page and Contact form.
- Add LocalBusiness + Service + FAQ schema.
- Slight tidy-up of service names in nav/footer, Services and Contact form “add-ons”.

---

## 2) Performance overview

- Home page is basically best-practice: headline, subheading, short explainer, bullets, and then “Launched in 1–2 weeks” / “From £500 (ex VAT)” with zero visible layout thrash.  [oai_citation:5‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  
- Services / Portfolio / About / Contact are all content-first, text-led, and scroll smoothly. Case studies use a handful of purposeful images with before/after, not giant galleries.  [oai_citation:6‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  

From a perceived-speed point of view, you’re in a very good place. The danger is future-you adding clutter; current-you has behaved.

---

## 3) Assets & scripts

From the rendered HTML:

- Images are descriptive and focused on storytelling (e.g. “TFRCO Facebook page before website”, “TFRCO new website homepage”, “Graceful Pet Care website after redesign”).  [oai_citation:7‡Lawsons Creative](https://www.lawsonscreative.co.uk/portfolio)  
- No visible heavy embeds (no chat widgets, no booking widgets, no autoplay video backgrounds).
- No obvious sign of multiple analytics stacks fighting each other.

**Guard rails for later:**

- If you add Calendly/booking, embed it behind a click (“Open booking calendar”) so it doesn’t load on first paint.
- Keep any extra scripts `defer`/`async`. One analytics platform is enough.

---

## 4) Technical SEO & structure

**Headings & content**

- Each key page has a clear H1 aligned with intent:
  - Home: “Modern, phone-friendly websites that drive more enquiries.”  [oai_citation:8‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  
  - Services: “Simple services, clear pricing.” plus Starter / Website Rescue / New Business Website / Ongoing Support / Add-on services.  [oai_citation:9‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  
  - Portfolio: “Our work speaks for itself.”  [oai_citation:10‡Lawsons Creative](https://www.lawsonscreative.co.uk/portfolio)  
  - About: “A small web studio that speaks your language.”  [oai_citation:11‡Lawsons Creative](https://www.lawsonscreative.co.uk/about)  
  - Contact: “Let’s talk about your project.”  [oai_citation:12‡Lawsons Creative](https://www.lawsonscreative.co.uk/contact)  

Nice, human, non-spammy.

**Pricing & package coherence (the main snag)**

Right now you have:

- Hero: “Starter one-page websites from £500. Full multi-page website projects typically start from £1,295.”  [oai_citation:13‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  
- Services:
  - Starter Website – **From £500** (one-page).  
  - Website Rescue – **From £1,295** (multi-page).  
  - New Business Website – **From £1,295** (multi-page).  
  - Ongoing Support – **From £30/month** with Essential / Standard / Premium tiers.  [oai_citation:14‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  
  - Add-ons – Copywriting from £300/page, Local SEO from £150/month, etc.  [oai_citation:15‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  
- Contact form budget dropdown:
  - “Starter – £1,295 / Growth – £1,795 / Professional – £2,495 / Custom / Not sure”.  [oai_citation:16‡Lawsons Creative](https://www.lawsonscreative.co.uk/contact)  

So:

- “Starter from £500” (one-page) vs “Starter – £1,295” in the Contact dropdown is contradictory.
- “Growth” and “Professional” exist only in the dropdown, not on the Services page.
- Someone scanning Contact first could easily think **everything starts at £1,295+**, which undermines the “Starter from £500” hook.

**Schema & rich results**

- No sign of JSON-LD for:
  - `LocalBusiness` (web studio in Kent serving UK-wide).
  - `Service` (Starter, Website Rescue, New Business Website, Ongoing Support, Local SEO).
  - `FAQPage` using your “Common questions” block.  [oai_citation:17‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  

Given you’ve got clear address, services, prices and FAQs, this is low-effort and very on-brand with the “we care about the details” story.

**Internal linking & structure**

- Nav + footer + “Quick Links” make every core page reachable from everywhere.
- Portfolio and Contact both link back into Services/About, which is good for crawl and user journeys.  [oai_citation:18‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  

---

## 5) Stack & infrastructure

Behaviour still screams “static or statically-generated marketing site on a CDN” rather than “big SPA”. That’s exactly what you want for:

- Core Web Vitals.
- Cheap, reliable hosting.
- Simple cache rules (long cache for assets, saner cache for HTML).

No infra red flags from what can be seen purely from the public HTML.

---

## 6) Prioritised recommendations

### 6.1 Fix pricing + package alignment (do this first)  
**Impact:** High (conversion + trust) · **Effort:** Low

- Decide on the *actual* package structure:
  - Keep “Starter Website from £500” as the one-page entry tier.
  - Keep “Website Rescue / New Business Website from £1,295” for multi-page.
  - If you really want Growth / Professional price points, surface them as **tiers on the Services page** as well.
- Update the Contact form budget dropdown so:
  - Names match the Services page.
  - The £500 option is clearly visible (e.g. “Starter – up to ~£750”, “Standard – £1,295–£1,795”, “Professional – £2,495+”) or use simple ranges instead of package names.
- Check every reference (Hero, Services, Contact, any future FAQs) for consistent wording and numbers.

**Why:** users and Google both get twitchy when numbers don’t line up. It’s a small fix with disproportionate effect on trust.

---

### 6.2 Add structured data (LocalBusiness, Service, FAQ)  
**Impact:** High (search visibility + professionalism) · **Effort:** Low/Medium

Conceptually:

- Home / Contact:
  - `LocalBusiness` with name, URL, `@type` “ProfessionalService”, address (Kent, UK), “servesLocation” = UK-wide, contact email, opening hours.  [oai_citation:19‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  
- Services:
  - `Service` entities for Starter Website, Website Rescue, New Business Website, Ongoing Support, Local SEO.
  - `FAQPage` using the “Common questions” section near the bottom.  [oai_citation:20‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  
- Portfolio:
  - Optional `CreativeWork` / `CaseStudy` style schema for The Flooring and Resin Company and Graceful Pet Care.  [oai_citation:21‡Lawsons Creative](https://www.lawsonscreative.co.uk/portfolio)  

You don’t have to go schema-mad; just enough to back up what’s already on-page.

---

### 6.3 Standardise service naming everywhere  
**Impact:** Medium · **Effort:** Low

- In nav/footer/Services/Portfolio/Contact, use the same set of names:
  - Starter Website  
  - Website Rescue  
  - New Business Website  
  - Ongoing Support  
  - Add-ons: Copywriting, Print & Branding, Local SEO / SEO & Local Visibility  
- Make sure “SEO & Local Visibility” in the Contact form maps cleanly to “Local SEO” on Services.  [oai_citation:22‡Lawsons Creative](https://www.lawsonscreative.co.uk/services)  

Keeps things brain-friendly for humans and crystal-clear for search.

---

### 6.4 Add a tiny geo/sector block for intent  
**Impact:** Medium · **Effort:** Low

You already mention:

- “A small web studio in Kent… serving businesses UK-wide”.  [oai_citation:23‡Lawsons Creative](https://www.lawsonscreative.co.uk/)  

Add a short block (probably on Home + Contact) like:

- “Web design for trades, pet care and local service businesses in Kent and across the UK.”

This helps for “web design for [trade] in [area]” style searches and reinforces your niche.

---

### 6.5 Protect the current performance profile  
**Impact:** Medium (long-term) · **Effort:** Low

As you iterate:

- Keep pages static and text-first; avoid turning Home into an interactive playground.
- Lazy-load any new imagery that lands below the fold.
- Keep third-party scripts on a very short leash (one analytics, one booking tool at most).

You’re already fast; the game now is not messing that up.

---

Net: the new pricing/content changes are solid, you’ve just introduced a tiny pricing coherence bug and still haven’t cashed in the schema chips. Fix those and Lawsons Creative continues to be a very credible “this is how you *should* do it” example for clients.