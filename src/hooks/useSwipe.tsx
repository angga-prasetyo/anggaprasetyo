import { useRef } from 'react';

import { useEventCallback } from 'usehooks-ts';

interface SwipeConfig {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  /** Minimum px distance to trigger swipe. Default: 50 */
  threshold?: number;
  /** Maximum perpendicular drift allowed (keeps it intentional). Default: 100 */
  restraint?: number;
}

interface TouchOrigin {
  x: number;
  y: number;
  time: number;
}

export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  restraint = 100,
}: SwipeConfig) {
  const origin = useRef<TouchOrigin | null>(null);

  const handleTouchStart = useEventCallback((e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    origin.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  });

  const handleTouchEnd = useEventCallback((e: React.TouchEvent) => {
    if (!origin.current) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - origin.current.x;
    const dy = touch.clientY - origin.current.y;
    const elapsed = Date.now() - origin.current.time;

    if (elapsed > 300) {
      origin.current = null;
      return;
    }

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx >= threshold && absDy <= restraint) {
      return dx > 0 ? onSwipeRight?.() : onSwipeLeft?.();
    } else if (absDy >= threshold && absDx <= restraint) {
      return dy > 0 ? onSwipeDown?.() : onSwipeUp?.();
    }

    origin.current = null;
  });

  return { handleTouchStart, handleTouchEnd };
}
