export interface PromoBannerProps {
  /** ALL-CAPS eyebrow, e.g. "Quick Start" */
  eyebrow?: string;
  title: string;
  body?: string;
  /** @default "Play" */
  ctaLabel?: string;
  onCta?: () => void;
}
export declare function PromoBanner(props: PromoBannerProps): JSX.Element;
