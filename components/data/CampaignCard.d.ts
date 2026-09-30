export interface CampaignStat { value: string; label: string; trend?: string; trendDir?: "up" | "down"; }
export interface CampaignCardProps {
  title: string;
  /** e.g. "Apr 1 – May 31, 2026 · 142 redemptions" */
  period?: string;
  description?: string;
  active?: boolean;
  onToggle?: (checked: boolean) => void;
  stats?: CampaignStat[];
  onEdit?: () => void;
  onMore?: () => void;
}
export declare function CampaignCard(props: CampaignCardProps): JSX.Element;
