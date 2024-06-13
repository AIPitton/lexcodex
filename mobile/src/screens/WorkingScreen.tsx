import { Platform, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import WorkingButton from '../components/WorkingButton'
import { setBookiliad, setMax, setMin } from '../features/main/mainSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import RNFS from 'react-native-fs'
import { use } from 'i18next'
import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Router'
import TopButtons from '../components/TopButtons'
import { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage'
const WorkingScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>
}) => {
  const { bookiliad, min, max } = useSelector((state: RootState) => state.main)

  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const isFirstRender = useRef(true)
  const [db, setDb] = useState<SQLiteDatabase | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseDirectory =
          Platform.OS === 'ios'
            ? RNFS.CachesDirectoryPath
            : RNFS.ExternalStorageDirectoryPath
        const filePath = `${baseDirectory}/LexCodex/iliad.db`
        const database = await openDatabase({
          name: filePath,
          location: 'default',
        })
        setDb(database)
        consoleLogDB(database)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const consoleLogDB = (database: SQLiteDatabase) => {
    database.transaction((txn) => {
      txn.executeSql(
        `SELECT id, text FROM iliad`,
        [],
        (sqlTxn, res) => {
          console.log('Data in DB:')
          let len = res.rows.length
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i)
            console.log(`id: ${item.id}, Text: ${item.text}`)
          }
        },
        (error) => {
          console.log('Error fetching categories: ' + error.message)
        }
      )
    })
  }
  const handleFilter = async ({ min, max }) => {
    const filteredData = await data.filter(
      (item) => item.id > min && item.id <= max
    )
    dispatch(setBookiliad(filteredData))
    navigation.navigate('Landing')
  }

  const handlePress = (p0: number) => {
    switch (p0) {
      case 1:
        dispatch(setMin(0))
        dispatch(setMax(100))
        handleFilter({ min, max })
        break
      case 2:
        dispatch(setMin(99))
        dispatch(setMax(200))
        handleFilter({ min, max })
        break
      case 3:
        dispatch(setMin(199))
        dispatch(setMax(300))
        handleFilter({ min, max })
        break
      default:
        console.log('Other button pressed!')
    }
  }
  useEffect(() => {
    if (!isFirstRender.current) {
      handleFilter({ min, max })
    }
    isFirstRender.current = false
  }, [min, max])
  return (
    <View className="flex-1 items-center justify-center">
      <TopButtons navigation={navigation} />
      {[...Array(11)].map((_, rowIndex) => (
        <View
          key={rowIndex}
          className="flex-1 flex-row items-center justify-center "
        >
          {[...Array(6)].map((_, colIndex) => (
            <WorkingButton
              key={`${rowIndex}-${colIndex}`}
              onPress={() => handlePress(rowIndex * 6 + colIndex + 1)}
              text={`${rowIndex * 6 + colIndex + 1}`}
            />
          ))}
        </View>
      ))}
    </View>
  )
}

export default WorkingScreen
