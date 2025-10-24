import { Image } from "expo-image";
import { Dimensions, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const logo = require("@/assets/svgs/logo-dark.svg");

export default function Splash() {
    return (
        <View
            style={{ width }}
            className="bg-background-pyramid-green flex-1 items-center justify-center dark:bg-black"
        >
            <View className="flex items-center gap-y-5">
                <Image
                    style={{
                        width: 128,
                        height: 128,
                    }}
                    source={logo}
                />
                <Text className="dark:text-text-blue text-[44px] font-bold text-white md:text-[54px] xl:text-[64px]">
                    BrainBox
                </Text>
            </View>
        </View>
    );
}
