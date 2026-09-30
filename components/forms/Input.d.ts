export interface InputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
