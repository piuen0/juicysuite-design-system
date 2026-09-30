import React from "react";

const KINDS = {
  activated: { background: "var(--bg-success)", color: "var(--status-success)" },
  unactivated: { background: "var(--bg-error)", color: "var(--status-error)" },
  paused: { background: "var(--bg-warning)", color: "var(--status-warning-text)" },
  warning: { background: "var(--bg-warning)", color: "var(--status-warning-text)" },
  vip: { background: "var(--bg-vip)", color: "var(--status-vip)" },
  info: { background: "var(--bg-info)", color: "var(--status-info-text)" },
  draft: { background: "var(--bg-neutral)", color: "var(--text-secondary)" },
  neutral: { background: "var(--bg-neutral)", color: "var(--text-secondary)" },
};

export function Badge({ kind = "draft", children, style }) {
  return (
    <span style={{
      height: 26, borderRadius: 9999, padding: "0 12px", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
      display: "inline-flex", alignItems: "center", lineHeight: 1, whiteSpace: "nowrap", boxSizing: "border-box",
      ...KINDS[kind], ...style,
    }}>{children}</span>
  );
}
