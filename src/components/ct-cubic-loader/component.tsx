import { cn } from '@/lib/utils';

import { CTTypingText } from '../ct-typing-text/component';

import { SQUARE_DELAYS, SQUARE_GAP, SQUARE_MARGIN } from './constant';
import { CTCubicLoaderProps } from './type';

/**
 * Animated loader using 7 squares orbiting in a 3x3 grid pattern.
 * Animation is driven by staggered `animation-delay` on each square.
 *
 * @param color - Fill color of each square. Defaults to white.
 * @param size  - Side length (px) of each square. Defaults to 5.
 * @param text  - Text inside paragraph html besides the square.
 * @param textClassName  - ClassName of the text to modify style with tailwind class.
 */

export function CTCubicLoader({
  color = 'white',
  size = 5,
  text,
  textClassName,
}: CTCubicLoaderProps) {
  const step = size + SQUARE_GAP;
  const stepDouble = step * 2;
  const containerSize = step * 3;

  return (
    <div className="flex justify-center gap-3">
      {Boolean(text) && (
        <p className={cn('text-white', textClassName)}>
          {text}
          <span>
            <CTTypingText
              loop
              showCursor={false}
              typeSpeed={500}
              className={cn(textClassName)}>
              ...
            </CTTypingText>
          </span>
        </p>
      )}
      {/* Container rotated 45deg, sized to fit a 3x3 grid */}
      <div
        className="relative rotate-45"
        style={{
          width: containerSize,
          height: containerSize,
        }}>
        {SQUARE_DELAYS.map((delay, i) => {
          return (
            <div
              key={`ct-cubic-loader-square-${i}`}
              className="absolute top-0 left-0 animate-moving-square"
              style={
                {
                  margin: SQUARE_MARGIN,
                  width: size,
                  height: size,
                  backgroundColor: color,
                  '--step': `${step}px`,
                  '--stepDouble': `${stepDouble}px`,
                  animationDelay: `${delay}s`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
    </div>
  );
}
