export interface MarbleProps {
  /** Width in px. @default 200 */
  size?: number;
  /** Brand gradient fill (50°). @default "sunset" */
  grad?: "sunset" | "mist" | "meadow";
  /** Use for absolute positioning / bleeds. */
  style?: React.CSSProperties;
}
export declare function Marble(props: MarbleProps): JSX.Element;
