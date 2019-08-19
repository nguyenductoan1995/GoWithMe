import React from 'react'
import { View, StatusBar } from 'react-native'
import Loader from 'screens/Loader'
import AppRoutes from 'AppRoutes'
import 'utils/configMoment'
// import codePush from 'react-native-code-push'

class LoadingAsync extends React.Component {
  state = {}

  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <AppRoutes />
        <Loader />
      </View>
    )
  }
}

export default LoadingAsync

LoadingAsync.propTypes = {}

LoadingAsync.defaultProps = {}
