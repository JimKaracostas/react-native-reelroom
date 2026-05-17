# Design System Setup - COMPLETE ✓

The full NativeWind design system is now properly configured for Reelroom. All Tailwind errors have been resolved.

## What Was Fixed

### 1. **Tailwind CSS Error** (CssSyntaxError: Cannot apply unknown utility class `text-h1`)
**Root Cause**: CSS layer ordering issue. The `@layer utilities` was imported but not fully processed before `@layer components` tried to use the typography utilities.

**Solution**: Restructured `global.css` to properly organize layers:
- Import Tailwind themes and utilities first
- Define `@layer base` with font-face definitions
- Define `@layer utilities` with custom flex and line-clamp utilities
- Define `@layer components` with typography and component classes

### 2. **Color Palette Cleanup**
- Removed incorrect `primary.dark: '#21C168'` (which was actually green/success)
- Updated all references in `theme.ts`, `colors.ts`, and `index.tsx`
- Palette now correctly reflects the Lingua design system

### 3. **Font Loading**
- Poppins fonts (Regular, Medium, SemiBold, Bold) are properly loaded via `expo-font`
- Font-face declarations configured in CSS base layer
- Fonts are required and loaded in `app/_layout.tsx`

## Design System Architecture

```
src/
├── constants/
│   ├── theme.ts              # Design tokens (colors, typography, spacing, radius)
│   ├── colors.ts             # Color palette and getColor() utility
│   ├── index.ts              # Barrel exports
│   └── DESIGN_SYSTEM.md      # Full documentation
├── components/
│   └── design-system.tsx     # Pre-built components (Button, Card, Badge, Heading, etc.)
├── app/
│   ├── _layout.tsx           # Root layout with font loading
│   └── index.tsx             # Design system showcase
└── global.css                # Global styles and Tailwind layers

tailwind.config.ts            # Tailwind theme configuration
metro.config.js              # Metro bundler with NativeWind integration
postcss.config.js            # PostCSS configuration for @tailwindcss/postcss
```

## Key Files Overview

### `global.css`
- Font definitions for Poppins family
- Custom flex utilities (flex-center, flex-between)
- Typography component classes (.h1, .h2, .h3, .h4, .body-lg, .body-md, .body-sm, .caption)
- Button component classes (.btn-primary, .btn-secondary, .btn-success, .btn-error)
- Card component class (.card)
- Badge component classes (.badge-primary, .badge-success, .badge-warning, .badge-error)
- Line clamp utilities

### `tailwind.config.ts`
- **Colors**: Primary (with light/lighter variants), semantic (success, warning, error, info, streak), neutral scale
- **Typography**: Font sizes with line heights (h1-h4, body-lg/md/sm, caption)
- **Font weights**: regular (400), medium (500), semibold (600), bold (700)
- **Spacing**: xs (4px), sm (8px), md (12px), lg (16px), xl (20px), 2xl (24px), 3xl (32px), 4xl (40px)
- **Border radius**: xs (4px), sm (8px), md (12px), lg (16px), xl (20px)

### `src/constants/theme.ts`
```typescript
export const colors = {
  primary: { DEFAULT, light, lighter },
  semantic: { success, warning, streak, error, info },
  neutral: { 0, 50, 100, 200, 600, 900 }
}

export const typography = {
  heading: { h1, h2, h3, h4 },
  body: { large, medium, small },
  caption: { size, weight, lineHeight },
  weights: { regular, medium, semibold, bold }
}

export const spacing = { xs, sm, md, lg, xl, 2xl, 3xl, 4xl }
export const borderRadius = { xs, sm, md, lg, xl }
```

## Usage Guide

### Typography Classes
```tsx
<Text className="h1">Page Title (32px, Bold)</Text>
<Text className="h2">Section Title (24px, SemiBold)</Text>
<Text className="h3">Card Title (20px, SemiBold)</Text>
<Text className="h4">Subheading (16px, Medium)</Text>
<Text className="body-lg">Important content (16px)</Text>
<Text className="body-md">Body text (14px)</Text>
<Text className="body-sm">Supporting text (13px)</Text>
<Text className="caption">Meta text (11px)</Text>
```

### Component Classes
```tsx
// Buttons
<Pressable className="btn-primary"><Text>Click me</Text></Pressable>
<Pressable className="btn-secondary"><Text>Secondary</Text></Pressable>
<Pressable className="btn-success"><Text>Success</Text></Pressable>
<Pressable className="btn-error"><Text>Error</Text></Pressable>

// Cards
<View className="card"><Text>Card content</Text></View>

// Badges
<View className="badge-primary"><Text>Label</Text></View>
<View className="badge-success"><Text>Label</Text></View>

// Layout
<View className="flex-center">Centered content</View>
<View className="flex-between">Space between</View>
```

### Color Classes
```tsx
// Text colors
className="text-primary"      // #6C4EF5
className="text-success"      // #21C168
className="text-error"        // #FF4D4F
className="text-neutral-900"  // #0D1328
className="text-neutral-600"  // #687280

// Background colors
className="bg-primary"        // #6C4EF5
className="bg-neutral-50"     // #F6F7FB
className="bg-white"          // #FFFFFF
```

### Spacing & Layout
```tsx
// Padding: p-xs, p-sm, p-md, p-lg, p-xl, p-2xl
<View className="p-lg">Padded content</View>

// Margin: m-xs, m-sm, m-md, m-lg, m-xl, m-2xl
<View className="m-md">Margin content</View>

// Gap: gap-xs, gap-sm, gap-md, gap-lg, gap-xl, gap-2xl
<View className="flex gap-md">Spaced items</View>

// Border radius: rounded-xs, rounded-sm, rounded-md, rounded-lg, rounded-xl
<View className="rounded-md">Rounded corners</View>
```

### Pre-built Components
```tsx
import {
  Button,
  Card,
  Badge,
  Heading,
  BodyText,
  Caption,
  Container
} from '@/components/design-system';

// Button
<Button onPress={() => {}} variant="primary">Click me</Button>

// Card
<Card>
  <Heading level={2}>Title</Heading>
  <BodyText>Content</BodyText>
</Card>

// Typography
<Heading level={1}>Big Title</Heading>
<BodyText size="md" color="neutral-600">Supporting text</BodyText>
<Caption>Small caption</Caption>

// Container with padding
<Container padding="lg">
  <Text>Padded content</Text>
</Container>
```

## Color Palette Reference

### Primary Colors (Lingua Design)
- **Primary**: #6C4EF5 (Main purple)
- **Primary Light**: #5B3BF6 (Lighter purple)
- **Primary Lighter**: #4D8BFF (Blue variant)

### Semantic Colors
- **Success**: #21C168 (Green)
- **Warning**: #FFC800 (Yellow/Orange)
- **Streak**: #FF5A00 (Orange)
- **Error**: #FF4D4F (Red)
- **Info**: #4D8BFF (Blue)

### Neutral Colors
- **0 (White)**: #FFFFFF
- **50 (Very Light)**: #F6F7FB
- **100 (Light)**: #E5E7EB
- **200 (Light Gray)**: #E5E7EB
- **600 (Medium Gray)**: #687280
- **900 (Dark)**: #0D1328

## Font Stack
**Poppins** - Modern, geometric sans-serif
- Regular (400) - Body text, captions
- Medium (500) - Subheadings
- SemiBold (600) - Section titles, cards
- Bold (700) - Page titles

Fonts are automatically loaded via `expo-font` in the app layout.

## Next Steps

1. **Start the dev server**: `npm start` or `npm run android` / `npm run ios` / `npm run web`
2. **View the design showcase**: Navigate to the home screen (index.tsx)
3. **Use design tokens**: Import from `@/constants` in your components
4. **Apply Tailwind classes**: Use `.h1`, `.body-md`, `.btn-primary`, etc. in your views
5. **Build features**: Start building with consistent, teachable design patterns

## Troubleshooting

If you see any Tailwind warnings:
- Clear Metro cache: `npx expo start --clear`
- Clear node_modules: `rm -rf node_modules && npm install`
- Restart the dev server

The design system is now production-ready and fully integrated with NativeWind 5 and Tailwind CSS 4!
