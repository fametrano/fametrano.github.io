# ametrano.net

Personal site of Ferdinando Ametrano, built with [Hugo](https://gohugo.io) (extended, 0.168.0). English at the root, Italian under `/it/`. Italiano: [README.it.md](README.it.md).

No Node, no Tailwind, no third-party JavaScript, no web fonts. CSS and JS are processed by Hugo Pipes; images are resized to WebP by Hugo.

## Run locally

```shell
hugo server
```

Production build: `hugo --gc --minify` (output in `public/`).

## Add content

- **Post:** a file in `content/writing/posts/` named `YYYY-MM-DD-slug.md`, with `title`, `date`, `slug` and `url: /YYYY/MM/DD/slug/`. Add `contentLang: it` for Italian posts.
- **Event or media item:** a new entry at the top of `data/events.yaml` or `data/media.yaml` (`date`, `year`, `title`, `details`).
- **Paper:** an entry in `data/papers.yaml`.
- **Course edition:** a file in `content/teaching/` such as `bbt202610-essec.md`. Copy the front matter of an existing one (`url`, `date`, `layout: course`, `course`, `courseKind`, `term`, `department`, `university`). Keep the root URL.
- **Bruce stories:** `data/bruce.yaml`, with English and Italian text. The old pages live in `static/bruce/` and keep their URLs.

Old Jekyll URLs all still resolve: posts keep `/:year/:month/:day/:title/`, courses keep their root URLs, `/papers/` and `/courses/` are aliases, `/feed.xml` is a feed of the posts, files are under `static/`.

## Deploy

`.github/workflows/hugo.yaml` builds on pull requests and on pushes to `main`, and deploys to GitHub Pages only from `main`.
**At merge time the repository's Pages source must be switched to "GitHub Actions"** (Settings, Pages).

Analytics load in production builds only: Metricool (`params.metricoolHash`) and Cloudflare Web Analytics (`params.cloudflareAnalyticsToken`, empty by default; the workflow reads the `CLOUDFLARE_ANALYTICS_TOKEN` secret).

## TODO for the owner

- **Nostr:** when the account exists, put the npub in `params.nostr` (hugo.toml; the icon is hidden while empty) and the name-to-pubkey map in `static/.well-known/nostr.json` (now `{"names": {}}`).
- **PGP:** set `params.pgpFingerprint` to the full fingerprint (the block on `/contact/` is hidden while empty). Do not guess it.
- Search the source for `TODO` for the rest (photo credits, article titles, bio wording).

## Commits

One line in the imperative that says what changes, e.g. "Add the 2026 ESSEC course" or "Fix the Il Foglio link". Not "updated" or "fixed". Commits to `main` must be signed.

## Licence

See `LICENSE`: text and teaching material CC BY 4.0; photos © Ferdinando Ametrano unless otherwise credited, the Bruce section all rights reserved; code MIT.
