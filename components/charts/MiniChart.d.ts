export interface MiniChartProps {
  /** Y values in a 0–130 viewBox space (lower = higher on screen). */
  data?: number[];
  /** Rendered pixel height. @default 180 */
  height?: number;
  /** Unique gradient id when multiple charts share a page. @default "js-area" */
  id?: string;
}
export declare function MiniChart(props: MiniChartProps): JSX.Element;
