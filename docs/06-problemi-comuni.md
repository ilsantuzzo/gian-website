# 06 — Problemi comuni

| Problema | Causa probabile | Soluzione |
|---|---|---|
| GitHub Desktop: "Push rejected" / "newer commits on remote" | Qualcun altro ha pubblicato nel frattempo | **Pull origin**, poi di nuovo **Push origin** |
| GitHub Desktop parla di "conflict" | Due persone hanno cambiato le stesse righe | Non forzare nulla. Chiedere a Claude di risolvere il conflitto nel file indicato (cerca i segni `<<<<<<<` `=======` `>>>>>>>`), oppure sentire Luca |
| Il sito online non cambia dopo il push | Pubblicazione in corso o cache del browser | Aspettare 2 minuti, controllare la scheda **Actions** su GitHub, ricaricare con Cmd+Shift+R (Mac) / Ctrl+F5 (Windows) |
| Actions con pallino rosso | Errore di pubblicazione | Aprire l'errore e copiarlo a Claude. Spesso basta rifare un push. Se riguarda Jekyll, controllare `_config.yml` |
| Un'immagine non si vede | Nome file diverso da quello scritto nella pagina (maiuscole, spazi, estensione) | Chiedere a Claude di controllare nomi e percorsi. Online maiuscole e minuscole contano: `Foto.JPG` ≠ `foto.jpg` |
| Un'immagine si vede in locale ma non online | File non incluso nel commit | In GitHub Desktop verificare che l'immagine sia spuntata nei file da committare |
| Il sito su github.io si vede senza stile | Percorsi assoluti (con `/` iniziale) nelle pagine | Usare percorsi relativi (`assets/...`), come nelle pagine esistenti |
| Dopo il go-live: "DNS check unsuccessful" | Propagazione non finita o record sbagliati su Aruba | Aspettare fino a 24 ore; ricontrollare i record con `04-go-live-dominio.md` |
| Dopo il go-live: il sito non è sicuro (niente lucchetto) | Certificato non ancora emesso | Aspettare; poi spuntare **Enforce HTTPS**. Se resta grigio, rimuovere e reinserire il dominio in Settings → Pages |
| Il sito mostra ancora Wix | Record vecchi ancora attivi o cache | Verificare su dnschecker.org; controllare che su Aruba non siano rimasti record A verso `185.230.63.x` |
| Ho rotto qualcosa | — | GitHub Desktop → **History** → tasto destro sul commit sbagliato → **Revert changes in commit** → Push. Nulla va perso |
