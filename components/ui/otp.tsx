import { useColorScheme } from "nativewind";
import { useState } from "react";
import { Animated, Text, View } from "react-native";

import styles, {
    ACTIVE_CELL_BG_COLOR,
    CELL_BORDER_RADIUS,
    CELL_SIZE,
    DEFAULT_CELL_BG_COLOR,
    NOT_EMPTY_CELL_BG_COLOR,
} from "@/lib/constants";

import clsx from "clsx";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

interface AnimatedProps {
    index: number;
    isFocused: boolean;
    hasValue: boolean;
}

interface RenderedCell {
    index: number;
    symbol: string;
    isFocused: boolean;
}

export default function Otp({
    number,
    setter,
    otpStatus,
}: {
    number: number;
    otpStatus: boolean;
    setter: (value: boolean) => void;
}) {
    const { colorScheme, setColorScheme } = useColorScheme();
    const { Value, Text: AnimatedText } = Animated;
    const animationsColor = [...new Array(number)].map(() => new Value(0));
    const animationScale = [...new Array(number)].map(() => new Value(0));
    const [value, setValue] = useState<string>("");

    const [props, getCellOnLayout] = useClearByFocusCell({ value, setValue });
    const ref = useBlurOnFulfill({ value, cellCount: number });

    const defaultCellColor =
        colorScheme == "dark" ? "#0A0E11" : DEFAULT_CELL_BG_COLOR;

    const activeCellColor =
        colorScheme == "dark" ? "#1a2630" : ACTIVE_CELL_BG_COLOR;

    const cellAnimation = ({ index, isFocused, hasValue }: AnimatedProps) => {
        Animated.parallel([
            Animated.timing(animationsColor[index], {
                toValue: isFocused ? 1 : 0,
                useNativeDriver: false,
                duration: 250,
            }),
            Animated.spring(animationScale[index], {
                toValue: 1,
                useNativeDriver: false,
            }),
        ]).start();
    };

    const renderCell = ({ index, symbol, isFocused }: RenderedCell) => {
        const hasValue = Boolean(symbol);

        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationScale[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [NOT_EMPTY_CELL_BG_COLOR, activeCellColor],
                  })
                : animationsColor[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [defaultCellColor, activeCellColor],
                  }),
            borderRadius: animationScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: animationScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        setTimeout(() => {
            cellAnimation({ hasValue, index, isFocused });
        }, 0);

        return (
            <View key={index} onLayout={getCellOnLayout(index)}>
                <AnimatedText
                    style={[styles.cell, animatedCellStyle]}
                    className={clsx(
                        "bg-white text-[20px] font-semibold   dark:bg-text-primary-dark",
                        otpStatus
                            ? "text-text-primary-dark dark:text-white"
                            : "text-text-danger",
                    )}
                >
                    {symbol ||
                        (isFocused ? (
                            <Cursor />
                        ) : (
                            <Text
                                className={clsx(
                                    otpStatus
                                        ? "text-text-primary-dark dark:text-white"
                                        : "text-text-danger",
                                )}
                            >
                                -
                            </Text>
                        ))}
                </AnimatedText>
            </View>
        );
    };

    return (
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={number}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
        ></CodeField>
    );
}
