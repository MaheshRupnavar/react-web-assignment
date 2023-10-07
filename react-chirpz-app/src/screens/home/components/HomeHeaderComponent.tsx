import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { GlobalStyles } from '../../../styles/GlobaStyles'
import images from '../../../constants/images'
import { ItemSeperator } from '../../../components/uiCommon'
import { mvs } from 'react-native-size-matters'

type Props = {}

const HomeHeaderComponent = (props: Props) => {
    return (
        <View style={[styles.headerContainer, GlobalStyles.alignJustifyCenter,]} >

            <View style={styles.profileImageContainer} >
                <Image source={images.profile} />
            </View>

            <View>
                <Text style={styles.headingTitle} >Chirpz</Text>
            </View>

           

        </View>
    )
}

export default HomeHeaderComponent