import { View, Text, StyleSheet, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import i18next from '../lib/i18next'
import { urliliad } from '../utils/constants'
import { createOverwriteDownload } from '../features/update/createOverwriteDownload'
import { getDownloadPermissionAndroid } from '../features/download/downloadPermission'
import RNFS from 'react-native-fs'
import { setBookiliad } from '../features/main/mainSlice'
const LandingScreen = () => {
  const { localesPersist } = useSelector((state: RootState) => state.main)
  const { bookiliad, min, max } = useSelector((state: RootState) => state.main)
  const { t } = useTranslation()
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
    <View>
      <FlatList data={bookiliad} renderItem={renderItem} />
    </View>
  )
}

export default LandingScreen
