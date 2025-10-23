import { Stack } from "expo-router";
import { createContext } from "react";
import { Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "../global.css";

const { width } = Dimensions.get("window");

export const WidthContext = createContext(width);

export default function RootLayout() {
    return (
        <WidthContext value={width}>
            <SafeAreaProvider>
                <Stack />
            </SafeAreaProvider>
        </WidthContext>
    );
}
