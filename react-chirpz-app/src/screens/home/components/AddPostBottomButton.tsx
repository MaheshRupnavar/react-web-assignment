import { View,  TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../../styles/theme'
import Icons from 'react-native-vector-icons/Ionicons'
import { GlobalStyles } from '../../../styles/GlobaStyles'
import { useNavigation } from '@react-navigation/native'
import screenNames from '../../../constants/screenNames'



const AddPostBottomButton = () => {

    const navigation = useNavigation<any>();

    return (
        <View style={styles.addPostBtnContainer} >
            <LinearGradient colors={[COLORS.theme, COLORS.themeDark]}
                style={[styles.btnLinearContainer, GlobalStyles.alignJustifyCenter]}>

                <TouchableOpacity style={[styles.btnLinearContainer, GlobalStyles.alignJustifyCenter]}
                    onPress={() => navigation.navigate(screenNames.CREATE_POST)}>
                    <Icons name="add" color={COLORS.bg} size={30} />
                </TouchableOpacity>

            </LinearGradient>
        </View>
    )
}

export default AddPostBottomButton