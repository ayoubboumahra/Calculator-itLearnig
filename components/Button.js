import { Text, TouchableOpacity } from "react-native"
import tw from 'twrnc';

export default ({btn_style, text_style, text, onClick}) => {
    return (
        <TouchableOpacity
            onPress={() => onClick(text)}
            style={ tw`${btn_style}` }
        >
            <Text style={tw`${text_style}`}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}