import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useEffect } from "react";
import { Dimensions } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import "../global.css";

const { width } = Dimensions.get("window");
SplashScreen.preventAutoHideAsync();

export const WidthContext = createContext(width);

export default function RootLayout() {
    const [loaded, error] = useFonts({
        Inter_900Black,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <WidthContext value={width}>
            <SafeAreaProvider>
                <Stack />
            </SafeAreaProvider>
        </WidthContext>
    );
}
