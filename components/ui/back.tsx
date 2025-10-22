import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";

import { View } from "react-native";
export default function Back() {
    return (
        <View
            style={{
                borderWidth: 2,
            }}
            className="dark:bg-background-primary-dark border-button-border-primary border-5 size-[40px] rounded-[10px]  bg-background-primary"
        >
            <View className="box-border flex h-full w-full items-center justify-center  ">
                <Feather name="arrow-left" size={24} color="white" />
            </View>
        </View>
    );
}
