import React from "react";
import { GRADIENT_CSS } from "./gradients.js";

export function DropShort({ width = 140, grad = "sunset", style }) {
  return <div style={{ width: width, aspectRatio: "1 / 1.414", borderRadius: 9999, background: GRADIENT_CSS[grad], flexShrink: 0, ...style }}></div>;
}
