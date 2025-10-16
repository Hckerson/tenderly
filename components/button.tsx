import clsx from "clsx";
import { Loader2 } from "lucide-react";

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
		<button
			{...rest}
			className={`                "relative z-0 flex items-center justify-center overflow-hidden shadow-inner",
                ${colors}
            ${visibility}
                ${sizes}`}
		>
			{small ? (
				isLoading ? (
					<Loader2 className="size-6 animate-spin" />
				) : (
					<p
						className={`                            "xs:text-base absolute inset-0 flex items-center justify-center text-sm transition-colors duration-150 ease-in"${style}`}
					>
						{children}
					</p>
				)
			) : (
				<div
					className={clsx(
						"absolute inset-0 flex h-full items-center justify-center transition-colors duration-150 ease-in hover:bg-none",
						colors,
						style
					)}
				>
					{isLoading && (
						<span className="pl-2">
							<Loader2 className="relative flex size-6 animate-spin items-center justify-center" />
						</span>
					)}
					<p className="xs:text-base flex h-full w-full items-center justify-center text-sm">
						{children}
					</p>
				</div>
			)}
		</button>
	);
}
