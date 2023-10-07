import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/theme'

type Props = {
    loading: boolean
}

const Loader = ({ loading }: Props) => {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            //  visible={TRUE}
            visible={loading}
            onRequestClose={() => { console.log('close modal') }}>

            <View style={[StyleSheet.absoluteFillObject, styles.container,]}>

                <ActivityIndicator
                    size={40}
                    color={COLORS.theme}
                    style={{ margin: 15 }} />

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.3)',
      //backgroundColor: BG,
  
    },
   
  });

export default Loader