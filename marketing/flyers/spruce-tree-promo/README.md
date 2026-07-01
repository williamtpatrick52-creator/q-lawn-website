# Q Lawn Landscaping — Spruce Tree Promotion Flyer

A premium, print-ready **8.5 × 11 in** direct-mail flyer (front + back) for
Q Lawn's *"Buy 9 Spruce Trees, Get 1 Free"* seasonal offer, mailed to selected
homeowners in Cheyenne, Wyoming.

The design mirrors the [qlawnlandscaping.com](https://qlawnlandscaping.com/)
brand: **Instrument Serif** (italic display) + **Instrument Sans** (body), the
site's off-white / near-black ink palette, hairline-bordered grids, generous
whitespace, and no drop shadows — an editorial, luxury-minimal look, not a loud
coupon mailer. See the site's `PROJECT_BIBLE.md` for the full brand spec.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Semantic markup for both sides (two `<article class="page">`). |
| `styles.css` | All styling. Brand tokens up top, front side, back side, then `@media print`. No inline CSS, no frameworks. |
| `README.md` | This file. |

The Q Lawn logo is pulled live from the site at `../../../images/logo.png`
(the white-on-black header logo), so it stays in sync if the logo is updated.

## Layout

**Front**
- Full-bleed hero (spruce-green placeholder — replace with photography) with the
  eyebrow, a *Limited Seasonal Offer* tag, the **Buy 9 Spruce Trees / Get 1 Free**
  headline, and the *Create privacy · Reduce wind · Increase property value* subhead.
- Four-up feature strip: Professional Installation · Premium Nursery Stock ·
  Local Experts · Seasonal Availability.
- Black call-to-action band: Q Lawn logo, "Schedule your free estimate today,"
  and the large phone number **(307) 772-1222**.

**Back**
- "Why homeowners choose Q Lawn Landscaping" intro + company paragraph.
- Four reasons: Experienced Local Professionals · Quality Workmanship ·
  Reliable Scheduling · Residential Specialists.
- Services grid (8): Tree Installation, Sod Installation, Landscaping,
  Retaining Walls, Patios, Lawn Renovation, Irrigation, Seasonal Cleanup.
- "Why spruce trees?" list beside a dark CTA panel repeating the offer and phone.

## Printing to PDF

Open `index.html` in Chrome or Edge → **Print** (Ctrl/Cmd + P):

- **Destination:** Save as PDF
- **Paper size:** Letter (8.5 × 11 in)
- **Margins:** None
- **Scale:** 100% (Default)
- **Background graphics:** ON ← required, or the dark bands and photo drop out

The `@page { size: 8.5in 11in; margin: 0 }` rule and
`print-color-adjust: exact` make each side render as one full-bleed page, front
then back. The result is a two-page PDF ready to hand to a print shop.

## Replacing the hero photography

The hero currently uses a deep evergreen gradient placeholder with a small
caption note (`.hero-photo` / `.photo-note` in the markup and CSS).

To drop in a real photo of **mature blue spruce surrounding a luxury home**:

1. Add the image to the site's `/images/` folder (e.g. `spruce-hero.jpg`),
   ~2000px wide, high quality.
2. In `styles.css`, replace the `.hero-photo { background: … }` gradient with:
   ```css
   .hero-photo{
     background:url('../../../images/spruce-hero.jpg') center/cover no-repeat;
   }
   ```
3. Remove the `<span class="photo-note">…</span>` line from `index.html`.

The dark legibility gradient (`.hero-overlay`) already sits over the photo so the
white headline stays readable — design for the bottom-left text crop.

## Notes for the print vendor

- **Trim size:** 8.5 × 11 in (US Letter), portrait, double-sided.
- **Bleed:** the design is intentionally full-bleed (photo + dark bands run to the
  edge). For commercial printing, ask the vendor to add a standard **0.125 in
  bleed** on all sides (scale-to-bleed) and their own crop marks. All critical
  text sits ≥ 0.5 in inside the trim, so it stays well within the safe zone.
- **Color:** built in RGB for screen/desktop print. For offset printing, convert
  to CMYK; the palette (near-black ink, off-white, `#2A5A2A` / `#56B85A` greens)
  is CMYK-safe and won't shift noticeably.
- **Stock:** for the intended "keep it on the kitchen counter" feel, print on a
  heavy cover stock (100 lb+ / 14 pt) with a soft-touch or matte finish.

## Editing

Vanilla HTML/CSS only — no build step. Edit the files and refresh the browser.
Keep the fonts, palette, and hairline-grid style consistent with the main site;
the offer wording ("Buy 9 spruce trees, get 1 free") and the phone number
`(307) 772-1222` are real business commitments — do not change them without owner
approval (see `PROJECT_BIBLE.md` §12).
