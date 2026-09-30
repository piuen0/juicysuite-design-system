import React from "react";

export function Toggle({ checked = false, onChange, disabled = false }) {
  return (
    <label style={{ position: "relative", display: "inline-block", width: 44, height: 24, flexShrink: 0, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1 }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} style={{ opacity: 0, width: 0, height: 0, position: "absolute" }} />
      <span style={{ position: "absolute", inset: 0, background: checked ? "var(--accent-green)" : "var(--toggle-off)", borderRadius: 9999, transition: "background 200ms ease" }}></span>
      <span style={{ position: "absolute", top: 2, left: 2, width: 20, height: 20, background: "#fff", borderRadius: "50%", boxShadow: "0 1px 3px rgba(0,0,0,0.15)", transform: checked ? "translateX(20px)" : "translateX(0)", transition: "transform 200ms ease" }}></span>
    </label>
  );
}
