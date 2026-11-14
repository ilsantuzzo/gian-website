# 03 — Lavoro quotidiano sul sito

## Il ciclo, ogni volta

1. **Aggiornare** — GitHub Desktop → **Fetch origin** → se compare, **Pull origin**.
   *(Così si parte dall'ultima versione, compresi i cambiamenti fatti da Luca.)*
2. **Modificare** — chiedere a Claude la modifica (vedi esempi sotto).
3. **Controllare in locale** — doppio clic su `index.html` (o ricaricare la pagina del browser già aperta) e verificare.
4. **Salvare e pubblicare** — GitHub Desktop: controllare i file cambiati → Summary con una frase chiara (es. `Aggiunta opera Morphē 8`) → **Commit to main** → **Push origin**.
5. **Verificare online** — dopo 1–2 minuti aprire il sito pubblicato. Su github.com, scheda **Actions**, un pallino verde indica pubblicazione riuscita; giallo = in corso; rosso = vedere `06-problemi-comuni.md`.

## Operazioni tipiche

### Aggiungere un'opera a una serie
Preparare l'immagine:
- formato JPG, lato lungo 1600 px circa (non serve di più), sfondo come le altre foto;
- nome file **senza spazi né accenti**, minuscolo, con trattini: `morphe-08.jpg`.

Copiarla in `assets/img/` e chiedere a Claude, ad esempio:
> "Ho messo `morphe-08.jpg` in assets/img. Aggiungila in fondo alla pagina Morphē. Crea anche la versione AVIF, imposta larghezza e altezza giuste e scrivi un testo alternativo descrittivo. Didascalia: *Senza titolo, 2026 — pigmento su carta, 100 × 120 cm*."

### Cambiare l'ordine delle opere
> "Nella pagina Morphē sposta l'opera morphe-05 al primo posto."

### Aggiungere o modificare didascalie
> "Nella pagina Holon cambia la didascalia della prima opera in: *Geografia, 2025 — tecnica mista su tela, 300 × 280 cm*."

### Creare una nuova serie
> "Crea una nuova pagina per la serie *Nome*, uguale a Holon, con le immagini nome-01.jpg … nome-04.jpg, e aggiungi la voce al menu di tutte le pagine dopo Holon."

### Cambiare testi
> "Nella pagina Bio sostituisci il secondo paragrafo con: …"

## Regole per non fare danni
- Una modifica alla volta, un commit per ogni modifica significativa: se qualcosa va storto si torna indietro facilmente.
- Prima di pubblicare, guardare sempre la pagina in locale.
- Se in GitHub Desktop compaiono file che non si pensava di aver toccato, **non fare commit**: chiedere a Claude o a Luca.
- Per annullare una modifica non ancora salvata: GitHub Desktop → tasto destro sul file → **Discard changes**.
- Per annullare una modifica già pubblicata: scheda **History** → tasto destro sul commit → **Revert changes in commit** → Push.

## Foto: consigli
- Esportare da Lightroom/Photoshop in JPG qualità 80–85, profilo colore sRGB.
- Inquadrature e sfondi coerenti con le altre opere della stessa serie.
- Peso ideale: sotto i 400 KB per immagine (Claude crea comunque la versione AVIF più leggera).
