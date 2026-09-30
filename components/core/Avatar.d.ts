export interface AvatarProps {
  /** 1–2 letters */
  initials: string;
  /** @default 40 */
  size?: number;
  /** Index into the 5 avatar gradients (cycles). @default 0 */
  idx?: number;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
