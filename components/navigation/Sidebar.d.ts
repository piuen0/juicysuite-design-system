import type { IconName } from "../core/Icon";
export interface NavEntry { id: string; icon: IconName; label: string; }
/**
 * @startingPoint section="Navigation" subtitle="Sunset gradient left rail with nav, search and plan meter" viewport="700x420"
 */
export interface SidebarProps {
  /** Active nav id */
  active?: string;
  onNav?: (id: string) => void;
  items?: NavEntry[];
  secondaryItems?: NavEntry[];
  /** Plan usage meter at the bottom; pass null to hide. */
  plan?: { name: string; used: number; limit: number } | null;
  style?: React.CSSProperties;
}
export declare function Sidebar(props: SidebarProps): JSX.Element;
