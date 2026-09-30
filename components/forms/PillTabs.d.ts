export interface PillTab { id: string; label: string; count?: number | string; }
export interface PillTabsProps {
  tabs: PillTab[];
  /** Active tab id */
  value: string;
  onChange?: (id: string) => void;
}
export declare function PillTabs(props: PillTabsProps): JSX.Element;
