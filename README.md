# VVA clean website concept

A simplified static website based on the supplied Vikram Varma & Associates material.

## Structure
- `index.html` — minimal landing page and philosophy
- `projects.html` — filterable, two-column project index
- `about.html` — studio / philosophy / work method
- `contact.html` — simple contact page
- `styles.css` — one shared design system
- `scripts/projects.js` — project data + full-screen popup behavior
- `scripts/ppt-project-data.js` — slide galleries and per-discipline image mappings imported from the six mother decks
- `scripts/import-ppt-slides.ps1` — Windows/PowerPoint importer for regenerating the slide images and mappings
- `assets/img/projects/` — local project images used by the homepage and project gallery

## Project editing
Edit the `projects` array in `scripts/projects.js`. Each project has:
`title`, `location`, `category`, `status`, `services`, `image`, `facts`, `gallery`, `short`, `lede`, and `copy`. The Projects page filters by category and enabled services. Projects with multiple disciplines appear in each relevant filter and only once in the All view.

Clicking a project card opens a full-screen case-study overlay.

The order, slide galleries, discipline mappings, and homepage hero sequence from the six mother PowerPoints are in `scripts/ppt-project-data.js`. To regenerate them, place all six `MOTHER...pptx` files in the repository root and run `powershell -ExecutionPolicy Bypass -File scripts/import-ppt-slides.ps1` on Windows with Microsoft PowerPoint installed. The importer renders complete landscape slides, cropping the footer with its title and logo, and writes the images under `assets/img/projects/ppt-slides/`. Keep image references relative to the repository root so they work on GitHub Pages and on other systems. The All filter combines the decks; discipline filters use only slides assigned to that discipline.

## Website guide
The floating "Ask VVA" guide uses locally curated responses and the project data already included on the site. It does not send questions to an AI provider or answer beyond the site's published information. Project links open their gallery directly using `projects.html?project=<project-id>`.

The homepage slideshow image links to the gallery for the currently displayed project. Its built-project sequence is managed in `scripts/ppt-project-data.js`.

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
