import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Trend } from "../core/Trend.jsx";

const PAL = {
  orange: { bg: "var(--bg-kpi-orange)", fg: "var(--accent-secondary)" },
  coral: { bg: "var(--bg-kpi-coral)", fg: "var(--accent-primary)" },
  green: { bg: "var(--bg-kpi-green)", fg: "var(--status-success)" },
  purple: { bg: "var(--bg-kpi-purple)", fg: "var(--status-vip)" },
};

export function KPICard({ icon = "users", color = "orange", value, label, trend, trendDir = "up", style }) {
  const p = PAL[color];
  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: 18, flex: 1, minWidth: 0, boxShadow: "var(--shadow-xs)", display: "flex", alignItems: "center", gap: 14, boxSizing: "border-box", ...style }}>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: p.bg, color: p.fg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name={icon} size={20} />
      </div>
      <div style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-sans)" }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>{value}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: "var(--text-secondary)" }}>{label}</span>
          {trend && <Trend value={trend} dir={trendDir} />}
        </div>
      </div>
    </div>
  );
}
