export interface BarChartProps {
  /** Bar heights as % of chart height */
  data?: number[];
  labels?: string[];
  /** Index of the solid-orange emphasis bar. @default 3 */
  highlight?: number;
  /** @default 160 */
  height?: number;
}
export declare function BarChart(props: BarChartProps): JSX.Element;
