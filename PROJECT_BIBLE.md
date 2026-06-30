# Q Lawn Landscaping — PROJECT BIBLE

> **This is the single source of truth for the Q Lawn Landscaping website.**
> Every AI assistant and developer must read this file before making changes.
> When a rule here conflicts with an ad-hoc request, follow this file and ask
> before overriding anything in the **"Do Not Change Without Approval"** section.

**Last updated:** 2026-06-29

---

## 1. Project Purpose

Q Lawn Landscaping is a landscaping, lawn care, and tree-nursery business in
Cheyenne, Wyoming (established 2012). This website is its primary online
storefront and lead-generation tool.

**The single goal of this site is to generate phone calls and estimate
requests.** Every design and content decision should serve that goal. The
business does not sell online, take payments, or run a blog — it converts
visitors into phone calls, texts, and free-estimate form submissions.

Primary conversion actions, in priority order:
1. **Call** `(307) 772-1222` (`tel:` link)
2. **Text** `(307) 772-1222` (`sms:` link)
3. **Free-estimate form** in the `#contact` section

Key business facts (keep accurate everywhere they appear):
- **Name:** Q Lawn Landscaping
- **Phone / Text:** (307) 772-1222
- **Location / service area:** Cheyenne & surrounding Wyoming communities
- **Established:** 2012 ("13+ years", "since 2012")
- **Hours:** Mon–Fri 7am–4pm · Sat by appointment
- **Reputation:** 4.7★ average across 89 Google reviews
- **Facebook:** https://www.facebook.com/111293527158352
- **Canonical domain:** https://qlawnlandscaping.com/

---

## 2. Brand Identity

Q Lawn is positioned as the **premium, established, do-it-right** landscaper in
Cheyenne — not the cheapest, but the most trustworthy and capable. The tone is
confident and grounded, never gimmicky.

**Voice & tone:**
- Plain-spoken, regional, and proud of Wyoming-tough quality.
- Lead with durability and craftsmanship ("built to last", "we do the work
  others won't attempt").
- Short, declarative sentences. No corporate filler, no hype words like
  "world-class" or "revolutionary".
- Always local: reference Cheyenne, Wyoming weather/climate, windbreaks, and
  the harsh-winter context that proves the work holds up.

**Positioning pillars:**
- 13+ years of local track record.
- Full-service: design, hardscape, lawn care, irrigation, snow removal, **and**
  an in-house tree nursery (a differentiator competitors lack).
- Honest and responsive — "free estimates", "no pressure", "respond within 24
  hours".

---

## 3. Design Style

The aesthetic is **editorial / luxury-minimal** — closer to a high-end design
studio or architecture portfolio than a typical contractor site. It relies on:

- **Italic serif display type** for headlines and numbers, paired with a clean
  sans for body copy.
- **Sharp, near-square corners** (`border-radius: 2px` or `0`) — never rounded,
  pill-shaped, or bubbly.
- **Hairline 1px borders** (`--border`) dividing content into grids instead of
  cards with shadows. There are essentially **no drop shadows** in this design.
- **Generous whitespace** and large section padding (`80px 6%`).
- **Full-bleed photography** in the hero and gallery, with text overlaid.
- **Restrained color** — mostly off-white, near-black ink, and photography.
  Color accents are used sparingly and deliberately.
- **Uppercase eyebrow labels** with wide letter-spacing above section titles.

**Do not** introduce: heavy drop shadows, rounded "card" UI, gradients (other
than the hero overlay), emoji-heavy decoration beyond the existing service
icons, bright/saturated backgrounds, or animated sliders/carousels. Keep it
calm, flat, and typographic.

---

## 4. Header / Navigation Rules

The nav is defined in `index.html` (`<nav>`) and styled in `css/styles.css`.

- **Fixed** to the top (`position:fixed; z-index:100`), full width, dark
  background `#141414`.
- **Height is a hard-coded constant** that the hero compensates for:
  - Desktop: `118px` (hero has `padding-top:118px`)
  - ≤768px: `96px`
  - ≤480px: `86px`
  - The mobile menu's `top` value **must always match the current nav height**
    at each breakpoint. If you change nav height, update: the hero
    `padding-top`, every `nav{height}` / `.nav-logo{height}` rule, **and** every
    `.mobile-menu{top}` rule. These four values are coupled.
- **Layout:** logo left · text links center/right · phone-number CTA far right ·
  hamburger (hidden on desktop).
- **Nav links:** `Offers · Services · Trees · Work · Contact`. The **"Offers"**
  link is the highlighted "hot" link (green `#56B85A`, bold) and must stay
  first and visually distinct.
- The phone number `(307) 772-1222` is always visible in the nav on desktop as a
  `tel:` link.
- **Mobile menu** appears at `≤900px` (links + CTA hide, hamburger shows). It is
  a separate `.mobile-menu` block (`id="mm9"`) toggled by `js/main.js` (with an
  inline `onclick` fallback in the markup). It includes both **Call** and
  **Text** links at the bottom.
- Keep the nav minimal — do not add a search bar, login, cart, or more than ~5
  primary links.

---

## 5. Logo Rules

- **Header logo:** `images/logo.png` — light/white logo designed to sit on the
  dark `#141414` nav. Rendered at `height:108px` desktop (max-width 340px),
  scaling down to 86/76px on smaller screens.
- **Footer logo:** `images/logo-footer.png` — rendered at `height:52px`.
- Both logo `<img>` tags carry a **cache-busting query string** (`?v=4`). When
  you replace a logo file, **increment this version** (`?v=5`, etc.) on **both**
  the header and footer tags so browsers and Netlify's immutable cache fetch the
  new file. (Images are served with a 1-year immutable cache — see §11.)
- The logo `alt` text is `"Q Lawn"`.
- Maintain aspect ratio — width is `auto`, height is fixed; never stretch.
- The header logo must remain legible on a dark background; the footer logo must
  remain legible on white. Do not swap one for the other.

---

## 6. Color & Typography Rules

**All colors are CSS variables defined in `:root` at the top of
`css/styles.css`. Use the variables — never hard-code hex values in component
rules** (the nav `#141414` background and the `.hot` link `#56B85A` are the only
intentional exceptions; if you touch them, consider promoting them to variables
first).

| Variable     | Value     | Role |
|--------------|-----------|------|
| `--white`    | `#FFFFFF` | Page background, text on dark |
| `--off`      | `#FAFAF8` | Off-white section backgrounds, form fields |
| `--light`    | `#F4F3F0` | Tree section background |
| `--border`   | `#E8E6E0` | Hairline dividers / grid lines |
| `--border2`  | `#D0CCC4` | Slightly darker border accents |
| `--ink`      | `#1A1916` | Primary text + dark section backgrounds |
| `--ink2`     | `#6B6560` | Secondary / body text |
| `--ink3`     | `#A8A39C` | Muted labels, eyebrows, meta |
| `--accent`   | `#1A1916` | Accent (currently same as ink) |
| `--green`    | `#2A5A2A` | Service tags, tree-special highlight |
| `--red`      | `#C0392B` | Reserved for offers/urgent accents |
| nav bg       | `#141414` | Nav background (hard-coded) |
| `.hot` link  | `#56B85A` | Bright "Offers" nav highlight (hard-coded) |

**Typography:**
- **Display / headlines / big numbers:** `--display` =
  `'Instrument Serif', serif`, used **italic** (`font-style:italic`), weight
  400. This is the signature look — H1, section titles, stat numbers, offer
  amounts, review quotes, the CTA phone number.
- **Body / UI / labels:** `--sans` = `'Instrument Sans', sans-serif`, weights
  300–600. Body copy is often weight 300.
- Fonts load from Google Fonts (see `<head>` `<link>`). If you change fonts,
  update the Google Fonts `<link>` **and** the `--display` / `--sans` variables
  together.
- Base body size is `15px`, line-height `1.6`.
- Section titles use fluid `clamp()` sizing — keep that pattern for responsive
  type rather than fixed pixel headings.
- Eyebrow labels are uppercase, ~10–12px, with `letter-spacing` ~`.08–.1em`.

---

## 7. Image Rules

- All images live in `/images/` and are referenced with relative paths.
- **To replace an image, drop the new file in `/images/` using the same
  filename** — no code change needed (except logos, which use `?v=` busting,
  see §5).
- **Format & weight:** photos are `.jpg`, logos are `.png`. Keep photos
  reasonably compressed — this is a static site with no image pipeline, so
  optimize before committing. Aim for web-appropriate dimensions (hero/gallery
  images do not need to exceed ~2000px wide).
- Every `<img>` **must have descriptive, location-aware `alt` text**
  (e.g. "Paver patio Q Lawn", "Landscaping Cheyenne") for SEO and accessibility.
- Images are object-fit cover within fixed-height containers — design for the
  crop, not the full frame.
- Current image inventory:
  - `hero.jpg` — full-screen hero background
  - `tree-inventory.jpg` — trees section
  - `paver-patio.jpg`, `retaining-wall.jpg`, `landscaping.jpg`,
    `xeriscaping.jpg`, `sod-installation.jpg` — gallery
  - `logo.png`, `logo-footer.png` — logos
- **Gallery layout:** a 3-column grid where the first item (`.gi.tall`) spans two
  rows. To add a gallery image, add a `<div class="gi"><img …></div>` inside
  `<section id="portfolio">` and confirm the grid still balances.
- **Missing asset to fix:** the social-share image `og-image.jpg` is referenced
  in the `<head>` (`og:image` / `twitter:image`) at the site root but **does not
  exist yet**. Add a `1200×630` `og-image.jpg` to the project root. (See §13.)

---

## 8. Mobile / Responsive Rules

The site is **mobile-first in importance** — most landscaping leads come from
phones. Always test changes at mobile widths before considering them done.

Breakpoints (defined in `css/styles.css`, all `max-width`):
- **`900px`** — primary mobile breakpoint: desktop nav links + CTA hide, the
  hamburger appears, hero stacks vertically, most multi-column grids collapse to
  1 column.
- **`768px`** — tablet: nav height drops to `96px`, grids go to 2 columns in
  several sections.
- **`480px`** — small phones: nav height drops to `86px`, hero shrinks to
  `85vh`, most grids become single column.

Rules:
- **Tap targets** (call/text buttons, form fields, nav links) must stay large
  and thumb-friendly. Never shrink the phone/text CTAs on mobile.
- The hero must always keep the headline and the **Call / Text / Free-estimate**
  actions visible without scrolling on a typical phone.
- When you add or restructure any grid section, **add its mobile collapse rule
  in all three breakpoints** — do not leave a section multi-column on phones.
- Test the hamburger menu open/close after any nav change.
- `overflow-x:hidden` is set on `body` to prevent horizontal scroll — keep it;
  do not introduce elements that force horizontal overflow.

---

## 9. SEO Rules

The `<head>` of `index.html` is fully configured — **preserve and keep it
accurate** whenever business facts change.

Must stay correct and present:
- `<title>` and `<meta name="description">` — keyword-rich, location-led
  (Cheyenne, Wyoming), and must contain the phone number in the description.
- `<meta name="keywords">` — local landscaping terms.
- `<link rel="canonical" href="https://qlawnlandscaping.com/">` — keep pointing
  at the canonical non-www apex domain.
- **Open Graph** (`og:*`) and **Twitter Card** (`twitter:*`) tags for social
  sharing — keep title/description in sync with the real `<title>`/description,
  and ship the `og-image.jpg` they reference (see §7).
- `robots = index, follow`.

Ongoing SEO discipline:
- Every image needs descriptive `alt` text.
- Use one `<h1>` only (the hero headline). Section headings are `<h2>`, service
  cards `<h3>`. Keep this hierarchy intact.
- Keep NAP (Name, Address/area, Phone) **identical** everywhere it appears on
  the page and in metadata — consistency matters for local SEO.
- Reinforce local keywords naturally in copy (Cheyenne, Wyoming, Laramie,
  surrounding communities). Do not keyword-stuff.
- **Recommended future additions** (not yet present): `LocalBusiness`
  JSON-LD structured data, a `sitemap.xml`, and a `robots.txt`. (See roadmap.)

---

## 10. Netlify / GitHub Deployment Workflow

This is a **static site with no build step.** What is in the repo root is what
ships.

**Repository:** git repo on branch `main` (default + deploy branch).

**Hosting:** Netlify, configured via `netlify.toml`:
- `publish = "."` (project root)
- **No build command** — files are served as-is.
- `_headers` + `netlify.toml` `[[headers]]` set security headers and caching
  (see §11).
- A catch-all `200` redirect to `/index.html` acts as an SPA-style fallback.
- A `www → non-www` 301 redirect is **present but commented out** in
  `netlify.toml` — uncomment it once the custom domain is fully connected.

**Standard workflow:**
1. Make changes locally and **test by opening `index.html` in a browser** (and
   in mobile/responsive view). There is no dev server required.
2. Commit to git with a clear message.
3. `git push` to `main` → **Netlify auto-deploys on every push.**
4. Verify the live site after deploy, especially the call/text links, the
   contact form, and mobile layout.

**Alternative (manual) deploy:** drag the entire project folder onto
[netlify.com/drop](https://app.netlify.com/drop). Use only for emergencies — the
git-connected flow is the source of truth.

**Rules:**
- Do **not** add a build toolchain (bundler, framework, npm build) without
  approval — the no-build simplicity is intentional (see §12).
- Never commit secrets, API keys, or `.env` files — this is a public static
  site; anything committed ships to the browser.
- Keep `main` deployable at all times.

---

## 11. Coding Standards

This project values **simplicity, hand-editability, and zero dependencies**. A
non-developer should be able to update text by reading the HTML.

**Structure:**
- `index.html` — all markup/content, organized into `<section>`s with stable
  IDs: `#offers`, `#services`, `#trees`, `#portfolio`, `#reviews`, `#contact`.
- `css/styles.css` — **all** styles. Variables first, then sections top-to-
  bottom, then `@media` blocks at the end. `css/styles_backup.css` is a backup —
  do not edit it; it exists as a restore point.
- `js/main.js` — all JavaScript (smooth scroll + mobile menu). Keep it tiny and
  dependency-free.

**Rules:**
- **Vanilla HTML/CSS/JS only.** No frameworks, no build step, no npm packages,
  no CSS preprocessors, no jQuery.
- **Use the CSS variables** for color/typography; do not hard-code values that a
  variable already covers.
- Match the existing **terse, single-line CSS style** when editing
  `styles.css` — selectors are written compactly; stay consistent.
- Keep JS unobtrusive and progressive — the site must work with JS for the menu,
  but core content/links must function without it. The hamburger has both a
  `main.js` handler and an inline `onclick` fallback; preserve graceful behavior.
- Maintain **accessibility**: keep `aria-*` attributes on the hamburger, label
  every form field, keep semantic headings, and keep focus styles usable.
- Preserve the **caching headers** in `_headers` / `netlify.toml`: HTML is
  `no-cache` (always revalidate); CSS, JS, and images are `immutable` with a
  1-year max-age. **Because assets are immutable-cached, any change to a cached
  asset that must be picked up immediately needs a new filename or a `?v=` query
  bump** (logos already do this).
- Keep security headers (`X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `X-XSS-Protection`) intact in **both** `_headers` and
  `netlify.toml`.
- Comment only where intent isn't obvious; the code is meant to be readable.

---

## 12. Things NOT to Change Without Approval

Get explicit owner approval before touching any of the following:

1. **Business facts / NAP** — phone number `(307) 772-1222`, business name,
   "since 2012 / 13+ years", service area, hours. These appear in many places
   and must stay identical everywhere.
2. **The phone/text-call conversion model** — do not remove or de-emphasize the
   Call / Text / Free-estimate actions, and do not replace them with a different
   primary CTA.
3. **The no-build, vanilla, single-page architecture** — do not introduce a
   framework, bundler, CMS, or multi-page structure.
4. **Brand colors and typefaces** (Instrument Serif italic + Instrument Sans) —
   the `:root` variables and font choices define the brand.
5. **Overall editorial/minimal design language** (§3) — no redesign into a
   generic card-and-shadow contractor template.
6. **Nav height constants and their coupled values** (§4) — changing one without
   the others breaks the layout.
7. **Canonical domain / SEO metadata** (§9) — title, description, canonical, OG.
8. **Special-offer terms** — the dollar amounts and the "Buy 9 spruce, get 1
   free" deal are real business commitments; only the owner changes the numbers.
9. **Deployment config** — `netlify.toml`, `_headers`, the deploy branch, and
   the caching/security headers.
10. **Logo files** — replacements must come from the owner and follow the
    cache-busting rule.

When in doubt, ask before shipping.

---

## 13. Current Known Issues

These are known gaps as of the last update — fix with care, and update this
section when resolved.

1. **Contact form does not submit anywhere.** The "Send my request" button only
   fires a JavaScript `alert()` — there is no backend, email handler, or
   Netlify Forms wiring. **Leads submitted through the form are lost.** This is
   the highest-priority functional gap. (Recommended fix: enable **Netlify
   Forms** by adding `netlify` / `data-netlify="true"` attributes and a hidden
   form-name field, plus a honeypot, then configure email notifications.)
2. **`og-image.jpg` is missing.** Social-share metadata references
   `https://qlawnlandscaping.com/og-image.jpg`, but no such file exists. Social
   shares (Facebook, texts, iMessage) will have no preview image. Add a
   `1200×630` image to the project root.
3. **Reviews / testimonials are illustrative.** The three quotes in `#reviews`
   (Sarah M., Mark T., Jennifer K.) read as samples. Confirm these are real and
   permitted, or replace with genuine Google reviews before relying on them.
   The "4.7★ / 89 reviews" figures should be kept current with the real Google
   profile.
4. **No structured data / sitemap / robots.txt.** Local-SEO best practices
   (`LocalBusiness` JSON-LD, `sitemap.xml`, `robots.txt`) are not yet in place.
5. **`www → non-www` redirect is disabled.** It's commented out in
   `netlify.toml`; enable it once the custom domain is connected so both
   hostnames don't compete.
6. **Form fields have no client-side validation** beyond input `type`s, and no
   required attributes — easy to submit empty.

---

## 14. Future Roadmap

Rough priority order. Confirm scope with the owner before starting any item.

**Near-term (highest impact):**
1. **Make the contact form actually work** (Netlify Forms or a form service) +
   email/SMS notifications to the business. *(Resolves issue #1.)*
2. **Add `og-image.jpg`** and verify social-share previews. *(Issue #2.)*
3. **Add `LocalBusiness` JSON-LD structured data, `sitemap.xml`, and
   `robots.txt`** for local SEO. *(Issue #4.)*
4. **Wire up real Google reviews** and keep rating/count current. *(Issue #3.)*

**Medium-term:**
5. Connect the custom domain fully and enable the `www → non-www` redirect.
6. Add Google Analytics / a privacy-friendly analytics tool and call-tracking to
   measure which CTAs drive leads.
7. Image optimization pass (compress, consider `loading="lazy"` on below-the-
   fold images and responsive `srcset`).
8. Add a Google Maps embed or a "Service area" visual to the contact section.
9. Expand the portfolio gallery with real, recent project photos (before/after).

**Longer-term / optional:**
10. Seasonal landing variations (snow removal in winter, tree/patio in
    spring/summer) — without breaking the single-page simplicity.
11. Dedicated service detail pages **only if** SEO data justifies it (this would
    break the single-page model — requires approval per §12).
12. Lightweight accessibility audit (contrast checks on muted `--ink3` text,
    keyboard navigation, reduced-motion support).

---

*End of PROJECT BIBLE. Keep this document updated as the site evolves — it is
the contract every future change is measured against.*
