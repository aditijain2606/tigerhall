import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: COLORS.darkTeal,
        paddingHorizontal: 60,
        paddingBottom: 45,
        paddingTop: 15
    },
    contentCard: {
        borderRadius: 5,
        backgroundColor: COLORS.white,
    },
    image: {
        flex: 1,
        height: 130
    },
    title: {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: "700",
        color: COLORS.secondary,
        marginTop: 10,
        marginLeft: 12
    },
    categoriesName: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: "700",
        color: COLORS.black,
        marginVertical: 4,
        marginLeft: 12
    },
    expertDetails: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: "600",
        color: COLORS.lightBlack,
        marginVertical: 2,
        marginLeft: 12
    },
    expertCompany: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: "600",
        color: COLORS.secondary,
        marginBottom: 30,
        marginLeft: 12
    }
})