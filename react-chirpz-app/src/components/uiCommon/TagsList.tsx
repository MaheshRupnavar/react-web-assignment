import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../styles/theme'
import { ms, mvs } from 'react-native-size-matters'
import { GlobalStyles } from '../../styles/GlobaStyles'

type Props = {
    data: any
}

const TagsList = ({ data }: Props) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => `${index}`}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            numColumns={3}
            contentContainerStyle={{}}
            renderItem={({ item: tagItem }) => {
                return (
                    <View style={[styles.tagBtnContainer, GlobalStyles.alignJustifyCenter]} >
                        <Text style={styles.tagTxt} >{tagItem}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    tagTxt: {
        fontSize: SIZES.f14,
        fontFamily: FONTS.regular,
        color: COLORS.white,
        opacity: 0.7
    },
    tagBtnContainer: {
        backgroundColor: COLORS.greyBtn,
        paddingVertical: mvs(5),
        paddingHorizontal: ms(10),
        marginRight: ms(10),
        marginBottom: mvs(10),
        borderRadius:ms(5)
    },
})

export default TagsList