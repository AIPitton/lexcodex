import { View, Text } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
const LandingScreen = () => {
  const { t } = useTranslation()
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">{t('welcome')}</Text>
    </View>
  )
}

export default LandingScreen
