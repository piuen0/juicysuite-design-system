# JuicySuite Design System

A warm, gradient-anchored design language for **JuicySuite** — a card-centric SaaS for loyalty programs, member CRM, and earning campaigns. The brand radiates warmth through saturation, lives inside soft white cards on a cool airy canvas, and is unmistakably identified by its **Sunset** gradient and **organic Stone** silhouette pair.

> **Source:** This system is distilled from `juicysuite-design-md/design.md` and `juicysuite-design-md/design-system.html` (a comprehensive 2,400-line reference HTML), and the wordmark SVGs (`uploads/orange.svg`, `uploads/black.svg`, `uploads/white.svg`).

---

## 1 · What JuicySuite is

JuicySuite is a single SaaS product split across a few functional surfaces, all sharing one visual language:

| Surface | What it does | Key screens |
|---|---|---|
| **SaaS App** | The core dashboard — loyalty/CRM operator console | Dashboard · Members · Earning (campaigns) · Reporting |
| **Marketing surfaces** | Ads, promotional banners, hero shots, social posts, app-store splashes | Hero banner · Campaign poster · Tier card |

There is **no separate marketing website mocked** in the source — the marketing brand expresses itself through the *organic shape compositions* (Marble, Drop, Ellipse, Stone family) layered on gradient canvases, used for ads and editorial. Inside the product, shapes never appear; the canvas stays calm and structured.

The brand voice is **confident, warm, present** — heavy `800` weight on titles, soft humanist body type, and a tone that treats every member as a person, not a row.

---

## 2 · Index of this design system

```
README.md                     ← you are here
SKILL.md                      ← cross-compatible skill entry point
colors_and_type.css           ← single source of truth for tokens + semantic type

fonts/                        ← Montserrat 100–900 + italics (.ttf, wired by colors_and_type.css)

assets/
  juicysuite-wordmark-orange.svg   ← primary wordmark (Sunset orange #FF761A)
  juicysuite-wordmark-black.svg    ← dark backgrounds (warm-not-pure-black)
  juicysuite-wordmark-white.svg    ← gradient / dark surfaces (sidebar, CTAs)

preview/                      ← Design System tab cards (small specimens)
  _card.css                          common card-frame styles for previews
  type-display · type-body · type-caption · type-weights
  colors-surfaces · colors-gradients · colors-text · colors-semantic
  colors-kpi · colors-extended
  spacing-scale · radius-scale · shadow-scale · shape-scale
  components-buttons · components-inputs · components-badges
  components-toggles · components-kpi · components-chart · components-rows
  brand-wordmark · brand-stones · brand-geometric · brand-compositions
  brand-gradient-angle

ui_kits/
  saas-app/                   ← JuicySuite operator console UI kit
    README.md
    index.html                     interactive Dashboard → Members → Earning
    components.jsx                 Sidebar · TopHeader · Buttons · Badges · Toggle · Input · Avatar · Icons
    cards.jsx                      KPICard · MemberRow · CampaignCard · Banner · MiniChart · BarChart · Donut
    screens.jsx                    DashboardScreen · MembersScreen · EarningScreen + placeholders
  marketing/                  ← Marketing surface UI kit (organic shapes)
    README.md
    index.html                     SoloHero · DuoHero · StackPoster · TierCard · FeatureBanner
    shapes.jsx                     Marble · Drop · Ellipse · Stone family + GradientDefs
    compositions.jsx               Hero / Poster / Tier / Banner compositions
```

---

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
- **Text** is `#5E555A` — a warm muted plum-gray that intentionally steps back from `#000`. Pure black is **never** used anywhere in the system.
- **The Sunset gradient** (`linear-gradient(50deg, #FF761A 0%, #FF7D36 13%, #FFABE7 100%)`) is the brand essence. Sidebar + primary CTA only — never on content cards, chart fills, or body text. The companion gradients (Mist, Citrus, Blossom) are reserved for marketing.
- **All gradients render at exactly `50°`.** No exceptions, no "tilted to match the card." The angle is part of the brand.

### 4.2 Type
- **Montserrat** carries the entire UI. Weights `400 / 500 / 600 / 700 / 800`. The `800` heavy is the brand fingerprint — page titles at `34px / 800`, KPI stats at `28px / 800`, never used below that scale.
- **JetBrains Mono** only for IDs and reference codes. Never body, never labels.
- Hierarchy comes from **weight**, never from family changes.
- Letter-spacing is used in **exactly one place**: ALL-CAPS captions at `10px / 600 / 1px`.

### 4.3 Spacing
- Base unit `4px`. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64`.
- **Card padding** `20–24px`, **card children gap** `16px`, **section gap** `24px` (the cool-gray corridor between cards is structural — never let cards touch).

### 4.4 Backgrounds
- **No background images** in product UI. The canvas is solid `#FAFAFA`.
- **No repeating patterns, no textures, no noise** anywhere in the system.
- **Full-bleed gradients** only appear on the sidebar (Sunset, vertical) and on rare promotional banners (Sunset, horizontal).
- **Hand-drawn illustrations**: not used. The brand's visual personality lives in *organic Stone silhouettes*, which are geometric (SVG paths), not hand-drawn.

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
- **No protection gradients** over imagery (no darkening fades, no scrim overlays). Photos that need legibility are masked into a Stone silhouette — the silhouette itself isolates the photo from the canvas.
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
For the UI kit components, the icons used in the reference (plus, edit, check, filter, search, chevron-down, users, star, dollar-sign, play, trash, x, menu) are inlined as raw SVG inside `ui_kits/saas-app/components.jsx` so the kit has no runtime icon dependency.

**Emoji.** **Not used** anywhere in the system — not in marketing copy, not in product UI, not as fallback for icons.

**Unicode chars used as marks.** The trend arrows `▲` and `▼` are used as inline indicators in trend badges. These render in the body font (Montserrat) and inherit the trend color. The chevron `→` is used in inline text-link CTAs (`Show More →`).

**Logo assets.** Three wordmark colorways are provided in `assets/`:
- `juicysuite-wordmark-orange.svg` — primary, on light surfaces (sidebar fallback, marketing)
- `juicysuite-wordmark-black.svg` — for light marketing pieces where Sunset clashes
- `juicysuite-wordmark-white.svg` — on the Sunset sidebar and dark CTAs

There is no separate icon-only logomark in source — the wordmark is used at all sizes. For favicon / square contexts, fall back to the brand letter `J` set in Montserrat `800` white on a Sunset gradient square at `20%` radius. (Flagged as a substitution — ask the user for a dedicated mark if needed.)

---

## ⚠️ Caveats and substitutions

- **Montserrat** is the source-specified primary font and ships with this design system as local `.ttf` files in `fonts/` — `colors_and_type.css` wires up all 9 weights (100 through 900) plus matching italics via `@font-face`. No CDN dependency for the primary type.
- **JetBrains Mono** is the source-specified mono font — loads from Google Fonts, no substitution.
- **Icon set**: Lucide/Feather is a *recommended substitute* — the source HTML inlines individual SVG icons that match the Feather/Lucide stroke style exactly (`2px`, round caps, `24×24`), but never names a specific library. If the user has a proprietary set, swap in.
- **No icon-only logomark** exists in source — the `J + Sunset square` recommendation above is a derived placeholder. Please supply one if needed.
- **No photography** is provided — Stone photo-mask compositions in the marketing UI kit use solid gradient placeholders. Drop real warm-toned imagery into `assets/imagery/` and reference from the masks.
