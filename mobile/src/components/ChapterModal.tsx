import React from 'react'
import { View, Text, Modal, Button } from 'react-native'
import ChapterButton from './ChapterButton'

type ChapterModalProps = {
  visible: boolean
  onClose: () => void
  modalText: string
  chapterButtons: number[]
  onPressChapter: (chapterNumber: number) => void
}

const ChapterModal: React.FC<ChapterModalProps> = ({
  visible,
  onClose,
  modalText,
  chapterButtons,
  onPressChapter,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-gray-800 bg-opacity-50">
        <Button title="Close" onPress={onClose} />
        <Text>{modalText}</Text>
        {[...Array(Math.ceil(chapterButtons.length / 6))].map((_, rowIndex) => (
          <View key={rowIndex} className="flex-row items-center justify-center">
            {[...Array(6)].map((_, colIndex) => {
              const buttonIndex = rowIndex * 6 + colIndex
              const chapterNumber = chapterButtons[buttonIndex]
              if (chapterNumber == null) {
                return <View key={`empty-${buttonIndex}`} className="flex-1" />
              }
              return (
                <ChapterButton
                  key={chapterNumber}
                  onPress={() => onPressChapter(chapterNumber)}
                  text={`${chapterNumber}`}
                />
              )
            })}
          </View>
        ))}
      </View>
    </Modal>
  )
}

export default ChapterModal
