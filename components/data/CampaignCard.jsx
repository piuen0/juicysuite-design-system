import React from "react";
import { Toggle } from "../forms/Toggle.jsx";
import { TextLink } from "../core/TextLink.jsx";
import { Trend } from "../core/Trend.jsx";

export function CampaignCard({ title, period, description, active = false, onToggle, stats, onEdit, onMore }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: 22, boxShadow: "var(--shadow-sm)", fontFamily: "var(--font-sans)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
        <Toggle checked={active} onChange={onToggle} />
        <div style={{ flex: 1, minWidth: 0, fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{title}</div>
        <div style={{ display: "flex", gap: 16 }}>
          <TextLink icon="edit" onClick={onEdit}>Edit</TextLink>
          <TextLink onClick={onMore}>Show More →</TextLink>
        </div>
      </div>
      {period && <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 14 }}>{period}</div>}
      {description && <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.55 }}>{description}</div>}
      {stats && stats.length > 0 && (
        <div style={{ display: "flex", gap: 28, marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--border-subtle)", flexWrap: "wrap" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)" }}>{s.value}</span>
                {s.trend && <Trend value={s.trend} dir={s.trendDir} />}
              </div>
              <div style={{ fontSize: 11, fontWeight: 500, color: "var(--text-secondary)", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
