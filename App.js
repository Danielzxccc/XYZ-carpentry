import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProjectsScreen from './screens/ProjectsScreen'
import { useAuthStore } from './store/AuthStore'
import ServicesScreen from './screens/ServicesScreen'
import { useTheme } from 'react-native-paper'

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}

function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#e91e63'
      style={{ height: 40 }}
      inactiveColor='#ffffff'
      barStyle={{ backgroundColor: '#36282b', height: 70 }}
      screenOptions={{ headerShown: false }}
      labeled={false}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='home'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Projects'
        component={ProjectsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='note-edit-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Services'
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='tools'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const theme = useTheme()
  theme.colors.secondaryContainer = 'transperent'

  const token = useAuthStore((state) => state.userToken)

  return (
    <>
      <NavigationContainer>
        {token ? <AppStack /> : <LoginStack />}
      </NavigationContainer>
    </>
  )
}
