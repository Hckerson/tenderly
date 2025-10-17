import { onboardingData } from "@/lib/place-holder";
import { OnboardingData } from "@/types/placeholders";
import { Image } from "expo-image";
import { Dimensions, Text, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const { width } = Dimensions.get("window");
export default function OnboardingPageOne() {
	return (
		<View className="h-screen">
			<SwiperFlatList
				data={onboardingData}
				renderItem={({ item }: { item: OnboardingData }) => {
					return (
						<View
							style={[{ width }]}
							className="items-center h-screen flex-1"
						>
							<View className="flex-[0.667_1] justify-center  w-full items-center">
								<Image
									placeholder={{ blurhash }}
									style={{
										height: 400,
										width: 300,
									}}
									source={{ uri: item.imageUrl }}
									contentFit="cover"
								/>
							</View>
							<View className=" flex-[0.333_1] w-full items-center justify-center">
								<Text>{item.title}</Text>
								<Text className="text-center w-full">
									{item.about}
								</Text>
								{/* <Button size="custom">{item.action}</Button> */}
							</View>
						</View>
					);
				}}
			/>
		</View>
	);
}
