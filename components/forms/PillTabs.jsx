import React from "react";

export function PillTabs({ tabs = [], value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {tabs.map(t => {
        const on = t.id === value;
        return (
          <button key={t.id} type="button" onClick={() => onChange && onChange(t.id)} style={{
            border: "none", cursor: "pointer", padding: "8px 16px", borderRadius: 9999,
            fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: on ? 600 : 500,
            background: on ? "var(--gradient-sunset)" : "transparent",
            color: on ? "#fff" : "var(--text-primary)",
            boxShadow: on ? "0 2px 8px rgba(255,118,26,0.25)" : "none",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <span>{t.label}</span>
            {t.count != null && (
              <span style={{
                fontSize: 11, fontWeight: 600, padding: "1px 8px", borderRadius: 9999,
                color: on ? "rgba(255,255,255,0.85)" : "var(--text-secondary)",
                background: on ? "rgba(255,255,255,0.2)" : "var(--bg-neutral)",
              }}>{typeof t.count === "number" ? t.count.toLocaleString() : t.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
