import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { palette } from '@/constants';

export default function Index() {
  return (
    <View className="flex-1 bg-neutral-0 justify-center items-center px-lg">
      <View className="items-center gap-lg">
        <Text className="h1 text-neutral-900 text-center">Welcome to Reelroom</Text>
        <Text className="body-md text-neutral-600 text-center">Track your favorite movies and TV shows</Text>

        <Link href="/onboarding" asChild>
          <Pressable style={{ backgroundColor: palette.primary }} className="rounded-full px-xl py-lg w-full">
            <Text className="text-neutral-0 font-semibold text-center text-lg">View Onboarding</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
