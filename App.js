/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Provider } from 'react-native-paper'

// Navigators
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Amplify } from 'aws-amplify'

// Colors
import { theme } from './src/core/theme'

// Screens
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'
import ConfirmSignUpScreen from './src/screens/ConfirmSignUpScreen'
import CalculatorScreen from './src/screens/CalculatorScreen'
import TimerScreen from './src/screens/TimerScreen'
import MapsScreen from './src/screens/MapsScreen'
import AboutUsScreen from './src/screens/AboutUsScreen'

// Amplify
import awsconfig from './src/aws-exports'

// Configuring Amplify
Amplify.configure(awsconfig)

// Navigators
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function DashboardNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="About Us" component={AboutUsScreen} />
    </Drawer.Navigator>
  )
}

function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DashboardNavigation} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen
            name="ConfirmSignUpScreen"
            component={ConfirmSignUpScreen}
          />
          <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
          <Stack.Screen name="TimerScreen" component={TimerScreen} />
          <Stack.Screen name="MapsScreen" component={MapsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
