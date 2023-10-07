import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './theme';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
 backgroundColor: COLORS.bg
  },
  alignCenter: {
    alignSelf: 'center',
  },
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenterSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  labelTxt:{
    fontSize:SIZES.f16,
    fontFamily:FONTS.bold,
    color:COLORS.white,
  },
  inputTxt:{
    fontSize:SIZES.f16,
    fontFamily:FONTS.regular,
    color:COLORS.greyTxt,
  },
  placeHolderTxt:{
    fontSize:SIZES.f16,
    fontFamily:FONTS.regular,
    color:COLORS.greyTxt,
  }
})