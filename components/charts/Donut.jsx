import React from "react";

const DEFAULT = [
  { value: 56, color: "#FF761A", label: "Standard" },
  { value: 24, color: "#F7607A", label: "Frequent" },
  { value: 12, color: "#FFDA2B", label: "VIP" },
  { value: 8, color: "#37E4D2", label: "New" },
];

export function Donut({ segments = DEFAULT, center, size = 180 }) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const r = 70, c = 90, circ = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox="0 0 180 180">
        <circle cx={c} cy={c} r={r} fill="none" stroke="#F0F2F7" strokeWidth="16" />
        {segments.map((s, i) => {
          const len = (s.value / total) * circ;
          const el = <circle key={i} cx={c} cy={c} r={r} fill="none" stroke={s.color} strokeWidth="16"
            strokeDasharray={len + " " + (circ - len)} strokeDashoffset={circ - acc} transform={"rotate(-90 " + c + " " + c + ")"} strokeLinecap="round" />;
          acc += len;
          return el;
        })}
      </svg>
      {center && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>{center.value}</div>
          <div style={{ fontSize: 11, fontWeight: 500, color: "var(--text-secondary)", marginTop: 4 }}>{center.label}</div>
        </div>
      )}
    </div>
  );
}

export function DonutLegend({ segments = DEFAULT }) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, fontFamily: "var(--font-sans)" }}>
      {segments.map(s => (
        <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }}></span>
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)", flex: 1 }}>{s.label}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>{Math.round((s.value / total) * 100)}%</span>
        </div>
      ))}
    </div>
  );
}
