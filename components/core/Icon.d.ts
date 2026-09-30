export type IconName =
  | "plus" | "edit" | "check" | "filter" | "search" | "chevronDown" | "chevronRight" | "chevronLeft"
  | "users" | "star" | "gift" | "dollar" | "home" | "chart" | "bell" | "settings" | "trash" | "play"
  | "moreH" | "arrowUp" | "arrowDown" | "download" | "calendar" | "sparkle" | "x";

export interface IconProps {
  /** Glyph name — Lucide/Feather style, 2px stroke, round caps. */
  name: IconName;
  /** Pixel size. 12 text-link · 14 outline button · 16 CTA · 18 nav · 20 KPI · 24 large. @default 18 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
