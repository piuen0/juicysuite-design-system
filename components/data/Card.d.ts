export interface CardProps {
  children?: React.ReactNode;
  /** @default 24 */
  padding?: number | string;
  /** 16 content · 12 KPI/chart · 20 modal. @default 16 */
  radius?: number;
  /** Deepen shadow-sm → shadow-md on hover. @default false */
  hoverable?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
export interface CardHeaderProps { title: string; subtitle?: string; right?: React.ReactNode; }
export declare function CardHeader(props: CardHeaderProps): JSX.Element;
