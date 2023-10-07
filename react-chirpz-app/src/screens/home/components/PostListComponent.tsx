import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ItemSeperator } from '../../../components/uiCommon'
import { GlobalStyles } from '../../../styles/GlobaStyles'
import { styles } from '../styles'

type Props = {
    data: any,
}


const PostListComponent = ({ data }: Props) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => `-${item.id}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
            ItemSeparatorComponent={() => <ItemSeperator />}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.postListContainer} >
                        <View style={GlobalStyles.rowCenter} >
                            <Text style={styles.userName} >{item?.userName}</Text>
                            {
                                item?.isVerified &&
                                <View style={[styles.verifiedContainer,GlobalStyles.alignJustifyCenter]} >
                                    
                                </View>
                            }
                        </View>

                    </View>
                )
            }}
        />
    )
}

export default PostListComponent