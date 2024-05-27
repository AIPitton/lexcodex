import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import i18next, { languageResources } from '../lib/i18next'
import { useTranslation } from 'react-i18next'
import languagesList from '../locales/languagesList.json'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { setLocalesPersist } from '../features/main/mainSlice'
const LanguageScreen = () => {
  const { localesPersist } = useSelector((state: RootState) => state.main)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const changeLng = (lng) => {
    i18next.changeLanguage(lng)
    dispatch(setLocalesPersist(lng))
  }
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bookerly text-3xl ">{t('welcome')}</Text>
      <Text className="font-bookerlyBold text-3xl ">{t('welcome')}</Text>
      <FlatList
        data={Object.keys(languageResources)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => changeLng(item)}>
            <Text className="text-3xl font-bookerlyBold text-center">
              {languagesList[item].nativeName}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={() => console.log(localesPersist)}>
        <Text className="text-2xl font-bold">localesPersist</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LanguageScreen
