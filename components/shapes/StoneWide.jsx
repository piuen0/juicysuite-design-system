import React from "react";

export function StoneWide({ width = 320, grad = "sunset", flip = false, style }) {
  return (
    <svg viewBox="0 0 141 100" style={{ width: width, aspectRatio: "1.414 / 1", transform: flip ? "rotate(180deg)" : "none", flexShrink: 0, ...style }}>
      <path d="M 10 50 C 8 28 35 6 70 6 C 110 6 138 22 138 50 C 138 72 105 94 70 94 C 35 94 10 75 10 50 Z" fill={"url(#js-" + grad + ")"} />
    </svg>
  );
}
