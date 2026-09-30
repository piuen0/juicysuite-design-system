import React from "react";

export function BarChart({ data = [40, 65, 55, 85, 70, 45, 30], labels = ["M", "T", "W", "T", "F", "S", "S"], highlight = 3, height = 160 }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height }}>
      {data.map((v, i) => {
        const hi = i === highlight;
        return (
          <div key={i} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 10 }}>
            <div style={{ width: "100%", height: v + "%", background: hi ? "#FF761A" : "rgba(255,118,26,0.55)", borderRadius: "6px 6px 0 0", boxShadow: hi ? "0 1px 3px rgba(255,118,26,0.3)" : "none" }}></div>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: hi ? 600 : 400, color: hi ? "var(--text-primary)" : "var(--text-secondary)" }}>{labels[i]}</span>
          </div>
        );
      })}
    </div>
  );
}
