// JuicySuite — SaaS App · screens.jsx
// DashboardScreen · MembersScreen · EarningScreen · RewardsScreen · ReportsScreen

const { useState } = React;
const {
  JSIcon: Icon, JSButton: Button, JSIconButton: IconButton, JSTextLink: TextLink,
  JSBadge: Badge, JSTrend: Trend, JSToggle: Toggle, JSAvatar: Avatar,
  JSInput: Input, JSSearchInput: SearchInput,
  JSCard: Card, JSKPICard: KPICard, JSMemberRow: MemberRow,
  JSCampaignCard: CampaignCard, JSPromoBanner: PromoBanner,
  JSMiniChart: MiniChart, JSBarChart: BarChart, JSDonut: Donut,
} = window;

// =============================================================
// DASHBOARD
// =============================================================
const DashboardScreen = () => (
  <div style={{ padding: "0 32px 56px", display: "flex", flexDirection: "column", gap: 24 }}>
    {/* KPI ROW */}
    <div style={{ display: "flex", gap: 16 }}>
      <KPICard icon="users"  color="orange" value="12,438" label="Members"   trend="12%" />
      <KPICard icon="star"   color="coral"  value="284K"    label="Points"    trend="8%"  />
      <KPICard icon="check"  color="green"  value="1,892"   label="Redeemed"  trend="4%"  />
      <KPICard icon="dollar" color="purple" value="$48K"    label="Revenue"   trend="2%"  trendDir="down" />
    </div>

    {/* PROMO + ACTIVITY */}
    <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16 }}>
      {/* Member growth chart */}
      <Card padding={24}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <div>
            <div style={{ font: "600 15px Montserrat", color: "var(--text-primary)" }}>Member growth</div>
            <div style={{ font: "400 12px Montserrat", color: "var(--text-secondary)", marginTop: 2 }}>Cumulative active members over the last 30 days</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ font: "600 10px Montserrat", letterSpacing: 1, textTransform: "uppercase", color: "var(--text-secondary)", padding: "6px 12px", borderRadius: 9999, background: "var(--surface-input)" }}>30D</span>
            <span style={{ font: "600 10px Montserrat", letterSpacing: 1, textTransform: "uppercase", color: "#fff", padding: "6px 12px", borderRadius: 9999, background: "var(--gradient-sunset)" }}>90D</span>
          </div>
        </div>
        <MiniChart data={[110, 100, 105, 88, 75, 80, 60, 50, 35, 25, 20]} height={180} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          {["Apr 26", "May 2", "May 8", "May 14", "May 20", "May 26"].map(d => (
            <span key={d} style={{ font: "400 11px Montserrat", color: "var(--text-secondary)" }}>{d}</span>
          ))}
        </div>
      </Card>

      {/* Donut + segments */}
      <Card padding={24}>
        <div style={{ font: "600 15px Montserrat", color: "var(--text-primary)", marginBottom: 4 }}>Member tiers</div>
        <div style={{ font: "400 12px Montserrat", color: "var(--text-secondary)", marginBottom: 18 }}>Active member distribution</div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Donut center={{ value: "12.4K", label: "Total" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
            {[
              { color: "#FF761A", label: "Standard", value: "56%" },
              { color: "#F7607A", label: "Frequent", value: "24%" },
              { color: "#FFDA2B", label: "VIP", value: "12%" },
              { color: "#37E4D2", label: "New", value: "8%" },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }}></span>
                <span style={{ font: "500 12px Montserrat", color: "var(--text-primary)", flex: 1 }}>{s.label}</span>
                <span style={{ font: "600 12px Montserrat", color: "var(--text-secondary)" }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>

    {/* Banner + Weekday chart */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <PromoBanner
        eyebrow="Quick Start"
        title="Watch a 2-minute tour"
        body="Set up your first loyalty campaign in minutes."
      />
      <Card padding={24}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <div>
            <div style={{ font: "600 15px Montserrat", color: "var(--text-primary)" }}>Redemptions by day</div>
            <div style={{ font: "400 12px Montserrat", color: "var(--text-secondary)", marginTop: 2 }}>Thursday peaks 41% above weekly average</div>
          </div>
          <span style={{ font: "600 10px Montserrat", letterSpacing: 1, textTransform: "uppercase", color: "var(--text-secondary)" }}>Last Week</span>
        </div>
        <BarChart />
      </Card>
    </div>

    {/* RECENT ACTIVITY */}
    <Card padding={24}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
        <div style={{ font: "600 15px Montserrat", color: "var(--text-primary)" }}>Recent activity</div>
        <TextLink>View all →</TextLink>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {[
          { initials: "AL", idx: 0, name: "Alice Lim",      action: "redeemed", obj: "Free coffee", time: "2m ago", points: "−180" },
          { initials: "BK", idx: 1, name: "Bryan Koh",      action: "earned",   obj: "Birthday bonus", time: "14m ago", points: "+200" },
          { initials: "CN", idx: 2, name: "Cheng Nguyen",   action: "joined",   obj: "as a new member", time: "1h ago", points: "+50" },
          { initials: "DR", idx: 3, name: "Daniel Reyes",   action: "upgraded", obj: "to VIP tier", time: "3h ago", points: "+0" },
          { initials: "ET", idx: 4, name: "Esther Tan",     action: "earned",   obj: "Visit reward", time: "5h ago", points: "+25" },
        ].map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < 4 ? "1px solid var(--border-subtle)" : "none" }}>
            <Avatar initials={a.initials} idx={a.idx} size={36} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: "400 13px Montserrat", color: "var(--text-primary)" }}>
                <strong style={{ fontWeight: 600 }}>{a.name}</strong> {a.action} <span style={{ color: "var(--text-secondary)" }}>{a.obj}</span>
              </div>
              <div style={{ font: "400 11px Montserrat", color: "var(--text-secondary)", marginTop: 2 }}>{a.time}</div>
            </div>
            <span style={{ font: "600 13px Montserrat", color: a.points.startsWith("+") ? "#00CE73" : a.points.startsWith("−") ? "#FF5C4C" : "var(--text-secondary)" }}>{a.points} pts</span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

// =============================================================
// MEMBERS
// =============================================================
const memberSeed = [
  { initials: "AL", idx: 0, name: "Alice Lim",      id: "00272400000004", points: 1840, status: { kind: "activated",   label: "Activated"   } },
  { initials: "BK", idx: 1, name: "Bryan Koh",      id: "00272400000005", points: 4220, status: { kind: "vip",         label: "VIP"         } },
  { initials: "CN", idx: 2, name: "Cheng Nguyen",   id: "00272400000006", points: 120,  status: { kind: "unactivated", label: "Unactivated" } },
  { initials: "DR", idx: 3, name: "Daniel Reyes",   id: "00272400000007", points: 2950, status: { kind: "activated",   label: "Activated"   } },
  { initials: "ET", idx: 4, name: "Esther Tan",     id: "00272400000008", points: 680,  status: { kind: "activated",   label: "Activated"   } },
  { initials: "FW", idx: 0, name: "Fenton Wong",    id: "00272400000009", points: 90,   status: { kind: "paused",      label: "Paused"      } },
  { initials: "GS", idx: 1, name: "Grace Suen",     id: "00272400000010", points: 5240, status: { kind: "vip",         label: "VIP"         } },
  { initials: "HC", idx: 2, name: "Harold Chen",    id: "00272400000011", points: 410,  status: { kind: "draft",       label: "Draft"       } },
];

const MembersScreen = () => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const tabs = [
    { id: "all",         label: "All members",  count: 12438 },
    { id: "activated",   label: "Activated",    count: 9120  },
    { id: "vip",         label: "VIP",          count: 482   },
    { id: "unactivated", label: "Unactivated",  count: 2836  },
  ];
  const filtered = memberSeed
    .filter(m => tab === "all" ? true : m.status.kind === tab)
    .filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.id.includes(search));

  return (
    <div style={{ padding: "0 32px 56px", display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Toolbar */}
      <Card padding={20}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <SearchInput value={search} onChange={setSearch} placeholder="Search by name or member ID…" style={{ flex: 1, maxWidth: 360 }} />
          <Button variant="secondary" icon="filter">Filter</Button>
          <Button variant="secondary" icon="download">Export</Button>
          <div style={{ flex: 1 }}></div>
          <Button variant="primary" icon="plus">New member</Button>
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginTop: 18, borderTop: "1px solid var(--border-subtle)", paddingTop: 16 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              all: "unset", cursor: "pointer", padding: "8px 16px", borderRadius: 9999,
              font: `${tab === t.id ? 600 : 500} 13px Montserrat`,
              background: tab === t.id ? "var(--gradient-sunset)" : "transparent",
              color: tab === t.id ? "#fff" : "var(--text-primary)",
              boxShadow: tab === t.id ? "0 2px 8px rgba(255,118,26,0.25)" : "none",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              <span>{t.label}</span>
              <span style={{
                font: "600 11px Montserrat",
                color: tab === t.id ? "rgba(255,255,255,0.85)" : "var(--text-secondary)",
                background: tab === t.id ? "rgba(255,255,255,0.2)" : "var(--bg-neutral)",
                padding: "1px 8px", borderRadius: 9999,
              }}>{t.count.toLocaleString()}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Member list */}
      <Card padding={20}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
          <div>
            <div style={{ font: "600 15px Montserrat", color: "var(--text-primary)" }}>Members</div>
            <div style={{ font: "400 12px Montserrat", color: "var(--text-secondary)", marginTop: 2 }}>
              Showing <strong style={{ color: "var(--text-primary)" }}>{filtered.length}</strong> of {memberSeed.length}
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, font: "500 10px Montserrat", letterSpacing: 1, textTransform: "uppercase", color: "var(--text-secondary)" }}>
            <span>Sort: Joined ↓</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map(m => (
            <MemberRow key={m.id} {...m} onEdit={() => {}} />
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: 32, textAlign: "center", color: "var(--text-secondary)", font: "400 13px Montserrat" }}>No members match this filter.</div>
          )}
        </div>
        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
          <span style={{ font: "400 12px Montserrat", color: "var(--text-secondary)" }}>Page 1 of 156</span>
          <div style={{ display: "flex", gap: 6 }}>
            <IconButton name="chevronLeft" size={14} />
            <IconButton name="chevronRight" size={14} />
          </div>
        </div>
      </Card>
    </div>
  );
};

// =============================================================
// EARNING (campaigns)
// =============================================================
const initialCampaigns = [
  { id: 1, title: "Spring Birthday Bonus", active: true,
    period: "Apr 1 – May 31, 2026 · 142 redemptions",
    description: "Members earn double points on birthday week. Auto-applies based on registered DOB with no manual claim required. Currently active and performing 23% above projection.",
    stats: [
      { value: "142",   label: "Redemptions", trend: "23%", trendDir: "up" },
      { value: "$3.4K", label: "Revenue lift", trend: "18%", trendDir: "up" },
      { value: "4.8★",  label: "Member rating" },
    ] },
  { id: 2, title: "Weekday Coffee Run", active: true,
    period: "Recurring · Mon–Thu, 7am–11am",
    description: "1.5× points on coffee orders during the morning rush. Encourages weekday repeat visits.",
    stats: [
      { value: "1,284", label: "Redemptions", trend: "9%", trendDir: "up" },
      { value: "$8.1K", label: "Revenue lift", trend: "5%", trendDir: "up" },
    ] },
  { id: 3, title: "Referral Reward", active: false,
    period: "Ended Apr 12, 2026 · 87 referrals",
    description: "50 bonus points to both members for each successful referral. Paused pending review of cost-per-acquisition." },
  { id: 4, title: "VIP Anniversary Surprise", active: true,
    period: "Year-round · automatic",
    description: "Sends a free dessert reward on each VIP member's signup anniversary. Low-frequency, high-delight." },
];

const EarningScreen = () => {
  const [camps, setCamps] = useState(initialCampaigns);
  const [features, setFeatures] = useState({ profile: true, visits: false, referrals: true, birthdays: true });

  const toggleCamp = id => setCamps(c => c.map(x => x.id === id ? { ...x, active: !x.active } : x));
  const toggleFeat = k => setFeatures(f => ({ ...f, [k]: !f[k] }));

  return (
    <div style={{ padding: "0 32px 56px", display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Action bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <SearchInput placeholder="Search campaigns…" style={{ maxWidth: 360 }} />
        <Button variant="secondary" icon="filter">Status</Button>
        <Button variant="secondary" icon="calendar">Date range</Button>
        <div style={{ flex: 1 }}></div>
        <Button variant="primary" icon="plus">Add Campaign</Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }}>
        {/* Campaign list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {camps.map(c => (
            <CampaignCard key={c.id} {...c} onToggle={() => toggleCamp(c.id)} />
          ))}
        </div>

        {/* Feature toggles + summary */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card padding={22}>
            <div style={{ font: "600 15px Montserrat", color: "var(--text-primary)", marginBottom: 4 }}>Earning features</div>
            <div style={{ font: "400 12px Montserrat", color: "var(--text-secondary)", marginBottom: 18 }}>Global toggles applied to all members</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { k: "profile",   title: "Complete profile bonus", desc: "100 points when members complete their profile" },
                { k: "visits",    title: "Visit count tracking",   desc: "Track repeat visits and tier rewards" },
                { k: "referrals", title: "Referral rewards",       desc: "50 points per successful referral" },
                { k: "birthdays", title: "Birthday rewards",       desc: "Auto-apply based on registered DOB" },
              ].map(f => (
                <div key={f.k} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <Toggle checked={features[f.k]} onChange={() => toggleFeat(f.k)} />
                  <div>
                    <div style={{ font: "600 14px Montserrat", color: "var(--text-primary)" }}>{f.title}</div>
                    <div style={{ font: "400 12px Montserrat", color: "var(--text-secondary)", marginTop: 2 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card padding={22}>
            <div style={{ font: "600 15px Montserrat", color: "var(--text-primary)", marginBottom: 16 }}>This month</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ font: "500 12px Montserrat", color: "var(--text-secondary)" }}>Points awarded</span>
                <span style={{ font: "800 22px Montserrat", color: "var(--text-primary)" }}>284,210</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ font: "500 12px Montserrat", color: "var(--text-secondary)" }}>Avg points / member</span>
                <span style={{ font: "800 22px Montserrat", color: "var(--text-primary)" }}>23</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ font: "500 12px Montserrat", color: "var(--text-secondary)" }}>Cost per acquisition</span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ font: "800 22px Montserrat", color: "var(--text-primary)" }}>$1.84</span>
                  <Trend value="6%" dir="down" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// =============================================================
// Simple Rewards / Reports stubs for sidebar nav completeness
// =============================================================
const PlaceholderScreen = ({ title, body }) => (
  <div style={{ padding: "0 32px 56px" }}>
    <Card padding={48}>
      <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%", background: "var(--gradient-sunset)",
          display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 18,
          boxShadow: "var(--shadow-cta)",
        }}><Icon name="sparkle" size={24} style={{ color: "#fff" }} /></div>
        <div style={{ font: "800 22px Montserrat", color: "var(--text-primary)", marginBottom: 8 }}>{title}</div>
        <div style={{ font: "400 14px Montserrat", color: "var(--text-secondary)", lineHeight: 1.55 }}>{body}</div>
        <div style={{ marginTop: 22 }}>
          <Button variant="primary" icon="plus">Get started</Button>
        </div>
      </div>
    </Card>
  </div>
);

const RewardsScreen = () => <PlaceholderScreen title="Rewards catalog" body="Curate the rewards members can redeem with their points. Coming up next — drop in your first reward to seed the catalog." />;
const ReportsScreen = () => <PlaceholderScreen title="Reports" body="Deep-dive analytics on member lifetime value, redemption mix, and campaign ROI. Pick a date range to build your first report." />;
const BillingScreen = () => <PlaceholderScreen title="Billing" body="Plan, usage, and invoicing for your JuicySuite workspace." />;
const SettingsScreen = () => <PlaceholderScreen title="Workspace settings" body="Team members, integrations, brand styling and notification rules." />;

Object.assign(window, {
  DashboardScreen, MembersScreen, EarningScreen,
  RewardsScreen, ReportsScreen, BillingScreen, SettingsScreen,
});
