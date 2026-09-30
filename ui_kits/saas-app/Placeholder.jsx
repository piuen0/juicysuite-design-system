// Placeholder — for nav destinations not defined in the source (Rewards, Reports, Billing, Settings).
(function () {
const { Card, Button, Icon } = window.JS;
function PlaceholderScreen({ title, body }) {
  return (
    <div style={{ padding: "0 32px 56px" }}>
      <Card padding={48}>
        <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--gradient-sunset)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: "var(--shadow-cta)", color: "#fff" }}><Icon name="sparkle" size={24} /></div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{title}</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.55 }}>{body}</div>
          <div style={{ marginTop: 22, display: "flex", justifyContent: "center" }}><Button icon="plus">Get started</Button></div>
          <div style={{ marginTop: 16, fontSize: 11, color: "var(--text-disabled)" }}>Screen not defined in source — placeholder only.</div>
        </div>
      </Card>
    </div>
  );
}
window.PlaceholderScreen = PlaceholderScreen;
})();
