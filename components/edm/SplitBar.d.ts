export interface SplitSegment { pct: number; background: string; }
export interface SplitBarProps {
  /** Each segment is its own fully-rounded pill; use 90° EDM gradients. */
  segments: SplitSegment[];
  /** @default 22 */
  height?: number;
  /** @default 6 */
  gap?: number;
}
export declare function SplitBar(props: SplitBarProps): JSX.Element;
