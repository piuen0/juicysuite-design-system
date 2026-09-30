// JuicySuite — Marketing · compositions.jsx
// Hero · Poster · Tier card · Feature banner — built from shapes.jsx primitives.

const {
  Marble, DropTall, DropShort, Ellipse,
  StoneRound, StoneTilt, StoneWide, StoneBloom,
  gradientCss,
} = window;

// Logo bar — pulls the wordmark from /assets
const LogoBar = ({ color = "white" }) => (
  <img src={`../../assets/juicysuite-wordmark-${color === "white" ? "white" : "orange"}.svg`} alt="JuicySuite" style={{ height: 28 }} />
);

// ---------------------------------------------------------
// SOLO HERO — one Stone · Bloom on a calm canvas
// ---------------------------------------------------------
const SoloHero = ({
  eyebrow = "Loyalty, made warm",
  title = "Turn one-time visitors into regulars.",
  body = "JuicySuite gives small operators an enterprise-grade loyalty program, in an afternoon.",
  cta = "Get started — it's free",
}) => (
  <div style={{
    position: "relative", width: "100%", aspectRatio: "1.414 / 1",
    background: "#FFF8F2", borderRadius: 20, overflow: "hidden",
    display: "flex", flexDirection: "column", justifyContent: "space-between",
    padding: 56,
  }}>
    {/* Bloom signature shape, bleeds top-right */}
    <StoneBloom size={620} grad="sunset" style={{ position: "absolute", top: "-12%", right: "-14%", filter: "drop-shadow(0 20px 60px rgba(255,118,26,0.25))" }} />
    {/* Mist marble anchor, bottom-left */}
    <Marble size={150} grad="mist" style={{ position: "absolute", bottom: "-8%", left: "-5%", boxShadow: "0 16px 32px rgba(93,219,200,0.25)" }} />

    {/* Foreground content */}
    <div style={{ position: "relative", zIndex: 2 }}>
      <LogoBar color="orange" />
    </div>
    <div style={{ position: "relative", zIndex: 2, maxWidth: "60%" }}>
      <div style={{ font: "600 12px Montserrat", letterSpacing: 2, textTransform: "uppercase", color: "#FF761A", marginBottom: 14 }}>{eyebrow}</div>
      <div style={{ font: "800 56px Montserrat", color: "#5E555A", letterSpacing: "-1.2px", lineHeight: 1.05, marginBottom: 18, textWrap: "balance" }}>{title}</div>
      <div style={{ font: "400 17px Montserrat", color: "#7F8C8D", lineHeight: 1.5, maxWidth: 480, marginBottom: 24 }}>{body}</div>
      <button style={{
        background: gradientCss.sunset, color: "#fff", border: "none", borderRadius: 9999,
        padding: "14px 28px", font: "600 15px Montserrat", cursor: "pointer",
        boxShadow: "0 4px 12px rgba(255,118,26,0.3)",
      }}>{cta}</button>
    </div>
  </div>
);

// ---------------------------------------------------------
// DUO HERO — TR↔BL diagonal · warm bg + cool focal
// ---------------------------------------------------------
const DuoHero = ({
  eyebrow = "Spring 2026",
  title = "Double points all of birthday week.",
  body = "Every member, every year — automatically.",
}) => (
  <div style={{
    position: "relative", width: "100%", aspectRatio: "1 / 1.414",
    background: gradientCss.sunset, borderRadius: 20, overflow: "hidden",
    padding: 44, display: "flex", flexDirection: "column", justifyContent: "space-between",
  }}>
    {/* Cool focal — Mist marble TR */}
    <Marble size={420} grad="mist" style={{ position: "absolute", top: "-12%", right: "-18%", boxShadow: "0 18px 40px rgba(0,0,0,0.18)" }} />
    {/* Smaller anchor — Citrus drop BL */}
    <DropShort width={160} grad="citrus" style={{ position: "absolute", bottom: "-6%", left: "-6%", boxShadow: "0 12px 28px rgba(0,0,0,0.16)" }} />

    <div style={{ position: "relative", zIndex: 2 }}>
      <LogoBar color="white" />
    </div>
    <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
      <div style={{ font: "600 11px Montserrat", letterSpacing: 2, textTransform: "uppercase", opacity: 0.9, marginBottom: 14 }}>{eyebrow}</div>
      <div style={{ font: "800 42px Montserrat", letterSpacing: "-0.8px", lineHeight: 1.05, marginBottom: 14, textWrap: "balance" }}>{title}</div>
      <div style={{ font: "400 15px Montserrat", opacity: 0.95, lineHeight: 1.55, maxWidth: 320 }}>{body}</div>
    </div>
  </div>
);

// ---------------------------------------------------------
// STACK POSTER — tangent Marbles, single gradient
// ---------------------------------------------------------
const StackPoster = ({
  eyebrow = "Citrus drop",
  title = "Fresh perks, weekly.",
  body = "A new reward in your inbox every Monday morning.",
}) => (
  <div style={{
    position: "relative", width: "100%", aspectRatio: "1 / 1.414",
    background: "#20CC76", borderRadius: 20, overflow: "hidden",
  }}>
    {/* 3 marbles tangent along vertical centre axis */}
    {[0, 50, 100].map(top => (
      <div key={top} style={{
        position: "absolute", left: "50%", top: `${top}%`,
        transform: "translate(-50%, -50%)",
        width: "70.7%", aspectRatio: 1, borderRadius: "50%",
        background: "linear-gradient(50deg, #43E3D2 0%, #FDADE6 100%)",
      }}></div>
    ))}
    {/* Foreground text panel */}
    <div style={{ position: "absolute", inset: 0, padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 2 }}>
      <LogoBar color="white" />
      <div style={{ color: "#fff", maxWidth: "75%" }}>
        <div style={{ font: "600 11px Montserrat", letterSpacing: 2, textTransform: "uppercase", opacity: 0.9, marginBottom: 12 }}>{eyebrow}</div>
        <div style={{ font: "800 36px Montserrat", letterSpacing: "-0.6px", lineHeight: 1.05, marginBottom: 12, textShadow: "0 1px 8px rgba(0,0,0,0.15)" }}>{title}</div>
        <div style={{ font: "400 14px Montserrat", opacity: 0.95, lineHeight: 1.55, textShadow: "0 1px 6px rgba(0,0,0,0.15)" }}>{body}</div>
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------
// TIER CARDS — VIP / Standard / New
// ---------------------------------------------------------
const tierStyles = {
  VIP:      { grad: "mist",    eyebrow: "Tier · Premium", title: "VIP",      body: "Members spending $1K+ a year",  perk: "2× points · early access" },
  Standard: { grad: "sunset",  eyebrow: "Tier · Core",    title: "Standard", body: "All registered members",         perk: "1× points · seasonal perks" },
  New:      { grad: "citrus",  eyebrow: "Tier · Welcome", title: "New",      body: "First 30 days after signup",     perk: "Welcome bonus · 100 pts" },
};
const TierCard = ({ kind = "Standard" }) => {
  const t = tierStyles[kind];
  return (
    <div style={{
      position: "relative", aspectRatio: "1 / 1.2",
      background: "#FFFFFF", borderRadius: 20, overflow: "hidden",
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: 28,
    }}>
      {/* Tier silhouette — Stone Round, blooms behind */}
      <StoneRound size={300} grad={t.grad} style={{ position: "absolute", top: "-22%", right: "-22%" }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ font: "600 10px Montserrat", letterSpacing: 1.5, textTransform: "uppercase", color: "#7F8C8D", marginBottom: 8 }}>{t.eyebrow}</div>
        <div style={{ font: "800 32px Montserrat", color: "#5E555A", letterSpacing: "-0.5px" }}>{t.title}</div>
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ font: "400 13px Montserrat", color: "#7F8C8D", lineHeight: 1.5, marginBottom: 10 }}>{t.body}</div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "rgba(94,85,90,0.08)", borderRadius: 9999, font: "600 12px Montserrat", color: "#5E555A" }}>
          ★ {t.perk}
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// FEATURE BANNER — horizontal Sunset banner with bleeding Bloom
// ---------------------------------------------------------
const FeatureBanner = ({
  eyebrow = "What's new",
  title = "Birthday rewards, on autopilot.",
  body = "Set a rule once. JuicySuite handles birthday recognition, points awards, and follow-up — for every member, forever.",
}) => (
  <div style={{
    position: "relative", width: "100%", aspectRatio: "2.5 / 1",
    background: gradientCss.sunset, borderRadius: 20, overflow: "hidden",
    padding: "40px 48px", color: "#fff",
    display: "flex", flexDirection: "column", justifyContent: "space-between",
    boxShadow: "0 12px 36px rgba(255,118,26,0.28)",
  }}>
    <StoneBloom size={420} grad="blossom" style={{ position: "absolute", top: "-30%", right: "-10%", opacity: 0.85 }} />
    <DropShort width={120} grad="mist" style={{ position: "absolute", bottom: "-12%", right: "20%", opacity: 0.9 }} />

    <div style={{ position: "relative", zIndex: 2, maxWidth: "62%" }}>
      <div style={{ font: "600 11px Montserrat", letterSpacing: 2, textTransform: "uppercase", opacity: 0.92, marginBottom: 12 }}>{eyebrow}</div>
      <div style={{ font: "800 32px Montserrat", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 10, textWrap: "balance" }}>{title}</div>
      <div style={{ font: "400 14px Montserrat", opacity: 0.95, lineHeight: 1.55 }}>{body}</div>
    </div>

    <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <LogoBar color="white" />
      <button style={{
        background: "rgba(255,255,255,0.22)", color: "#fff",
        border: "1px solid rgba(255,255,255,0.4)", borderRadius: 9999,
        padding: "12px 22px", font: "600 13px Montserrat", cursor: "pointer",
      }}>Read the launch note →</button>
    </div>
  </div>
);

Object.assign(window, {
  LogoBar, SoloHero, DuoHero, StackPoster, TierCard, FeatureBanner,
});
