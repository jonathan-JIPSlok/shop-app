import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { Provider } from 'react-redux';
import { store } from '../src/store';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{title: 'Login', headerShown: false }} />
          <Stack.Screen name="shop" options={{title: "Shop", headerShown: false}} />
          <Stack.Screen name="productDetails" options={{title: "Details", headerShown: false}} />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
