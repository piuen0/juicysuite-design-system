import type { IconName } from "./Icon";
export interface IconButtonProps {
  name: IconName;
  /** Glyph size. @default 16 */
  size?: number;
  /** Accessible label; defaults to icon name. */
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
