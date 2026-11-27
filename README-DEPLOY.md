# ConnectChurch — Deployment Guide

This package contains a **finished static build** at the top level and the **editable source** in `source/`.

## What is inside

```
/
├── index.html          ← ready to publish
├── assets/             ← compiled CSS and JavaScript
├── images/             ← all website images
├── favicon.svg
├── README-DEPLOY.md
└── source/             ← editable Vite project (not required for hosting)
```

The top-level files are the production build. Upload **the contents of this folder** (not the folder itself) to any static host. The build uses relative paths, so it also works inside a subfolder such as `example.com/connectchurch/`.

## Publish it

**Netlify Drop** — drag this folder onto app.netlify.com/drop. No build command is needed.

**Vercel** — create a project and upload/deploy this folder as a static site. Framework preset: *Other*. No build command. Output directory: `.` (the folder itself).

**Cloudflare Pages** — upload the folder as a direct upload. No build command and no framework preset are required.

**GitHub Pages** — push the contents of this folder to the branch Pages serves (`main` / `gh-pages`), or upload via the Pages UI. Relative paths make project subpaths work.

**cPanel / traditional hosting** — upload the contents into `public_html` (or a subfolder). `index.html` is the entry point.

**Local check** — run `npx serve .` in this folder and open the shown URL.

## Editing and rebuilding

```bash
cd source
npm install
npm run dev      # local development
npm run build    # writes source/dist
```

After rebuilding, replace the top-level `index.html`, `assets/`, `images/` and `favicon.svg` with the contents of `source/dist/`.

## Notes

- The website is **frontend-only**: no backend, database, login, registration, API, or admin panel. Contact, partnership, Privacy Policy and Terms of Use areas are clearly marked placeholders.
- Language preference is stored in the visitor's browser (`localStorage`) under `connectchurch-language`. English is the default; Filipino switches instantly.
- `og:image` uses a root-relative path (`/images/hero-community.jpg`). Change it to an absolute URL after you know your domain if you want social previews to show the image.
- All content, sections, animations and bilingual strings are already included and tested.
