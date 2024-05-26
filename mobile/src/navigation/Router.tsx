import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingScreen from '../screens/LandingScreen'
import WorkingScreen from '../screens/WorkingScreen'
import TopTab from './TopTab'

export type RootStackParamList = {
  Home: undefined
  Landing: { unit: string }
  Work: { unit: string }
}
const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}
      >
        <Stack.Screen
          name="Home"
          component={TopTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Work" component={WorkingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
