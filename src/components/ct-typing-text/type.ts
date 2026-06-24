import { HTMLAttributes } from 'react';

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

export interface CTTypingTextProps extends HTMLAttributes<HTMLElement> {
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

export type TypingPhase = 'typing' | 'pause' | 'deleting';

export type TypingState = {
  phase: TypingPhase;
  currentCharIndex: number;
  currentWordIndex: number;
};
