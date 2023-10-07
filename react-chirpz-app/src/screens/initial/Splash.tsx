import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { CustomContainer } from '../../components/custom'
import { GlobalStyles } from '../../styles/GlobaStyles'
import images from '../../constants/images'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import screenNames from '../../constants/screenNames'

const Splash = () => {

  const navigation = useNavigation<any>();

  useEffect(() => {

    const subscribe = navigation.addListener('focus', () => {
      navigate();
    })

    return () => {
      subscribe;
    }
  }, [])

  const navigate = () => {
    setTimeout(async () => {
      await navigation.replace(screenNames.HOME);
    }, 2500);
  }


  return (
    <CustomContainer containerStyle={GlobalStyles.alignJustifyCenter}>

      <Image source={images.splashLogo} style={styles.logoStyle} resizeMode='contain' />

    </CustomContainer>
  )

}

export default Splash