import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TopTab from './TopTab'
import LandingScreen from '../screens/LandingScreen'

export type RootStackParamList = {
  TopTab: undefined
  Landing: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopTab"
          component={TopTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
