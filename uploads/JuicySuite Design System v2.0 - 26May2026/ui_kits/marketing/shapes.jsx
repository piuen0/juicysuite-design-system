// JuicySuite — Marketing · shapes.jsx
// The 8 canonical silhouettes + the 4 brand gradient definitions.

// Reusable SVG defs — drop <GradientDefs /> once near the root of any page.
const GradientDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <defs>
      <linearGradient id="sunset"  x1="0.117" y1="0.821" x2="0.883" y2="0.179">
        <stop offset="0%"   stopColor="#FF761A" />
        <stop offset="13%"  stopColor="#FF7D36" />
        <stop offset="100%" stopColor="#FFABE7" />
      </linearGradient>
      <linearGradient id="mist"    x1="0.117" y1="0.821" x2="0.883" y2="0.179">
        <stop offset="0%"   stopColor="#5DDBC8" />
        <stop offset="50%"  stopColor="#C5A4D9" />
        <stop offset="100%" stopColor="#F4A6D0" />
      </linearGradient>
      <linearGradient id="citrus"  x1="0.117" y1="0.821" x2="0.883" y2="0.179">
        <stop offset="0%"   stopColor="#F5D840" />
        <stop offset="100%" stopColor="#3DD2A4" />
      </linearGradient>
      <linearGradient id="blossom" x1="0.117" y1="0.821" x2="0.883" y2="0.179">
        <stop offset="0%"   stopColor="#FF5E7C" />
        <stop offset="100%" stopColor="#FFB0C5" />
      </linearGradient>
    </defs>
  </svg>
);

// Gradient string → CSS background
const gradientCss = {
  sunset:  "linear-gradient(50deg, #FF761A 0%, #FF7D36 13%, #FFABE7 100%)",
  mist:    "linear-gradient(50deg, #5DDBC8 0%, #C5A4D9 50%, #F4A6D0 100%)",
  citrus:  "linear-gradient(50deg, #F5D840 0%, #3DD2A4 100%)",
  blossom: "linear-gradient(50deg, #FF5E7C 0%, #FFB0C5 100%)",
};

// ----- GEOMETRIC TIER (pure CSS) ------------------------------------
const Marble    = ({ size = 200, grad = "sunset", style = {} }) => (
  <div style={{ width: size, aspectRatio: "1", borderRadius: "50%", background: gradientCss[grad], ...style }}></div>
);
const DropTall  = ({ width = 100, grad = "sunset", style = {} }) => (
  <div style={{ width, aspectRatio: "1 / 2.828", borderRadius: 9999, background: gradientCss[grad], ...style }}></div>
);
const DropShort = ({ width = 140, grad = "sunset", style = {} }) => (
  <div style={{ width, aspectRatio: "1 / 1.414", borderRadius: 9999, background: gradientCss[grad], ...style }}></div>
);
const Ellipse   = ({ width = 240, grad = "sunset", style = {} }) => (
  <div style={{ width, aspectRatio: "1.414 / 1", borderRadius: "50%", background: gradientCss[grad], ...style }}></div>
);

// ----- ORGANIC TIER (SVG paths) -------------------------------------
// Stone · Round — Signature
const StoneRound = ({ size = 240, grad = "sunset", rotate = 0, style = {} }) => (
  <svg viewBox="0 0 100 100" style={{ width: size, aspectRatio: "1", transform: `rotate(${rotate}deg)`, ...style }}>
    <path d="M 50 4 C 70 4 95 22 96 48 C 97 72 78 96 52 96 C 28 96 4 78 5 52 C 6 26 28 4 50 4 Z" fill={`url(#${grad})`} />
  </svg>
);

const StoneTilt = ({ size = 200, grad = "sunset", flip = false, style = {} }) => (
  <svg viewBox="0 0 100 141" style={{ width: size, aspectRatio: "1 / 1.414", transform: flip ? "rotate(180deg)" : "none", ...style }}>
    <path d="M 30 6 C 55 2 85 8 92 25 C 96 45 90 65 85 85 C 78 110 65 135 42 135 C 22 134 8 120 6 100 C 4 78 10 55 14 35 C 17 18 22 8 30 6 Z" fill={`url(#${grad})`} />
  </svg>
);

const StoneWide = ({ width = 320, grad = "sunset", flip = false, style = {} }) => (
  <svg viewBox="0 0 141 100" style={{ width, aspectRatio: "1.414 / 1", transform: flip ? "rotate(180deg)" : "none", ...style }}>
    <path d="M 10 50 C 8 28 35 6 70 6 C 110 6 138 22 138 50 C 138 72 105 94 70 94 C 35 94 10 75 10 50 Z" fill={`url(#${grad})`} />
  </svg>
);

// Stone · Bloom — Signature
const StoneBloom = ({ size = 320, grad = "sunset", flip = false, style = {} }) => (
  <svg viewBox="0 0 204 250" style={{ width: size, aspectRatio: "204 / 250", transform: flip ? "rotate(180deg)" : "none", ...style }}>
    <path d="M152.985 3.68C200.185 22.18 214.385 116.38 194.885 166.18C166.985 237.48 107.685 262.28 60.485 243.78C13.285 225.28 -22.915 164.38 17.385 99.38C54.685 39.38 105.785 -14.82 152.985 3.68Z" fill={`url(#${grad})`} />
  </svg>
);

Object.assign(window, {
  GradientDefs, gradientCss,
  Marble, DropTall, DropShort, Ellipse,
  StoneRound, StoneTilt, StoneWide, StoneBloom,
});
