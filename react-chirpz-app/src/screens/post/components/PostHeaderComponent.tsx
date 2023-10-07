import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../../styles/GlobaStyles'
import { styles } from '../styles'
import { COLORS } from '../../../styles/theme'
import Icons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

type Props = {
    postOnPress:()=>void
}

const PostHeaderComponent = ({postOnPress}: Props) => {

    const navigation=useNavigation<any>();
    return (
        <View style={[styles.postHeaderContainer, GlobalStyles.rowCenterSpaceBetween]} >

            <TouchableOpacity onPress={()=>navigation.goBack()}
                style={[styles.backContainer, GlobalStyles.alignJustifyCenter]} >
                <Icons name="arrow-back" color={COLORS.white} size={25} />
            </TouchableOpacity>

            <TouchableOpacity onPress={postOnPress}
                style={[styles.postBtn,GlobalStyles.alignJustifyCenter]} >
                <Text style={styles.postTxt} >Post</Text>
            </TouchableOpacity>

        </View>
    )
}

export default PostHeaderComponent