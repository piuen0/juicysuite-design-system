import React from "react";

export function Trend({ value, dir = "up", style }) {
  const up = dir === "up";
  return (
    <span style={{
      fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, whiteSpace: "nowrap",
      color: up ? "var(--status-success)" : "var(--status-error)",
      display: "inline-flex", alignItems: "center", gap: 2, ...style,
    }}>{up ? "▲" : "▼"} {value}</span>
  );
}
