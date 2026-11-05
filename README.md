# VVA clean website concept

A simplified static website based on the supplied Vikram Varma & Associates material.

## Structure
- `index.html` — minimal landing page and philosophy
- `projects.html` — filterable, two-column project index
- `about.html` — studio / philosophy / work method
- `contact.html` — simple contact page
- `styles.css` — one shared design system
- `scripts/projects.js` — project data + full-screen popup behavior
- `scripts/image-cleanup.js` — trims about 2 mm from the right and bottom of site photos, removes thin black edges, and turns slide-edge-connected neutral backgrounds and footer logos white
- `scripts/ppt-project-data.js` — slide galleries and per-discipline image mappings imported from the combined mother deck
- `scripts/import-ppt-slides.ps1` — Windows/PowerPoint importer for regenerating the slide images and mappings
- `assets/img/home-hero/` — optimized photo-only images for the homepage slideshow
- `assets/img/projects/` — local project images used by the project gallery

## Project editing
Edit the `projects` array in `scripts/projects.js`. Each project has:
`title`, `location`, `category`, `status`, `services`, `image`, `facts`, `gallery`, `short`, `lede`, and `copy`. The Projects page filters by category and enabled services. Projects with multiple disciplines appear in each relevant filter and only once in the All view.

Clicking a project card opens a full-screen case-study overlay. Project gallery photos use contain-fit sizing on a white viewer background; the homepage hero uses optimized photo images with cover-fit sizing. The project page and image cards use pure white backgrounds. Site photos are trimmed at the right and bottom edges to remove persistent borders. Neutral backgrounds connected to the edges of rendered PPT slides are normalized to pure white, removing grey slide fields and footer bands while preserving the main image content. Viewer controls and navigation reveal on hover for pointer devices and remain available on touch screens.

The project order, slide galleries, and discipline mappings from `MOTHER COMBINED.pptx` are in `scripts/ppt-project-data.js`. To regenerate them, place `MOTHER COMBINED.pptx` in the repository root and run `powershell -ExecutionPolicy Bypass -File scripts/import-ppt-slides.ps1` on Windows with Microsoft PowerPoint installed. The importer renders full slides without cropping, removes editable project-name/studio-logo footers and cleans the few flattened slides whose source artwork has those marks baked in, and writes the images under `assets/img/projects/ppt-slides/`. It refreshes existing exports when run. Keep image references relative to the repository root so they work on GitHub Pages and on other systems.

## Website guide
The floating "Ask VVA" guide uses locally curated responses and the project data already included on the site. It does not send questions to an AI provider or answer beyond the site's published information. Project links open their gallery directly using `projects.html?project=<project-id>`.

The homepage slideshow image links to the gallery for the currently displayed project. Its curated photo-only sequence is managed in `scripts/home.js`; the optimized hero images are stored separately so slide-map regeneration does not overwrite them. Portrait phones show each complete photo fitted to a compact white hero area sized to the screen width, while landscape phones and larger screens retain the cover crop. Slide changes fade from right to left.

All pages share a footer with three bordered sections for studio branding, vertically stacked site navigation, and clickable email and telephone links. The sections sit side by side on wider screens and stack on mobile. Short pages keep the footer at the bottom of the viewport, while longer pages place it after their content.

## Preview
Run from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing
The site is public and does not use a login. GitHub Pages deployment is handled by the workflow in `.github/workflows/deploy-pages.yml`. To enable the first deployment, open the repository's **Settings → Pages** and set the publishing source to **GitHub Actions**. Then run **Deploy GitHub Pages** from the **Actions** tab. The public URL is `https://jaivarma17.github.io/vva/`.

## Security before publishing
- Keep passwords, API keys, private keys, and personal data out of tracked files; use environment variables or a secrets manager for server-side secrets.
- Review `git status` and the staged diff before each commit, and rotate any credential that may have been committed.
- Do not add client-side password checks to this static site; they cannot protect content that is delivered to visitors.
- Use HTTPS, secure session cookies, rate limiting, and least-privilege access if adding a real authentication backend.
- Enable two-factor authentication on GitHub and use fine-grained tokens with only the required repository permissions.
