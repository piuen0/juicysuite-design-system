// Dashboard — KPI row, growth + tiers, promo + weekday bars, recent activity.
(function () {
const { Card, CardHeader, KPICard, MiniChart, Donut, DonutLegend, PromoBanner, BarChart, SegmentedPills, TextLink, Avatar } = window.JS;
const ACTIVITY = [
  { initials: "AL", idx: 0, name: "Alice Lim", action: "redeemed", obj: "Free coffee", time: "2m ago", points: "−180" },
  { initials: "BK", idx: 1, name: "Bryan Koh", action: "earned", obj: "Birthday bonus", time: "14m ago", points: "+200" },
  { initials: "CN", idx: 2, name: "Cheng Nguyen", action: "joined", obj: "as a new member", time: "1h ago", points: "+50" },
  { initials: "DR", idx: 3, name: "Daniel Reyes", action: "upgraded", obj: "to VIP tier", time: "3h ago", points: "+0" },
  { initials: "ET", idx: 4, name: "Esther Tan", action: "earned", obj: "Visit reward", time: "5h ago", points: "+25" },
];
function DashboardScreen() {
  const [range, setRange] = React.useState("90D");
  return (
    <div style={{ padding: "0 32px 56px", display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 16 }}>
        <KPICard icon="users" color="orange" value="12,438" label="Members" trend="12%" />
        <KPICard icon="star" color="coral" value="284K" label="Points" trend="8%" />
        <KPICard icon="check" color="green" value="1,892" label="Redeemed" trend="4%" />
        <KPICard icon="dollar" color="purple" value="$48K" label="Revenue" trend="2%" trendDir="down" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16 }}>
        <Card>
          <CardHeader title="Member growth" subtitle="Cumulative active members over the last 30 days" right={<SegmentedPills options={["30D", "90D"]} value={range} onChange={setRange} />} />
          <MiniChart data={range === "90D" ? [110, 100, 105, 88, 75, 80, 60, 50, 35, 25, 20] : [96, 90, 84, 86, 70, 64, 58, 52, 44]} height={180} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            {["Apr 26", "May 2", "May 8", "May 14", "May 20", "May 26"].map(d => <span key={d} style={{ fontSize: 11, color: "var(--text-secondary)" }}>{d}</span>)}
          </div>
        </Card>
        <Card>
          <CardHeader title="Member tiers" subtitle="Active member distribution" />
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Donut center={{ value: "12.4K", label: "Total" }} />
            <DonutLegend />
          </div>
        </Card>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
        <PromoBanner eyebrow="Quick Start" title="Watch a 2-minute tour" body="Set up your first loyalty campaign in minutes." />
        <Card>
          <CardHeader title="Redemptions by day" subtitle="Thursday peaks 41% above weekly average" right={<span className="t-caption">Last Week</span>} />
          <BarChart />
        </Card>
      </div>
      <Card>
        <CardHeader title="Recent activity" right={<TextLink>View all →</TextLink>} />
        <div>
          {ACTIVITY.map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < ACTIVITY.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
              <Avatar initials={a.initials} idx={a.idx} size={36} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13 }}><strong style={{ fontWeight: 600 }}>{a.name}</strong> {a.action} <span style={{ color: "var(--text-secondary)" }}>{a.obj}</span></div>
                <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }}>{a.time}</div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: a.points.startsWith("+") && a.points !== "+0" ? "var(--status-success)" : a.points.startsWith("−") ? "var(--status-error)" : "var(--text-secondary)" }}>{a.points} pts</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
window.DashboardScreen = DashboardScreen;
})();
