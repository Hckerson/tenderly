import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import { Pressable, Text } from "react-native";

interface Button {
    isLoading?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "custom";
    style?: string;
    visibility?: string;
    children: React.ReactNode;
}
export default function Button({
    children,
    visibility,
    isLoading,
    size,
    style,
}: Button) {
    const small = size == "sm" || size == "md";
    const sizes = {
        "rounded-[8px] xl:w-[160px] w-[120px] h-[42px] lg:h-[52px]    ": small,
        "rounded-[12px] xl:w-[200px] h-[42px] w-[150px] lg:h-[52px]":
            size == "lg",
        "rounded-[12px] h-[36px] w-full lg:h-[46px]": (size = "custom"),
    };

    return (
        <Pressable
            className={clsx(
                "shadow-inner relative z-0 flex w-full items-center justify-center overflow-hidden bg-button-primary dark:bg-button-primary-dark",
                visibility,
                sizes,
            )}
        >
            {small ? (
                isLoading ? (
                    <Feather name="loader" size={24} color="black" />
                ) : (
                    <Text
                        className={clsx(
                            "xs:text-base inset-0 flex w-full items-center justify-center text-center text-sm text-white transition-colors duration-150 ease-in",
                            style,
                        )}
                    >
                        {children}
                    </Text>
                )
            ) : (
                <Pressable
                    className={clsx(
                        "absolute inset-0 flex h-full items-center justify-center transition-colors duration-150 ease-in hover:bg-none",

                        style,
                    )}
                >
                    {isLoading && (
                        <Pressable className="pl-2">
                            <Feather name="loader" size={24} color="black" />
                        </Pressable>
                    )}
                    <Text className="xs:text-base flex h-full w-full items-center justify-center text-sm text-white">
                        {children}
                    </Text>
                </Pressable>
            )}
        </Pressable>
    );
}
