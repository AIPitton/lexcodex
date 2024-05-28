import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import i18next, { languageResources } from '../lib/i18next'
import { useTranslation } from 'react-i18next'
import languagesList from '../locales/languagesList.json'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { setLocalesPersist } from '../features/main/mainSlice'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SettingsRow from '../components/SettingsRow'
const SettingsScreen = () => {
  const { localesPersist } = useSelector((state: RootState) => state.main)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const changeLng = ({ lng }: { lng: string }) => {
    i18next.changeLanguage(lng)
    dispatch(setLocalesPersist(lng))
  }
  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }
  const changeBackground = () => {
    console.log('Not Implemented')
  }

  return (
    <View className="flex-1 py-4">
      <Modal animationType="fade" transparent={true} visible={isModalVisible}>
        <View className="flex-1 px-4 py-4 bg-W">
          <View className="w-full items-start">
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="close" size={32} color="grey" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={Object.keys(languageResources)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  const lng = item
                  changeLng({ lng })
                  toggleModal()
                }}
              >
                <Text className="text-3xl font-bookerlyBold text-center pb-4">
                  {(languagesList[item] as { nativeName: string }).nativeName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <SettingsRow onPress={toggleModal} text={t('settings.changeLanguage')} />
      <SettingsRow
        onPress={changeBackground}
        text={t('settings.changeFontSize')}
      />
      <SettingsRow
        onPress={changeBackground}
        text={t('settings.changeFontFamily')}
      />
      <SettingsRow
        onPress={changeBackground}
        text={t('settings.changeFontColor')}
      />
      <SettingsRow
        onPress={changeBackground}
        text={t('settings.changeBackground')}
      />
    </View>
  )
}

export default SettingsScreen
