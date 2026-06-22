const SQUARE_DELAYS = [
  0, -1.4285714286, -2.8571428571, -4.2857142857, -5.7142857143, -7.1428571429,
  -8.5714285714,
];

interface CTCubicLoaderProps {
  color?: string;
  size?: number;
}

/**
 * Animated loader using 7 squares orbiting in a 3x3 grid pattern.
 * Animation is driven by staggered `animation-delay` on each square.
 *
 * @param color - Fill color of each square. Defaults to white.
 * @param size  - Side length (px) of each square. Defaults to 28.
 */
export function CTCubicLoader({ color = 'white', size = 28 }: CTCubicLoaderProps) {
  const gap = 2;
  const step = size + gap * 2; // distance between square origins (32px at default)

  return (
    <>
      <style>{`
        @keyframes square-animation {
          0%      { left: 0;         top: 0;         }
          10.5%   { left: 0;         top: 0;         }
          12.5%   { left: ${step}px; top: 0;         }
          23%     { left: ${step}px; top: 0;         }
          25%     { left: ${step * 2}px; top: 0;     }
          35.5%   { left: ${step * 2}px; top: 0;     }
          37.5%   { left: ${step * 2}px; top: ${step}px; }
          48%     { left: ${step * 2}px; top: ${step}px; }
          50%     { left: ${step}px; top: ${step}px; }
          60.5%   { left: ${step}px; top: ${step}px; }
          62.5%   { left: ${step}px; top: ${step * 2}px; }
          73%     { left: ${step}px; top: ${step * 2}px; }
          75%     { left: 0;         top: ${step * 2}px; }
          85.5%   { left: 0;         top: ${step * 2}px; }
          87.5%   { left: 0;         top: ${step}px; }
          98%     { left: 0;         top: ${step}px; }
          100%    { left: 0;         top: 0;         }
        }
      `}</style>

      {/* Container rotated 45deg, sized to fit a 3x3 grid */}
      <div
        className="relative"
        style={{
          width: step * 3,
          height: step * 3,
          transform: 'rotate(45deg)',
        }}>
        {SQUARE_DELAYS.map((delay, i) => (
          <div
            key={i}
            className="absolute top-0 left-0"
            style={{
              width: size,
              height: size,
              margin: gap,
              backgroundColor: color,
              animation: 'square-animation 10s ease-in-out infinite both',
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
