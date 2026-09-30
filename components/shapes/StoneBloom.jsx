import React from "react";

export function StoneBloom({ size = 320, grad = "sunset", flip = false, style }) {
  return (
    <svg viewBox="0 0 204 250" style={{ width: size, aspectRatio: "204 / 250", transform: flip ? "rotate(180deg)" : "none", flexShrink: 0, ...style }}>
      <path d="M152.985 3.68C200.185 22.18 214.385 116.38 194.885 166.18C166.985 237.48 107.685 262.28 60.485 243.78C13.285 225.28 -22.915 164.38 17.385 99.38C54.685 39.38 105.785 -14.82 152.985 3.68Z" fill={"url(#js-" + grad + ")"} />
    </svg>
  );
}
