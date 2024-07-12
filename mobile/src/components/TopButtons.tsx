import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import { iconSize } from '../utils/constants'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { setBookNo } from '../features/main/mainSlice'
import CountryFlag from 'react-native-country-flag'
import { useTranslation } from 'react-i18next'
const TopButtons = ({
  navigation,
  openModalForCurrentBook,
}: {
  navigation: NavigationProp<RootStackParamList>
  openModalForCurrentBook: () => void
}) => {
  const { t } = useTranslation()
  const { book, bookNo } = useSelector((state: RootState) => state.main)
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('de')

  const countryOptions = [
    { label: t('topbuttons.deLanguage'), value: 'de' },
    { label: t('topbuttons.roLanguage'), value: 'ro' },
    { label: t('topbuttons.huLanguage'), value: 'hu' },
  ]

  const handleCountrySelect = (value: string) => {
    setSelectedCountry(value)
    setIsModalVisible(false)
  }

  return (
    <View className="flex-row h-909 items-center justify-center">
      <TouchableOpacity
        onPress={() => navigation.navigate('Working')}
        className="flex-1 items-center justify-center"
      >
        <MaterialCommunityIcons name="menu" size={iconSize} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openModalForCurrentBook}
        className="flex-1 items-center justify-center"
      >
        <Text>{book}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (bookNo > 1) {
            dispatch(setBookNo(bookNo - 1))
          }
        }}
        className="flex-1 items-center justify-center"
      >
        <MaterialCommunityIcons name="less-than" size={iconSize} color="grey" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (bookNo < 66) {
            dispatch(setBookNo(bookNo + 1))
          }
        }}
        className="flex-1 items-center justify-center"
      >
        <MaterialCommunityIcons
          name="greater-than"
          size={iconSize}
          color="grey"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
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
        onPress={() => setIsModalVisible(true)}
        className="flex-1 items-center justify-center"
      >
        <CountryFlag isoCode={selectedCountry} size={20} />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 items-center justify-center">
          <View className="justify-center bg-gr rounded-2xl">
            {countryOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                className="flex-row py-2 px-2"
                onPress={() => handleCountrySelect(option.value)}
              >
                <CountryFlag isoCode={option.value} size={20} />
                <Text className="text-xl items-center mx-2 justify-center">
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
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
