// Members — toolbar with search, filters, pill tabs; filterable member list.
(function () {
const { Card, CardHeader, SearchInput, Button, PillTabs, MemberRow, IconButton } = window.JS;
const SEED = [
  { initials: "AL", idx: 0, name: "Alice Lim", id: "00272400000004", points: 1840, status: { kind: "activated", label: "Activated" } },
  { initials: "BK", idx: 1, name: "Bryan Koh", id: "00272400000005", points: 4220, status: { kind: "vip", label: "VIP" } },
  { initials: "CN", idx: 2, name: "Cheng Nguyen", id: "00272400000006", points: 120, status: { kind: "unactivated", label: "Unactivated" } },
  { initials: "DR", idx: 3, name: "Daniel Reyes", id: "00272400000007", points: 2950, status: { kind: "activated", label: "Activated" } },
  { initials: "ET", idx: 4, name: "Esther Tan", id: "00272400000008", points: 680, status: { kind: "activated", label: "Activated" } },
  { initials: "FW", idx: 0, name: "Fenton Wong", id: "00272400000009", points: 90, status: { kind: "paused", label: "Paused" } },
  { initials: "GS", idx: 1, name: "Grace Suen", id: "00272400000010", points: 5240, status: { kind: "vip", label: "VIP" } },
  { initials: "HC", idx: 2, name: "Harold Chen", id: "00272400000011", points: 410, status: { kind: "draft", label: "Draft" } },
];
const TABS = [
  { id: "all", label: "All members", count: 12438 },
  { id: "activated", label: "Activated", count: 9120 },
  { id: "vip", label: "VIP", count: 482 },
  { id: "unactivated", label: "Unactivated", count: 2836 },
];
function MembersScreen() {
  const [q, setQ] = React.useState("");
  const [tab, setTab] = React.useState("all");
  const [rows, setRows] = React.useState(SEED);
  const list = rows.filter(m => tab === "all" || m.status.kind === tab).filter(m => m.name.toLowerCase().includes(q.toLowerCase()) || m.id.includes(q));
  return (
    <div style={{ padding: "0 32px 56px", display: "flex", flexDirection: "column", gap: 24 }}>
      <Card padding={20}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <SearchInput value={q} onChange={setQ} placeholder="Search by name or member ID…" style={{ flex: 1, maxWidth: 360 }} />
          <Button variant="secondary" icon="filter">Filter</Button>
          <Button variant="secondary" icon="download">Export</Button>
        </div>
        <div style={{ marginTop: 18, borderTop: "1px solid var(--border-subtle)", paddingTop: 16 }}>
          <PillTabs tabs={TABS} value={tab} onChange={setTab} />
        </div>
      </Card>
      <Card padding={20}>
        <CardHeader title="Members" subtitle={"Showing " + list.length + " of " + rows.length} right={<span className="t-caption">Sort: Joined ↓</span>} />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {list.map(m => <MemberRow key={m.id} {...m} onEdit={() => {}} onRemove={() => setRows(r => r.filter(x => x.id !== m.id))} />)}
          {list.length === 0 && <div style={{ padding: 32, textAlign: "center", color: "var(--text-secondary)", fontSize: 13 }}>No members yet. Try another filter.</div>}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
          <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>Page 1 of 156</span>
          <div style={{ display: "flex", gap: 6 }}><IconButton name="chevronLeft" size={14} /><IconButton name="chevronRight" size={14} /></div>
        </div>
      </Card>
    </div>
  );
}
window.MembersScreen = MembersScreen;
})();
