/* @ds-bundle: {"format":4,"namespace":"JuicySuiteDesignSystemV2026May2026_7edf33","components":[],"sourceHashes":{"ui_kits/marketing/compositions.jsx":"3b1dac1ead58","ui_kits/marketing/shapes.jsx":"c656f5e2e58b","ui_kits/saas-app/cards.jsx":"6a76c538de58","ui_kits/saas-app/components.jsx":"cbcbc10a9e8a","ui_kits/saas-app/screens.jsx":"aa1f9fea0775"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JuicySuiteDesignSystemV2026May2026_7edf33 = window.JuicySuiteDesignSystemV2026May2026_7edf33 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/compositions.jsx
try { (() => {
// JuicySuite — Marketing · compositions.jsx
// Hero · Poster · Tier card · Feature banner — built from shapes.jsx primitives.

const {
  Marble,
  DropTall,
  DropShort,
  Ellipse,
  StoneRound,
  StoneTilt,
  StoneWide,
  StoneBloom,
  gradientCss
} = window;

// Logo bar — pulls the wordmark from /assets
const LogoBar = ({
  color = "white"
}) => /*#__PURE__*/React.createElement("img", {
  src: `../../assets/juicysuite-wordmark-${color === "white" ? "white" : "orange"}.svg`,
  alt: "JuicySuite",
  style: {
    height: 28
  }
});

// ---------------------------------------------------------
// SOLO HERO — one Stone · Bloom on a calm canvas
// ---------------------------------------------------------
const SoloHero = ({
  eyebrow = "Loyalty, made warm",
  title = "Turn one-time visitors into regulars.",
  body = "JuicySuite gives small operators an enterprise-grade loyalty program, in an afternoon.",
  cta = "Get started — it's free"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    width: "100%",
    aspectRatio: "1.414 / 1",
    background: "#FFF8F2",
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 56
  }
}, /*#__PURE__*/React.createElement(StoneBloom, {
  size: 620,
  grad: "sunset",
  style: {
    position: "absolute",
    top: "-12%",
    right: "-14%",
    filter: "drop-shadow(0 20px 60px rgba(255,118,26,0.25))"
  }
}), /*#__PURE__*/React.createElement(Marble, {
  size: 150,
  grad: "mist",
  style: {
    position: "absolute",
    bottom: "-8%",
    left: "-5%",
    boxShadow: "0 16px 32px rgba(93,219,200,0.25)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    zIndex: 2
  }
}, /*#__PURE__*/React.createElement(LogoBar, {
  color: "orange"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    zIndex: 2,
    maxWidth: "60%"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 12px Montserrat",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#FF761A",
    marginBottom: 14
  }
}, eyebrow), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "800 56px Montserrat",
    color: "#5E555A",
    letterSpacing: "-1.2px",
    lineHeight: 1.05,
    marginBottom: 18,
    textWrap: "balance"
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 17px Montserrat",
    color: "#7F8C8D",
    lineHeight: 1.5,
    maxWidth: 480,
    marginBottom: 24
  }
}, body), /*#__PURE__*/React.createElement("button", {
  style: {
    background: gradientCss.sunset,
    color: "#fff",
    border: "none",
    borderRadius: 9999,
    padding: "14px 28px",
    font: "600 15px Montserrat",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(255,118,26,0.3)"
  }
}, cta)));

// ---------------------------------------------------------
// DUO HERO — TR↔BL diagonal · warm bg + cool focal
// ---------------------------------------------------------
const DuoHero = ({
  eyebrow = "Spring 2026",
  title = "Double points all of birthday week.",
  body = "Every member, every year — automatically."
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    width: "100%",
    aspectRatio: "1 / 1.414",
    background: gradientCss.sunset,
    borderRadius: 20,
    overflow: "hidden",
    padding: 44,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement(Marble, {
  size: 420,
  grad: "mist",
  style: {
    position: "absolute",
    top: "-12%",
    right: "-18%",
    boxShadow: "0 18px 40px rgba(0,0,0,0.18)"
  }
}), /*#__PURE__*/React.createElement(DropShort, {
  width: 160,
  grad: "citrus",
  style: {
    position: "absolute",
    bottom: "-6%",
    left: "-6%",
    boxShadow: "0 12px 28px rgba(0,0,0,0.16)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    zIndex: 2
  }
}, /*#__PURE__*/React.createElement(LogoBar, {
  color: "white"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    zIndex: 2,
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 11px Montserrat",
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.9,
    marginBottom: 14
  }
}, eyebrow), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "800 42px Montserrat",
    letterSpacing: "-0.8px",
    lineHeight: 1.05,
    marginBottom: 14,
    textWrap: "balance"
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 15px Montserrat",
    opacity: 0.95,
    lineHeight: 1.55,
    maxWidth: 320
  }
}, body)));

// ---------------------------------------------------------
// STACK POSTER — tangent Marbles, single gradient
// ---------------------------------------------------------
const StackPoster = ({
  eyebrow = "Citrus drop",
  title = "Fresh perks, weekly.",
  body = "A new reward in your inbox every Monday morning."
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    width: "100%",
    aspectRatio: "1 / 1.414",
    background: "#20CC76",
    borderRadius: 20,
    overflow: "hidden"
  }
}, [0, 50, 100].map(top => /*#__PURE__*/React.createElement("div", {
  key: top,
  style: {
    position: "absolute",
    left: "50%",
    top: `${top}%`,
    transform: "translate(-50%, -50%)",
    width: "70.7%",
    aspectRatio: 1,
    borderRadius: "50%",
    background: "linear-gradient(50deg, #43E3D2 0%, #FDADE6 100%)"
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    padding: 36,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 2
  }
}, /*#__PURE__*/React.createElement(LogoBar, {
  color: "white"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    color: "#fff",
    maxWidth: "75%"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 11px Montserrat",
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.9,
    marginBottom: 12
  }
}, eyebrow), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "800 36px Montserrat",
    letterSpacing: "-0.6px",
    lineHeight: 1.05,
    marginBottom: 12,
    textShadow: "0 1px 8px rgba(0,0,0,0.15)"
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 14px Montserrat",
    opacity: 0.95,
    lineHeight: 1.55,
    textShadow: "0 1px 6px rgba(0,0,0,0.15)"
  }
}, body))));

// ---------------------------------------------------------
// TIER CARDS — VIP / Standard / New
// ---------------------------------------------------------
const tierStyles = {
  VIP: {
    grad: "mist",
    eyebrow: "Tier · Premium",
    title: "VIP",
    body: "Members spending $1K+ a year",
    perk: "2× points · early access"
  },
  Standard: {
    grad: "sunset",
    eyebrow: "Tier · Core",
    title: "Standard",
    body: "All registered members",
    perk: "1× points · seasonal perks"
  },
  New: {
    grad: "citrus",
    eyebrow: "Tier · Welcome",
    title: "New",
    body: "First 30 days after signup",
    perk: "Welcome bonus · 100 pts"
  }
};
const TierCard = ({
  kind = "Standard"
}) => {
  const t = tierStyles[kind];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1.2",
      background: "#FFFFFF",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(StoneRound, {
    size: 300,
    grad: t.grad,
    style: {
      position: "absolute",
      top: "-22%",
      right: "-22%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px Montserrat",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      color: "#7F8C8D",
      marginBottom: 8
    }
  }, t.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 32px Montserrat",
      color: "#5E555A",
      letterSpacing: "-0.5px"
    }
  }, t.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px Montserrat",
      color: "#7F8C8D",
      lineHeight: 1.5,
      marginBottom: 10
    }
  }, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 14px",
      background: "rgba(94,85,90,0.08)",
      borderRadius: 9999,
      font: "600 12px Montserrat",
      color: "#5E555A"
    }
  }, "\u2605 ", t.perk)));
};

// ---------------------------------------------------------
// FEATURE BANNER — horizontal Sunset banner with bleeding Bloom
// ---------------------------------------------------------
const FeatureBanner = ({
  eyebrow = "What's new",
  title = "Birthday rewards, on autopilot.",
  body = "Set a rule once. JuicySuite handles birthday recognition, points awards, and follow-up — for every member, forever."
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    width: "100%",
    aspectRatio: "2.5 / 1",
    background: gradientCss.sunset,
    borderRadius: 20,
    overflow: "hidden",
    padding: "40px 48px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 12px 36px rgba(255,118,26,0.28)"
  }
}, /*#__PURE__*/React.createElement(StoneBloom, {
  size: 420,
  grad: "blossom",
  style: {
    position: "absolute",
    top: "-30%",
    right: "-10%",
    opacity: 0.85
  }
}), /*#__PURE__*/React.createElement(DropShort, {
  width: 120,
  grad: "mist",
  style: {
    position: "absolute",
    bottom: "-12%",
    right: "20%",
    opacity: 0.9
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    zIndex: 2,
    maxWidth: "62%"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 11px Montserrat",
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.92,
    marginBottom: 12
  }
}, eyebrow), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "800 32px Montserrat",
    letterSpacing: "-0.5px",
    lineHeight: 1.1,
    marginBottom: 10,
    textWrap: "balance"
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 14px Montserrat",
    opacity: 0.95,
    lineHeight: 1.55
  }
}, body)), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end"
  }
}, /*#__PURE__*/React.createElement(LogoBar, {
  color: "white"
}), /*#__PURE__*/React.createElement("button", {
  style: {
    background: "rgba(255,255,255,0.22)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: 9999,
    padding: "12px 22px",
    font: "600 13px Montserrat",
    cursor: "pointer"
  }
}, "Read the launch note \u2192")));
Object.assign(window, {
  LogoBar,
  SoloHero,
  DuoHero,
  StackPoster,
  TierCard,
  FeatureBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/compositions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/shapes.jsx
try { (() => {
// JuicySuite — Marketing · shapes.jsx
// The 8 canonical silhouettes + the 4 brand gradient definitions.

// Reusable SVG defs — drop <GradientDefs /> once near the root of any page.
const GradientDefs = () => /*#__PURE__*/React.createElement("svg", {
  width: "0",
  height: "0",
  style: {
    position: "absolute"
  },
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "sunset",
  x1: "0.117",
  y1: "0.821",
  x2: "0.883",
  y2: "0.179"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#FF761A"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "13%",
  stopColor: "#FF7D36"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#FFABE7"
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "mist",
  x1: "0.117",
  y1: "0.821",
  x2: "0.883",
  y2: "0.179"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#5DDBC8"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "50%",
  stopColor: "#C5A4D9"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#F4A6D0"
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "citrus",
  x1: "0.117",
  y1: "0.821",
  x2: "0.883",
  y2: "0.179"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#F5D840"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#3DD2A4"
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "blossom",
  x1: "0.117",
  y1: "0.821",
  x2: "0.883",
  y2: "0.179"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#FF5E7C"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#FFB0C5"
}))));

// Gradient string → CSS background
const gradientCss = {
  sunset: "linear-gradient(50deg, #FF761A 0%, #FF7D36 13%, #FFABE7 100%)",
  mist: "linear-gradient(50deg, #5DDBC8 0%, #C5A4D9 50%, #F4A6D0 100%)",
  citrus: "linear-gradient(50deg, #F5D840 0%, #3DD2A4 100%)",
  blossom: "linear-gradient(50deg, #FF5E7C 0%, #FFB0C5 100%)"
};

// ----- GEOMETRIC TIER (pure CSS) ------------------------------------
const Marble = ({
  size = 200,
  grad = "sunset",
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    aspectRatio: "1",
    borderRadius: "50%",
    background: gradientCss[grad],
    ...style
  }
});
const DropTall = ({
  width = 100,
  grad = "sunset",
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width,
    aspectRatio: "1 / 2.828",
    borderRadius: 9999,
    background: gradientCss[grad],
    ...style
  }
});
const DropShort = ({
  width = 140,
  grad = "sunset",
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width,
    aspectRatio: "1 / 1.414",
    borderRadius: 9999,
    background: gradientCss[grad],
    ...style
  }
});
const Ellipse = ({
  width = 240,
  grad = "sunset",
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width,
    aspectRatio: "1.414 / 1",
    borderRadius: "50%",
    background: gradientCss[grad],
    ...style
  }
});

// ----- ORGANIC TIER (SVG paths) -------------------------------------
// Stone · Round — Signature
const StoneRound = ({
  size = 240,
  grad = "sunset",
  rotate = 0,
  style = {}
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 100 100",
  style: {
    width: size,
    aspectRatio: "1",
    transform: `rotate(${rotate}deg)`,
    ...style
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M 50 4 C 70 4 95 22 96 48 C 97 72 78 96 52 96 C 28 96 4 78 5 52 C 6 26 28 4 50 4 Z",
  fill: `url(#${grad})`
}));
const StoneTilt = ({
  size = 200,
  grad = "sunset",
  flip = false,
  style = {}
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 100 141",
  style: {
    width: size,
    aspectRatio: "1 / 1.414",
    transform: flip ? "rotate(180deg)" : "none",
    ...style
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M 30 6 C 55 2 85 8 92 25 C 96 45 90 65 85 85 C 78 110 65 135 42 135 C 22 134 8 120 6 100 C 4 78 10 55 14 35 C 17 18 22 8 30 6 Z",
  fill: `url(#${grad})`
}));
const StoneWide = ({
  width = 320,
  grad = "sunset",
  flip = false,
  style = {}
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 141 100",
  style: {
    width,
    aspectRatio: "1.414 / 1",
    transform: flip ? "rotate(180deg)" : "none",
    ...style
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M 10 50 C 8 28 35 6 70 6 C 110 6 138 22 138 50 C 138 72 105 94 70 94 C 35 94 10 75 10 50 Z",
  fill: `url(#${grad})`
}));

// Stone · Bloom — Signature
const StoneBloom = ({
  size = 320,
  grad = "sunset",
  flip = false,
  style = {}
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 204 250",
  style: {
    width: size,
    aspectRatio: "204 / 250",
    transform: flip ? "rotate(180deg)" : "none",
    ...style
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M152.985 3.68C200.185 22.18 214.385 116.38 194.885 166.18C166.985 237.48 107.685 262.28 60.485 243.78C13.285 225.28 -22.915 164.38 17.385 99.38C54.685 39.38 105.785 -14.82 152.985 3.68Z",
  fill: `url(#${grad})`
}));
Object.assign(window, {
  GradientDefs,
  gradientCss,
  Marble,
  DropTall,
  DropShort,
  Ellipse,
  StoneRound,
  StoneTilt,
  StoneWide,
  StoneBloom
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/shapes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saas-app/cards.jsx
try { (() => {
// JuicySuite — SaaS App · cards.jsx
// Higher-level card components: KPI · MemberRow · CampaignCard · Banner · Chart

const {
  JSIcon: Icon,
  JSButton: Button,
  JSTextLink: TextLink,
  JSBadge: Badge,
  JSTrend: Trend,
  JSToggle: Toggle,
  JSAvatar: Avatar
} = window;

// =============================================================
// Base Card
// =============================================================
const Card = ({
  children,
  padding = 24,
  radius = 16,
  style = {},
  onClick
}) => /*#__PURE__*/React.createElement("div", {
  onClick: onClick,
  style: {
    background: "#fff",
    borderRadius: radius,
    padding,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    ...style
  }
}, children);

// =============================================================
// KPI CARD — icon circle · stat · label · trend
// =============================================================
const kpiPalettes = {
  orange: {
    bg: "#FFF0E6",
    fg: "#FF761A"
  },
  coral: {
    bg: "#FFE6E6",
    fg: "#F7607A"
  },
  green: {
    bg: "#E6F9E6",
    fg: "#00CE73"
  },
  purple: {
    bg: "#F0E6FF",
    fg: "#8E44AD"
  }
};
const KPICard = ({
  icon = "users",
  color = "orange",
  value,
  label,
  trend,
  trendDir = "up"
}) => {
  const pal = kpiPalettes[color];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 18,
      flex: 1,
      minWidth: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: pal.bg,
      color: pal.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 28px Montserrat",
      color: "var(--text-primary)",
      lineHeight: 1.1,
      letterSpacing: "-0.5px"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 11px Montserrat",
      color: "var(--text-secondary)"
    }
  }, label), trend && /*#__PURE__*/React.createElement(Trend, {
    value: trend,
    dir: trendDir
  }))));
};

// =============================================================
// MEMBER ROW
// =============================================================
const MemberRow = ({
  initials,
  idx,
  name,
  id,
  status,
  points,
  onEdit,
  onRemove
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid var(--border-default)",
    background: "#fff"
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: initials,
  idx: idx,
  size: 40
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 14px Montserrat",
    color: "var(--text-primary)"
  }
}, name), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 11px 'JetBrains Mono', monospace",
    color: "var(--text-secondary)",
    marginTop: 2
  }
}, "ID: ", id)), points != null && /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "right",
    minWidth: 80
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "700 15px Montserrat",
    color: "var(--text-primary)"
  }
}, points.toLocaleString()), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "500 10px Montserrat",
    color: "var(--text-secondary)",
    textTransform: "uppercase",
    letterSpacing: 1
  }
}, "Points")), /*#__PURE__*/React.createElement(Badge, {
  kind: status.kind
}, status.label), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement(TextLink, {
  icon: "edit",
  onClick: onEdit
}, "Edit"), onRemove && /*#__PURE__*/React.createElement(TextLink, {
  destructive: true,
  onClick: onRemove
}, "Remove")));

// =============================================================
// CAMPAIGN CARD
// =============================================================
const CampaignCard = ({
  title,
  period,
  description,
  active,
  onToggle,
  stats
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    borderRadius: 16,
    padding: 22,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 10
  }
}, /*#__PURE__*/React.createElement(Toggle, {
  checked: active,
  onChange: onToggle
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    font: "600 15px Montserrat",
    color: "var(--text-primary)"
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 16
  }
}, /*#__PURE__*/React.createElement(TextLink, {
  icon: "edit"
}, "Edit"), /*#__PURE__*/React.createElement(TextLink, null, "Show More \u2192"))), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 12px Montserrat",
    color: "var(--text-secondary)",
    marginBottom: 14
  }
}, period), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 14px Montserrat",
    color: "var(--text-secondary)",
    lineHeight: 1.55
  }
}, description), stats && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 28,
    marginTop: 18,
    paddingTop: 16,
    borderTop: "1px solid var(--border-subtle)"
  }
}, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
  key: i
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    font: "800 20px Montserrat",
    color: "var(--text-primary)"
  }
}, s.value), s.trend && /*#__PURE__*/React.createElement(Trend, {
  value: s.trend,
  dir: s.trendDir
})), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "500 11px Montserrat",
    color: "var(--text-secondary)",
    marginTop: 2
  }
}, s.label)))));

// =============================================================
// PROMO BANNER (rare gradient use)
// =============================================================
const PromoBanner = ({
  eyebrow,
  title,
  body,
  ctaLabel = "Play",
  onCta
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--gradient-sunset)",
    borderRadius: 16,
    padding: "22px 26px",
    color: "#fff",
    boxShadow: "var(--shadow-cta)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 11px Montserrat",
    textTransform: "uppercase",
    letterSpacing: 1,
    opacity: 0.9,
    marginBottom: 6
  }
}, eyebrow), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "700 18px Montserrat",
    marginBottom: 4
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 13px Montserrat",
    opacity: 0.95
  }
}, body)), /*#__PURE__*/React.createElement("button", {
  onClick: onCta,
  style: {
    background: "rgba(255,255,255,0.22)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: 9999,
    padding: "10px 20px",
    font: "600 13px Montserrat",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "play",
  size: 11
}), ctaLabel));

// =============================================================
// MINI CHART — orange line + gradient area
// =============================================================
const MiniChart = ({
  data = [108, 92, 96, 75, 62, 68, 46, 38, 20],
  height = 180
}) => {
  const w = 600,
    h = 130;
  const stepX = w / (data.length - 1);
  const points = data.map((d, i) => `${(i * stepX).toFixed(1)},${d}`).join(" ");
  const area = `M0,${h} L${points.split(" ").join(" L")} L${w},${h} Z`;
  const line = `M${points.split(" ").join(" L")}`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "areaFill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF761A",
    stopOpacity: "0.32"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FF761A",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "30",
    x2: w,
    y2: "30",
    stroke: "#F0F2F7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "65",
    x2: w,
    y2: "65",
    stroke: "#F0F2F7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "100",
    x2: w,
    y2: "100",
    stroke: "#F0F2F7"
  }), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#areaFill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "#FF761A",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), data.map((d, i) => (i === data.length - 1 || i === Math.floor(data.length / 2)) && /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: i * stepX,
    cy: d,
    r: "4.5",
    fill: "#fff",
    stroke: "#FF761A",
    strokeWidth: "2"
  })));
};

// =============================================================
// BAR CHART (weekday breakdown)
// =============================================================
const BarChart = ({
  data = [40, 65, 55, 85, 70, 45, 30],
  labels = ["M", "T", "W", "T", "F", "S", "S"],
  highlight = 3
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-end",
    gap: 14,
    height: 160
  }
}, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    height: `${v}%`,
    background: i === highlight ? "#FF761A" : "rgba(255,118,26,0.55)",
    borderRadius: "6px 6px 0 0",
    boxShadow: i === highlight ? "0 1px 3px rgba(255,118,26,0.3)" : "none"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    font: `${i === highlight ? 600 : 400} 11px Montserrat`,
    color: i === highlight ? "var(--text-primary)" : "var(--text-secondary)"
  }
}, labels[i]))));

// =============================================================
// DONUT (loyalty mix)
// =============================================================
const Donut = ({
  segments = [{
    value: 56,
    color: "#FF761A"
  }, {
    value: 24,
    color: "#F7607A"
  }, {
    value: 12,
    color: "#FFDA2B"
  }, {
    value: 8,
    color: "#37E4D2"
  }],
  center
}) => {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let acc = 0;
  const r = 70,
    cx = 90,
    cy = 90,
    circ = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 180,
      height: 180
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "180",
    height: "180",
    viewBox: "0 0 180 180"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: "#F0F2F7",
    strokeWidth: "16"
  }), segments.map((seg, i) => {
    const len = seg.value / total * circ;
    const offset = circ - acc;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: r,
      fill: "none",
      stroke: seg.color,
      strokeWidth: "16",
      strokeDasharray: `${len} ${circ - len}`,
      strokeDashoffset: offset,
      transform: `rotate(-90 ${cx} ${cy})`,
      strokeLinecap: "round"
    });
    acc += len;
    return el;
  })), center && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 24px Montserrat",
      color: "var(--text-primary)",
      lineHeight: 1
    }
  }, center.value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px Montserrat",
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, center.label)));
};
Object.assign(window, {
  JSCard: Card,
  JSKPICard: KPICard,
  JSMemberRow: MemberRow,
  JSCampaignCard: CampaignCard,
  JSPromoBanner: PromoBanner,
  JSMiniChart: MiniChart,
  JSBarChart: BarChart,
  JSDonut: Donut
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saas-app/cards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saas-app/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// JuicySuite — SaaS App · components.jsx
// Core UI primitives. All cosmetic; loaded via Babel. No runtime icon deps.

const {
  useState
} = React;

// =============================================================
// ICONS — Lucide/Feather style, 2px stroke, round caps
// =============================================================
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icon = ({
  name,
  size = 18,
  ...rest
}) => {
  const paths = {
    plus: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })),
    edit: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    })),
    check: /*#__PURE__*/React.createElement("polyline", _extends({
      points: "20 6 9 17 4 12"
    }, stroke)),
    filter: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M6 12h12M10 18h4"
    })),
    search: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })),
    chevronDown: /*#__PURE__*/React.createElement("polyline", _extends({
      points: "6 9 12 15 18 9"
    }, stroke)),
    chevronRight: /*#__PURE__*/React.createElement("polyline", _extends({
      points: "9 18 15 12 9 6"
    }, stroke)),
    chevronLeft: /*#__PURE__*/React.createElement("polyline", _extends({
      points: "15 18 9 12 15 6"
    }, stroke)),
    users: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    star: /*#__PURE__*/React.createElement("polygon", _extends({}, stroke, {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    })),
    gift: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("polyline", {
      points: "20 12 20 22 4 22 4 12"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
    })),
    dollar: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "23"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
    })),
    home: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("path", {
      d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "9 22 9 12 15 12 15 22"
    })),
    chart: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "14"
    })),
    bell: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("path", {
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.73 21a2 2 0 0 1-3.46 0"
    })),
    settings: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
    })),
    trash: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 11v6M14 11v6"
    })),
    play: /*#__PURE__*/React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3",
      fill: "currentColor"
    }),
    moreH: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1"
    })),
    arrowUp: /*#__PURE__*/React.createElement("polyline", _extends({
      points: "6 14 12 8 18 14"
    }, stroke)),
    arrowDown: /*#__PURE__*/React.createElement("polyline", _extends({
      points: "6 10 12 16 18 10"
    }, stroke)),
    download: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    })),
    calendar: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    })),
    sparkle: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l1.9 5.5L19 10l-5.1 1.5L12 17l-1.9-5.5L5 10l5.1-1.5z"
    })),
    x: /*#__PURE__*/React.createElement("g", stroke, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24"
  }, rest), paths[name]);
};

// =============================================================
// BUTTONS
// =============================================================
const buttonBase = {
  height: 40,
  borderRadius: 9999,
  font: "600 14px Montserrat",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "0 24px",
  border: "none",
  transition: "all 150ms ease"
};
const Button = ({
  variant = "primary",
  size = "md",
  icon,
  children,
  onClick,
  style = {}
}) => {
  const variants = {
    primary: {
      background: "var(--gradient-sunset)",
      color: "#fff",
      boxShadow: "var(--shadow-cta)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)",
      fontWeight: 500,
      padding: "0 20px"
    },
    ghost: {
      background: "rgba(255,255,255,0.18)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.35)"
    }
  };
  const sizes = {
    md: {},
    sm: {
      height: 32,
      padding: "0 16px",
      fontSize: 13
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: `btn btn-${variant}`,
    style: {
      ...buttonBase,
      ...variants[variant],
      ...sizes[size],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: variant === "secondary" ? 14 : 16
  }), children);
};
const IconButton = ({
  name,
  onClick,
  size = 16,
  style = {}
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "1px solid var(--border-default)",
    background: "#fff",
    color: "var(--text-primary)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...style
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: name,
  size: size
}));
const TextLink = ({
  children,
  onClick,
  icon,
  destructive = false
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    color: destructive ? "#FF5C4C" : "var(--text-link)",
    font: "500 13px Montserrat",
    display: "inline-flex",
    alignItems: "center",
    gap: 4
  }
}, icon && /*#__PURE__*/React.createElement(Icon, {
  name: icon,
  size: 12
}), children);

// =============================================================
// BADGE
// =============================================================
const badgeStyles = {
  activated: {
    background: "#E8F8E8",
    color: "#00CE73"
  },
  unactivated: {
    background: "#FDE8E8",
    color: "#FF5C4C"
  },
  paused: {
    background: "#FFF3E0",
    color: "#B58400"
  },
  warning: {
    background: "#FFF3E0",
    color: "#B58400"
  },
  vip: {
    background: "#F0E6FF",
    color: "#8E44AD"
  },
  info: {
    background: "#E3F2FD",
    color: "#1FB5A4"
  },
  draft: {
    background: "#F0F2F7",
    color: "#7F8C8D"
  },
  neutral: {
    background: "#F0F2F7",
    color: "#7F8C8D"
  }
};
const Badge = ({
  kind = "draft",
  children
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    height: 26,
    borderRadius: 9999,
    padding: "0 12px",
    font: "600 12px Montserrat",
    display: "inline-flex",
    alignItems: "center",
    lineHeight: 1,
    ...badgeStyles[kind]
  }
}, children);

// Inline trend chip
const Trend = ({
  value,
  dir = "up"
}) => {
  const positive = dir === "up";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 11px Montserrat",
      color: positive ? "#00CE73" : "#FF5C4C",
      display: "inline-flex",
      alignItems: "center",
      gap: 2
    }
  }, positive ? "▲" : "▼", " ", value);
};

// =============================================================
// TOGGLE
// =============================================================
const Toggle = ({
  checked,
  onChange
}) => /*#__PURE__*/React.createElement("label", {
  style: {
    position: "relative",
    display: "inline-block",
    width: 44,
    height: 24,
    flexShrink: 0,
    cursor: "pointer"
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  checked: checked,
  onChange: e => onChange && onChange(e.target.checked),
  style: {
    opacity: 0,
    width: 0,
    height: 0
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    inset: 0,
    background: checked ? "#4CD964" : "#E0E0E0",
    borderRadius: 9999,
    transition: "background 200ms ease"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: 2,
    left: 2,
    width: 20,
    height: 20,
    background: "#fff",
    borderRadius: "50%",
    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
    transform: checked ? "translateX(20px)" : "translateX(0)",
    transition: "transform 200ms ease"
  }
}));

// =============================================================
// INPUTS
// =============================================================
const Input = ({
  value,
  onChange,
  placeholder,
  focused = false,
  style = {}
}) => /*#__PURE__*/React.createElement("input", {
  value: value,
  onChange: e => onChange && onChange(e.target.value),
  placeholder: placeholder,
  style: {
    background: "#fff",
    border: `1px solid ${focused ? "#F7607A" : "#E8ECF1"}`,
    borderRadius: 8,
    height: 40,
    padding: "0 14px",
    font: "400 14px Montserrat",
    color: "var(--text-primary)",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    ...style
  },
  onFocus: e => e.target.style.borderColor = "#F7607A",
  onBlur: e => e.target.style.borderColor = focused ? "#F7607A" : "#E8ECF1"
});
const SearchInput = ({
  value,
  onChange,
  placeholder = "Search…",
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    left: 14,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#7F8C8D",
    pointerEvents: "none",
    display: "flex"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "search",
  size: 16
})), /*#__PURE__*/React.createElement("input", {
  value: value,
  onChange: e => onChange && onChange(e.target.value),
  placeholder: placeholder,
  style: {
    background: "var(--surface-input)",
    border: "1px solid var(--border-default)",
    borderRadius: 9999,
    height: 40,
    padding: "0 16px 0 40px",
    font: "400 14px Montserrat",
    width: "100%",
    outline: "none",
    boxSizing: "border-box",
    color: "var(--text-primary)"
  },
  onFocus: e => e.target.style.borderColor = "#F7607A",
  onBlur: e => e.target.style.borderColor = "#E8ECF1"
}));

// =============================================================
// AVATAR
// =============================================================
const avatarGradients = ["linear-gradient(50deg, #FF761A 0%, #FFABE7 100%)", "linear-gradient(50deg, #37E4D2 0%, #00CE73 100%)", "linear-gradient(50deg, #FFABE7 0%, #904AA8 100%)", "linear-gradient(50deg, #F5D840 0%, #3DD2A4 100%)", "linear-gradient(50deg, #FF5E7C 0%, #FFB0C5 100%)"];
const Avatar = ({
  initials,
  size = 40,
  idx = 0
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    height: size,
    borderRadius: "50%",
    background: avatarGradients[idx % avatarGradients.length],
    color: "#fff",
    font: `700 ${Math.round(size * 0.36)}px Montserrat`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    letterSpacing: "-0.2px"
  }
}, initials);

// =============================================================
// SIDEBAR
// =============================================================
const navItems = [{
  id: "dashboard",
  icon: "home",
  label: "Dashboard"
}, {
  id: "members",
  icon: "users",
  label: "Members"
}, {
  id: "earning",
  icon: "gift",
  label: "Earning"
}, {
  id: "rewards",
  icon: "star",
  label: "Rewards"
}, {
  id: "reports",
  icon: "chart",
  label: "Reports"
}];
const navSecondary = [{
  id: "billing",
  icon: "dollar",
  label: "Billing"
}, {
  id: "settings",
  icon: "settings",
  label: "Settings"
}];
const Sidebar = ({
  active,
  onNav
}) => /*#__PURE__*/React.createElement("aside", {
  style: {
    width: 240,
    flexShrink: 0,
    background: "var(--gradient-sunset)",
    borderRadius: "0 20px 20px 0",
    padding: "28px 14px",
    boxShadow: "var(--shadow-sidebar)",
    color: "#fff",
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 4
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "0 10px 24px",
    display: "flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/juicysuite-wordmark-white.svg",
  alt: "JuicySuite",
  style: {
    height: 24
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "0 4px 16px",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    left: 18,
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(255,255,255,0.7)",
    pointerEvents: "none",
    display: "flex"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "search",
  size: 14
})), /*#__PURE__*/React.createElement("input", {
  placeholder: "Search\u2026",
  style: {
    width: "100%",
    boxSizing: "border-box",
    height: 36,
    borderRadius: 9999,
    background: "rgba(255,255,255,0.18)",
    border: "1px solid rgba(255,255,255,0.25)",
    padding: "0 14px 0 38px",
    color: "#fff",
    font: "400 13px Montserrat",
    outline: "none"
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 10px Montserrat",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.7)",
    padding: "8px 14px 6px"
  }
}, "Main"), navItems.map(item => /*#__PURE__*/React.createElement("button", {
  key: item.id,
  onClick: () => onNav(item.id),
  style: {
    all: "unset",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 14px",
    borderRadius: 8,
    cursor: "pointer",
    background: active === item.id ? "rgba(255,255,255,0.25)" : "transparent",
    color: "#fff",
    font: `${active === item.id ? 600 : 500} 14px Montserrat`,
    transition: "background 150ms ease"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: item.icon,
  size: 18
}), /*#__PURE__*/React.createElement("span", null, item.label))), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 1,
    background: "rgba(255,255,255,0.18)",
    margin: "16px 12px"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 10px Montserrat",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.7)",
    padding: "0 14px 6px"
  }
}, "Workspace"), navSecondary.map(item => /*#__PURE__*/React.createElement("button", {
  key: item.id,
  onClick: () => onNav(item.id),
  style: {
    all: "unset",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 14px",
    borderRadius: 8,
    cursor: "pointer",
    background: active === item.id ? "rgba(255,255,255,0.25)" : "transparent",
    color: "#fff",
    font: `${active === item.id ? 600 : 500} 14px Montserrat`
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: item.icon,
  size: 18
}), /*#__PURE__*/React.createElement("span", null, item.label))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: "auto",
    padding: 12,
    borderRadius: 12,
    background: "rgba(255,255,255,0.15)",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 11px Montserrat",
    marginBottom: 2
  }
}, "Growth plan"), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 11px Montserrat",
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.4
  }
}, "12,438 / 15,000 members"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    height: 4,
    background: "rgba(255,255,255,0.25)",
    borderRadius: 9999,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "83%",
    height: "100%",
    background: "#fff",
    borderRadius: 9999
  }
}))));

// =============================================================
// TOP HEADER
// =============================================================
const TopHeader = ({
  title,
  subtitle,
  actions,
  company = "Honeycomb Cafe",
  role = "Owner"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 88,
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "var(--surface-page)",
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "800 34px Montserrat",
    color: "var(--text-primary)",
    lineHeight: 1.1,
    letterSpacing: "-0.5px"
  }
}, title), subtitle && /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 14px Montserrat",
    color: "var(--text-secondary)",
    marginTop: 4
  }
}, subtitle)), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, actions, /*#__PURE__*/React.createElement(IconButton, {
  name: "bell",
  size: 16
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    borderRadius: 9999,
    padding: "6px 14px 6px 6px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: "HC",
  size: 32,
  idx: 0
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.1
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    font: "600 13px Montserrat",
    color: "var(--text-primary)"
  }
}, company), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "400 11px Montserrat",
    color: "var(--text-secondary)"
  }
}, role)), /*#__PURE__*/React.createElement(Icon, {
  name: "chevronDown",
  size: 14
}))));

// Export to global scope so other JSX files can use these
Object.assign(window, {
  JSIcon: Icon,
  JSButton: Button,
  JSIconButton: IconButton,
  JSTextLink: TextLink,
  JSBadge: Badge,
  JSTrend: Trend,
  JSToggle: Toggle,
  JSInput: Input,
  JSSearchInput: SearchInput,
  JSAvatar: Avatar,
  JSSidebar: Sidebar,
  JSTopHeader: TopHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saas-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saas-app/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// JuicySuite — SaaS App · screens.jsx
// DashboardScreen · MembersScreen · EarningScreen · RewardsScreen · ReportsScreen

const {
  useState
} = React;
const {
  JSIcon: Icon,
  JSButton: Button,
  JSIconButton: IconButton,
  JSTextLink: TextLink,
  JSBadge: Badge,
  JSTrend: Trend,
  JSToggle: Toggle,
  JSAvatar: Avatar,
  JSInput: Input,
  JSSearchInput: SearchInput,
  JSCard: Card,
  JSKPICard: KPICard,
  JSMemberRow: MemberRow,
  JSCampaignCard: CampaignCard,
  JSPromoBanner: PromoBanner,
  JSMiniChart: MiniChart,
  JSBarChart: BarChart,
  JSDonut: Donut
} = window;

// =============================================================
// DASHBOARD
// =============================================================
const DashboardScreen = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "0 32px 56px",
    display: "flex",
    flexDirection: "column",
    gap: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 16
  }
}, /*#__PURE__*/React.createElement(KPICard, {
  icon: "users",
  color: "orange",
  value: "12,438",
  label: "Members",
  trend: "12%"
}), /*#__PURE__*/React.createElement(KPICard, {
  icon: "star",
  color: "coral",
  value: "284K",
  label: "Points",
  trend: "8%"
}), /*#__PURE__*/React.createElement(KPICard, {
  icon: "check",
  color: "green",
  value: "1,892",
  label: "Redeemed",
  trend: "4%"
}), /*#__PURE__*/React.createElement(KPICard, {
  icon: "dollar",
  color: "purple",
  value: "$48K",
  label: "Revenue",
  trend: "2%",
  trendDir: "down"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement(Card, {
  padding: 24
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 15px Montserrat",
    color: "var(--text-primary)"
  }
}, "Member growth"), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 12px Montserrat",
    color: "var(--text-secondary)",
    marginTop: 2
  }
}, "Cumulative active members over the last 30 days")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    font: "600 10px Montserrat",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "var(--text-secondary)",
    padding: "6px 12px",
    borderRadius: 9999,
    background: "var(--surface-input)"
  }
}, "30D"), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "600 10px Montserrat",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 9999,
    background: "var(--gradient-sunset)"
  }
}, "90D"))), /*#__PURE__*/React.createElement(MiniChart, {
  data: [110, 100, 105, 88, 75, 80, 60, 50, 35, 25, 20],
  height: 180
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 8
  }
}, ["Apr 26", "May 2", "May 8", "May 14", "May 20", "May 26"].map(d => /*#__PURE__*/React.createElement("span", {
  key: d,
  style: {
    font: "400 11px Montserrat",
    color: "var(--text-secondary)"
  }
}, d)))), /*#__PURE__*/React.createElement(Card, {
  padding: 24
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 15px Montserrat",
    color: "var(--text-primary)",
    marginBottom: 4
  }
}, "Member tiers"), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 12px Montserrat",
    color: "var(--text-secondary)",
    marginBottom: 18
  }
}, "Active member distribution"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 20
  }
}, /*#__PURE__*/React.createElement(Donut, {
  center: {
    value: "12.4K",
    label: "Total"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flex: 1
  }
}, [{
  color: "#FF761A",
  label: "Standard",
  value: "56%"
}, {
  color: "#F7607A",
  label: "Frequent",
  value: "24%"
}, {
  color: "#FFDA2B",
  label: "VIP",
  value: "12%"
}, {
  color: "#37E4D2",
  label: "New",
  value: "8%"
}].map(s => /*#__PURE__*/React.createElement("div", {
  key: s.label,
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: s.color,
    flexShrink: 0
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "500 12px Montserrat",
    color: "var(--text-primary)",
    flex: 1
  }
}, s.label), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "600 12px Montserrat",
    color: "var(--text-secondary)"
  }
}, s.value))))))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement(PromoBanner, {
  eyebrow: "Quick Start",
  title: "Watch a 2-minute tour",
  body: "Set up your first loyalty campaign in minutes."
}), /*#__PURE__*/React.createElement(Card, {
  padding: 24
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 18
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 15px Montserrat",
    color: "var(--text-primary)"
  }
}, "Redemptions by day"), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 12px Montserrat",
    color: "var(--text-secondary)",
    marginTop: 2
  }
}, "Thursday peaks 41% above weekly average")), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "600 10px Montserrat",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "var(--text-secondary)"
  }
}, "Last Week")), /*#__PURE__*/React.createElement(BarChart, null))), /*#__PURE__*/React.createElement(Card, {
  padding: 24
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 18
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "600 15px Montserrat",
    color: "var(--text-primary)"
  }
}, "Recent activity"), /*#__PURE__*/React.createElement(TextLink, null, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 0
  }
}, [{
  initials: "AL",
  idx: 0,
  name: "Alice Lim",
  action: "redeemed",
  obj: "Free coffee",
  time: "2m ago",
  points: "−180"
}, {
  initials: "BK",
  idx: 1,
  name: "Bryan Koh",
  action: "earned",
  obj: "Birthday bonus",
  time: "14m ago",
  points: "+200"
}, {
  initials: "CN",
  idx: 2,
  name: "Cheng Nguyen",
  action: "joined",
  obj: "as a new member",
  time: "1h ago",
  points: "+50"
}, {
  initials: "DR",
  idx: 3,
  name: "Daniel Reyes",
  action: "upgraded",
  obj: "to VIP tier",
  time: "3h ago",
  points: "+0"
}, {
  initials: "ET",
  idx: 4,
  name: "Esther Tan",
  action: "earned",
  obj: "Visit reward",
  time: "5h ago",
  points: "+25"
}].map((a, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "12px 0",
    borderBottom: i < 4 ? "1px solid var(--border-subtle)" : "none"
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: a.initials,
  idx: a.idx,
  size: 36
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 13px Montserrat",
    color: "var(--text-primary)"
  }
}, /*#__PURE__*/React.createElement("strong", {
  style: {
    fontWeight: 600
  }
}, a.name), " ", a.action, " ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--text-secondary)"
  }
}, a.obj)), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 11px Montserrat",
    color: "var(--text-secondary)",
    marginTop: 2
  }
}, a.time)), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "600 13px Montserrat",
    color: a.points.startsWith("+") ? "#00CE73" : a.points.startsWith("−") ? "#FF5C4C" : "var(--text-secondary)"
  }
}, a.points, " pts"))))));

// =============================================================
// MEMBERS
// =============================================================
const memberSeed = [{
  initials: "AL",
  idx: 0,
  name: "Alice Lim",
  id: "00272400000004",
  points: 1840,
  status: {
    kind: "activated",
    label: "Activated"
  }
}, {
  initials: "BK",
  idx: 1,
  name: "Bryan Koh",
  id: "00272400000005",
  points: 4220,
  status: {
    kind: "vip",
    label: "VIP"
  }
}, {
  initials: "CN",
  idx: 2,
  name: "Cheng Nguyen",
  id: "00272400000006",
  points: 120,
  status: {
    kind: "unactivated",
    label: "Unactivated"
  }
}, {
  initials: "DR",
  idx: 3,
  name: "Daniel Reyes",
  id: "00272400000007",
  points: 2950,
  status: {
    kind: "activated",
    label: "Activated"
  }
}, {
  initials: "ET",
  idx: 4,
  name: "Esther Tan",
  id: "00272400000008",
  points: 680,
  status: {
    kind: "activated",
    label: "Activated"
  }
}, {
  initials: "FW",
  idx: 0,
  name: "Fenton Wong",
  id: "00272400000009",
  points: 90,
  status: {
    kind: "paused",
    label: "Paused"
  }
}, {
  initials: "GS",
  idx: 1,
  name: "Grace Suen",
  id: "00272400000010",
  points: 5240,
  status: {
    kind: "vip",
    label: "VIP"
  }
}, {
  initials: "HC",
  idx: 2,
  name: "Harold Chen",
  id: "00272400000011",
  points: 410,
  status: {
    kind: "draft",
    label: "Draft"
  }
}];
const MembersScreen = () => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const tabs = [{
    id: "all",
    label: "All members",
    count: 12438
  }, {
    id: "activated",
    label: "Activated",
    count: 9120
  }, {
    id: "vip",
    label: "VIP",
    count: 482
  }, {
    id: "unactivated",
    label: "Unactivated",
    count: 2836
  }];
  const filtered = memberSeed.filter(m => tab === "all" ? true : m.status.kind === tab).filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.id.includes(search));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 56px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    value: search,
    onChange: setSearch,
    placeholder: "Search by name or member ID\u2026",
    style: {
      flex: 1,
      maxWidth: 360
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "filter"
  }, "Filter"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Export"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "New member")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 18,
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 16
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      all: "unset",
      cursor: "pointer",
      padding: "8px 16px",
      borderRadius: 9999,
      font: `${tab === t.id ? 600 : 500} 13px Montserrat`,
      background: tab === t.id ? "var(--gradient-sunset)" : "transparent",
      color: tab === t.id ? "#fff" : "var(--text-primary)",
      boxShadow: tab === t.id ? "0 2px 8px rgba(255,118,26,0.25)" : "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, t.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 11px Montserrat",
      color: tab === t.id ? "rgba(255,255,255,0.85)" : "var(--text-secondary)",
      background: tab === t.id ? "rgba(255,255,255,0.2)" : "var(--bg-neutral)",
      padding: "1px 8px",
      borderRadius: 9999
    }
  }, t.count.toLocaleString()))))), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px Montserrat",
      color: "var(--text-primary)"
    }
  }, "Members"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px Montserrat",
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, "Showing ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, filtered.length), " of ", memberSeed.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      font: "500 10px Montserrat",
      letterSpacing: 1,
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Sort: Joined \u2193"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, filtered.map(m => /*#__PURE__*/React.createElement(MemberRow, _extends({
    key: m.id
  }, m, {
    onEdit: () => {}
  }))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: "center",
      color: "var(--text-secondary)",
      font: "400 13px Montserrat"
    }
  }, "No members match this filter.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16,
      paddingTop: 16,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px Montserrat",
      color: "var(--text-secondary)"
    }
  }, "Page 1 of 156"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "chevronLeft",
    size: 14
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "chevronRight",
    size: 14
  })))));
};

// =============================================================
// EARNING (campaigns)
// =============================================================
const initialCampaigns = [{
  id: 1,
  title: "Spring Birthday Bonus",
  active: true,
  period: "Apr 1 – May 31, 2026 · 142 redemptions",
  description: "Members earn double points on birthday week. Auto-applies based on registered DOB with no manual claim required. Currently active and performing 23% above projection.",
  stats: [{
    value: "142",
    label: "Redemptions",
    trend: "23%",
    trendDir: "up"
  }, {
    value: "$3.4K",
    label: "Revenue lift",
    trend: "18%",
    trendDir: "up"
  }, {
    value: "4.8★",
    label: "Member rating"
  }]
}, {
  id: 2,
  title: "Weekday Coffee Run",
  active: true,
  period: "Recurring · Mon–Thu, 7am–11am",
  description: "1.5× points on coffee orders during the morning rush. Encourages weekday repeat visits.",
  stats: [{
    value: "1,284",
    label: "Redemptions",
    trend: "9%",
    trendDir: "up"
  }, {
    value: "$8.1K",
    label: "Revenue lift",
    trend: "5%",
    trendDir: "up"
  }]
}, {
  id: 3,
  title: "Referral Reward",
  active: false,
  period: "Ended Apr 12, 2026 · 87 referrals",
  description: "50 bonus points to both members for each successful referral. Paused pending review of cost-per-acquisition."
}, {
  id: 4,
  title: "VIP Anniversary Surprise",
  active: true,
  period: "Year-round · automatic",
  description: "Sends a free dessert reward on each VIP member's signup anniversary. Low-frequency, high-delight."
}];
const EarningScreen = () => {
  const [camps, setCamps] = useState(initialCampaigns);
  const [features, setFeatures] = useState({
    profile: true,
    visits: false,
    referrals: true,
    birthdays: true
  });
  const toggleCamp = id => setCamps(c => c.map(x => x.id === id ? {
    ...x,
    active: !x.active
  } : x));
  const toggleFeat = k => setFeatures(f => ({
    ...f,
    [k]: !f[k]
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 56px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search campaigns\u2026",
    style: {
      maxWidth: 360
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "filter"
  }, "Status"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "calendar"
  }, "Date range"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Add Campaign")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, camps.map(c => /*#__PURE__*/React.createElement(CampaignCard, _extends({
    key: c.id
  }, c, {
    onToggle: () => toggleCamp(c.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px Montserrat",
      color: "var(--text-primary)",
      marginBottom: 4
    }
  }, "Earning features"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px Montserrat",
      color: "var(--text-secondary)",
      marginBottom: 18
    }
  }, "Global toggles applied to all members"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, [{
    k: "profile",
    title: "Complete profile bonus",
    desc: "100 points when members complete their profile"
  }, {
    k: "visits",
    title: "Visit count tracking",
    desc: "Track repeat visits and tier rewards"
  }, {
    k: "referrals",
    title: "Referral rewards",
    desc: "50 points per successful referral"
  }, {
    k: "birthdays",
    title: "Birthday rewards",
    desc: "Auto-apply based on registered DOB"
  }].map(f => /*#__PURE__*/React.createElement("div", {
    key: f.k,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: features[f.k],
    onChange: () => toggleFeat(f.k)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 14px Montserrat",
      color: "var(--text-primary)"
    }
  }, f.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px Montserrat",
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, f.desc)))))), /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px Montserrat",
      color: "var(--text-primary)",
      marginBottom: 16
    }
  }, "This month"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 12px Montserrat",
      color: "var(--text-secondary)"
    }
  }, "Points awarded"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 22px Montserrat",
      color: "var(--text-primary)"
    }
  }, "284,210")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 12px Montserrat",
      color: "var(--text-secondary)"
    }
  }, "Avg points / member"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 22px Montserrat",
      color: "var(--text-primary)"
    }
  }, "23")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 12px Montserrat",
      color: "var(--text-secondary)"
    }
  }, "Cost per acquisition"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 22px Montserrat",
      color: "var(--text-primary)"
    }
  }, "$1.84"), /*#__PURE__*/React.createElement(Trend, {
    value: "6%",
    dir: "down"
  }))))))));
};

// =============================================================
// Simple Rewards / Reports stubs for sidebar nav completeness
// =============================================================
const PlaceholderScreen = ({
  title,
  body
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "0 32px 56px"
  }
}, /*#__PURE__*/React.createElement(Card, {
  padding: 48
}, /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center",
    maxWidth: 480,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "var(--gradient-sunset)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    boxShadow: "var(--shadow-cta)"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "sparkle",
  size: 24,
  style: {
    color: "#fff"
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "800 22px Montserrat",
    color: "var(--text-primary)",
    marginBottom: 8
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    font: "400 14px Montserrat",
    color: "var(--text-secondary)",
    lineHeight: 1.55
  }
}, body), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 22
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  icon: "plus"
}, "Get started")))));
const RewardsScreen = () => /*#__PURE__*/React.createElement(PlaceholderScreen, {
  title: "Rewards catalog",
  body: "Curate the rewards members can redeem with their points. Coming up next \u2014 drop in your first reward to seed the catalog."
});
const ReportsScreen = () => /*#__PURE__*/React.createElement(PlaceholderScreen, {
  title: "Reports",
  body: "Deep-dive analytics on member lifetime value, redemption mix, and campaign ROI. Pick a date range to build your first report."
});
const BillingScreen = () => /*#__PURE__*/React.createElement(PlaceholderScreen, {
  title: "Billing",
  body: "Plan, usage, and invoicing for your JuicySuite workspace."
});
const SettingsScreen = () => /*#__PURE__*/React.createElement(PlaceholderScreen, {
  title: "Workspace settings",
  body: "Team members, integrations, brand styling and notification rules."
});
Object.assign(window, {
  DashboardScreen,
  MembersScreen,
  EarningScreen,
  RewardsScreen,
  ReportsScreen,
  BillingScreen,
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saas-app/screens.jsx", error: String((e && e.message) || e) }); }

})();
