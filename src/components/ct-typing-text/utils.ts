import { TypingState } from './type';

/**
 * Computes the next typing-animation state given the current state.
 * Kept pure so it can be tested without mounting the component.
 */
export function nextTypingState(
  state: TypingState,
  graphemes: string[],
  wordsLength: number,
  loop: boolean,
): Partial<TypingState> & { displayedText?: string } {
  const { phase, currentCharIndex, currentWordIndex } = state;

  switch (phase) {
    case 'typing': {
      if (currentCharIndex < graphemes.length) {
        return {
          displayedText: graphemes.slice(0, currentCharIndex + 1).join(''),
          currentCharIndex: currentCharIndex + 1,
        };
      }
      const isLastWord = currentWordIndex === wordsLength - 1;
      if (wordsLength > 1 || loop) {
        if (!isLastWord || loop) return { phase: 'pause' };
      }
      return {};
    }

    case 'pause':
      return { phase: 'deleting' };

    case 'deleting': {
      if (currentCharIndex > 0) {
        return {
          displayedText: graphemes.slice(0, currentCharIndex - 1).join(''),
          currentCharIndex: currentCharIndex - 1,
        };
      }
      return {
        currentWordIndex: (currentWordIndex + 1) % wordsLength,
        phase: 'typing',
      };
    }
  }
}
