# Sun and Sound Festival — Landing Site

Marketing landing page for **Sun and Sound Festival** (Toronto · Cabana Pool Bar · July 24, 2026). React + Vite single-page app, deployed to Firebase Hosting at https://sunandsound-5b97e.web.app.

The site exists to (a) tell people when and where the festival is, (b) push them to the Laylo sign-up to grab the ticket drop, and (c) showcase the current lineup posters.

---

## Tech stack

| Layer        | Choice                                                                 |
| ------------ | ---------------------------------------------------------------------- |
| Build        | Vite 6 (React + TypeScript)                                            |
| UI           | React 19, Tailwind CSS v4 (via `@tailwindcss/vite`)                    |
| Icons        | `lucide-react`                                                         |
| Display font | Anton (Google Fonts) — heavy condensed sans for the festival headlines |
| Body font    | DM Sans                                                                |
| Hosting      | Firebase Hosting (project `sunandsound-5b97e`)                         |
| Sign-up      | Laylo — `https://laylo.com/sunandsound/sssf`                           |

There is no backend: form submissions go straight to Laylo via an external link.

---

## Quick start

```bash
npm install
npm run dev        # Vite dev server on http://localhost:5173
```

### Scripts

| Command          | What it does                                                         |
| ---------------- | -------------------------------------------------------------------- |
| `npm run dev`    | Local dev server with HMR, binds to `0.0.0.0:5173`                    |
| `npm run build`  | Production build to `dist/`                                          |
| `npm run preview`| Serves the built `dist/` locally to spot-check the production bundle |
| `npm run lint`   | `tsc --noEmit` — TypeScript type-check, no emit                      |

### Environment

The included `.env.example` mentions `GEMINI_API_KEY` and `APP_URL` — both are **leftovers from the AI Studio scaffold and are not used** by the current site. You do not need a `.env` to build, run, or deploy.

---

## Project layout

```
.
├── firebase.json              # Hosting config (SPA rewrites + cache headers)
├── .firebaserc                # Default project: sunandsound-5b97e
├── index.html                 # Document shell, meta, favicons
├── public/                    # Static files copied verbatim into dist/
│   ├── favicon.ico
│   ├── favicon-32.png
│   ├── favicon-192.png
│   ├── favicon-512.png
│   └── apple-touch-icon.png
└── src/
    ├── main.tsx               # React entry point
    ├── App.tsx                # Single-file page (nav, hero, marquee, experience, footer)
    ├── index.css              # Tailwind directives + theme tokens + keyframes
    ├── vite-env.d.ts
    └── assets/images/
        ├── sun-sound-logo.png         # Transparent yellow wordmark — header + favicon
        ├── sun-sound-poster.png       # NO11 headliner poster (the original)
        └── sun-sound-poster-2.png     # Jazzwrld & Thukuthela poster
```

`App.tsx` is intentionally one file. The page is short; one file is easier to hand off than a forest of components. The only sub-components inside are `LineupDeck` (the tap-to-shuffle poster deck), `TorontoSkyline` ❲removed, see history❳, and `MarqueeStrip`.

---

## How to update the things people will actually want to change

### 1. Lineup posters

Drop any new poster into `src/assets/images/` named **`sun-sound-poster-N.png`** (e.g. `sun-sound-poster-3.png`, `-4.png`, …). The hero deck picks them up automatically via `import.meta.glob('./assets/images/sun-sound-poster-*.png', { eager: true })` and adds them as additional cards in the shuffle stack. Filenames sort lexicographically, so `-2.png` lands in front of `-3.png` and so on behind the headliner (`sun-sound-poster.png`).

**Recommended size:** 3:4 aspect ratio (e.g. 1080×1440). Keep file size under ~250 KB if possible — see "Asset optimization" below.

### 2. Date, venue, address

Three places to update if the date or venue changes:

| Where                                                      | What                          |
| ---------------------------------------------------------- | ----------------------------- |
| `src/App.tsx` → `MARQUEE_ITEMS`                            | The scrolling ticker strings  |
| `src/App.tsx` → hero copy `<p>…Cabana Pool Bar…</p>`       | Address block in the hero     |
| `src/App.tsx` → Experience cards `Cabana Pool Bar` + `July 24, 2026` | Two info cards below the hero |
| `src/App.tsx` → header tagline `Toronto · Jul 24 '26`      | Wordmark tagline              |
| `index.html` → `<title>` + `<meta name="description">` + OG meta | SEO / link previews     |

### 3. Sign-up URL (Laylo)

Edit the `SIGNUP_URL` constant at the top of `src/App.tsx`. Both the header CTA and the in-hero "Sign Up Now" card use it.

### 4. Social links

The Instagram + TikTok icons in the footer point at placeholder anchors (`#instagram`, `#tiktok`). Replace those `href`s with real URLs when you have them. The official Instagram handle the page links to is `@sunandsound.ca` (no embed — see "Why no Instagram feed embed" below).

### 5. Festival name / wordmark

Change the `FESTIVAL_NAME` constant for alt text, marquee items, and footer copyright. The visible big wordmark in the header and footer is hard-coded as `Sun & Sound` for styling reasons (split colored spans), so update those too if the brand name changes.

### 6. Favicon / app icon

Regenerate with the bundled script if you change the logo:

```bash
python "C:\Users\SLIM BEAUTY\AppData\Local\Temp\opencode\make_favicons.py"
```

(Or copy that script anywhere and run it — it reads `src/assets/images/sun-sound-logo.png` and writes the five files in `public/`.)

---

## Deployment

The site is hosted on Firebase Hosting under project **`sunandsound-5b97e`**.

### One-off setup (only needed on a fresh machine)

```bash
npm install -g firebase-tools
firebase login
```

### Deploy

```bash
npm run build
firebase deploy --only hosting
```

`firebase.json` is configured for an SPA: every path rewrites to `/index.html`, hashed assets get a 1-year immutable `Cache-Control`, and `index.html` is `no-cache` so updates land instantly.

The default project is already pinned in `.firebaserc`, so `--project` is optional.

### Live URLs

- **Production:** https://sunandsound-5b97e.web.app
- **Firebase Console:** https://console.firebase.google.com/project/sunandsound-5b97e/overview

### Custom domain

To put `sunandsound.ca` in front of it: Firebase Console → Hosting → Add custom domain. Add the verification TXT record + the two A records Firebase gives you to your DNS provider; SSL provisions automatically in a few minutes.

---

## Asset optimization

Posters dropped in raw can balloon the page weight. Quick wins:

- **PNGs:** Run them through https://tinypng.com or `pngquant` — typically 5–10× smaller with no visible loss.
- **JPEG/WebP:** For photographic posters, WebP at quality 80–85 is the best trade-off.
- **Target:** Hero posters should sit under ~250 KB each. The site is otherwise lean enough that posters dominate page weight.

Vite handles cache-busting via content-hashed filenames automatically — no manual versioning needed.

---

## Why no Instagram feed embed

Instagram does **not** allow `<iframe>` embeds of profile feeds (`X-Frame-Options: SAMEORIGIN`), and the official embed widget only works for individual post URLs. To add a live feed, pick one of:

- **LightWidget** (https://lightwidget.com) — free tier, generates an iframe URL from a handle. Easiest option.
- **Behold.so** — same idea, slicker output.
- **Instagram Graph API** — requires a Facebook Business account, app, and an access token. Most work.

Drop whichever embed URL/script into a new section in `App.tsx` and you're done.

---

## Credits

Built by Anomaly / OpenCode. **Designed by [Floats](https://www.floatsanywhere.com).**
