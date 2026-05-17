import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors (from Lingua design system)
        primary: {
          DEFAULT: '#6C4EF5',
          light: '#5B3BF6',
          lighter: '#4D8BFF',
        },
        // Semantic colors
        success: '#21C168',
        warning: '#FFC800',
        streak: '#FF5A00',
        error: '#FF4D4F',
        info: '#4D8BFF',
        // Neutral colors
        neutral: {
          0: '#FFFFFF',
          50: '#F6F7FB',
          100: '#E5E7EB',
          200: '#E5E7EB',
          600: '#687280',
          900: '#0D1328',
        },
      },
      fontSize: {
        // Typography scale
        h1: ['32px', { fontWeight: '700', lineHeight: '1.2' }],
        h2: ['24px', { fontWeight: '600', lineHeight: '1.3' }],
        h3: ['20px', { fontWeight: '600', lineHeight: '1.3' }],
        h4: ['16px', { fontWeight: '500', lineHeight: '1.4' }],
        'body-lg': ['16px', { fontWeight: '400', lineHeight: '1.6' }],
        'body-md': ['14px', { fontWeight: '400', lineHeight: '1.6' }],
        'body-sm': ['13px', { fontWeight: '400', lineHeight: '1.6' }],
        caption: ['11px', { fontWeight: '400', lineHeight: '1.4' }],
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
    },
  },
  plugins: [],
} satisfies Config;
