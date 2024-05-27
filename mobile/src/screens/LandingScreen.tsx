import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import i18next from '../lib/i18next'
const LandingScreen = () => {
  const { localesPersist } = useSelector((state: RootState) => state.main)

  const { t } = useTranslation()
  useEffect(() => {
    if (localesPersist) {
      i18next.changeLanguage(localesPersist)
    }
  }, [])
  return (
    <View className="flex-1 justify-center items-center">
      <Text style={style.text}>{t('welcome')}</Text>
    </View>
  )
}

export default LandingScreen

const style = StyleSheet.create({
  text: {
    fontSize: 50,
    fontFamily: 'BookerlyBold',
  },
})
