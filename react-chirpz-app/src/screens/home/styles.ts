import {  StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../styles/theme";
import { ms, mvs } from "react-native-size-matters";


export const styles = StyleSheet.create({

    headerContainer:{
        alignSelf:'center',
        height:mvs(80),
        width:SIZES.cardWidth,
        // backgroundColor:COLORS.theme,
        // paddingVertical:mvs(15),

    },
    profileImageContainer:{
        position:'absolute',
        top:mvs(15),
        left:ms(0)
    },
    headingTitle:{
        fontSize:SIZES.f20,
        fontFamily:FONTS.bold,
        color:COLORS.white
    },
    userName:{
        fontSize:SIZES.f16,
        fontFamily:FONTS.regular,
        color:COLORS.white
    },
    postListContainer:{
        alignSelf:'center',
        width:SIZES.cardWidth,
        paddingVertical:mvs(10)
    },
    verifiedContainer:{
        height:ms(20),
        width:ms(20),
        borderRadius:SIZES.f10,
        
    }

})