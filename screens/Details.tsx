import { Keyboard, Text, View, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, FontAwesome, Foundation, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import tw from "twrnc";
import React from "react";

const Details = ({ route }: any) => {
    const navigation = useNavigation();
    const { name, time, detail, message } = route.params;
    
    const clockImg = require("../assets/icons/clock.png")
    const cartImg = require("../assets/icons/cart.png")
    const fireImg = require("../assets/icons/fire.png")
    const downImg = require("../assets/icons/dbdown.png")

    return (
        <SafeAreaView style={tw`h-[100%] bg-[#f000ff10]  text-black flex flex-col pt-[${Constants.statusBarHeight}]`}>
            <View style={tw`flex flex-row justify-between items-center w-full px-6 pb-3`}>
                <View style={tw`flex flex-row items-center`}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-3`}>
                        <AntDesign name="arrowleft" size={24} color={"#00000080"} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={tw`flex flex-col px-6`}>
                <Image source={message.includes("Version") ? fireImg : message.includes("cart") ? cartImg : message.includes("waitlist") ? clockImg : downImg} style={tw`mr-2 rounded-full h-[50px] w-[50px]`} />
                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#00000070] mt-2 font-bold`}>{'User: ' + 'Notifyme Admin'}</Text>
                    <Text style={tw`text-[#00000070] `}>{'Message: ' + message}</Text>
                    <Text style={tw`text-[#00000070] mb-2`}>{'Time: ' + time}</Text>
                    <Text style={tw`text-[#00000094] `}>{'Details:'}</Text>
                </View>
                    <Text style={tw`text-[#00000070]`}>{message}</Text>
            </View>
        </SafeAreaView>
    );
};

export default Details;
