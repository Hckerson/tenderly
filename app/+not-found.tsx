import Button from "@/components/ui/button";
import { Image } from "expo-image";
import { Text, View } from "react-native";

const mingcute = require("@/assets/svgs/mingcute.svg");

export default function NotFound() {
    return (
        <View className="absolute h-full w-full bg-black/80">
            <View className="flex h-full w-full items-center justify-center">
                <View className="max-h-[343px] w-full max-w-[312px] rounded-3xl bg-background-pent p-5 pt-7 dark:bg-background-tertiary-dark">
                    <View className="flex w-full items-center gap-y-4">
                        <View className="flex w-full items-center  gap-y-5">
                            <View className="flex size-[100px] items-center justify-center rounded-full bg-background-light-green dark:bg-background-primary-dark">
                                <Image
                                    style={{ height: 50, width: 50 }}
                                    source={mingcute}
                                />
                            </View>
                            <View>
                                <View className="text-center text-[24px] text-text-tertiary">
                                    <Text>Page Not Found</Text>
                                    <Text>404</Text>
                                </View>
                                <Text className="text-center text-[16px] text-text-tertiary">
                                    This page has been moved or Doesn   't Exist.
                                </Text>
                            </View>
                        </View>
                        <Button size="lg">Back To Home</Button>
                    </View>
                </View>
            </View>
        </View>
    );
}
