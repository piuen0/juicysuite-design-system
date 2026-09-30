export interface EllipseProps {
  /** Width in px. @default 240 */
  width?: number;
  /** Brand gradient fill (50°). @default "sunset" */
  grad?: "sunset" | "mist" | "meadow";
  /** Use for absolute positioning / bleeds. */
  style?: React.CSSProperties;
}
export declare function Ellipse(props: EllipseProps): JSX.Element;
