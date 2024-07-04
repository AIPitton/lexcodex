import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'

const ChapterButton = ({
  onPress,
  text,
}: {
  onPress: () => void
  text: string
}) => {
  const toast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.LONG)
  }
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={onPress}
        className="w-full h-8 items-center justify-center rounded-2xl border-2 border-W bg-s"
      >
        <Text className="text-W text-l font-bold">{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChapterButton
