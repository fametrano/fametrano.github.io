# ametrano.net

Sito personale di Ferdinando Ametrano, costruito con [Hugo](https://gohugo.io) (extended, 0.168.0). Inglese alla radice, italiano sotto `/it/`. English: [README.md](README.md).

Niente Node, niente Tailwind, niente JavaScript di terze parti, niente web font. CSS e JS passano da Hugo Pipes; le immagini sono ridimensionate in WebP da Hugo.

## Esecuzione in locale

```shell
hugo server
```

Build di produzione: `hugo --gc --minify` (output in `public/`).

## Aggiungere contenuti

- **Articolo:** un file in `content/writing/posts/` chiamato `AAAA-MM-GG-slug.md`, con `title`, `date`, `slug` e `url: /AAAA/MM/GG/slug/`. Aggiungere `contentLang: it` per gli articoli in italiano.
- **Evento o media:** una nuova voce in cima a `data/events.yaml` o `data/media.yaml` (`date`, `year`, `title`, `details`).
- **Pubblicazione:** una voce in `data/papers.yaml`.
- **Edizione di un corso:** un file in `content/teaching/`, ad esempio `bbt202610-essec.md`. Copiare il front matter di uno esistente (`url`, `date`, `layout: course`, `course`, `courseKind`, `term`, `department`, `university`). Mantenere l'URL alla radice.
- **Storie di Bruce:** `data/bruce.yaml`, con testo in inglese e in italiano. Le vecchie pagine sono in `static/bruce/` e mantengono i loro URL.

Tutti i vecchi URL di Jekyll continuano a funzionare: gli articoli mantengono `/:anno/:mese/:giorno/:titolo/`, i corsi i loro URL alla radice, `/papers/` e `/courses/` sono alias, `/feed.xml` è il feed degli articoli, i file sono in `static/`.

## Pubblicazione

`.github/workflows/hugo.yaml` costruisce il sito sulle pull request e sui push su `master`, e pubblica su GitHub Pages solo da `master`.
**Al momento del merge la sorgente di Pages del repository va impostata su "GitHub Actions"** (Settings, Pages).

Le statistiche sono caricate solo nelle build di produzione: Metricool (`params.metricoolHash`) e Cloudflare Web Analytics (`params.cloudflareAnalyticsToken`, vuoto di default; il workflow legge il secret `CLOUDFLARE_ANALYTICS_TOKEN`).

## Da fare per il proprietario

- **Nostr:** quando l'account esiste, inserire la npub in `params.nostr` (hugo.toml; l'icona è nascosta finché è vuoto) e la mappa nome-chiave pubblica in `static/.well-known/nostr.json` (ora `{"names": {}}`).
- **PGP:** impostare `params.pgpFingerprint` con l'impronta completa (il blocco in `/contact/` è nascosto finché è vuoto). Non va indovinata.
- **Metricool imposta cookie:** decidere se aggiungere il consenso o passare a uno strumento senza cookie prima del lancio.
- **CV:** pubblicare un CV senza dati personali e collegarlo dal press kit; per ora dice "su richiesta".
- Cercare `TODO` nei sorgenti per il resto (crediti delle foto, titoli degli articoli, testo delle bio).

## Licenza

Vedi `LICENSE`: testi e materiale didattico CC BY 4.0; foto e sezione Bruce tutti i diritti riservati; codice MIT.
