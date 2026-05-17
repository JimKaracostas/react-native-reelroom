import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { palette } from '@/constants';

export default function Onboarding() {
  return (
    <ScrollView
      className="flex-1 bg-neutral-0"
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
      <View className="flex-1 px-lg pt-3xl pb-lg justify-between items-center">
        {/* Header with Logo */}
        <View className="items-center mb-3xl">
          <View className="flex-row items-center justify-center gap-md mb-3xl">
            <Image
              source={require('../../assets/images/moscot-logo.png')}
              style={{ width: 56, height: 56 }}
              resizeMode="contain"
            />
            <Text className="h2 text-neutral-900 font-bold">reelroom</Text>
          </View>

          {/* Main Heading */}
          <Text className="h1 text-neutral-900 text-center mb-sm font-bold">
            Track Every
          </Text>
          <Text className="h1 text-center mb-2xl font-bold" style={{ color: palette.primary }}>
            moment.
          </Text>

          {/* Subtitle */}
          <Text className="body-md text-neutral-600 text-center">
            Discover movies and shows, build your watchlists, and never miss a moment.
          </Text>
        </View>

        {/* Mascot and Speech Bubbles */}
        <View className="items-center justify-center flex-1 mb-2xl">
          <View className="relative items-center">
            <Image
              source={require('../../assets/images/mascot-welcome.png')}
              style={{ width: 260, height: 260 }}
              resizeMode="contain"
            />

            {/* Speech Bubbles */}
            <View className="absolute top-8 left-0">
              <View className="px-md py-sm rounded-2xl" style={{ backgroundColor: 'rgba(77, 139, 255, 0.1)' }}>
                <Text className="body-sm text-neutral-900 font-medium">Discover</Text>
              </View>
            </View>

            <View className="absolute top-24 -right-2">
              <View className="px-md py-sm rounded-2xl" style={{ backgroundColor: 'rgba(108, 78, 245, 0.1)' }}>
                <Text className="body-sm font-medium" style={{ color: palette.primary }}>
                  Track
                </Text>
              </View>
            </View>

            <View className="absolute -bottom-4 right-6">
              <View className="px-md py-sm rounded-2xl" style={{ backgroundColor: 'rgba(255, 77, 79, 0.1)' }}>
                <Text className="body-sm text-neutral-900 font-medium">Share</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Get Started Button */}
        <View className="w-full">
          <Link href="/" asChild>
            <Pressable
              className="rounded-full flex-row items-center justify-between px-lg py-md"
              style={{ backgroundColor: palette.primary, paddingVertical: 16 }}
            >
              <Text className="text-neutral-0 text-center flex-1 font-semibold" style={{ fontSize: 16 }}>
                Get Started
              </Text>
              <Text className="text-neutral-0" style={{ fontSize: 24 }}>
                ›
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
