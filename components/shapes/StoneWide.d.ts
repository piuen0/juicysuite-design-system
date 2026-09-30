export interface StoneWideProps {
  /** Width in px. @default 320 */
  width?: number;
  /** Requires <GradientDefs /> on the page. @default "sunset" */
  grad?: "sunset" | "mist" | "meadow";
  /** Rotate 180°. @default false */
  flip?: boolean;
  style?: React.CSSProperties;
}
export declare function StoneWide(props: StoneWideProps): JSX.Element;
