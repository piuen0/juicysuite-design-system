export interface StoneTiltProps {
  /** Width in px. @default 200 */
  size?: number;
  /** Requires <GradientDefs /> on the page. @default "sunset" */
  grad?: "sunset" | "mist" | "meadow";
  /** Rotate 180°. @default false */
  flip?: boolean;
  style?: React.CSSProperties;
}
export declare function StoneTilt(props: StoneTiltProps): JSX.Element;
