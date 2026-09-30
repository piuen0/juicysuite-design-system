export interface PillStatRowProps {
  label: string;
  value: string | number;
  /** EDM 135° pill gradient key, or any CSS background. @default "coral" */
  gradient?: "pink" | "coral" | "aqua" | string;
  /** lg matches the 720px email (20px label / 30px stat). @default "md" */
  size?: "md" | "lg";
}
export declare function PillStatRow(props: PillStatRowProps): JSX.Element;
