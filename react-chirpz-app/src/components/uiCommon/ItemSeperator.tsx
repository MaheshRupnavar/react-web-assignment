import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { ms } from 'react-native-size-matters';
import { COLORS, SIZES } from '../../styles/theme';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

const ItemSeperator: React.FC<Props> = ({ containerStyle }) => {
  return <View style={[styles.seperator, containerStyle]} />;
};

const styles = StyleSheet.create({
  seperator: {
    height: ms(1.5),
    backgroundColor: COLORS.greyTxt,
    opacity:0.5,
    width: SIZES.width,
    alignSelf: 'center',
  },
})

export default ItemSeperator;

