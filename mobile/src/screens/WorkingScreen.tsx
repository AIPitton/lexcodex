import { Platform, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import WorkingButton from '../components/WorkingButton'
import {
  setBookiliad,
  setMax,
  setMin,
  setConceal,
  setBookNo,
} from '../features/main/mainSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useTranslation } from 'react-i18next'
import RNFS from 'react-native-fs'
import { use } from 'i18next'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import TopButtons from '../components/TopButtons'
import { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage'
import SwitchHandler from '../features/switch/SwitchHandler'
const WorkingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  const { bookiliad, min, max, conceal } = useSelector(
    (state: RootState) => state.main
  )

  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [pressedButton, setPressedButton] = useState<number | null>(null)
  const handlePress = (buttonNumber: number) => {
    navigation.navigate('Landing')
    dispatch(setBookNo(buttonNumber))
  }

  return (
    <View className="flex-1 items-center justify-center">
      <TopButtons navigation={navigation} />
      {[...Array(11)].map((_, rowIndex) => (
        <View
          key={rowIndex}
          className="flex-1 flex-row items-center justify-center "
        >
          {[...Array(6)].map((_, colIndex) => (
            <WorkingButton
              key={`${rowIndex}-${colIndex}`}
              onPress={() => handlePress(rowIndex * 6 + colIndex + 1)}
              text={t(`working.${rowIndex * 6 + colIndex + 1}`)}
            />
          ))}
        </View>
      ))}
    </View>
  )
}

export default WorkingScreen
