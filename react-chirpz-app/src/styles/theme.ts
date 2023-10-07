import { Dimensions } from 'react-native';
import {
  scale as sc,
  moderateScale as ms,
  moderateVerticalScale as mvs,
  verticalScale as vs,
} from 'react-native-size-matters';
const { width, height } = Dimensions.get('window');


const COLORS = {

  theme: "#F4A30B",

  themeDark: "#F0650B",

  bg: "#0A0F1B",

  greyTxt: "#ADB6C9",

  greyBtn: "#313950",

  white: "#FFFFFF"

}


const SIZES = {

  width,
  height,

  //card
  cardWidth: width - ms(30),

  //font
  f24: ms(24),
  f22: ms(22),
  f20: ms(20),
  f18: ms(18),
  f16: ms(16),
  f14: ms(14),
  f12: ms(12),
  f10: ms(10),

}


const FONTS = {
  light: 'Inter-Light',
  regular: 'Inter-Regular',
  bold: 'Inter-Bold',
}

export { COLORS, FONTS, SIZES };
