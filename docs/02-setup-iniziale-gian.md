# 02 — Setup iniziale (Gian)

Si fa una volta sola. Tempo: 20–30 minuti. Serve un computer (Mac o Windows) e l'indirizzo email che usa abitualmente.

## Passo 1 — Account GitHub
1. Andare su **github.com** → **Sign up**.
2. Usare l'indirizzo email che usa abitualmente, scegliere un nome utente (es. `gianlucacraca`) e una password.
3. Confermare l'email con il codice che arriva.
4. Consigliato: attivare l'autenticazione a due fattori (Settings → Password and authentication). GitHub di solito la richiede comunque entro qualche settimana.
5. Comunicare a Luca il nome utente scelto.

## Passo 2 — Accettare l'invito
1. Arriva un'email da GitHub: "invited you to join…" oppure "invited you to collaborate…".
2. Cliccare **Accept invitation** (o **Join**).
3. Verifica: andando su github.com si vede il repository `gian-website` nella colonna a sinistra.

## Passo 3 — Installare GitHub Desktop
GitHub Desktop è un programma con pulsanti al posto dei comandi da terminale.
1. Scaricarlo da **desktop.github.com** e installarlo.
2. Aprirlo → **Sign in to GitHub.com** → accedere con l'account del Passo 1.
3. Alla richiesta "Configure Git" lasciare nome ed email proposti → **Finish**.

## Passo 4 — Scaricare il sito sul computer ("clonare")
1. In GitHub Desktop: **File → Clone repository**.
2. Scheda **GitHub.com** → selezionare `gian-website`.
3. *Local path*: lasciare quello proposto (es. `Documenti/GitHub/gian-website`) e annotarlo.
4. **Clone**.

Ora sul computer c'è la cartella `gian-website` con tutti i file. Per vedere il sito: aprire la cartella e fare doppio clic su `index.html`: si apre nel browser.

## Passo 5 — Collegare Claude alla cartella
Per far lavorare Claude direttamente sui file:
- Usare l'**app desktop di Claude** e dare a Claude accesso alla cartella `gian-website` (Claude chiederà il permesso la prima volta).
- Lavorare dentro il progetto Claude "Sito Gianluca Craca", che contiene queste istruzioni.

Se l'accesso alla cartella non è disponibile, Claude può comunque scrivere il testo o il codice da cambiare: lo si copia nel file con un editor di testo (consigliato **Visual Studio Code**, gratuito: code.visualstudio.com, File → Open Folder → `gian-website`).

## Passo 6 — Prova generale (una modifica innocua)
1. In GitHub Desktop: **Fetch origin** (in alto). Se compare **Pull origin**, cliccarlo.
2. Chiedere a Claude di cambiare una cosa piccola e reversibile (es. aggiungere un punto in un commento del file `README.md`).
3. Tornare su GitHub Desktop: a sinistra compare il file modificato, a destra le differenze (rosso = tolto, verde = aggiunto).
4. In basso a sinistra, campo **Summary**: `Prova di Gian` → **Commit to main**.
5. In alto: **Push origin**.
6. Su github.com, nel repository, si vede la modifica con la frase scritta. Fatto: il collegamento funziona.

## Checklist
- [ ] Account GitHub creato e invito accettato
- [ ] GitHub Desktop installato e collegato
- [ ] Repository clonato sul computer
- [ ] Claude ha accesso alla cartella (o editor pronto)
- [ ] Prova di commit + push riuscita
