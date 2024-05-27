import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'

const Button = () => {
  const toast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.LONG)
  }
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={() => toast('Button pressed!')}
        className="w-full h-full items-center justify-center rounded-2xl border-2 border-W bg-s"
      />
    </View>
  )
}

export default Button
