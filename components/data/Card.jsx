import React from "react";

export function Card({ children, padding = 24, radius = 16, hoverable = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-card)", borderRadius: radius, padding, boxSizing: "border-box",
        boxShadow: hoverable && hover ? "var(--shadow-md)" : "var(--shadow-sm)", transition: "box-shadow 200ms ease",
        cursor: onClick ? "pointer" : undefined, ...style,
      }}>{children}</div>
  );
}

export function CardHeader({ title, subtitle, right }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{title}</div>
        {subtitle && <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>{subtitle}</div>}
      </div>
      {right}
    </div>
  );
}
