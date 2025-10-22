import Feather from "@expo/vector-icons/Feather";
import { View } from "react-native";
export default function Back() {
    return (
        <View className="dark:bg-background-primary-dark size-[40px] bg-background-primary">
            <View className="box-border flex items-center justify-center">
                <View>
                    <Feather name="arrow-left" size={24} color="white" />
                </View>
            </View>
        </View>
    );
}
