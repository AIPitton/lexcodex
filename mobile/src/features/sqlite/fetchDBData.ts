import { SQLiteDatabase } from 'react-native-sqlite-storage'
import { Dispatch } from 'redux'

export const fetchDBData = (
  database: SQLiteDatabase,
  min: number,
  max: number,
  setData: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; chapter: string }[]>
  >,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: Dispatch
) => {
  database.transaction((txn) => {
    txn.executeSql(
      'SELECT id, text, chapter FROM verses WHERE id >= ? AND id <= ?',
      [min, max],
      (sqlTxn, res) => {
        const fetchedData: { id: number; text: string; chapter: string }[] = []
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
      },
      (error) => {
        console.log('Error fetching data: ' + error.message)
        setIsLoading(false)
      }
    )
  })
}
