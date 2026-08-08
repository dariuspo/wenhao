# Target Replication Blueprint: Digital Notebook Portfolio

## Design System & Aesthetic Archetype
- Style: Digital Notebook / Lined Legal Pad / Hand-drawn Tech Journal
- Key Visual Features:
  - Background paper texture with faint horizontal lines and a left red margin rule.
  - Cards formatted as taped sticky notes, index cards, polaroids, and paper-clipped elements.
  - Subtle random rotations on cards (`transform: rotate(-1deg)` and `transform: rotate(1deg)`).
  - Sketched icons, hand-drawn underline accents, and handwritten annotations.

## Color Palette
| Element | Hex / CSS Value | Description |
| :--- | :--- | :--- |
| Canvas Background | `#FBF9F1` / `#F7F5EC` | Off-white warm paper tone |
| Margin Line | `rgba(239, 68, 68, 0.25)` | Light red vertical notebook rule (left edge) |
| Ruling Lines | `rgba(200, 200, 200, 0.25)` | Light horizontal rules every 28px |
| Primary Ink | `#1A1A1A` | Main text & headers |
| Secondary Text | `#555555` / `#777777` | Captions & tags |
| Yellow Sticky Card | `#FFF9C4` | Notes & highlights |
| Pink Sticky Card | `#FEE2E2` | Warning/janitor notes |
| Green Sticky Card | `#DCFCE7` | Revenue / live badges |
| Blue Sticky Card | `#E0F2FE` | Engineering / AI notes |
| Card Base (White) | `#FFFFFF` | Project cards & main containers |

## Typography
- Hand-written / Script Font: `Caveat` or `Kalam` (Google Fonts) for annotations, tags, quotes, numbers emphasis, and section headers.
- Main Body Font: `Inter` or `Plus Jakarta Sans` for main content readability.
- Monospace Font: `JetBrains Mono` for metadata, tags (`#hashtags`), section index indicators (`// 01`), and tech stacks.

## Core Layout Sections & Complete Exact Content

### 1. Header & Navigation
- Top Title: `Wenhao Kho` (Handwritten font, bold)
- Subtitle: `Software Engineer · CTO · Builder`
- Navigation Bar (Pill container): `Projects`, `Build Log`, `Notes`, `About`
- Status Badge (Top Right): `CURRENTLY BUILDING` (Green pulsing indicator dot)

### 2. Hero Section
- Left Block:
  - Small header: `hi, I'm —`
  - Main Title: `Building things that ship.`
  - Bio: `I'm a software engineer and CTO who likes turning messy ideas into working products. Currently bootstrapping a few SaaS bets, writing code most days, and shipping small & often.`
  - Location Pill: `📍 Batam, Indonesia`
- Middle Photo Card:
  - Photo in polaroid frame attached with an SVG paperclip image/icon.
  - Handwritten caption on photo bottom: `build · ship · repeat`
  - Handwritten arrow pointing from title to photo.
  - Bottom caption: `↻ keep going, founder.`
- Right Card ("Current Focus"):
  - Header: `Current Focus`
  - Code comment line: `// what I'm building right now`
  - Items:
    1. `Gank` (01/03, Yellow highlight tag): "Community + tooling platform for indie game devs. Onboarding flow & payments this sprint."
    2. `Kyzen Stay PMS` (02/03, Pink highlight tag): "Property-management system for boutique stays. Booking engine + channel sync in progress."
    3. `AI Finance Monitor` (03/03, Blue highlight tag): "Agent that watches cashflow & flags anomalies. Prototyping the ingestion pipeline."
  - Progress Box: `2026 GOAL / SHIP 100` with progress bar `16 / 100 - 16%`

### 3. Section 01: Projects (`// 01 Projects`)
Header: `// 01 Projects` (with a hand-drawn stroke underline)
Grid of 4 Cards:
- Card 1:
  - Title: `Gank` (Sub-tag: `platform` `saas`)
  - Description: `A home base for Indie game devs — community, asset marketplace, and build tooling in one place.`
  - Stack: `Next` `Postgres` `Stripe`
  - Badge: `• LIVE`
- Card 2:
  - Title: `Kyzen Stay PMS` (Sub-tag: `property mgmt`)
  - Description: `Run boutique stays end-to-end: bookings, channel sync, housekeeping, and owner reports.`
  - Stack: `Remix` `Prisma` `Redis`
  - Badge: `• BETA`
- Card 3:
  - Title: `AI Finance Monitor` (Sub-tag: `ai agent`)
  - Description: `An always-on agent that reads your books, spots anomalies, and pings you before they hurt.`
  - Stack: `Python` `LangGraph` `DuckDB`
  - Badge: `• MVP`
- Card 4:
  - Title: `Ship CLI` (Sub-tag: `devtool` `cli`)
  - Description: `One command to go from commit to production. Zero-config previews and rollbacks built in.`
  - Stack: `Go` `Docker` `Fly`
  - Badge: `• LIVE`

### 4. Section 02: Build Log (`// 02 Build Log`)
Vertical timeline connected by dots and dashed lines:
- Entry 1:
  - Date: `MAY 28, 2026`
  - Title: `Kyzen channel sync prototype`
  - Text: `Hooked up the first OTA channel. Double-booking bug found & squashed before it reached a real guest.`
  - Tags: `#kyzen #integrations`
- Entry 2:
  - Date: `MAY 19, 2026`
  - Title: `Finance Monitor — ingestion pipeline`
  - Text: `Got the agent reading CSV + Plaid feeds into DuckDB. Anomaly scoring is naive but it flagged a duplicate vendor.`
  - Tags: `#ai #data #pip`
- Entry 3:
  - Date: `MAY 12, 2026`
  - Title: `Crossed $6K MRR`
  - Text: `Slow and steady. Gank + Ship CLI subscriptions are carrying it. Goal is still $10K by year end.`
  - Tags: `#revenue #bootstrapping`

### 5. Section 03: Notes & Insights (`// 03 Notes & Insights`)
Header subtext: `// scraps from the build -- things I keep relearning`
Masonry / Grid of sticky notes with pushpins / top tape elements:
- Sticky 1 (Yellow): `"Make something people want, then make it easy to pay for."` (Caption: `— stuck on my monitor since 2023`)
- Card 2 (Photo): Photo of desk setup with caption `where the magic (mostly) happens`
- Sticky 3 (Green): `Charge from day one` — "Free users give feedback; paying users give truth. Price early, even if it stings." (Tag: `#saas`, Date: `MAY 15`)
- Sticky 4 (White): `Ship before you're ready` — "The product teaches you what to build. Real users beat a perfect roadmap every time." (Tag: `#product`, Date: `JUN 02`)
- Sticky 5 (Blue): `Boring tech, exciting product` — "Postgres + a monolith got me further than any fancy stack. Save novelty for the parts users actually feel." (Tag: `#engineering`, Date: `MAY 24`)
- Sticky 6 (White): `Write the changelog daily` — "A tiny daily log compounds. Future-me always thanks past-me for the breadcrumbs." (Tag: `#habits`, Date: `APR 27`)
- Sticky 7 (Pink): `The CTO is also the janitor` — "At a small company, leadership is mostly removing the rocks blocking everyone else's path." (Tag: `#leadership`, Date: `MAY 08`)
- Sticky 8 (Yellow): `Done beats perfect` — "Momentum is a feature. A shipped B+ teaches you more than an unshipped A+ ever will." (Tag: `#mindset`, Date: `APR 14`)

### 6. Section 04: About (`// 04 About`)
- Left Box (About Me):
  - Heading: `About Me`
  - Content:
    - `I've spent ~10 years going from a curious kid pulling apart WordPress themes to leading engineering teams as a CTO.`
    - `These days I'm happiest in the in-between: close enough to the code to ship a feature, far enough back to set the direction. I build in public, bootstrap when I can, and care a lot about momentum.`
    - `When I'm not shipping, you'll find me chasing good coffee, bad startup ideas, and longer hikes than my calves agree with.`
- Right Box (By The Numbers - Taped Card):
  - Heading: `By The Numbers`
  - Grid:
    - `10+` YEARS BUILDING
    - `16` PRODUCTS SHIPPED
    - `$6.2K` CURRENT MRR
    - `40+` DOMAINS BOARDED
    - `2.4K` COMMITS THIS YEAR
    - `9K+` BUGS SQUASHED

### 7. Footer
- Call to Action: `Let's build something →` (Handwritten style)
- 4 Card Buttons:
  - WhatsApp: `+62 821 2100 2288`
  - Email: `wenhaokho@gmail.com`
  - LinkedIn: `/in/wenhaokho`
  - GitHub: `@wenhaokho`
- Bottom Links: `Internal Tools` | `Privacy`
- Bottom Tagline: `Made with ❤️ to build and ship · © 2026 Wenhao Kho`

## CSS Background Implementation Pattern
```css
.notebook-bg {
  background-color: #fbf9f1;
  background-image: 
    linear-gradient(90deg, transparent 79px, rgba(239, 68, 68, 0.2) 79px, rgba(239, 68, 68, 0.2) 81px, transparent 81px),
    linear-gradient(rgba(200, 200, 200, 0.25) 1px, transparent 1px);
  background-size: 100% 100%, 100% 28px;
}