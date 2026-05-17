import { colors } from './theme';

type ColorKey = keyof typeof colors;
type NestedColorKey<T> = T extends object ? keyof T : never;

export const getColor = (
  colorName: ColorKey,
  variant?: NestedColorKey<(typeof colors)[ColorKey]>
): string => {
  const color = colors[colorName];
  if (typeof color === 'string') {
    return color as string;
  }
  if (variant && typeof color === 'object' && variant in color) {
    return color[variant as keyof typeof color] as string;
  }
  return color?.DEFAULT || color?.['DEFAULT'] || '#000000';
};

// Exported color palette for quick access
export const palette = {
  primary: colors.primary.DEFAULT,
  primaryLight: colors.primary.light,
  primaryLighter: colors.primary.lighter,
  success: colors.semantic.success,
  warning: colors.semantic.warning,
  streak: colors.semantic.streak,
  error: colors.semantic.error,
  info: colors.semantic.info,
  neutral0: colors.neutral[0],
  neutral50: colors.neutral[50],
  neutral100: colors.neutral[100],
  neutral200: colors.neutral[200],
  neutral600: colors.neutral[600],
  neutral900: colors.neutral[900],
} as const;

export default palette;
