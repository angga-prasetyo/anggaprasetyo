import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
} from 'react';

import { cn } from '@/lib/utils';

type ElementType =
  | 'article'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'li'
  | 'p'
  | 'section'
  | 'span';

interface CTTypingTextProps extends HTMLAttributes<HTMLElement> {
  children?: string;
  words?: string[];
  className?: string;
  duration?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  pauseDelay?: number;
  loop?: boolean;
  as?: ElementType;
  startOnView?: boolean;
  showCursor?: boolean;
  blinkCursor?: boolean;
  cursorStyle?: 'line' | 'block' | 'underscore';
}

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
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  // IntersectionObserver replaces motion's useInView
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

  const wordsToAnimate = useMemo(
    () => words ?? (children ? [children] : []),
    [words, children],
  );
  const hasMultipleWords = wordsToAnimate.length > 1;

  const typingSpeed = typeSpeed ?? duration;
  const deletingSpeed = deleteSpeed ?? typingSpeed / 2;

  const shouldStart = startOnView ? isInView : true;

  const animationSourceKey = useMemo(
    () => (words ? words.join('\u0000') : (children ?? '')),
    [words, children],
  );

  useEffect(() => {
    setDisplayedText('');
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setPhase('typing');
  }, [animationSourceKey]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (shouldStart && wordsToAnimate.length > 0) {
      const timeoutDelay =
        delay > 0 && displayedText === ''
          ? delay
          : phase === 'typing'
            ? typingSpeed
            : phase === 'deleting'
              ? deletingSpeed
              : pauseDelay;

      timeout = setTimeout(() => {
        const currentWord = wordsToAnimate[currentWordIndex] || '';
        const graphemes = Array.from(currentWord);

        switch (phase) {
          case 'typing':
            if (currentCharIndex < graphemes.length) {
              setDisplayedText(
                graphemes.slice(0, currentCharIndex + 1).join(''),
              );
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              if (hasMultipleWords || loop) {
                const isLastWord =
                  currentWordIndex === wordsToAnimate.length - 1;
                if (!isLastWord || loop) {
                  setPhase('pause');
                }
              }
            }
            break;

          case 'pause':
            setPhase('deleting');
            break;

          case 'deleting':
            if (currentCharIndex > 0) {
              setDisplayedText(
                graphemes.slice(0, currentCharIndex - 1).join(''),
              );
              setCurrentCharIndex(currentCharIndex - 1);
            } else {
              const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length;
              setCurrentWordIndex(nextIndex);
              setPhase('typing');
            }
            break;
        }
      }, timeoutDelay);
    }

    return () => {
      if (timeout !== null) clearTimeout(timeout);
    };
  }, [
    shouldStart,
    phase,
    currentCharIndex,
    currentWordIndex,
    displayedText,
    wordsToAnimate,
    hasMultipleWords,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay,
  ]);

  const currentWordGraphemes = Array.from(
    wordsToAnimate[currentWordIndex] || '',
  );
  const isComplete =
    !loop &&
    currentWordIndex === wordsToAnimate.length - 1 &&
    currentCharIndex >= currentWordGraphemes.length &&
    phase !== 'deleting';

  const shouldShowCursor =
    showCursor &&
    !isComplete &&
    (hasMultipleWords ||
      loop ||
      currentCharIndex < currentWordGraphemes.length);

  const getCursorChar = () => {
    switch (cursorStyle) {
      case 'block':
        return '▌';
      case 'underscore':
        return '_';
      case 'line':
      default:
        return '|';
    }
  };

  return (
    <Tag
      ref={elementRef as React.Ref<never>}
      className={cn(Tag === 'span' && 'inline-block', className)}
      {...props}>
      {displayedText}
      {shouldShowCursor && (
        <span
          className={cn('inline-block', blinkCursor && 'animate-blink-cursor')}>
          {getCursorChar()}
        </span>
      )}
    </Tag>
  );
}
