import { LucideIcon, ThumbsUp } from 'lucide-react';

import { WORDS, words } from '@/constants/languages';
import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';

interface AudioModeCardProps {
  icon: LucideIcon;
  label: string;
  selected: boolean;
  recommended?: boolean;
  onSelect: () => void;
}

export function AudioModeCard({
  icon: Icon,
  label,
  selected,
  recommended = false,
  onSelect,
}: AudioModeCardProps) {
  const language = useComponentStore((state) => state.language);
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        'group relative flex flex-col items-center gap-1.5 border px-2.5 py-3.5 transition-colors duration-150 md:gap-2 md:px-3 md:py-4',
        '[clip-path:polygon(0_6px,6px_0,100%_0,100%_100%,6px_100%,0_calc(100%-6px))]',
        'md:[clip-path:polygon(0_8px,8px_0,100%_0,100%_100%,8px_100%,0_calc(100%-8px))]',
        selected
          ? recommended
            ? 'border-amber-400 bg-amber-950/20'
            : 'border-red-500/70 bg-red-950/20'
          : 'border-zinc-700 bg-zinc-900/60 hover:border-zinc-500',
      )}>
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-amber-400/15 to-transparent opacity-0 animate-scanline-sweep',
          selected && 'opacity-100',
          !recommended && ' via-red-400/15 ',
        )}
      />
      {recommended && (
        <span
          className={cn(
            'absolute animate-pulse top-0 left-0 flex items-center gap-1 bg-zinc-950 px-1 py-0.5 md:px-1.5 md:py-1 md:max-w-[30%]',
            selected && 'md:border-amber-400 md:border',
          )}>
          <ThumbsUp className="h-2 w-2 text-green-400 md:h-2.5 md:w-2.5 " />
          <span className="font-mono text-2xs font-bold tracking-wide text-green-400 md:text-xs">
            {words[WORDS.RECOMMENDED][language]}
          </span>
        </span>
      )}

      <Icon
        className={cn(
          'h-4 w-4 md:h-5 md:w-5',
          selected
            ? recommended
              ? 'text-amber-400'
              : 'text-red-400'
            : 'text-zinc-500',
        )}
      />
      <span
        className={cn(
          'font-mono text-xs font-bold tracking-wide md:text-sm md:tracking-wider',
          selected ? 'text-zinc-100' : 'text-zinc-400',
        )}>
        {label}
      </span>
    </button>
  );
}
