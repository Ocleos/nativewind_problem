import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '~src/global.css';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default () => {
  return (
    <SafeAreaProvider onLayout={() => SplashScreen.hideAsync()}>
      {/* <Stack screenOptions={{ headerShown: false }} /> */}
      <Slot />
    </SafeAreaProvider>
  );
};
