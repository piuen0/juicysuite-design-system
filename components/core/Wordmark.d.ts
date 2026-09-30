export interface WordmarkProps {
  /** orange = light surfaces · white = Sunset/dark · black = light marketing where orange clashes. @default "orange" */
  color?: "orange" | "white" | "black";
  /** Pixel height (or font size in textMode). @default 24 */
  height?: number;
  /** Type-only "Juicysuite" (700 + 400 split) for EDM / plain-text contexts. @default false */
  textMode?: boolean;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
