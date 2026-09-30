import React from "react";

export function StoneRound({ size = 240, grad = "sunset", rotate = 0, style }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, aspectRatio: "1", transform: "rotate(" + rotate + "deg)", flexShrink: 0, ...style }}>
      <path d="M 50 4 C 70 4 95 22 96 48 C 97 72 78 96 52 96 C 28 96 4 78 5 52 C 6 26 28 4 50 4 Z" fill={"url(#js-" + grad + ")"} />
    </svg>
  );
}
