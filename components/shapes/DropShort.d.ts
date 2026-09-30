export interface DropShortProps {
  /** Width in px. @default 140 */
  width?: number;
  /** Brand gradient fill (50°). @default "sunset" */
  grad?: "sunset" | "mist" | "meadow";
  /** Use for absolute positioning / bleeds. */
  style?: React.CSSProperties;
}
export declare function DropShort(props: DropShortProps): JSX.Element;
