import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";
import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import Button from "@/components/ui/button";
import { Checkbox } from "expo-checkbox";
import { useContext, useState } from "react";
import { Platform, Pressable, Text, TextInput, View } from "react-native";

type Options = "Login" | "Signup";

export default function Login() {
    const width = useContext(WidthContext);
    const [activeTab, setActiveTab] = useState<Options>("Login");
    const [hiddenStatus, setHiddenStatus] = useState(true);
    const [isChecked, setChecked] = useState(false);
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
            <View className="h-full rounded-t-[30px] gap-y-8 bg-background-tertiary     p-5 dark:bg-background-tertiary-dark">
                <View className="grid gap-y-6">
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
                                        : "text-text-secondary dark:text-text-secondary-dark",
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
                                        : "text-text-secondary dark:text-text-secondary-dark",
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
                                    "text-center text-[14px] font-medium text-text-primary-dark dark:text-text-primary",
                                )}
                            >
                                {activeTab}
                            </Text>
                        </Pressable>
                    </View>
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
                        <Text className="text-text-secondary">Password</Text>
                        <View
                            className="border-1  relative flex h-12 justify-center rounded-[10px] border-[#EFEFEF] bg-background-pent placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary "
                            style={{ borderWidth: 1 }}
                        >
                            <TextInput
                                className="h-full rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                placeholder="*********"
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
                    <View className="flex flex-row justify-between gap-y-2">
                        <View className="flex-row  gap-x-2 items-center">
                            <Checkbox
                                style={{ height: 17, width: 17, borderColor:"#9D9FA0", borderRadius:5 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? "#1A414B" : undefined}
                            />
                            <Text className="text-text-secondary text-[14px] font-medium dark:text-white">Remember me</Text>
                        </View>
                        <Text className="text-primary text-[14px] font-medium dark:text-white">
                            Forgot password
                        </Text>
                    </View>
                </View>
                <Button size="lg" >
                    Login
                </Button>
                <View></View>
            </View>
        </View>
    );
}
