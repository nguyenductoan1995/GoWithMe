import React, { Component } from 'react'
import { View, Button, ImageBackground, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { setBackground } from 'actions/temp_action'
import { connect } from 'react-redux'

class Home extends Component {
  state={
    avatarSource: null,
  }

  handleButtonPress = () => {
    const options = {
      title: 'Select Avatar',
      // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    ImagePicker.showImagePicker(options, (response) => {
      console.tron.log('Response = ', response)

      if (response.didCancel) {
        console.tron.log('User cancelled image picker')
      } else if (response.error) {
        console.tron.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.tron.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        const { doSetBackground } = this.props
        doSetBackground(source)
      }
    })
  };

  render() {
    const { place } = this.props
    console.tron.log('dawdawd', place)
    return (
      <ImageBackground source={place} style={styles.uploadAvatar}>
        <Button title="Load Images" onPress={this.handleButtonPress} />
      </ImageBackground>
    )
  }
}

const mapStateToProps = ({
  tempStore,
}) => {
  const { place } = tempStore
  return {
    place,
  }
}

const mapDispatchToProps = dispatch => ({
  doSetBackground: data => dispatch(setBackground(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  uploadAvatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
})
