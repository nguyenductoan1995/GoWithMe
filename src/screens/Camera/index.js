import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class Camera extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  takePicture =() => {
    this.camera.takePictureAsync()
      .then((data) => { console.log(data) })
      .catch((err) => {})
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref
          }}
          style={{
            width: 200,
            height: 200,
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          permissionDialogTitle="Permission to use camera"
          permissionDialogMessage="We need your permission to use your camera phone"
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.tron.log(barcodes)
          }}
          onFacesDetected={response => console.tron.log(response)}
          onTextRecognized={response => console.tron.log(response)}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture} style={{}}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
