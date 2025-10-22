import { Dimensions, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Splash() {
    return (
        <View style={{ width }} className="flex-1">
            <View>
                <Text>BrainBox</Text>
            </View>
        </View>
    );
}
