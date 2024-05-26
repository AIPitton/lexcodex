import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import i18next, { languageResources } from '../lib/i18next'
import { useTranslation } from 'react-i18next'
import languagesList from '../locales/languagesList.json'
const LanguageScreen = () => {
  const { t } = useTranslation()
  const changeLng = (lng) => {
    i18next.changeLanguage(lng)
  }
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">{t('welcome')}</Text>
      <FlatList
        data={Object.keys(languageResources)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => changeLng(item)}>
            <Text className="text-2xl font-bold">
              {languagesList[item].nativeName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default LanguageScreen
