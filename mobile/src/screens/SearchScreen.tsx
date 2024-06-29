import { View, Text } from 'react-native'
import React from 'react'
import TopButtons from '../components/TopButtons'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'

const SearchScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <TopButtons navigation={navigation} />
      <View className="flex-1 items-center justify-center">
        <Text>Search Screen</Text>
      </View>
    </View>
  )
}

export default SearchScreen
