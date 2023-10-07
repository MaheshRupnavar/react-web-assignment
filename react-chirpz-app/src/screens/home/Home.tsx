import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CustomContainer } from '../../components/custom'
import { HomeHeaderComponent, PostListComponent } from './components'
import { ItemSeperator } from '../../components/uiCommon'
import { mvs } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import axiosInstance from '../../services/helper/axiosInterceptor'

const Home = () => {

  const navigation = useNavigation<any>();
  const [postData, setPostData] = useState<any[]>([]);

  useEffect(() => {

    const subscribe = navigation.addListener('focus', () => {
      getData();
    })

    return () => {
      subscribe;
    }
  }, [])


  const getData = () => {



    axiosInstance.get("/posts?_sort=createdAt&_order=desc").then(response => {
      if (response.status == 200) {
        setPostData(response.data?.body);
       console.log('response.data', JSON.stringify(response.data))
      }

    })

  }


  return (
    <CustomContainer>

      {/* HEADER */}
      <HomeHeaderComponent />

      <ItemSeperator />

      <PostListComponent data={postData}/> 

    </CustomContainer>
  )
}

export default Home