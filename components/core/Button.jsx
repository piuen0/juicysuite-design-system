import React from "react";
import { Icon } from "./Icon.jsx";

const BASE = {
  height: 40, borderRadius: 9999, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, cursor: "pointer",
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0 24px",
  border: "none", transition: "all 150ms ease", whiteSpace: "nowrap", boxSizing: "border-box",
};
const VARIANTS = {
  primary: { background: "var(--gradient-sunset)", color: "#fff", boxShadow: "var(--shadow-cta)" },
  secondary: { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-default)", fontWeight: 500, padding: "0 20px" },
  ghost: { background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)" },
};
const HOVER = {
  primary: { transform: "translateY(-1px)", boxShadow: "var(--shadow-cta-hover)" },
  secondary: { background: "var(--surface-hover)", borderColor: "var(--accent-primary)" },
  ghost: { background: "rgba(255,255,255,0.28)" },
};
const SIZES = { md: {}, sm: { height: 32, padding: "0 16px", fontSize: 13 } };

export function Button({ variant = "primary", size = "md", icon, disabled = false, children, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return (
    <button
      type="button" disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        ...BASE, ...VARIANTS[variant], ...SIZES[size],
        ...(hover && !disabled ? HOVER[variant] : null),
        ...(press && !disabled ? { opacity: 0.95, transform: "scale(0.98)" } : null),
        ...(disabled ? { opacity: 0.45, cursor: "not-allowed", boxShadow: "none" } : null),
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={variant === "secondary" ? 14 : 16} />}
      {children}
    </button>
  );
}
