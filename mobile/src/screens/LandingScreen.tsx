import { View, Text } from 'react-native'
import React from 'react'
import i18next from '../lib/i18n'

const LandingScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold text-center">
        {i18next.t('title')}
      </Text>
    </View>
  )
}

export default LandingScreen
