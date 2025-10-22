import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Login() {
    const width = useContext(WidthContext);
    return (
        <View
            style={{ width }}
            className="dark:bg-background-primary-dark flex-1 justify-start bg-background-primary"
        >
            <View className="box-border flex w-full gap-y-8 px-5  pb-10  pt-10">
                <Back />
                <View className="flex">
                    <Text className="text-text-primary-dark font-semibold text-2xl w-3/4">Go ahead and complete your account and setup</Text>
                    <Text className="text-text-secondary font-normal text-sm">
                        Create your account and simplify your workflow
                        instantly.
                    </Text>
                </View>
            </View>
            <View className="dark:bg-background-tertiary-dark h-full p-5     bg-background-tertiary rounded-t-[30px]">
                <View className="grid gap-y-5">
                    <View className="w-full">

                    </View>
                    <View></View>
                    <View></View>
                    <View></View>
                </View>
                <View></View>
                <View></View>
            </View>
        </View>
    );
}
