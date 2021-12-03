import { StyleSheet } from "react-native";
import { FONTS, COLORS } from "../../assets/theme";

export const styles = StyleSheet.create({
    label:{
        color: COLORS.TEXT_SECONDARY_COLOR,
        fontFamily: FONTS.BOLD,
    },
    input:{
        height:39,
        backgroundColor:COLORS.BACKGROUND_WHITE,
        borderRadius: 8,
        justifyContent:'center',
        fontSize: 20,
        width:300,
        paddingHorizontal: 10,
        marginTop: 4,
        marginBottom:16,
        marginRight:20,
        color: COLORS.TEXT_SECONDARY_COLOR,
        fontFamily: FONTS.BOLD,
    }
})