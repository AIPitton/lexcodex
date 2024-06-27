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
import {
  setBook,
  setConceal,
  setMax,
  setMin,
  setUpdateRequired,
} from '../features/main/mainSlice'
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
  const handleSwitch = (p0: number) => {
    switch (p0) {
      case 1:
        dispatch(setMin(0))
        dispatch(setMax(1533))
        dispatch(setBook(t('working.1')))
        break
      case 2:
        dispatch(setMin(1534))
        dispatch(setMax(2746))
        dispatch(setBook(t('working.2')))
        break
      case 3:
        dispatch(setMin(2747))
        dispatch(setMax(3605))
        dispatch(setBook(t('working.3')))
        break
      case 4:
        dispatch(setMin(3606))
        dispatch(setMax(4893))
        dispatch(setBook(t('working.4')))
        break
      case 5:
        dispatch(setMin(4894))
        dispatch(setMax(5852))
        dispatch(setBook(t('working.5')))
        break
      case 6:
        dispatch(setMin(5853))
        dispatch(setMax(6510))
        dispatch(setBook(t('working.6')))
        break
      case 7:
        dispatch(setMin(6511))
        dispatch(setMax(7128))
        dispatch(setBook(t('working.7')))
        break
      case 8:
        dispatch(setMin(7129))
        dispatch(setMax(7213))
        dispatch(setBook(t('working.8')))
        break
      case 9:
        dispatch(setMin(7214))
        dispatch(setMax(8024))
        dispatch(setBook(t('working.9')))
        break
      case 10:
        dispatch(setMin(8025))
        dispatch(setMax(8719))
        dispatch(setBook(t('working.10')))
        break
      case 11:
        dispatch(setMin(8720))
        dispatch(setMax(9536))
        dispatch(setBook(t('working.11')))
        break
      case 12:
        dispatch(setMin(9537))
        dispatch(setMax(10255))
        dispatch(setBook(t('working.12')))
        break
      case 13:
        dispatch(setMin(10256))
        dispatch(setMax(11197))
        dispatch(setBook(t('working.13')))
        break
      case 14:
        dispatch(setMin(11198))
        dispatch(setMax(12019))
        dispatch(setBook(t('working.14')))
        break
      case 15:
        dispatch(setMin(12020))
        dispatch(setMax(12299))
        dispatch(setBook(t('working.15')))
        break
      case 16:
        dispatch(setMin(12300))
        dispatch(setMax(12705))
        dispatch(setBook(t('working.16')))
        break
      case 17:
        dispatch(setMin(12706))
        dispatch(setMax(12872))
        dispatch(setBook(t('working.17')))
        break
      case 18:
        dispatch(setMin(12873))
        dispatch(setMax(13942))
        dispatch(setBook(t('working.18')))
        break
      case 19:
        dispatch(setMin(13943))
        dispatch(setMax(16469))
        dispatch(setBook(t('working.19')))
        break
      case 20:
        dispatch(setMin(16470))
        dispatch(setMax(17384))
        dispatch(setBook(t('working.20')))
        break
      case 21:
        dispatch(setMin(17385))
        dispatch(setMax(17606))
        dispatch(setBook(t('working.21')))
        break
      case 22:
        dispatch(setMin(17607))
        dispatch(setMax(17723))
        dispatch(setBook(t('working.22')))
        break
      case 23:
        dispatch(setMin(17724))
        dispatch(setMax(19015))
        dispatch(setBook(t('working.23')))
        break
      case 24:
        dispatch(setMin(19016))
        dispatch(setMax(20379))
        dispatch(setBook(t('working.24')))
        break
      case 25:
        dispatch(setMin(20380))
        dispatch(setMax(20533))
        dispatch(setBook(t('working.25')))
        break
      case 26:
        dispatch(setMin(20534))
        dispatch(setMax(21806))
        dispatch(setBook(t('working.26')))
        break
      case 27:
        dispatch(setMin(21807))
        dispatch(setMax(22162))
        dispatch(setBook(t('working.27')))
        break
      case 28:
        dispatch(setMin(22163))
        dispatch(setMax(22359))
        dispatch(setBook(t('working.28')))
        break
      case 29:
        dispatch(setMin(22360))
        dispatch(setMax(22432))
        dispatch(setBook(t('working.29')))
        break
      case 30:
        dispatch(setMin(22433))
        dispatch(setMax(22578))
        dispatch(setBook(t('working.30')))
        break
      case 31:
        dispatch(setMin(22579))
        dispatch(setMax(22599))
        dispatch(setBook(t('working.31')))
        break
      case 32:
        dispatch(setMin(22600))
        dispatch(setMax(22647))
        dispatch(setBook(t('working.32')))
        break
      case 33:
        dispatch(setMin(22648))
        dispatch(setMax(22752))
        dispatch(setBook(t('working.33')))
        break
      case 34:
        dispatch(setMin(22753))
        dispatch(setMax(22799))
        dispatch(setBook(t('working.34')))
        break
      case 35:
        dispatch(setMin(22800))
        dispatch(setMax(22855))
        dispatch(setBook(t('working.35')))
        break
      case 36:
        dispatch(setMin(22856))
        dispatch(setMax(22908))
        dispatch(setBook(t('working.36')))
        break
      case 37:
        dispatch(setMin(22909))
        dispatch(setMax(22946))
        dispatch(setBook(t('working.37')))
        break
      case 38:
        dispatch(setMin(22947))
        dispatch(setMax(23157))
        dispatch(setBook(t('working.38')))
        break
      case 39:
        dispatch(setMin(23158))
        dispatch(setMax(23212))
        dispatch(setBook(t('working.39')))
        break
      case 40:
        dispatch(setMin(23213))
        dispatch(setMax(24283))
        dispatch(setBook(t('working.40')))
        break
      case 41:
        dispatch(setMin(24284))
        dispatch(setMax(24961))
        dispatch(setBook(t('working.41')))
        break
      case 42:
        dispatch(setMin(24962))
        dispatch(setMax(26112))
        dispatch(setBook(t('working.42')))
        break
      case 43:
        dispatch(setMin(26113))
        dispatch(setMax(26991))
        dispatch(setBook(t('working.43')))
        break
      case 44:
        dispatch(setMin(26992))
        dispatch(setMax(27998))
        dispatch(setBook(t('working.44')))
        break
      case 45:
        dispatch(setMin(27999))
        dispatch(setMax(28431))
        dispatch(setBook(t('working.45')))
        break
      case 46:
        dispatch(setMin(28432))
        dispatch(setMax(28868))
        dispatch(setBook(t('working.46')))
        break
      case 47:
        dispatch(setMin(28869))
        dispatch(setMax(29124))
        dispatch(setBook(t('working.47')))
        break
      case 48:
        dispatch(setMin(29125))
        dispatch(setMax(29273))
        dispatch(setBook(t('working.48')))
        break
      case 49:
        dispatch(setMin(29274))
        dispatch(setMax(29428))
        dispatch(setBook(t('working.49')))
        break
      case 50:
        dispatch(setMin(29429))
        dispatch(setMax(29532))
        dispatch(setBook(t('working.50')))
        break
      case 51:
        dispatch(setMin(29533))
        dispatch(setMax(29627))
        dispatch(setBook(t('working.51')))
        break
      case 52:
        dispatch(setMin(29628))
        dispatch(setMax(29716))
        dispatch(setBook(t('working.52')))
        break
      case 53:
        dispatch(setMin(29717))
        dispatch(setMax(29763))
        dispatch(setBook(t('working.53')))
        break
      case 54:
        dispatch(setMin(29764))
        dispatch(setMax(29876))
        dispatch(setBook(t('working.54')))
        break
      case 55:
        dispatch(setMin(29877))
        dispatch(setMax(29959))
        dispatch(setBook(t('working.55')))
        break
      case 56:
        dispatch(setMin(29960))
        dispatch(setMax(30005))
        dispatch(setBook(t('working.56')))
        break
      case 57:
        dispatch(setMin(30006))
        dispatch(setMax(30030))
        dispatch(setBook(t('working.57')))
        break
      case 58:
        dispatch(setMin(30031))
        dispatch(setMax(30333))
        dispatch(setBook(t('working.58')))
        break
      case 59:
        dispatch(setMin(30334))
        dispatch(setMax(30441))
        dispatch(setBook(t('working.59')))
        break
      case 60:
        dispatch(setMin(30442))
        dispatch(setMax(30546))
        dispatch(setBook(t('working.60')))
        break
      case 61:
        dispatch(setMin(30547))
        dispatch(setMax(30607))
        dispatch(setBook(t('working.61')))
        break
      case 62:
        dispatch(setMin(30608))
        dispatch(setMax(30712))
        dispatch(setBook(t('working.62')))
        break
      case 63:
        dispatch(setMin(30713))
        dispatch(setMax(30725))
        dispatch(setBook(t('working.63')))
        break
      case 64:
        dispatch(setMin(30726))
        dispatch(setMax(30740))
        dispatch(setBook(t('working.64')))
        break
      case 65:
        dispatch(setMin(30741))
        dispatch(setMax(30765))
        dispatch(setBook(t('working.65')))
        break
      case 66:
        dispatch(setMin(30766))
        dispatch(setMax(31170))
        dispatch(setBook(t('working.66')))
        break
      default:
        break
    }
  }

  const {
    bookiliad,
    updateRequired,
    localesPersist,
    min,
    max,
    conceal,
    bookNo,
  } = useSelector((state: RootState) => state.main)
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
  useEffect(() => {
    if (bookNo) {
      handleSwitch(Number(bookNo))
    }
  }, [bookNo])
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

  useEffect(() => {
    console.log(bookNo)
  }, [bookNo])

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
      collectiveMd: {
        heading1: tw`text-r text-2xl font-bookerly`,
        heading2: tw`text-g text-xl font-bookerlyBold`,
        heading3: tw`text-B text-xl font-bookerlyBold`,
        heading4: tw`text-b text-xl font-bookerlyBold`,
        strong: tw`text-y`,
        em: tw`text-o`,
        text: tw`text-sb`,
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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default LandingScreen
