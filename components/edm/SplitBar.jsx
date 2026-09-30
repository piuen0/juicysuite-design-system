import React from "react";

export function SplitBar({ segments = [], height = 22, gap = 6 }) {
  return (
    <div style={{ display: "flex", gap, height }}>
      {segments.map((s, i) => <div key={i} style={{ width: s.pct + "%", height: "100%", borderRadius: 9999, background: s.background }}></div>)}
    </div>
  );
}
