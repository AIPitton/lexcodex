import { View } from 'react-native'
import React from 'react'
import WorkingButton from '../components/WorkingButton'

const WorkingScreen = () => {
  const handlePress = (p0: number) => {
    switch (p0) {
      case 1:
        console.log('Button 1 pressed!')
        break
      case 2:
        console.log('Button 2 pressed!')
        break
      case 3:
        console.log('Button 3 pressed!')
        break
      default:
        console.log('Other button pressed!')
    }
  }
  return (
    <View className="flex-1 items-center justify-center">
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
