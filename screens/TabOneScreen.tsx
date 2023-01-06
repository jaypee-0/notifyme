import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Constants from "expo-constants";
import React from "react";
import tw from "twrnc"
import { useGetAllQuery, useGetUnreadQuery } from "../services";

const TabOneScreen = ({ route }: any) => {
    const navigation = useNavigation();
    const clockImg = require("../assets/icons/clock.png")
    const cartImg = require("../assets/icons/cart.png")
    const fireImg = require("../assets/icons/fire.png")
    const downImg = require("../assets/icons/dbdown.png")

    const { data, error, isLoading } = useGetAllQuery(1)
    //const { data, error, isLoading } = useGetAllQuery(1)
    
    const dataInfo = [
        {
            name: "Methyl",
            number: "+2348061985524",
            isOnline: true,
            messageCount: 0,
            message: "User joined waitlist",
            time: "2 minutes",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        },
        {
            name: "Ezele",
            number: "+2348061985524",
            isOnline: false,
            messageCount: 0,
            message: "User joined waitlist",
            time: "2 minutes",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Tolu Wale",
            number: "+2348061985524",
            isOnline: true,
            messageCount: 1,
            message: "Customer added item to cart",
            time: "2 minutes",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Tolu Wale",
            number: "+2348061985524",
            isOnline: true,
            messageCount: 1,
            message: "Database is down",
            time: "2 minutes",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Flora",
            number: "+2348061985524",
            isOnline: true,
            messageCount: 2,
            message: "User joined waitlist",
            time: "33 minutes",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Tolu Wale",
            number: "+2348061985524",
            isOnline: true,
            messageCount: 1,
            message: "User joined waitlist",
            time: "33 minutes",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Methyl",
            number: "+2348061985524",
            isOnline: true,
            messageCount: 0,
            message: "Version 1.05 deployed",
            time: "33 minutes",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];
    console.log(data)
    if(isLoading) {
        return (
            <View style={tw`flex-1 flex-col justify-center items-center`}>
               <Text style={tw`text-[#000] text-[20px]`}>{'Loading...'}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={tw`h-[110%] px-6 bg-[#f000ff10] flex flex-col pt-[${Constants.statusBarHeight}]`}>
            <ScrollView style={tw`mt-1 max-h-[100%] mb-14`} showsVerticalScrollIndicator={false}>
                {data?.map(({ name, details, post, createdAt }: any, index: number) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Details", { name: name, detail: details, message: post, time: (new Date(createdAt)).getMinutes() + ' minutes ago'})} key={index} style={tw`flex mb-3 rounded-[12px] px-4 py-4 flex-col bg-[#fff]`}>
                                <View style={tw`flex flex-row justify-between`}>
                                    <Image source={post.includes("Version") ? fireImg : post.includes("cart") ? cartImg : post.includes("waitlist") ? clockImg : downImg} style={tw`rounded-md h-[28px] w-[28px]`} />
                                    <Text style={tw`text-[#808080]`}>{(new Date(createdAt)).getMinutes() + ' minutes ago'}</Text>
                                </View>
                                    <Text style={tw`text-[#00000098] text-[18px] font-bold mt-5`}>{post}</Text>
                            </TouchableOpacity>
                        );
                    })}
            </ScrollView>
        </SafeAreaView>
    );
};

export default TabOneScreen;
