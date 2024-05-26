import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LandingScreen from '../screens/LandingScreen'
import WorkingScreen from '../screens/WorkingScreen'
import LanguageScreen from '../screens/LanguageScreen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { iconSize, iconColor, iconColorSelected } from '../utils/constants'
// import { createStackNavigator } from '@react-navigation/stack'

const Tab = createMaterialTopTabNavigator()

const TopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Landing"
      screenOptions={{ tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? iconColor : iconColorSelected
            return (
              <FontAwesome6 name="book-open" size={iconSize} color={color} />
            )
          },
        }}
      />
      <Tab.Screen
        name="Work"
        component={WorkingScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? iconColor : iconColorSelected
            return <FontAwesome5 name="hammer" size={iconSize} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? iconColor : iconColorSelected
            return (
              <FontAwesome6 name="language" size={iconSize} color={color} />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default TopTab
