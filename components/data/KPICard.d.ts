import type { IconName } from "../core/Icon";
/**
 * @startingPoint section="Data" subtitle="Icon circle · 28/800 stat · label · trend" viewport="700x200"
 */
export interface KPICardProps {
  icon?: IconName;
  /** Pastel circle + tinted icon. @default "orange" */
  color?: "orange" | "coral" | "green" | "purple";
  /** Specific numbers — "12,438", "$48K" */
  value: string;
  label: string;
  trend?: string;
  /** @default "up" */
  trendDir?: "up" | "down";
  style?: React.CSSProperties;
}
export declare function KPICard(props: KPICardProps): JSX.Element;
