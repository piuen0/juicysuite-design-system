Stat tile — 44px pastel icon circle, heavy 28px value, 11px label + trend. Sits in a 4-up row at the top of dashboards.

```jsx
<div style={{ display: "flex", gap: 16 }}>
  <KPICard icon="users" color="orange" value="12,438" label="Members" trend="12%" />
  <KPICard icon="dollar" color="purple" value="$48K" label="Revenue" trend="2%" trendDir="down" />
</div>
```
