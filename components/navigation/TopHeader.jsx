import React from "react";
import { Icon } from "../core/Icon.jsx";
import { IconButton } from "../core/IconButton.jsx";
import { Avatar } from "../core/Avatar.jsx";

export function TopHeader({ title, subtitle, actions, company = "Honeycomb Cafe", role = "Owner", initials = "HC" }) {
  return (
    <div style={{ height: 88, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, background: "var(--surface-page)", flexShrink: 0 }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 34, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>{title}</div>
        {subtitle && <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", marginTop: 4 }}>{subtitle}</div>}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        {actions}
        <IconButton name="bell" />
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 9999, padding: "6px 14px 6px 6px", boxShadow: "var(--shadow-xs)", color: "var(--text-primary)" }}>
          <Avatar initials={initials} size={32} idx={0} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, fontFamily: "var(--font-sans)" }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>{company}</span>
            <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{role}</span>
          </div>
          <Icon name="chevronDown" size={14} />
        </div>
      </div>
    </div>
  );
}
