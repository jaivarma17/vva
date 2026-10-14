# VVA clean website concept

A simplified static website based on the supplied Vikram Varma & Associates material.

## Structure
- `index.html` — minimal landing page and philosophy
- `projects.html` — two-column project index
- `about.html` — studio / philosophy / work method
- `contact.html` — simple contact page
- `styles.css` — one shared design system
- `scripts/projects.js` — all project data + full-screen popup behavior
- `assets/img/projects/` — local project images used by the homepage and project gallery

## Project editing
Edit the `projects` array in `scripts/projects.js`. Each project has:
`title`, `location`, `year`, `type`, `image`, `gallery`, `short`, `lede`, and `copy`.

The `short` field is visually clamped to two lines in the project index. Clicking a card opens a full-screen case-study overlay.

Keep image references relative to the repository root so they work on GitHub Pages and on other systems. Project images are displayed in consistent 16:9 frames and cropped to fit.

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
