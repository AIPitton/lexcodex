import React, { useEffect, useState, useRef, useCallback } from 'react'
import {
  View,
  Text,
  FlatList,
  Platform,
  ActivityIndicator,
  Button,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import i18next from '../lib/i18next'
import { urliliad, urlUpdateRequired } from '../utils/constants'
import { createOverwriteDownload } from '../features/update/createOverwriteDownload'
import { getDownloadPermissionAndroid } from '../features/download/downloadPermission'
import RNFS from 'react-native-fs'
import { setConceal, setUpdateRequired } from '../features/main/mainSlice'
import TopButtons from '../components/TopButtons'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage'
import Markdown from 'react-native-markdown-package'
import tw from '../lib/tailwind'
const LandingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  const { bookiliad, updateRequired, localesPersist, min, max, conceal } =
    useSelector((state: RootState) => state.main)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isFirstRender = useRef(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [update, setUpdate] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<
    {
      chapter: string
      id: number
      text: string
    }[]
  >([])
  const [db, setDb] = useState<SQLiteDatabase | null>(null)

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

  useEffect(() => {
    fetchData()
  }, [min, max])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const baseDirectory =
        Platform.OS === 'ios'
          ? RNFS.CachesDirectoryPath
          : RNFS.ExternalStorageDirectoryPath
      const filePath = `${baseDirectory}/LexCodex/book.sqlite3`
      const database = await openDatabase({
        name: filePath,
        location: 'default',
      })
      setDb(database)
      fetchDBData(database)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false)
    }
  }

  const fetchDBData = (database: SQLiteDatabase) => {
    database.transaction((txn) => {
      txn.executeSql(
        'SELECT id, text, chapter FROM verses WHERE id >= ? AND id <= ?',
        [min, max],
        (sqlTxn, res) => {
          const fetchedData: { id: number; text: string; chapter: string }[] =
            []
          for (let i = 0; i < res.rows.length; i++) {
            let item = res.rows.item(i)
            fetchedData.push({
              id: item.id,
              text: item.text,
              chapter: item.chapter,
            })
          }
          setData(fetchedData)
          setIsLoading(false)
          dispatch(setConceal(false))
        },
        (error) => {
          console.log('Error fetching categories: ' + error.message)
          setIsLoading(false)
        }
      )
    })
  }

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    const showChapter = index === 0 || item.chapter !== data[index - 1].chapter
    const markdownStyle = {
      singleLineMd: {
        text: tw`text-blue-500 text-right`,
        view: tw`self-stretch`,
      },
      collectiveMd: {
        heading1: tw`text-b text-2xl font-bookerly`,
        heading2: tw`text-green-500 text-right`,
        strong: tw`text-blue-500`,
        em: tw`text-cyan-500`,
        text: tw`text-black`,
        blockQuoteText: tw`text-gray-500`,
        blockQuoteSection: tw`flex-row`,
        blockQuoteSectionBar: tw`w-3 h-auto bg-gray-300 mr-4`,
        codeBlock: [tw`font-mono font-semibold bg-gray-300`],
        tableHeader: tw`bg-gray-500`,
      },
    }
    return (
      <View>
        {showChapter && (
          <Text className="text-lg font-bold justify-center items-start pr-2 mt-1 ml-1">
            Chapter {item.chapter}
          </Text>
        )}
        <View className="flex-row justify-start items-start">
          <Text className="text-sm font-bookerlyBold justify-center items-start text-center pr-2 mt-1 ml-1">
            {item.id}
          </Text>
          <Markdown styles={markdownStyle.collectiveMd}>{item.text}</Markdown>
        </View>
      </View>
    )
  }

  return (
    <View className="flex-1">
      <TopButtons navigation={navigation} />
      <Button title="Download" onPress={() => askPermission()} />
      {conceal ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  )
}

export default LandingScreen
