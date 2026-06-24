type TextProps = {
  text: string;
  textClassName?: string
} | {
  text?: never;
  textClassName?: never
}

export type CTCubicLoaderProps = TextProps & {
  color?: string;
  size?: number;
}
