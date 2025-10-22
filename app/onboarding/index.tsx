import Button from "@/components/button";
import { onboardingData } from "@/lib/place-holder";
import { OnboardingData } from "@/types/placeholders";
import { Image } from "expo-image";
import { Dimensions, Text, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const generateUri = (relativePath: string) => {
    switch (relativePath) {
        case "/images/onboard-image-one.png":
            return require("@/assets/images/onboard-image-one.png");
        case "/images/onboard-image-two.png":
            return require("@/assets/images/onboard-image-two.png");
        case "/images/onboard-image-three.png":
            return require("@/assets/images/onboard-image-three.png");
    }
};

const { width } = Dimensions.get("window");
export default function OnboardingPageOne() {
    return (
        <View style={[{ width }]} className="h-screen">
            <SwiperFlatList
                data={onboardingData}
                renderItem={({ item }: { item: OnboardingData }) => {
                    return (
                        <View
                            style={[{ width }]}
                            className="relative h-screen flex-1 items-center"
                        >
                            <View className="dark:bg-image-background-dark relative w-full flex-1  items-center justify-center bg-image-background">
                                <View className="absolute top-0 z-10 h-full w-full flex-1">
                                    <View className="relative inset-0 h-full">
                                        <View className="dark:bg-bubble-primary-dark left-[130px] top-[74px] size-2 rounded-full bg-bubble-primary" />
                                        <View className="dark:bg-bubble-primary-dark left-[50px] top-[190px] size-7 rounded-full bg-bubble-primary" />
                                        <View className="dark:bg-bubble-primary-dark left-[31px] top-[285px] size-4 rounded-full bg-bubble-primary" />
                                        <View className="dark:bg-bubble-primary-dark left-[250px] top-[44px] size-6 rounded-full bg-bubble-primary" />
                                        <View className="dark:bg-bubble-primary-dark left-[330px] top-[120px] size-8 rounded-full bg-bubble-primary" />
                                        <View className="dark:bg-bubble-primary-dark left-[320px] top-[225px] size-3 rounded-full bg-bubble-primary" />
                                    </View>
                                </View>
                                <Image
                                    placeholder={{ blurhash }}
                                    style={{
                                        height: 452,
                                        width: 300,
                                        transform: [{ translateY: -30 }],
                                    }}
                                    className="-translate-y-5"
                                    source={generateUri(item.imageUrl)}
                                />
                            </View>
                            <View className=" absolute bottom-0 z-10 h-[300px] w-full  items-center justify-between bg-background-secondary dark:bg-background-secondary-dark pb-[19px]">
                                <View className="w-full flex-1 translate-y-8 items-center  justify-center gap-y-4">
                                    <Text className="text-center text-3xl font-bold text-text-primary dark:text-text-primary-dark">
                                        {item.title}
                                    </Text>
                                    <Text className="w-full text-center text-text-secondary dark:text-text-secondary-dark">
                                        {item.about}
                                    </Text>
                                </View>
                                <View className="w-full flex-1 justify-end px-8 pb-[60px]">
                                    <Button size="md">{item.action}</Button>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}
