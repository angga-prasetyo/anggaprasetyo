import { cn } from '@/lib/utils';

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const CORNER_POSITION_CLASSES: Record<CornerPosition, string> = {
  'top-left':
    '-top-[0.11em] -left-[0.11em] border-t-2 border-l-2 origin-bottom-right',
  'top-right':
    '-top-[0.11em] -right-[0.11em] border-t-2 border-r-2 origin-bottom-left',
  'bottom-left':
    '-bottom-[0.11em] -left-[0.11em] border-b-2 border-l-2 origin-top-right',
  'bottom-right':
    '-bottom-[0.11em] -right-[0.11em] border-b-2 border-r-2 origin-top-left',
};

// Translate vector per corner — nudges the bracket further along its own diagonal
// so the pulse reads as "growing away from the button's center", not scaling in place.
const CORNER_PULSE_VECTOR: Record<CornerPosition, { x: string; y: string }> = {
  'top-left': { x: '-0.04em', y: '-0.04em' },
  'top-right': { x: '0.04em', y: '-0.04em' },
  'bottom-left': { x: '-0.04em', y: '0.04em' },
  'bottom-right': { x: '0.04em', y: '0.04em' },
};

const CORNER_POSITIONS: CornerPosition[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

function CornerBracket({ position }: { position: CornerPosition }) {
  const vector = CORNER_PULSE_VECTOR[position];

  return (
    <span
      className={cn(
        'pointer-events-none absolute h-[0.56em] w-[0.56em] border-blue-400 shadow-none transition-[border-color,box-shadow] delay-600 duration-300 ease-in-out animate-corner-pulse group-hover:border-blue-400 group-hover:shadow-[0_0_4px_1px_rgba(96,165,250,0.7)]',
        'md:border-blue-600 md:shadow-[0_0_4px_1px_rgba(96,165,250,0.7)] md:animate-none',
        CORNER_POSITION_CLASSES[position],
      )}
      style={
        { '--pulse-x': vector.x, '--pulse-y': vector.y } as React.CSSProperties
      }
    />
  );
}

interface CTRevealButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export function CTRevealButton({
  children,
  className,
  ...props
}: CTRevealButtonProps) {
  return (
    <button
      className={cn(
        'group relative inline-block px-5 pb-1.5 text-lg font-semibold tracking-wide text-blue-600',
        'bg-[linear-gradient(135deg,#1e3a8a_0%,#0a0a0a_55%,#ca8a04_100%)] text-[#fef9c3]',
        'md:bg-none md:text-blue-600',
        className,
      )}
      {...props}>
      {CORNER_POSITIONS.map((position, idx) => (
        <CornerBracket key={`corner-${idx}`} position={position} />
      ))}

      <span className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(135deg,#1e3a8a_0%,#0a0a0a_55%,#ca8a04_100%)] opacity-0 transition-opacity delay-600 duration-300 ease-in-out group-hover:opacity-100 md:block" />
      <span className="pointer-events-none absolute -left-0.5 top-1.5 hidden h-[calc(100%-12px)] w-[calc(100%+4px)] origin-center scale-y-100 bg-background transition-transform duration-300 ease-in-out group-hover:scale-y-0 md:block" />
      <span className="pointer-events-none absolute -top-0.5 left-1.5 hidden h-[calc(100%+4px)] w-[calc(100%-12px)] origin-center scale-x-100 bg-background transition-transform delay-500 duration-300 ease-in-out group-hover:scale-x-0 md:block" />
      <span className="relative z-3 text-sm transition-colors delay-600 duration-300 ease-in-out group-hover:text-[#fef9c3] md:text-md">
        {children}
      </span>
    </button>
  );
}
