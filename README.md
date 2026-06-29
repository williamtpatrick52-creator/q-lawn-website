# Q Lawn Landscaping — Website

**Live site:** [qlawnlandscaping.com](https://qlawnlandscaping.com)  
**Phone:** (307) 772-1222  
**Location:** Cheyenne, Wyoming

---

## Project Structure

```
qlawn/
├── index.html          ← All page content & markup
├── css/
│   └── styles.css      ← All styles (variables, layout, sections, responsive)
├── js/
│   └── main.js         ← Smooth scroll + mobile menu behavior
├── images/
│   ├── logo.png        ← Header logo
│   ├── logo-footer.png ← Footer logo
│   ├── hero.jpg        ← Full-screen hero background
│   ├── tree-inventory.jpg
│   ├── paver-patio.jpg
│   ├── retaining-wall.jpg
│   ├── landscaping.jpg
│   ├── xeriscaping.jpg
│   └── sod-installation.jpg
├── _headers            ← Netlify HTTP security headers
├── netlify.toml        ← Netlify build + cache config
└── README.md
```

---

## How to Edit

### Update text / content
Open `index.html` and find the section you want — sections are labeled with IDs:
- `#offers` — Current special offers / deals
- `#services` — Services grid
- `#trees` — Tree nursery section
- `#portfolio` — Photo gallery
- `#reviews` — Customer reviews
- `#contact` — Contact form + business info

### Update colors / fonts / spacing
Open `css/styles.css`. All brand colors are CSS variables at the top of the file:
```css
:root {
  --white: #FFFFFF;
  --ink: #1A1916;      /* Primary dark color */
  --green: #2A5A2A;
  --red: #C0392B;      /* Used for "Offers" nav link */
  ...
}
```

### Replace an image
Drop the new file into `/images/` using the same filename. No code changes needed.

### Add a new image to the gallery
1. Add the image file to `/images/`
2. In `index.html`, find `<section id="portfolio"` and add a new `<div class="gi">` block

### Update the mobile menu or scroll behavior
Edit `js/main.js`

---

## Deployment (Netlify)

This site deploys directly from the root folder — no build step required.

1. Drag the entire project folder into [netlify.com/drop](https://app.netlify.com/drop), **or**
2. Connect the GitHub repo and Netlify auto-deploys on every push

**Build settings:**
- Build command: *(none)*
- Publish directory: `.`

---

## Special Offers

The deals in `#offers` are seasonal. To update them, edit the `.oc-amount` and `.oc-desc` text inside `index.html` under `<section id="offers"`.

The expiration note for the tree deal appears in two places:
- Inside the `#trees` section: `tree-special` class div
- Inside the `#offers` section: first `.oc-fine` div
