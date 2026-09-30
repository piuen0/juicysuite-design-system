export interface MemberRowProps {
  initials: string;
  /** Avatar gradient index */
  idx?: number;
  name: string;
  /** Member ID — rendered in JetBrains Mono */
  id: string;
  status?: { kind: "activated" | "unactivated" | "paused" | "vip" | "draft" | "info" | "warning" | "neutral"; label: string };
  points?: number;
  onEdit?: () => void;
  /** Supplying this renders a red "Remove" link */
  onRemove?: () => void;
}
export declare function MemberRow(props: MemberRowProps): JSX.Element;
