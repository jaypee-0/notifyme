import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Constants from "expo-constants";
import React from "react";
import tw from "twrnc";

const TabOneScreen = ({ route }: any) => {
    const navigation = useNavigation();
    const data = [
        {
            name: "Methyl",
            icon: require("../../assets/persons/person1.png"),
            number: "+2348061985524",
            isOnline: true,
            messageCount: 0,
            message: "I will definitely see you next year",
            time: "33min",
            today: false
        },
        {
            name: "Ezele",
            icon: require("../../assets/persons/person2.png"),
            number: "+2348061985524",
            isOnline: false,
            messageCount: 0,
            message: "I will definitely see you next year",
            time: "33min",
            today: true
        },
        {
            name: "Tolu Wale",
            icon: require("../../assets/persons/person3.png"),
            number: "+2348061985524",
            isOnline: true,
            messageCount: 1,
            message: "It was nice meeting you. Lorem loremlorem lorem",
            time: "33min",
            today: true
        },
        {
            name: "Tolu Wale",
            icon: require("../../assets/persons/person4.png"),
            number: "+2348061985524",
            isOnline: true,
            messageCount: 1,
            message: "It was nice meeting you. Lorem loremlorem lorem",
            time: "10:23 AM",
            today: false
        },
        {
            name: "Flora",
            icon: require("../../assets/persons/person5.png"),
            number: "+2348061985524",
            isOnline: true,
            messageCount: 2,
            message: "I will definitely see you next year",
            time: "33min",
            today: true
        },
        {
            name: "Tolu Wale",
            icon: require("../../assets/persons/person6.png"),
            number: "+2348061985524",
            isOnline: true,
            messageCount: 1,
            message: "It was nice meeting you. Lorem loremlorem lorem",
            time: "33min",
            today: true
        },
        {
            name: "Methyl",
            icon: require("../../assets/persons/person7.png"),
            number: "+2348061985524",
            isOnline: true,
            messageCount: 0,
            message: "I will definitely see you next year",
            time: "33min",
            today: true
        }
    ];

    return (
        <SafeAreaView style={tw`h-[110%] px-6 bg-[#f000ff10] flex flex-col pt-[${Constants.statusBarHeight}]`}>
            <ScrollView style={tw`mt-1 max-h-[100%]`} showsVerticalScrollIndicator={false} horizontal={false}>
                {data
                    .map(({ name, icon, isOnline, message, messageCount, time }: any, index: number) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Details", { name: name, pic: icon })} key={index} style={tw`flex mb-3 items-center rounded-[12px] px-4 py-3 flex-row bg-[${messageCount > 0 ? "#EAEAEA" : "#F7F7F7"}]`}>
                                <View style={tw`relative mr-3`}>
                                    {isOnline && <View style={tw`bg-[#06E775] h-3 w-3 rounded-full absolute -right-[5px] bottom-0 z-10`}></View>}
                                    <Image source={icon} style={tw`text-[#fff] rounded-lg h-[56px] w-[54px]`} />
                                </View>
                                <View style={tw`flex flex-col`}>
                                    <Text style={tw`text-[#2F80ED] font-bold`}>{name}</Text>
                                    <Text style={tw`text-[#505050]`}>{message.slice(0, 20) + "..."}</Text>
                                </View>
                                <View style={tw`ml-auto`}>
                                    {messageCount !== 0 ? (
                                        <View style={tw`rounded-lg bg-[#2F80ED]`}>
                                            <Text style={tw`py-2 text-white px-2 `}>{messageCount}</Text>
                                        </View>
                                    ) : (
                                        <Text style={tw`text-[#ADAFBB]`}>{time}</Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        );
                    })}
            </ScrollView>
        </SafeAreaView>
    );
};

export default TabOneScreen;
