Earning campaign card — toggle + title + Edit / Show More, period line, factual description, optional stat strip.

```jsx
<CampaignCard title="Spring Birthday Bonus" active onToggle={setOn}
  period="Apr 1 – May 31, 2026 · 142 redemptions"
  description="Members earn double points on birthday week."
  stats={[{ value: "142", label: "Redemptions", trend: "23%" }]} />
```
