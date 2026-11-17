# 04 — Go-live: collegare gianlucacraca.com a GitHub Pages

Da fare **solo quando il sito nuovo è approvato da Gian**. Tempo: 30 minuti di lavoro + attesa (da qualche minuto a 24 ore) per la propagazione DNS.

Chi lo fa: serve accesso **admin** al repository GitHub e accesso all'**area clienti Aruba** (admin.aruba.it) di Gian.

> **Dove si cambiano i DNS: su Aruba, non su Wix.** Il dominio è registrato su Aruba e Wix lo riceve "tramite puntamento". Oggi i record DNS su Aruba puntano a Wix; al go-live li facciamo puntare a GitHub Pages.

---

## Fase A — Preparare il sito (nel repository)

Chiedere a Claude:
> "Prepara il sito per il go-live: rimuovi il meta noindex da tutte le pagine, rendi assoluti gli URL og:image con https://gianlucacraca.com, crea sitemap.xml e aggiungi la riga Sitemap a robots.txt."

Controllare, fare commit (`Go-live: sito indicizzabile`) e push.

## Fase B — (Consigliata) Verificare il dominio su GitHub
Protegge il dominio da "furti" di configurazione.
1. GitHub → foto profilo → **Settings** (per un'organizzazione: Settings dell'organizzazione) → **Pages** → **Add a domain** → `gianlucacraca.com`.
2. GitHub mostra un record **TXT** (nome tipo `_github-pages-challenge-…`, valore un codice).
3. Su Aruba (vedi Fase C, punto 1–2) aggiungere quel record TXT.
4. Tornare su GitHub → **Verify**. Può servire qualche minuto.

## Fase C — Cambiare i DNS su Aruba

1. Accedere ad **admin.aruba.it** con le credenziali del dominio `gianlucacraca.com`.
2. Andare in **Gestione DNS e Name Server** → **Gestisci DNS**.
3. **Prima di toccare qualunque cosa: fare uno screenshot di tutti i record attuali.** Serve per tornare indietro se qualcosa va storto.
4. Record **A** con nome host vuoto o `@` (il dominio principale):
   - eliminare o modificare quelli che puntano a Wix (indirizzi che iniziano con `185.230.63.`);
   - devono esserci **quattro** record A con questi valori:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
5. Record **CNAME** con nome host `www`:
   - oggi punta a Wix (es. `pointing.wixdns.net` o `www…wixdns.net`);
   - cambiarlo in `NOMEACCOUNT.github.io` dove NOMEACCOUNT è il proprietario del repository (es. `gianlucacraca.github.io`). **Senza** `/gian-website` alla fine.
6. (Facoltativo) Record **AAAA** su `@` per IPv6:
   ```
   2606:50c0:8000::153
   2606:50c0:8001::153
   2606:50c0:8002::153
   2606:50c0:8003::153
   ```
7. **Non toccare** i record **MX**, **TXT** di posta (SPF/DKIM) o altri record non elencati sopra.
8. Salvare.

## Fase D — Collegare il dominio su GitHub
1. Repository `gian-website` → **Settings** → **Pages** → **Custom domain**: `gianlucacraca.com` → **Save**.
   *(GitHub aggiunge automaticamente al repository un file `CNAME`: va bene così, non cancellarlo. Ricordarsi di fare **Pull** su GitHub Desktop.)*
2. Attendere il messaggio **DNS check successful**. Se segnala errori, aspettare qualche ora: la propagazione può richiedere fino a 24 ore.
3. Quando disponibile, spuntare **Enforce HTTPS** (il certificato viene generato automaticamente da GitHub; può richiedere fino a un'ora dopo la verifica DNS).

## Fase E — Verifiche
- [ ] `https://gianlucacraca.com` apre il sito nuovo con il lucchetto
- [ ] `https://www.gianlucacraca.com` porta allo stesso sito
- [ ] `http://gianlucacraca.com` passa automaticamente a https
- [ ] Tutte le pagine, le immagini e la lightbox funzionano
- [ ] dnschecker.org → `gianlucacraca.com` tipo A mostra gli IP di GitHub in quasi tutto il mondo
- [ ] Se Gian usa email @gianlucacraca.com: inviare e ricevere una email di prova

## Se qualcosa va storto (rollback)
Rimettere su Aruba i record dello screenshot fatto al punto C.3: entro poco il dominio torna a mostrare il sito Wix. **Per questo il piano Wix va disdetto solo dopo che il go-live è stabile** (vedi `05-abbonamenti-wix-aruba.md`).

## Dopo il go-live
- Google Search Console (facoltativo, consigliato): aggiungere la proprietà `gianlucacraca.com`, verificarla con un record TXT su Aruba, inviare `sitemap.xml`.
- Modulo contatti: già collegato a Web3Forms (i messaggi arrivano direttamente nella casella di Gianluca). Dopo il passaggio al dominio fare un invio di prova dal sito online.
