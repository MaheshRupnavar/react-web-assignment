import { View, Text, FlatList,  RefreshControl } from 'react-native'
import React from 'react'
import { ItemSeperator, TagsList } from '../../../components/uiCommon'
import { GlobalStyles } from '../../../styles/GlobaStyles'
import { styles } from '../styles'
import { useSelector } from 'react-redux'
import Icons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../../../styles/theme'
import { mvs } from 'react-native-size-matters'

type Props = {
    onRefresh?: () => void
}

const PostListComponent = ({ onRefresh }: Props) => {

    const { POST_DATA } = useSelector((state: any) => state.data);
    const { REFRESHING } = useSelector((state: any) => state.loading);

    return (
        <FlatList
            data={POST_DATA}
            keyExtractor={(item) => `POSTLIST-${item.id}`}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    onRefresh={onRefresh}
                    refreshing={REFRESHING}
                    colors={[COLORS.theme]}
                />
            }
            ListEmptyComponent={
            <View style={{width:SIZES.cardWidth,alignSelf:'center',marginTop:mvs(20)}} >
                 <Text style={styles.descText} >Please start the serverApp or go to the src/services/helper/axiosInterceptor.ts file and place the your ip in the base url </Text>
            </View>
            }
            contentContainerStyle={{ paddingTop: mvs(10), paddingBottom: mvs(80) }}
            ItemSeparatorComponent={() => <ItemSeperator />}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.postListContainer} >
                        <View style={GlobalStyles.rowCenter} >
                            <Text style={styles.userName} >{item?.userName}</Text>
                            {
                                item?.isVerified &&
                                <View style={[styles.verifiedContainer, GlobalStyles.alignJustifyCenter]} >
                                    <Icons name="checkmark-sharp" color={COLORS.bg} size={16} />
                                </View>
                            }

                        </View>

                        <View style={{ marginVertical: mvs(10) }} >
                            <Text style={styles.descText} >{item?.caption}</Text>
                        </View>

                        <TagsList data={item?.tags} />

                    </View>
                )
            }}
        />
    )
}

export default PostListComponent