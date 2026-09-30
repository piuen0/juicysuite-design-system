export interface TrendProps {
  /** e.g. "12%" */
  value: string;
  /** @default "up" */
  dir?: "up" | "down";
  style?: React.CSSProperties;
}
export declare function Trend(props: TrendProps): JSX.Element;
