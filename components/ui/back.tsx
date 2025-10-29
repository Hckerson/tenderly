import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Back() {
    return (
        <Link
            href={"/"}
            style={{
                borderWidth: 2,
            }}
            className="border-5 size-[40px] rounded-[10px] border-button-border-primary bg-background-primary  dark:bg-background-primary-dark"
        >
            <View className="box-border flex h-full w-full items-center justify-center">
                <Feather name="arrow-left" size={24} color="white" />
            </View>
        </Link>
    );
}
