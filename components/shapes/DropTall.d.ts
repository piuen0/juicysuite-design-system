export interface DropTallProps {
  /** Width in px. @default 100 */
  width?: number;
  /** Brand gradient fill (50°). @default "sunset" */
  grad?: "sunset" | "mist" | "meadow";
  /** Use for absolute positioning / bleeds. */
  style?: React.CSSProperties;
}
export declare function DropTall(props: DropTallProps): JSX.Element;
