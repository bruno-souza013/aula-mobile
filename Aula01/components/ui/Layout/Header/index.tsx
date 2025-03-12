import { View } from "@/components/Themed";
import { ViewStyle } from "react-native";
import style from "./style";

type HeaderProps = {
    title:string;
    subtitle:string;
    containerStyle?:ViewStyle;
    titleStyle?:ViewStyle;
    subtitleStyle?:ViewStyle;
}

export default function Header({
    title,
    subtitle,
    containerStyle,
    titleStyle,
    subtitleStyle
}:HeaderProps){
    return(
        <View style={[style.container, containerStyle]}>

        </View>
    )
}