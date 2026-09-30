import React from "react";
import { Avatar } from "../core/Avatar.jsx";
import { Badge } from "../core/Badge.jsx";
import { TextLink } from "../core/TextLink.jsx";

export function MemberRow({ initials, idx = 0, name, id, status, points, onEdit, onRemove }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: "flex", alignItems: "center", gap: 16, padding: "12px 16px", borderRadius: 12,
      border: "1px solid var(--border-default)", background: hover ? "var(--surface-hover)" : "#fff", transition: "background 150ms ease",
      fontFamily: "var(--font-sans)",
    }}>
      <Avatar initials={initials} idx={idx} size={40} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{name}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }}>ID: {id}</div>
      </div>
      {points != null && (
        <div style={{ textAlign: "right", minWidth: 80 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{points.toLocaleString()}</div>
          <div style={{ fontSize: 10, fontWeight: 500, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>Points</div>
        </div>
      )}
      {status && <Badge kind={status.kind}>{status.label}</Badge>}
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <TextLink icon="edit" onClick={onEdit}>Edit</TextLink>
        {onRemove && <TextLink destructive onClick={onRemove}>Remove</TextLink>}
      </div>
    </div>
  );
}
