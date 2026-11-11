# JuicySuite Design System

A warm, gradient-anchored design language for **JuicySuite** — a card-centric SaaS for loyalty programs, member CRM and earning campaigns, plus its marketing and email (EDM) surfaces. Identified by the **Sunset** gradient (50°), heavy Montserrat 800 titles, warm plum-gray text, white cards on a cool #FAFAFA canvas, and organic **Stone** silhouettes in marketing.

## Sources
Built from the uploaded zip **"JuicySuite Design System v2.0 – 26May2026"** (`uploads/JuicySuite Design System v2.0 - 26May2026/`), which itself was distilled from `juicysuite-design-md/design.md` and `design-system.html` (not included). Used from it: `colors_and_type.css`, `GRADIENT_GUIDELINES.md` (latest gradient rules — take precedence), `README.md`, `ui_kits/saas-app/*.jsx`, `ui_kits/marketing/*.jsx`, `preview/*.html`, the three wordmark SVGs, Montserrat TTFs, the daily-report EDM HTML, and gradient reference screenshots (copied to `assets/reference/`).

## Surfaces
- **SaaS App (operator console)** — Dashboard · Members · Earning (campaigns). Sunset only on sidebar + primary CTA.
- **Marketing** — ads, posters, hero shots, tier cards; smooth organic Blob shapes on the 2026 marketing gradient fields (Blush, Meadow, Corner) and the 50 / 35 / 15 colour sets.
- **EDM & documents** — daily report email plus quotations, proposals and documentation; cream surfaces, 135°/90° pill gradients, text wordmark.

## Index
```
styles.css            ← entry point (@imports only) — link this
tokens/               fonts · colors · typography · spacing · effects · base (semantic .t-* classes)
fonts/                Montserrat 100–900 + italics (local TTF)
assets/               juicysuite-wordmark-{orange,white,black}.svg · reference/ gradient screenshots
guidelines/           foundation specimen cards (Type, Colors, Spacing, Brand)
components/
  core/               Icon · Button · IconButton · TextLink · Badge · Trend · Avatar · Wordmark
  forms/              Toggle · Input · SearchInput · PillTabs · SegmentedPills
  navigation/         Sidebar · TopHeader
  data/               Card (+CardHeader) · KPICard · MemberRow · CampaignCard · PromoBanner
  charts/             MiniChart · BarChart · Donut (+DonutLegend)
  shapes/             Blob · GradientDefs · Marble · DropTall · DropShort · Ellipse · StoneRound · StoneTilt · StoneWide · StoneBloom
  edm/                PillStatRow · SplitBar · PillComposition
ui_kits/
  saas-app/           interactive console — index.html, Dashboard/Members/Earning/Placeholder.jsx
  marketing/          composition gallery — index.html, Compositions.jsx
  edm/                daily report email (source HTML)
templates/
  deck/               Deck.dc.html — 12-slide 16:9 layout template, one slide per Composition Balance arrangement
  report/             Report.dc.html — printable monthly performance report
  proposal/           Proposal.dc.html — printable proposal / quotation
  social-media-post/  SocialMediaPost.dc.html — Social Media Post Template: 8 formats × 8 templates (64 posts) at exact export sizes; one file per format, overview.html for the 8 × 8 grid
SKILL.md              agent-skill entry point
thumbnail.html        homepage tile (Sunset + white wordmark)
uploads/              original v2.0 source zip contents + daily-report EDM HTML
```

## Intentional additions
- **Wordmark** — wraps the provided SVGs (embedded as data URIs so it works from any path) plus the EDM text mode.
- **CardHeader, SegmentedPills, DonutLegend** — factored out of repeated inline markup in the source screens.
- **PillStatRow, SplitBar, PillComposition** — lifted from the EDM HTML so previews can reuse them.
- **Blob** — CSS silhouettes traced by eye from the 2026 poster references.

## Social Media Post Template
`templates/social-media-post/` — 64 starting posts: 8 formats × 8 templates. Built only from existing tokens, fields, pairings, Blob / Marble / Drop / Ellipse paths (copied from `components/shapes/` into `shapes.js`) and the three wordmark SVGs.

| # | Format | Size | File |
|---|---|---|---|
| 01 | Square announcement | 1080 × 1080 | `01-square-announcement.html` |
| 02 | Square product feature | 1080 × 1080 | `02-square-product-feature.html` |
| 03 | Square stat / proof point | 1080 × 1080 | `03-square-stat.html` |
| 04 | Square quote | 1080 × 1080 | `04-square-quote.html` |
| 05 | Portrait case study | 1080 × 1350 (4:5, incl. Xiaohongshu) | `05-portrait-case-study.html` |
| 06 | Story / Reels | 1080 × 1920 | `06-story-reels.html` |
| 07 | Landscape LinkedIn | 1200 × 627 | `07-landscape-linkedin.html` |
| 08 | Carousel cover | 1080 × 1080 | `08-carousel-cover.html` |

- Each format file shows its 8 templates with a how-to-adapt note; `?t=03` shows one post alone at exact pixels for export, `?sheet=1` a contact sheet, `&guides=1` the safe-area overlay.
- Safe margins: 80 px (square, portrait), 60 px (landscape); stories keep type and wordmark 250 px from the top and 340 px from the bottom.
- Swap slots per post: eyebrow, headline, supporting line or quote, optional stat, optional image (`.img` box or `<js-shape photo="…">`), CTA, wordmark (orange / white / black only).
- Text sits in one zone (one shape, one card or open field). Max two gradients in view. Shape-led and shape-free templates alternate inside every format.

## Gradient rules (from GRADIENT_GUIDELINES.md — authoritative)
- **Product gradient**: **Sunset**, 50° fixed, sidebar + primary CTA only. **Mist** and **Meadow** (50°) are **legacy promo** gradients — superseded by the Blush and Meadow fields in Marketing Gradients. Citrus, Blossom and pink pastel washes are **retired**.
- Neutral washes: Cream Wash `180deg #FFFFFF→#FFF5F0`; Orange Corner radial glow bottom-left on white.
- EDM & document exception: 135° / 90° gradients on small pill elements only (stat pills, split bars). Applies to emails, quotations, proposals and documentation.
- One gradient surface per product screen; only white display text on Sunset.
- **Marketing field & blob gradients** (from the 2026 poster references in `assets/reference/` — field-compositions, frame-break-posters, knockout-poster-a/b): `--gradient-meadow-field`, `--gradient-corner-field` (teal + orange corner glow), `--gradient-sunset-flat` (90° blob fill), `--gradient-grape` (green→violet), `--gradient-blush` (pink→teal). Marketing only.

## Art direction (2026 marketing & documents)

**Colour usage ratio — 50 / 35 / 15** (card: Brand › Colour Pairings; source `assets/reference/colour-usage-guide.png`)
One dominant colour at 50%, one support at 35–0%, one accent at 15–0%. Approved sets:
1. Green `#00CE73` · Teal `#36E4D2` · Yellow `#FFDA2C`
2. Coral `#FF5C4C` · Pink `#FFABE7` · Teal `#36E4D2`
3. Orange `#FF761A` · Pink `#FFABE7` · Mauve `#A9939A`
4. Yellow `#FFDA2C` · Purple `#904AA8` · Coral `#FF5C4C`

**Gradient pairings** (card: Colors › Gradient Pairings; source `assets/reference/gradient-contrast-suggestions.png`) — eight approved field × shape gradient contrasts: Sunset × Blush, Corner × Dusk, Meadow × Sunset, Blush × Coral, Coral field × Citrus, Butter × Sunset, Grape × Blush, Rose × Aqua. A shape gradient always contrasts its field in temperature (warm on cool, cool on warm).

**Layout patterns** — Blush knockout · Pink frame · Orange frame · Meadow field · Corner bleed (see Composition Patterns). Pick one pattern and one colour set per page.

**Colour harmony rules**
- Max two gradients in view (field + one shape fill). Small gradient accents (pebbles, bars) reuse one of the two — Sunset-flat by default.
- Orange `#FF761A` is the only accent for eyebrows, step numbers and bullets. Pink `#FFABE7` is display-only (≥88px) on Grape or white; never body text.
- Continuous gradients across sequences: a 3-phase bar is one Sunset-flat gradient split into three (`background-size:300%`, positions 0 / 50 / 100%), not three gradients.
- Data colours stay in the chart palette (orange, coral, yellow, teal); status green `#00874B` / red `#D63E30` for trends on white.

**Composition & balance** (card: Brand › Composition Balance) — ten arrangements. Shape-led: **Cairn** (Meadow field, stones on one axis), **Knockout**, **Frame break + text** (frame break is portrait / square only — in landscape pair a portrait panel with a text column), **Bleed**, **Split**, **Window** (full-frame squircle on the website glow — orange bottom-left, pink top-right on cream). Shape-free (Daily Report language — cream surfaces, pills): **Pill rows**, **Pill cluster**, **Split bars**, **Callout**. Shapes are the exception — alternate shape-led and shape-free pages.
- One mass (~55% of frame), one counterweight (~20%), one accent (~3%). Mass and text never compete for the same corner.
- Equal gutters: shape-to-shape = shape-to-edge = 48px on 1920 (2.5% of width). Frames inset 96px.
- Text margin 144px (1920) or 192px inside a knockout. Headlines left-aligned on one axis per slide; eyebrow → headline gap 22px.
- Text sits inside a single shape or on the open field opposite the mass — never across two shapes.
- All shape corners are fully smoothed (C1-continuous); no straight edges or cusps.

**Type scale (1920 × 1080)** — eyebrow 24/600/5px tracking · body 28–32/500 · headline 88–128/800/−0.035em/0.94 · hero number 200–280/800/−0.055em · chapter numeral 500/800/−0.06em.

## Marketing composition patterns
- **Gradient field** — full-bleed Meadow field, one oversized Sunset-flat bloom, white wordmark centred.
- **Corner bleed** — teal field with an orange corner glow; a huge Meadow cushion bleeds off the top-right.
- **Frame break** — white page, thick (≈3% width) pink or orange frame; a Grape or Blush blob breaks out of it. Wordmark + short body at top; oversized display type in the frame colour crosses the blob edge.
- **Knockout stack** — Blush field with stacked white knockouts (squircle over cushion, a pebble tucked right); pink display type sits in the gap; black wordmark bottom-right.
- Silhouettes: `Blob` (squircle · cushion · pebble · bloom · slab · slabTilt · sweep — smoothed SVG paths) is the primary family. Marble / Drop / Ellipse are secondary geometrics. The SVG Stones (StoneRound/Tilt/Wide/Bloom) are **legacy** — kept for existing artwork, not for new work.

## 3 · CONTENT FUNDAMENTALS

**Voice.** Confident, warm, and direct. JuicySuite addresses the operator as a peer — *"Set up your first loyalty campaign in minutes."* Never patronizing, never breathless. Marketing speaks to outcomes (more loyal members, repeat visits, higher revenue); product speaks to actions (`Add Campaign`, `New Member`, `Save`).

**Person.** Second person (`you`, `your`) in marketing and onboarding. Imperative in product CTAs. First-person plural (`we`) is reserved for support and changelog — sparingly.

**Casing.** Sentence case everywhere — for buttons (`Add Campaign`, not `ADD CAMPAIGN`), for navigation, for headings. The single exception is the ALL-CAPS caption at `10px / 600 / letter-spacing: 1px`, used for eyebrow labels above stat blocks (`LAST 30 DAYS`, `QUICK START`).

**Tone examples (real copy from the system):**
- *"Spring Birthday Bonus"* — campaign name (specific, evocative)
- *"Members earn double points on birthday week. Auto-applies based on registered DOB."* — feature description (factual, mechanical, no fluff)
- *"Currently active and performing 23% above projection."* — performance line (precise number, no hype)
- *"Watch a 2-minute tour"* — onboarding CTA (specific duration; respects time)
- *"Set up your first loyalty campaign in minutes."* — value prop (concrete, time-bounded)

**Numbers and IDs.** Numbers are everywhere — `12,438 Members`, `▲ 12%`, `142 redemptions` — and they are always *specific* (no rounded "thousands of members"). Member IDs render in JetBrains Mono (`ID: 00272400000004`) — a small ritual that signals "this is data, not marketing."

**Trend language.** `▲ 12.4%` (positive, green `#00CE73`), `▼ 2.1%` (negative, red `#FF5C4C`), `— flat` (neutral). The arrows do the work; the words do not editorialize.

**Status language.** Two-word verbs: `Activated` / `Unactivated`, `Paused` / `Active`, `VIP` / `Draft`. Never "Pending" without context, never "Status: Active" — just the badge alone.

**Emoji.** Not used in product UI. Not used in marketing copy. The brand expresses warmth through gradient and shape, not pictographs.

**Microcopy patterns:**
- Empty states are not yet defined in source; default to *"No [thing] yet. [Imperative CTA]."*
- Confirmation: never `Are you sure?` — confirm with a destructive button labelled by the action (`Remove Member`, not `OK`).
- Loading: no spinner copy; the gradient CTA shimmers softly while inflight.

---

## 4 · VISUAL FOUNDATIONS

### 4.1 Color
- **Page canvas** is the cool gray `#FAFAFA`. Never white. The gray is structural — it's the corridor between cards.
- **Cards** are pure white `#FFFFFF` with `16px` radius and `shadow-sm` (`0 2px 8px rgba(0,0,0,0.06)`). Every data cluster sits on a card.
- **Text** is `#5E555A` — a warm muted plum-gray that intentionally steps back from `#000`. Pure black is **never** used for text or fills; the black wordmark colourway is the one exception, on light marketing fields.
- **The Sunset gradient** (`linear-gradient(50deg, #FF761A 0%, #FF7D36 13%, #FFABE7 100%)`) is the brand essence. Sidebar + primary CTA only — never on content cards, chart fills, or body text. The companion gradients (Mist, Meadow) are reserved for marketing. Citrus and Blossom are retired.
- **Product UI gradients render at exactly `50°`** (Sunset on sidebar + CTA). Marketing fields and shape fills use the angles defined in Marketing Gradients (25–40°) — copy them, never improvise.

### 4.2 Type
- **Montserrat** carries the entire UI. Weights `400 / 500 / 600 / 700 / 800`. The `800` heavy is the brand fingerprint — page titles at `34px / 800`, KPI stats at `28px / 800`, never used below that scale.
- **JetBrains Mono** only for IDs and reference codes. Never body, never labels.
- Hierarchy comes from **weight**, never from family changes.
- Letter-spacing: positive only on ALL-CAPS captions/eyebrows (`10px / 600 / 1px` in product, up to `0.2em` in marketing). Negative tracking only on display type — `−0.5px` for product titles, `−0.035em` (headlines) to `−0.06em` (giant numerals) in marketing.

### 4.3 Spacing
- Base unit `4px`. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64`.
- **Card padding** `20–24px`, **card children gap** `16px`, **section gap** `24px` (the cool-gray corridor between cards is structural — never let cards touch).

### 4.4 Backgrounds
- **No background images** in product UI. The canvas is solid `#FAFAFA`.
- **No repeating patterns, no textures, no noise** anywhere in the system.
- **Full-bleed gradients**: in product only the Sunset sidebar. In marketing, decks and document covers, full-bleed fields (Blush, Meadow, Corner) are the primary canvas — one field per page.
- **Hand-drawn illustrations**: not used. The brand's visual personality lives in the smooth organic **Blob** family (squircle · cushion · pebble · bloom · slab · sweep), traced from the 2026 references — every edge fully rounded, no cusps.

### 4.5 Animation & motion
- **Easing**: `ease` and `ease-out`, never `linear`. Transitions are `150–200ms`.
- **No bounces**, no springs, no overshoot. The brand reads calm.
- **Fades** are used for content swaps; **transforms** (`translateY(-1px)`) are used for hover lifts.
- The CTA gradient does *not* animate by default — its motion is the optional `200ms ease` shimmer on inflight states.
- Sidebar gradient stays at `50°` across all breakpoints — never reorient.

### 4.6 Hover states
- **Cards**: shadow deepens from `shadow-sm` to `shadow-md` (`0 4px 16px rgba(0,0,0,0.08)`). The card doesn't move much — it just lifts a touch.
- **Primary CTA**: `translateY(-1px)` + shadow `0 6px 16px rgba(255,118,26,0.4)` (warmer, deeper orange glow).
- **Secondary button**: background fills with `#FFF5F0` (warm cream), border switches to `#F7607A` coral.
- **Nav item**: background `rgba(255,255,255,0.12)` on sidebar (over Sunset).
- **Row hover**: `#FFF5F0` warm cream fill, no border change.
- **Text link**: underline appears (no color shift).
- Hovers are *additive* — they never invert or darken.

### 4.7 Press / active states
- **Buttons**: `opacity: 0.95` + a tiny `transform: scale(0.98)`. No color change.
- **Nav active**: background `rgba(255,255,255,0.25)`, label weight bumps `500 → 600`, color goes to pure white.
- **Tab active**: pill background fills; label goes to `600`.

### 4.8 Borders
- Default border `1px solid #E8ECF1` — only on inputs, dividers, and list-item member rows. Cards have no border by default; they rely on shadow.
- Subtle inner divider `1px solid #F0F2F7` for list separators inside cards.
- **Focus ring** is the coral `#F7607A` border on the input itself — no separate `:focus-visible` outline ring. The brand pulls into the form.

### 4.9 Shadows (elevation)
A 6-step soft system, all shadows are downward and shallow:

| Level | Token | Use |
|---|---|---|
| L0 | none | page, sidebar nav items, anything inside a card |
| L1 | `0 1px 3px rgba(0,0,0,0.04)` | KPI cards, header company badge |
| L2 | `0 2px 8px rgba(0,0,0,0.06)` | standard content cards |
| L3 | `0 4px 16px rgba(0,0,0,0.08)` | card hover, dropdowns |
| L4 | `0 8px 24px rgba(0,0,0,0.10)` | modals, popovers, select panels |
| Brand | `0 4px 12px rgba(255,118,26,0.30)` | primary CTA — warm orange glow |
| Brand | `4px 0 20px rgba(255,118,26,0.15)` | sidebar right-edge spill |

The two **orange-tinted brand shadows** are the system signature — they make primary actions feel like they're *radiating brand color*, not just sitting on the page.

### 4.10 Protection gradients vs capsules
- **No protection gradients** over imagery (no darkening fades, no scrim overlays). Photos that need legibility are masked into a Blob silhouette — the silhouette itself isolates the photo from the canvas.
- **Pill capsules** are used aggressively on every interactive control: buttons, badges, search bars, toggles. Never on content cards (cards stay at `16px`).

### 4.11 Layout rules
- **Sidebar**: fixed `220–240px` wide left rail at desktop. `64px` icon-only at tablet. Off-canvas drawer at mobile. Always Sunset.
- **Top header**: `72px` tall, `#FAFAFA` (matches page — never card white), `0 32px` horizontal padding.
- **Body padding**: `24–32px`. Section gap `24px`.
- **Two-column dashboard**: `60% / 40%` split at desktop; single column stacked at tablet.
- **Reference frame**: `1440 × 900` desktop.

### 4.12 Transparency & blur
- **Transparency** is used inside the gradient sidebar — search field background is `rgba(255,255,255,0.2)`, nav-item active is `rgba(255,255,255,0.25)`, label colors are `rgba(255,255,255,0.85)`. Outside the sidebar, alpha is rare.
- **Blur (backdrop-filter)** is **not used**. The system is solid surfaces with shadow, not glassmorphism.

### 4.13 Imagery (color vibe)
- **Warm-leaning**. Photos in the brand world are sunlit, terracotta-tinged, lifestyle-led — cafes, daylight, soft skin tones. Never high-contrast B&W. Never cool blue. Never grainy. If you can't source warm imagery, mask the photo into a Stone silhouette to anchor the warmth.

### 4.14 Corner radii (full scale)
| Token | Value | Use |
|---|---|---|
| `--r-xs` | 4px | calendar day cells |
| `--r-sm` | 6px | inline tags |
| `--r-md` | 8px | inputs, dropdowns, sidebar nav items, small buttons |
| `--r-lg` | 12px | KPI cards, chart containers, tutorial banners |
| `--r-xl` | 16px | standard content cards, campaign cards |
| `--r-2xl` | 20px | sidebar (right corners only), modal dialogs |
| `--r-pill` | 9999px | buttons, badges, search bars, toggles |
| `50%` | — | KPI icon circles, avatars, today indicator |

### 4.15 What cards look like
A JuicySuite card is the most repeated visual element in the system. Every card:
1. **Sits on the cool gray page**, never on white.
2. **Pure white surface** (`#FFFFFF`) — no tints, no gradient, no border by default.
3. **`16px` radius** (or `12px` for KPI/chart, `20px` for modals).
4. **`shadow-sm`** baseline; deepens to `shadow-md` on hover.
5. **`20–24px` internal padding**.
6. **`16px` gap** between child elements (`24px` between sections inside a card).
7. **`24px` margin** between adjacent cards (the cool-gray "corridor").

---

## 5 · ICONOGRAPHY

**System.** JuicySuite uses **Lucide / Feather** stroke-style icons — `2px` stroke, round caps, round joins, `24×24` viewBox. The reference HTML inlines them directly as SVG (e.g. plus, edit, check, filter, users, star, dollar-sign, chevron-down). There is no proprietary icon font.

**Sizes:**
- `12px` — inline next to text-link actions (Edit, pencil)
- `14px` — inside outline buttons (Filter, chevron-down)
- `16px` — inside primary CTAs (`+`, search prefix)
- `18px` — sidebar nav items
- `20px` — KPI icon circles
- `24px` — large action targets (rare)

**Color usage:**
- Sidebar nav: `rgba(255,255,255,0.8)` (default) → `#FFFFFF` (active)
- KPI icons: tinted to match their pastel circle (`#FF761A` on `#FFF0E6`, `#F7607A` on `#FFE6E6`, `#00CE73` on `#E6F9E6`, `#8E44AD` on `#F0E6FF`)
- Text-link icons: `#F7607A` coral, same as link text
- All other icons: `#7F8C8D` (secondary) or `#5E555A` (primary)

**Recommendation in this kit.** Lucide is linked from CDN for any HTML artifact that needs a broader set:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```
The icons used in the source (plus, edit, check, filter, search, chevrons, users, star, gift, dollar, home, chart, bell, settings, trash, play, more, download, calendar, sparkle, x) are inlined in `components/core/Icon.jsx` — use `<Icon name="…" />`; no runtime icon dependency.

**Emoji.** **Not used** anywhere in the system — not in marketing copy, not in product UI, not as fallback for icons.

**Unicode chars used as marks.** The trend arrows `▲` and `▼` are used as inline indicators in trend badges. These render in the body font (Montserrat) and inherit the trend color. The chevron `→` is used in inline text-link CTAs (`Show More →`).

**Logo assets.** Three wordmark colorways are provided in `assets/`:
- `juicysuite-wordmark-orange.svg` — primary, on light surfaces (sidebar fallback, marketing)
- `juicysuite-wordmark-black.svg` — for light marketing pieces where Sunset clashes
- `juicysuite-wordmark-white.svg` — on the Sunset sidebar and dark CTAs

There is no separate icon-only logomark in source — the wordmark is used at all sizes. For favicon / square contexts, fall back to the brand letter `J` set in Montserrat `800` white on a Sunset gradient square at `20%` radius. (Flagged as a substitution — ask the user for a dedicated mark if needed.)

---


## Consistency review (Sep 2026)
Resolved conflicts with the 2026 core concept:
- 50° rule scoped to product UI; marketing angles come from Marketing Gradients.
- Letter-spacing rule widened to cover marketing display tracking.
- Stone silhouettes demoted to legacy; the Blob family is primary (Stone Silhouettes card removed).
- Mist / Meadow (50°) marked legacy; Product Gradients card relabelled.
- Solid backgrounds now use the 50 / 35 / 15 brand solids (Magenta and `#F7607A` coral retired from fills).
- Tier cards rebuilt with Blob shapes + one colour set per tier.
- Display Type card adds the marketing display spec.
- Deck chart coral aligned to `#FF5C4C`.

## Caveats
- **JetBrains Mono** loads from Google Fonts (no local files supplied).
- **Poster display face**: the "Juice up / Grow on" references use a heavier geometric display font that was not supplied; Montserrat 800 stands in.
- **Icons** are Lucide/Feather-style glyphs inlined from the source; no official icon set was named.
- **No icon-only logomark** exists; use the wordmark. No photography supplied.
- **EDM** uses Arial per the source email (email-client safety). Documents (quotations, proposals, documentation) use the same patterns but set in **Montserrat**, since they aren't limited by email clients.
- Rewards / Reports / Billing / Settings screens aren't defined in source — shown as labelled placeholders.
