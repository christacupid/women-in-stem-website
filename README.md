# Women in STEM — Western University Website

Official website for the Women in STEM club at Western University.

This is a static multi-page site (HTML, CSS, and JS). No build step is required.

## Local development

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

- `index.html` — homepage
- `about.html`, `events.html`, `get-involved.html`, `team.html`, `blog.html`, `contact.html`, `resources.html` — site pages
- `css/` and `js/` — shared styles and content
- `images/` and `headshots/` — logo and team photos
- `vercel.json` — Vercel static-site settings (`cleanUrls` so `/about` serves `about.html`)

## Deployment (Vercel)

The site is set up to deploy as a static project on Vercel.

**Option A — GitHub (recommended for the club):**
1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), import the GitHub repository.
3. Leave the framework preset as **Other** (no build command, output directory blank).
4. Click Deploy. Later pushes to `main` will auto-deploy.

**Option B — Vercel CLI:**
```bash
npx vercel --prod
```

## Team

Maintained by the Women in STEM executive team — reach out to womeninstemuwo@gmail.com with questions.
