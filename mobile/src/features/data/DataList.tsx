import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import RNFS from 'react-native-fs'
import { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage'
import Markdown from 'react-native-markdown-package'
import tw from '../../lib/tailwind'
import { useDispatch } from 'react-redux'
import { fetchDBData } from '../sqlite/fetchDBData'
import Clipboard from '@react-native-clipboard/clipboard'

const DataList = ({
  min,
  max,
  searchQuery,
}: {
  min: number
  max: number
  searchQuery: string
}) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<
    {
      chapter: string
      id: number
      text: string
    }[]
  >([])
  const [filteredData, setFilteredData] = useState<
    {
      chapter: string
      id: number
      text: string
    }[]
  >([])
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())
  const [db, setDb] = useState<SQLiteDatabase | null>(null)

  useEffect(() => {
    fetchData()
  }, [min, max])

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter((item) =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredData(filtered)
    } else {
      setFilteredData(data)
    }
  }, [searchQuery, data])

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
      fetchDBData(database, min, max, setData, setIsLoading, dispatch)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false)
    }
  }

  const handlePress = (id: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows)
      if (newSelectedRows.has(id)) {
        newSelectedRows.delete(id)
      } else {
        newSelectedRows.add(id)
      }
      return newSelectedRows
    })
  }

  const handleLongPress = () => {
    const selectedText = Array.from(selectedRows)
      .map((rowId) => {
        const row = data.find((item) => item.id === rowId)
        return row ? row.text : ''
      })
      .join('\n')
    Clipboard.setString(selectedText)
    setSelectedRows(new Set())
    console.log(selectedText)
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
      <TouchableOpacity
        onPress={() => handlePress(item.id)}
        onLongPress={() => handleLongPress()}
        style={{
          backgroundColor: selectedRows.has(item.id) ? 'lightgray' : 'white',
        }}
      >
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
      </TouchableOpacity>
    )
  }

  return (
    <View className="flex-1">
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  )
}

export default DataList
