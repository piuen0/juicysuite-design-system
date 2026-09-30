import type { IconName } from "./Icon";
export interface TextLinkProps {
  children?: React.ReactNode;
  icon?: IconName;
  /** Red #FF5C4C for destructive inline actions ("Remove"). @default false */
  destructive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function TextLink(props: TextLinkProps): JSX.Element;
