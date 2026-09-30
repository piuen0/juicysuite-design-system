import React from "react";
import { Icon } from "./Icon.jsx";

export function TextLink({ children, icon, destructive = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: "none", border: "none", padding: 0, cursor: "pointer",
        color: destructive ? "var(--status-error)" : "var(--text-link)",
        fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
        display: "inline-flex", alignItems: "center", gap: 4,
        textDecoration: hover ? "underline" : "none", ...style,
      }}>
      {icon && <Icon name={icon} size={12} />}
      {children}
    </button>
  );
}
