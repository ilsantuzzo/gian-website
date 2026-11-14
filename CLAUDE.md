# gian-website

Static portfolio site of an artist, published with GitHub Pages. Two kinds of people work on this repository:
- **Luca** (project owner, technical co-admin), on his Mac, where the management folder exists;
- **the artist** (not a developer), through his own Claude project and GitHub Desktop.

Reply in Italian. With the artist, explain in plain language, one step at a time.

## Project management (Luca's sessions only)
- Folder: `../../projects/gian-website/` — `00_README.md` (status, next actions), `01_decisions.md` (decisions and open items), `02_spec.md` (steps and scope). Standard: `../../projects/_project_structure.md`.
- If that folder exists, read `00_README.md` at the start of each session; before working on a step, read its `epic_<n>_<name>.md` if present. Decisions and specs live only there: do not restate them here or in `docs/`, link to them.
- Domain and DNS needs become open items with owner `GWEB` in `01_decisions.md` (the domain belongs to the artist, not to Luca's infrastructure).
- Read access is preconfigured in `.claude/settings.json`; show Luca any change to management files before committing it.
- If the folder does not exist, you are on the artist's machine: ignore this section and follow `docs/`.

## Git and GitHub
- **Luca's sessions:** local commits are free; before every push list the files changed against `origin/main` and wait for Luca's explicit ok.
- **The artist's sessions:** he publishes on his own with GitHub Desktop (Fetch/Pull → Commit to main → Push origin), as in `docs/03-lavoro-quotidiano.md`. Remind him to pull before working and to check the page locally before pushing.
- Never change repository settings, Pages settings or collaborators.
- Never put secrets, passwords or personal data in git: the repository is public.

## The site
- Plain HTML + CSS + JavaScript: no framework, no build, no external dependencies (no CDN, no web fonts).
- Published by GitHub Pages from `main`, root folder; each push goes live in 1–2 minutes.
- Domain registered at Aruba, DNS managed in the Aruba panel; today it points to a Wix site.
- Human-facing procedures (in Italian) in `docs/`; the kit for the artist's Claude project in `claude-project/`.

```
index.html      Yatha — home with the five statements (lang="en")
morphe.html     Morphē — series of works
holon.html      Holon — series of works
bio.html        Bio + email + contact form (mailto)
404.html        not found page
assets/css/style.css   single stylesheet; variables in :root
assets/js/main.js      scroll reveal, page fade, lightbox, mailto form
assets/img/            works: name.avif + name.jpg
_config.yml     excludes docs/, claude-project/, CLAUDE.md, README.md from publication
```
Menu and footer are duplicated in every HTML page: change them in **all** pages.

## Look and feel (preserve)
- Minimal, lots of white, sans-serif (Helvetica stack), greys `--ink #3b3b3b`, `--muted #9a9a9a`.
- Works in a single column with generous spacing, no borders or shadows.
- Only light animations (fades, small shifts), always disabled under `prefers-reduced-motion`.
- Do not add decoration, colours, social icons, sliders, libraries, cookie banners, analytics or external fonts unless explicitly asked.

## Works: conventions
Each work is an `<li class="reveal">` inside `<ul class="gallery">`:
```html
<li class="reveal">
  <figure class="work">
    <button type="button" data-lightbox aria-label="Ingrandisci: ALT">
      <picture>
        <source srcset="assets/img/NAME.avif" type="image/avif">
        <img src="assets/img/NAME.jpg" alt="ALT" width="W" height="H" loading="lazy" decoding="async">
      </picture>
    </button>
    <figcaption>CAPTION (may stay empty)</figcaption>
  </figure>
</li>
```
- File names: lowercase, hyphens, no spaces or accents (`morphe-08.jpg`).
- `width`/`height` = real pixel size of the JPG (read it from the file; never guess).
- The first work of each page uses `fetchpriority="high"` instead of `loading="lazy"`.
- **Add the `<source … avif>` line only if the `.avif` file really exists.** If you cannot generate it, keep only the JPG `<img>` and say so.
- If you can run commands: resize to max 1600 px on the long side, JPG quality ~82 sRGB, AVIF quality ~60–70.
- `alt` text in Italian, descriptive (series, shape, colour). Never invent titles, years, techniques or sizes: ask.

## State: STAGING
Until go-live every page contains `<meta name="robots" content="noindex, nofollow">`. Remove it only during `docs/04-go-live-dominio.md` and on explicit request.

## How to work
1. Small, targeted changes; never reformat whole files.
2. Relative paths only (`assets/…`, `morphe.html`), never a leading `/`: in staging the site lives in a sub-folder of github.io.
3. After a change: explain it in 1–3 lines and suggest the commit message.

## Ask for confirmation before
- deleting files or pages;
- touching `_config.yml`, `CNAME`, the robots meta tag;
- any step on Aruba DNS or on Wix/Aruba subscriptions (follow `docs/04` and `docs/05` to the letter; have a screenshot of the DNS records taken before any change).
