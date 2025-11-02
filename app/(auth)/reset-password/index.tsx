import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";
import Button from "@/components/ui/button";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import { useContext, useState } from "react";
import { Platform, Pressable, Text, TextInput, View } from "react-native";

const checkMark = require("@/assets/svgs/check.svg");

export default function PasswordReset() {
    const width = useContext(WidthContext);
    const native = Platform.OS === "android" || Platform.OS === "ios";
    const [isVerificationComplete, setIsVerificationComplete] =
        useState<boolean>(false);
    const [hiddenStatus, setHiddenStatus] = useState<boolean>(true);

    const setVerificationStatus = () => {
        setIsVerificationComplete(true);
    };
    return (
        <View
            style={{ width }}
            className="relative flex-1 justify-start bg-background-primary dark:bg-background-primary-dark"
        >
            <View className="box-border flex w-full gap-y-8 px-5  pb-10  pt-10">
                <Back />
                <View className="flex">
                    <Text
                        style={{
                            fontFamily: Platform.select({
                                android: "PublicSans_600SemiBold_Italic",
                                ios: "PublicSans-SemiBold_Italic",
                            }),
                        }}
                        className="w-3/4 text-2xl font-semibold  text-text-primary"
                    >
                        Secure your account with new passwords
                    </Text>
                    <Text
                        style={{
                            fontFamily: Platform.select({
                                android: "PublicSans_400Regular_Italic",
                                ios: "PublicSans-Regular_Italic",
                            }),
                        }}
                        className="text-sm font-normal text-text-secondary-dark"
                    >
                        Create a strong password to secure your account now.
                    </Text>
                </View>
            </View>
            <View className="h-full gap-y-8 rounded-t-[30px] bg-background-tertiary     p-5 dark:bg-background-tertiary-dark">
                <View className="grid gap-y-6">
                    <View className="flex flex-col gap-y-2">
                        <Text className="text-text-secondary">Password</Text>
                        <View
                            className="border-1  relative flex h-12 justify-center rounded-[10px] border-[#EFEFEF] bg-background-pent placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary "
                            style={{ borderWidth: 1 }}
                        >
                            <TextInput
                                className="h-full rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-[14px] placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                placeholder="Enter your new password"
                                inputMode="text"
                                textContentType="password"
                                secureTextEntry={hiddenStatus}
                            />
                            <View className="absolute right-1 z-10 flex w-[40px] items-center">
                                {hiddenStatus ? (
                                    <Feather
                                        name="eye-off"
                                        size={18}
                                        color="black"
                                        onPress={() => setHiddenStatus(false)}
                                    />
                                ) : (
                                    <Feather
                                        name="eye"
                                        size={18}
                                        color="black"
                                        onPress={() => setHiddenStatus(true)}
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                    <View className="flex flex-col gap-y-2">
                        <Text className="text-text-secondary">
                            Confirm password
                        </Text>
                        <View
                            className="border-1  relative flex h-12 justify-center rounded-[10px] border-[#EFEFEF] bg-background-pent placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary "
                            style={{ borderWidth: 1 }}
                        >
                            <TextInput
                                className="h-full rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-[14px] placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                placeholder="Confirm your new password"
                                inputMode="text"
                                textContentType="password"
                                secureTextEntry={hiddenStatus}
                            />
                            <View className="absolute right-1 z-10 flex w-[40px] items-center">
                                {hiddenStatus ? (
                                    <Feather
                                        name="eye-off"
                                        size={18}
                                        color="black"
                                        onPress={() => setHiddenStatus(false)}
                                    />
                                ) : (
                                    <Feather
                                        name="eye"
                                        size={18}
                                        color="black"
                                        onPress={() => setHiddenStatus(true)}
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                </View>

                <Button onPress={setVerificationStatus} size="lg">
                    Reset Password
                </Button>
            </View>
            {isVerificationComplete && (
                <View className="absolute z-20 h-full w-full bg-black/80">
                    <Pressable
                        className="flex h-full w-full items-center justify-center"
                        onPress={() => setIsVerificationComplete(false)}
                    >
                        <View className="max-h-[343px] w-full max-w-[312px] rounded-3xl bg-background-pent p-5 pt-7 dark:bg-background-tertiary-dark">
                            <View className="flex w-full items-center gap-y-4">
                                <View className="flex w-full items-center gap-y-5">
                                    <View className="flex size-[100px] items-center justify-center rounded-full bg-background-light-green dark:bg-background-primary-dark">
                                        <Image
                                            style={{ height: 50, width: 50 }}
                                            source={checkMark}
                                        />
                                    </View>
                                    <View>
                                        <Text className="text-center text-[24px] text-text-tertiary">
                                            Password Reset Successful!
                                        </Text>
                                        <Text className="text-center text-[16px] text-text-tertiary">
                                            You can log in to using your new
                                            password
                                        </Text>
                                    </View>
                                </View>
                                <Button size="lg">Login Now</Button>
                            </View>
                        </View>
                    </Pressable>
                </View>
            )}
        </View>
    );
}
