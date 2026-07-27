import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';

export function CoreGlow() {
  const enableAudio = useComponentStore((state) => state.enableAudio);

  return (
    <div
      className={cn(
        'absolute rounded-full w-7 h-7 top-[50%] left-[50%] animate-core-blind',
      )}
      style={
        {
          background: 'var(--background-blinding)',
          boxShadow:
            '0 0 18px 6px rgba(0,255,200,0.5), 0 0 48px 20px rgba(0,180,255,0.2)',
          '--duration-blind': enableAudio ? '6s' : '2.5s',
        } as React.CSSProperties
      }
    />
  );
}
