# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project type
This repo is a **static multi-page website** (HTML/CSS/vanilla JS). There is no build system (no `package.json`, `Makefile`, etc.) and no test/lint tooling checked in.

## Common commands
### Run locally (static server)
Many pages use absolute paths like `/ResMenu/...` for scripts/links, so you should serve from the repo root (`Webfinal`) rather than opening files directly.

From the repo root:
- Start a local web server on port 8080 (matches `.vscode/launch.json`):
  - `python3 -m http.server 8080`
- Then open:
  - `http://localhost:8080/ResMenu/Home/index.html`
  - or `http://localhost:8080/ResMenu/Welcome/welcome.html`

### Debugging
VS Code launch configs exist at:
- `.vscode/launch.json`
- `ResMenu/ResMenu/.vscode/launch.json`

They assume the site is available at `http://localhost:8080`.

## High-level architecture
### Pages and responsibilities
The main site lives under `ResMenu/` and is organized by page folder:
- `ResMenu/Welcome/` (`welcome.html`, `welcome.js`, `welcome.css`): landing page with two video panels; `welcome.js` plays/pauses video on hover.
- `ResMenu/Home/` (`index.html`, `main.js`, `script.js`, `note.js`, `style.css`):
  - `main.js`: hero slideshow (dynamic “ST(E)AK/PASTA” letters + image swap).
  - `script.js`: 3D-style carousel (arrow / dot navigation + autoplay).
  - `note.js`: hover effect + typewriter animation for the “OUR STORY” block.
- `ResMenu/Menu/` (`menu.html`, `menu.js`, `menuData.js`, `menu.css`): menu page rendered dynamically.
  - `menuData.js` exports arrays of items.
  - `menu.js` (ES module) imports data and renders cards into `.food-row` containers; also controls tab switching.
- `ResMenu/Aboutus/` (`aboutus.html`, `aboutus.js`, `aboutus.css`): about/staff page. The HTML pulls in Tailwind via CDN and GSAP/ScrollTrigger via CDN.
- `ResMenu/Reservation/` (`reservation.html`, `reservation.js`, `reservation.css`): reservation form.
  - `reservation.html` posts to Formspree (`action="https://formspree.io/f/mqayrrqq"`).
  - `reservation.js` intercepts submit and uses `fetch` to submit + show a transient alert.

### Shared code
- `ResMenu/Navbar/navbar.js`: scroll-hide/show behavior for the `<nav class="navbar">` element (used by multiple pages).
  - Note: `ResMenu/Home/nav.js` implements a similar behavior but most pages include `ResMenu/Navbar/navbar.js`.

### Assets
- Local assets are primarily under `ResMenu/img/` (images + videos used on Welcome/Home).
- Many images/videos are hotlinked from Cloudinary URLs directly in HTML/JS.

### Notable repo structure quirks
There are nested directories that appear to duplicate the `ResMenu/` layout:
- `ResMenu/ResMenu/ResMenu/...`

When editing or adding features, confirm which copy is actually being served/used (the top-level `ResMenu/` is the one referenced by absolute URLs like `/ResMenu/...`).
