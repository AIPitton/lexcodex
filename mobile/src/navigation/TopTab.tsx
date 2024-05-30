import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LandingScreen from '../screens/LandingScreen'
import WorkingScreen from '../screens/WorkingScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
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
        name="Working"
        component={WorkingScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? iconColor : iconColorSelected
            return (
              <MaterialCommunityIcons
                name="menu"
                size={iconSize}
                color={color}
              />
            )
          },
        }}
      />
      {/* <Tab.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? iconColor : iconColorSelected
            return <FontAwesome6 name="book-open" size={20} color={color} />
          },
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? iconColor : iconColorSelected
            return <MaterialIcons name="settings" size={25} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default TopTab
