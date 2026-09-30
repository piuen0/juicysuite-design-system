import React from "react";
import { GRADIENT_STOPS } from "./gradients.js";

export function GradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        {Object.keys(GRADIENT_STOPS).map(k => (
          <linearGradient key={k} id={"js-" + k} x1="0.117" y1="0.821" x2="0.883" y2="0.179">
            {GRADIENT_STOPS[k].map(([o, c]) => <stop key={o} offset={o + "%"} stopColor={c} />)}
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}
