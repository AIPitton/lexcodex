import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'

const WorkingButton = ({
  onPress,
  onLongPress,
  text,
}: {
  onPress: () => void
  onLongPress: () => void
  text: string
}) => {
  const toast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.LONG)
  }
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        className="w-full h-full items-center justify-center rounded-2xl border-2 border-W bg-s"
      >
        <Text className="text-W text-l font-bold">{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WorkingButton
