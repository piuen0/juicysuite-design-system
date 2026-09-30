import React from "react";
import { Icon } from "../core/Icon.jsx";

export function SearchInput({ value, onChange, placeholder = "Search…", style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: "relative", width: "100%", ...style }}>
      <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)", pointerEvents: "none", display: "flex" }}>
        <Icon name="search" size={16} />
      </span>
      <input value={value} placeholder={placeholder} onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          background: "var(--surface-input)", border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
          borderRadius: 9999, height: 40, padding: "0 16px 0 40px", fontFamily: "var(--font-sans)", fontSize: 14,
          width: "100%", outline: "none", boxSizing: "border-box", color: "var(--text-primary)",
        }} />
    </div>
  );
}
