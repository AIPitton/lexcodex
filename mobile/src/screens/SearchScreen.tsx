import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import TopButtons from '../components/TopButtons'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import DataList from '../features/data/DataList'
import { useDispatch } from 'react-redux'
import { setMin, setMax } from '../features/main/mainSlice'

const SearchScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(setMin(0))
    dispatch(setMax(31170))
  }, [dispatch])

  return (
    <View className="flex-1">
      <TopButtons navigation={navigation} />
      <View className="p-4">
        <TextInput
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        />
      </View>
      <DataList min={0} max={31170} searchQuery={searchQuery} />
    </View>
  )
}

export default SearchScreen
