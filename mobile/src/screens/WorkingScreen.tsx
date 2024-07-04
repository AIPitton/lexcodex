import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native'
import WorkingButton from '../components/WorkingButton'
import ChapterButton from '../components/ChapterButton'
import { setBookNo } from '../features/main/mainSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useTranslation } from 'react-i18next'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import TopButtons from '../components/TopButtons'
import TotalChapters from '../utils/TotalChapters'

const WorkingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  const { book, bookNo } = useSelector((state: RootState) => state.main)

  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [pressedButton, setPressedButton] = useState<number | null>(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [chapterButtons, setChapterButtons] = useState<number[]>([])

  const handlePress = (buttonNumber: number) => {
    navigation.navigate('Landing')
    dispatch(setBookNo(buttonNumber))
  }

  const handleLongPress = (buttonNumber: number) => {
    const totalChapters = TotalChapters[buttonNumber.toString()] || 'Unknown'
    const buttonText = t(`working.${buttonNumber}`)
    setModalText(`${buttonText}: ${totalChapters} chapters`)

    const chapters = Array.from(
      { length: Number(totalChapters) },
      (_, i) => i + 1
    )
    setChapterButtons(chapters)

    setModalVisible(true)
  }

  const handlePressRef = (chapterNumber: number) => {
    console.log(`Chapter ${chapterNumber} pressed`)
  }

  const handleOpenModalForCurrentBook = () => {
    const totalChapters = TotalChapters[bookNo.toString()] || 'Unknown'
    const buttonText = t(`working.${bookNo}`)
    setModalText(`${buttonText}: ${totalChapters} chapters`)

    const chapters = Array.from(
      { length: Number(totalChapters) },
      (_, i) => i + 1
    )
    setChapterButtons(chapters)

    setModalVisible(true)
  }

  return (
    <View className="flex-1 items-center justify-center">
      <TopButtons
        navigation={navigation}
        openModalForCurrentBook={handleOpenModalForCurrentBook}
      />
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
                onLongPress={() => handleLongPress(buttonNumber)}
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
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <Text>{modalText}</Text>
          {[...Array(Math.ceil(chapterButtons.length / 6))].map(
            (_, rowIndex) => (
              <View
                key={rowIndex}
                className="flex-row items-center justify-center"
              >
                {[...Array(6)].map((_, colIndex) => {
                  const buttonIndex = rowIndex * 6 + colIndex
                  const chapterNumber = chapterButtons[buttonIndex]
                  if (chapterNumber == null) {
                    return (
                      <View key={`empty-${buttonIndex}`} className="flex-1" />
                    )
                  }
                  return (
                    <ChapterButton
                      key={chapterNumber}
                      onPress={() => handlePressRef(chapterNumber)}
                      text={`${chapterNumber}`}
                    />
                  )
                })}
              </View>
            )
          )}
        </View>
      </Modal>
    </View>
  )
}

export default WorkingScreen
