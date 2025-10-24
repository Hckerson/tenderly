import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";
import clsx from "clsx";
import { useContext, useState } from "react";
import { Platform, Pressable, Text, TextInput, View } from "react-native";

type Options = "Login" | "Signup";

export default function Login() {
    const width = useContext(WidthContext);
    const [activeTab, setActiveTab] = useState<Options>("Login");
    const native = Platform.OS === "android" || Platform.OS === "ios";

    const switchTab = (e?: Options) => {
        if (!e || e == undefined) {
            setActiveTab(activeTab == "Login" ? "Signup" : "Login");
            return;
        }
        setActiveTab(e);
    };

    return (
        <View
            style={{ width }}
            className="flex-1 justify-start bg-background-primary dark:bg-background-primary-dark"
        >
            <View className="box-border flex w-full gap-y-8 px-5  pb-10  pt-10">
                <Back />
                <View className="flex">
                    <Text className="w-3/4 text-2xl font-semibold  text-text-primary">
                        Go ahead and complete your account and setup
                    </Text>
                    <Text className="text-sm font-normal text-text-secondary-dark">
                        Create your account and simplify your workflow
                        instantly.
                    </Text>
                </View>
            </View>
            <View className="h-full rounded-t-[30px] bg-background-tertiary     p-5 dark:bg-background-tertiary-dark">
                <View className="grid gap-y-5">
                    <View className="relative flex h-[48px] w-full flex-row rounded-[10px] bg-background-quad p-1 dark:bg-background-quad-dark ">
                        <Pressable
                            onPress={() => switchTab("Login")}
                            className="flex flex-1 items-center justify-center"
                        >
                            <Text
                                className={clsx(
                                    "",
                                    activeTab == "Login"
                                        ? "text-[14px] font-medium text-text-primary-dark "
                                        : "text-text-secondary-dark",
                                )}
                            >
                                Login
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => switchTab("Signup")}
                            className="flex flex-1 items-center justify-center"
                        >
                            <Text
                                className={clsx(
                                    "",
                                    activeTab == "Signup"
                                        ? "text-[14px] font-medium text-text-primary-dark "
                                        : "text-text-secondary-dark",
                                )}
                            >
                                Signup
                            </Text>
                        </Pressable>
                        <Pressable
                            style={{
                                transform: native ? [{ translateY: 4 }] : [],
                            }}
                            onPress={() => switchTab()}
                            className={clsx(
                                "tems-center absolute  flex h-[40px] w-[48%] justify-center  rounded-[10px]  bg-background-tertiary dark:bg-background-tertiary-dark",
                                activeTab == "Login" ? "left-1" : "right-1",
                            )}
                        >
                            <Text
                                className={clsx(
                                    "text-center text-[14px] font-medium text-text-primary-dark",
                                )}
                            >
                                {activeTab}
                            </Text>
                        </Pressable>
                    </View>
                    <View className="flex flex-col gap-y-2">
                        <Text className="text-text-secondary">Email</Text>
                        <TextInput
                            className="bg-background-pent border-1 h-12 rounded-[10px] border-[#EFEFEF] placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary pl-4"
                            style={{ borderWidth: 1 }}
                            placeholder="wadewarren@gmail.com"
                            inputMode="text"
                        />
                    </View>
                    <View className="flex flex-col gap-y-2">
                        <Text className="text-text-secondary">Password</Text>
                        <View
                            className="bg-background-pent border-1 h-12 flex justify-center rounded-[10px] border-[#EFEFEF] placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary pl-4"
                            style={{ borderWidth: 1 }}
                        >
                            <TextInput
                                className="bg-background-pent h-full rounded-[10px] border-[#EFEFEF] placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                placeholder="*********"
                                inputMode="text"
                            />
                        </View>
                    </View>
                    <View className="flex flex-col gap-y-2"></View>
                </View>
                <View></View>
                <View></View>
            </View>
        </View>
    );
}
