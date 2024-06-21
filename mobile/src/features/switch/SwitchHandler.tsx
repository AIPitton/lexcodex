// SwitchHandler.tsx

import { useDispatch } from 'react-redux'
import { NavigationProp } from '@react-navigation/native'
import { setMin, setMax, setConceal, setBook } from '../main/mainSlice'
import { useTranslation } from 'react-i18next'

interface SwitchHandlerProps {
  p0: number
  navigation: NavigationProp<any>
}

const SwitchHandler = ({ p0, navigation }: SwitchHandlerProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const handleSwitch = (p0: number) => {
    switch (p0) {
      case 1:
        dispatch(setMin(0))
        dispatch(setMax(1533))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.1')))
        break
      case 2:
        dispatch(setMin(1534))
        dispatch(setMax(2746))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.2')))
        break
      case 3:
        dispatch(setMin(2747))
        dispatch(setMax(3605))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.3')))
        break
      case 4:
        dispatch(setMin(3606))
        dispatch(setMax(4893))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.4')))
        break
      case 5:
        dispatch(setMin(4894))
        dispatch(setMax(5852))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.5')))
        break
      case 6:
        dispatch(setMin(5853))
        dispatch(setMax(6510))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.6')))
        break
      case 7:
        dispatch(setMin(6511))
        dispatch(setMax(7128))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.7')))
        break
      case 8:
        dispatch(setMin(7129))
        dispatch(setMax(7213))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.8')))
        break
      case 9:
        dispatch(setMin(7214))
        dispatch(setMax(8024))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.9')))
        break
      case 10:
        dispatch(setMin(8025))
        dispatch(setMax(8719))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.10')))
        break
      case 11:
        dispatch(setMin(8720))
        dispatch(setMax(9536))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.11')))
        break
      case 12:
        dispatch(setMin(9537))
        dispatch(setMax(10255))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.12')))
        break
      case 13:
        dispatch(setMin(10256))
        dispatch(setMax(11197))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.13')))
        break
      case 14:
        dispatch(setMin(11198))
        dispatch(setMax(12019))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.14')))
        break
      case 15:
        dispatch(setMin(12020))
        dispatch(setMax(12299))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.15')))
        break
      case 16:
        dispatch(setMin(12300))
        dispatch(setMax(12705))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.16')))
        break
      case 17:
        dispatch(setMin(12706))
        dispatch(setMax(12872))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.17')))
        break
      case 18:
        dispatch(setMin(12873))
        dispatch(setMax(13942))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.18')))
        break
      case 19:
        dispatch(setMin(13943))
        dispatch(setMax(16469))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.19')))
        break
      case 20:
        dispatch(setMin(16470))
        dispatch(setMax(17384))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.20')))
        break
      case 21:
        dispatch(setMin(17385))
        dispatch(setMax(17606))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.21')))
        break
      case 22:
        dispatch(setMin(17607))
        dispatch(setMax(17723))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.22')))
        break
      case 23:
        dispatch(setMin(17724))
        dispatch(setMax(19015))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.23')))
        break
      case 24:
        dispatch(setMin(19016))
        dispatch(setMax(20379))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.24')))
        break
      case 25:
        dispatch(setMin(20380))
        dispatch(setMax(20533))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.25')))
        break
      case 26:
        dispatch(setMin(20534))
        dispatch(setMax(21806))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.26')))
        break
      case 27:
        dispatch(setMin(21807))
        dispatch(setMax(22162))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.27')))
        break
      case 28:
        dispatch(setMin(22163))
        dispatch(setMax(22359))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.28')))
        break
      case 29:
        dispatch(setMin(22360))
        dispatch(setMax(22432))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.29')))
        break
      case 30:
        dispatch(setMin(22433))
        dispatch(setMax(22578))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.30')))
        break
      case 31:
        dispatch(setMin(22579))
        dispatch(setMax(22599))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.31')))
        break
      case 32:
        dispatch(setMin(22600))
        dispatch(setMax(22647))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.32')))
        break
      case 33:
        dispatch(setMin(22648))
        dispatch(setMax(22752))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.33')))
        break
      case 34:
        dispatch(setMin(22753))
        dispatch(setMax(22799))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.34')))
        break
      case 35:
        dispatch(setMin(22800))
        dispatch(setMax(22855))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.35')))
        break
      case 36:
        dispatch(setMin(22856))
        dispatch(setMax(22908))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.36')))
        break
      case 37:
        dispatch(setMin(22909))
        dispatch(setMax(22946))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.37')))
        break
      case 38:
        dispatch(setMin(22947))
        dispatch(setMax(23157))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.38')))
        break
      case 39:
        dispatch(setMin(23158))
        dispatch(setMax(23212))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.39')))
        break
      case 40:
        dispatch(setMin(23213))
        dispatch(setMax(24283))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.40')))
        break
      case 41:
        dispatch(setMin(24284))
        dispatch(setMax(24961))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.41')))
        break
      case 42:
        dispatch(setMin(24962))
        dispatch(setMax(26112))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.42')))
        break
      case 43:
        dispatch(setMin(26113))
        dispatch(setMax(26991))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.43')))
        break
      case 44:
        dispatch(setMin(26992))
        dispatch(setMax(27998))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.44')))
        break
      case 45:
        dispatch(setMin(27999))
        dispatch(setMax(28431))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.45')))
        break
      case 46:
        dispatch(setMin(28432))
        dispatch(setMax(28868))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.46')))
        break
      case 47:
        dispatch(setMin(28869))
        dispatch(setMax(29124))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.47')))
        break
      case 48:
        dispatch(setMin(29125))
        dispatch(setMax(29273))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.48')))
        break
      case 49:
        dispatch(setMin(29274))
        dispatch(setMax(29428))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.49')))
        break
      case 50:
        dispatch(setMin(29429))
        dispatch(setMax(29532))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.50')))
        break
      case 51:
        dispatch(setMin(29533))
        dispatch(setMax(29627))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.51')))
        break
      case 52:
        dispatch(setMin(29628))
        dispatch(setMax(29716))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.52')))
        break
      case 53:
        dispatch(setMin(29717))
        dispatch(setMax(29763))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.53')))
        break
      case 54:
        dispatch(setMin(29764))
        dispatch(setMax(29876))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.54')))
        break
      case 55:
        dispatch(setMin(29877))
        dispatch(setMax(29959))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.55')))
        break
      case 56:
        dispatch(setMin(29960))
        dispatch(setMax(30005))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.56')))
        break
      case 57:
        dispatch(setMin(30006))
        dispatch(setMax(30030))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.57')))
        break
      case 58:
        dispatch(setMin(30031))
        dispatch(setMax(30333))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.58')))
        break
      case 59:
        dispatch(setMin(30334))
        dispatch(setMax(30441))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.59')))
        break
      case 60:
        dispatch(setMin(30442))
        dispatch(setMax(30546))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.60')))
        break
      case 61:
        dispatch(setMin(30547))
        dispatch(setMax(30607))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.61')))
        break
      case 62:
        dispatch(setMin(30608))
        dispatch(setMax(30712))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.62')))
        break
      case 63:
        dispatch(setMin(30713))
        dispatch(setMax(30725))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.63')))
        break
      case 64:
        dispatch(setMin(30726))
        dispatch(setMax(30740))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.64')))
        break
      case 65:
        dispatch(setMin(30741))
        dispatch(setMax(30765))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.65')))
        break
      case 66:
        dispatch(setMin(30766))
        dispatch(setMax(31170))
        navigation.navigate('Landing')
        dispatch(setConceal(true))
        dispatch(setBook(t('working.66')))
        break
      default:
        break
    }
  }

  handleSwitch(p0)
  return null
}

export default SwitchHandler
