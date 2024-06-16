import { Platform, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import WorkingButton from '../components/WorkingButton'
import {
  setBookiliad,
  setMax,
  setMin,
  setConceal,
} from '../features/main/mainSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import RNFS from 'react-native-fs'
import { use } from 'i18next'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import TopButtons from '../components/TopButtons'
import { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage'
const WorkingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  const { bookiliad, min, max, conceal } = useSelector(
    (state: RootState) => state.main
  )

  const dispatch = useDispatch()

  const handlePress = (p0: number) => {
    switch (p0) {
      case 1:
        dispatch(setMin(0))
        dispatch(setMax(100))
        navigation.navigate('Landing')
        dispatch(setConceal(true))

        break
      case 2:
        dispatch(setMin(99))
        dispatch(setMax(200))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        break
      case 3:
        dispatch(setMin(199))
        dispatch(setMax(300))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        break
      default:
        console.log('Other button pressed!')
    }
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
              text={`${rowIndex * 6 + colIndex + 1}`}
            />
          ))}
        </View>
      ))}
    </View>
  )
}

export default WorkingScreen
