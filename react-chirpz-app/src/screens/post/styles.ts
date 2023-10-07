import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../styles/theme";
import { ms, mvs } from "react-native-size-matters";


export const styles = StyleSheet.create({

    postHeaderContainer: {
        alignSelf: 'center',
        width: SIZES.cardWidth,
        height: mvs(50),
        paddingVertical: mvs(10)
    },
    backContainer: {
        height: mvs(30),
        width: ms(30),
    },
    postBtn: {
        height: mvs(30),
        width: ms(70),
        backgroundColor: COLORS.theme,
        borderRadius: ms(10)
    },
    postTxt: {
        fontSize: SIZES.f14,
        fontFamily: FONTS.bold,
        color: COLORS.white,
    },
    inputStyle: {
        marginTop:mvs(5),
        borderBottomWidth: ms(2),
        borderBottomColor: COLORS.greyBtn,
        height: mvs(50),
    }
})