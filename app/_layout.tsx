import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext } from "react";
import { Dimensions } from "react-native";

import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";

import "../global.css";

const { width } = Dimensions.get("window");
SplashScreen.preventAutoHideAsync();

export const WidthContext = createContext(width);

export default function RootLayout() {
    return (
        <WidthContext value={width}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <Stack />
            </SafeAreaProvider>
        </WidthContext>
    );
}
