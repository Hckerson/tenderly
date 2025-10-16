import { onboardingData } from "@/lib/place-holder";
import { OnboardingData } from "@/types/placeholders";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const { width } = Dimensions.get("window");
export default function OnboardingPageOne() {
	return (
		<View className="flex-1">
			<SwiperFlatList
				data={onboardingData}
				renderItem={({ item }: { item: OnboardingData }) => (
					<View
						style={{ width }}
						className="flex-1 items-center justify-center"
					>
						<View className="">
							<Image
								placeholder={{ blurhash }}
								source={{ uri: item.imageUrl }}
								contentFit="cover"
							/>
						</View>
						<View>
							<Text>{item.title}</Text>
							<Text>{item.about}</Text>
							{/* <Button size="custom">
                                {item.action}
                            </Button> */}
						</View>
					</View>
				)}
			/>
		</View>
	);
}
