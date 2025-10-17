import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="">No good boy.</Text>
      <Link href={'/onboarding'}>
        move to onboarding
      </Link>
    </View>
  );
}
