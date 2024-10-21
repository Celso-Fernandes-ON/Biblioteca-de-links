import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function Input({...rest}: TextInputProps){
    return(
        <TextInput style={styles.container} placeholder={colors.gray[400]} {...rest} />
    )
}