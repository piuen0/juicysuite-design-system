# JuicySuite — Gradient Usage Guidelines

Give this file verbatim to any AI or designer producing JuicySuite assets.

## 1. The 3 brand gradients (the only linear gradients allowed on brand surfaces)

All brand gradients are **50° fixed**. Never change the angle, never reorder or re-tint the stops.

**Sunset — MASTER (SaaS product UI)**
```css
linear-gradient(50deg, #FF761A 0%, #FF7D36 13%, #FFABE7 100%)
```
- The ONLY gradient allowed inside the product UI.
- Allowed only on: sidebar background, primary CTA button.
- Everything else in product UI uses solid colors.
- Text on it: `#FFFFFF` only.

**Mist — promo only**
```css
linear-gradient(50deg, #5DDBC8 0%, #C5A4D9 50%, #F4A6D0 100%)
```

**Meadow — promo only** (follow all 10 stops strictly)
```css
linear-gradient(50deg, #FEE516 0%, #FCE518 32%, #F4E51F 47%, #E8E52B 58%, #D5E53C 67%, #BEE553 75%, #A1E56E 83%, #7EE48F 89%, #57E4B4 96%, #37E4D2 100%)
```

"Promo only" = marketing sites, ads, social, EDM, print. Never inside the SaaS product UI.

## 2. Neutral background gradients (subtle, light surfaces)

**Cream Wash** — soft warm haze for page/section backgrounds:
```css
linear-gradient(180deg, #FFFFFF 0%, #FFF5F0 100%)
```

**Orange Corner** — single radial glow, bottom-left, on pure white; hero/section accent:
```css
background:
  radial-gradient(ellipse 75% 90% at 0% 100%, rgba(255,118,26,0.55) 0%, rgba(255,118,26,0) 65%),
  #FFFFFF;
```

## 3. EDM / email gradients (135°, small elements only)

Email clients render diagonal gradients unreliably, so EDM uses **135°** (exception to the 50° rule) and only on **small pill elements** — stat badges, split bars — never full backgrounds:

- `linear-gradient(135deg, #FFD4E5, #F6A8DD)`
- `linear-gradient(135deg, #FF8D63, #FF92B9)`
- `linear-gradient(135deg, #2FD4C7, #DFFF37)`
- Split-bar segments use 90°: e.g. `linear-gradient(90deg, #E8F51D, #23D5C8)`; each segment fully pill-rounded (`border-radius: 9999px`) with a small gap between segments.

## 4. Hard rules

1. Angle is **50°** for brand gradients — no exceptions outside EDM (135°/90° as above).
2. Copy stop lists **exactly** (color AND percentage). Do not simplify multi-stop gradients to 2 stops.
3. Never invent new gradients; pick from this file.
4. No pink-heavy pastel washes (Blossom, Coral Wash, Sunset Wash, etc. are retired).
5. Sunset only in product UI, and only sidebar + primary CTA. One gradient surface per screen.
6. Gradients never carry body text; only white display text (`--text-on-gradient: #FFFFFF`) on Sunset.
7. Prefer solid colors; a gradient is an accent, not a default.
