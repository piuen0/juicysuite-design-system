export interface BlobProps {
  /** bloom = field blob · sweep = corner-bleed arc (use full-bleed) · slab / slabTilt = frame-break blobs · squircle / cushion / pebble = knockout stack. @default "bloom" */
  shape?: "bloom" | "sweep" | "slab" | "slabTilt" | "squircle" | "cushion" | "pebble";
  /** Width (px or CSS length). @default 240 */
  width?: number | string;
  /** Height; defaults to width ÷ the shape's reference ratio. The path stretches to the box. */
  height?: number | string;
  /** Solid fill — white for knockouts. @default "#FFFFFF" */
  fill?: string;
  /** Named gradient fill; overrides fill. */
  gradient?: "sunsetFlat" | "grape" | "blush" | "meadowSweep";
  style?: React.CSSProperties;
}
export declare const BLOB_PATHS: Record<string, string>;
export declare const BLOB_RATIOS: Record<string, number>;
export declare function Blob(props: BlobProps): JSX.Element;
