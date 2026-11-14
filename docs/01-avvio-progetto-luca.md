# 01 — Avvio del progetto (a cura di Luca)

Tempo: circa 20 minuti. Serve: account GitHub e la cartella `apps/gian-website/`.

## Decisione 1 — Dove vive il repository

**Consigliato: un'organizzazione GitHub gratuita** (es. `gianlucacraca`) con Luca e Gian entrambi *Owner*.
- Il sito è di Gian, ma Luca resta co-amministratore.
- Al go-live serve accesso *admin* al repository (impostazioni di Pages e dominio): con l'organizzazione ce l'hanno entrambi.

Alternativa rapida: repository sull'account personale di Luca e Gian come *collaboratore*. Funziona, ma un collaboratore può modificare i file e non le impostazioni: il go-live dovrà farlo Luca (oppure si trasferisce il repo a Gian più avanti: Settings → General → Transfer ownership).

## Decisione 2 — Pubblico o privato

Con l'account GitHub gratuito, **GitHub Pages funziona solo su repository pubblici**. Con GitHub Pro (o Team per le organizzazioni) il repository può essere privato.

In ogni caso **il sito pubblicato su GitHub Pages è sempre visibile a chi conosce l'indirizzo**. Per tenerlo "nascosto" durante la fase di anteprima, tutte le pagine contengono già:

```html
<meta name="robots" content="noindex, nofollow">
```

che chiede a Google e agli altri motori di ricerca di non indicizzarlo. Va tolto al go-live (vedi `04-go-live-dominio.md`).

→ **Scelta consigliata: repository pubblico + noindex.** Nel repository non ci sono dati sensibili.

## Passi

### 1. Creare l'organizzazione (se si sceglie questa strada)
1. github.com → icona **+** in alto a destra → **New organization** → piano **Free**.
2. Nome: `gianlucacraca` (o simile). Email di contatto: quella di Luca.
3. Saltare l'invito membri per ora (lo facciamo al punto 5).

### 2. Creare il repository dalla cartella locale
Il codice è già in `~/Documents/personal/apps/gian-website/`.
1. Installare GitHub Desktop (desktop.github.com) e accedere con l'account GitHub.
2. GitHub Desktop → **File → Add local repository** → scegliere `apps/gian-website`.
3. Alla domanda "This directory does not appear to be a Git repository": **create a repository** → nome `gian-website`, nessun README/.gitignore/licenza (ci sono già) → **Create repository**.
4. Commit iniziale: Summary `Prima versione del sito` → **Commit to main**.
5. **Publish repository** → Name `gian-website` → togliere la spunta "Keep this code private" se si sceglie il repository pubblico → Organization: quella creata al punto 1 (se scelta) → **Publish**.

### 3. Controllo
Su github.com il repository `gian-website` deve mostrare `index.html` alla radice, le cartelle `assets/`, `docs/`, `claude-project/` e i file `.gitignore`, `_config.yml`, `CLAUDE.md`.

### 4. Attivare GitHub Pages
1. Repository `gian-website` → **Settings** → **Pages**.
2. *Build and deployment* → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → **Save**.
3. Dopo 1–2 minuti in cima alla pagina compare l'indirizzo, es. `https://NOMEACCOUNT.github.io/gian-website/`. Aprirlo e controllare che tutto funzioni.

Da questo momento **ogni push su `main` pubblica automaticamente** il sito (si vede l'avanzamento nella scheda **Actions** del repository).

### 5. Invitare Gian
- Organizzazione: **People** → **Invite member** → username o email di Gian → ruolo **Owner**.
- Account personale: repository → **Settings** → **Collaborators** → **Add people**.

Gian riceverà un'email di invito da accettare (vedi `02-setup-iniziale-gian.md`).

### 6. Preparare il progetto Claude di Gian
Nella cartella `claude-project/` ci sono:
- `istruzioni-progetto.md` → da incollare nelle **istruzioni** di un nuovo progetto Claude.
- `prompt-avvio.md` → il messaggio da incollare nella prima chat del progetto.
- Da caricare come **file del progetto (knowledge)**: tutti i file di `docs/` e il `README.md`.

Si può creare il progetto direttamente sull'account di Gian (consigliato), oppure mandargli i file con queste istruzioni.

## Checklist finale
- [ ] Repository creato e file caricati (index.html alla radice)
- [ ] GitHub Pages attivo e sito visibile all'indirizzo github.io
- [ ] Le pagine hanno il tag noindex (tasto destro → Visualizza sorgente → cercare "noindex")
- [ ] Gian invitato
- [ ] Kit del progetto Claude consegnato a Gian
