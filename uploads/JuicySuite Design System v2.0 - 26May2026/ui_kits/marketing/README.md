# JuicySuite — Marketing UI Kit

Marketing surfaces use the **organic shape system** — Sunset, Mist, Citrus, Blossom gradients filled into the eight canonical silhouettes (Marble, Drop · Tall, Drop · Short, Ellipse, Stone · Round, Stone · Tilt, Stone · Wide, Stone · Bloom). All proportions follow the silver ratio (1:√2).

Open `index.html` to see live compositions across hero · poster · tier card · feature panel.

## Files

```
shapes.jsx
  Marble · DropTall · DropShort · Ellipse        (geometric — pure CSS)
  StoneRound · StoneTilt · StoneWide · StoneBloom (organic — SVG paths)
  GradientDefs                                    (Sunset / Mist / Citrus / Blossom)

compositions.jsx
  SoloHero            single hero shape, calmest composition
  DuoHero             two shapes paired on the 50° diagonal · √2:1 size ratio
  StackPoster         tangent shapes along an axis, one silhouette, one gradient
  TierCard            VIP / Standard / New tier badge using Marble + label
  FeatureBanner       horizontal Sunset banner with bleeding Bloom backdrop
```

Rules baked in:
- Every gradient renders at exactly **50°**.
- **Sunset** is the brand essence — featured in the hero. Mist / Citrus / Blossom appear in supporting compositions.
- The warm-↔-cool pairing rule is enforced in composition props (warm bg + cool foreground, never two same-temperature gradients).
- Shapes never appear inside the SaaS app — this kit is for ads, hero shots, posters, social, presentation covers only.

The shapes carry **gradients** by default; passing `mask="photo"` (planned slot) is wired for future warm-toned imagery once supplied.
