# 05 — Pulizia abbonamenti: Wix e Aruba

Da fare **dopo** il go-live, quando il sito su gianlucacraca.com funziona da almeno qualche giorno.

## Wix

Oggi su Wix c'è un sito con piano **Premium** a cui è collegato il dominio (per puntamento, il dominio resta di Aruba).

1. Verificare che `gianlucacraca.com` mostri già il sito nuovo (vedi `04-go-live-dominio.md`, Fase E).
2. Wix → **Impostazioni account → Dominio** → menu del dominio → **Rimuovi da questo sito** / **Rimuovi da Wix**.
   Questo non tocca la registrazione né i DNS su Aruba: toglie solo il collegamento lato Wix.
3. Wix → **Abbonamenti Premium** → disattivare il rinnovo automatico o cancellare il piano. Controllare nella stessa pagina la data di scadenza e le condizioni di rimborso indicate da Wix.
4. Facoltativo: scaricare/salvare testi e immagini del vecchio sito prima che il piano scada.
5. Se su Wix ci sono servizi collegati (email aziendale Google Workspace acquistata tramite Wix, app a pagamento), verificarli prima di cancellare.

## Aruba

Oggi il dominio è in un pacchetto che include **hosting Linux** (spazio web, FTP, probabilmente caselle email). Il sito ora sta su GitHub Pages, quindi serve solo: **registrazione del dominio + gestione DNS**.

### Prima di cambiare: controlli
1. **Posta**: nell'area clienti Aruba controllare se esistono caselle email `@gianlucacraca.com` usate da Gian. Se sì, servirà un servizio che includa la posta (Aruba ha pacchetti "dominio + email" economici). Se no, basta il solo dominio.
2. **Spazio web**: verificare che non ci sia nulla da conservare (con il sito su Wix, probabilmente è vuoto).
3. Annotare la **data di scadenza** del servizio attuale: il cambio conviene farlo al rinnovo.

### Il cambio
Nell'area clienti Aruba, sul dominio `gianlucacraca.com`, cercare l'opzione per **modificare/cambiare il servizio** o scegliere un servizio diverso **al rinnovo**. Se non è chiara, aprire una richiesta all'assistenza Aruba con questo testo:

> Buongiorno, per il dominio gianlucacraca.com vorrei mantenere solo la registrazione del dominio e la gestione DNS dal vostro pannello, senza il servizio di hosting Linux, che non utilizzo. [Se serve la posta: "mantenendo le caselle email esistenti".] Potete indicarmi la procedura e il costo annuo del nuovo servizio? Il sito è ospitato altrove tramite record A e CNAME che devono restare invariati.

### Dopo il cambio: verifica DNS (importante)
Un cambio di servizio può reimpostare la zona DNS. Subito dopo:
- aprire **Gestione DNS** e controllare che i 4 record A di GitHub e il CNAME `www` siano ancora presenti;
- se mancano, reinserirli come in `04-go-live-dominio.md`, Fase C.

### Alternativa (più avanti)
Trasferire il dominio a un altro registrar più economico. Non è necessario e richiede attenzione (codice di trasferimento, 60 giorni di blocco dopo modifiche, gestione DNS sul nuovo registrar). Valutarlo solo se il costo Aruba del solo dominio non conviene.
