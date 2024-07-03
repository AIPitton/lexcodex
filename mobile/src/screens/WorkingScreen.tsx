import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
} from 'react-native'
import WorkingButton from '../components/WorkingButton'
import { setBookNo } from '../features/main/mainSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useTranslation } from 'react-i18next'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import TopButtons from '../components/TopButtons'

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
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')

  const handlePress = (buttonNumber: number) => {
    navigation.navigate('Landing')
    dispatch(setBookNo(buttonNumber))
  }

  const handleLongPress = (text: string) => {
    setModalText(text)
    setModalVisible(true)
  }

  return (
    <View className="flex-1 items-center justify-center">
      <TopButtons navigation={navigation} />
      {[...Array(11)].map((_, rowIndex) => (
        <View
          key={rowIndex}
          className="flex-1 flex-row items-center justify-center "
        >
          {[...Array(6)].map((_, colIndex) => {
            const buttonNumber = rowIndex * 6 + colIndex + 1
            const buttonText = t(`working.${buttonNumber}`)
            return (
              <WorkingButton
                key={`${rowIndex}-${colIndex}`}
                onPress={() => handlePress(buttonNumber)}
                onLongPress={() => handleLongPress(buttonText)}
                text={buttonText}
              />
            )
          })}
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-gray-800 bg-opacity-50">
          <View className="bg-white p-5 rounded-lg">
            <Text>{modalText}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default WorkingScreen
