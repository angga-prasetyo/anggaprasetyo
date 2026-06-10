import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const PARTICLE_COLORS = ['#00ffb4', '#00d4ff', '#7b5fff', '#ff3cdc', '#ffffff'];

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

const RAY_ANGLES = Array.from({ length: 12 }, (_, i) => i * 30);

// ---------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------
function generateParticles(count: number): Particle[] {
  const accelerationDivider = count >= 30 ? 10 : 1;
  return Array.from({ length: count }, () => {
    const angle = Math.random() * 360;
    const dist = 60 + Math.random() * 140;
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * dist,
      y: Math.sin(rad) * dist,
      size: 2 + Math.random() * 3,
      color:
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      duration: (1.2 + Math.random() * 2.4) / accelerationDivider,
      delay: -(Math.random() * 3),
    };
  });
}

function Ring({
  size,
  color,
  duration,
  index,
}: {
  size: number | string;
  color: string;
  duration: number;
  index: number;
}) {
  return (
    <div
      className="absolute rounded-full border"
      style={{
        width: size,
        height: size,
        top: '50%',
        left: '50%',
        borderColor: color,
        animation: `spinRing ${duration}s linear infinite ${index % 2 === 0 ? 'normal' : 'reverse'}`,
      }}
    />
  );
}

function Rays() {
  return (
    <div
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
        width: 3000,
        height: 3000,
        transform: 'translate(-50%, -50%)',
        animation: 'raysRotate 11s linear infinite',
      }}>
      {RAY_ANGLES.map((angle) => (
        <div
          key={angle}
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: '100%',
            height: 1,
            transformOrigin: '0 50%',
            transform: `rotate(${angle}deg)`,
            background:
              'linear-gradient(to right, rgba(0,255,200,0.7), transparent)',
          }}
        />
      ))}
    </div>
  );
}

function CoreGlow({
  size = 28,
  variant = 'pulse',
}: {
  size?: number | string;
  variant?: 'pulse' | 'blind';
}) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        top: '50%',
        left: '50%',
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        background:
          'radial-gradient(circle, #fff 0%, rgba(0,255,200,0.9) 40%, rgba(0,200,255,0.4) 70%, transparent 100%)',
        boxShadow:
          '0 0 18px 6px rgba(0,255,200,0.5), 0 0 48px 20px rgba(0,180,255,0.2)',
        animation:
          variant === 'pulse'
            ? 'corePulse 3s ease-in'
            : 'coreBlind 11s ease-in',
      }}
    />
  );
}

function Particles({ items }: { items: Particle[] }) {
  return (
    <div className="absolute" style={{ top: '50%', left: '50%' }}>
      {items.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 4px 1px ${p.color}`,
            // CSS custom properties for the keyframe end-state
            ['--px' as string]: `${p.x}px`,
            ['--py' as string]: `${p.y}px`,
            animation: `particleDrift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
interface RetroVortexProps {
  /** Height of the scene in px (default 520) */
  height?: number | string;
  /** Particle count (default 28) */
  particleCount?: number;
  className?: string;
}

export function CTRetroVortex({
  height = '100%',
  particleCount = 5,
  className,
}: RetroVortexProps) {
  // Stable particle list — recalculate only on particleCount change
  const particlesRef = useRef<Particle[]>([]);
  if (particlesRef.current.length !== particleCount) {
    particlesRef.current = generateParticles(particleCount);
  }

  return (
    <>
      {/* Keyframes injected once into <head> */}
      <RetroVortexStyles />

      <div
        role="img"
        aria-label="Retro vortex portal animation"
        className={cn(
          'relative w-full overflow-hidden bg-black flex items-center justify-center',
          className,
        )}
        style={{ height }}>
        {/* --- Background grid --- */}
        {/* <GridPlane /> */}

        {/* --- Vortex centre --- */}
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <Rays />
          {RINGS.map((r, i) => (
            <Ring key={r.size} {...{ ...r }} index={i} />
          ))}
          <Particles items={particlesRef.current} />
          <CoreGlow />
          <CoreGlow size="100%" variant="blind" />
        </div>

        {/* --- Edge fades --- */}
        <div className="absolute top-0 left-0 w-full h-[30%] bg-linear-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 h-full w-[12%] bg-linear-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-[12%] bg-linear-to-l from-black to-transparent pointer-events-none" />

        {/* --- CRT scan line --- */}
        <div
          className="absolute left-0 w-full h-0.5 pointer-events-none"
          style={{
            background: 'rgba(0,255,180,0.06)',
            animation: 'scanMove 8s linear infinite',
          }}
        />
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Keyframe injection (runs once, idempotent)
// ---------------------------------------------------------------------------
const STYLE_ID = 'retro-vortex-keyframes';

function RetroVortexStyles() {
  useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      @keyframes gridPull {
        from { background-position: 0 0; }
        to   { background-position: 0 60px; }
      }
      @keyframes spinRing {
        from { transform: translate(-50%, -50%) scale(1)    rotate(0deg); }
        to   { transform: translate(-50%, -50%) scale(0.05) rotate(720deg); }
      }
      @keyframes corePulse {
        from { transform: translate(-50%, -50%) scale(0.85); opacity: 0; }
        to   { transform: translate(-50%, -50%) scale(1.25); opacity: 1;   }
      }
      @keyframes coreBlind{
        from { transform: translate(-50%, -50%) scale(0.85); opacity: 0; }
        to   { transform: translate(-50%, -50%) scale(100); opacity: 1;   }
      }
      @keyframes raysRotate {
        from { transform: translate(-50%, -50%) rotate(0deg); opacity: 0;   }
        to   { transform: translate(-50%, -50%) rotate(1060deg); opacity:1; }
      }
      @keyframes particleDrift {
        0%   { transform: translate(var(--px), var(--py)) scale(1); opacity: 0.9; }
        100% { transform: translate(0px, 0px)             scale(0); opacity: 0;   }
      }
      @keyframes scanMove {
        from { top: -2px;  }
        to   { top: 100%;  }
      }
      @media (prefers-reduced-motion: reduce) {
        [style*="animation"] { animation: none !important; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
}
