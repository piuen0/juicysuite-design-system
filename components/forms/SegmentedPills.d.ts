export interface SegmentedPillsProps {
  /** Short range labels, e.g. ["30D","90D"] */
  options: string[];
  value: string;
  onChange?: (value: string) => void;
}
export declare function SegmentedPills(props: SegmentedPillsProps): JSX.Element;
