import React from "react";
import { Icon } from "./Icon.jsx";

export function IconButton({ name, size = 16, onClick, label, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" aria-label={label || name} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--border-default)",
        background: hover ? "var(--surface-hover)" : "#fff", color: "var(--text-primary)", cursor: "pointer",
        display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0,
        transition: "background 150ms ease", ...style,
      }}>
      <Icon name={name} size={size} />
    </button>
  );
}
