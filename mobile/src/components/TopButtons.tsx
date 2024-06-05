import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'

import { iconSize } from '../utils/constants'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
const TopButtons = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  return (
    <View className="flex-row h-909 items-center justify-center">
      <TouchableOpacity
        onPress={() => navigation.navigate('TopTab')}
        className="flex-1 items-center justify-center"
      >
        <MaterialCommunityIcons name="menu" size={iconSize} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TopTab')}
        className="flex-1 items-center justify-center"
      >
        <AntDesign name="close" size={iconSize} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TopTab')}
        className="flex-1 items-center justify-center"
      >
        <MaterialCommunityIcons name="less-than" size={iconSize} color="grey" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('TopTab')}
        className="flex-1 items-center justify-center"
      >
        <MaterialCommunityIcons
          name="greater-than"
          size={iconSize}
          color="grey"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TopTab')}
        className="flex-1 items-center justify-center"
      >
        <Ionicons name="search" size={iconSize} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('first')}
        className="flex-1 items-center justify-center"
      >
        <Octicons name="plus" size={iconSize} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TopTab')}
        className="flex-1 items-center justify-center"
      >
        <MaterialCommunityIcons
          name="dots-vertical"
          size={iconSize}
          color="grey"
        />
      </TouchableOpacity>
    </View>
  )
}

export default TopButtons
