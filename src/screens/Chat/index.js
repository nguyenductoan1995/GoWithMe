import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { firebase } from '@react-native-firebase/database'

class Chat extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    firebase.database().ref('foods').one('value', (snapshot) => {
      //   console.tron.log(snapshot)
      this.setState({ data: snapshot })
    })
  }

  render() {
    const { data } = this.state
    console.tron.log(data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}>
        <Text>Test</Text>
      </View>
    )
  }
}

export default Chat
