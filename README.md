# Wenhao Kho — personal site

A static, single-page portfolio in the **digital-notebook** style: ruled cream paper, a red
margin rule, handwriting display type, washi-taped polaroids, pinned sticky notes, and a dashed
build-log timeline. Every card sits at its own slight rotation and straightens on hover.

No framework, no build step. Open `wenhao.html` in a browser and it runs.

```
wenhao.html     the page (built to index.html) + a few lines of reveal JS
styles.css      tokens, primitives, sections, responsive, motion
assets/         placeholder art (see "Swapping in real images")
scripts/        screenshot.mjs — visual QA harness
claude.md       the design blueprint this build was reconciled against
```

## Editing the content

All copy lives in `wenhao.html` as plain markup — there is no CMS or data file. The sections
appear in page order and are commented:

| Section | Anchor | What's in it |
| --- | --- | --- |
| Masthead | `#masthead` | name, role line, nav, "currently building" badge |
| Hero | `#hero` | headline, bio, photo, Current Focus, 2026 goal |
| Projects | `#projects` | four project cards |
| Build Log | `#buildlog` | three timeline entries |
| Notes | `#notes` | eight sticky notes across three explicit columns |
| About | `#about` | bio prose + By The Numbers |
| Contact | `#contact` | four contact cards, footer |

## Swapping in real images

The `assets/` files are hand-written SVG placeholders. Replace them with real files and nothing
about the layout changes — just keep the aspect ratios close and update the `src` extension in
`wenhao.html`.

| File | Used by | Rendered as | Source ratio |
| --- | --- | --- | --- |
| `photo-desk.svg` | hero polaroid | 6:5, `cover` | 4:3 |
| `photo-workspace.svg` | notes polaroid | 6:5, `cover` | 7:5 |
| `shot-gank.svg` | Gank card | 2.15:1, `cover`, top-anchored | 8:5 |
| `shot-kyzen.svg` | Kyzen card | ” | 8:5 |
| `shot-finance.svg` | AI Finance Monitor card | ” | 8:5 |
| `shot-shipcli.svg` | Ship CLI card | ” | 8:5 |

Project thumbnails are cropped to a wide banner anchored to the **top**, so put the meaningful
part of a screenshot (window chrome, header, hero) in its upper portion.

## Design tokens

Everything visual is a custom property at the top of `styles.css` — palette, type, rule spacing,
container width, elevation. Change a token, not a rule. The three type roles are:

- `--font-display` **Caveat** — logo, headings, note titles, stat numbers
- `--font-body` **Inter** — paragraphs and card copy
- `--font-mono` **JetBrains Mono** — eyebrows, dates, `#tags`, tech stacks, status pills

Fonts load from Google Fonts. To go fully offline, download the three families into `assets/fonts/`
and swap the `<link>` in `wenhao.html` for local `@font-face` rules; the token names don't change.

## Reusable primitives

Compose new cards from these rather than writing bespoke CSS:

`.paper` (rotatable sheet) · `.tape` (washi strip; `--left` `--right` `--blue` `--mint`) ·
`.polaroid` (frame + handwritten caption) · `.sticky` (note; `--pin` variants) · `.pill`
(status badge) · `.eyebrow` (mono label) · `.chip` (`#tag`) · `.scribble` (hand-drawn underline)

Set a per-instance angle with `style="--rot: -1.2deg"`. Add `is-liftable` to make a card
straighten and lift on hover.

## Deploying

Hosted free on GitHub Pages at **https://dariuspo.github.io/wenhao/**.

`.github/workflows/deploy.yml` rebuilds and publishes on every push to `main` — no local step
needed. It runs `node scripts/build.mjs` with no `npm install`, since the build script only uses
`node:fs` and `node:path` (Playwright is a local-only devDependency).

```bash
npm run build     # assemble dist/ locally to preview exactly what ships
git push          # deploy
```

`dist/` holds only `index.html`, `styles.css`, and `assets/` — `claude.md`, `.mcp.json`, `.qa/`,
`scripts/`, and `node_modules/` are never uploaded. The page source is `wenhao.html`; the build
copies it to `index.html` so hosts serve it as the directory default.

All paths in the page are relative, so it works unchanged under the `/wenhao/` subpath. If you
later move it to a custom domain or a root-level site, nothing needs to change.

## Visual QA

```bash
npm install      # one devDependency: playwright
npm run shot     # writes .qa/
npm run shot 2560   # just the reference-width capture
```

Drives your installed Chrome (`channel: "chrome"`) against the `file://` page — no browser
download and no dev server. Produces a full-page shot at 2560/1440/390, per-section crops at
2560, and warns on horizontal overflow.

## Known approximations

Rebuilt from a single reference screenshot, so a few things are close rather than identical:

- **Typefaces** were identified by eye from a raster. Caveat/Inter/JetBrains Mono match the
  reference's character closely but are not guaranteed to be the originals.
- **Tape, paper grain, and pushpins** are CSS/SVG constructions, not the reference's textures.
- **Images** are placeholders.

### Where the screenshot and `claude.md` disagree

The blueprint in `claude.md` was used for everything it pins down — content, structure, type
roles, rule spacing. Two places where it conflicts with the reference screenshot, the
**screenshot wins**:

- **Palette.** The blueprint tabulates paler notes (`#fff9c4`, `#fee2e2`, `#e0f2fe`, `#dcfce7`
  on `#fbf9f1`). Beside the reference these read washed out, so the tokens hold the saturated
  values sampled from the screenshot. Swapping back is nine one-line token edits.
- **Current Focus markers.** The blueprint describes these as `01/03`–`03/03`; a high-resolution
  crop of the reference clearly reads `68%`, `45%`, `22%`.

Two smaller deliberate deviations, both for accessibility:

- `--ink-faint` is `#666666`, not the blueprint's `#777777` — the lightest value in the
  blueprint's own `#555`–`#777` range that clears WCAG AA on the `#f2efe3` paper.
- The blueprint mentions a pulsing dot on the "currently building" badge; the reference has
  none, so there isn't one.

Page height lands within 0.6% of the reference (4222px vs 4196px at a 2560px viewport) and all
key text runs within 4% of the reference's measured widths.

## Accessibility

Semantic landmarks, ordered headings, a skip link, real `alt` text, visible `:focus-visible`
rings, and `prefers-reduced-motion` honoured (scroll reveals stop). All body
and label text clears WCAG AA contrast.
