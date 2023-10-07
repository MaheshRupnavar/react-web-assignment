import {  StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../styles/theme";
import { ms, mvs } from "react-native-size-matters";


export const styles = StyleSheet.create({

    headerContainer:{
        alignSelf:'center',
        height:mvs(80),
        width:SIZES.cardWidth,
      

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
        backgroundColor:COLORS.theme,
        borderRadius:ms(10),
        marginLeft:ms(15)
    },
    descText:{
        fontSize:SIZES.f16,
        fontFamily:FONTS.regular,
        color:COLORS.greyTxt,
    },
    
    addPostBtnContainer:{
        position:'absolute',
        bottom:mvs(30),
        right:ms(20)
    },
    btnLinearContainer:{
        height:ms(50),
        width:ms(50),
        borderRadius:ms(25),

    }

})