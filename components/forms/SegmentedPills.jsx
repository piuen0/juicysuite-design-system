import React from "react";

export function SegmentedPills({ options = [], value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {options.map(o => {
        const on = o === value;
        return (
          <button key={o} type="button" onClick={() => onChange && onChange(o)} style={{
            border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600,
            letterSpacing: 1, textTransform: "uppercase", padding: "6px 12px", borderRadius: 9999,
            color: on ? "#fff" : "var(--text-secondary)", background: on ? "var(--gradient-sunset)" : "var(--surface-input)",
          }}>{o}</button>
        );
      })}
    </div>
  );
}
