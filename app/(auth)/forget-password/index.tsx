import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";
import Button from "@/components/ui/button";
import Otp from "@/components/ui/otp";
import clsx from "clsx";
import { Image } from "expo-image";
import { useContext, useState } from "react";
import { Platform, Text, TextInput, View } from "react-native";

const inbox = require("@/assets/svgs/inbox.svg");

export default function ForgetPassword() {
    const width = useContext(WidthContext);
    const [otpSent, setOptSent] = useState<boolean>(false);
    const [isOtpPage, setIsOtpPage] = useState<boolean>(false);
    const [isOtpCorrect, setIsOtpCorrect] = useState<boolean>(true);
    const native = Platform.OS === "android" || Platform.OS === "ios";

    const setOtpPageStatus = () => {
        setIsOtpPage(true);
        setOptSent(false)
    };

    const setEamilSentStatus = ()=>{
        setOptSent(true)
    }

    return (
        <View
            style={{ width }}
            className="relative flex-1 justify-start bg-background-primary dark:bg-background-primary-dark"
        >
            <View
                className={clsx(
                    "box-border flex w-full gap-y-8 px-5  pb-10  pt-10",
                )}
            >
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
                {isOtpPage ? (
                    <View className="flex w-full gap-y-7">
                        <View className="box-border w-full gap-y-4  ">
                            <View className="gap-y-4">
                                <Text className="text-center text-text-primary-dark dark:text-white">
                                    Verify your account
                                </Text>
                                <Text className="text-center text-[12px] text-text-secondary">
                                    Please enter the 5-digit verification code
                                    we sent to your registered email to proceed
                                    securely.
                                </Text>
                            </View>
                            <View className="box-border w-full items-center">
                                <Otp
                                    number={5}
                                    setter={setIsOtpCorrect}
                                    otpStatus={isOtpCorrect}
                                />
                            </View>
                        </View>
                        <View className="flex gap-y-5">
                            <Button size="lg">Verification</Button>
                            <Text className="text-center text-[12px] text-text-secondary">
                                {isOtpCorrect
                                    ? " Didn't receive code?"
                                    : "Wrong OTP"}

                                <Text className="text-text-primary-dark dark:text-text-primary">
                                    {" "}
                                    Resend now
                                </Text>
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View className="flex-1 gap-y-5">
                        <View className="flex gap-y-6">
                            <View className="flex flex-col gap-y-2">
                                <Text className="text-text-secondary">
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
                                <Text className="text-text-secondary">
                                    Phone
                                </Text>
                                <TextInput
                                    className="border-1 h-12 rounded-[10px] border-[#EFEFEF] bg-background-pent pl-4 placeholder:text-text-primary-dark dark:border-background-quad-dark dark:bg-background-quad-dark placeholder:dark:text-text-primary"
                                    style={{ borderWidth: 1 }}
                                    placeholder="Enter your phone number"
                                    textContentType="telephoneNumber"
                                    inputMode="text"
                                />
                            </View>
                        </View>
                        <Button onPress={setEamilSentStatus} size="lg">
                            Continue
                        </Button>
                    </View>
                )}
            </View>
            {otpSent && (
                <View className="absolute h-full w-full bg-black/80">
                    <View className="flex h-full w-full items-center justify-center">
                        <View className="max-h-[343px] w-full max-w-[312px] rounded-3xl bg-background-pent p-5 pt-7 dark:bg-background-tertiary-dark">
                            <View className="flex w-full items-center gap-y-4">
                                <View className="flex w-full items-center gap-y-5">
                                    <View className="flex size-[100px] items-center justify-center rounded-full bg-background-light-green dark:bg-background-primary-dark">
                                        <Image
                                            style={{ height: 50, width: 50 }}
                                            source={inbox}
                                        />
                                    </View>
                                    <View>
                                        <Text className="text-center text-[24px] text-text-tertiary">
                                            Check your Email
                                        </Text>
                                        <Text className="text-center text-[16px] text-text-tertiary">
                                            We've emailed you a password reset
                                            link. valid for 10 minutes.
                                        </Text>
                                    </View>
                                </View>
                                <Button onPress={setOtpPageStatus} size="lg">Continue</Button>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}
