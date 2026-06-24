import { CTTypingTextProps } from './type';

export const CURSOR_CHAR: Record<
  NonNullable<CTTypingTextProps['cursorStyle']>,
  string
> = {
  line: '|',
  block: '▌',
  underscore: '_',
};
