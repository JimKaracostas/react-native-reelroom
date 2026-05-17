// Design tokens based on Lingua design system
// Used for consistent styling across Reelroom

export const colors = {
  // Primary colors
  primary: {
    DEFAULT: '#6C4EF5',
    light: '#5B3BF6',
    lighter: '#4D8BFF',
  },

  // Semantic colors
  semantic: {
    success: '#21C168',
    warning: '#FFC800',
    streak: '#FF5A00',
    error: '#FF4D4F',
    info: '#4D8BFF',
  },

  // Neutral/Gray scale
  neutral: {
    0: '#FFFFFF',
    50: '#F6F7FB',
    100: '#E5E7EB',
    200: '#E5E7EB',
    600: '#687280',
    900: '#0D1328',
  },
} as const;

export const typography = {
  // Font family
  fontFamily: {
    sans: 'Poppins',
    poppins: 'Poppins',
  },

  // Font sizes with line heights
  heading: {
    h1: {
      size: 32,
      weight: 700,
      lineHeight: 1.2,
      label: 'Page / Screen Title',
    },
    h2: {
      size: 24,
      weight: 600,
      lineHeight: 1.3,
      label: 'Section Title',
    },
    h3: {
      size: 20,
      weight: 600,
      lineHeight: 1.3,
      label: 'Card / Module Title',
    },
    h4: {
      size: 16,
      weight: 500,
      lineHeight: 1.4,
      label: 'Subheading',
    },
  },

  body: {
    large: {
      size: 16,
      weight: 400,
      lineHeight: 1.6,
      label: 'Important content',
    },
    medium: {
      size: 14,
      weight: 400,
      lineHeight: 1.6,
      label: 'Body text',
    },
    small: {
      size: 13,
      weight: 400,
      lineHeight: 1.6,
      label: 'Supporting text',
    },
  },

  caption: {
    size: 11,
    weight: 400,
    lineHeight: 1.4,
    label: 'Labels, meta text',
  },

  // Font weights
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
} as const;

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
} as const;

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
} as const;

export default theme;
