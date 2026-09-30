# SaaS App UI kit — Operator Console

Click-through recreation of the JuicySuite loyalty/CRM console at 1440×900. Composes primitives from `components/` via the compiled bundle (`window.JS` in index.html resolves the namespace).

- `index.html` — shell: Sidebar + TopHeader, screen routing (persists page in localStorage)
- `Dashboard.jsx` — KPI row, member growth (30D/90D), tier donut, Quick Start banner, weekday bars, recent activity
- `Members.jsx` — search, filter/export, pill tabs, filterable member rows (Remove works), pagination
- `Earning.jsx` — campaign cards with live toggles, earning feature toggles, monthly summary
- `Placeholder.jsx` — Rewards / Reports / Billing / Settings are not defined in source; shown as labelled placeholders
