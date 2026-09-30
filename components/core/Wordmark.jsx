import React from "react";
import { WORDMARKS } from "./wordmarkData.js";

export function Wordmark({ color = "orange", height = 24, textMode = false, style }) {
  if (textMode) {
    const ink = color === "white" ? "#fff" : color === "black" ? "#222222" : "var(--text-primary)";
    return (
      <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: height, lineHeight: 1, color: ink, ...style }}>
        Juicy<span style={{ fontWeight: 400 }}>suite</span>
      </span>
    );
  }
  return <img src={WORDMARKS[color]} alt="JuicySuite" style={{ height, display: "block", ...style }} />;
}
