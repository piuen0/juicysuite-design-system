# JuicySuite — SaaS App UI Kit

The operator console for JuicySuite's loyalty/CRM product. Clickable prototype covering the three core surfaces operators live in: **Dashboard**, **Members**, and **Earning** (campaigns).

Open `index.html` to walk the flow. Cycle screens via the sidebar nav.

## Components

```
components.jsx
  Sidebar               sticky 240px Sunset gradient rail
  TopHeader             72px header with page title + company badge
  Button                primary | secondary | sm size
  IconButton            ghost circular button for toolbar icons
  TextLink              inline "Edit" / "Show More →" style action
  Badge                 status pill (activated / unactivated / paused / vip / draft)
  Toggle                44×24 pill switch
  Input                 standard input (8px radius, coral focus)
  SearchInput           pill input with leading search icon
  Avatar                gradient-filled initials circle
  Icon                  inlined Lucide-style SVG set (no runtime dep)

cards.jsx
  Card                  base white container
  KPICard               icon circle + 28/800 stat + trend
  MemberRow             list-item member record
  CampaignCard          toggle + title + period + description
  PromoBanner           rare Sunset-gradient horizontal banner
  MiniChart             orange line + gradient area chart
  CalendarWidget        coral today-indicator calendar

screens.jsx
  DashboardScreen       KPI grid · Member Growth chart · Recent activity
  MembersScreen         search · filter · member list · pagination
  EarningScreen         campaign list + toggles · feature flags
```

All components import tokens from `../../colors_and_type.css`. They're cosmetic recreations — `onClick` handlers are wired only enough to drive the demo (switching screens, flipping toggles).
