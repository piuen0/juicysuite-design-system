import React from "react";

export function Input({ value, defaultValue, onChange, placeholder, type = "text", style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input type={type} value={value} defaultValue={defaultValue} placeholder={placeholder}
      onChange={e => onChange && onChange(e.target.value)}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        background: "#fff", border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
        borderRadius: 8, height: 40, padding: "0 14px", fontFamily: "var(--font-sans)", fontSize: 14,
        color: "var(--text-primary)", outline: "none", width: "100%", boxSizing: "border-box",
        transition: "border-color 150ms ease", ...style,
      }} />
  );
}
