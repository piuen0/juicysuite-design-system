export interface DonutSegment { value: number; color: string; label?: string; }
export interface DonutProps {
  /** Colors from the extended chart palette only. */
  segments?: DonutSegment[];
  center?: { value: string; label: string };
  /** @default 180 */
  size?: number;
}
export declare function Donut(props: DonutProps): JSX.Element;
export interface DonutLegendProps { segments?: DonutSegment[]; }
export declare function DonutLegend(props: DonutLegendProps): JSX.Element;
