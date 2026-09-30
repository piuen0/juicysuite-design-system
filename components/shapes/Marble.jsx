import React from "react";
import { GRADIENT_CSS } from "./gradients.js";

export function Marble({ size = 200, grad = "sunset", style }) {
  return <div style={{ width: size, aspectRatio: "1", borderRadius: "50%", background: GRADIENT_CSS[grad], flexShrink: 0, ...style }}></div>;
}
