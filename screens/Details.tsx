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
    const { name, pic } = route.params;
    const [message, setmessage] = React.useState("");

    console.log(name, "Jaypee");
    return (
    <SafeAreaView style={tw`h-[100%] bg-white text-black flex flex-col pt-[${Constants.statusBarHeight}]`}>
            <View style={tw`flex flex-row justify-between items-center bg-white w-full px-6 py-3`}>
                <View style={tw`flex flex-row items-center`}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-3`}>
                        <AntDesign name="arrowleft" size={24} color={"#2F80ED"} />
                    </TouchableOpacity>
                    <View style={tw`flex flex-row`}>
                        <Image source={pic} style={tw`mr-2 rounded-full h-[30px] w-[30px]`} />
                        <View style={tw`flex flex-col`}>
                            <Text style={tw`text-[#2F80ED] font-bold`}>{name}</Text>
                            <Text style={tw`text-[#00000040] text-[12px]`}>Online</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={tw``}>
                    <AntDesign name="ellipsis1" size={24} color={"#2F80ED"} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-1 bg-[#F5F5F5] px-10 items-center flex flex-col`}>
                <View style={tw`text-[#474F6E] my-auto mx-auto flex flex-col text-center items-center`}>
                    <Image source={require("../../assets/personalchat.png")} style={tw`mb-4 ml-5`} />
                    <Text style={tw`text-center text-[#2F80ED]`}>
                        In order to continue to chat with <Text style={tw`font-bold`}>{name + " "}</Text>you will have to speak on video for at least 30 seconds
                    </Text>
                    <Text style={tw`text-center text-[#212867] font-bold my-2 text-lg`}>{"00: 00: 00"}</Text>
                    <Text style={tw`text-center text-lg max-w-[60%] text-[#242424]`}>You have 24hours to initiate a video call</Text>
                    <TouchableOpacity style={tw`bg-[#2F80ED] px-3 py-4 mt-2 rounded-lg flex flex-row items-center`}>
                        <FontAwesome name="video-camera" color={"#fff"} style={tw`mr-1`} />
                        <Text style={tw`text-white font-semibold`}>Video call</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`mt-auto py-2 px-6 flex flex-row bg-white items-center`}>
                <TouchableOpacity style={tw`mr-2`}>
                    <AntDesign name="plus" size={24} color={"#2F80ED"} />
                </TouchableOpacity>
                <View style={tw`flex flex-row py-2 px-3 w-[65%] justify-between rounded-[10px] border border-[#EAEAEA] items-center bg-[#FAFAFA]`}>
                    <TextInput
                        style={tw`text-[#000] h-full`}
                        onChangeText={(text: string): void => {
                            setmessage(text);
                        }}
                        value={message}
                        placeholderTextColor="#00000040"
                        placeholder="Type your message"
                    />
                    <View style={tw``}>
                        <Image source={require("../../assets/sticker.png")} />
                    </View>
                </View>
                <View style={tw`ml-auto flex flex-row items-center`}>
                    <View style={tw`mr-3`}>
                        <FontAwesome name="video-camera" size={20} color="#2F80ED" />
                    </View>
                    <View style={tw``}>
                        <FontAwesome name="microphone" size={20} color="#2F80ED" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Details;
