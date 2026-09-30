/* @ds-bundle: {"format":4,"namespace":"JuicySuiteDesignSystem_ab5a71","components":[{"name":"BarChart","sourcePath":"components/charts/BarChart.jsx"},{"name":"Donut","sourcePath":"components/charts/Donut.jsx"},{"name":"DonutLegend","sourcePath":"components/charts/Donut.jsx"},{"name":"MiniChart","sourcePath":"components/charts/MiniChart.jsx"},{"name":"AVATAR_GRADIENTS","sourcePath":"components/core/Avatar.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Trend","sourcePath":"components/core/Trend.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"WORDMARKS","sourcePath":"components/core/wordmarkData.js"},{"name":"CampaignCard","sourcePath":"components/data/CampaignCard.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data/Card.jsx"},{"name":"KPICard","sourcePath":"components/data/KPICard.jsx"},{"name":"MemberRow","sourcePath":"components/data/MemberRow.jsx"},{"name":"PromoBanner","sourcePath":"components/data/PromoBanner.jsx"},{"name":"PillComposition","sourcePath":"components/edm/PillComposition.jsx"},{"name":"PillStatRow","sourcePath":"components/edm/PillStatRow.jsx"},{"name":"SplitBar","sourcePath":"components/edm/SplitBar.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PillTabs","sourcePath":"components/forms/PillTabs.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"SegmentedPills","sourcePath":"components/forms/SegmentedPills.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"TopHeader","sourcePath":"components/navigation/TopHeader.jsx"},{"name":"BLOB_PATHS","sourcePath":"components/shapes/Blob.jsx"},{"name":"BLOB_RATIOS","sourcePath":"components/shapes/Blob.jsx"},{"name":"BLOB_GRADIENTS","sourcePath":"components/shapes/Blob.jsx"},{"name":"Blob","sourcePath":"components/shapes/Blob.jsx"},{"name":"DropShort","sourcePath":"components/shapes/DropShort.jsx"},{"name":"DropTall","sourcePath":"components/shapes/DropTall.jsx"},{"name":"Ellipse","sourcePath":"components/shapes/Ellipse.jsx"},{"name":"GradientDefs","sourcePath":"components/shapes/GradientDefs.jsx"},{"name":"Marble","sourcePath":"components/shapes/Marble.jsx"},{"name":"StoneBloom","sourcePath":"components/shapes/StoneBloom.jsx"},{"name":"StoneRound","sourcePath":"components/shapes/StoneRound.jsx"},{"name":"StoneTilt","sourcePath":"components/shapes/StoneTilt.jsx"},{"name":"StoneWide","sourcePath":"components/shapes/StoneWide.jsx"},{"name":"GRADIENT_CSS","sourcePath":"components/shapes/gradients.js"},{"name":"GRADIENT_STOPS","sourcePath":"components/shapes/gradients.js"}],"sourceHashes":{"components/charts/BarChart.jsx":"b9451a137f6f","components/charts/Donut.jsx":"914b4cae6272","components/charts/MiniChart.jsx":"2473127bc1da","components/core/Avatar.jsx":"9c94f8bf7e68","components/core/Badge.jsx":"2ea73a0a45c9","components/core/Button.jsx":"5984b13ea53e","components/core/Icon.jsx":"1505f1e6b07d","components/core/IconButton.jsx":"d84eee2d8fc9","components/core/TextLink.jsx":"cf57fd983283","components/core/Trend.jsx":"d71cdc26b216","components/core/Wordmark.jsx":"75486a59ac2d","components/core/wordmarkData.js":"86fdd4666b3b","components/data/CampaignCard.jsx":"0b180d357168","components/data/Card.jsx":"f145be4db37f","components/data/KPICard.jsx":"203d92250ce3","components/data/MemberRow.jsx":"e398cae4521a","components/data/PromoBanner.jsx":"e5336b467c1f","components/edm/PillComposition.jsx":"4d623a149fee","components/edm/PillStatRow.jsx":"9545b3d70fc3","components/edm/SplitBar.jsx":"37ca135c81d9","components/forms/Input.jsx":"3c8bc01cd00d","components/forms/PillTabs.jsx":"d06aaf6e79d2","components/forms/SearchInput.jsx":"3aaa746bc4fb","components/forms/SegmentedPills.jsx":"26d94777dbad","components/forms/Toggle.jsx":"74510181e23a","components/navigation/Sidebar.jsx":"f2e7cdd669c0","components/navigation/TopHeader.jsx":"0783dcf8da08","components/shapes/Blob.jsx":"e0fe50be1c39","components/shapes/DropShort.jsx":"e6fcf3e7bff6","components/shapes/DropTall.jsx":"13096137098b","components/shapes/Ellipse.jsx":"b51ce7eaa4ad","components/shapes/GradientDefs.jsx":"a609690be379","components/shapes/Marble.jsx":"80423491db7f","components/shapes/StoneBloom.jsx":"f84f987abd61","components/shapes/StoneRound.jsx":"2f494164530d","components/shapes/StoneTilt.jsx":"f61f96feeaf7","components/shapes/StoneWide.jsx":"558b1a94c866","components/shapes/gradients.js":"692cfbfad96d","ui_kits/marketing/Compositions.jsx":"0e4e35b06983","ui_kits/saas-app/Dashboard.jsx":"6a98e5fd224a","ui_kits/saas-app/Earning.jsx":"5008455289da","ui_kits/saas-app/Members.jsx":"99b47303ef24","ui_kits/saas-app/Placeholder.jsx":"c7e19f7897cc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JuicySuiteDesignSystem_ab5a71 = window.JuicySuiteDesignSystem_ab5a71 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/charts/BarChart.jsx
try { (() => {
function BarChart({
  data = [40, 65, 55, 85, 70, 45, 30],
  labels = ["M", "T", "W", "T", "F", "S", "S"],
  highlight = 3,
  height = 160
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 14,
      height
    }
  }, data.map((v, i) => {
    const hi = i === highlight;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: v + "%",
        background: hi ? "#FF761A" : "rgba(255,118,26,0.55)",
        borderRadius: "6px 6px 0 0",
        boxShadow: hi ? "0 1px 3px rgba(255,118,26,0.3)" : "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: hi ? 600 : 400,
        color: hi ? "var(--text-primary)" : "var(--text-secondary)"
      }
    }, labels[i]));
  }));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/Donut.jsx
try { (() => {
const DEFAULT = [{
  value: 56,
  color: "#FF761A",
  label: "Standard"
}, {
  value: 24,
  color: "#F7607A",
  label: "Frequent"
}, {
  value: 12,
  color: "#FFDA2B",
  label: "VIP"
}, {
  value: 8,
  color: "#37E4D2",
  label: "New"
}];
function Donut({
  segments = DEFAULT,
  center,
  size = 180
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const r = 70,
    c = 90,
    circ = 2 * Math.PI * r;
  let acc = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 180 180"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: r,
    fill: "none",
    stroke: "#F0F2F7",
    strokeWidth: "16"
  }), segments.map((s, i) => {
    const len = s.value / total * circ;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: c,
      cy: c,
      r: r,
      fill: "none",
      stroke: s.color,
      strokeWidth: "16",
      strokeDasharray: len + " " + (circ - len),
      strokeDashoffset: circ - acc,
      transform: "rotate(-90 " + c + " " + c + ")",
      strokeLinecap: "round"
    });
    acc += len;
    return el;
  })), center && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: "var(--text-primary)",
      lineHeight: 1
    }
  }, center.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, center.label)));
}
function DonutLegend({
  segments = DEFAULT
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      flex: 1,
      fontFamily: "var(--font-sans)"
    }
  }, segments.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: s.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: "var(--text-primary)",
      flex: 1
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-secondary)"
    }
  }, Math.round(s.value / total * 100), "%"))));
}
Object.assign(__ds_scope, { Donut, DonutLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Donut.jsx", error: String((e && e.message) || e) }); }

// components/charts/MiniChart.jsx
try { (() => {
function MiniChart({
  data = [108, 92, 96, 75, 62, 68, 46, 38, 20],
  height = 180,
  id = "js-area"
}) {
  const w = 600,
    h = 130,
    pad = 8;
  const n = data.length;
  const x = i => i / (n - 1) * w;
  const y = d => pad + Math.min(Math.max(d, 0), h) / h * (h - pad * 2);
  const pts = data.map((d, i) => x(i).toFixed(1) + "," + y(d).toFixed(1));
  const area = "M0," + h + " L" + pts.join(" L") + " L" + w + "," + h + " Z";
  const line = "M" + pts.join(" L");
  const mid = Math.floor(n / 2);
  const dots = [mid, n - 1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + w + " " + h,
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF761A",
    stopOpacity: "0.32"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FF761A",
    stopOpacity: "0"
  }))), [0.25, 0.5, 0.75].map(f => /*#__PURE__*/React.createElement("line", {
    key: f,
    x1: "0",
    y1: h * f,
    x2: w,
    y2: h * f,
    stroke: "#F0F2F7",
    vectorEffect: "non-scaling-stroke"
  })), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#" + id + ")"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "#FF761A",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  })), dots.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: i / (n - 1) * 100 + "%",
      top: y(data[i]) / h * 100 + "%",
      width: 9,
      height: 9,
      marginLeft: -4.5,
      marginTop: -4.5,
      borderRadius: "50%",
      background: "#fff",
      border: "2px solid #FF761A",
      boxSizing: "border-box"
    }
  })));
}
Object.assign(__ds_scope, { MiniChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/MiniChart.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const AVATAR_GRADIENTS = ["linear-gradient(50deg, #FF761A 0%, #FFABE7 100%)", "linear-gradient(50deg, #37E4D2 0%, #00CE73 100%)", "linear-gradient(50deg, #FFABE7 0%, #904AA8 100%)", "linear-gradient(50deg, #F5D840 0%, #3DD2A4 100%)", "linear-gradient(50deg, #FF5E7C 0%, #FFB0C5 100%)"];
function Avatar({
  initials,
  size = 40,
  idx = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length],
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: Math.round(size * 0.36),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      letterSpacing: "-0.2px",
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { AVATAR_GRADIENTS, Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const KINDS = {
  activated: {
    background: "var(--bg-success)",
    color: "var(--status-success)"
  },
  unactivated: {
    background: "var(--bg-error)",
    color: "var(--status-error)"
  },
  paused: {
    background: "var(--bg-warning)",
    color: "var(--status-warning-text)"
  },
  warning: {
    background: "var(--bg-warning)",
    color: "var(--status-warning-text)"
  },
  vip: {
    background: "var(--bg-vip)",
    color: "var(--status-vip)"
  },
  info: {
    background: "var(--bg-info)",
    color: "var(--status-info-text)"
  },
  draft: {
    background: "var(--bg-neutral)",
    color: "var(--text-secondary)"
  },
  neutral: {
    background: "var(--bg-neutral)",
    color: "var(--text-secondary)"
  }
};
function Badge({
  kind = "draft",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      height: 26,
      borderRadius: 9999,
      padding: "0 12px",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      ...KINDS[kind],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const PATHS = {
  plus: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })),
  edit: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  })),
  check: /*#__PURE__*/React.createElement("polyline", _extends({
    points: "20 6 9 17 4 12"
  }, S)),
  filter: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M6 12h12M10 18h4"
  })),
  search: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })),
  chevronDown: /*#__PURE__*/React.createElement("polyline", _extends({
    points: "6 9 12 15 18 9"
  }, S)),
  chevronRight: /*#__PURE__*/React.createElement("polyline", _extends({
    points: "9 18 15 12 9 6"
  }, S)),
  chevronLeft: /*#__PURE__*/React.createElement("polyline", _extends({
    points: "15 18 9 12 15 6"
  }, S)),
  users: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })),
  star: /*#__PURE__*/React.createElement("polygon", _extends({}, S, {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  })),
  gift: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("polyline", {
    points: "20 12 20 22 4 22 4 12"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
  })),
  dollar: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })),
  home: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  })),
  chart: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "14"
  })),
  bell: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  })),
  settings: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  })),
  trash: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11v6M14 11v6"
  })),
  play: /*#__PURE__*/React.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3",
    fill: "currentColor"
  }),
  moreH: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  })),
  arrowUp: /*#__PURE__*/React.createElement("polyline", _extends({
    points: "6 14 12 8 18 14"
  }, S)),
  arrowDown: /*#__PURE__*/React.createElement("polyline", _extends({
    points: "6 10 12 16 18 10"
  }, S)),
  download: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })),
  calendar: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  })),
  sparkle: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.9 5.5L19 10l-5.1 1.5L12 17l-1.9-5.5L5 10l5.1-1.5z"
  })),
  x: /*#__PURE__*/React.createElement("g", S, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))
};
const ICON_NAMES = Object.keys(PATHS);
function Icon({
  name,
  size = 18,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      flexShrink: 0,
      display: "block",
      ...style
    },
    "aria-hidden": "true"
  }, rest), PATHS[name] || null);
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const BASE = {
  height: 40,
  borderRadius: 9999,
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "0 24px",
  border: "none",
  transition: "all 150ms ease",
  whiteSpace: "nowrap",
  boxSizing: "border-box"
};
const VARIANTS = {
  primary: {
    background: "var(--gradient-sunset)",
    color: "#fff",
    boxShadow: "var(--shadow-cta)"
  },
  secondary: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)",
    fontWeight: 500,
    padding: "0 20px"
  },
  ghost: {
    background: "rgba(255,255,255,0.18)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.35)"
  }
};
const HOVER = {
  primary: {
    transform: "translateY(-1px)",
    boxShadow: "var(--shadow-cta-hover)"
  },
  secondary: {
    background: "var(--surface-hover)",
    borderColor: "var(--accent-primary)"
  },
  ghost: {
    background: "rgba(255,255,255,0.28)"
  }
};
const SIZES = {
  md: {},
  sm: {
    height: 32,
    padding: "0 16px",
    fontSize: 13
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...BASE,
      ...VARIANTS[variant],
      ...SIZES[size],
      ...(hover && !disabled ? HOVER[variant] : null),
      ...(press && !disabled ? {
        opacity: 0.95,
        transform: "scale(0.98)"
      } : null),
      ...(disabled ? {
        opacity: 0.45,
        cursor: "not-allowed",
        boxShadow: "none"
      } : null),
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: variant === "secondary" ? 14 : 16
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  name,
  size = 16,
  onClick,
  label,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label || name,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "1px solid var(--border-default)",
      background: hover ? "var(--surface-hover)" : "#fff",
      color: "var(--text-primary)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      transition: "background 150ms ease",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function TextLink({
  children,
  icon,
  destructive = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: destructive ? "var(--status-error)" : "var(--text-link)",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      textDecoration: hover ? "underline" : "none",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Trend.jsx
try { (() => {
function Trend({
  value,
  dir = "up",
  style
}) {
  const up = dir === "up";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      whiteSpace: "nowrap",
      color: up ? "var(--status-success)" : "var(--status-error)",
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      ...style
    }
  }, up ? "▲" : "▼", " ", value);
}
Object.assign(__ds_scope, { Trend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Trend.jsx", error: String((e && e.message) || e) }); }

// components/core/wordmarkData.js
try { (() => {
// Generated from assets/juicysuite-wordmark-*.svg — do not edit by hand.
const WORDMARKS = {
  "orange": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTExIiBoZWlnaHQ9IjEwMiIgdmlld0JveD0iMCAwIDUxMSAxMDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6YzJwYT0iaHR0cDovL2MycGEub3JnL21hbmlmZXN0Ij48bWV0YWRhdGE+PGMycGE6bWFuaWZlc3Q+QUFBV2dtcDFiV0lBQUFBZWFuVnRaR015Y0dFQUVRQVFnQUFBcWdBNG0zRURZekp3WVFBQUFCWmNhblZ0WWdBQUFFZHFkVzFrWXpKdFlRQVJBQkNBQUFDcUFEaWJjUU4xY200Nll6SndZVG8zTm1JeFlXRXpNQzB4WVdObUxUUTNNall0T1RFeU15MDFNbUZtWlRGaU5EWTVNVGtBQUFBRGwycDFiV0lBQUFBcGFuVnRaR015WVhNQUVRQVFnQUFBcWdBNG0zRURZekp3WVM1aGMzTmxjblJwYjI1ekFBQUFBTHhxZFcxaUFBQUFSR3AxYldSalltOXlBQkVBRUlBQUFLb0FPSnR4RTJNeWNHRXVhVzVuY21Wa2FXVnVkQzUyTXdBQUFBQVlZekp6YUhYdUZDNHVydVBoa0JsM2pENDFpZm9BQUFCd1kySnZjcU5wWkdNNlptOXliV0YwYldsdFlXZGxMM04yWnl0NGJXeHFhVzV6ZEdGdVkyVkpSSGdzZUcxd09tbHBaRG95TWpVMU1ESmxOaTFsTkRVMExUUmxZakl0T0RRNVpDMHhOVEkyTVRrNVlUVTRZV0pzY21Wc1lYUnBiMjV6YUdsd2FIQmhjbVZ1ZEU5bUFBQUI0bXAxYldJQUFBQkJhblZ0WkdOaWIzSUFFUUFRZ0FBQXFnQTRtM0VUWXpKd1lTNWhZM1JwYjI1ekxuWXlBQUFBQUJoak1uTm9uR2xhQjk1Z1FDOGtkV2kxQ1dQNGRBQUFBWmxqWW05eW9tZGhZM1JwYjI1emdxSm1ZV04wYVc5dWEyTXljR0V1YjNCbGJtVmthbkJoY21GdFpYUmxjbk9oYTJsdVozSmxaR2xsYm5SemdhSmpkWEpzZUMxelpXeG1JMnAxYldKbVBXTXljR0V1WVhOelpYSjBhVzl1Y3k5ak1uQmhMbWx1WjNKbFpHbGxiblF1ZGpOa2FHRnphRmdnZGl6Y1JFa1VpYklwZXRsRUUzNE0waUMxQ1dIbDZMaHo3MUZXZ1lJaEF5U2tabUZqZEdsdmJuZ2RZMjl0TG1GdWRHaHliM0JwWXk1amJHRjFaR1V1Y0hKdmRtbGtaV1JxY0dGeVlXMWxkR1Z5YzZGNEgyTnZiUzVoYm5Sb2NtOXdhV011YjNKcFoybHVMV052Ym1acFpHVnVZMlZuZFc1cmJtOTNibXRrWlhOamNtbHdkR2x2Ym5obVEyeGhkV1JsSUhCeWIzWnBaR1ZrSUhSb2FYTWdabWxzWlNCaGRDQjBhR1VnY21WeGRXVnpkQ0J2WmlCaElIVnpaWElnWVc1a0lHMWhlU0JvWVhabElHTnlaV0YwWldRZ2IzSWdiVzlrYVdacFpXUWdkR2hsSUdacGJHVWdZMjl1ZEdWdWRITXViWE52Wm5SM1lYSmxRV2RsYm5TaFpHNWhiV1ZtUTJ4aGRXUmxjbUZzYkVGamRHbHZibk5KYm1Oc2RXUmxaUFVBQUFESWFuVnRZZ0FBQUVCcWRXMWtZMkp2Y2dBUkFCQ0FBQUNxQURpYmNSTmpNbkJoTG1oaGMyZ3VaR0YwWVFBQUFBQVlZekp6YUpld01CQkNEV3NPdFJhL3hjckJlRTBBQUFDQVkySnZjcVZqWVd4blpuTm9ZVEkxTm1Od1lXUk5BQUFBQUFBQUFBQUFBQUFBQUdSb1lYTm9XQ0MxamxLRGJqQ0RidGRkaExmcXhqeVNXcTlBVE5Mb3J0VFBzVDd6SStKSkxtUnVZVzFsYm1wMWJXSm1JRzFoYm1sbVpYTjBhbVY0WTJ4MWMybHZibk9Cb21WemRHRnlkQmlpWm14bGJtZDBhQmtlQkFBQUFqNXFkVzFpQUFBQUoycDFiV1JqTW1Oc0FCRUFFSUFBQUtvQU9KdHhBMk15Y0dFdVkyeGhhVzB1ZGpJQUFBQUNEMk5pYjNLbFkyRnNaMlp6YUdFeU5UWnBjMmxuYm1GMGRYSmxlRTF6Wld4bUkycDFiV0ptUFM5ak1uQmhMM1Z5Ympwak1uQmhPamMyWWpGaFlUTXdMVEZoWTJZdE5EY3lOaTA1TVRJekxUVXlZV1psTVdJME5qa3hPUzlqTW5CaExuTnBaMjVoZEhWeVpXcHBibk4wWVc1alpVbEVlQ3g0YlhBNmFXbGtPbUl4WXpFM056SXlMVGs0TmpNdE5ETTJNeTFoWVRjeUxUaGhZVFptTlRoak1ETmpNM0pqY21WaGRHVmtYMkZ6YzJWeWRHbHZibk9Eb21OMWNteDRMWE5sYkdZamFuVnRZbVk5WXpKd1lTNWhjM05sY25ScGIyNXpMMk15Y0dFdWFXNW5jbVZrYVdWdWRDNTJNMlJvWVhOb1dDQjJMTnhFU1JTSnNpbDYyVVFUZmd6U0lMVUpZZVhvdUhQdlVWYUJnaUVESktKamRYSnNlQ3B6Wld4bUkycDFiV0ptUFdNeWNHRXVZWE56WlhKMGFXOXVjeTlqTW5CaExtRmpkR2x2Ym5NdWRqSmthR0Z6YUZnZzl1dDFmeElWdlR3WHBGNXdOMkhGdzFZQnlaSERoakhiZmRmR0RSQjJIdnFpWTNWeWJIZ3BjMlZzWmlOcWRXMWlaajFqTW5CaExtRnpjMlZ5ZEdsdmJuTXZZekp3WVM1b1lYTm9MbVJoZEdGa2FHRnphRmdneVdMVEN0SVhiS09GKzFiZjFtSVgzNkZwcXZKUFcwbHEyR1NnZ1AxMnRZUjBZMnhoYVcxZloyVnVaWEpoZEc5eVgybHVabStqWkc1aGJXVnZRVzUwYUhKdmNHbGpJRVpwYkdWelozWmxjbk5wYjI1bE1TNHdMakJyYzNCbFkxWmxjbk5wYjI1bE1pNDBMakFBQUJBNGFuVnRZZ0FBQUNocWRXMWtZekpqY3dBUkFCQ0FBQUNxQURpYmNRTmpNbkJoTG5OcFoyNWhkSFZ5WlFBQUFCQUlZMkp2Y3RLRVdRSVNvZ0VtR0NGWkFnb3dnZ0lHTUlJQmphQURBZ0VDQWhSQTVhQUs3c0k1MEw2NGcvb0dRZ1U5WjFVVEFEQUtCZ2dxaGtqT1BRUURBekJKTVJjd0ZRWURWUVFLRXc1QmJuUm9jbTl3YVdNc0lGQkNRekV1TUN3R0ExVUVBeE1sUVc1MGFISnZjR2xqSUVOdmJuUmxiblFnUTNKbFpHVnVkR2xoYkhNZ1VtOXZkQ0JEUVRBZUZ3MHlOakE0TURjeE9EUXpOVFphRncweU9EQTRNRFl4T1RRek5UWmFNRVF4RnpBVkJnTlZCQW9URGtGdWRHaHliM0JwWXl3Z1VFSkRNU2t3SndZRFZRUURFeUJCYm5Sb2NtOXdhV01nUTJ4aGRXUmxJRU52Ym5SbGJuUWdVMmxuYm1sdVp6QlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJKaDZDbXZMVUJnRkZOVTB2VUtsT1Z0RTZkamQxN0w1U3V3WDBMZW1GaXNCTTNka2QvM2N5anhGQTNRbzVTNDZmWDAvaWhZMFZaN21mYjlLRjcwM3Q1T2pXREJXTUE0R0ExVWREd0VCL3dRRUF3SUhnREFWQmdOVkhTVUVEakFNQmdvckJnRUVBWVBvWGdJQk1Bd0dBMVVkRXdFQi93UUNNQUF3SHdZRFZSMGpCQmd3Rm9BVXpsSGlCSUZPWkZzaitPUEV6NW8rbk1IWFhNSXdDZ1lJS29aSXpqMEVBd01EWndBd1pBSXdNWE1kRko0QmV0TExWWTdPUnVFOW5vcWJiQVpPWm4vYUFyWHlUd0ZBWmZLclB6eEYydlBvSk5mMStVQ2RnMVhHQWpCd1gxemQ5V0dxWWtxbUw1U0ZxdzFReVNqcjF6SmZwSk05KzFyZER3U1BMTU9QT2pLdWlYam9VL3BVVWVHOVJ3bWhZM0JoWkZrTm5nQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUFpZUUkvVkZ2RHhMWjU4MEI2VEZuaW1neG1WTlBIL1paajdkOFVmcFVHY2xIR1gzRUVWcXlUL0x0KzhFMXdCbmw2MjduMlAyaDg5ZHNuUnhwUDdtRkIxT2pnPTwvYzJwYTptYW5pZmVzdD48L21ldGFkYXRhPgo8cGF0aCBkPSJNMCA1Mi44VjUyLjVIMTYuN1Y1Mi44QzE2LjcgNTkuNSAxOS43IDYzIDI2LjMgNjNDMzIuNyA2MyAzNS43IDU5LjQgMzUuNyA1Mi44VjguNUg1Mi44VjUyLjhDNTIuOCA2OC42IDQzLjMgNzguOSAyNi4yIDc4LjlDOS40MDAwMSA3OC44IDAgNjguNiAwIDUyLjhaIiBmaWxsPSIjRkY3NjFBIj48L3BhdGg+CjxwYXRoIGQ9Ik02Mi4zOTk5IDUyLjNWMjUuM0g3OC4xOTk5VjUyLjNDNzguMTk5OSA2MC41IDgyLjE5OTkgNjQuMDAwMSA4OC4wOTk5IDY0LjAwMDFDOTMuOTk5OSA2NC4wMDAxIDk3Ljk5OTkgNjAuNSA5Ny45OTk5IDUyLjNWMjUuM0gxMTMuOFY1Mi4zQzExMy44IDY5LjggMTAzLjUgNzguOCA4Ny45OTk5IDc4LjhDNzIuNDk5OSA3OC44IDYyLjM5OTkgNzAgNjIuMzk5OSA1Mi4zWiIgZmlsbD0iI0ZGNzYxQSI+PC9wYXRoPgo8cGF0aCBkPSJNMTI0LjQgOC4yOTk5OUMxMjQuNCAzLjQ5OTk5IDEyOCAwIDEzMi43IDBDMTM3LjUgMCAxNDEgMy41OTk5OSAxNDEgOC4yOTk5OUMxNDEgMTMuMSAxMzcuNCAxNi42IDEzMi43IDE2LjZDMTI4IDE2LjcgMTI0LjQgMTMuMSAxMjQuNCA4LjI5OTk5WiIgZmlsbD0iI0ZGNzYxQSI+PC9wYXRoPgo8cGF0aCBkPSJNMTQwLjYgMjUuM0gxMjQuOFY3Ny40MDAxSDE0MC42VjI1LjNaIiBmaWxsPSIjRkY3NjFBIj48L3BhdGg+CjxwYXRoIGQ9Ik0xNDkuNSA1MS40QzE0OS41IDM1LjYgMTYxLjEgMjQgMTc3LjYgMjRDMTkyLjEgMjQgMjAyLjYgMzMgMjA0LjggNDUuOEgxODguOEMxODcgNDEuNSAxODIuOSAzOC43IDE3Ny42IDM4LjdDMTcwLjQgMzguNyAxNjUuNiA0My45IDE2NS42IDUxLjRDMTY1LjYgNTguOSAxNzAuNSA2NC4xIDE3Ny42IDY0LjFDMTgyLjkgNjQuMSAxODcgNjEuNCAxODguOCA1N0gyMDQuOEMyMDIuNiA2OS45IDE5MiA3OC44IDE3Ny42IDc4LjhDMTYxLjEgNzguOCAxNDkuNSA2Ny4yIDE0OS41IDUxLjRaIiBmaWxsPSIjRkY3NjFBIj48L3BhdGg+CjxwYXRoIGQ9Ik0yMTIuMiA4Mi41MDAxSDIyOEMyMjkuNiA4Ni4wMDAxIDIzMi4zIDg3LjQwMDEgMjM3LjQgODcuNDAwMUMyNDQuNCA4Ny40MDAxIDI0Ny40IDg0LjEwMDEgMjQ3LjQgNzYuMjAwMVY3MS4wMDAxQzI0NC40IDc1LjUwMDEgMjM5LjkgNzguMDAwMSAyMzQuNCA3OC4wMDAxQzIyMy40IDc4LjAwMDEgMjExLjcgNzAuNjAwMSAyMTEuNyA1MS41MDAxVjI1LjNIMjI3LjVWNTEuNTAwMUMyMjcuNSA1OS43MDAxIDIzMS41IDYzLjIwMDEgMjM3LjQgNjMuMjAwMUMyNDMuMSA2My4yMDAxIDI0Ny4zIDU5LjUwMDEgMjQ3LjMgNTEuNTAwMVYyNS4zSDI2My4xVjc1LjcwMDFDMjYzLjEgOTMuOTAwMSAyNTEuNSAxMDEuMSAyMzcuMiAxMDEuMUMyMjUuMSAxMDEuMSAyMTQuOSA5NS40MDAxIDIxMi4yIDgyLjUwMDFaIiBmaWxsPSIjRkY3NjFBIj48L3BhdGg+CjxwYXRoIGQ9Ik01MTAuNiAyOS4wOTk5QzUxMC42IDMxLjk5OTkgNTA4LjMgMzQuMjk5OSA1MDUuNCAzNC4yOTk5QzUwMi41IDM0LjI5OTkgNTAwLjIgMzEuOTk5OSA1MDAuMiAyOS4wOTk5QzUwMC4yIDI2LjE5OTkgNTAyLjUgMjMuODk5OSA1MDUuNCAyMy44OTk5QzUwOC4zIDIzLjg5OTkgNTEwLjYgMjYuMTk5OSA1MTAuNiAyOS4wOTk5Wk01MDkuNSAyOS4wOTk5QzUwOS41IDI2Ljc5OTkgNTA3LjcgMjQuOTk5OSA1MDUuNCAyNC45OTk5QzUwMy4xIDI0Ljk5OTkgNTAxLjMgMjYuNzk5OSA1MDEuMyAyOS4wOTk5QzUwMS4zIDMxLjM5OTkgNTAzLjIgMzMuMTk5OSA1MDUuNCAzMy4xOTk5QzUwNy43IDMzLjE5OTkgNTA5LjUgMzEuMzk5OSA1MDkuNSAyOS4wOTk5Wk01MDYuNSAyOS43OTk5TDUwNy45IDMxLjU5OTlINTA2LjNMNTA1LjEgMjkuODk5OUg1MDQuOFYzMS41OTk5SDUwMy41VjI2LjU5OTlINTA2LjFDNTA3LjIgMjYuNTk5OSA1MDcuOCAyNy4yOTk5IDUwNy44IDI4LjE5OTlDNTA3LjcgMjguOTk5OSA1MDcuMiAyOS41OTk5IDUwNi41IDI5Ljc5OTlaTTUwNS43IDI3Ljc5OTlINTA0LjhWMjguODk5OUg1MDUuN0M1MDYuMiAyOC44OTk5IDUwNi4zIDI4LjY5OTkgNTA2LjMgMjguMjk5OUM1MDYuMyAyNy44OTk5IDUwNi4xIDI3Ljc5OTkgNTA1LjcgMjcuNzk5OVoiIGZpbGw9IiNGRjc2MUEiPjwvcGF0aD4KPHBhdGggZD0iTTI3NS4xIDYyLjhIMjgyLjNDMjgyLjYgNjguNCAyODcuNyA3Mi40IDI5Ni40IDcyLjRDMzA1LjUgNzIuNCAzMTAuNSA2OC4yIDMxMC41IDYyLjZDMzEwLjUgNTYuMyAzMDMuOCA1NS41IDI5Ni40IDU0LjZDMjg3IDUzLjQgMjc2LjMgNTIgMjc2LjMgNDAuNUMyNzYuMyAzMC43IDI4NCAyNCAyOTYuMyAyNEMzMDguNSAyNCAzMTYgMzAuOCAzMTYuMiAzOS42SDMwOS4yQzMwOC45IDM0LjQgMzA0LjEgMzAuNCAyOTYuMSAzMC40QzI4OC4xIDMwLjQgMjgzLjMgMzQuNCAyODMuMyAzOS44QzI4My4zIDQ2LjIgMjkwLjEgNDcgMjk3LjQgNDcuOUMzMDUuNSA0OSAzMTcuNiA1MC4yIDMxNy42IDYyQzMxNy42IDcxLjkgMzA5LjMgNzguOCAyOTYuMyA3OC44QzI4My42IDc4LjggMjc1LjUgNzIgMjc1LjEgNjIuOFoiIGZpbGw9IiNGRjc2MUEiPjwvcGF0aD4KPHBhdGggZD0iTTMyNi4zIDUyLjU5OTlWMjUuMzk5OUgzMzMuNFY1Mi41OTk5QzMzMy40IDY1LjM5OTkgMzQwLjggNzIuMjk5OSAzNTIuMSA3Mi4yOTk5QzM2My40IDcyLjI5OTkgMzcwLjggNjUuMjk5OSAzNzAuOCA1Mi41OTk5VjI1LjM5OTlIMzc3LjlWNTIuNTk5OUMzNzcuOSA2OS44OTk5IDM2Ny42IDc4Ljg5OTkgMzUyLjEgNzguODk5OUMzMzYuNyA3OC43OTk5IDMyNi4zIDY5Ljg5OTkgMzI2LjMgNTIuNTk5OVoiIGZpbGw9IiNGRjc2MUEiPjwvcGF0aD4KPHBhdGggZD0iTTM4OC4zIDkuNzk5ODdDMzg4LjMgNi42OTk4NyAzOTAuNiA0LjM5OTkgMzkzLjcgNC4zOTk5QzM5Ni44IDQuMzk5OSAzOTkuMSA2LjY5OTg3IDM5OS4xIDkuNzk5ODdDMzk5LjEgMTIuODk5OSAzOTYuOCAxNS4xOTk5IDM5My43IDE1LjE5OTlDMzkwLjYgMTUuMTk5OSAzODguMyAxMi44OTk5IDM4OC4zIDkuNzk5ODdaIiBmaWxsPSIjRkY3NjFBIj48L3BhdGg+CjxwYXRoIGQ9Ik0zOTcuMyAyNS4zSDM5MC4yVjc3LjQwMDFIMzk3LjNWMjUuM1oiIGZpbGw9IiNGRjc2MUEiPjwvcGF0aD4KPHBhdGggZD0iTTQzNy44IDMxLjc5OTlWMjUuMzk5OUg0MTYuNlY2Ljg5OTlINDA5LjVWNTguMjk5OUM0MDkuNSA3MS45OTk5IDQxNy44IDc4Ljc5OTkgNDI5LjkgNzguODk5OVY3Mi4zOTk5QzQyMS44IDcyLjM5OTkgNDE2LjYgNjcuNzk5OSA0MTYuNiA1OC4zOTk5VjMxLjg5OTlINDM3LjhWMzEuNzk5OVoiIGZpbGw9IiNGRjc2MUEiPjwvcGF0aD4KPHBhdGggZD0iTTQ0My4zIDUxLjRDNDQzLjMgMzUuNiA0NTQuOSAyNCA0NzEuNCAyNEM0ODcuOSAyNCA0OTkuMyAzNS42IDQ5OS4zIDUxLjRWNTMuN0g0NTAuNkM0NTEuNiA2NC42IDQ1OS43IDcyLjMgNDcxLjQgNzIuM0M0NzkuNiA3Mi4zIDQ4NiA2OC45IDQ4OS4zIDYyLjlINDk3QzQ5MyA3Mi41IDQ4My41IDc4LjggNDcxLjQgNzguOEM0NTQuOSA3OC44IDQ0My4zIDY3LjIgNDQzLjMgNTEuNFpNNDkxLjggNDcuNEM0OTAuMSAzNi44IDQ4MS45IDMwLjUgNDcxLjMgMzAuNUM0NjAuNCAzMC41IDQ1Mi4zIDM3LjIgNDUwLjcgNDcuNEg0OTEuOFoiIGZpbGw9IiNGRjc2MUEiPjwvcGF0aD4KPHBhdGggZD0iTTQzOC4zIDcyLjNINDI5LjlWNzguOEg0MzguM1Y3Mi4zWiIgZmlsbD0iI0ZGNzYxQSI+PC9wYXRoPgo8L3N2Zz4=",
  "white": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTExIiBoZWlnaHQ9IjEwMiIgdmlld0JveD0iMCAwIDUxMSAxMDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6YzJwYT0iaHR0cDovL2MycGEub3JnL21hbmlmZXN0Ij48bWV0YWRhdGE+PGMycGE6bWFuaWZlc3Q+QUFBV2dtcDFiV0lBQUFBZWFuVnRaR015Y0dFQUVRQVFnQUFBcWdBNG0zRURZekp3WVFBQUFCWmNhblZ0WWdBQUFFZHFkVzFrWXpKdFlRQVJBQkNBQUFDcUFEaWJjUU4xY200Nll6SndZVHBoWkRaa05UbGhZeTA1WW1WaExUUXpNRGN0WWpoaFppMDBZamxoTmpBMVpqQTBPR0VBQUFBRGwycDFiV0lBQUFBcGFuVnRaR015WVhNQUVRQVFnQUFBcWdBNG0zRURZekp3WVM1aGMzTmxjblJwYjI1ekFBQUFBTHhxZFcxaUFBQUFSR3AxYldSalltOXlBQkVBRUlBQUFLb0FPSnR4RTJNeWNHRXVhVzVuY21Wa2FXVnVkQzUyTXdBQUFBQVlZekp6YVA0bnJSd2g2aWRUYmhCWlhSa3hCTGdBQUFCd1kySnZjcU5wWkdNNlptOXliV0YwYldsdFlXZGxMM04yWnl0NGJXeHFhVzV6ZEdGdVkyVkpSSGdzZUcxd09tbHBaRG94WXpJNVpXTTNNQzA0WkRNMExUUXhPR1V0T0RReE5DMWhZVGswWVdRek9USmtZVEpzY21Wc1lYUnBiMjV6YUdsd2FIQmhjbVZ1ZEU5bUFBQUI0bXAxYldJQUFBQkJhblZ0WkdOaWIzSUFFUUFRZ0FBQXFnQTRtM0VUWXpKd1lTNWhZM1JwYjI1ekxuWXlBQUFBQUJoak1uTm9BSjdhTk9GR3U4dHZTb0xLR04zbGpRQUFBWmxqWW05eW9tZGhZM1JwYjI1emdxSm1ZV04wYVc5dWEyTXljR0V1YjNCbGJtVmthbkJoY21GdFpYUmxjbk9oYTJsdVozSmxaR2xsYm5SemdhSmpkWEpzZUMxelpXeG1JMnAxYldKbVBXTXljR0V1WVhOelpYSjBhVzl1Y3k5ak1uQmhMbWx1WjNKbFpHbGxiblF1ZGpOa2FHRnphRmdnV3JTbW15N2sxSHc3K0RvTjQrejY4WUNvNVFnNFRJRDBFSUtPVUo0UlV6S2tabUZqZEdsdmJuZ2RZMjl0TG1GdWRHaHliM0JwWXk1amJHRjFaR1V1Y0hKdmRtbGtaV1JxY0dGeVlXMWxkR1Z5YzZGNEgyTnZiUzVoYm5Sb2NtOXdhV011YjNKcFoybHVMV052Ym1acFpHVnVZMlZuZFc1cmJtOTNibXRrWlhOamNtbHdkR2x2Ym5obVEyeGhkV1JsSUhCeWIzWnBaR1ZrSUhSb2FYTWdabWxzWlNCaGRDQjBhR1VnY21WeGRXVnpkQ0J2WmlCaElIVnpaWElnWVc1a0lHMWhlU0JvWVhabElHTnlaV0YwWldRZ2IzSWdiVzlrYVdacFpXUWdkR2hsSUdacGJHVWdZMjl1ZEdWdWRITXViWE52Wm5SM1lYSmxRV2RsYm5TaFpHNWhiV1ZtUTJ4aGRXUmxjbUZzYkVGamRHbHZibk5KYm1Oc2RXUmxaUFVBQUFESWFuVnRZZ0FBQUVCcWRXMWtZMkp2Y2dBUkFCQ0FBQUNxQURpYmNSTmpNbkJoTG1oaGMyZ3VaR0YwWVFBQUFBQVlZekp6YUNab3hheWgvclpkZTM3TzJ1Sm1oa0lBQUFDQVkySnZjcVZqWVd4blpuTm9ZVEkxTm1Od1lXUk5BQUFBQUFBQUFBQUFBQUFBQUdSb1lYTm9XQ0N5MEpHOUhoaDVFcWZZRFEyUW5xM2FvOVVYWS9TU1ZsbmVJbVI1cWxpazUyUnVZVzFsYm1wMWJXSm1JRzFoYm1sbVpYTjBhbVY0WTJ4MWMybHZibk9Cb21WemRHRnlkQmlpWm14bGJtZDBhQmtlQkFBQUFqNXFkVzFpQUFBQUoycDFiV1JqTW1Oc0FCRUFFSUFBQUtvQU9KdHhBMk15Y0dFdVkyeGhhVzB1ZGpJQUFBQUNEMk5pYjNLbFkyRnNaMlp6YUdFeU5UWnBjMmxuYm1GMGRYSmxlRTF6Wld4bUkycDFiV0ptUFM5ak1uQmhMM1Z5Ympwak1uQmhPbUZrTm1RMU9XRmpMVGxpWldFdE5ETXdOeTFpT0dGbUxUUmlPV0UyTURWbU1EUTRZUzlqTW5CaExuTnBaMjVoZEhWeVpXcHBibk4wWVc1alpVbEVlQ3g0YlhBNmFXbGtPamczTVdGa01UazFMVGxpTVRFdE5HTmlNaTFpWlRjMExUUmpPR05sTmpZNU5HWTNOM0pqY21WaGRHVmtYMkZ6YzJWeWRHbHZibk9Eb21OMWNteDRMWE5sYkdZamFuVnRZbVk5WXpKd1lTNWhjM05sY25ScGIyNXpMMk15Y0dFdWFXNW5jbVZrYVdWdWRDNTJNMlJvWVhOb1dDQmF0S2FiTHVUVWZEdjRPZzNqN1ByeGdLamxDRGhNZ1BRUWdvNVFuaEZUTXFKamRYSnNlQ3B6Wld4bUkycDFiV0ptUFdNeWNHRXVZWE56WlhKMGFXOXVjeTlqTW5CaExtRmpkR2x2Ym5NdWRqSmthR0Z6YUZnZ1RpK0lsb1hmbGkzZ2hoZHRxaGd4Y0NCbVcvTkZxbi9FL3h6bnhlL3lkQVNpWTNWeWJIZ3BjMlZzWmlOcWRXMWlaajFqTW5CaExtRnpjMlZ5ZEdsdmJuTXZZekp3WVM1b1lYTm9MbVJoZEdGa2FHRnphRmdnK1NKbzFuQ2w1U0ltRUtHM1ltR205Z3lJTHZSblE0VElucjE2d1QzcGRLeDBZMnhoYVcxZloyVnVaWEpoZEc5eVgybHVabStqWkc1aGJXVnZRVzUwYUhKdmNHbGpJRVpwYkdWelozWmxjbk5wYjI1bE1TNHdMakJyYzNCbFkxWmxjbk5wYjI1bE1pNDBMakFBQUJBNGFuVnRZZ0FBQUNocWRXMWtZekpqY3dBUkFCQ0FBQUNxQURpYmNRTmpNbkJoTG5OcFoyNWhkSFZ5WlFBQUFCQUlZMkp2Y3RLRVdRSVNvZ0VtR0NGWkFnb3dnZ0lHTUlJQmphQURBZ0VDQWhSQTVhQUs3c0k1MEw2NGcvb0dRZ1U5WjFVVEFEQUtCZ2dxaGtqT1BRUURBekJKTVJjd0ZRWURWUVFLRXc1QmJuUm9jbTl3YVdNc0lGQkNRekV1TUN3R0ExVUVBeE1sUVc1MGFISnZjR2xqSUVOdmJuUmxiblFnUTNKbFpHVnVkR2xoYkhNZ1VtOXZkQ0JEUVRBZUZ3MHlOakE0TURjeE9EUXpOVFphRncweU9EQTRNRFl4T1RRek5UWmFNRVF4RnpBVkJnTlZCQW9URGtGdWRHaHliM0JwWXl3Z1VFSkRNU2t3SndZRFZRUURFeUJCYm5Sb2NtOXdhV01nUTJ4aGRXUmxJRU52Ym5SbGJuUWdVMmxuYm1sdVp6QlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJKaDZDbXZMVUJnRkZOVTB2VUtsT1Z0RTZkamQxN0w1U3V3WDBMZW1GaXNCTTNka2QvM2N5anhGQTNRbzVTNDZmWDAvaWhZMFZaN21mYjlLRjcwM3Q1T2pXREJXTUE0R0ExVWREd0VCL3dRRUF3SUhnREFWQmdOVkhTVUVEakFNQmdvckJnRUVBWVBvWGdJQk1Bd0dBMVVkRXdFQi93UUNNQUF3SHdZRFZSMGpCQmd3Rm9BVXpsSGlCSUZPWkZzaitPUEV6NW8rbk1IWFhNSXdDZ1lJS29aSXpqMEVBd01EWndBd1pBSXdNWE1kRko0QmV0TExWWTdPUnVFOW5vcWJiQVpPWm4vYUFyWHlUd0ZBWmZLclB6eEYydlBvSk5mMStVQ2RnMVhHQWpCd1gxemQ5V0dxWWtxbUw1U0ZxdzFReVNqcjF6SmZwSk05KzFyZER3U1BMTU9QT2pLdWlYam9VL3BVVWVHOVJ3bWhZM0JoWkZrTm5nQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUFpZUUFSaVF3VTZuYjhaYmw1TUdSSE1yYW43RGRCZ1U2YVBENkRva0M5MXBxNURpTTdYVzVkNDQrL29UMmwvYjZNeXlISnNwWWsxRlVPVS81UmRaaE0zbXNvPTwvYzJwYTptYW5pZmVzdD48L21ldGFkYXRhPgo8cGF0aCBkPSJNMCA1Mi44VjUyLjVIMTYuN1Y1Mi44QzE2LjcgNTkuNSAxOS43IDYzIDI2LjMgNjNDMzIuNyA2MyAzNS43IDU5LjQgMzUuNyA1Mi44VjguNUg1Mi44VjUyLjhDNTIuOCA2OC42IDQzLjMgNzguOSAyNi4yIDc4LjlDOS40MDAwMSA3OC44IDAgNjguNiAwIDUyLjhaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8cGF0aCBkPSJNNjIuMzk5OSA1Mi4zVjI1LjNINzguMTk5OVY1Mi4zQzc4LjE5OTkgNjAuNSA4Mi4xOTk5IDY0LjAwMDEgODguMDk5OSA2NC4wMDAxQzkzLjk5OTkgNjQuMDAwMSA5Ny45OTk5IDYwLjUgOTcuOTk5OSA1Mi4zVjI1LjNIMTEzLjhWNTIuM0MxMTMuOCA2OS44IDEwMy41IDc4LjggODcuOTk5OSA3OC44QzcyLjQ5OTkgNzguOCA2Mi4zOTk5IDcwIDYyLjM5OTkgNTIuM1oiIGZpbGw9IndoaXRlIj48L3BhdGg+CjxwYXRoIGQ9Ik0xMjQuNCA4LjI5OTk5QzEyNC40IDMuNDk5OTkgMTI4IDAgMTMyLjcgMEMxMzcuNSAwIDE0MSAzLjU5OTk5IDE0MSA4LjI5OTk5QzE0MSAxMy4xIDEzNy40IDE2LjYgMTMyLjcgMTYuNkMxMjggMTYuNyAxMjQuNCAxMy4xIDEyNC40IDguMjk5OTlaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8cGF0aCBkPSJNMTQwLjYgMjUuM0gxMjQuOFY3Ny40MDAxSDE0MC42VjI1LjNaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8cGF0aCBkPSJNMTQ5LjUgNTEuNEMxNDkuNSAzNS42IDE2MS4xIDI0IDE3Ny42IDI0QzE5Mi4xIDI0IDIwMi42IDMzIDIwNC44IDQ1LjhIMTg4LjhDMTg3IDQxLjUgMTgyLjkgMzguNyAxNzcuNiAzOC43QzE3MC40IDM4LjcgMTY1LjYgNDMuOSAxNjUuNiA1MS40QzE2NS42IDU4LjkgMTcwLjUgNjQuMSAxNzcuNiA2NC4xQzE4Mi45IDY0LjEgMTg3IDYxLjQgMTg4LjggNTdIMjA0LjhDMjAyLjYgNjkuOSAxOTIgNzguOCAxNzcuNiA3OC44QzE2MS4xIDc4LjggMTQ5LjUgNjcuMiAxNDkuNSA1MS40WiIgZmlsbD0id2hpdGUiPjwvcGF0aD4KPHBhdGggZD0iTTIxMi4yIDgyLjUwMDFIMjI4QzIyOS42IDg2LjAwMDEgMjMyLjMgODcuNDAwMSAyMzcuNCA4Ny40MDAxQzI0NC40IDg3LjQwMDEgMjQ3LjQgODQuMTAwMSAyNDcuNCA3Ni4yMDAxVjcxLjAwMDFDMjQ0LjQgNzUuNTAwMSAyMzkuOSA3OC4wMDAxIDIzNC40IDc4LjAwMDFDMjIzLjQgNzguMDAwMSAyMTEuNyA3MC42MDAxIDIxMS43IDUxLjUwMDFWMjUuM0gyMjcuNVY1MS41MDAxQzIyNy41IDU5LjcwMDEgMjMxLjUgNjMuMjAwMSAyMzcuNCA2My4yMDAxQzI0My4xIDYzLjIwMDEgMjQ3LjMgNTkuNTAwMSAyNDcuMyA1MS41MDAxVjI1LjNIMjYzLjFWNzUuNzAwMUMyNjMuMSA5My45MDAxIDI1MS41IDEwMS4xIDIzNy4yIDEwMS4xQzIyNS4xIDEwMS4xIDIxNC45IDk1LjQwMDEgMjEyLjIgODIuNTAwMVoiIGZpbGw9IndoaXRlIj48L3BhdGg+CjxwYXRoIGQ9Ik01MTAuNiAyOS4wOTk5QzUxMC42IDMxLjk5OTkgNTA4LjMgMzQuMjk5OSA1MDUuNCAzNC4yOTk5QzUwMi41IDM0LjI5OTkgNTAwLjIgMzEuOTk5OSA1MDAuMiAyOS4wOTk5QzUwMC4yIDI2LjE5OTkgNTAyLjUgMjMuODk5OSA1MDUuNCAyMy44OTk5QzUwOC4zIDIzLjg5OTkgNTEwLjYgMjYuMTk5OSA1MTAuNiAyOS4wOTk5Wk01MDkuNSAyOS4wOTk5QzUwOS41IDI2Ljc5OTkgNTA3LjcgMjQuOTk5OSA1MDUuNCAyNC45OTk5QzUwMy4xIDI0Ljk5OTkgNTAxLjMgMjYuNzk5OSA1MDEuMyAyOS4wOTk5QzUwMS4zIDMxLjM5OTkgNTAzLjIgMzMuMTk5OSA1MDUuNCAzMy4xOTk5QzUwNy43IDMzLjE5OTkgNTA5LjUgMzEuMzk5OSA1MDkuNSAyOS4wOTk5Wk01MDYuNSAyOS43OTk5TDUwNy45IDMxLjU5OTlINTA2LjNMNTA1LjEgMjkuODk5OUg1MDQuOFYzMS41OTk5SDUwMy41VjI2LjU5OTlINTA2LjFDNTA3LjIgMjYuNTk5OSA1MDcuOCAyNy4yOTk5IDUwNy44IDI4LjE5OTlDNTA3LjcgMjguOTk5OSA1MDcuMiAyOS41OTk5IDUwNi41IDI5Ljc5OTlaTTUwNS43IDI3Ljc5OTlINTA0LjhWMjguODk5OUg1MDUuN0M1MDYuMiAyOC44OTk5IDUwNi4zIDI4LjY5OTkgNTA2LjMgMjguMjk5OUM1MDYuMyAyNy44OTk5IDUwNi4xIDI3Ljc5OTkgNTA1LjcgMjcuNzk5OVoiIGZpbGw9IndoaXRlIj48L3BhdGg+CjxwYXRoIGQ9Ik0yNzUuMSA2Mi44SDI4Mi4zQzI4Mi42IDY4LjQgMjg3LjcgNzIuNCAyOTYuNCA3Mi40QzMwNS41IDcyLjQgMzEwLjUgNjguMiAzMTAuNSA2Mi42QzMxMC41IDU2LjMgMzAzLjggNTUuNSAyOTYuNCA1NC42QzI4NyA1My40IDI3Ni4zIDUyIDI3Ni4zIDQwLjVDMjc2LjMgMzAuNyAyODQgMjQgMjk2LjMgMjRDMzA4LjUgMjQgMzE2IDMwLjggMzE2LjIgMzkuNkgzMDkuMkMzMDguOSAzNC40IDMwNC4xIDMwLjQgMjk2LjEgMzAuNEMyODguMSAzMC40IDI4My4zIDM0LjQgMjgzLjMgMzkuOEMyODMuMyA0Ni4yIDI5MC4xIDQ3IDI5Ny40IDQ3LjlDMzA1LjUgNDkgMzE3LjYgNTAuMiAzMTcuNiA2MkMzMTcuNiA3MS45IDMwOS4zIDc4LjggMjk2LjMgNzguOEMyODMuNiA3OC44IDI3NS41IDcyIDI3NS4xIDYyLjhaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8cGF0aCBkPSJNMzI2LjMgNTIuNTk5OVYyNS4zOTk5SDMzMy40VjUyLjU5OTlDMzMzLjQgNjUuMzk5OSAzNDAuOCA3Mi4yOTk5IDM1Mi4xIDcyLjI5OTlDMzYzLjQgNzIuMjk5OSAzNzAuOCA2NS4yOTk5IDM3MC44IDUyLjU5OTlWMjUuMzk5OUgzNzcuOVY1Mi41OTk5QzM3Ny45IDY5Ljg5OTkgMzY3LjYgNzguODk5OSAzNTIuMSA3OC44OTk5QzMzNi43IDc4Ljc5OTkgMzI2LjMgNjkuODk5OSAzMjYuMyA1Mi41OTk5WiIgZmlsbD0id2hpdGUiPjwvcGF0aD4KPHBhdGggZD0iTTM4OC4zIDkuNzk5ODdDMzg4LjMgNi42OTk4NyAzOTAuNiA0LjM5OTkgMzkzLjcgNC4zOTk5QzM5Ni44IDQuMzk5OSAzOTkuMSA2LjY5OTg3IDM5OS4xIDkuNzk5ODdDMzk5LjEgMTIuODk5OSAzOTYuOCAxNS4xOTk5IDM5My43IDE1LjE5OTlDMzkwLjYgMTUuMTk5OSAzODguMyAxMi44OTk5IDM4OC4zIDkuNzk5ODdaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8cGF0aCBkPSJNMzk3LjMgMjUuM0gzOTAuMlY3Ny40MDAxSDM5Ny4zVjI1LjNaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8cGF0aCBkPSJNNDM3LjggMzEuNzk5OVYyNS4zOTk5SDQxNi42VjYuODk5OUg0MDkuNVY1OC4yOTk5QzQwOS41IDcxLjk5OTkgNDE3LjggNzguNzk5OSA0MjkuOSA3OC44OTk5VjcyLjM5OTlDNDIxLjggNzIuMzk5OSA0MTYuNiA2Ny43OTk5IDQxNi42IDU4LjM5OTlWMzEuODk5OUg0MzcuOFYzMS43OTk5WiIgZmlsbD0id2hpdGUiPjwvcGF0aD4KPHBhdGggZD0iTTQ0My4zIDUxLjRDNDQzLjMgMzUuNiA0NTQuOSAyNCA0NzEuNCAyNEM0ODcuOSAyNCA0OTkuMyAzNS42IDQ5OS4zIDUxLjRWNTMuN0g0NTAuNkM0NTEuNiA2NC42IDQ1OS43IDcyLjMgNDcxLjQgNzIuM0M0NzkuNiA3Mi4zIDQ4NiA2OC45IDQ4OS4zIDYyLjlINDk3QzQ5MyA3Mi41IDQ4My41IDc4LjggNDcxLjQgNzguOEM0NTQuOSA3OC44IDQ0My4zIDY3LjIgNDQzLjMgNTEuNFpNNDkxLjggNDcuNEM0OTAuMSAzNi44IDQ4MS45IDMwLjUgNDcxLjMgMzAuNUM0NjAuNCAzMC41IDQ1Mi4zIDM3LjIgNDUwLjcgNDcuNEg0OTEuOFoiIGZpbGw9IndoaXRlIj48L3BhdGg+CjxwYXRoIGQ9Ik00MzguMyA3Mi4zSDQyOS45Vjc4LjhINDM4LjNWNzIuM1oiIGZpbGw9IndoaXRlIj48L3BhdGg+Cjwvc3ZnPg==",
  "black": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTExIiBoZWlnaHQ9IjEwMiIgdmlld0JveD0iMCAwIDUxMSAxMDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6YzJwYT0iaHR0cDovL2MycGEub3JnL21hbmlmZXN0Ij48bWV0YWRhdGE+PGMycGE6bWFuaWZlc3Q+QUFBV2dtcDFiV0lBQUFBZWFuVnRaR015Y0dFQUVRQVFnQUFBcWdBNG0zRURZekp3WVFBQUFCWmNhblZ0WWdBQUFFZHFkVzFrWXpKdFlRQVJBQkNBQUFDcUFEaWJjUU4xY200Nll6SndZVHBoTVRKa1ltWXlaUzAyWWpFM0xUUmhPV010T1dRNE1TMWtaamN4TVRsaE0ySTJNV1lBQUFBRGwycDFiV0lBQUFBcGFuVnRaR015WVhNQUVRQVFnQUFBcWdBNG0zRURZekp3WVM1aGMzTmxjblJwYjI1ekFBQUFBTHhxZFcxaUFBQUFSR3AxYldSalltOXlBQkVBRUlBQUFLb0FPSnR4RTJNeWNHRXVhVzVuY21Wa2FXVnVkQzUyTXdBQUFBQVlZekp6YUJRRmphR1pabldXVTZsUXhjN0Q1RWtBQUFCd1kySnZjcU5wWkdNNlptOXliV0YwYldsdFlXZGxMM04yWnl0NGJXeHFhVzV6ZEdGdVkyVkpSSGdzZUcxd09tbHBaRHBqTVdFMU0yVmhZaTFoWkRSbExUUTJaamt0WWpGbE9TMWtNRGc0TkRnMFlqa3dObVJzY21Wc1lYUnBiMjV6YUdsd2FIQmhjbVZ1ZEU5bUFBQUI0bXAxYldJQUFBQkJhblZ0WkdOaWIzSUFFUUFRZ0FBQXFnQTRtM0VUWXpKd1lTNWhZM1JwYjI1ekxuWXlBQUFBQUJoak1uTm9hTjA3b092TktlRml5c0x1VitIbm5BQUFBWmxqWW05eW9tZGhZM1JwYjI1emdxSm1ZV04wYVc5dWEyTXljR0V1YjNCbGJtVmthbkJoY21GdFpYUmxjbk9oYTJsdVozSmxaR2xsYm5SemdhSmpkWEpzZUMxelpXeG1JMnAxYldKbVBXTXljR0V1WVhOelpYSjBhVzl1Y3k5ak1uQmhMbWx1WjNKbFpHbGxiblF1ZGpOa2FHRnphRmdnODlIUEVBbm5HVG55dGpCRC9VOHRLT3AvUXo3WEdMTEpJWjU1RDdEdC9maWtabUZqZEdsdmJuZ2RZMjl0TG1GdWRHaHliM0JwWXk1amJHRjFaR1V1Y0hKdmRtbGtaV1JxY0dGeVlXMWxkR1Z5YzZGNEgyTnZiUzVoYm5Sb2NtOXdhV011YjNKcFoybHVMV052Ym1acFpHVnVZMlZuZFc1cmJtOTNibXRrWlhOamNtbHdkR2x2Ym5obVEyeGhkV1JsSUhCeWIzWnBaR1ZrSUhSb2FYTWdabWxzWlNCaGRDQjBhR1VnY21WeGRXVnpkQ0J2WmlCaElIVnpaWElnWVc1a0lHMWhlU0JvWVhabElHTnlaV0YwWldRZ2IzSWdiVzlrYVdacFpXUWdkR2hsSUdacGJHVWdZMjl1ZEdWdWRITXViWE52Wm5SM1lYSmxRV2RsYm5TaFpHNWhiV1ZtUTJ4aGRXUmxjbUZzYkVGamRHbHZibk5KYm1Oc2RXUmxaUFVBQUFESWFuVnRZZ0FBQUVCcWRXMWtZMkp2Y2dBUkFCQ0FBQUNxQURpYmNSTmpNbkJoTG1oaGMyZ3VaR0YwWVFBQUFBQVlZekp6YUR6a21SOXlNakpLdWE4YThIMFpMb1VBQUFDQVkySnZjcVZqWVd4blpuTm9ZVEkxTm1Od1lXUk5BQUFBQUFBQUFBQUFBQUFBQUdSb1lYTm9XQ0JKNC83aXZrazFoeDVCLzIvMEpHcGRYMXN6eWYzU0t1UHE1cVhlTEVFbkZXUnVZVzFsYm1wMWJXSm1JRzFoYm1sbVpYTjBhbVY0WTJ4MWMybHZibk9Cb21WemRHRnlkQmlpWm14bGJtZDBhQmtlQkFBQUFqNXFkVzFpQUFBQUoycDFiV1JqTW1Oc0FCRUFFSUFBQUtvQU9KdHhBMk15Y0dFdVkyeGhhVzB1ZGpJQUFBQUNEMk5pYjNLbFkyRnNaMlp6YUdFeU5UWnBjMmxuYm1GMGRYSmxlRTF6Wld4bUkycDFiV0ptUFM5ak1uQmhMM1Z5Ympwak1uQmhPbUV4TW1SaVpqSmxMVFppTVRjdE5HRTVZeTA1WkRneExXUm1OekV4T1dFellqWXhaaTlqTW5CaExuTnBaMjVoZEhWeVpXcHBibk4wWVc1alpVbEVlQ3g0YlhBNmFXbGtPakkxTkdZek9EVXlMVGMxWmpZdE5EUXlZaTFpTTJJd0xXUmpPVGxpTnpVd016aGtOSEpqY21WaGRHVmtYMkZ6YzJWeWRHbHZibk9Eb21OMWNteDRMWE5sYkdZamFuVnRZbVk5WXpKd1lTNWhjM05sY25ScGIyNXpMMk15Y0dFdWFXNW5jbVZrYVdWdWRDNTJNMlJvWVhOb1dDRHowYzhRQ2VjWk9mSzJNRVA5VHkwbzZuOURQdGNZc3NraG5ua1BzTzM5K0tKamRYSnNlQ3B6Wld4bUkycDFiV0ptUFdNeWNHRXVZWE56WlhKMGFXOXVjeTlqTW5CaExtRmpkR2x2Ym5NdWRqSmthR0Z6YUZnZ2UyK1NDNHhYcE9yb20zZXFLenBjcnhkSFlVUGNRSUhmQ0QwbDd5dWwvY2FpWTNWeWJIZ3BjMlZzWmlOcWRXMWlaajFqTW5CaExtRnpjMlZ5ZEdsdmJuTXZZekp3WVM1b1lYTm9MbVJoZEdGa2FHRnphRmdnaUJqcUJ1b1plUUh0WnRzTVpoOVo4MWtFU2xBenJPVUVkN0I3YTBHbGg5VjBZMnhoYVcxZloyVnVaWEpoZEc5eVgybHVabStqWkc1aGJXVnZRVzUwYUhKdmNHbGpJRVpwYkdWelozWmxjbk5wYjI1bE1TNHdMakJyYzNCbFkxWmxjbk5wYjI1bE1pNDBMakFBQUJBNGFuVnRZZ0FBQUNocWRXMWtZekpqY3dBUkFCQ0FBQUNxQURpYmNRTmpNbkJoTG5OcFoyNWhkSFZ5WlFBQUFCQUlZMkp2Y3RLRVdRSVNvZ0VtR0NGWkFnb3dnZ0lHTUlJQmphQURBZ0VDQWhSQTVhQUs3c0k1MEw2NGcvb0dRZ1U5WjFVVEFEQUtCZ2dxaGtqT1BRUURBekJKTVJjd0ZRWURWUVFLRXc1QmJuUm9jbTl3YVdNc0lGQkNRekV1TUN3R0ExVUVBeE1sUVc1MGFISnZjR2xqSUVOdmJuUmxiblFnUTNKbFpHVnVkR2xoYkhNZ1VtOXZkQ0JEUVRBZUZ3MHlOakE0TURjeE9EUXpOVFphRncweU9EQTRNRFl4T1RRek5UWmFNRVF4RnpBVkJnTlZCQW9URGtGdWRHaHliM0JwWXl3Z1VFSkRNU2t3SndZRFZRUURFeUJCYm5Sb2NtOXdhV01nUTJ4aGRXUmxJRU52Ym5SbGJuUWdVMmxuYm1sdVp6QlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJKaDZDbXZMVUJnRkZOVTB2VUtsT1Z0RTZkamQxN0w1U3V3WDBMZW1GaXNCTTNka2QvM2N5anhGQTNRbzVTNDZmWDAvaWhZMFZaN21mYjlLRjcwM3Q1T2pXREJXTUE0R0ExVWREd0VCL3dRRUF3SUhnREFWQmdOVkhTVUVEakFNQmdvckJnRUVBWVBvWGdJQk1Bd0dBMVVkRXdFQi93UUNNQUF3SHdZRFZSMGpCQmd3Rm9BVXpsSGlCSUZPWkZzaitPUEV6NW8rbk1IWFhNSXdDZ1lJS29aSXpqMEVBd01EWndBd1pBSXdNWE1kRko0QmV0TExWWTdPUnVFOW5vcWJiQVpPWm4vYUFyWHlUd0ZBWmZLclB6eEYydlBvSk5mMStVQ2RnMVhHQWpCd1gxemQ5V0dxWWtxbUw1U0ZxdzFReVNqcjF6SmZwSk05KzFyZER3U1BMTU9QT2pLdWlYam9VL3BVVWVHOVJ3bWhZM0JoWkZrTm5nQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUFpZUUMyK2dGNmFZT1MyU0lHeVhKVVRFWFN0ZTRqeTAzRU01ZnRRSlN6RXpRME95L1EvekdmV3FscXBnMjVmSVFXNTNBNEZZWURpL3pwM3lPQ2FBZEF0bitzPTwvYzJwYTptYW5pZmVzdD48L21ldGFkYXRhPgo8cGF0aCBkPSJNMCA1Mi44VjUyLjVIMTYuN1Y1Mi44QzE2LjcgNTkuNSAxOS43IDYzIDI2LjMgNjNDMzIuNyA2MyAzNS43IDU5LjQgMzUuNyA1Mi44VjguNUg1Mi44VjUyLjhDNTIuOCA2OC42IDQzLjMgNzguOSAyNi4yIDc4LjlDOS40MDAwMSA3OC44IDAgNjguNiAwIDUyLjhaIiBmaWxsPSIjM0UzQTM5Ij48L3BhdGg+CjxwYXRoIGQ9Ik02Mi4zOTk5IDUyLjNWMjUuM0g3OC4xOTk5VjUyLjNDNzguMTk5OSA2MC41IDgyLjE5OTkgNjQuMDAwMSA4OC4wOTk5IDY0LjAwMDFDOTMuOTk5OSA2NC4wMDAxIDk3Ljk5OTkgNjAuNSA5Ny45OTk5IDUyLjNWMjUuM0gxMTMuOFY1Mi4zQzExMy44IDY5LjggMTAzLjUgNzguOCA4Ny45OTk5IDc4LjhDNzIuNDk5OSA3OC44IDYyLjM5OTkgNzAgNjIuMzk5OSA1Mi4zWiIgZmlsbD0iIzNFM0EzOSI+PC9wYXRoPgo8cGF0aCBkPSJNMTI0LjQgOC4yOTk5OUMxMjQuNCAzLjQ5OTk5IDEyOCAwIDEzMi43IDBDMTM3LjUgMCAxNDEgMy41OTk5OSAxNDEgOC4yOTk5OUMxNDEgMTMuMSAxMzcuNCAxNi42IDEzMi43IDE2LjZDMTI4IDE2LjcgMTI0LjQgMTMuMSAxMjQuNCA4LjI5OTk5WiIgZmlsbD0iIzNFM0EzOSI+PC9wYXRoPgo8cGF0aCBkPSJNMTQwLjYgMjUuM0gxMjQuOFY3Ny40MDAxSDE0MC42VjI1LjNaIiBmaWxsPSIjM0UzQTM5Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xNDkuNSA1MS40QzE0OS41IDM1LjYgMTYxLjEgMjQgMTc3LjYgMjRDMTkyLjEgMjQgMjAyLjYgMzMgMjA0LjggNDUuOEgxODguOEMxODcgNDEuNSAxODIuOSAzOC43IDE3Ny42IDM4LjdDMTcwLjQgMzguNyAxNjUuNiA0My45IDE2NS42IDUxLjRDMTY1LjYgNTguOSAxNzAuNSA2NC4xIDE3Ny42IDY0LjFDMTgyLjkgNjQuMSAxODcgNjEuNCAxODguOCA1N0gyMDQuOEMyMDIuNiA2OS45IDE5MiA3OC44IDE3Ny42IDc4LjhDMTYxLjEgNzguOCAxNDkuNSA2Ny4yIDE0OS41IDUxLjRaIiBmaWxsPSIjM0UzQTM5Ij48L3BhdGg+CjxwYXRoIGQ9Ik0yMTIuMiA4Mi41MDAxSDIyOEMyMjkuNiA4Ni4wMDAxIDIzMi4zIDg3LjQwMDEgMjM3LjQgODcuNDAwMUMyNDQuNCA4Ny40MDAxIDI0Ny40IDg0LjEwMDEgMjQ3LjQgNzYuMjAwMVY3MS4wMDAxQzI0NC40IDc1LjUwMDEgMjM5LjkgNzguMDAwMSAyMzQuNCA3OC4wMDAxQzIyMy40IDc4LjAwMDEgMjExLjcgNzAuNjAwMSAyMTEuNyA1MS41MDAxVjI1LjNIMjI3LjVWNTEuNTAwMUMyMjcuNSA1OS43MDAxIDIzMS41IDYzLjIwMDEgMjM3LjQgNjMuMjAwMUMyNDMuMSA2My4yMDAxIDI0Ny4zIDU5LjUwMDEgMjQ3LjMgNTEuNTAwMVYyNS4zSDI2My4xVjc1LjcwMDFDMjYzLjEgOTMuOTAwMSAyNTEuNSAxMDEuMSAyMzcuMiAxMDEuMUMyMjUuMSAxMDEuMSAyMTQuOSA5NS40MDAxIDIxMi4yIDgyLjUwMDFaIiBmaWxsPSIjM0UzQTM5Ij48L3BhdGg+CjxwYXRoIGQ9Ik01MTAuNiAyOS4xQzUxMC42IDMyIDUwOC4zIDM0LjMgNTA1LjQgMzQuM0M1MDIuNSAzNC4zIDUwMC4yIDMyIDUwMC4yIDI5LjFDNTAwLjIgMjYuMiA1MDIuNSAyMy45IDUwNS40IDIzLjlDNTA4LjMgMjMuOSA1MTAuNiAyNi4yIDUxMC42IDI5LjFaTTUwOS41IDI5LjFDNTA5LjUgMjYuOCA1MDcuNyAyNSA1MDUuNCAyNUM1MDMuMSAyNSA1MDEuMyAyNi44IDUwMS4zIDI5LjFDNTAxLjMgMzEuNCA1MDMuMiAzMy4yIDUwNS40IDMzLjJDNTA3LjcgMzMuMiA1MDkuNSAzMS40IDUwOS41IDI5LjFaTTUwNi41IDI5LjhMNTA3LjkgMzEuNkg1MDYuM0w1MDUuMSAyOS45SDUwNC44VjMxLjZINTAzLjVWMjYuNkg1MDYuMUM1MDcuMiAyNi42IDUwNy44IDI3LjMgNTA3LjggMjguMkM1MDcuNyAyOSA1MDcuMiAyOS42IDUwNi41IDI5LjhaTTUwNS43IDI3LjhINTA0LjhWMjguOUg1MDUuN0M1MDYuMiAyOC45IDUwNi4zIDI4LjcgNTA2LjMgMjguM0M1MDYuMyAyNy45IDUwNi4xIDI3LjggNTA1LjcgMjcuOFoiIGZpbGw9IiMzRTNBMzkiPjwvcGF0aD4KPHBhdGggZD0iTTI3NS4xIDYyLjhIMjgyLjNDMjgyLjYgNjguNCAyODcuNyA3Mi40IDI5Ni40IDcyLjRDMzA1LjUgNzIuNCAzMTAuNSA2OC4yIDMxMC41IDYyLjZDMzEwLjUgNTYuMyAzMDMuOCA1NS41IDI5Ni40IDU0LjZDMjg3IDUzLjQgMjc2LjMgNTIgMjc2LjMgNDAuNUMyNzYuMyAzMC43IDI4NCAyNCAyOTYuMyAyNEMzMDguNSAyNCAzMTYgMzAuOCAzMTYuMiAzOS42SDMwOS4yQzMwOC45IDM0LjQgMzA0LjEgMzAuNCAyOTYuMSAzMC40QzI4OC4xIDMwLjQgMjgzLjMgMzQuNCAyODMuMyAzOS44QzI4My4zIDQ2LjIgMjkwLjEgNDcgMjk3LjQgNDcuOUMzMDUuNSA0OSAzMTcuNiA1MC4yIDMxNy42IDYyQzMxNy42IDcxLjkgMzA5LjMgNzguOCAyOTYuMyA3OC44QzI4My42IDc4LjggMjc1LjUgNzIgMjc1LjEgNjIuOFoiIGZpbGw9IiMzRTNBMzkiPjwvcGF0aD4KPHBhdGggZD0iTTMyNi4zIDUyLjZWMjUuNEgzMzMuNFY1Mi42QzMzMy40IDY1LjQgMzQwLjggNzIuMyAzNTIuMSA3Mi4zQzM2My40IDcyLjMgMzcwLjggNjUuMyAzNzAuOCA1Mi42VjI1LjRIMzc3LjlWNTIuNkMzNzcuOSA2OS45IDM2Ny42IDc4LjkgMzUyLjEgNzguOUMzMzYuNyA3OC44IDMyNi4zIDY5LjkgMzI2LjMgNTIuNloiIGZpbGw9IiMzRTNBMzkiPjwvcGF0aD4KPHBhdGggZD0iTTM4OC4zIDkuNzk5OTlDMzg4LjMgNi42OTk5OSAzOTAuNiA0LjQwMDAyIDM5My43IDQuNDAwMDJDMzk2LjggNC40MDAwMiAzOTkuMSA2LjY5OTk5IDM5OS4xIDkuNzk5OTlDMzk5LjEgMTIuOSAzOTYuOCAxNS4yIDM5My43IDE1LjJDMzkwLjYgMTUuMiAzODguMyAxMi45IDM4OC4zIDkuNzk5OTlaIiBmaWxsPSIjM0UzQTM5Ij48L3BhdGg+CjxwYXRoIGQ9Ik0zOTcuMyAyNS4zSDM5MC4yVjc3LjQwMDFIMzk3LjNWMjUuM1oiIGZpbGw9IiMzRTNBMzkiPjwvcGF0aD4KPHBhdGggZD0iTTQzNy44IDMxLjhWMjUuNEg0MTYuNlY2LjkwMDAySDQwOS41VjU4LjNDNDA5LjUgNzIgNDE3LjggNzguOCA0MjkuOSA3OC45VjcyLjRDNDIxLjggNzIuNCA0MTYuNiA2Ny44IDQxNi42IDU4LjRWMzEuOUg0MzcuOFYzMS44WiIgZmlsbD0iIzNFM0EzOSI+PC9wYXRoPgo8cGF0aCBkPSJNNDQzLjMgNTEuNEM0NDMuMyAzNS42IDQ1NC45IDI0IDQ3MS40IDI0QzQ4Ny45IDI0IDQ5OS4zIDM1LjYgNDk5LjMgNTEuNFY1My43SDQ1MC42QzQ1MS42IDY0LjYgNDU5LjcgNzIuMyA0NzEuNCA3Mi4zQzQ3OS42IDcyLjMgNDg2IDY4LjkgNDg5LjMgNjIuOUg0OTdDNDkzIDcyLjUgNDgzLjUgNzguOCA0NzEuNCA3OC44QzQ1NC45IDc4LjggNDQzLjMgNjcuMiA0NDMuMyA1MS40Wk00OTEuOCA0Ny40QzQ5MC4xIDM2LjggNDgxLjkgMzAuNSA0NzEuMyAzMC41QzQ2MC40IDMwLjUgNDUyLjMgMzcuMiA0NTAuNyA0Ny40SDQ5MS44WiIgZmlsbD0iIzNFM0EzOSI+PC9wYXRoPgo8cGF0aCBkPSJNNDM4LjMgNzIuM0g0MjkuOVY3OC44SDQzOC4zVjcyLjNaIiBmaWxsPSIjM0UzQTM5Ij48L3BhdGg+Cjwvc3ZnPg=="
};
Object.assign(__ds_scope, { WORDMARKS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/wordmarkData.js", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  color = "orange",
  height = 24,
  textMode = false,
  style
}) {
  if (textMode) {
    const ink = color === "white" ? "#fff" : color === "black" ? "#222222" : "var(--text-primary)";
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: height,
        lineHeight: 1,
        color: ink,
        ...style
      }
    }, "Juicy", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400
      }
    }, "suite"));
  }
  return /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.WORDMARKS[color],
    alt: "JuicySuite",
    style: {
      height,
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  children,
  padding = 24,
  radius = 16,
  hoverable = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-card)",
      borderRadius: radius,
      padding,
      boxSizing: "border-box",
      boxShadow: hoverable && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      transition: "box-shadow 200ms ease",
      cursor: onClick ? "pointer" : undefined,
      ...style
    }
  }, children);
}
function CardHeader({
  title,
  subtitle,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, subtitle)), right);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/KPICard.jsx
try { (() => {
const PAL = {
  orange: {
    bg: "var(--bg-kpi-orange)",
    fg: "var(--accent-secondary)"
  },
  coral: {
    bg: "var(--bg-kpi-coral)",
    fg: "var(--accent-primary)"
  },
  green: {
    bg: "var(--bg-kpi-green)",
    fg: "var(--status-success)"
  },
  purple: {
    bg: "var(--bg-kpi-purple)",
    fg: "var(--status-vip)"
  }
};
function KPICard({
  icon = "users",
  color = "orange",
  value,
  label,
  trend,
  trendDir = "up",
  style
}) {
  const p = PAL[color];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 18,
      flex: 1,
      minWidth: 0,
      boxShadow: "var(--shadow-xs)",
      display: "flex",
      alignItems: "center",
      gap: 14,
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: p.bg,
      color: p.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: "var(--text-primary)",
      lineHeight: 1.1,
      letterSpacing: "-0.5px"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, label), trend && /*#__PURE__*/React.createElement(__ds_scope.Trend, {
    value: trend,
    dir: trendDir
  }))));
}
Object.assign(__ds_scope, { KPICard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KPICard.jsx", error: String((e && e.message) || e) }); }

// components/data/MemberRow.jsx
try { (() => {
function MemberRow({
  initials,
  idx = 0,
  name,
  id,
  status,
  points,
  onEdit,
  onRemove
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "12px 16px",
      borderRadius: 12,
      border: "1px solid var(--border-default)",
      background: hover ? "var(--surface-hover)" : "#fff",
      transition: "background 150ms ease",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: initials,
    idx: idx,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, "ID: ", id)), points != null && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      minWidth: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, points.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      color: "var(--text-secondary)",
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Points")), status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    kind: status.kind
  }, status.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    icon: "edit",
    onClick: onEdit
  }, "Edit"), onRemove && /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    destructive: true,
    onClick: onRemove
  }, "Remove")));
}
Object.assign(__ds_scope, { MemberRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MemberRow.jsx", error: String((e && e.message) || e) }); }

// components/data/PromoBanner.jsx
try { (() => {
function PromoBanner({
  eyebrow,
  title,
  body,
  ctaLabel = "Play",
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gradient-sunset)",
      borderRadius: 16,
      padding: "22px 26px",
      color: "#fff",
      boxShadow: "var(--shadow-cta)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: 1,
      opacity: 0.9,
      marginBottom: 6
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 4
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.95
    }
  }, body)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCta,
    style: {
      background: "rgba(255,255,255,0.22)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.4)",
      borderRadius: 9999,
      padding: "10px 20px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 11
  }), ctaLabel));
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/edm/PillComposition.jsx
try { (() => {
function PillComposition({
  scale = 1
}) {
  const s = n => n * scale;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s(92),
      height: s(58),
      background: "linear-gradient(90deg, #FFFDF0, #FFE24A)",
      borderRadius: 9999
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: s(44),
      height: s(58),
      background: "#2FD4C7",
      borderRadius: "0 9999px 9999px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: s(34),
      height: s(58),
      background: "#F5A6E7",
      borderRadius: "0 9999px 9999px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: s(82),
      height: s(82),
      background: "linear-gradient(180deg, #F7A6E8, #FF8C52)",
      borderRadius: 9999
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: s(74),
      height: s(74),
      background: "linear-gradient(135deg, #FFE900, #2FD4C7)",
      borderRadius: 9999
    }
  }));
}
Object.assign(__ds_scope, { PillComposition });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/edm/PillComposition.jsx", error: String((e && e.message) || e) }); }

// components/edm/PillStatRow.jsx
try { (() => {
const GRADS = {
  pink: "var(--gradient-edm-pink)",
  coral: "var(--gradient-edm-coral)",
  aqua: "var(--gradient-edm-aqua)"
};
function PillStatRow({
  label,
  value,
  gradient = "coral",
  size = "md"
}) {
  const lg = size === "lg";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-cream-row)",
      borderRadius: 9999,
      padding: lg ? "12px 14px 12px 24px" : "10px 12px 10px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: lg ? 20 : 14,
      fontWeight: 600,
      color: "var(--text-edm)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      background: GRADS[gradient] || gradient,
      borderRadius: 9999,
      padding: lg ? "12px 24px" : "8px 18px",
      minWidth: lg ? 54 : 48,
      textAlign: "center",
      fontSize: lg ? 30 : 22,
      fontWeight: 700,
      color: "var(--text-edm)",
      lineHeight: 1.1
    }
  }, value));
}
Object.assign(__ds_scope, { PillStatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/edm/PillStatRow.jsx", error: String((e && e.message) || e) }); }

// components/edm/SplitBar.jsx
try { (() => {
function SplitBar({
  segments = [],
  height = 22,
  gap = 6
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap,
      height
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: s.pct + "%",
      height: "100%",
      borderRadius: 9999,
      background: s.background
    }
  })));
}
Object.assign(__ds_scope, { SplitBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/edm/SplitBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = "text",
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: "#fff",
      border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
      borderRadius: 8,
      height: 40,
      padding: "0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-primary)",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      transition: "border-color 150ms ease",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/PillTabs.jsx
try { (() => {
function PillTabs({
  tabs = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, tabs.map(t => {
    const on = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => onChange && onChange(t.id),
      style: {
        border: "none",
        cursor: "pointer",
        padding: "8px 16px",
        borderRadius: 9999,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: on ? 600 : 500,
        background: on ? "var(--gradient-sunset)" : "transparent",
        color: on ? "#fff" : "var(--text-primary)",
        boxShadow: on ? "0 2px 8px rgba(255,118,26,0.25)" : "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, t.label), t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        padding: "1px 8px",
        borderRadius: 9999,
        color: on ? "rgba(255,255,255,0.85)" : "var(--text-secondary)",
        background: on ? "rgba(255,255,255,0.2)" : "var(--bg-neutral)"
      }
    }, typeof t.count === "number" ? t.count.toLocaleString() : t.count));
  }));
}
Object.assign(__ds_scope, { PillTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PillTabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function SearchInput({
  value,
  onChange,
  placeholder = "Search…",
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-secondary)",
      pointerEvents: "none",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: "var(--surface-input)",
      border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
      borderRadius: 9999,
      height: 40,
      padding: "0 16px 0 40px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      width: "100%",
      outline: "none",
      boxSizing: "border-box",
      color: "var(--text-primary)"
    }
  }));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedPills.jsx
try { (() => {
function SegmentedPills({
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, options.map(o => {
    const on = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      type: "button",
      onClick: () => onChange && onChange(o),
      style: {
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: "uppercase",
        padding: "6px 12px",
        borderRadius: 9999,
        color: on ? "#fff" : "var(--text-secondary)",
        background: on ? "var(--gradient-sunset)" : "var(--surface-input)"
      }
    }, o);
  }));
}
Object.assign(__ds_scope, { SegmentedPills });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedPills.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function Toggle({
  checked = false,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      position: "relative",
      display: "inline-block",
      width: 44,
      height: 24,
      flexShrink: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      opacity: 0,
      width: 0,
      height: 0,
      position: "absolute"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: checked ? "var(--accent-green)" : "var(--toggle-off)",
      borderRadius: 9999,
      transition: "background 200ms ease"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: 2,
      width: 20,
      height: 20,
      background: "#fff",
      borderRadius: "50%",
      boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
      transform: checked ? "translateX(20px)" : "translateX(0)",
      transition: "transform 200ms ease"
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/data/CampaignCard.jsx
try { (() => {
function CampaignCard({
  title,
  period,
  description,
  active = false,
  onToggle,
  stats,
  onEdit,
  onMore
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 16,
      padding: 22,
      boxShadow: "var(--shadow-sm)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Toggle, {
    checked: active,
    onChange: onToggle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    icon: "edit",
    onClick: onEdit
  }, "Edit"), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    onClick: onMore
  }, "Show More \u2192"))), period && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)",
      marginBottom: 14
    }
  }, period), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, description), stats && stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      marginTop: 18,
      paddingTop: 16,
      borderTop: "1px solid var(--border-subtle)",
      flexWrap: "wrap"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: "var(--text-primary)"
    }
  }, s.value), s.trend && /*#__PURE__*/React.createElement(__ds_scope.Trend, {
    value: s.trend,
    dir: s.trendDir
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, s.label)))));
}
Object.assign(__ds_scope, { CampaignCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CampaignCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
const DEFAULT_MAIN = [{
  id: "dashboard",
  icon: "home",
  label: "Dashboard"
}, {
  id: "members",
  icon: "users",
  label: "Members"
}, {
  id: "earning",
  icon: "gift",
  label: "Earning"
}, {
  id: "rewards",
  icon: "star",
  label: "Rewards"
}, {
  id: "reports",
  icon: "chart",
  label: "Reports"
}];
const DEFAULT_SECONDARY = [{
  id: "billing",
  icon: "dollar",
  label: "Billing"
}, {
  id: "settings",
  icon: "settings",
  label: "Settings"
}];
const CAP = {
  fontFamily: "var(--font-sans)",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.7)"
};
function NavItem({
  item,
  active,
  onNav
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNav && onNav(item.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: "none",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 14px",
      borderRadius: 8,
      cursor: "pointer",
      textAlign: "left",
      background: active ? "rgba(255,255,255,0.25)" : hover ? "rgba(255,255,255,0.12)" : "transparent",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active ? 600 : 500,
      transition: "background 150ms ease"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, item.label));
}
function Sidebar({
  active,
  onNav,
  items = DEFAULT_MAIN,
  secondaryItems = DEFAULT_SECONDARY,
  plan = {
    name: "Growth plan",
    used: 12438,
    limit: 15000
  },
  style
}) {
  const pct = plan ? Math.min(100, Math.round(plan.used / plan.limit * 100)) : 0;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      background: "var(--gradient-sunset)",
      borderRadius: "0 20px 20px 0",
      padding: "28px 14px",
      boxShadow: "var(--shadow-sidebar)",
      color: "#fff",
      boxSizing: "border-box",
      height: "100vh",
      position: "sticky",
      top: 0,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 10px 24px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    color: "white",
    height: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 4px 16px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 18,
      transform: "translateY(-50%)",
      color: "rgba(255,255,255,0.7)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 14
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search\u2026",
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 36,
      borderRadius: 9999,
      background: "rgba(255,255,255,0.18)",
      border: "1px solid rgba(255,255,255,0.25)",
      padding: "0 14px 0 38px",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CAP,
      padding: "8px 14px 6px"
    }
  }, "Main"), items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    item: it,
    active: active === it.id,
    onNav: onNav
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.18)",
      margin: "16px 12px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CAP,
      padding: "0 14px 6px"
    }
  }, "Workspace"), secondaryItems.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    item: it,
    active: active === it.id,
    onNav: onNav
  })), plan && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: 12,
      borderRadius: 12,
      background: "rgba(255,255,255,0.15)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      marginBottom: 2
    }
  }, plan.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.85)",
      lineHeight: 1.4
    }
  }, plan.used.toLocaleString(), " / ", plan.limit.toLocaleString(), " members"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      height: 4,
      background: "rgba(255,255,255,0.25)",
      borderRadius: 9999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: "#fff",
      borderRadius: 9999
    }
  }))));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopHeader.jsx
try { (() => {
function TopHeader({
  title,
  subtitle,
  actions,
  company = "Honeycomb Cafe",
  role = "Owner",
  initials = "HC"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 88,
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      background: "var(--surface-page)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 34,
      fontWeight: 800,
      color: "var(--text-primary)",
      lineHeight: 1.1,
      letterSpacing: "-0.5px"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, actions, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "bell"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "#fff",
      borderRadius: 9999,
      padding: "6px 14px 6px 6px",
      boxShadow: "var(--shadow-xs)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: initials,
    size: 32,
    idx: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.1,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, company), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-secondary)"
    }
  }, role)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 14
  }))));
}
Object.assign(__ds_scope, { TopHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopHeader.jsx", error: String((e && e.message) || e) }); }

// components/shapes/Blob.jsx
try { (() => {
// Organic silhouettes traced from the 2026 marketing references (assets/reference/). viewBox 0–100, stretched to the box.
const BLOB_PATHS = {
  "bloom": "M51.74,0.00 C54.33,-0.01 56.97,0.16 59.52,0.58 C62.08,1.01 64.65,1.64 67.08,2.55 C69.50,3.46 71.87,4.65 74.05,6.04 C76.23,7.43 78.28,9.11 80.16,10.90 C82.04,12.68 83.75,14.68 85.34,16.74 C86.93,18.79 88.37,20.98 89.70,23.21 C91.04,25.45 92.25,27.77 93.35,30.12 C94.45,32.48 95.45,34.90 96.31,37.35 C97.17,39.81 97.93,42.32 98.51,44.85 C99.09,47.38 99.54,49.97 99.78,52.56 C100.01,55.14 100.07,57.77 99.90,60.36 C99.74,62.95 99.36,65.56 98.77,68.09 C98.18,70.61 97.37,73.12 96.38,75.52 C95.38,77.91 94.17,80.26 92.77,82.44 C91.37,84.62 89.76,86.73 87.97,88.59 C86.18,90.46 84.15,92.18 82.01,93.62 C79.86,95.06 77.50,96.27 75.09,97.22 C72.69,98.17 70.12,98.86 67.58,99.32 C65.03,99.78 62.39,99.99 59.80,99.99 C57.21,99.99 54.58,99.75 52.02,99.33 C49.46,98.91 46.92,98.25 44.44,97.47 C41.96,96.69 39.53,95.72 37.15,94.67 C34.77,93.62 32.44,92.43 30.16,91.18 C27.87,89.93 25.63,88.60 23.45,87.17 C21.28,85.74 19.14,84.24 17.11,82.60 C15.09,80.97 13.10,79.25 11.31,77.38 C9.52,75.50 7.80,73.50 6.35,71.35 C4.90,69.21 3.60,66.89 2.62,64.50 C1.64,62.11 0.90,59.55 0.48,57.00 C0.05,54.45 -0.08,51.80 0.04,49.21 C0.16,46.63 0.58,44.01 1.18,41.49 C1.78,38.97 2.65,36.48 3.66,34.09 C4.66,31.70 5.88,29.37 7.21,27.14 C8.53,24.90 10.01,22.74 11.60,20.67 C13.18,18.61 14.88,16.62 16.71,14.77 C18.53,12.92 20.48,11.15 22.55,9.59 C24.63,8.03 26.85,6.61 29.15,5.41 C31.45,4.22 33.89,3.22 36.36,2.42 C38.82,1.62 41.39,1.03 43.96,0.63 C46.52,0.23 49.14,0.01 51.74,0.00 Z",
  "sweep": "M70.00,-4 L70.00,0.00 C69.62,0.36 68.49,1.44 67.74,2.17 C66.99,2.89 66.24,3.62 65.51,4.37 C64.78,5.11 64.06,5.86 63.36,6.62 C62.65,7.39 61.96,8.17 61.30,8.96 C60.63,9.76 59.98,10.57 59.36,11.40 C58.74,12.22 58.13,13.07 57.55,13.93 C56.98,14.79 56.42,15.66 55.89,16.55 C55.36,17.44 54.86,18.35 54.38,19.27 C53.90,20.19 53.45,21.12 53.02,22.06 C52.59,23.01 52.19,23.97 51.81,24.93 C51.44,25.90 51.09,26.88 50.76,27.86 C50.44,28.84 50.14,29.84 49.88,30.84 C49.61,31.84 49.37,32.85 49.16,33.86 C48.95,34.87 48.76,35.89 48.61,36.92 C48.46,37.94 48.34,38.96 48.26,39.99 C48.17,41.01 48.12,42.04 48.10,43.07 C48.09,44.10 48.11,45.12 48.16,46.14 C48.22,47.16 48.32,48.18 48.45,49.19 C48.59,50.20 48.76,51.20 48.98,52.19 C49.20,53.18 49.46,54.16 49.76,55.12 C50.07,56.09 50.41,57.04 50.80,57.97 C51.19,58.90 51.62,59.81 52.09,60.70 C52.57,61.59 53.08,62.46 53.64,63.30 C54.19,64.15 54.78,64.97 55.41,65.76 C56.04,66.55 56.71,67.32 57.40,68.05 C58.10,68.79 58.83,69.50 59.59,70.18 C60.35,70.86 61.14,71.52 61.95,72.14 C62.76,72.76 63.59,73.36 64.45,73.92 C65.31,74.49 66.19,75.03 67.08,75.54 C67.98,76.05 68.89,76.54 69.82,77.00 C70.74,77.46 71.69,77.89 72.64,78.30 C73.59,78.71 74.56,79.09 75.53,79.45 C76.51,79.82 77.50,80.16 78.49,80.48 C79.48,80.80 80.48,81.09 81.49,81.38 C82.49,81.66 83.51,81.92 84.52,82.17 C85.54,82.41 86.56,82.64 87.59,82.86 C88.61,83.08 89.64,83.28 90.67,83.47 C91.70,83.66 92.74,83.84 93.77,84.02 C94.81,84.19 95.85,84.36 96.88,84.52 C97.92,84.68 99.48,84.92 100.00,85.00 L104,85 L104,-4 Z",
  "slab": "M13.02,9.21 C15.06,7.43 17.47,5.97 19.91,4.78 C22.35,3.59 25.02,2.77 27.65,2.08 C30.29,1.39 33.02,0.98 35.73,0.64 C38.45,0.31 41.19,0.15 43.92,0.05 C46.66,-0.04 49.40,-0.02 52.13,0.08 C54.87,0.18 57.61,0.36 60.33,0.65 C63.05,0.94 65.77,1.29 68.45,1.82 C71.14,2.34 73.83,2.93 76.42,3.78 C79.01,4.64 81.62,5.62 83.99,6.94 C86.36,8.26 88.70,9.84 90.63,11.72 C92.57,13.61 94.27,15.88 95.58,18.24 C96.90,20.60 97.81,23.26 98.51,25.89 C99.21,28.51 99.56,31.27 99.80,33.99 C100.03,36.70 100.03,39.46 99.94,42.19 C99.85,44.93 99.60,47.66 99.25,50.37 C98.89,53.09 98.43,55.80 97.81,58.46 C97.19,61.12 96.47,63.78 95.53,66.35 C94.60,68.91 93.54,71.47 92.23,73.85 C90.92,76.24 89.41,78.58 87.68,80.68 C85.95,82.78 83.97,84.74 81.86,86.45 C79.74,88.16 77.40,89.65 75.01,90.96 C72.62,92.27 70.07,93.35 67.51,94.31 C64.96,95.28 62.32,96.05 59.67,96.75 C57.03,97.44 54.34,98.00 51.65,98.48 C48.95,98.95 46.23,99.33 43.51,99.58 C40.79,99.84 38.04,100.02 35.31,100.00 C32.58,99.97 29.81,99.87 27.13,99.44 C24.44,99.00 21.69,98.42 19.20,97.38 C16.70,96.35 14.20,94.97 12.15,93.24 C10.10,91.51 8.32,89.28 6.88,86.99 C5.45,84.70 4.42,82.08 3.54,79.51 C2.65,76.93 2.09,74.22 1.58,71.54 C1.08,68.85 0.77,66.12 0.51,63.40 C0.26,60.67 0.12,57.93 0.05,55.20 C-0.03,52.46 -0.03,49.72 0.07,46.99 C0.17,44.25 0.32,41.51 0.62,38.79 C0.92,36.08 1.29,33.35 1.86,30.68 C2.44,28.01 3.12,25.32 4.09,22.78 C5.06,20.24 6.21,17.69 7.70,15.42 C9.19,13.16 10.99,10.98 13.02,9.21 Z",
  "slabTilt": "M9.31,9.26 C11.19,7.37 13.46,5.73 15.80,4.45 C18.14,3.16 20.77,2.25 23.36,1.55 C25.95,0.85 28.67,0.50 31.35,0.25 C34.03,-0.01 36.75,-0.02 39.45,0.01 C42.15,0.04 44.86,0.22 47.55,0.45 C50.24,0.67 52.93,0.99 55.61,1.37 C58.28,1.75 60.95,2.19 63.60,2.74 C66.24,3.29 68.89,3.89 71.47,4.67 C74.06,5.45 76.65,6.30 79.10,7.40 C81.56,8.51 84.01,9.75 86.19,11.30 C88.38,12.85 90.49,14.66 92.22,16.69 C93.95,18.72 95.45,21.07 96.60,23.49 C97.75,25.90 98.55,28.55 99.12,31.18 C99.68,33.80 99.92,36.54 100.00,39.23 C100.08,41.92 99.89,44.64 99.60,47.32 C99.30,50.00 98.80,52.68 98.22,55.31 C97.64,57.95 96.92,60.56 96.12,63.14 C95.33,65.73 94.44,68.28 93.48,70.81 C92.51,73.33 91.50,75.85 90.35,78.29 C89.20,80.73 88.03,83.19 86.59,85.47 C85.16,87.75 83.62,90.05 81.74,91.95 C79.86,93.84 77.67,95.61 75.33,96.85 C72.98,98.09 70.28,98.86 67.66,99.38 C65.03,99.90 62.28,99.98 59.58,99.99 C56.89,100.00 54.18,99.75 51.49,99.45 C48.81,99.16 46.13,98.73 43.48,98.23 C40.82,97.72 38.17,97.15 35.57,96.43 C32.97,95.71 30.36,94.94 27.87,93.91 C25.39,92.87 22.89,91.71 20.66,90.22 C18.43,88.73 16.31,86.95 14.50,84.98 C12.68,83.02 11.14,80.73 9.77,78.41 C8.41,76.10 7.31,73.59 6.30,71.09 C5.29,68.59 4.47,66.00 3.73,63.40 C2.98,60.81 2.36,58.17 1.84,55.52 C1.32,52.87 0.90,50.19 0.60,47.51 C0.29,44.82 0.08,42.12 0.02,39.42 C-0.03,36.72 -0.00,34.00 0.27,31.32 C0.53,28.64 0.92,25.92 1.63,23.33 C2.35,20.75 3.27,18.13 4.55,15.79 C5.83,13.44 7.44,11.15 9.31,9.26 Z",
  "squircle": "M0.07,43.29 C0.19,40.58 0.38,37.84 0.82,35.16 C1.25,32.49 1.83,29.79 2.70,27.23 C3.57,24.67 4.68,22.13 6.02,19.78 C7.36,17.44 8.97,15.18 10.75,13.15 C12.54,11.12 14.56,9.21 16.73,7.60 C18.90,6.00 21.30,4.58 23.77,3.50 C26.24,2.42 28.91,1.66 31.56,1.11 C34.21,0.55 36.95,0.36 39.66,0.17 C42.38,-0.01 45.11,-0.01 47.83,0.00 C50.55,0.01 53.27,0.06 55.99,0.23 C58.70,0.40 61.43,0.60 64.11,1.00 C66.80,1.40 69.50,1.88 72.11,2.62 C74.72,3.36 77.33,4.26 79.76,5.45 C82.19,6.64 84.58,8.07 86.67,9.77 C88.77,11.46 90.71,13.47 92.32,15.63 C93.92,17.80 95.25,20.25 96.30,22.74 C97.36,25.22 98.08,27.89 98.66,30.54 C99.23,33.19 99.52,35.92 99.74,38.63 C99.96,41.34 100.00,44.07 100.00,46.79 C100.00,49.51 99.92,52.24 99.73,54.95 C99.55,57.66 99.31,60.38 98.89,63.07 C98.47,65.75 97.96,68.45 97.21,71.05 C96.46,73.66 95.58,76.28 94.38,78.70 C93.18,81.12 91.73,83.51 89.99,85.56 C88.26,87.62 86.16,89.47 83.96,91.03 C81.76,92.59 79.28,93.85 76.80,94.93 C74.31,96.00 71.67,96.78 69.05,97.47 C66.42,98.17 63.74,98.69 61.05,99.10 C58.36,99.50 55.64,99.80 52.93,99.92 C50.22,100.04 47.48,100.03 44.77,99.82 C42.06,99.62 39.34,99.26 36.69,98.70 C34.03,98.14 31.38,97.41 28.84,96.46 C26.31,95.51 23.80,94.36 21.46,93.00 C19.13,91.63 16.86,90.04 14.83,88.26 C12.80,86.47 10.91,84.44 9.29,82.27 C7.68,80.11 6.30,77.71 5.15,75.26 C3.99,72.81 3.10,70.20 2.37,67.59 C1.64,64.98 1.15,62.28 0.77,59.59 C0.38,56.90 0.19,54.17 0.07,51.45 C-0.04,48.74 -0.05,46.01 0.07,43.29 Z",
  "cushion": "M0.00,48.37 C0.04,45.65 0.22,42.91 0.61,40.22 C1.00,37.54 1.56,34.84 2.33,32.24 C3.11,29.64 4.07,27.05 5.28,24.63 C6.49,22.21 7.92,19.83 9.60,17.71 C11.28,15.59 13.29,13.68 15.36,11.93 C17.43,10.18 19.70,8.61 22.01,7.20 C24.33,5.79 26.75,4.45 29.26,3.45 C31.78,2.45 34.45,1.75 37.11,1.21 C39.77,0.67 42.50,0.42 45.22,0.22 C47.93,0.02 50.66,-0.02 53.38,0.00 C56.11,0.02 58.84,0.08 61.55,0.35 C64.25,0.62 66.98,0.96 69.61,1.62 C72.24,2.29 74.86,3.18 77.31,4.32 C79.76,5.47 82.15,6.89 84.32,8.51 C86.49,10.12 88.54,11.99 90.34,14.01 C92.14,16.03 93.81,18.26 95.12,20.62 C96.44,22.98 97.48,25.56 98.23,28.16 C98.98,30.75 99.32,33.50 99.61,36.20 C99.90,38.90 99.92,41.64 99.98,44.36 C100.03,47.08 100.03,49.81 99.94,52.53 C99.85,55.25 99.73,57.98 99.45,60.69 C99.16,63.39 98.81,66.11 98.23,68.76 C97.65,71.42 96.97,74.09 95.99,76.62 C95.01,79.14 93.83,81.66 92.36,83.92 C90.89,86.18 89.12,88.36 87.14,90.19 C85.17,92.02 82.86,93.61 80.49,94.89 C78.12,96.18 75.50,97.13 72.90,97.88 C70.30,98.64 67.58,99.08 64.88,99.43 C62.19,99.78 59.45,99.90 56.73,99.98 C54.01,100.05 51.28,99.98 48.56,99.87 C45.84,99.75 43.12,99.59 40.41,99.29 C37.71,98.98 35.00,98.61 32.34,98.03 C29.69,97.44 27.03,96.74 24.50,95.77 C21.96,94.80 19.42,93.68 17.15,92.21 C14.89,90.75 12.69,88.99 10.90,86.99 C9.12,84.98 7.65,82.59 6.43,80.18 C5.20,77.77 4.35,75.14 3.55,72.54 C2.75,69.94 2.14,67.27 1.62,64.60 C1.09,61.93 0.65,59.23 0.38,56.53 C0.11,53.82 -0.04,51.09 0.00,48.37 Z",
  "pebble": "M0.18,52.96 C0.45,50.48 1.05,48.00 1.83,45.61 C2.61,43.22 3.70,40.88 4.88,38.61 C6.07,36.33 7.47,34.13 8.93,31.97 C10.39,29.81 11.99,27.70 13.63,25.64 C15.27,23.58 17.00,21.55 18.78,19.60 C20.56,17.66 22.39,15.74 24.31,13.96 C26.22,12.18 28.19,10.45 30.26,8.92 C32.34,7.39 34.49,5.96 36.74,4.78 C39.00,3.60 41.36,2.60 43.78,1.85 C46.20,1.10 48.73,0.58 51.25,0.28 C53.77,-0.01 56.37,-0.07 58.92,0.08 C61.47,0.22 64.05,0.58 66.55,1.13 C69.05,1.68 71.54,2.44 73.93,3.37 C76.32,4.30 78.67,5.43 80.86,6.72 C83.06,8.02 85.20,9.50 87.12,11.15 C89.04,12.80 90.85,14.63 92.40,16.61 C93.95,18.59 95.32,20.76 96.41,23.01 C97.50,25.27 98.35,27.69 98.95,30.13 C99.55,32.57 99.88,35.13 99.98,37.65 C100.09,40.18 99.93,42.76 99.57,45.27 C99.20,47.79 98.59,50.30 97.81,52.73 C97.03,55.16 96.02,57.55 94.89,59.86 C93.75,62.17 92.42,64.41 90.99,66.59 C89.56,68.76 87.98,70.86 86.33,72.90 C84.67,74.93 82.90,76.91 81.07,78.80 C79.24,80.70 77.31,82.53 75.33,84.27 C73.35,86.00 71.30,87.67 69.19,89.21 C67.08,90.75 64.90,92.22 62.66,93.51 C60.42,94.80 58.11,95.99 55.74,96.95 C53.37,97.90 50.92,98.72 48.46,99.22 C45.99,99.73 43.45,100.03 40.96,100.00 C38.47,99.97 35.94,99.65 33.52,99.05 C31.10,98.46 28.70,97.53 26.44,96.42 C24.18,95.31 22.00,93.91 19.95,92.39 C17.90,90.87 15.95,89.12 14.14,87.29 C12.34,85.46 10.63,83.47 9.10,81.40 C7.57,79.33 6.15,77.14 4.94,74.88 C3.74,72.63 2.67,70.26 1.88,67.85 C1.09,65.45 0.49,62.95 0.21,60.47 C-0.07,57.99 -0.09,55.44 0.18,52.96 Z"
};
const BLOB_RATIOS = {
  "bloom": 0.954,
  "sweep": 1,
  "slab": 0.763,
  "slabTilt": 0.808,
  "squircle": 1.26,
  "cushion": 0.763,
  "pebble": 1.041
};
const BLOB_GRADIENTS = {
  "sunsetFlat": {
    "v": [0, 0, 1, 0],
    "s": [[0, "#FF7420"], [45, "#FF9084"], [100, "#FFA8E6"]]
  },
  "grape": {
    "v": [0.1, 0.9, 0.95, 0.05],
    "s": [[0, "#00CE73"], [38, "#0CC27A"], [62, "#2E8FA8"], [82, "#4F5FD6"], [100, "#6B2BF0"]]
  },
  "blush": {
    "v": [0.15, 1, 0.9, 0],
    "s": [[0, "#FFABE7"], [40, "#E9B0E6"], [70, "#AFC3E0"], [100, "#3BE3D2"]]
  },
  "meadowSweep": {
    "v": [1, 0, 0.35, 1],
    "s": [[0, "#FDE51A"], [30, "#E8E62A"], [55, "#C2E64E"], [78, "#86E686"], [100, "#37E4D2"]]
  }
};
function Blob({
  shape = "bloom",
  width = 240,
  height,
  fill = "#FFFFFF",
  gradient,
  style
}) {
  const uid = "blob-" + React.useId().replace(/:/g, "");
  const g = gradient && BLOB_GRADIENTS[gradient];
  const h = height ?? (typeof width === "number" ? width / (BLOB_RATIOS[shape] || 1) : undefined);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width,
      height: h,
      aspectRatio: h === undefined ? String(BLOB_RATIOS[shape] || 1) : undefined,
      display: "block",
      overflow: "visible",
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, g ? /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: uid,
    x1: g.v[0],
    y1: g.v[1],
    x2: g.v[2],
    y2: g.v[3]
  }, g.s.map(([o, c]) => /*#__PURE__*/React.createElement("stop", {
    key: o,
    offset: o + "%",
    stopColor: c
  })))) : null, /*#__PURE__*/React.createElement("path", {
    d: BLOB_PATHS[shape] || BLOB_PATHS.bloom,
    fill: g ? "url(#" + uid + ")" : fill
  }));
}
Object.assign(__ds_scope, { BLOB_PATHS, BLOB_RATIOS, BLOB_GRADIENTS, Blob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/Blob.jsx", error: String((e && e.message) || e) }); }

// components/shapes/StoneBloom.jsx
try { (() => {
function StoneBloom({
  size = 320,
  grad = "sunset",
  flip = false,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 204 250",
    style: {
      width: size,
      aspectRatio: "204 / 250",
      transform: flip ? "rotate(180deg)" : "none",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M152.985 3.68C200.185 22.18 214.385 116.38 194.885 166.18C166.985 237.48 107.685 262.28 60.485 243.78C13.285 225.28 -22.915 164.38 17.385 99.38C54.685 39.38 105.785 -14.82 152.985 3.68Z",
    fill: "url(#js-" + grad + ")"
  }));
}
Object.assign(__ds_scope, { StoneBloom });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/StoneBloom.jsx", error: String((e && e.message) || e) }); }

// components/shapes/StoneRound.jsx
try { (() => {
function StoneRound({
  size = 240,
  grad = "sunset",
  rotate = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: size,
      aspectRatio: "1",
      transform: "rotate(" + rotate + "deg)",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50 4 C 70 4 95 22 96 48 C 97 72 78 96 52 96 C 28 96 4 78 5 52 C 6 26 28 4 50 4 Z",
    fill: "url(#js-" + grad + ")"
  }));
}
Object.assign(__ds_scope, { StoneRound });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/StoneRound.jsx", error: String((e && e.message) || e) }); }

// components/shapes/StoneTilt.jsx
try { (() => {
function StoneTilt({
  size = 200,
  grad = "sunset",
  flip = false,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 141",
    style: {
      width: size,
      aspectRatio: "1 / 1.414",
      transform: flip ? "rotate(180deg)" : "none",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30 6 C 55 2 85 8 92 25 C 96 45 90 65 85 85 C 78 110 65 135 42 135 C 22 134 8 120 6 100 C 4 78 10 55 14 35 C 17 18 22 8 30 6 Z",
    fill: "url(#js-" + grad + ")"
  }));
}
Object.assign(__ds_scope, { StoneTilt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/StoneTilt.jsx", error: String((e && e.message) || e) }); }

// components/shapes/StoneWide.jsx
try { (() => {
function StoneWide({
  width = 320,
  grad = "sunset",
  flip = false,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 141 100",
    style: {
      width: width,
      aspectRatio: "1.414 / 1",
      transform: flip ? "rotate(180deg)" : "none",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 50 C 8 28 35 6 70 6 C 110 6 138 22 138 50 C 138 72 105 94 70 94 C 35 94 10 75 10 50 Z",
    fill: "url(#js-" + grad + ")"
  }));
}
Object.assign(__ds_scope, { StoneWide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/StoneWide.jsx", error: String((e && e.message) || e) }); }

// components/shapes/gradients.js
try { (() => {
// Brand gradient CSS values + SVG stop lists (50° fixed). Marketing surfaces only.
const GRADIENT_CSS = {
  sunset: "var(--gradient-sunset)",
  mist: "var(--gradient-mist)",
  meadow: "var(--gradient-meadow)"
};
const GRADIENT_STOPS = {
  sunset: [[0, "#FF761A"], [13, "#FF7D36"], [100, "#FFABE7"]],
  mist: [[0, "#5DDBC8"], [50, "#C5A4D9"], [100, "#F4A6D0"]],
  meadow: [[0, "#FEE516"], [32, "#FCE518"], [47, "#F4E51F"], [58, "#E8E52B"], [67, "#D5E53C"], [75, "#BEE553"], [83, "#A1E56E"], [89, "#7EE48F"], [96, "#57E4B4"], [100, "#37E4D2"]]
};
Object.assign(__ds_scope, { GRADIENT_CSS, GRADIENT_STOPS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/gradients.js", error: String((e && e.message) || e) }); }

// components/shapes/DropShort.jsx
try { (() => {
function DropShort({
  width = 140,
  grad = "sunset",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      aspectRatio: "1 / 1.414",
      borderRadius: 9999,
      background: __ds_scope.GRADIENT_CSS[grad],
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { DropShort });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/DropShort.jsx", error: String((e && e.message) || e) }); }

// components/shapes/DropTall.jsx
try { (() => {
function DropTall({
  width = 100,
  grad = "sunset",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      aspectRatio: "1 / 2.828",
      borderRadius: 9999,
      background: __ds_scope.GRADIENT_CSS[grad],
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { DropTall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/DropTall.jsx", error: String((e && e.message) || e) }); }

// components/shapes/Ellipse.jsx
try { (() => {
function Ellipse({
  width = 240,
  grad = "sunset",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      aspectRatio: "1.414 / 1",
      borderRadius: "50%",
      background: __ds_scope.GRADIENT_CSS[grad],
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Ellipse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/Ellipse.jsx", error: String((e && e.message) || e) }); }

// components/shapes/GradientDefs.jsx
try { (() => {
function GradientDefs() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "0",
    height: "0",
    style: {
      position: "absolute"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, Object.keys(__ds_scope.GRADIENT_STOPS).map(k => /*#__PURE__*/React.createElement("linearGradient", {
    key: k,
    id: "js-" + k,
    x1: "0.117",
    y1: "0.821",
    x2: "0.883",
    y2: "0.179"
  }, __ds_scope.GRADIENT_STOPS[k].map(([o, c]) => /*#__PURE__*/React.createElement("stop", {
    key: o,
    offset: o + "%",
    stopColor: c
  }))))));
}
Object.assign(__ds_scope, { GradientDefs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/GradientDefs.jsx", error: String((e && e.message) || e) }); }

// components/shapes/Marble.jsx
try { (() => {
function Marble({
  size = 200,
  grad = "sunset",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      aspectRatio: "1",
      borderRadius: "50%",
      background: __ds_scope.GRADIENT_CSS[grad],
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Marble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/Marble.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Compositions.jsx
try { (() => {
// Marketing compositions — traced from assets/reference/ (field spread, frame-break posters, knockout posters) + tier cards + feature banner.
(function () {
  const {
    StoneRound,
    StoneBloom,
    DropShort,
    Wordmark
  } = window.JS;
  const PATHS = {
    "bloom": "M51.74,0.00 C54.33,-0.01 56.97,0.16 59.52,0.58 C62.08,1.01 64.65,1.64 67.08,2.55 C69.50,3.46 71.87,4.65 74.05,6.04 C76.23,7.43 78.28,9.11 80.16,10.90 C82.04,12.68 83.75,14.68 85.34,16.74 C86.93,18.79 88.37,20.98 89.70,23.21 C91.04,25.45 92.25,27.77 93.35,30.12 C94.45,32.48 95.45,34.90 96.31,37.35 C97.17,39.81 97.93,42.32 98.51,44.85 C99.09,47.38 99.54,49.97 99.78,52.56 C100.01,55.14 100.07,57.77 99.90,60.36 C99.74,62.95 99.36,65.56 98.77,68.09 C98.18,70.61 97.37,73.12 96.38,75.52 C95.38,77.91 94.17,80.26 92.77,82.44 C91.37,84.62 89.76,86.73 87.97,88.59 C86.18,90.46 84.15,92.18 82.01,93.62 C79.86,95.06 77.50,96.27 75.09,97.22 C72.69,98.17 70.12,98.86 67.58,99.32 C65.03,99.78 62.39,99.99 59.80,99.99 C57.21,99.99 54.58,99.75 52.02,99.33 C49.46,98.91 46.92,98.25 44.44,97.47 C41.96,96.69 39.53,95.72 37.15,94.67 C34.77,93.62 32.44,92.43 30.16,91.18 C27.87,89.93 25.63,88.60 23.45,87.17 C21.28,85.74 19.14,84.24 17.11,82.60 C15.09,80.97 13.10,79.25 11.31,77.38 C9.52,75.50 7.80,73.50 6.35,71.35 C4.90,69.21 3.60,66.89 2.62,64.50 C1.64,62.11 0.90,59.55 0.48,57.00 C0.05,54.45 -0.08,51.80 0.04,49.21 C0.16,46.63 0.58,44.01 1.18,41.49 C1.78,38.97 2.65,36.48 3.66,34.09 C4.66,31.70 5.88,29.37 7.21,27.14 C8.53,24.90 10.01,22.74 11.60,20.67 C13.18,18.61 14.88,16.62 16.71,14.77 C18.53,12.92 20.48,11.15 22.55,9.59 C24.63,8.03 26.85,6.61 29.15,5.41 C31.45,4.22 33.89,3.22 36.36,2.42 C38.82,1.62 41.39,1.03 43.96,0.63 C46.52,0.23 49.14,0.01 51.74,0.00 Z",
    "sweep": "M70.00,-4 L70.00,0.00 C69.62,0.36 68.49,1.44 67.74,2.17 C66.99,2.89 66.24,3.62 65.51,4.37 C64.78,5.11 64.06,5.86 63.36,6.62 C62.65,7.39 61.96,8.17 61.30,8.96 C60.63,9.76 59.98,10.57 59.36,11.40 C58.74,12.22 58.13,13.07 57.55,13.93 C56.98,14.79 56.42,15.66 55.89,16.55 C55.36,17.44 54.86,18.35 54.38,19.27 C53.90,20.19 53.45,21.12 53.02,22.06 C52.59,23.01 52.19,23.97 51.81,24.93 C51.44,25.90 51.09,26.88 50.76,27.86 C50.44,28.84 50.14,29.84 49.88,30.84 C49.61,31.84 49.37,32.85 49.16,33.86 C48.95,34.87 48.76,35.89 48.61,36.92 C48.46,37.94 48.34,38.96 48.26,39.99 C48.17,41.01 48.12,42.04 48.10,43.07 C48.09,44.10 48.11,45.12 48.16,46.14 C48.22,47.16 48.32,48.18 48.45,49.19 C48.59,50.20 48.76,51.20 48.98,52.19 C49.20,53.18 49.46,54.16 49.76,55.12 C50.07,56.09 50.41,57.04 50.80,57.97 C51.19,58.90 51.62,59.81 52.09,60.70 C52.57,61.59 53.08,62.46 53.64,63.30 C54.19,64.15 54.78,64.97 55.41,65.76 C56.04,66.55 56.71,67.32 57.40,68.05 C58.10,68.79 58.83,69.50 59.59,70.18 C60.35,70.86 61.14,71.52 61.95,72.14 C62.76,72.76 63.59,73.36 64.45,73.92 C65.31,74.49 66.19,75.03 67.08,75.54 C67.98,76.05 68.89,76.54 69.82,77.00 C70.74,77.46 71.69,77.89 72.64,78.30 C73.59,78.71 74.56,79.09 75.53,79.45 C76.51,79.82 77.50,80.16 78.49,80.48 C79.48,80.80 80.48,81.09 81.49,81.38 C82.49,81.66 83.51,81.92 84.52,82.17 C85.54,82.41 86.56,82.64 87.59,82.86 C88.61,83.08 89.64,83.28 90.67,83.47 C91.70,83.66 92.74,83.84 93.77,84.02 C94.81,84.19 95.85,84.36 96.88,84.52 C97.92,84.68 99.48,84.92 100.00,85.00 L104,85 L104,-4 Z",
    "slab": "M13.02,9.21 C15.06,7.43 17.47,5.97 19.91,4.78 C22.35,3.59 25.02,2.77 27.65,2.08 C30.29,1.39 33.02,0.98 35.73,0.64 C38.45,0.31 41.19,0.15 43.92,0.05 C46.66,-0.04 49.40,-0.02 52.13,0.08 C54.87,0.18 57.61,0.36 60.33,0.65 C63.05,0.94 65.77,1.29 68.45,1.82 C71.14,2.34 73.83,2.93 76.42,3.78 C79.01,4.64 81.62,5.62 83.99,6.94 C86.36,8.26 88.70,9.84 90.63,11.72 C92.57,13.61 94.27,15.88 95.58,18.24 C96.90,20.60 97.81,23.26 98.51,25.89 C99.21,28.51 99.56,31.27 99.80,33.99 C100.03,36.70 100.03,39.46 99.94,42.19 C99.85,44.93 99.60,47.66 99.25,50.37 C98.89,53.09 98.43,55.80 97.81,58.46 C97.19,61.12 96.47,63.78 95.53,66.35 C94.60,68.91 93.54,71.47 92.23,73.85 C90.92,76.24 89.41,78.58 87.68,80.68 C85.95,82.78 83.97,84.74 81.86,86.45 C79.74,88.16 77.40,89.65 75.01,90.96 C72.62,92.27 70.07,93.35 67.51,94.31 C64.96,95.28 62.32,96.05 59.67,96.75 C57.03,97.44 54.34,98.00 51.65,98.48 C48.95,98.95 46.23,99.33 43.51,99.58 C40.79,99.84 38.04,100.02 35.31,100.00 C32.58,99.97 29.81,99.87 27.13,99.44 C24.44,99.00 21.69,98.42 19.20,97.38 C16.70,96.35 14.20,94.97 12.15,93.24 C10.10,91.51 8.32,89.28 6.88,86.99 C5.45,84.70 4.42,82.08 3.54,79.51 C2.65,76.93 2.09,74.22 1.58,71.54 C1.08,68.85 0.77,66.12 0.51,63.40 C0.26,60.67 0.12,57.93 0.05,55.20 C-0.03,52.46 -0.03,49.72 0.07,46.99 C0.17,44.25 0.32,41.51 0.62,38.79 C0.92,36.08 1.29,33.35 1.86,30.68 C2.44,28.01 3.12,25.32 4.09,22.78 C5.06,20.24 6.21,17.69 7.70,15.42 C9.19,13.16 10.99,10.98 13.02,9.21 Z",
    "slabTilt": "M9.31,9.26 C11.19,7.37 13.46,5.73 15.80,4.45 C18.14,3.16 20.77,2.25 23.36,1.55 C25.95,0.85 28.67,0.50 31.35,0.25 C34.03,-0.01 36.75,-0.02 39.45,0.01 C42.15,0.04 44.86,0.22 47.55,0.45 C50.24,0.67 52.93,0.99 55.61,1.37 C58.28,1.75 60.95,2.19 63.60,2.74 C66.24,3.29 68.89,3.89 71.47,4.67 C74.06,5.45 76.65,6.30 79.10,7.40 C81.56,8.51 84.01,9.75 86.19,11.30 C88.38,12.85 90.49,14.66 92.22,16.69 C93.95,18.72 95.45,21.07 96.60,23.49 C97.75,25.90 98.55,28.55 99.12,31.18 C99.68,33.80 99.92,36.54 100.00,39.23 C100.08,41.92 99.89,44.64 99.60,47.32 C99.30,50.00 98.80,52.68 98.22,55.31 C97.64,57.95 96.92,60.56 96.12,63.14 C95.33,65.73 94.44,68.28 93.48,70.81 C92.51,73.33 91.50,75.85 90.35,78.29 C89.20,80.73 88.03,83.19 86.59,85.47 C85.16,87.75 83.62,90.05 81.74,91.95 C79.86,93.84 77.67,95.61 75.33,96.85 C72.98,98.09 70.28,98.86 67.66,99.38 C65.03,99.90 62.28,99.98 59.58,99.99 C56.89,100.00 54.18,99.75 51.49,99.45 C48.81,99.16 46.13,98.73 43.48,98.23 C40.82,97.72 38.17,97.15 35.57,96.43 C32.97,95.71 30.36,94.94 27.87,93.91 C25.39,92.87 22.89,91.71 20.66,90.22 C18.43,88.73 16.31,86.95 14.50,84.98 C12.68,83.02 11.14,80.73 9.77,78.41 C8.41,76.10 7.31,73.59 6.30,71.09 C5.29,68.59 4.47,66.00 3.73,63.40 C2.98,60.81 2.36,58.17 1.84,55.52 C1.32,52.87 0.90,50.19 0.60,47.51 C0.29,44.82 0.08,42.12 0.02,39.42 C-0.03,36.72 -0.00,34.00 0.27,31.32 C0.53,28.64 0.92,25.92 1.63,23.33 C2.35,20.75 3.27,18.13 4.55,15.79 C5.83,13.44 7.44,11.15 9.31,9.26 Z",
    "squircle": "M0.07,43.29 C0.19,40.58 0.38,37.84 0.82,35.16 C1.25,32.49 1.83,29.79 2.70,27.23 C3.57,24.67 4.68,22.13 6.02,19.78 C7.36,17.44 8.97,15.18 10.75,13.15 C12.54,11.12 14.56,9.21 16.73,7.60 C18.90,6.00 21.30,4.58 23.77,3.50 C26.24,2.42 28.91,1.66 31.56,1.11 C34.21,0.55 36.95,0.36 39.66,0.17 C42.38,-0.01 45.11,-0.01 47.83,0.00 C50.55,0.01 53.27,0.06 55.99,0.23 C58.70,0.40 61.43,0.60 64.11,1.00 C66.80,1.40 69.50,1.88 72.11,2.62 C74.72,3.36 77.33,4.26 79.76,5.45 C82.19,6.64 84.58,8.07 86.67,9.77 C88.77,11.46 90.71,13.47 92.32,15.63 C93.92,17.80 95.25,20.25 96.30,22.74 C97.36,25.22 98.08,27.89 98.66,30.54 C99.23,33.19 99.52,35.92 99.74,38.63 C99.96,41.34 100.00,44.07 100.00,46.79 C100.00,49.51 99.92,52.24 99.73,54.95 C99.55,57.66 99.31,60.38 98.89,63.07 C98.47,65.75 97.96,68.45 97.21,71.05 C96.46,73.66 95.58,76.28 94.38,78.70 C93.18,81.12 91.73,83.51 89.99,85.56 C88.26,87.62 86.16,89.47 83.96,91.03 C81.76,92.59 79.28,93.85 76.80,94.93 C74.31,96.00 71.67,96.78 69.05,97.47 C66.42,98.17 63.74,98.69 61.05,99.10 C58.36,99.50 55.64,99.80 52.93,99.92 C50.22,100.04 47.48,100.03 44.77,99.82 C42.06,99.62 39.34,99.26 36.69,98.70 C34.03,98.14 31.38,97.41 28.84,96.46 C26.31,95.51 23.80,94.36 21.46,93.00 C19.13,91.63 16.86,90.04 14.83,88.26 C12.80,86.47 10.91,84.44 9.29,82.27 C7.68,80.11 6.30,77.71 5.15,75.26 C3.99,72.81 3.10,70.20 2.37,67.59 C1.64,64.98 1.15,62.28 0.77,59.59 C0.38,56.90 0.19,54.17 0.07,51.45 C-0.04,48.74 -0.05,46.01 0.07,43.29 Z",
    "cushion": "M0.00,48.37 C0.04,45.65 0.22,42.91 0.61,40.22 C1.00,37.54 1.56,34.84 2.33,32.24 C3.11,29.64 4.07,27.05 5.28,24.63 C6.49,22.21 7.92,19.83 9.60,17.71 C11.28,15.59 13.29,13.68 15.36,11.93 C17.43,10.18 19.70,8.61 22.01,7.20 C24.33,5.79 26.75,4.45 29.26,3.45 C31.78,2.45 34.45,1.75 37.11,1.21 C39.77,0.67 42.50,0.42 45.22,0.22 C47.93,0.02 50.66,-0.02 53.38,0.00 C56.11,0.02 58.84,0.08 61.55,0.35 C64.25,0.62 66.98,0.96 69.61,1.62 C72.24,2.29 74.86,3.18 77.31,4.32 C79.76,5.47 82.15,6.89 84.32,8.51 C86.49,10.12 88.54,11.99 90.34,14.01 C92.14,16.03 93.81,18.26 95.12,20.62 C96.44,22.98 97.48,25.56 98.23,28.16 C98.98,30.75 99.32,33.50 99.61,36.20 C99.90,38.90 99.92,41.64 99.98,44.36 C100.03,47.08 100.03,49.81 99.94,52.53 C99.85,55.25 99.73,57.98 99.45,60.69 C99.16,63.39 98.81,66.11 98.23,68.76 C97.65,71.42 96.97,74.09 95.99,76.62 C95.01,79.14 93.83,81.66 92.36,83.92 C90.89,86.18 89.12,88.36 87.14,90.19 C85.17,92.02 82.86,93.61 80.49,94.89 C78.12,96.18 75.50,97.13 72.90,97.88 C70.30,98.64 67.58,99.08 64.88,99.43 C62.19,99.78 59.45,99.90 56.73,99.98 C54.01,100.05 51.28,99.98 48.56,99.87 C45.84,99.75 43.12,99.59 40.41,99.29 C37.71,98.98 35.00,98.61 32.34,98.03 C29.69,97.44 27.03,96.74 24.50,95.77 C21.96,94.80 19.42,93.68 17.15,92.21 C14.89,90.75 12.69,88.99 10.90,86.99 C9.12,84.98 7.65,82.59 6.43,80.18 C5.20,77.77 4.35,75.14 3.55,72.54 C2.75,69.94 2.14,67.27 1.62,64.60 C1.09,61.93 0.65,59.23 0.38,56.53 C0.11,53.82 -0.04,51.09 0.00,48.37 Z",
    "pebble": "M0.18,52.96 C0.45,50.48 1.05,48.00 1.83,45.61 C2.61,43.22 3.70,40.88 4.88,38.61 C6.07,36.33 7.47,34.13 8.93,31.97 C10.39,29.81 11.99,27.70 13.63,25.64 C15.27,23.58 17.00,21.55 18.78,19.60 C20.56,17.66 22.39,15.74 24.31,13.96 C26.22,12.18 28.19,10.45 30.26,8.92 C32.34,7.39 34.49,5.96 36.74,4.78 C39.00,3.60 41.36,2.60 43.78,1.85 C46.20,1.10 48.73,0.58 51.25,0.28 C53.77,-0.01 56.37,-0.07 58.92,0.08 C61.47,0.22 64.05,0.58 66.55,1.13 C69.05,1.68 71.54,2.44 73.93,3.37 C76.32,4.30 78.67,5.43 80.86,6.72 C83.06,8.02 85.20,9.50 87.12,11.15 C89.04,12.80 90.85,14.63 92.40,16.61 C93.95,18.59 95.32,20.76 96.41,23.01 C97.50,25.27 98.35,27.69 98.95,30.13 C99.55,32.57 99.88,35.13 99.98,37.65 C100.09,40.18 99.93,42.76 99.57,45.27 C99.20,47.79 98.59,50.30 97.81,52.73 C97.03,55.16 96.02,57.55 94.89,59.86 C93.75,62.17 92.42,64.41 90.99,66.59 C89.56,68.76 87.98,70.86 86.33,72.90 C84.67,74.93 82.90,76.91 81.07,78.80 C79.24,80.70 77.31,82.53 75.33,84.27 C73.35,86.00 71.30,87.67 69.19,89.21 C67.08,90.75 64.90,92.22 62.66,93.51 C60.42,94.80 58.11,95.99 55.74,96.95 C53.37,97.90 50.92,98.72 48.46,99.22 C45.99,99.73 43.45,100.03 40.96,100.00 C38.47,99.97 35.94,99.65 33.52,99.05 C31.10,98.46 28.70,97.53 26.44,96.42 C24.18,95.31 22.00,93.91 19.95,92.39 C17.90,90.87 15.95,89.12 14.14,87.29 C12.34,85.46 10.63,83.47 9.10,81.40 C7.57,79.33 6.15,77.14 4.94,74.88 C3.74,72.63 2.67,70.26 1.88,67.85 C1.09,65.45 0.49,62.95 0.21,60.47 C-0.07,57.99 -0.09,55.44 0.18,52.96 Z"
  };
  const GRADS = {
    "sunsetFlat": {
      "v": [0, 0, 1, 0],
      "s": [[0, "#FF7420"], [45, "#FF9084"], [100, "#FFA8E6"]]
    },
    "grape": {
      "v": [0.1, 0.9, 0.95, 0.05],
      "s": [[0, "#00CE73"], [38, "#0CC27A"], [62, "#2E8FA8"], [82, "#4F5FD6"], [100, "#6B2BF0"]]
    },
    "blush": {
      "v": [0.15, 1, 0.9, 0],
      "s": [[0, "#FFABE7"], [40, "#E9B0E6"], [70, "#AFC3E0"], [100, "#3BE3D2"]]
    },
    "meadowSweep": {
      "v": [1, 0, 0.35, 1],
      "s": [[0, "#FDE51A"], [30, "#E8E62A"], [55, "#C2E64E"], [78, "#86E686"], [100, "#37E4D2"]]
    }
  };
  let _n = 0;
  function Shape({
    shape,
    gradient,
    fill = "#fff",
    style
  }) {
    const id = React.useMemo(() => "mk" + _n++, []);
    const g = gradient && GRADS[gradient];
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none",
      style: {
        position: "absolute",
        display: "block",
        overflow: "visible",
        ...style
      },
      "aria-hidden": "true"
    }, g ? /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: id,
      x1: g.v[0],
      y1: g.v[1],
      x2: g.v[2],
      y2: g.v[3]
    }, g.s.map(([o, c]) => /*#__PURE__*/React.createElement("stop", {
      key: o,
      offset: o + "%",
      stopColor: c
    })))) : null, /*#__PURE__*/React.createElement("path", {
      d: PATHS[shape],
      fill: g ? "url(#" + id + ")" : fill
    }));
  }
  const FIELD = {
    meadow: "linear-gradient(35deg, #3BE3D2 0%, #86E08A 14%, #C4DF5A 35%, #E8DC40 60%, #FFDB2E 100%)",
    corner: "radial-gradient(ellipse 125% 78% at 0% 100%, #FF5A0A 0%, rgba(222,112,48,0.88) 14%, rgba(170,150,100,0.6) 32%, rgba(110,195,165,0.3) 55%, rgba(59,227,210,0) 80%), linear-gradient(180deg, #3BE3D2 0%, #3BE3D2 50%, #55D3BC 100%)",
    blush: "linear-gradient(25deg, #FFABE7 0%, #F4AEE6 35%, #CBBBE3 60%, #9FCADF 80%, #3BE3D2 100%)"
  };
  const DISPLAY = {
    fontFamily: "var(--font-sans)",
    fontWeight: 800,
    lineHeight: 0.9,
    letterSpacing: "-0.035em",
    margin: 0,
    whiteSpace: "nowrap",
    position: "absolute"
  };
  const Img = ({
    src,
    style
  }) => /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "JuicySuite",
    style: {
      position: "absolute",
      display: "block",
      ...style
    }
  });
  const WM = {
    white: "../../assets/juicysuite-wordmark-white.svg",
    black: "../../assets/juicysuite-wordmark-black.svg"
  };
  function FieldSpread() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        aspectRatio: "2036 / 1148",
        borderRadius: 20,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        background: FIELD.meadow
      }
    }, /*#__PURE__*/React.createElement(Shape, {
      shape: "bloom",
      gradient: "sunsetFlat",
      style: {
        left: "5.8%",
        top: "32%",
        width: "68.5%",
        height: "64.4%"
      }
    }), /*#__PURE__*/React.createElement(Img, {
      src: WM.white,
      style: {
        left: "49.6%",
        top: "52%",
        width: "28.7%",
        transform: "translate(-50%, -50%)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        background: FIELD.corner
      }
    }, /*#__PURE__*/React.createElement(Shape, {
      shape: "sweep",
      gradient: "meadowSweep",
      style: {
        inset: 0,
        width: "100%",
        height: "100%"
      }
    }), /*#__PURE__*/React.createElement(Img, {
      src: WM.white,
      style: {
        left: "53.7%",
        top: "52%",
        width: "31%",
        transform: "translate(-50%, -50%)"
      }
    })));
  }
  function FrameBreakPoster({
    tone = "grape",
    title = ["Juice up", "Grow on"],
    body = "Points, stamps and birthday perks that bring regulars back. Set it up in a morning; leave it running for a year."
  }) {
    const grape = tone === "grape";
    const accent = grape ? "#FFABE7" : "#FF761A";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "0.8",
        containerType: "inline-size"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: grape ? "7%" : "2%",
        right: grape ? "4.5%" : "13%",
        top: "6%",
        bottom: "7%",
        border: "2.8cqw solid " + accent
      }
    }), grape ? /*#__PURE__*/React.createElement(Shape, {
      shape: "slab",
      gradient: "grape",
      style: {
        left: "4%",
        top: "9%",
        width: "87.5%",
        height: "88.5%"
      }
    }) : /*#__PURE__*/React.createElement(Shape, {
      shape: "slabTilt",
      gradient: "blush",
      style: {
        left: "8.5%",
        top: "0.5%",
        width: "89%",
        height: "92%"
      }
    }), /*#__PURE__*/React.createElement(Img, {
      src: grape ? WM.white : WM.black,
      style: {
        left: grape ? "15%" : "9.5%",
        top: "24.5%",
        width: "17%"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        position: "absolute",
        left: grape ? "15%" : "9.5%",
        top: "29.5%",
        width: grape ? "72%" : "74%",
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: "2.9cqw",
        fontWeight: 600,
        lineHeight: 1.62,
        color: grape ? "#FFFFFF" : "#2B2B2B",
        textWrap: "pretty"
      }
    }, body), /*#__PURE__*/React.createElement("h3", {
      style: {
        ...DISPLAY,
        left: grape ? "14%" : "8.5%",
        top: "57%",
        fontSize: "17.5cqw",
        color: accent
      }
    }, title[0], /*#__PURE__*/React.createElement("br", null), title[1]));
  }
  function KnockoutPoster({
    ratio = "590 / 962",
    title = ["Juice up", "Grow on"]
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: ratio,
        borderRadius: 4,
        overflow: "hidden",
        background: FIELD.blush,
        containerType: "inline-size"
      }
    }, /*#__PURE__*/React.createElement(Shape, {
      shape: "squircle",
      style: {
        left: "2.71%",
        top: "2.91%",
        width: "94.41%",
        height: "45.95%"
      }
    }), /*#__PURE__*/React.createElement(Shape, {
      shape: "cushion",
      style: {
        left: "2.71%",
        top: "50%",
        width: "60.17%",
        height: "48.34%"
      }
    }), /*#__PURE__*/React.createElement(Shape, {
      shape: "pebble",
      style: {
        left: "70.34%",
        top: "56.03%",
        width: "21.53%",
        height: "12.68%"
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        ...DISPLAY,
        left: "10%",
        top: "40.5%",
        fontSize: "18cqw",
        color: "#FFB0EA"
      }
    }, title[0], /*#__PURE__*/React.createElement("br", null), title[1]), /*#__PURE__*/React.createElement(Img, {
      src: WM.black,
      style: {
        right: "3.5%",
        bottom: "3%",
        width: "24%"
      }
    }));
  }
  const TIERS = {
    New: {
      set: ["#00CE73", "#36E4D2", "#FFDA2C"],
      eyebrow: "Tier · Welcome",
      title: "New",
      body: "First 30 days after sign-up",
      perk: "100 welcome points"
    },
    Standard: {
      set: ["#FF761A", "#FFABE7", "#A9939A"],
      eyebrow: "Tier · Core",
      title: "Standard",
      body: "Every registered member",
      perk: "1× points on every visit"
    },
    VIP: {
      set: ["#FFDA2C", "#904AA8", "#FF5C4C"],
      eyebrow: "Tier · Premium",
      title: "VIP",
      body: "HK$8K+ spend a year",
      perk: "2× points · early access"
    }
  };
  function TierCard({
    kind = "Standard"
  }) {
    const t = TIERS[kind];
    const ink = kind === "VIP" ? "#474242" : "#FFFFFF";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "1 / 1.2",
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        containerType: "inline-size"
      }
    }, /*#__PURE__*/React.createElement(Shape, {
      shape: "cushion",
      fill: t.set[0],
      style: {
        left: "5%",
        top: "4.2%",
        width: "90%",
        height: "62%"
      }
    }), /*#__PURE__*/React.createElement(Shape, {
      shape: "pebble",
      fill: t.set[1],
      style: {
        left: "52%",
        top: "68.5%",
        width: "43%",
        height: "27.3%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "5%",
        top: "74%",
        width: "40%",
        height: "11%",
        borderRadius: "3cqw 6cqw 6cqw 3cqw",
        background: t.set[2]
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "14%",
        top: "14%",
        right: "14%",
        display: "flex",
        flexDirection: "column",
        gap: "2.8cqw",
        color: ink,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "3.6cqw",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase"
      }
    }, t.eyebrow), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: kind === "Standard" ? "14cqw" : "17cqw",
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 0.9
      }
    }, t.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "4.6cqw",
        fontWeight: 500,
        lineHeight: 1.4
      }
    }, t.body)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "5%",
        top: "88.5%",
        width: "90%",
        fontFamily: "var(--font-sans)",
        fontSize: "4.2cqw",
        fontWeight: 700,
        color: "#474242"
      }
    }, t.perk));
  }
  function FeatureBanner({
    eyebrow = "What's new",
    title = ["Birthdays,", "on autopilot."],
    body = "Set a rule once. JuicySuite recognises every birthday, awards the points and sends the follow-up — for every member, every year.",
    cta = "Read the launch note →"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "2.5 / 1",
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        containerType: "inline-size"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "2.4%",
        right: "2.4%",
        top: "8%",
        bottom: "8%",
        border: "1.1cqw solid #FFABE7"
      }
    }), /*#__PURE__*/React.createElement(Shape, {
      shape: "slab",
      gradient: "grape",
      style: {
        left: "4%",
        top: "-9%",
        width: "56%",
        height: "118%"
      }
    }), /*#__PURE__*/React.createElement(Img, {
      src: WM.white,
      style: {
        left: "10%",
        top: "17%",
        width: "10%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "10%",
        top: "27%",
        fontFamily: "var(--font-sans)",
        fontSize: "1.05cqw",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#fff"
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h3", {
      style: {
        ...DISPLAY,
        left: "9.4%",
        top: "37%",
        fontSize: "7.4cqw",
        color: "#FFABE7"
      }
    }, title[0], /*#__PURE__*/React.createElement("br", null), title[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "64%",
        right: "7%",
        top: "30%",
        display: "flex",
        flexDirection: "column",
        gap: "2.4cqw"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: "1.55cqw",
        fontWeight: 500,
        lineHeight: 1.6,
        color: "#474242",
        textWrap: "pretty"
      }
    }, body), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--gradient-sunset)",
        color: "#fff",
        borderRadius: 9999,
        padding: "1.1cqw 2.2cqw",
        fontFamily: "var(--font-sans)",
        fontSize: "1.2cqw",
        fontWeight: 600,
        boxShadow: "var(--shadow-cta)",
        whiteSpace: "nowrap"
      }
    }, cta))), /*#__PURE__*/React.createElement(Shape, {
      shape: "pebble",
      gradient: "sunsetFlat",
      style: {
        left: "86%",
        top: "74%",
        width: "7%",
        height: "17%"
      }
    }));
  }
  window.JSM = {
    FieldSpread,
    FrameBreakPoster,
    KnockoutPoster,
    TierCard,
    FeatureBanner
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Compositions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saas-app/Dashboard.jsx
try { (() => {
// Dashboard — KPI row, growth + tiers, promo + weekday bars, recent activity.
(function () {
  const {
    Card,
    CardHeader,
    KPICard,
    MiniChart,
    Donut,
    DonutLegend,
    PromoBanner,
    BarChart,
    SegmentedPills,
    TextLink,
    Avatar
  } = window.JS;
  const ACTIVITY = [{
    initials: "AL",
    idx: 0,
    name: "Alice Lim",
    action: "redeemed",
    obj: "Free coffee",
    time: "2m ago",
    points: "−180"
  }, {
    initials: "BK",
    idx: 1,
    name: "Bryan Koh",
    action: "earned",
    obj: "Birthday bonus",
    time: "14m ago",
    points: "+200"
  }, {
    initials: "CN",
    idx: 2,
    name: "Cheng Nguyen",
    action: "joined",
    obj: "as a new member",
    time: "1h ago",
    points: "+50"
  }, {
    initials: "DR",
    idx: 3,
    name: "Daniel Reyes",
    action: "upgraded",
    obj: "to VIP tier",
    time: "3h ago",
    points: "+0"
  }, {
    initials: "ET",
    idx: 4,
    name: "Esther Tan",
    action: "earned",
    obj: "Visit reward",
    time: "5h ago",
    points: "+25"
  }];
  function DashboardScreen() {
    const [range, setRange] = React.useState("90D");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 32px 56px",
        display: "flex",
        flexDirection: "column",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(KPICard, {
      icon: "users",
      color: "orange",
      value: "12,438",
      label: "Members",
      trend: "12%"
    }), /*#__PURE__*/React.createElement(KPICard, {
      icon: "star",
      color: "coral",
      value: "284K",
      label: "Points",
      trend: "8%"
    }), /*#__PURE__*/React.createElement(KPICard, {
      icon: "check",
      color: "green",
      value: "1,892",
      label: "Redeemed",
      trend: "4%"
    }), /*#__PURE__*/React.createElement(KPICard, {
      icon: "dollar",
      color: "purple",
      value: "$48K",
      label: "Revenue",
      trend: "2%",
      trendDir: "down"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Member growth",
      subtitle: "Cumulative active members over the last 30 days",
      right: /*#__PURE__*/React.createElement(SegmentedPills, {
        options: ["30D", "90D"],
        value: range,
        onChange: setRange
      })
    }), /*#__PURE__*/React.createElement(MiniChart, {
      data: range === "90D" ? [110, 100, 105, 88, 75, 80, 60, 50, 35, 25, 20] : [96, 90, 84, 86, 70, 64, 58, 52, 44],
      height: 180
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 8
      }
    }, ["Apr 26", "May 2", "May 8", "May 14", "May 20", "May 26"].map(d => /*#__PURE__*/React.createElement("span", {
      key: d,
      style: {
        fontSize: 11,
        color: "var(--text-secondary)"
      }
    }, d)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Member tiers",
      subtitle: "Active member distribution"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Donut, {
      center: {
        value: "12.4K",
        label: "Total"
      }
    }), /*#__PURE__*/React.createElement(DonutLegend, null)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(PromoBanner, {
      eyebrow: "Quick Start",
      title: "Watch a 2-minute tour",
      body: "Set up your first loyalty campaign in minutes."
    }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Redemptions by day",
      subtitle: "Thursday peaks 41% above weekly average",
      right: /*#__PURE__*/React.createElement("span", {
        className: "t-caption"
      }, "Last Week")
    }), /*#__PURE__*/React.createElement(BarChart, null))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Recent activity",
      right: /*#__PURE__*/React.createElement(TextLink, null, "View all \u2192")
    }), /*#__PURE__*/React.createElement("div", null, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 0",
        borderBottom: i < ACTIVITY.length - 1 ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: a.initials,
      idx: a.idx,
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600
      }
    }, a.name), " ", a.action, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, a.obj)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-secondary)",
        marginTop: 2
      }
    }, a.time)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: a.points.startsWith("+") && a.points !== "+0" ? "var(--status-success)" : a.points.startsWith("−") ? "var(--status-error)" : "var(--text-secondary)"
      }
    }, a.points, " pts"))))));
  }
  window.DashboardScreen = DashboardScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saas-app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saas-app/Earning.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Earning — campaign list with toggles, global earning features, monthly summary.
(function () {
  const {
    Card,
    CardHeader,
    SearchInput,
    Button,
    CampaignCard,
    Toggle,
    Trend
  } = window.JS;
  const CAMPS = [{
    id: 1,
    title: "Spring Birthday Bonus",
    active: true,
    period: "Apr 1 – May 31, 2026 · 142 redemptions",
    description: "Members earn double points on birthday week. Auto-applies based on registered DOB with no manual claim required. Currently active and performing 23% above projection.",
    stats: [{
      value: "142",
      label: "Redemptions",
      trend: "23%"
    }, {
      value: "$3.4K",
      label: "Revenue lift",
      trend: "18%"
    }, {
      value: "4.8★",
      label: "Member rating"
    }]
  }, {
    id: 2,
    title: "Weekday Coffee Run",
    active: true,
    period: "Recurring · Mon–Thu, 7am–11am",
    description: "1.5× points on coffee orders during the morning rush. Encourages weekday repeat visits.",
    stats: [{
      value: "1,284",
      label: "Redemptions",
      trend: "9%"
    }, {
      value: "$8.1K",
      label: "Revenue lift",
      trend: "5%"
    }]
  }, {
    id: 3,
    title: "Referral Reward",
    active: false,
    period: "Ended Apr 12, 2026 · 87 referrals",
    description: "50 bonus points to both members for each successful referral. Paused pending review of cost-per-acquisition."
  }, {
    id: 4,
    title: "VIP Anniversary Surprise",
    active: true,
    period: "Year-round · automatic",
    description: "Sends a free dessert reward on each VIP member's signup anniversary. Low-frequency, high-delight."
  }];
  const FEATURES = [{
    k: "profile",
    title: "Complete profile bonus",
    desc: "100 points when members complete their profile"
  }, {
    k: "visits",
    title: "Visit count tracking",
    desc: "Track repeat visits and tier rewards"
  }, {
    k: "referrals",
    title: "Referral rewards",
    desc: "50 points per successful referral"
  }, {
    k: "birthdays",
    title: "Birthday rewards",
    desc: "Auto-apply based on registered DOB"
  }];
  function Stat({
    label,
    value,
    trend
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 500,
        color: "var(--text-secondary)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 800
      }
    }, value), trend));
  }
  function EarningScreen() {
    const [camps, setCamps] = React.useState(CAMPS);
    const [feat, setFeat] = React.useState({
      profile: true,
      visits: false,
      referrals: true,
      birthdays: true
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 32px 56px",
        display: "flex",
        flexDirection: "column",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(SearchInput, {
      placeholder: "Search campaigns\u2026",
      style: {
        maxWidth: 360
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "filter"
    }, "Status"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "calendar"
    }, "Date range"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      icon: "plus"
    }, "Add Campaign")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, camps.map(c => /*#__PURE__*/React.createElement(CampaignCard, _extends({
      key: c.id
    }, c, {
      onToggle: () => setCamps(cs => cs.map(x => x.id === c.id ? {
        ...x,
        active: !x.active
      } : x))
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 22
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Earning features",
      subtitle: "Global toggles applied to all members"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, FEATURES.map(f => /*#__PURE__*/React.createElement("div", {
      key: f.k,
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Toggle, {
      checked: feat[f.k],
      onChange: () => setFeat(s => ({
        ...s,
        [f.k]: !s[f.k]
      }))
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, f.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-secondary)",
        marginTop: 2
      }
    }, f.desc)))))), /*#__PURE__*/React.createElement(Card, {
      padding: 22
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "This month"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Points awarded",
      value: "284,210"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Avg points / member",
      value: "23"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Cost per acquisition",
      value: "$1.84",
      trend: /*#__PURE__*/React.createElement(Trend, {
        value: "6%",
        dir: "down"
      })
    }))))));
  }
  window.EarningScreen = EarningScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saas-app/Earning.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saas-app/Members.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Members — toolbar with search, filters, pill tabs; filterable member list.
(function () {
  const {
    Card,
    CardHeader,
    SearchInput,
    Button,
    PillTabs,
    MemberRow,
    IconButton
  } = window.JS;
  const SEED = [{
    initials: "AL",
    idx: 0,
    name: "Alice Lim",
    id: "00272400000004",
    points: 1840,
    status: {
      kind: "activated",
      label: "Activated"
    }
  }, {
    initials: "BK",
    idx: 1,
    name: "Bryan Koh",
    id: "00272400000005",
    points: 4220,
    status: {
      kind: "vip",
      label: "VIP"
    }
  }, {
    initials: "CN",
    idx: 2,
    name: "Cheng Nguyen",
    id: "00272400000006",
    points: 120,
    status: {
      kind: "unactivated",
      label: "Unactivated"
    }
  }, {
    initials: "DR",
    idx: 3,
    name: "Daniel Reyes",
    id: "00272400000007",
    points: 2950,
    status: {
      kind: "activated",
      label: "Activated"
    }
  }, {
    initials: "ET",
    idx: 4,
    name: "Esther Tan",
    id: "00272400000008",
    points: 680,
    status: {
      kind: "activated",
      label: "Activated"
    }
  }, {
    initials: "FW",
    idx: 0,
    name: "Fenton Wong",
    id: "00272400000009",
    points: 90,
    status: {
      kind: "paused",
      label: "Paused"
    }
  }, {
    initials: "GS",
    idx: 1,
    name: "Grace Suen",
    id: "00272400000010",
    points: 5240,
    status: {
      kind: "vip",
      label: "VIP"
    }
  }, {
    initials: "HC",
    idx: 2,
    name: "Harold Chen",
    id: "00272400000011",
    points: 410,
    status: {
      kind: "draft",
      label: "Draft"
    }
  }];
  const TABS = [{
    id: "all",
    label: "All members",
    count: 12438
  }, {
    id: "activated",
    label: "Activated",
    count: 9120
  }, {
    id: "vip",
    label: "VIP",
    count: 482
  }, {
    id: "unactivated",
    label: "Unactivated",
    count: 2836
  }];
  function MembersScreen() {
    const [q, setQ] = React.useState("");
    const [tab, setTab] = React.useState("all");
    const [rows, setRows] = React.useState(SEED);
    const list = rows.filter(m => tab === "all" || m.status.kind === tab).filter(m => m.name.toLowerCase().includes(q.toLowerCase()) || m.id.includes(q));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 32px 56px",
        display: "flex",
        flexDirection: "column",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 20
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(SearchInput, {
      value: q,
      onChange: setQ,
      placeholder: "Search by name or member ID\u2026",
      style: {
        flex: 1,
        maxWidth: 360
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "filter"
    }, "Filter"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "download"
    }, "Export")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement(PillTabs, {
      tabs: TABS,
      value: tab,
      onChange: setTab
    }))), /*#__PURE__*/React.createElement(Card, {
      padding: 20
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Members",
      subtitle: "Showing " + list.length + " of " + rows.length,
      right: /*#__PURE__*/React.createElement("span", {
        className: "t-caption"
      }, "Sort: Joined \u2193")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, list.map(m => /*#__PURE__*/React.createElement(MemberRow, _extends({
      key: m.id
    }, m, {
      onEdit: () => {},
      onRemove: () => setRows(r => r.filter(x => x.id !== m.id))
    }))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 32,
        textAlign: "center",
        color: "var(--text-secondary)",
        fontSize: 13
      }
    }, "No members yet. Try another filter.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16,
        paddingTop: 16,
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--text-secondary)"
      }
    }, "Page 1 of 156"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "chevronLeft",
      size: 14
    }), /*#__PURE__*/React.createElement(IconButton, {
      name: "chevronRight",
      size: 14
    })))));
  }
  window.MembersScreen = MembersScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saas-app/Members.jsx", error: String((e && e.message) || e) }); }

// ui_kits/saas-app/Placeholder.jsx
try { (() => {
// Placeholder — for nav destinations not defined in the source (Rewards, Reports, Billing, Settings).
(function () {
  const {
    Card,
    Button,
    Icon
  } = window.JS;
  function PlaceholderScreen({
    title,
    body
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 32px 56px"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 48
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 480,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "var(--gradient-sunset)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18,
        boxShadow: "var(--shadow-cta)",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 24
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        marginBottom: 8
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-secondary)",
        lineHeight: 1.55
      }
    }, body), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: "plus"
    }, "Get started")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        fontSize: 11,
        color: "var(--text-disabled)"
      }
    }, "Screen not defined in source \u2014 placeholder only."))));
  }
  window.PlaceholderScreen = PlaceholderScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/saas-app/Placeholder.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.Donut = __ds_scope.Donut;

__ds_ns.DonutLegend = __ds_scope.DonutLegend;

__ds_ns.MiniChart = __ds_scope.MiniChart;

__ds_ns.AVATAR_GRADIENTS = __ds_scope.AVATAR_GRADIENTS;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Trend = __ds_scope.Trend;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.WORDMARKS = __ds_scope.WORDMARKS;

__ds_ns.CampaignCard = __ds_scope.CampaignCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.KPICard = __ds_scope.KPICard;

__ds_ns.MemberRow = __ds_scope.MemberRow;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.PillComposition = __ds_scope.PillComposition;

__ds_ns.PillStatRow = __ds_scope.PillStatRow;

__ds_ns.SplitBar = __ds_scope.SplitBar;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PillTabs = __ds_scope.PillTabs;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.SegmentedPills = __ds_scope.SegmentedPills;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.TopHeader = __ds_scope.TopHeader;

__ds_ns.BLOB_PATHS = __ds_scope.BLOB_PATHS;

__ds_ns.BLOB_RATIOS = __ds_scope.BLOB_RATIOS;

__ds_ns.BLOB_GRADIENTS = __ds_scope.BLOB_GRADIENTS;

__ds_ns.Blob = __ds_scope.Blob;

__ds_ns.DropShort = __ds_scope.DropShort;

__ds_ns.DropTall = __ds_scope.DropTall;

__ds_ns.Ellipse = __ds_scope.Ellipse;

__ds_ns.GradientDefs = __ds_scope.GradientDefs;

__ds_ns.Marble = __ds_scope.Marble;

__ds_ns.StoneBloom = __ds_scope.StoneBloom;

__ds_ns.StoneRound = __ds_scope.StoneRound;

__ds_ns.StoneTilt = __ds_scope.StoneTilt;

__ds_ns.StoneWide = __ds_scope.StoneWide;

__ds_ns.GRADIENT_CSS = __ds_scope.GRADIENT_CSS;

__ds_ns.GRADIENT_STOPS = __ds_scope.GRADIENT_STOPS;

})();
