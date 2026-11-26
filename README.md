# pocketlyrics.app

The Pocket Lyrics product website, served by GitHub Pages from `main` with the custom domain in `CNAME`.
Plain HTML and CSS: no build step, no analytics, cookies or trackers. The only script is `assets/video.js`, which swaps the home page video's poster for the youtube-nocookie.com player when someone presses play (nothing loads from YouTube before then). Fonts (Inter, SIL OFL) are self-hosted.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/features/` | Songs & chords, Transpose & capo, Auto-scroll, Set lists, Detect, Voice mode, Chords library, Tuner |
| `/pricing/` | Free and Pro (NZ$4.99/month or NZ$34.99/year, 3-day free trial) |
| `/faq/` | Questions, with FAQPage structured data |
| `/support/` | support@goodmarklabs.com and quick help |
| `/manage-subscription/` | Manage or cancel on Android and iPhone |
| `/privacy/`, `/terms/` | Word-for-word copies of goodmarklabs.com/pocket-lyrics/privacy and /terms |
| `404.html` | Not found (noindex) |

## Rules

- **Privacy and Terms** are copies of the pages in the `goodmark-website` repo (`pocket-lyrics/privacy`, `pocket-lyrics/terms`), which are the masters. Copy the `<article>` and the "On this page" list across unchanged when they change, keeping the effective date; only link targets differ (`/privacy/`, `/terms/`, and the delete-account page on goodmarklabs.com).
- **Screenshots** in `assets/img/` are real captures of the released app (phone size, light mode, sample public-domain songs). Never use drawn or AI-generated screens. Each is WebP at 390 and 780 px wide plus a 780 px JPEG, shown inside the CSS phone frame (`.phone`).
- **Store badges** are the official artwork, unaltered: `assets/badges/google-play.png` and `assets/badges/app-store.svg` (from Apple's marketing tools).
- `assets/og-key.png` (1200 x 630) is the link preview image, laid out in HTML from the real Amazing Grace song and Detect (Song mode) screenshots. Give a new image a new file name so Facebook and WhatsApp drop their cached copy.
- Update `sitemap.xml` when a page is added, and bump `?v=` on `site.css` in every page when the CSS changes.
- `.nojekyll` makes GitHub Pages serve the files as they are.
