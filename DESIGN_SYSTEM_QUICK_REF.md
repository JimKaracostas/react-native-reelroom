# Design System Quick Reference

## Colors

```tsx
// Import from constants
import { palette } from '@/constants';

// Use in Tailwind classes
<View className="bg-primary text-neutral-900" />

// Quick access
palette.primary        // #6C4EF5
palette.success        // #21C168
palette.error          // #FF4D4F
palette.neutral900     // #0D1328
```

## Typography

```tsx
// Headings
<Text className="h1">Page / Screen Title (32px, Bold)</Text>
<Text className="h2">Section Title (24px, SemiBold)</Text>
<Text className="h3">Card / Module Title (20px, SemiBold)</Text>
<Text className="h4">Subheading (16px, Medium)</Text>

// Body text
<Text className="body-lg">Important content (16px, Regular)</Text>
<Text className="body-md">Body text (14px, Regular)</Text>
<Text className="body-sm">Supporting text (13px, Regular)</Text>

// Caption
<Text className="caption">Labels, meta text (11px, Regular)</Text>
```

## Spacing

```tsx
// Padding & Margin
<View className="p-lg" />  // padding: 16px
<View className="m-md" />  // margin: 12px
<View className="gap-lg" /> // gap: 16px

// Scale: xs (4px), sm (8px), md (12px), lg (16px), xl (20px), 2xl (24px), 3xl (32px), 4xl (40px)
```

## Components

```tsx
// Button
<Pressable className="btn-primary">
  <Text className="text-white font-semibold">Click me</Text>
</Pressable>

// Variants: btn-primary, btn-secondary, btn-success, btn-error

// Card
<View className="card">
  <Text className="h3">Card Title</Text>
</View>

// Badge
<View className="badge-primary">
  <Text className="caption">Label</Text>
</View>

// Variants: badge-primary, badge-success, badge-warning, badge-error
```

## Layout Utilities

```tsx
// Flexbox
<View className="flex-1" />           // flex: 1
<View className="flex-center" />      // center content
<View className="flex-between" />     // space-between
<View className="items-center justify-center" />

// Border Radius
<View className="rounded-md" />  // 12px (xs, sm, md, lg, xl)
```

## Styled Components

```tsx
import {
  Button,
  Card,
  Badge,
  Heading,
  BodyText,
  Caption,
  Container,
} from '@/components/design-system';

// Button
<Button onPress={() => {}} variant="primary">
  Click me
</Button>

// Card
<Card>
  <Heading level={2}>Title</Heading>
  <BodyText>Content here</BodyText>
</Card>

// Badge
<Badge label="Featured" variant="primary" />

// Text
<Heading level={1}>Big Title</Heading>
<BodyText size="md" color="neutral-600">Supporting text</BodyText>
<Caption>Small caption</Caption>

// Container with padding
<Container padding="lg">
  <Text>Content with padding</Text>
</Container>
```

## Tailwind Class Reference

```tsx
// Colors
text-primary / bg-primary
text-success / bg-success
text-error / bg-error
text-warning / bg-warning
text-neutral-900 / text-neutral-600

// Sizing
w-full, h-full
w-1/2, h-1/2
w-12, h-12 (48px)

// Positioning
absolute, relative
top-0, left-0
inset-0

// Display
flex, block, hidden
flex-row, flex-col

// Alignment
items-center, justify-center
items-start, justify-between

// Font
font-bold, font-semibold, font-regular
text-center, text-right

// Opacity
opacity-50, opacity-disabled

// Rounded
rounded-xs, rounded-sm, rounded-md, rounded-lg, rounded-xl
```

## Files & Structure

```
src/
├── constants/
│   ├── index.ts              # Barrel exports
│   ├── theme.ts              # All design tokens
│   ├── colors.ts             # Color utilities
│   └── DESIGN_SYSTEM.md      # Full documentation
├── components/
│   └── design-system.tsx     # Pre-built styled components
└── app/
    ├── _layout.tsx           # Font loading
    └── index.tsx             # Design system showcase
```

## Design System Principles

1. **Use NativeWind classes** - Faster, more maintainable than inline styles
2. **Prefer pre-built components** - Use `Button`, `Card`, `Badge` from design-system.tsx
3. **Stay consistent** - Always use design tokens, never magic numbers
4. **Teach by example** - See `src/app/index.tsx` for usage patterns

