type RingProps = {
  ringsOnly: boolean,
  skipRingIdx?: number[];
} | {
  ringsOnly?: never;
  skipRingIdx?: never;
}
export type RetroVortexProps = RingProps & {
  height?: number | string;
  particleCount?: number;
  className?: string;
};
