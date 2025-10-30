import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="text-4xl">No good boy.</Text>
            <Link href={"/forget-password"}>move to anywhere</Link>
        </View>
    );
}
