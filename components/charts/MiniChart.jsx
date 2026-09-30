import React from "react";

export function MiniChart({ data = [108, 92, 96, 75, 62, 68, 46, 38, 20], height = 180, id = "js-area" }) {
  const w = 600, h = 130, pad = 8;
  const n = data.length;
  const x = i => (i / (n - 1)) * w;
  const y = d => pad + (Math.min(Math.max(d, 0), h) / h) * (h - pad * 2);
  const pts = data.map((d, i) => x(i).toFixed(1) + "," + y(d).toFixed(1));
  const area = "M0," + h + " L" + pts.join(" L") + " L" + w + "," + h + " Z";
  const line = "M" + pts.join(" L");
  const mid = Math.floor(n / 2);
  const dots = [mid, n - 1];
  return (
    <div style={{ position: "relative", width: "100%", height }}>
      <svg viewBox={"0 0 " + w + " " + h} preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF761A" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#FF761A" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map(f => <line key={f} x1="0" y1={h * f} x2={w} y2={h * f} stroke="#F0F2F7" vectorEffect="non-scaling-stroke" />)}
        <path d={area} fill={"url(#" + id + ")"} />
        <path d={line} fill="none" stroke="#FF761A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>
      {dots.map(i => (
        <span key={i} style={{ position: "absolute", left: (i / (n - 1)) * 100 + "%", top: (y(data[i]) / h) * 100 + "%", width: 9, height: 9, marginLeft: -4.5, marginTop: -4.5, borderRadius: "50%", background: "#fff", border: "2px solid #FF761A", boxSizing: "border-box" }}></span>
      ))}
    </div>
  );
}
