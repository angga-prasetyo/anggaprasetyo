import { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { CURSOR_CHAR } from './constant';
import { CTTypingTextProps, TypingPhase } from './type';
import { nextTypingState } from './utils';

export function CTTypingText({
  children,
  words,
  className,
  duration = 45,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  as: Tag = 'span',
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = 'line',
  ...props
}: CTTypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [phase, setPhase] = useState<TypingPhase>('typing');
  const [isInView, setIsInView] = useState(false);

  // useRef<HTMLElement> is correct here — all HTML elements extend HTMLElement,
  // and Tag is a polymorphic prop (span, p, div, etc.)
  const elementRef = useRef<HTMLElement>(null);

  // -------------------------------------------------------------------------
  // IntersectionObserver — triggers animation when element enters viewport
  // -------------------------------------------------------------------------

  useEffect(() => {
    if (!startOnView) {
      setIsInView(true);
      return;
    }

    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView]);

  // -------------------------------------------------------------------------
  // Derived values
  // -------------------------------------------------------------------------

  // Memoized because array identity changes every render — would cause
  // the animation useEffect to re-run unnecessarily
  const wordsToAnimate = useMemo(
    () => words ?? (children != null ? [children] : []),
    [words, children],
  );

  const hasMultipleWords = wordsToAnimate.length > 1;

  const typingSpeed = typeSpeed ?? duration;
  const deletingSpeed = deleteSpeed ?? typingSpeed / 2;

  const shouldStart = startOnView ? isInView : true;

  // String key that uniquely identifies the current word/children source.
  // Used as a reset signal: when this changes, animation restarts from zero.
  // Not memoized — it's only used as a useEffect dep, not in render.
  const animationSourceKey = words ? words.join('\u0000') : (children ?? '');

  // -------------------------------------------------------------------------
  // Reset state whenever the content source changes
  // -------------------------------------------------------------------------

  useEffect(() => {
    setDisplayedText('');
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setPhase('typing');
  }, [animationSourceKey]);

  // -------------------------------------------------------------------------
  // Animation tick — schedules the next state transition via setTimeout
  // -------------------------------------------------------------------------

  useEffect(() => {
    if (!shouldStart || wordsToAnimate.length === 0) return;

    const graphemes = Array.from(wordsToAnimate[currentWordIndex] ?? '');

    // Lookup table replaces 3-level nested ternary
    const phaseDelayMap: Record<TypingPhase, number> = {
      typing: typingSpeed,
      pause: pauseDelay,
      deleting: deletingSpeed,
    };
    const isInitialDelay = delay > 0 && displayedText === '';
    const timeoutDelay = isInitialDelay ? delay : phaseDelayMap[phase];

    const timeout = setTimeout(() => {
      const next = nextTypingState(
        { phase, currentCharIndex, currentWordIndex },
        graphemes,
        wordsToAnimate.length,
        loop,
      );

      if (next.displayedText !== undefined)
        setDisplayedText(next.displayedText);
      if (next.currentCharIndex !== undefined)
        setCurrentCharIndex(next.currentCharIndex);
      if (next.currentWordIndex !== undefined)
        setCurrentWordIndex(next.currentWordIndex);
      if (next.phase !== undefined) setPhase(next.phase);
    }, timeoutDelay);

    return () => clearTimeout(timeout);
  }, [
    shouldStart,
    phase,
    currentCharIndex,
    currentWordIndex,
    displayedText,
    wordsToAnimate,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay,
  ]);

  // -------------------------------------------------------------------------
  // Cursor visibility
  // -------------------------------------------------------------------------

  const currentWordGraphemes = Array.from(
    wordsToAnimate[currentWordIndex] ?? '',
  );

  const isAnimationComplete =
    !loop &&
    currentWordIndex === wordsToAnimate.length - 1 &&
    currentCharIndex >= currentWordGraphemes.length &&
    phase !== 'deleting';

  const shouldShowCursor =
    showCursor &&
    !isAnimationComplete &&
    (hasMultipleWords ||
      loop ||
      currentCharIndex < currentWordGraphemes.length);

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  return (
    <Tag
      ref={elementRef as React.Ref<never>}
      className={cn(Tag === 'span' && 'inline-block', className)}
      {...props}>
      {displayedText}
      {shouldShowCursor && (
        <span
          className={cn('inline-block', blinkCursor && 'animate-blink-cursor')}>
          {CURSOR_CHAR[cursorStyle]}
        </span>
      )}
    </Tag>
  );
}
