export interface StoneBloomProps {
  /** Width in px. @default 320 */
  size?: number;
  /** Requires <GradientDefs /> on the page. @default "sunset" */
  grad?: "sunset" | "mist" | "meadow";
  /** Rotate 180°. @default false */
  flip?: boolean;
  style?: React.CSSProperties;
}
export declare function StoneBloom(props: StoneBloomProps): JSX.Element;
