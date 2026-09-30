// JuicySuite — SaaS App · components.jsx
// Core UI primitives. All cosmetic; loaded via Babel. No runtime icon deps.

const { useState } = React;

// =============================================================
// ICONS — Lucide/Feather style, 2px stroke, round caps
// =============================================================
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const Icon = ({ name, size = 18, ...rest }) => {
  const paths = {
    plus:        <g {...stroke}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></g>,
    edit:        <g {...stroke}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></g>,
    check:       <polyline points="20 6 9 17 4 12" {...stroke} />,
    filter:      <g {...stroke}><path d="M3 6h18M6 12h12M10 18h4" /></g>,
    search:      <g {...stroke}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></g>,
    chevronDown: <polyline points="6 9 12 15 18 9" {...stroke} />,
    chevronRight:<polyline points="9 18 15 12 9 6" {...stroke} />,
    chevronLeft: <polyline points="15 18 9 12 15 6" {...stroke} />,
    users:       <g {...stroke}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></g>,
    star:        <polygon {...stroke} points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
    gift:        <g {...stroke}><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></g>,
    dollar:      <g {...stroke}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></g>,
    home:        <g {...stroke}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></g>,
    chart:       <g {...stroke}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></g>,
    bell:        <g {...stroke}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></g>,
    settings:    <g {...stroke}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></g>,
    trash:       <g {...stroke}><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /></g>,
    play:        <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />,
    moreH:       <g {...stroke}><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></g>,
    arrowUp:     <polyline points="6 14 12 8 18 14" {...stroke} />,
    arrowDown:   <polyline points="6 10 12 16 18 10" {...stroke} />,
    download:    <g {...stroke}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></g>,
    calendar:    <g {...stroke}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></g>,
    sparkle:     <g {...stroke}><path d="M12 3l1.9 5.5L19 10l-5.1 1.5L12 17l-1.9-5.5L5 10l5.1-1.5z"/></g>,
    x:           <g {...stroke}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...rest}>{paths[name]}</svg>
  );
};

// =============================================================
// BUTTONS
// =============================================================
const buttonBase = {
  height: 40, borderRadius: 9999, font: "600 14px Montserrat", cursor: "pointer",
  display: "inline-flex", alignItems: "center", gap: 8, padding: "0 24px",
  border: "none", transition: "all 150ms ease",
};
const Button = ({ variant = "primary", size = "md", icon, children, onClick, style = {} }) => {
  const variants = {
    primary: { background: "var(--gradient-sunset)", color: "#fff", boxShadow: "var(--shadow-cta)" },
    secondary: { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-default)", fontWeight: 500, padding: "0 20px" },
    ghost: { background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)" },
  };
  const sizes = { md: {}, sm: { height: 32, padding: "0 16px", fontSize: 13 } };
  return (
    <button onClick={onClick} className={`btn btn-${variant}`} style={{ ...buttonBase, ...variants[variant], ...sizes[size], ...style }}>
      {icon && <Icon name={icon} size={variant === "secondary" ? 14 : 16} />}
      {children}
    </button>
  );
};

const IconButton = ({ name, onClick, size = 16, style = {} }) => (
  <button onClick={onClick} style={{
    width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--border-default)",
    background: "#fff", color: "var(--text-primary)", cursor: "pointer",
    display: "inline-flex", alignItems: "center", justifyContent: "center", ...style,
  }}>
    <Icon name={name} size={size} />
  </button>
);

const TextLink = ({ children, onClick, icon, destructive = false }) => (
  <button onClick={onClick} style={{
    background: "none", border: "none", padding: 0, cursor: "pointer",
    color: destructive ? "#FF5C4C" : "var(--text-link)", font: "500 13px Montserrat",
    display: "inline-flex", alignItems: "center", gap: 4,
  }}>
    {icon && <Icon name={icon} size={12} />}
    {children}
  </button>
);

// =============================================================
// BADGE
// =============================================================
const badgeStyles = {
  activated:   { background: "#E8F8E8", color: "#00CE73" },
  unactivated: { background: "#FDE8E8", color: "#FF5C4C" },
  paused:      { background: "#FFF3E0", color: "#B58400" },
  warning:     { background: "#FFF3E0", color: "#B58400" },
  vip:         { background: "#F0E6FF", color: "#8E44AD" },
  info:        { background: "#E3F2FD", color: "#1FB5A4" },
  draft:       { background: "#F0F2F7", color: "#7F8C8D" },
  neutral:     { background: "#F0F2F7", color: "#7F8C8D" },
};
const Badge = ({ kind = "draft", children }) => (
  <span style={{
    height: 26, borderRadius: 9999, padding: "0 12px", font: "600 12px Montserrat",
    display: "inline-flex", alignItems: "center", lineHeight: 1, ...badgeStyles[kind],
  }}>{children}</span>
);

// Inline trend chip
const Trend = ({ value, dir = "up" }) => {
  const positive = dir === "up";
  return (
    <span style={{ font: "600 11px Montserrat", color: positive ? "#00CE73" : "#FF5C4C", display: "inline-flex", alignItems: "center", gap: 2 }}>
      {positive ? "▲" : "▼"} {value}
    </span>
  );
};

// =============================================================
// TOGGLE
// =============================================================
const Toggle = ({ checked, onChange }) => (
  <label style={{ position: "relative", display: "inline-block", width: 44, height: 24, flexShrink: 0, cursor: "pointer" }}>
    <input type="checkbox" checked={checked} onChange={e => onChange && onChange(e.target.checked)} style={{ opacity: 0, width: 0, height: 0 }} />
    <span style={{
      position: "absolute", inset: 0, background: checked ? "#4CD964" : "#E0E0E0",
      borderRadius: 9999, transition: "background 200ms ease",
    }}></span>
    <span style={{
      position: "absolute", top: 2, left: 2, width: 20, height: 20, background: "#fff",
      borderRadius: "50%", boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
      transform: checked ? "translateX(20px)" : "translateX(0)",
      transition: "transform 200ms ease",
    }}></span>
  </label>
);

// =============================================================
// INPUTS
// =============================================================
const Input = ({ value, onChange, placeholder, focused = false, style = {} }) => (
  <input
    value={value} onChange={e => onChange && onChange(e.target.value)} placeholder={placeholder}
    style={{
      background: "#fff", border: `1px solid ${focused ? "#F7607A" : "#E8ECF1"}`,
      borderRadius: 8, height: 40, padding: "0 14px", font: "400 14px Montserrat",
      color: "var(--text-primary)", outline: "none", width: "100%", boxSizing: "border-box", ...style,
    }}
    onFocus={e => (e.target.style.borderColor = "#F7607A")}
    onBlur={e => (e.target.style.borderColor = focused ? "#F7607A" : "#E8ECF1")}
  />
);

const SearchInput = ({ value, onChange, placeholder = "Search…", style = {} }) => (
  <div style={{ position: "relative", ...style }}>
    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#7F8C8D", pointerEvents: "none", display: "flex" }}>
      <Icon name="search" size={16} />
    </span>
    <input
      value={value} onChange={e => onChange && onChange(e.target.value)} placeholder={placeholder}
      style={{
        background: "var(--surface-input)", border: "1px solid var(--border-default)",
        borderRadius: 9999, height: 40, padding: "0 16px 0 40px", font: "400 14px Montserrat",
        width: "100%", outline: "none", boxSizing: "border-box", color: "var(--text-primary)",
      }}
      onFocus={e => (e.target.style.borderColor = "#F7607A")}
      onBlur={e => (e.target.style.borderColor = "#E8ECF1")}
    />
  </div>
);

// =============================================================
// AVATAR
// =============================================================
const avatarGradients = [
  "linear-gradient(50deg, #FF761A 0%, #FFABE7 100%)",
  "linear-gradient(50deg, #37E4D2 0%, #00CE73 100%)",
  "linear-gradient(50deg, #FFABE7 0%, #904AA8 100%)",
  "linear-gradient(50deg, #F5D840 0%, #3DD2A4 100%)",
  "linear-gradient(50deg, #FF5E7C 0%, #FFB0C5 100%)",
];
const Avatar = ({ initials, size = 40, idx = 0 }) => (
  <div style={{
    width: size, height: size, borderRadius: "50%",
    background: avatarGradients[idx % avatarGradients.length],
    color: "#fff", font: `700 ${Math.round(size * 0.36)}px Montserrat`,
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    letterSpacing: "-0.2px",
  }}>{initials}</div>
);

// =============================================================
// SIDEBAR
// =============================================================
const navItems = [
  { id: "dashboard", icon: "home",     label: "Dashboard" },
  { id: "members",   icon: "users",    label: "Members" },
  { id: "earning",   icon: "gift",     label: "Earning" },
  { id: "rewards",   icon: "star",     label: "Rewards" },
  { id: "reports",   icon: "chart",    label: "Reports" },
];
const navSecondary = [
  { id: "billing",  icon: "dollar",   label: "Billing" },
  { id: "settings", icon: "settings", label: "Settings" },
];

const Sidebar = ({ active, onNav }) => (
  <aside style={{
    width: 240, flexShrink: 0, background: "var(--gradient-sunset)",
    borderRadius: "0 20px 20px 0", padding: "28px 14px",
    boxShadow: "var(--shadow-sidebar)", color: "#fff",
    position: "sticky", top: 0, height: "100vh", overflowY: "auto",
    display: "flex", flexDirection: "column", gap: 4,
  }}>
    {/* Brand */}
    <div style={{ padding: "0 10px 24px", display: "flex", alignItems: "center", gap: 10 }}>
      <img src="../../assets/juicysuite-wordmark-white.svg" alt="JuicySuite" style={{ height: 24 }} />
    </div>
    {/* Search */}
    <div style={{ padding: "0 4px 16px", position: "relative" }}>
      <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.7)", pointerEvents: "none", display: "flex" }}>
        <Icon name="search" size={14} />
      </span>
      <input placeholder="Search…" style={{
        width: "100%", boxSizing: "border-box", height: 36, borderRadius: 9999,
        background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.25)",
        padding: "0 14px 0 38px", color: "#fff", font: "400 13px Montserrat", outline: "none",
      }} />
    </div>
    {/* Main nav */}
    <div style={{ font: "600 10px Montserrat", letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", padding: "8px 14px 6px" }}>Main</div>
    {navItems.map(item => (
      <button key={item.id} onClick={() => onNav(item.id)} style={{
        all: "unset", display: "flex", alignItems: "center", gap: 12,
        padding: "10px 14px", borderRadius: 8, cursor: "pointer",
        background: active === item.id ? "rgba(255,255,255,0.25)" : "transparent",
        color: "#fff",
        font: `${active === item.id ? 600 : 500} 14px Montserrat`,
        transition: "background 150ms ease",
      }}>
        <Icon name={item.icon} size={18} />
        <span>{item.label}</span>
      </button>
    ))}
    {/* Divider */}
    <div style={{ height: 1, background: "rgba(255,255,255,0.18)", margin: "16px 12px" }}></div>
    <div style={{ font: "600 10px Montserrat", letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", padding: "0 14px 6px" }}>Workspace</div>
    {navSecondary.map(item => (
      <button key={item.id} onClick={() => onNav(item.id)} style={{
        all: "unset", display: "flex", alignItems: "center", gap: 12,
        padding: "10px 14px", borderRadius: 8, cursor: "pointer",
        background: active === item.id ? "rgba(255,255,255,0.25)" : "transparent",
        color: "#fff",
        font: `${active === item.id ? 600 : 500} 14px Montserrat`,
      }}>
        <Icon name={item.icon} size={18} />
        <span>{item.label}</span>
      </button>
    ))}
    {/* Footer mini */}
    <div style={{ marginTop: "auto", padding: 12, borderRadius: 12, background: "rgba(255,255,255,0.15)", color: "#fff" }}>
      <div style={{ font: "600 11px Montserrat", marginBottom: 2 }}>Growth plan</div>
      <div style={{ font: "400 11px Montserrat", color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>12,438 / 15,000 members</div>
      <div style={{ marginTop: 8, height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 9999, overflow: "hidden" }}>
        <div style={{ width: "83%", height: "100%", background: "#fff", borderRadius: 9999 }}></div>
      </div>
    </div>
  </aside>
);

// =============================================================
// TOP HEADER
// =============================================================
const TopHeader = ({ title, subtitle, actions, company = "Honeycomb Cafe", role = "Owner" }) => (
  <div style={{
    height: 88, padding: "0 32px", display: "flex",
    alignItems: "center", justifyContent: "space-between",
    background: "var(--surface-page)", flexShrink: 0,
  }}>
    <div>
      <div style={{ font: "800 34px Montserrat", color: "var(--text-primary)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>{title}</div>
      {subtitle && <div style={{ font: "400 14px Montserrat", color: "var(--text-secondary)", marginTop: 4 }}>{subtitle}</div>}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {actions}
      <IconButton name="bell" size={16} />
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        background: "#fff", borderRadius: 9999, padding: "6px 14px 6px 6px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>
        <Avatar initials="HC" size={32} idx={0} />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ font: "600 13px Montserrat", color: "var(--text-primary)" }}>{company}</span>
          <span style={{ font: "400 11px Montserrat", color: "var(--text-secondary)" }}>{role}</span>
        </div>
        <Icon name="chevronDown" size={14} />
      </div>
    </div>
  </div>
);

// Export to global scope so other JSX files can use these
Object.assign(window, {
  JSIcon: Icon, JSButton: Button, JSIconButton: IconButton, JSTextLink: TextLink,
  JSBadge: Badge, JSTrend: Trend, JSToggle: Toggle,
  JSInput: Input, JSSearchInput: SearchInput, JSAvatar: Avatar,
  JSSidebar: Sidebar, JSTopHeader: TopHeader,
});
