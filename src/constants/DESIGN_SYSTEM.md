# Reelroom Design System

This directory contains all design tokens and design system utilities for the Reelroom app. Built with **NativeWind** and **Tailwind CSS v4**, styled with the **Lingua design** aesthetic.

## Files Overview

### `theme.ts`
Core design tokens including:
- **Colors**: Primary, semantic (success, warning, error, info), and neutral palette
- **Typography**: Font family (Poppins), font sizes, weights, and line heights for all text scales
- **Spacing**: Standardized spacing scale (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- **Border Radius**: Rounded corner values (xs, sm, md, lg, xl)

### `colors.ts`
Utility functions for working with colors:
- `palette`: Quick-access object with all color values
- `getColor()`: Function to retrieve nested color values dynamically

### `index.ts`
Barrel export file for easy imports. Import everything from `@/constants`.

## Usage Examples

### Using Theme Tokens

```typescript
import { theme, palette } from '@/constants';

// Access colors
const primaryColor = theme.colors.primary.DEFAULT;
const successColor = palette.success;

// Access typography
const h1Size = theme.typography.heading.h1.size; // 32px
const bodyWeight = theme.typography.weights.semibold; // 600

// Access spacing
const padding = theme.spacing.lg; // 16px
```

### Using Tailwind Classes

The design system is fully integrated with Tailwind. Use class names directly:

```tsx
import { Text, View } from 'react-native';

export function MyComponent() {
  return (
    <View className="p-lg bg-primary rounded-md">
      <Text className="h2 text-neutral-0">Section Title</Text>
      <Text className="body-md text-neutral-600">Supporting text</Text>
    </View>
  );
}
```

### Typography Classes

- `.h1` - 32px, Bold (Page / Screen Title)
- `.h2` - 24px, SemiBold (Section Title)
- `.h3` - 20px, SemiBold (Card / Module Title)
- `.h4` - 16px, Medium (Subheading)
- `.body-lg` - 16px, Regular (Important content)
- `.body-md` - 14px, Regular (Body text)
- `.body-sm` - 13px, Regular (Supporting text)
- `.caption` - 11px, Regular (Labels, meta text)

### Component Classes

**Buttons**
```tsx
<Pressable className="btn-primary">
  <Text>Primary Button</Text>
</Pressable>

<Pressable className="btn-secondary">
  <Text>Secondary Button</Text>
</Pressable>
```

**Cards**
```tsx
<View className="card">
  <Text>Card content</Text>
</View>
```

**Badges**
```tsx
<View className="badge-primary">
  <Text>Label</Text>
</View>
```

### Color Classes

- `text-primary` - Primary text color
- `text-success` - Success text color
- `text-error` - Error text color
- `text-neutral-900` - Dark neutral text
- `text-neutral-600` - Medium neutral text
- `bg-primary` - Primary background
- `bg-success` - Success background
- `border-neutral-200` - Light border

### Spacing & Layout

```tsx
<View className="p-lg gap-md">
  {/* p-lg = 16px padding, gap-md = 12px gap */}
</View>

<View className="rounded-md">
  {/* Rounded corner md = 12px */}
</View>
```

## Color Palette

### Primary
- Default: `#6C4EF5`
- Light: `#5B3BF6`
- Lighter: `#4D8BFF`

### Semantic
- Success: `#21C168`
- Warning: `#FFC800`
- Streak: `#FF5A00`
- Error: `#FF4D4F`
- Info: `#4D8BFF`

### Neutral
- 0 (White): `#FFFFFF`
- 50 (Very Light): `#F6F7FB`
- 100 (Light): `#E5E7EB`
- 200 (Light): `#E5E7EB`
- 600 (Medium): `#687280`
- 900 (Dark): `#0D1328`

## Font

**Poppins** - Modern, geometric sans-serif typeface
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

Fonts are loaded automatically via `expo-font` in the app layout.

## Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration with custom theme
- `global.css` - Global styles, component definitions, and utilities
- `metro.config.js` - Metro bundler config with NativeWind integration
- `postcss.config.js` - PostCSS configuration for Tailwind

## Adding New Design Tokens

1. Add to `theme.ts` under the appropriate section
2. Export from `index.ts` if needed
3. Update `tailwind.config.ts` if it's a Tailwind-specific token
4. Add class utility to `global.css` if needed for component styles

## Best Practices

1. **Prefer classes over inline styles** - Use Tailwind classes for consistency
2. **Use component classes** - Use `.btn-primary`, `.card`, etc. for consistent components
3. **Import theme tokens for calculations** - Use `theme` object when you need values in JavaScript
4. **Don't create custom colors** - Always use palette colors
5. **Maintain spacing consistency** - Use `spacing` tokens for all margins and padding

