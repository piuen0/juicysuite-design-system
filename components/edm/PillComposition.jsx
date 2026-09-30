import React from "react";

export function PillComposition({ scale = 1 }) {
  const s = n => n * scale;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: s(92), height: s(58), background: "linear-gradient(90deg, #FFFDF0, #FFE24A)", borderRadius: 9999 }}></div>
      <div style={{ width: s(44), height: s(58), background: "#2FD4C7", borderRadius: "0 9999px 9999px 0" }}></div>
      <div style={{ width: s(34), height: s(58), background: "#F5A6E7", borderRadius: "0 9999px 9999px 0" }}></div>
      <div style={{ width: s(82), height: s(82), background: "linear-gradient(180deg, #F7A6E8, #FF8C52)", borderRadius: 9999 }}></div>
      <div style={{ width: s(74), height: s(74), background: "linear-gradient(135deg, #FFE900, #2FD4C7)", borderRadius: 9999 }}></div>
    </div>
  );
}
