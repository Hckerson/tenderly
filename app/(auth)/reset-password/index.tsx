import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";
import Button from "@/components/ui/button";
import Feather from "@expo/vector-icons/Feather";
import { useContext, useState } from "react";
import { Platform, Text, TextInput, View } from "react-native";

export default function PasswordReset() {
    const width = useContext(WidthContext);
    const native = Platform.OS === "android" || Platform.OS === "ios";
    const [hiddenStatus, setHiddenStatus] = useState<boolean>(true);
    return (
        <View
            style={{ width }}
            className="relative flex-1 justify-start bg-background-primary dark:bg-background-primary-dark"
        >
            <View className="box-border flex w-full gap-y-8 px-5  pb-10  pt-10">
                <Back />
                <View className="flex">
                    <Text className="w-3/4 text-2xl font-semibold  text-text-primary">
                        Secure your account with new passwords
                    </Text>
                    <Text className="text-sm font-normal text-text-secondary-dark">
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
                                className="h-full rounded-[10px] placeholder:text-[14px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
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
                        <Text className="text-text-secondary">Confirm password</Text>
                        <View
                            className="border-1  relative flex h-12 justify-center rounded-[10px] border-[#EFEFEF] bg-background-pent placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary "
                            style={{ borderWidth: 1 }}
                        >
                            <TextInput
                                className="h-full rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark placeholder:text-[14px] dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
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

                <Button size="lg">Reset Password</Button>
            </View>
        </View>
    );
}
