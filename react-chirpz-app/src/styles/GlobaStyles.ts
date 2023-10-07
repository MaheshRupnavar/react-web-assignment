import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './theme';
import {ms, mvs, scale as sc} from 'react-native-size-matters';

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
})