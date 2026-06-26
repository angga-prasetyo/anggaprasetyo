import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface CTGlossyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function CTGlossyButton({
  children = 'Frutiger Button',
  className,
  ...props
}: CTGlossyButtonProps) {
  return (
      <button
        className={cn(
          'cursor-pointer relative rounded-md p-0.5 border-0 overflow-hidden transition-shadow duration-300 shadow-[0px_4px_6px_0px_#0008]',
          className,
        )}
        style={{
          background: 'linear-gradient(#006caa, #00c3ff)',
          textShadow: '1px 1px #000a',
        }}
        {...props}>
        <div
          className="relative rounded-lg p-3 overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 50% 100%, #30f8f8 10%, #30f8f800 55%), linear-gradient(#00526a, #009dcd)',
          }}>
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none animate-glossy-btn bg-size-[200%_100%] bg-no-repeat"
            style={{
              background:
                'linear-gradient(-65deg, #0000 40%, #fff7 50%, #0000 70%)',
            }}
          />

          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              inset: '0 -8em',
              background:
                'radial-gradient(circle at 50% -270%, #fff 45%, #fff6 60%, #fff0 60%)',
            }}
          />

          <span className="relative z-10 text-white font-[550]">
            {children}
          </span>
        </div>
      </button>
  );
}
