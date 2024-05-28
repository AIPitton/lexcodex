import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import i18next from '../lib/i18next'
import hooks from '../assets/data/hooks.json'

const LandingScreen = () => {
  const { localesPersist } = useSelector((state: RootState) => state.main)

  const { t } = useTranslation()
  useEffect(() => {
    if (localesPersist) {
      i18next.changeLanguage(localesPersist)
    }
  }, [])
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View className="justify-center items-center mx-2">
        <Text className="text-xl font-bookerlyBold justify-center items-center">
          {item.question}
        </Text>
        <Text className="text-l font-bookerly justify-center items-center pb-2">
          {item.answer}
        </Text>
      </View>
    )
  }
  return (
    <View className="flex-1 justify-center items-center">
      <FlatList data={hooks} renderItem={renderItem} />
    </View>
  )
}

export default LandingScreen
