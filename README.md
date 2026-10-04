# Kaashi Telugu Guide

A responsive English and Telugu website for the Varanasi tour agency listed at https://share.google/xsclolIkkXBpQ6PhG.

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

## GitHub Pages

The website is published at https://jaffa944099.github.io/teluguguide/ using the workflow in `.github/workflows/pages.yml`. In repository **Settings → Pages**, the source is **GitHub Actions**. Every push to `main` deploys the site; the workflow can also be run manually from the **Actions** tab.

The deployment includes only the website HTML, CSS, JavaScript and assets. Documentation, research files and Git metadata are excluded from the published artifact.

## Move to a separate domain later

1. Set your custom domain in repository **Settings → Pages**. This workflow uses GitHub Actions, so no `CNAME` file is required for deployment.
2. Configure the domain's DNS using the current [GitHub Pages custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. Complete domain verification, then enable **Enforce HTTPS** when GitHub makes it available.
4. Add the final domain as the canonical URL and update social-sharing metadata after the domain is selected.

No custom domain is configured yet. There is no server to migrate.

## Updating content

Edit `index.html` for the English copy and `app.js` for its Telugu translations. Styling is in `styles.css`. Photographs are locally hosted in `assets/`; retain the required attribution in `credits.html` when reusing them. Google Fonts provides DM Sans and Noto Sans Telugu, with system-font fallbacks.
