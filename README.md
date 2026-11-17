# gian-website

Static portfolio site of an artist (HTML, CSS, plain JavaScript; no dependencies, no build), published with **GitHub Pages**. The domain is registered at Aruba.

**State: STAGING** — pages carry `noindex` until go-live (`docs/04-go-live-dominio.md`).

## Where to start
| Who | Read |
|---|---|
| Everyone | `docs/00-panoramica.md` |
| Luca (setup) | `docs/01-avvio-progetto-luca.md` |
| The artist (first time) | `docs/02-setup-iniziale-gian.md` |
| Day-to-day edits | `docs/03-lavoro-quotidiano.md` |
| Go-live on the domain | `docs/04-go-live-dominio.md` |
| Wix / Aruba subscriptions | `docs/05-abbonamenti-wix-aruba.md` |
| Troubleshooting | `docs/06-problemi-comuni.md` |
| Claude | `CLAUDE.md` + `claude-project/` (instructions and prompts for the artist's Claude project) |

The procedures in `docs/` and the kit in `claude-project/` are in Italian: they are written for the people using them.

## Structure
```
index.html        Yatha — home with the five statements
morphe.html       Morphē — series of 7 works
holon.html        Holon — Geografia + detail
bio.html          Bio, email, contact form
404.html          Not found page
robots.txt
_config.yml       Keeps docs and working files out of the published site
assets/
  css/style.css   All styles (colours and sizes in :root)
  js/main.js      Animations, lightbox, contact form
  img/            Works: .avif (light) + .jpg (fallback)
docs/             Operating procedures (Italian)
claude-project/   Instructions and prompts for the artist's Claude project (Italian)
CLAUDE.md         Rules for Claude working on this repository
```

## Animations
Fade-in of the home statements and of the works on scroll, fade between pages, lightbox (click a work; arrows, keyboard, swipe; Esc to close). All disabled under "reduce motion".

## Contact form
Contact form: sent through Web3Forms (free plan, 250 submissions/month) straight to the artist's inbox. The `access_key` in `bio.html` is public by design; the Web3Forms account belongs to the artist.

## Local preview
Double-click `index.html`, or run `python3 -m http.server 8000` and open http://localhost:8000.
