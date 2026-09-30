// JuicySuite — SaaS App · cards.jsx
// Higher-level card components: KPI · MemberRow · CampaignCard · Banner · Chart

const {
  JSIcon: Icon, JSButton: Button, JSTextLink: TextLink, JSBadge: Badge,
  JSTrend: Trend, JSToggle: Toggle, JSAvatar: Avatar,
} = window;

// =============================================================
// Base Card
// =============================================================
const Card = ({ children, padding = 24, radius = 16, style = {}, onClick }) => (
  <div onClick={onClick} style={{
    background: "#fff", borderRadius: radius, padding,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)", ...style,
  }}>{children}</div>
);

// =============================================================
// KPI CARD — icon circle · stat · label · trend
// =============================================================
const kpiPalettes = {
  orange: { bg: "#FFF0E6", fg: "#FF761A" },
  coral:  { bg: "#FFE6E6", fg: "#F7607A" },
  green:  { bg: "#E6F9E6", fg: "#00CE73" },
  purple: { bg: "#F0E6FF", fg: "#8E44AD" },
};
const KPICard = ({ icon = "users", color = "orange", value, label, trend, trendDir = "up" }) => {
  const pal = kpiPalettes[color];
  return (
    <div style={{
      background: "#fff", borderRadius: 12, padding: 18, flex: 1, minWidth: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      display: "flex", alignItems: "center", gap: 14,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: "50%", background: pal.bg, color: pal.fg,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Icon name={icon} size={20} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: "800 28px Montserrat", color: "var(--text-primary)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>{value}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
          <span style={{ font: "500 11px Montserrat", color: "var(--text-secondary)" }}>{label}</span>
          {trend && <Trend value={trend} dir={trendDir} />}
        </div>
      </div>
    </div>
  );
};

// =============================================================
// MEMBER ROW
// =============================================================
const MemberRow = ({ initials, idx, name, id, status, points, onEdit, onRemove }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 16,
    padding: "12px 16px", borderRadius: 12,
    border: "1px solid var(--border-default)", background: "#fff",
  }}>
    <Avatar initials={initials} idx={idx} size={40} />
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ font: "600 14px Montserrat", color: "var(--text-primary)" }}>{name}</div>
      <div style={{ font: "400 11px 'JetBrains Mono', monospace", color: "var(--text-secondary)", marginTop: 2 }}>ID: {id}</div>
    </div>
    {points != null && (
      <div style={{ textAlign: "right", minWidth: 80 }}>
        <div style={{ font: "700 15px Montserrat", color: "var(--text-primary)" }}>{points.toLocaleString()}</div>
        <div style={{ font: "500 10px Montserrat", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>Points</div>
      </div>
    )}
    <Badge kind={status.kind}>{status.label}</Badge>
    <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
      <TextLink icon="edit" onClick={onEdit}>Edit</TextLink>
      {onRemove && <TextLink destructive onClick={onRemove}>Remove</TextLink>}
    </div>
  </div>
);

// =============================================================
// CAMPAIGN CARD
// =============================================================
const CampaignCard = ({ title, period, description, active, onToggle, stats }) => (
  <div style={{ background: "#fff", borderRadius: 16, padding: 22, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
      <Toggle checked={active} onChange={onToggle} />
      <div style={{ flex: 1, font: "600 15px Montserrat", color: "var(--text-primary)" }}>{title}</div>
      <div style={{ display: "flex", gap: 16 }}>
        <TextLink icon="edit">Edit</TextLink>
        <TextLink>Show More →</TextLink>
      </div>
    </div>
    <div style={{ font: "400 12px Montserrat", color: "var(--text-secondary)", marginBottom: 14 }}>{period}</div>
    <div style={{ font: "400 14px Montserrat", color: "var(--text-secondary)", lineHeight: 1.55 }}>{description}</div>
    {stats && (
      <div style={{ display: "flex", gap: 28, marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
        {stats.map((s, i) => (
          <div key={i}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ font: "800 20px Montserrat", color: "var(--text-primary)" }}>{s.value}</span>
              {s.trend && <Trend value={s.trend} dir={s.trendDir} />}
            </div>
            <div style={{ font: "500 11px Montserrat", color: "var(--text-secondary)", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    )}
  </div>
);

// =============================================================
// PROMO BANNER (rare gradient use)
// =============================================================
const PromoBanner = ({ eyebrow, title, body, ctaLabel = "Play", onCta }) => (
  <div style={{
    background: "var(--gradient-sunset)", borderRadius: 16, padding: "22px 26px",
    color: "#fff", boxShadow: "var(--shadow-cta)",
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
  }}>
    <div>
      <div style={{ font: "600 11px Montserrat", textTransform: "uppercase", letterSpacing: 1, opacity: 0.9, marginBottom: 6 }}>{eyebrow}</div>
      <div style={{ font: "700 18px Montserrat", marginBottom: 4 }}>{title}</div>
      <div style={{ font: "400 13px Montserrat", opacity: 0.95 }}>{body}</div>
    </div>
    <button onClick={onCta} style={{
      background: "rgba(255,255,255,0.22)", color: "#fff",
      border: "1px solid rgba(255,255,255,0.4)", borderRadius: 9999,
      padding: "10px 20px", font: "600 13px Montserrat", cursor: "pointer",
      display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0,
    }}>
      <Icon name="play" size={11} />
      {ctaLabel}
    </button>
  </div>
);

// =============================================================
// MINI CHART — orange line + gradient area
// =============================================================
const MiniChart = ({ data = [108, 92, 96, 75, 62, 68, 46, 38, 20], height = 180 }) => {
  const w = 600, h = 130;
  const stepX = w / (data.length - 1);
  const points = data.map((d, i) => `${(i * stepX).toFixed(1)},${d}`).join(" ");
  const area = `M0,${h} L${points.split(" ").join(" L")} L${w},${h} Z`;
  const line = `M${points.split(" ").join(" L")}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height, display: "block" }}>
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF761A" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#FF761A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="30"  x2={w} y2="30"  stroke="#F0F2F7" />
      <line x1="0" y1="65"  x2={w} y2="65"  stroke="#F0F2F7" />
      <line x1="0" y1="100" x2={w} y2="100" stroke="#F0F2F7" />
      <path d={area} fill="url(#areaFill)" />
      <path d={line} fill="none" stroke="#FF761A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {data.map((d, i) => (i === data.length - 1 || i === Math.floor(data.length / 2)) && (
        <circle key={i} cx={i * stepX} cy={d} r="4.5" fill="#fff" stroke="#FF761A" strokeWidth="2" />
      ))}
    </svg>
  );
};

// =============================================================
// BAR CHART (weekday breakdown)
// =============================================================
const BarChart = ({ data = [40, 65, 55, 85, 70, 45, 30], labels = ["M","T","W","T","F","S","S"], highlight = 3 }) => (
  <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 160 }}>
    {data.map((v, i) => (
      <div key={i} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 10 }}>
        <div style={{
          width: "100%", height: `${v}%`,
          background: i === highlight ? "#FF761A" : "rgba(255,118,26,0.55)",
          borderRadius: "6px 6px 0 0",
          boxShadow: i === highlight ? "0 1px 3px rgba(255,118,26,0.3)" : "none",
        }}></div>
        <span style={{
          font: `${i === highlight ? 600 : 400} 11px Montserrat`,
          color: i === highlight ? "var(--text-primary)" : "var(--text-secondary)",
        }}>{labels[i]}</span>
      </div>
    ))}
  </div>
);

// =============================================================
// DONUT (loyalty mix)
// =============================================================
const Donut = ({ segments = [{value: 56, color: "#FF761A"}, {value: 24, color: "#F7607A"}, {value: 12, color: "#FFDA2B"}, {value: 8, color: "#37E4D2"}], center }) => {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let acc = 0;
  const r = 70, cx = 90, cy = 90, circ = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative", width: 180, height: 180 }}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F0F2F7" strokeWidth="16" />
        {segments.map((seg, i) => {
          const len = (seg.value / total) * circ;
          const offset = circ - acc;
          const el = (
            <circle key={i} cx={cx} cy={cy} r={r} fill="none"
              stroke={seg.color} strokeWidth="16"
              strokeDasharray={`${len} ${circ - len}`}
              strokeDashoffset={offset}
              transform={`rotate(-90 ${cx} ${cy})`}
              strokeLinecap="round" />
          );
          acc += len;
          return el;
        })}
      </svg>
      {center && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ font: "800 24px Montserrat", color: "var(--text-primary)", lineHeight: 1 }}>{center.value}</div>
          <div style={{ font: "500 11px Montserrat", color: "var(--text-secondary)", marginTop: 4 }}>{center.label}</div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, {
  JSCard: Card, JSKPICard: KPICard, JSMemberRow: MemberRow,
  JSCampaignCard: CampaignCard, JSPromoBanner: PromoBanner,
  JSMiniChart: MiniChart, JSBarChart: BarChart, JSDonut: Donut,
});
