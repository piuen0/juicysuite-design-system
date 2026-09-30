export interface TopHeaderProps {
  /** 34px / 800 page title */
  title: string;
  subtitle?: string;
  /** Usually one primary <Button> */
  actions?: React.ReactNode;
  /** @default "Honeycomb Cafe" */
  company?: string;
  /** @default "Owner" */
  role?: string;
  /** @default "HC" */
  initials?: string;
}
export declare function TopHeader(props: TopHeaderProps): JSX.Element;
