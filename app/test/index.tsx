import { useContext, useRef } from "react";
import { Animated, Easing, Pressable, Text, View } from "react-native";
import { WidthContext } from "../_layout";

export default function Testing() {
    const width = useContext(WidthContext).valueOf();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    };
    return (
        <View
            style={{ width }}
            className="w-full flex-1 items-center justify-center"
        >
            <View className="w-full">
                <Animated.View
                    className="bg-blue-300"
                    style={{ opacity: animatedValue }}
                >
                    <Text className="text-center">Beat mea</Text>
                </Animated.View>
                <View className="flex flex-row">
                    <Pressable className="flex-1 p-3" onPress={fadeIn}>
                        <Text className="text-center">Fade in</Text>
                    </Pressable>
                    <Pressable className="flex-1 p-3" onPress={fadeOut}>
                        <Text className="text-center">Fade out</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
