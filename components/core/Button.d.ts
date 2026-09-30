import type { IconName } from "./Icon";
/**
 * @startingPoint section="Core" subtitle="Sunset pill CTA, outline secondary, ghost-on-gradient" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = Sunset gradient + orange glow (one per view). secondary = outline. ghost = on gradient surfaces. @default "primary" */
  variant?: "primary" | "secondary" | "ghost";
  /** md = 40px, sm = 32px. @default "md" */
  size?: "md" | "sm";
  icon?: IconName;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
