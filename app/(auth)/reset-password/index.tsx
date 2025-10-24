
import { View , Text} from "react-native";
import { useContext } from "react";
import { WidthContext } from "@/app/_layout";
import Back from "@/components/ui/back";

export default function PasswordReset() {
    const width = useContext(WidthContext);
    return (
        <View
            style={{ width }}
            className="dark:bg-background-primary-dark flex-1 justify-start bg-background-primary"
        >
            <View className="box-border flex w-full gap-y-8 px-5    pt-10">
                <Back />
                <View className="flex">
                    <Text className="text-text-primary-dark font-semibold text-2xl w-3/4">Go ahead and complete your account and setup</Text>
                    <Text className="text-text-secondary font-normal text-sm">
                        Create your account and simplify your workflow
                        instantly.
                    </Text>
                </View>
            </View>
            <View>
                
            </View>
        </View>
    );
}