# pocketlyrics.app

The app's own domain, served by GitHub Pages with HTTPS. Every path redirects to the Pocket Lyrics
page on goodmarklabs.com, which is where the page itself is maintained (repo `goodmark-website`).

- `index.html` and `404.html`: the redirect (a meta refresh plus a script, since GitHub Pages can't send a 301).
- `CNAME`: the custom domain GitHub Pages serves this repo at.

To make pocketlyrics.app the real home of the page later, replace the redirect with the page and
update the canonical link on goodmarklabs.com.
