import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import {
    SafeAreaProvider,
    initialWindowMetrics,
} from "react-native-safe-area-context";

import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Stack>
                <Stack.Screen name="(auth)/forget-password/index" />
            </Stack>
        </SafeAreaProvider>
    );
}
