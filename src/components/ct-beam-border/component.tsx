import { cn } from '@/lib/utils';

interface CTBeamBorderProps {
  /** The size of the border beam. */
  size?: number;
  /** The duration of the border beam (seconds). */
  duration?: number;
  /** The delay of the border beam (seconds). */
  delay?: number;
  /** The color of the border beam from. */
  colorFrom?: string;
  /** The color of the border beam to. */
  colorTo?: string;
  /** The class name of the border beam. */
  className?: string;
  /** The style of the border beam. */
  style?: React.CSSProperties;
  /** Whether to reverse the animation direction. */
  reverse?: boolean;
  /** The initial offset position (0-100). */
  initialOffset?: number;
  /** The border width of the beam. */
  borderWidth?: number;
}

export const CTBeamBorder = ({
  className,
  size = 100,
  delay = 0,
  duration = 6,
  colorFrom = '#f280d0',
  colorTo = '#9966b8',
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: CTBeamBorderProps) => {
  const animationName = reverse ? 'border-beam-reverse' : 'border-beam';

  return (
    <>
      {/*
        Inject keyframes once via a <style> tag.
        CSS offset-path motion along the border rectangle cannot be driven
        purely via Tailwind utilities, so we inline the keyframes here.
        This keeps zero runtime JS animation — it's entirely CSS.
      */}
      <style>{`
        @keyframes border-beam {
          from { offset-distance: ${initialOffset}%; }
          to   { offset-distance: ${100 + initialOffset}%; }
        }
        @keyframes border-beam-reverse {
          from { offset-distance: ${100 - initialOffset}%; }
          to   { offset-distance: ${-initialOffset}%; }
        }
      `}</style>

      {/* Outer mask layer — clips animation to the border area only */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] mask-intersect mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
        style={
          {
            borderWidth: borderWidth,
            borderStyle: 'solid',
          } as React.CSSProperties
        }>
        {/* Beam element — travels along offset-path */}
        <div
          className={cn('absolute aspect-square bg-linear-to-l', className)}
          style={
            {
              width: size,
              offsetPath: `rect(0 auto auto 0 round ${size}px)`,
              offsetDistance: `${initialOffset}%`,
              animationName,
              animationDuration: `${duration}s`,
              /*
               * Negative delay = start mid-cycle (matches motion's delay: -delay behaviour).
               * Positive delay = hold before starting.
               */
              animationDelay: delay > 0 ? `${delay}s` : `-${delay}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationFillMode: 'both',
              background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
              ...style,
            } as React.CSSProperties
          }
        />
      </div>
    </>
  );
};
