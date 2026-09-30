// Earning — campaign list with toggles, global earning features, monthly summary.
(function () {
const { Card, CardHeader, SearchInput, Button, CampaignCard, Toggle, Trend } = window.JS;
const CAMPS = [
  { id: 1, title: "Spring Birthday Bonus", active: true, period: "Apr 1 – May 31, 2026 · 142 redemptions",
    description: "Members earn double points on birthday week. Auto-applies based on registered DOB with no manual claim required. Currently active and performing 23% above projection.",
    stats: [{ value: "142", label: "Redemptions", trend: "23%" }, { value: "$3.4K", label: "Revenue lift", trend: "18%" }, { value: "4.8★", label: "Member rating" }] },
  { id: 2, title: "Weekday Coffee Run", active: true, period: "Recurring · Mon–Thu, 7am–11am",
    description: "1.5× points on coffee orders during the morning rush. Encourages weekday repeat visits.",
    stats: [{ value: "1,284", label: "Redemptions", trend: "9%" }, { value: "$8.1K", label: "Revenue lift", trend: "5%" }] },
  { id: 3, title: "Referral Reward", active: false, period: "Ended Apr 12, 2026 · 87 referrals",
    description: "50 bonus points to both members for each successful referral. Paused pending review of cost-per-acquisition." },
  { id: 4, title: "VIP Anniversary Surprise", active: true, period: "Year-round · automatic",
    description: "Sends a free dessert reward on each VIP member's signup anniversary. Low-frequency, high-delight." },
];
const FEATURES = [
  { k: "profile", title: "Complete profile bonus", desc: "100 points when members complete their profile" },
  { k: "visits", title: "Visit count tracking", desc: "Track repeat visits and tier rewards" },
  { k: "referrals", title: "Referral rewards", desc: "50 points per successful referral" },
  { k: "birthdays", title: "Birthday rewards", desc: "Auto-apply based on registered DOB" },
];
function Stat({ label, value, trend }) {
  return <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
    <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)" }}>{label}</span>
    <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}><span style={{ fontSize: 22, fontWeight: 800 }}>{value}</span>{trend}</span>
  </div>;
}
function EarningScreen() {
  const [camps, setCamps] = React.useState(CAMPS);
  const [feat, setFeat] = React.useState({ profile: true, visits: false, referrals: true, birthdays: true });
  return (
    <div style={{ padding: "0 32px 56px", display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <SearchInput placeholder="Search campaigns…" style={{ maxWidth: 360 }} />
        <Button variant="secondary" icon="filter">Status</Button>
        <Button variant="secondary" icon="calendar">Date range</Button>
        <div style={{ flex: 1 }}></div>
        <Button icon="plus">Add Campaign</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {camps.map(c => <CampaignCard key={c.id} {...c} onToggle={() => setCamps(cs => cs.map(x => x.id === c.id ? { ...x, active: !x.active } : x))} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card padding={22}>
            <CardHeader title="Earning features" subtitle="Global toggles applied to all members" />
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {FEATURES.map(f => (
                <div key={f.k} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <Toggle checked={feat[f.k]} onChange={() => setFeat(s => ({ ...s, [f.k]: !s[f.k] }))} />
                  <div><div style={{ fontSize: 14, fontWeight: 600 }}>{f.title}</div><div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>{f.desc}</div></div>
                </div>
              ))}
            </div>
          </Card>
          <Card padding={22}>
            <CardHeader title="This month" />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Stat label="Points awarded" value="284,210" />
              <Stat label="Avg points / member" value="23" />
              <Stat label="Cost per acquisition" value="$1.84" trend={<Trend value="6%" dir="down" />} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
window.EarningScreen = EarningScreen;
})();
