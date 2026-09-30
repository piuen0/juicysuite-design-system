export interface StoneRoundProps {
  /** Width in px. @default 240 */
  size?: number;
  /** Requires <GradientDefs /> on the page. @default "sunset" */
  grad?: "sunset" | "mist" | "meadow";
  /** Degrees. @default 0 */
  rotate?: number;
  style?: React.CSSProperties;
}
export declare function StoneRound(props: StoneRoundProps): JSX.Element;
