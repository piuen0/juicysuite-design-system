export interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  /** @default "Search…" */
  placeholder?: string;
  /** Applied to the wrapper — set maxWidth / flex here. */
  style?: React.CSSProperties;
}
export declare function SearchInput(props: SearchInputProps): JSX.Element;
