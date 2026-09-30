export interface BadgeProps {
  /** Pastel background + matching saturated text. @default "draft" */
  kind?: "activated" | "unactivated" | "paused" | "warning" | "vip" | "info" | "draft" | "neutral";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
