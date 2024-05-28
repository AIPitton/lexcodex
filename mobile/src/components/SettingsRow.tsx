import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTranslation } from 'react-i18next'

const SettingsRow = ({
  onPress,
  text,
}: {
  onPress: () => void
  text: string
}) => {
  const { t } = useTranslation()
  return (
    <View className="">
      <TouchableOpacity onPress={onPress} className="flex-row ">
        <View className="flex-1 px-4  justify-center ">
          <Text className="text-2xl font-bookerlyBold text-pb ">{text}</Text>
        </View>
        <View className=" px-4 items-end justify-center ">
          <MaterialCommunityIcons name="greater-than" size={20} color="grey" />
        </View>
      </TouchableOpacity>
      <View className="items-center py-4">
        <View className=" w-11/12 border-t border-gr" />
      </View>
    </View>
  )
}

export default SettingsRow
