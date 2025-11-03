
import Back from "@/components/ui/back";
import Button from "@/components/ui/button";
import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import { Checkbox } from "expo-checkbox";
import { Image } from "expo-image";
import { Link } from "expo-router";
import {  useState } from "react";
import { Platform, Pressable, Text, TextInput, View } from "react-native";

const google = require("@/assets/svgs/google.svg");
const facebook = require("@/assets/svgs/facebook.svg");

type Options = "Login" | "Signup";

export default function Login() {
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
            className="flex-1 justify-start bg-background-primary dark:bg-background-primary-dark"
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
                        Go ahead and complete your account and setup
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
                        Create your account and simplify your workflow
                        instantly.
                    </Text>
                </View>
            </View>
            <View className="h-full gap-y-8 rounded-t-[30px] bg-background-tertiary     p-5 dark:bg-background-tertiary-dark">
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
                            style={{
                                fontFamily: Platform.select({
                                    android: "PublicSans_500Medium_Italic",
                                    ios: "PublicSans-Medium_Italic",
                                }),
                            }}
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
                                activeTab == "Login"
                                    ? "text-text-secondary dark:text-text-secondary-dark"
                                    : "text-[14px] font-medium text-text-primary-dark ",
                            )}
                            style={{
                                fontFamily: Platform.select({
                                    android: "PublicSans_500Medium_Italic",
                                    ios: "PublicSans-Medium_Italic",
                                }),
                            }}
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
                            "absolute flex  h-[40px] w-[48%] items-center justify-center  rounded-[10px]  bg-background-tertiary dark:bg-background-tertiary-dark",
                            activeTab == "Login" ? "left-1" : "right-1",
                        )}
                    >
                        <Text
                            className={clsx(
                                "text-center text-[14px] font-medium text-text-primary-dark dark:text-text-primary",
                            )}
                            style={{
                                fontFamily: Platform.select({
                                    android: "PublicSans_500Medium_Italic",
                                    ios: "PublicSans-Medium_Italic",
                                }),
                            }}
                        >
                            {activeTab}
                        </Text>
                    </Pressable>
                </View>
                {activeTab === "Signup" ? (
                    <View className="grid gap-y-6">
                        <View className="flex w-full flex-row justify-center gap-x-4">
                            <View className="flex-1 flex-col gap-y-2">
                                <Text
                                    style={{
                                        fontFamily: Platform.select({
                                            android:
                                                "PublicSans_500Medium_Italic",
                                            ios: "PublicSans-Medium_Italic",
                                        }),
                                    }}
                                    className="text-text-secondary"
                                >
                                    First Name
                                </Text>
                                <TextInput
                                    className="border-1 h-12 rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                    style={{ borderWidth: 1 }}
                                    placeholder="wade"
                                    textContentType="name"
                                    inputMode="text"
                                />
                            </View>
                            <View className="flex-1 flex-col gap-y-2">
                                <Text
                                    style={{
                                        fontFamily: Platform.select({
                                            android:
                                                "PublicSans_500Medium_Italic",
                                            ios: "PublicSans-Medium_Italic",
                                        }),
                                    }}
                                    className="text-text-secondary"
                                >
                                    Last Name
                                </Text>
                                <TextInput
                                    className="border-1 h-12 rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                    style={{ borderWidth: 1 }}
                                    placeholder="warren"
                                    textContentType="name"
                                    inputMode="text"
                                />
                            </View>
                        </View>
                        <View className="flex flex-col gap-y-2">
                            <Text
                                style={{
                                    fontFamily: Platform.select({
                                        android: "PublicSans_500Medium_Italic",
                                        ios: "PublicSans-Medium_Italic",
                                    }),
                                }}
                                className="text-text-secondary"
                            >
                                Email
                            </Text>
                            <TextInput
                                className="border-1 h-12 rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                style={{ borderWidth: 1 }}
                                placeholder="wadewarren@gmail.com"
                                textContentType="emailAddress"
                                inputMode="text"
                            />
                        </View>
                        <View className="flex flex-col gap-y-2">
                            <Text
                                style={{
                                    fontFamily: Platform.select({
                                        android: "PublicSans_500Medium_Italic",
                                        ios: "PublicSans-Medium_Italic",
                                    }),
                                }}
                                className="text-text-secondary"
                            >
                                Password
                            </Text>
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
                                            onPress={() =>
                                                setHiddenStatus(false)
                                            }
                                        />
                                    ) : (
                                        <Feather
                                            name="eye"
                                            size={18}
                                            color="black"
                                            onPress={() =>
                                                setHiddenStatus(true)
                                            }
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                        <View className="flex flex-col gap-y-2">
                            <Text
                                style={{
                                    fontFamily: Platform.select({
                                        android: "PublicSans_400Regular_Italic",
                                        ios: "PublicSans-Regular_Italic",
                                    }),
                                }}
                                className="text-text-secondary"
                            >
                                Confirm password
                            </Text>
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
                                            onPress={() =>
                                                setHiddenStatus(false)
                                            }
                                        />
                                    ) : (
                                        <Feather
                                            name="eye"
                                            size={18}
                                            color="black"
                                            onPress={() =>
                                                setHiddenStatus(true)
                                            }
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View className="grid gap-y-6">
                        <View className="flex flex-col gap-y-2">
                            <Text
                                style={{
                                    fontFamily: Platform.select({
                                        android: "PublicSans_500Medium_Italic",
                                        ios: "PublicSans-Medium_Italic",
                                    }),
                                }}
                                className="text-text-secondary"
                            >
                                Email
                            </Text>
                            <TextInput
                                className="border-1 h-12 rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                style={{ borderWidth: 1 }}
                                placeholder="wadewarren@gmail.com"
                                textContentType="emailAddress"
                                inputMode="text"
                            />
                        </View>
                        <View className="flex flex-col gap-y-2">
                            <Text
                                style={{
                                    fontFamily: Platform.select({
                                        android: "PublicSans_500Medium_Italic",
                                        ios: "PublicSans-Medium_Italic",
                                    }),
                                }}
                                className="text-text-secondary"
                            >
                                Password
                            </Text>
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
                                            onPress={() =>
                                                setHiddenStatus(false)
                                            }
                                        />
                                    ) : (
                                        <Feather
                                            name="eye"
                                            size={18}
                                            color="black"
                                            onPress={() =>
                                                setHiddenStatus(true)
                                            }
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                        <View className="flex flex-row justify-between gap-y-2">
                            <View className="flex-row  items-center gap-x-2">
                                <Checkbox
                                    style={{
                                        height: 17,
                                        width: 17,
                                        borderColor: "#9D9FA0",
                                        borderRadius: 5,
                                    }}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? "#1A414B" : undefined}
                                />
                                <Text
                                    style={{
                                        fontFamily: Platform.select({
                                            android:
                                                "PublicSans_500Medium_Italic",
                                            ios: "PublicSans-Medium_Italic",
                                        }),
                                    }}
                                    className="text-[14px] font-medium text-text-secondary dark:text-white"
                                >
                                    Remember me
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontFamily: Platform.select({
                                        android: "PublicSans_500Medium_Italic",
                                        ios: "PublicSans-Medium_Italic",
                                    }),
                                }}
                                className="text-primary text-[14px] font-medium dark:text-white"
                            >
                                Forgot password?
                            </Text>
                        </View>
                    </View>
                )}
                {activeTab == "Login" ? (
                    <View className={clsx(" gap-y-5")}>
                        <Button size="lg">
                            <Text
                                style={{
                                    fontFamily: Platform.select({
                                        android: "PublicSans_500Medium_Italic",
                                        ios: "PublicSans-Medium_Italic",
                                    }),
                                }}
                            >
                                Login
                            </Text>
                        </Button>
                        <View className="flex gap-y-5">
                            <View className="flex flex-row items-center">
                                <View className="flex-1 border-t border-stroke-secondary dark:border-stroke-secondary/10 "></View>
                                <Text className="px-2 dark:text-white">Or login with</Text>
                                <View className="flex-1 border-t border-stroke-secondary dark:border-stroke-secondary/10 "></View>
                            </View>
                            <View className="flex h-12 flex-row gap-x-3">
                                <View
                                    style={{ borderWidth: 1 }}
                                    className="border-1 h-full  flex-1 flex-row items-center justify-center gap-x-2 rounded-[10px]  border-[#EFEFEF] bg-background-tertiary dark:border-background-quad-dark dark:bg-background-quad-dark"
                                >
                                    <Image
                                        style={{ height: 25, width: 25 }}
                                        source={google}
                                    />
                                    <Link
                                        style={{
                                            fontFamily: Platform.select({
                                                android:
                                                    "PublicSans_600SemiBold_Italic",
                                                ios: "PublicSans-SemiBold_Italic",
                                            }),
                                        }}
                                        href={"/"}
                                        className="text-center dark:text-white"
                                    >
                                        Google
                                    </Link>
                                </View>
                                <View
                                    style={{ borderWidth: 1 }}
                                    className="border-1 h-full  flex-1 flex-row items-center justify-center gap-x-2 rounded-[10px] border-[#EFEFEF] bg-background-tertiary dark:border-background-quad-dark dark:bg-background-quad-dark"
                                >
                                    <Image
                                        style={{ height: 25, width: 25 }}
                                        source={facebook}
                                    />
                                    <Link
                                        style={{
                                            fontFamily: Platform.select({
                                                android:
                                                    "PublicSans_600SemiBold_Italic",
                                                ios: "PublicSans-SemiBold_Italic",
                                            }),
                                        }}
                                        href={"/"}
                                        className="text-center dark:text-white"
                                    >
                                        Facebook
                                    </Link>
                                </View>
                            </View>
                        </View>
                    </View>
                ) : (
                    <Button size="lg">
                        <Text
                            style={{
                                fontFamily: Platform.select({
                                    android: "PublicSans_500Medium_Italic",
                                    ios: "PublicSans-Medium_Italic",
                                }),
                            }}
                        >
                            Register
                        </Text>
                    </Button>
                )}
            </View>
        </View>
    );
}
