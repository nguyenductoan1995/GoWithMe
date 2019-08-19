
import React, { Component } from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'
// import { StackViewStyleInterpolator } from 'react-navigation-stack'
import Home from 'screens/Home'
import Chat from 'screens/Chat'

export const AuthRoot = createStackNavigator(
  {
    Home,
    Chat,
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  },
)

class AppRoutes extends Component {
  state = {}

  render() {
    const App = createAppContainer(
      createSwitchNavigator(
        {
          Auth: AuthRoot,
        },
        {
          initialRouteName: 'Auth',
        },
      ),
    )
    return <App />
  }
}

export default AppRoutes
