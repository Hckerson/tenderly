import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";
import Button from "@/components/ui/button";
import clsx from "clsx";
import { Image } from "expo-image";
import { useContext, useState } from "react";
import { Platform, Text, TextInput, View } from "react-native";

const inbox = require("@/assets/svgs/inbox.svg");

export default function ForgetPassword() {
    const width = useContext(WidthContext);
    const [otpSent, setOptSent] = useState<boolean>(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState<boolean>(false)
    const native = Platform.OS === "android" || Platform.OS === "ios";

    return (
        <View
            style={{ width }}
            className="relative flex-1 justify-start bg-background-primary dark:bg-background-primary-dark"
        >
            <View className={clsx("box-border flex w-full gap-y-8 px-5  pb-10  pt-10")}>
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
            {otpSent && (
                <View className="absolute h-full w-full bg-black/80">
                    <View className="flex h-full w-full items-center justify-center">
                        <View className="max-h-[343px] w-full max-w-[312px] rounded-3xl bg-background-pent p-5 pt-7 dark:bg-background-tertiary-dark">
                            <View className="flex w-full items-center gap-y-4">
                                <View className="flex w-full items-center gap-y-5">
                                    <View className="bg-background-light-green size-[100px] rounded-full flex items-center justify-center dark:bg-background-primary-dark">
                                        <Image style={{height:50, width:50}} source={inbox} />
                                    </View>
                                    <View>
                                        <Text className="text-text-tertiary text-center text-[24px]">
                                            Check your Email
                                        </Text>
                                        <Text className="text-text-tertiary text-center text-[16px]">
                                            We've emailed you a password reset
                                            link. valid for 10 minutes.
                                        </Text>
                                    </View>
                                </View>
                                <Button size="lg">Continue</Button>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}
