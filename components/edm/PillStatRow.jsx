import React from "react";

const GRADS = { pink: "var(--gradient-edm-pink)", coral: "var(--gradient-edm-coral)", aqua: "var(--gradient-edm-aqua)" };

export function PillStatRow({ label, value, gradient = "coral", size = "md" }) {
  const lg = size === "lg";
  return (
    <div style={{ background: "var(--surface-cream-row)", borderRadius: 9999, padding: lg ? "12px 14px 12px 24px" : "10px 12px 10px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, fontFamily: "var(--font-sans)" }}>
      <div style={{ fontSize: lg ? 20 : 14, fontWeight: 600, color: "var(--text-edm)" }}>{label}</div>
      <div style={{ background: GRADS[gradient] || gradient, borderRadius: 9999, padding: lg ? "12px 24px" : "8px 18px", minWidth: lg ? 54 : 48, textAlign: "center", fontSize: lg ? 30 : 22, fontWeight: 700, color: "var(--text-edm)", lineHeight: 1.1 }}>{value}</div>
    </div>
  );
}
