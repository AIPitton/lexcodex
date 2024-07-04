import React, { useEffect, useRef, useState } from 'react'
import { View, Button, Modal, Text, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import i18next from '../lib/i18next'
import { urliliad, urlUpdateRequired } from '../utils/constants'
import { createOverwriteDownload } from '../features/update/createOverwriteDownload'
import { getDownloadPermissionAndroid } from '../features/download/downloadPermission'
import { setUpdateRequired } from '../features/main/mainSlice'
import TopButtons from '../components/TopButtons'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import DataList from '../features/data/DataList'
import useSwitchHandler from '../features/switch/useSwitchHandler'
import ChapterButton from '../components/ChapterButton'
import TotalChapters from '../utils/TotalChapters'

const LandingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  const { updateRequired, localesPersist, min, max, bookNo } = useSelector(
    (state: RootState) => state.main
  )
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isFirstRender = useRef(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [chapterButtons, setChapterButtons] = useState<number[]>([])
  const [update, setUpdate] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { switchHandler } = useSwitchHandler()

  useEffect(() => {
    if (bookNo) {
      switchHandler(Number(bookNo))
    }
  }, [bookNo, switchHandler])

  const askPermission = () => {
    if (Platform.OS === 'android') {
      getDownloadPermissionAndroid().then(async (granted) => {
        if (granted) {
          dispatch(setUpdateRequired(update)),
            setIsModalVisible(false),
            await createOverwriteDownload(urliliad)
          navigation.navigate('Working')
        } else {
          console.log('Permission denied')
        }
      })
    }
  }

  useEffect(() => {
    if (localesPersist) {
      i18next.changeLanguage(localesPersist)
    }
  }, [localesPersist])

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(urlUpdateRequired)
        const data = await response.json()
        console.log('The version value from version.json:', data[0].version)
        setUpdate(data[0].version)
        console.log('The version value from local updateRequired')
        console.log(updateRequired)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }
    fetchVersion()
  }, [])

  const modalVisibility = async (p0: { update: number }) => {
    if (update !== updateRequired) {
      setIsModalVisible(true)
    } else {
      setIsModalVisible(false)
    }
  }

  useEffect(() => {
    if (!isFirstRender.current) {
      modalVisibility({ update })
    }
    isFirstRender.current = false
  }, [update])

  const handleOpenModalForCurrentBook = () => {
    const totalChapters = TotalChapters[bookNo.toString()] || 'Unknown'
    const buttonText = t(`working.${bookNo}`)
    setModalText(`${buttonText}: ${totalChapters} chapters`)

    const chapters = Array.from(
      { length: Number(totalChapters) },
      (_, i) => i + 1
    )
    setChapterButtons(chapters)

    setIsModalVisible(true)
  }

  return (
    <View className="flex-1">
      <TopButtons
        navigation={navigation}
        openModalForCurrentBook={handleOpenModalForCurrentBook}
      />
      <Button title="Download" onPress={() => askPermission()} />
      <DataList min={min} max={max} searchQuery={''} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-gray-800 bg-opacity-50">
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
          <Text>{modalText}</Text>
          {[...Array(Math.ceil(chapterButtons.length / 6))].map(
            (_, rowIndex) => (
              <View
                key={rowIndex}
                className="flex-row items-center justify-center"
              >
                {[...Array(6)].map((_, colIndex) => {
                  const buttonIndex = rowIndex * 6 + colIndex
                  const chapterNumber = chapterButtons[buttonIndex]
                  if (chapterNumber == null) {
                    return (
                      <View key={`empty-${buttonIndex}`} className="flex-1" />
                    )
                  }
                  return (
                    <ChapterButton
                      key={chapterNumber}
                      onPress={() =>
                        console.log(`Chapter ${chapterNumber} pressed`)
                      }
                      text={`${chapterNumber}`}
                    />
                  )
                })}
              </View>
            )
          )}
        </View>
      </Modal>
    </View>
  )
}

export default LandingScreen
