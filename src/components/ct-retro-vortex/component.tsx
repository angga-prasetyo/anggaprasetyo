import { useRef } from 'react';

import { cn } from '@/lib/utils';

import { CoreGlow } from './components/CoreGlow';
import { Particles } from './components/particles/component';
import { Particle } from './components/particles/type';
import { generateParticles } from './components/particles/utils';
import { Rays } from './components/Rays';
import { Rings } from './components/Rings';
import { RetroVortexProps } from './type';

export function CTRetroVortex({
  height = '100%',
  particleCount = 15,
  className,
  ringsOnly = false,
  skipRingIdx,
}: RetroVortexProps) {
  // Stable particle list — recalculate only on particleCount change
  const particlesRef = useRef<Particle[]>([]);
  if (particlesRef.current.length < particleCount) {
    const toAdd = particleCount - particlesRef.current.length;
    const accelerationDivider = particleCount / 15;
    particlesRef.current = [
      ...particlesRef.current,
      ...generateParticles(toAdd, accelerationDivider),
    ];
  }

  return (
      <div
        role="img"
        aria-label="Retro vortex portal animation"
        className={cn(
          'relative w-full overflow-hidden bg-black flex items-center justify-center',
          className,
        )}
        style={{ height }}>
        {/* --- Vortex centre --- */}
        <div className="absolute top-[50%] left-[50%] translate-[50%]">
          <Rings skipRingIdx={skipRingIdx} />
          {!ringsOnly && (
            <>
              <Rays />
              <Particles items={particlesRef.current} />
              <CoreGlow />
            </>
          )}
        </div>
      </div>
  );
}
