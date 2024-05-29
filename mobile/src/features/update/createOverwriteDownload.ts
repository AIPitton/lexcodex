import RNFetchBlob from 'react-native-blob-util'
import { Platform, PermissionsAndroid, ToastAndroid } from 'react-native'
import RNFS from 'react-native-fs'

export const createOverwriteDownload = async (
  url: string,
  folderName = 'LexCodex',
  isTemp = false
) => {
  const filename = url.split('/').pop()
  try {
    const configOptions = { fileCache: true }
    return RNFetchBlob.config(configOptions)
      .fetch('GET', url)
      .then(async (res) => {
        const base64Data = await res.readFile('base64')
        if (isTemp) {
          return {
            base64Data,
            filePath: res.path(),
          }
        }
        //create folder
        const folderPath = RNFS.ExternalStorageDirectoryPath + `/${folderName}`
        await createFolder(folderPath)
        //create or overwrite file
        return RNFS.writeFile(
          RNFS.ExternalStorageDirectoryPath + `/${folderName}/${filename}`,
          base64Data,
          'base64'
        )
          .then(() => ToastAndroid.show('File downloaded', ToastAndroid.SHORT))
          .catch(() =>
            ToastAndroid.show('Error downloading file', ToastAndroid.SHORT)
          )
      })
      .catch((err) => {
        console.log(err)
      })
  } catch (error) {
    console.error('Error downloading or writing file:', error)
    return null
  }
}

// Function to create folder (if needed)
const createFolder = async (folderPath: any) => {
  try {
    const folderExists = await RNFS.exists(folderPath)
    if (!folderExists) {
      await RNFS.mkdir(folderPath)
      console.log('Folder created:', folderPath)
    } else {
      console.log('Folder already exists:', folderPath)
    }
  } catch (error) {
    console.error('Error creating folder:', error)
  }
}
