import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";
import Button from "@/components/ui/button";
import { useContext } from "react";
import { Platform, Text, TextInput, View } from "react-native";

const inbox = require("@/assets/svgs/inbox.svg");

export default function PasswordReset() {
    const width = useContext(WidthContext);
    const native = Platform.OS === "android" || Platform.OS === "ios";

    return (
        <View
            style={{ width }}
            className="relative flex-1 justify-start bg-background-primary dark:bg-background-primary-dark"
        >
            <View className="box-border flex w-full gap-y-8 px-5  pb-10  pt-10">
                <Back />
                <View className="flex">
                    <Text className="w-3/4 text-2xl font-semibold  text-text-primary">
                        Use phone or email to reset your password.
                    </Text>
                    <Text className="text-sm font-normal text-text-secondary-dark">
                        Enter your email or phone to reset your password easily.
                    </Text>
                </View>
            </View>
            <View className="h-full gap-y-8 rounded-t-[30px] bg-background-tertiary     p-5 dark:bg-background-tertiary-dark">
                <View className="grid gap-y-6">
                    <View className="flex flex-col gap-y-2">
                        <Text className="text-text-secondary">Email</Text>
                        <TextInput
                            className="border-1 h-12 rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                            style={{ borderWidth: 1 }}
                            placeholder="wadewarren@gmail.com"
                            textContentType="emailAddress"
                            inputMode="text"
                        />
                    </View>
                    <View className="flex flex-col gap-y-2">
                        <Text className="text-text-secondary">Phone</Text>
                        <TextInput
                            className="border-1 h-12 rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                            style={{ borderWidth: 1 }}
                            placeholder="Enter your phone number"
                            textContentType="telephoneNumber"
                            inputMode="text"
                        />
                    </View>
                </View>

                <Button size="lg">Continue</Button>
            </View>
        </View>
    );
}
