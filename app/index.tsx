import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";


const remyboy = '/images/onboard-image-two.png'

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
      <Link href={"/login"}>move to onboarding</Link>

    </View>
  );
}
