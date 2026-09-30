import React from "react";

export function StoneTilt({ size = 200, grad = "sunset", flip = false, style }) {
  return (
    <svg viewBox="0 0 100 141" style={{ width: size, aspectRatio: "1 / 1.414", transform: flip ? "rotate(180deg)" : "none", flexShrink: 0, ...style }}>
      <path d="M 30 6 C 55 2 85 8 92 25 C 96 45 90 65 85 85 C 78 110 65 135 42 135 C 22 134 8 120 6 100 C 4 78 10 55 14 35 C 17 18 22 8 30 6 Z" fill={"url(#js-" + grad + ")"} />
    </svg>
  );
}
