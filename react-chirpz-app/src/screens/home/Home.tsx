import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CustomContainer } from '../../components/custom'
import { HomeHeaderComponent, PostListComponent } from './components'
import { ItemSeperator } from '../../components/uiCommon'
import { mvs } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import axiosInstance from '../../services/helper/axiosInterceptor'
import { useDispatch, useSelector } from 'react-redux'
import { __postDataChange } from '../../services/redux/dataSlice'
import AddPostBottomButton from './components/AddPostBottomButton'
import { __loadingChange, __refreshingChange } from '../../services/redux/loadingSlice'

const Home = () => {

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  // const [postData, setPostData] = useState<any[]>([]);


  useEffect(() => {

    const subscribe = navigation.addListener('focus', () => {
      dispatch(__loadingChange(true))
      getData();
    })

    return () => {
      subscribe;
    }
  }, [])


  const getData = () => {

    axiosInstance.get("/posts?_sort=createdAt&_order=desc").then(response => {
      if (response.status == 200) {
        dispatch(__postDataChange(response.data.body))
        // console.log('response.data', JSON.stringify(response.data))
      }
      dispatch(__loadingChange(false))
    }).catch(error => {
     // console.error(error);
      dispatch(__loadingChange(false))
    })

  }

  const onRefresh = () => {

    dispatch(__refreshingChange(true));
    getData();
    dispatch(__refreshingChange(false));

  }


  return (
    <CustomContainer>

      {/* HEADER */}
      <HomeHeaderComponent />

      <ItemSeperator />

      {/* POST LIST */}
      <PostListComponent onRefresh={onRefresh} />

      <AddPostBottomButton />


    </CustomContainer>
  )
}

export default Home