import { RetroVortexProps } from '../type';

const RINGS = [
  { size: 75, color: 'rgba(0,255,180,1)', duration: 1.2 },
  { size: 250, color: 'rgba(0,220,255,0.9)', duration: 1.8 },
  { size: 350, color: 'rgba(80,180,255,0.8)', duration: 2.4 },
  { size: 450, color: 'rgba(140,100,255,0.7)', duration: 3 },
  { size: 650, color: 'rgba(200,80,255,0.6)', duration: 3.8 },
  { size: 750, color: 'rgba(255,60,200,0.45)', duration: 4.8 },
  { size: 850, color: 'rgba(255,40,120,0.3)', duration: 6 },
  { size: 950, color: 'rgba(255,20,60,0.15)', duration: 8 },
] as const;

export function Rings({
  skipRingIdx,
}: {
  skipRingIdx: RetroVortexProps['skipRingIdx'];
}) {
  return RINGS.map(({ size, color, duration }, i) => {
    const skipRingSet = new Set([...(skipRingIdx ?? [])]);

    if (skipRingSet.has(i)) return;

    const animationDirection = i % 2 === 0 ? 'normal' : 'reverse';

    return (
      <div
        key={`ct-retro-vortex-ring-${i}`}
        className="absolute rounded-full border top-[50%] left-[50%] animate-spin-ring"
        style={
          {
            width: size,
            height: size,
            borderColor: color,
            '--duration': `${duration}s`,
            animationDirection,
          } as React.CSSProperties
        }
      />
    );
  });
}
