import React from "react";
import { Icon } from "../core/Icon.jsx";

export function PromoBanner({ eyebrow, title, body, ctaLabel = "Play", onCta }) {
  return (
    <div style={{
      background: "var(--gradient-sunset)", borderRadius: 16, padding: "22px 26px", color: "#fff", boxShadow: "var(--shadow-cta)",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, fontFamily: "var(--font-sans)",
    }}>
      <div style={{ minWidth: 0 }}>
        {eyebrow && <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, opacity: 0.9, marginBottom: 6 }}>{eyebrow}</div>}
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{title}</div>
        {body && <div style={{ fontSize: 13, opacity: 0.95 }}>{body}</div>}
      </div>
      <button type="button" onClick={onCta} style={{
        background: "rgba(255,255,255,0.22)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 9999,
        padding: "10px 20px", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0,
      }}>
        <Icon name="play" size={11} />{ctaLabel}
      </button>
    </div>
  );
}
