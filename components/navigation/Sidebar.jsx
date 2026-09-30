import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Wordmark } from "../core/Wordmark.jsx";

const DEFAULT_MAIN = [
  { id: "dashboard", icon: "home", label: "Dashboard" },
  { id: "members", icon: "users", label: "Members" },
  { id: "earning", icon: "gift", label: "Earning" },
  { id: "rewards", icon: "star", label: "Rewards" },
  { id: "reports", icon: "chart", label: "Reports" },
];
const DEFAULT_SECONDARY = [
  { id: "billing", icon: "dollar", label: "Billing" },
  { id: "settings", icon: "settings", label: "Settings" },
];
const CAP = { fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.7)" };

function NavItem({ item, active, onNav }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={() => onNav && onNav(item.id)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        border: "none", display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 8, cursor: "pointer", textAlign: "left",
        background: active ? "rgba(255,255,255,0.25)" : hover ? "rgba(255,255,255,0.12)" : "transparent",
        color: "#fff", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: active ? 600 : 500, transition: "background 150ms ease",
      }}>
      <Icon name={item.icon} size={18} />
      <span>{item.label}</span>
    </button>
  );
}

export function Sidebar({ active, onNav, items = DEFAULT_MAIN, secondaryItems = DEFAULT_SECONDARY, plan = { name: "Growth plan", used: 12438, limit: 15000 }, style }) {
  const pct = plan ? Math.min(100, Math.round((plan.used / plan.limit) * 100)) : 0;
  return (
    <aside style={{
      width: 240, flexShrink: 0, background: "var(--gradient-sunset)", borderRadius: "0 20px 20px 0", padding: "28px 14px",
      boxShadow: "var(--shadow-sidebar)", color: "#fff", boxSizing: "border-box", height: "100vh", position: "sticky", top: 0,
      overflowY: "auto", display: "flex", flexDirection: "column", gap: 4, ...style,
    }}>
      <div style={{ padding: "0 10px 24px" }}><Wordmark color="white" height={24} /></div>
      <div style={{ padding: "0 4px 16px", position: "relative" }}>
        <span style={{ position: "absolute", left: 18, top: 18, transform: "translateY(-50%)", color: "rgba(255,255,255,0.7)", display: "flex" }}><Icon name="search" size={14} /></span>
        <input placeholder="Search…" style={{
          width: "100%", boxSizing: "border-box", height: 36, borderRadius: 9999, background: "rgba(255,255,255,0.18)",
          border: "1px solid rgba(255,255,255,0.25)", padding: "0 14px 0 38px", color: "#fff", fontFamily: "var(--font-sans)", fontSize: 13, outline: "none",
        }} />
      </div>
      <div style={{ ...CAP, padding: "8px 14px 6px" }}>Main</div>
      {items.map(it => <NavItem key={it.id} item={it} active={active === it.id} onNav={onNav} />)}
      <div style={{ height: 1, background: "rgba(255,255,255,0.18)", margin: "16px 12px" }}></div>
      <div style={{ ...CAP, padding: "0 14px 6px" }}>Workspace</div>
      {secondaryItems.map(it => <NavItem key={it.id} item={it} active={active === it.id} onNav={onNav} />)}
      {plan && (
        <div style={{ marginTop: "auto", padding: 12, borderRadius: 12, background: "rgba(255,255,255,0.15)" }}>
          <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 2 }}>{plan.name}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>{plan.used.toLocaleString()} / {plan.limit.toLocaleString()} members</div>
          <div style={{ marginTop: 8, height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ width: pct + "%", height: "100%", background: "#fff", borderRadius: 9999 }}></div>
          </div>
        </div>
      )}
    </aside>
  );
}
