---
name: juicysuite-design
description: Use this skill to generate well-branded interfaces and assets for JuicySuite (a card-centric loyalty/CRM SaaS), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, organic-shape system, logo assets, and full UI kit components (SaaS operator console + marketing surfaces) for prototyping.
user-invocable: true
---

# JuicySuite Design Skill

Read the **README.md** file within this skill, and explore the other available files. The system is built around three load-bearing ideas you must internalise before producing anything:

1. **Sunset is the brand essence** — `linear-gradient(50deg, #FF761A 0%, #FF7D36 13%, #FFABE7 100%)` — and it appears in the SaaS UI only on the sidebar and primary CTA. Three companion gradients (Mist, Citrus, Blossom) exist *only* for marketing surfaces.
2. **The product is card-centric.** Every data cluster lives in a white `16px`-radius card on the cool gray `#FAFAFA` page. Pure white is never the page background. Pure black `#000` is never used anywhere.
3. **Organic shapes never appear in product UI.** The 8 Stone-and-geometric silhouettes live in marketing only (ads, posters, social, hero shots, presentation covers). The silver ratio (1:√2) governs every shape proportion.

## How to use the kit

- For **slides, mocks, throwaway prototypes**: copy assets out of `assets/` and `fonts/`, import `colors_and_type.css`, then assemble using the UI kit components in `ui_kits/saas-app/*.jsx` (for product views) or `ui_kits/marketing/*.jsx` (for promo surfaces). Output static HTML the user can view directly.
- For **production code**: copy the assets you need, read the rules in `README.md` to become an expert, and translate tokens into whatever framework the user is in. Don't bring the whole kit unless asked.
- If the user invokes this skill **without any other guidance**, ask them what they want to build or design, ask follow-up questions about audience and surface (product UI or marketing?), and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

## What lives where

| File | What's inside |
|---|---|
| `README.md` | Brand context · content fundamentals · visual foundations · iconography |
| `colors_and_type.css` | Single source of truth — all CSS vars (colors, type, spacing, shadow, radius, silver-ratio shape scale) + @font-face declarations + semantic typography classes |
| `fonts/` | Local Montserrat (100–900, regular + italic) |
| `assets/` | JuicySuite wordmarks — orange, black, white |
| `preview/` | Small design-system specimen cards (Type, Colors, Spacing, Components, Brand) |
| `ui_kits/saas-app/` | Operator console — interactive Dashboard · Members · Earning kit |
| `ui_kits/marketing/` | Organic-shape compositions — Solo · Duo · Stack · Tier · Feature banner |

## Non-negotiable rules

- All gradients render at **exactly 50°**.
- Text color is `#5E555A` (warm muted plum-gray) — **never** `#000`.
- Page background is `#FAFAFA` — **never** white.
- Pill radius (`9999px`) is for interactive controls; `16px` radius is for cards — **don't mix**.
- ALL-CAPS captions are the only place letter-spacing is used (`10px / 600 / 1px`).
- Inside the SaaS UI: only the Sunset gradient. Mist / Citrus / Blossom are marketing only.
- Inside marketing: max 3 different silhouettes per composition; warm-↔-cool gradient pairing only.
- Emoji are never used in product or marketing.

## Starter snippets

```html
<!-- Minimum viable JuicySuite page -->
<link rel="stylesheet" href="colors_and_type.css">
<body>
  <main style="padding: 32px;">
    <h1 class="t-page">Dashboard</h1>
    <div style="background: #fff; border-radius: 16px; padding: 24px; box-shadow: var(--shadow-sm);">
      <h3 class="t-card-title">A card</h3>
      <p class="t-body">Everything lives in a card.</p>
    </div>
  </main>
</body>
```

```html
<!-- Primary CTA -->
<button style="
  background: var(--gradient-sunset); color: #fff;
  border: none; border-radius: 9999px;
  padding: 0 24px; height: 40px;
  font: 600 14px Montserrat;
  box-shadow: var(--shadow-cta); cursor: pointer;
">Add Campaign</button>
```

For full component coverage and screen-level recreations, mount the UI kits directly via `<script type="text/babel" src="ui_kits/saas-app/components.jsx">` etc., or copy the components into your own file.
