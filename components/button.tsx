import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import { Text, View } from "react-native";

interface Button {
	isLoading?: boolean;
	variant?: "default" | "ghost" | "dark";
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
	variant = "default",
	...rest
}: Button) {
	const small = size == "sm" || size == "md";
	const colors = {
		"bg-gradient-to-r from-[#1C77F5] to-[#1763CC] text-white ":
			variant == "default",
		"bg-transparent border border-[#E4E4E4]": variant == "ghost",
	};
	const sizes = {
		"rounded-[8px] xl:w-[160px] w-[120px] h-[42px] lg:h-[56px] ": small,
		"rounded-[12px] xl:w-[200px] h-[42px] w-[150px] lg:h-[56px]":
			size == "lg",
		"rounded-[12px] h-[36px]  lg:h-[46px]": (size = "custom"),
	};
	return (
		<View
			{...rest}
			className={`relative z-0 flex items-center justify-center overflow-hidden shadow-inner
                ${colors}
            ${visibility}
                ${sizes}`}
		>
			{small ? (
				isLoading ? (
<Feather name="loader" size={24} color="black" />
				) : (
					<Text
						className={`xs:text-base absolute inset-0 flex items-center justify-center text-sm transition-colors duration-150 ease-in ${style}`}
					/>
				)
			) : (
				<View
					className={clsx(
						"absolute inset-0 flex h-full items-center justify-center transition-colors duration-150 ease-in hover:bg-none",
						colors,
						style
					)}
				>
					{isLoading && (
						<View className="pl-2">
							<Feather name="loader" size={24} color="black" />
						</View>
					)}
					<Text className="xs:text-base flex h-full w-full items-center justify-center text-sm">
						{children}
					</Text>
				</View>
			)}
		</View>
	);
}
