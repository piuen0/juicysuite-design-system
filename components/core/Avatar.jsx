import React from "react";

export const AVATAR_GRADIENTS = [
  "linear-gradient(50deg, #FF761A 0%, #FFABE7 100%)",
  "linear-gradient(50deg, #37E4D2 0%, #00CE73 100%)",
  "linear-gradient(50deg, #FFABE7 0%, #904AA8 100%)",
  "linear-gradient(50deg, #F5D840 0%, #3DD2A4 100%)",
  "linear-gradient(50deg, #FF5E7C 0%, #FFB0C5 100%)",
];

export function Avatar({ initials, size = 40, idx = 0, style }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", background: AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length],
      color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: Math.round(size * 0.36),
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, letterSpacing: "-0.2px", ...style,
    }}>{initials}</div>
  );
}
