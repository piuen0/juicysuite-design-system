import React from "react";
import { GRADIENT_CSS } from "./gradients.js";

export function Ellipse({ width = 240, grad = "sunset", style }) {
  return <div style={{ width: width, aspectRatio: "1.414 / 1", borderRadius: "50%", background: GRADIENT_CSS[grad], flexShrink: 0, ...style }}></div>;
}
