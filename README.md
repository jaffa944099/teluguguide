# Kaashi Telugu Guide

A responsive English and Telugu website for the Varanasi tour agency listed at https://share.google/xsclolIkkXBpQ6PhG.

Live website: **https://kashiteluguguide.pages.dev/**

## Website features

- Destination photography, interest filters and travel guidance.
- English/Telugu switch with a browser-local language preference.
- Verified telephone link and Google Maps/listing links.
- A visit enquiry builder. It prepares a message locally; it does not send enquiries, collect personal information, or make bookings.
- Accessible mobile navigation, keyboard controls, reduced-motion support and responsive layouts.

Business name, telephone and address were checked against the supplied Google listing on 4 October 2026. Destination experiences are suggestions; arrangements and fees must be confirmed directly. See [SOURCE_NOTES.md](SOURCE_NOTES.md) and [Photography credits](credits.html).

## Run locally

No build step or dependency installation is required:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. All local asset links are relative, so the site works on GitHub Pages project paths as well as a domain root.

## Cloudflare Pages

The workflow `.github/workflows/cloudflare-pages.yml` deploys the same static website to Cloudflare Pages on each push to `main`, or when run manually in GitHub Actions. It uses these repository secrets:

- `CLOUDFLARE_ACCOUNT_ID`: the target Cloudflare Account ID.
- `CLOUDFLARE_API_TOKEN`: a token scoped to that account with **Account → Cloudflare Pages → Edit** permission.

The first run creates the `kashiteluguguide` Direct Upload project; later runs reuse it. The project is marked with the source repository so the workflow will not overwrite an unrelated existing project with the same name. The workflow summary contains the production URL returned by Cloudflare. Credentials stay in GitHub Secrets and are excluded from website artifacts.

For a custom domain on Cloudflare, open **Workers & Pages → the project → Custom domains → Set up a custom domain**, then follow Cloudflare's DNS instructions. Do this through the project before manually adding a DNS record. GitHub stores the source and runs this deployment workflow; automatic publishing goes to Cloudflare Pages only. All website asset paths are relative, so a custom domain does not require rewriting them.

## Updating content

Edit `index.html` for the English copy and `app.js` for its Telugu translations. Styling is in `styles.css`. Photographs are locally hosted in `assets/`; retain the required attribution in `credits.html` when reusing them. Google Fonts provides DM Sans and Noto Sans Telugu, with system-font fallbacks.
