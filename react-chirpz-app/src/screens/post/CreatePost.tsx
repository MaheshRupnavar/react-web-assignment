import { View, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { CustomContainer } from '../../components/custom'
import PostHeaderComponent from './components/PostHeaderComponent'
import { mvs } from 'react-native-size-matters'
import { GlobalStyles } from '../../styles/GlobaStyles'
import { COLORS } from '../../styles/theme'
import { styles } from './styles'
import axiosInstance from '../../services/helper/axiosInterceptor'
import Toast from 'react-native-simple-toast'
import { TagsList } from '../../components/uiCommon'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { __loadingChange } from '../../services/redux/loadingSlice'

const CreatePost = () => {

  const [userName, setUserName] = useState<string>("")
  const [title, setTitle] = useState<string>("");
  const [tagName, setTagName] = useState<string>('');

  const titleRef = useRef<TextInput>(null);
  const tagNameRef = useRef<TextInput>(null);

  const [addedTagList, setAddedTagList] = useState<string[]>([]);

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const handleAddTags = () => {

    const hashMatchTest = /^#/;

    hashMatchTest.test(tagName) ?
      addedTagList.push(`${tagName.toLowerCase()}`)
      :
      addedTagList.push(`#${tagName.toLowerCase()}`);

    setTagName("");

  }

  const handlePost = () => {

    if (userName == "") {
      Toast.show("Enter user name", Toast.LONG);
    } if (title == "") {
      Toast.show("Enter caption", Toast.LONG);
    } else if (addedTagList.length == 0) {
      Toast.show("Enter tags", Toast.LONG);

    } else {

      dispatch(__loadingChange(true))

      const request = {
        userName: userName,
        caption: title,
        tags: addedTagList,
        createdAt:`${new Date()}`
      }

      axiosInstance.post("/posts", request).then(response => {
        if (response.data?.status) {
          // console.log('response', response.data);
          Toast.show(response.data?.message, Toast.LONG);
          dispatch(__loadingChange(false))
          navigation.goBack()
        } else {
          Toast.show(response.data?.message, Toast.LONG);
          dispatch(__loadingChange(false))
        }

      }).catch(error => {
        // console.error(error);
        dispatch(__loadingChange(false))
      })
    }

  }


  return (
    <CustomContainer>

      <PostHeaderComponent postOnPress={handlePost} />

      <View style={{ paddingHorizontal: mvs(20), marginTop: mvs(40) }}>

        <View >
          <Text style={GlobalStyles.labelTxt}>
            User Name
          </Text>
          <TextInput
            value={userName}
            style={[styles.inputStyle, userName ? GlobalStyles.inputTxt : GlobalStyles.placeHolderTxt]}
            onChangeText={txt => setUserName(txt)}
            autoCapitalize="none"
            placeholder={`Enter user name ?`}
            placeholderTextColor={COLORS.greyBtn}
            onSubmitEditing={() => {
              titleRef.current?.focus()
            }}
            keyboardType="default"
          />
        </View>

        <View style={{ marginTop: mvs(30) }}>
          <Text style={GlobalStyles.labelTxt}>
            Create
          </Text>
          <TextInput
            value={title}
            ref={titleRef}
            style={[styles.inputStyle, title ? GlobalStyles.inputTxt : GlobalStyles.placeHolderTxt]}
            onChangeText={txt => setTitle(txt)}
            autoCapitalize="none"
            placeholder={`What's on your mind ?`}
            placeholderTextColor={COLORS.greyBtn}
            onSubmitEditing={() => {
              tagNameRef.current?.focus()
            }}
            keyboardType="default"
          />
        </View>

        <View style={{ marginTop: mvs(30) }} >
          <Text style={GlobalStyles.labelTxt}>
            Add Tags
          </Text>
          <View style={[styles.inputStyle, GlobalStyles.rowCenter]} >
            <TextInput
              value={tagName}
              ref={tagNameRef}
              style={[tagName ? GlobalStyles.inputTxt : GlobalStyles.placeHolderTxt, { width: '80%' }]}
              onChangeText={txt => setTagName(txt)}
              autoCapitalize="none"
              placeholder={`Write Tags`}
              placeholderTextColor={COLORS.greyBtn}
              onSubmitEditing={Keyboard.dismiss}
              keyboardType="default"
            />
            {
              tagName &&
              <TouchableOpacity onPress={handleAddTags}>
                <Text style={GlobalStyles.labelTxt} >Add</Text>
              </TouchableOpacity>
            }

          </View>

          <View style={{ marginTop: mvs(15) }} >
            <TagsList data={addedTagList} />
          </View>


        </View>



      </View>


    </CustomContainer>
  )
}

export default CreatePost