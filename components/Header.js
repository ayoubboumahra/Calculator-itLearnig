import { Text, View } from "react-native";
import tw from 'twrnc';


export default ({text, number}) => {
    return (
        <View style={tw`w-full`}>
            <View>
                <Text style={tw`text-indigo-500 text-right h-10`}>
                    { text }
                </Text>
            </View>
            <View style={tw`bg-white shadow-lg px-4 py-2 mb-5 rounded`}>
                <Text style={tw`text-indigo-500 font-bold text-lg font-mono`}>
                    {number}
                </Text>
            </View>
        </View>
    )
}