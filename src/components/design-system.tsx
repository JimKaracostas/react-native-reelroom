import { Pressable, View, Text } from 'react-native';
import type { ReactNode } from 'react';

/**
 * Styled button component using design system
 * Use for primary actions
 */
export function Button({
  onPress,
  children,
  variant = 'primary',
  disabled = false,
}: {
  onPress: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'error';
  disabled?: boolean;
}) {
  const buttonClass = `btn-${variant} ${disabled ? 'opacity-disabled' : ''}`;

  return (
    <Pressable className={buttonClass} onPress={onPress} disabled={disabled}>
      {typeof children === 'string' ? (
        <Text className="text-white font-semibold">{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

/**
 * Styled card component using design system
 */
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <View className={`card ${className}`}>{children}</View>;
}

/**
 * Styled badge component using design system
 */
export function Badge({
  label,
  variant = 'primary',
}: {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'error';
}) {
  const colorClass = `text-${variant === 'primary' ? 'primary' : variant}`;

  return (
    <View className={`badge-${variant}`}>
      <Text className={`caption font-semibold ${colorClass}`}>{label}</Text>
    </View>
  );
}

/**
 * Styled heading using design system
 */
export function Heading({
  level = 1,
  children,
  className = '',
}: {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}) {
  const headingClass = `h${level} text-neutral-900 ${className}`;

  return <Text className={headingClass}>{children}</Text>;
}

/**
 * Styled body text using design system
 */
export function BodyText({
  size = 'md',
  color = 'neutral-900',
  children,
  className = '',
}: {
  size?: 'lg' | 'md' | 'sm';
  color?: string;
  children: ReactNode;
  className?: string;
}) {
  const textClass = `body-${size} text-${color} ${className}`;

  return <Text className={textClass}>{children}</Text>;
}

/**
 * Styled caption text using design system
 */
export function Caption({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <Text className={`caption ${className}`}>{children}</Text>;
}

/**
 * Layout container with padding
 */
export function Container({
  children,
  padding = 'lg',
  className = '',
}: {
  children: ReactNode;
  padding?: keyof typeof paddingMap;
  className?: string;
}) {
  const paddingClass = paddingMap[padding];
  return <View className={`${paddingClass} ${className}`}>{children}</View>;
}

const paddingMap = {
  xs: 'p-xs',
  sm: 'p-sm',
  md: 'p-md',
  lg: 'p-lg',
  xl: 'p-xl',
  '2xl': 'p-2xl',
} as const;
