# Leadership GYM — Greatness for Young Minds

Single-page website for Leadership Greatness for Young Minds (GYM), a 501(c)(3) nonprofit.

## Design

- **Fonts:** Playfair Display (serif headings), DM Sans (body/navigation)
- **Colors:** White/cream background, black text, light blue and coral/peach accents
- **Layout:** One page, bold typography, generous whitespace, smooth scroll navigation

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python 3
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Customize

- **Donate link:** Update the Donate button `href` in `index.html` (or set it via JS) to your Stripe/donation URL.
- **Contact form:** Point the form `action` to your backend or form service (e.g. Formspree, Netlify Forms).
- **Testimonials:** Edit the `.testimonial` blocks in `index.html`; auto-scroll interval is in `script.js` (`intervalMs`, default 5.5s).

## Structure

- `index.html` — Single page: Hero, Mission, Impact, Programs, Testimonials, Team, Donate, Contact
- `styles.css` — Layout and styling
- `script.js` — Testimonials auto-scroll and dot navigation (pause on hover)
