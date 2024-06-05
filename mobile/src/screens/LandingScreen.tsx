import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import i18next from '../lib/i18next'
import { urliliad } from '../utils/constants'
import { createOverwriteDownload } from '../features/update/createOverwriteDownload'
import { getDownloadPermissionAndroid } from '../features/download/downloadPermission'
import RNFS from 'react-native-fs'
import { setUpdateRequired } from '../features/main/mainSlice'
import TopButtons from '../components/TopButtons'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import { urlUpdateRequired } from '../utils/constants'
const LandingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  const { localesPersist } = useSelector((state: RootState) => state.main)
  const { bookiliad, updateRequired } = useSelector(
    (state: RootState) => state.main
  )
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isFirstRender = useRef(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [update, setUpdate] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (Platform.OS === 'android') {
      getDownloadPermissionAndroid().then((granted) => {
        if (granted) {
          createOverwriteDownload(urliliad)
        } else {
          console.log('Permission denied')
        }
      })
    }
  }, [])
  useEffect(() => {
    if (localesPersist) {
      i18next.changeLanguage(localesPersist)
    }
  }, [])
  useEffect(() => {
    const fetchVersion = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(urlUpdateRequired)
        const data = await response.json()
        console.log('The version value from version.json:', data[0].version)
        setUpdate(data[0].version)
        console.log('The version value from local updateRequired')
        console.log(updateRequired)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }
    fetchVersion()
  }, [])
  const modalVisibility = async (p0: { update: number }) => {
    if (update !== updateRequired) {
      setIsModalVisible(true)
    } else {
      setIsModalVisible(false)
    }
  }
  useEffect(() => {
    if (!isFirstRender.current) {
      modalVisibility({ update })
    }
    isFirstRender.current = false
  }, [update])
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View className="flex-row justify-start items-start">
        <Text className="text-sm font-bookerlyBold justify-center items-start text-cente pr-2 mt-1 ml-1">
          {item.id}
        </Text>
        <Text className="flex-1 text-xl font-bookerly justify-center items-center">
          {item.text}
        </Text>
      </View>
    )
  }
  return (
    <View className=" flex-1">
      <TopButtons navigation={navigation} />
      <Button
        title="Update"
        onPress={() => dispatch(setUpdateRequired(update))}
      />
      <Button title="console Update" onPress={() => console.log(update)} />
      <Button
        title="console Update Required"
        onPress={() => console.log(updateRequired)}
      />
      <Button
        title="console isModalVisible"
        onPress={() => console.log(isModalVisible)}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="primary" /> // Adjust props as needed
      ) : isModalVisible ? (
        <Text className="text-3xl font-bookerlyBold justify-center items-center">
          Update Required
        </Text>
      ) : (
        <Text className="text-3xl font-bookerlyBold justify-center items-center">
          Update Not Required
        </Text>
      )}
      <FlatList data={bookiliad} renderItem={renderItem} />
    </View>
  )
}

export default LandingScreen
