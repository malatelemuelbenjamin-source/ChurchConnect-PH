# Blank website

A clean HTML, CSS and JavaScript starting point with Vite's live reload.
No framework, accounts, database or external services are needed.

## Run locally

```sh
bun install
bun run dev
```

Open the URL printed by Vite. The server binds to `0.0.0.0` so it also works
in a Freebuff Cloud preview.

## Make it yours

- `index.html` — page content, title and description.
- `src/style.css` — styles, colors and typography.
- `src/main.js` — browser behavior and the stylesheet import.
- `public/` — create this folder for images and other static files.

Replace the greeting with your website. Add a framework only if your project
needs one.

## Build and publish

```sh
bun run build
bun run preview
```

The build produces `dist/`. When the user asks to publish on Freebuff Sites,
use `sites_deploy` with `deploy.json`. Its tiny `worker/index.js` serves the
built assets through the platform's `ASSETS` binding. No integrations or
secrets are required. Other static hosts can serve `dist/` directly.
