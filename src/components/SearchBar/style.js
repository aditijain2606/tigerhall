import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

export const style = StyleSheet.create({
    textInput: {
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        fontSize: 12,
        lineHeight: 17,
        fontWeight: "400",
        color: COLORS.white,
        paddingVertical: 5,
        paddingLeft: 5,
        height: 30
    },
    title: {
        color: COLORS.white,
        fontSize: 14,
        lineHeight: 17,
    },
    container: {
        marginBottom: 15,
        
    }
})