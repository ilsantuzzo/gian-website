# Sito gianlucacraca.com — panoramica del progetto

## Come funziona, in breve

```
 Computer di Gian / di Luca            GitHub                         Internet
 ┌──────────────────────┐   push   ┌──────────────────┐  automatico  ┌──────────────────────┐
 │ cartella del sito     │ ───────▶ │ repository        │ ───────────▶ │ GitHub Pages          │
 │ (modificata con Claude)│ ◀─────── │ (storico completo)│              │ (il sito online)      │
 └──────────────────────┘   pull   └──────────────────┘              └──────────────────────┘
                                                                              ▲
                                                     DNS su Aruba ───────────┘
                                                     gianlucacraca.com punta qui
```

- **Il sito** è fatto di semplici file (HTML, CSS, JavaScript, immagini). Niente WordPress, niente database.
- **GitHub** conserva i file e lo storico di ogni modifica: si può sempre tornare indietro.
- **GitHub Pages** pubblica automaticamente il sito ogni volta che una modifica arriva su GitHub (1–2 minuti).
- **Aruba** è dove è registrato il dominio `gianlucacraca.com` e dove si gestiscono i DNS, cioè "l'elenco indirizzi" che dice al mondo dove si trova il sito.
- **Wix** oggi riceve il dominio da Aruba tramite puntamento. Al go-live il puntamento verrà spostato su GitHub Pages e Wix non servirà più.

## Situazione attuale (novembre 2026)

| Elemento | Dove | Stato |
|---|---|---|
| Dominio `gianlucacraca.com` | Aruba | Registrato, con pacchetto che include hosting Linux (non usato) |
| DNS del dominio | Aruba (pannello Gestione DNS) | Punta a Wix |
| Sito attuale | Wix (piano Premium) | Online su gianlucacraca.com |
| Sito nuovo | GitHub Pages | In anteprima, **non indicizzato** dai motori di ricerca |

## Le fasi

1. **Avvio** (Luca) — crea il repository, carica il sito, attiva GitHub Pages, invita Gian. → `01-avvio-progetto-luca.md`
2. **Setup di Gian** — account GitHub, GitHub Desktop, primo download e prima modifica di prova. → `02-setup-iniziale-gian.md`
3. **Lavoro sul sito** — modifiche con l'aiuto di Claude, pubblicazione con un clic. → `03-lavoro-quotidiano.md`
4. **Go-live** — togliere il blocco ai motori di ricerca, collegare il dominio a GitHub Pages dal pannello DNS di Aruba. → `04-go-live-dominio.md`
5. **Pulizia abbonamenti** — disdire Wix Premium, ridurre il servizio Aruba al solo dominio. → `05-abbonamenti-wix-aruba.md`

Problemi? → `06-problemi-comuni.md`

## Regole d'oro

1. **Prima di iniziare a lavorare: Fetch/Pull** (scaricare le ultime modifiche). Sempre.
2. **Alla fine: Commit + Push** (salvare e pubblicare), con una frase che descrive cosa si è cambiato.
3. Non lavorare in due contemporaneamente sugli stessi file senza essersi sentiti.
4. Mai toccare i DNS su Aruba senza seguire la procedura di go-live: un errore lì rende il sito irraggiungibile.
5. Mai inserire password o dati personali nei file del sito: il repository è pubblico.
