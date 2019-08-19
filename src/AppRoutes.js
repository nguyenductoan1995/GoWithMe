
import React, { Component } from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation'
import Home from 'screens/Home'
import Chat from 'screens/Chat'
import Drawer from 'components/Drawer'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')


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

const drawer = createDrawerNavigator({
  Home: AuthRoot,
},
{
  initialRouteName: 'Home',
  contentComponent: Drawer,
  contentOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#ffffff',

    activeBackgroundColor: '#fedb00',
  //  inactiveBackgroundColor: '#ffffff',
  },
  drawerType: 'slide',
  overlayColor: 0,
  hideStatusBar: true,
  drawerWidth: width * 0.77,
},
)

class AppRoutes extends Component {
  state = {}

  render() {
    const App = createAppContainer(
      createSwitchNavigator(
        {
          drawer,
        },
        {
          initialRouteName: 'drawer',
        },
      ),
    )
    return <App />
  }
}

export default AppRoutes
